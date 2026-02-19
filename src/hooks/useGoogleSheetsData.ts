// Enhanced useGoogleSheetsData.ts - Cleaned Version (CapitalEfficiency removed)

import { useState, useEffect, useCallback } from "react";
import { tradingDataCache } from "../utils/smartCache";
import { logger } from "../utils/logger";

// Your existing interfaces
export interface TradingDataPoint {
  month: string;   // "Jan", "Feb", etc.
  year: number;    // 2025, 2026, etc.
  profit: number;
  trades: number;
}

export interface TradingStats {
  totalProfit: number;
  totalTrades: number;
  avgProfitPerTrade: number;
  monthlyAverage: number;
  dailyAvg: number;
  bestMonthProfit: number;
  avgPercentGain: number; // Average % gain per trade from Column T
  openPositionCount: number; // Total individual OPEN lots from Transactions tab
  monthlyData: TradingDataPoint[];
  isLiveData: boolean;
  lastUpdated: string;
}

// Portfolio Summary Interface - FIXED with all new properties
export interface PortfolioSummary {
  totalCapitalDeposited: number;
  availableUSDC: number;
  openTradingPositions: number;
  totalAccountValue: number;
  realizedProfits: number;
  profitsWithdrawn: number;
  netCapitalAtRisk: number;
  totalTrades: number; // Row 19
  avgProfitPerTrade: number; // Row 20
  totalTradingVolume: number; // Row 22
  profitsSaved?: number; // Row 23 - OPTIONAL (may not exist in old sheets)
}

// Enhanced interface extending your existing TradingStats
export interface EnhancedTradingStats extends TradingStats {
  portfolioSummary?: PortfolioSummary;
}

export const useGoogleSheetsData = () => {
  const [tradingStats, setTradingStats] = useState<EnhancedTradingStats | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cacheInfo, setCacheInfo] = useState({
    isFresh: false,
    timeUntilNextRefresh: 0,
    isRateLimited: false,
  });

  // Constants
  const CALCULATIONS_TAB = "Calculations";
  const CALCULATIONS_RANGE = "A:G";
  const PORTFOLIO_TAB = "Coinbase Balance";
  const PORTFOLIO_RANGE = "A:D";
  const TRANSACTIONS_TAB = "Transactions Raw Data";
  const TRANSACTIONS_RANGE = "T:T"; // Column T contains % Gain
  const TRANSACTIONS_ACTION_RANGE = "A:F"; // Columns A-F for filtering (Coin, Action, Price, Qty, Status, Profit)

  // Parse Coinbase Balance tab
  const parseCoinbaseBalance = useCallback(
    (rows: string[][]): PortfolioSummary | null => {
      if (!rows || rows.length < 23) return null; // Need at least 23 rows now

      try {
        const parseValue = (value: any): number => {
          if (!value) return 0;
          const str = value.toString().replace(/[$,%]/g, "").trim();
          return parseFloat(str) || 0;
        };

        return {
          availableUSDC: parseValue(rows[3]?.[1]), // Row 4, Column B
          openTradingPositions: parseValue(rows[4]?.[1]), // Row 5, Column B
          totalAccountValue: parseValue(rows[5]?.[1]), // Row 6, Column B
          totalCapitalDeposited: parseValue(rows[10]?.[1]), // Row 11, Column B
          profitsWithdrawn: parseValue(rows[11]?.[1]), // Row 12, Column B
          netCapitalAtRisk: parseValue(rows[12]?.[1]), // Row 13, Column B
          realizedProfits: parseValue(rows[17]?.[1]), // Row 18, Column B
          totalTrades: parseValue(rows[18]?.[1]), // Row 19, Column B
          avgProfitPerTrade: parseValue(rows[19]?.[1]), // Row 20, Column B
          totalTradingVolume: parseValue(rows[21]?.[1]), // Row 22, Column B
          profitsSaved: parseValue(rows[22]?.[1]), // Row 23, Column B (NEW)
        };
      } catch (error) {
        logger.error("Error parsing Coinbase Balance", error);
        return null;
      }
    },
    []
  );

  // Parse % Gain column (Column T) and calculate average
  const parsePercentGainColumn = useCallback(
    (rows: string[][]): number => {
      if (!rows || rows.length < 2) return 0;

      const percentGains: number[] = [];

      // Skip header row (index 0), process all data rows
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const cellValue = row?.[0]; // Column T is the only column fetched

        if (cellValue && cellValue.toString().trim() !== "") {
          // Parse value - could be "2.17%", "0.0217", or "2.17"
          let cleanValue = cellValue.toString().replace(/[%]/g, "").trim();
          const numValue = parseFloat(cleanValue);

          if (!isNaN(numValue) && numValue !== 0) {
            // If value is less than 1, it's likely a decimal (0.0217 = 2.17%)
            // If value is >= 1, it's already a percentage (2.17 = 2.17%)
            const percentValue = numValue < 1 ? numValue * 100 : numValue;
            percentGains.push(percentValue);
          }
        }
      }

      // Calculate average
      if (percentGains.length === 0) return 0;
      const sum = percentGains.reduce((acc, val) => acc + val, 0);
      const avg = sum / percentGains.length;

      logger.debug(`Parsed ${percentGains.length} % gains, average: ${avg.toFixed(2)}%`);
      return avg;
    },
    []
  );

  // Count net OPEN positions from Columns A-F
  // Applies same filter as LiveTransactionLog: skip rows without coin or profit
  // Excludes old/retired coins no longer actively traded
  // Net = filtered OPEN entries minus filtered CLOSE entries
  const EXCLUDED_COINS = new Set(["BTC", "FX", "NCT", "XRP"]);
  const countOpenPositions = useCallback(
    (rows: string[][]): number => {
      if (!rows || rows.length < 2) return 0;

      let openCount = 0;
      let closeCount = 0;
      for (let i = 1; i < rows.length; i++) {
        const coin = rows[i]?.[0]?.toString().trim().toUpperCase(); // Column A
        const action = rows[i]?.[1]?.toString().trim().toUpperCase(); // Column B
        const profit = rows[i]?.[5]?.toString().trim(); // Column F

        // Skip rows without coin or profit, and exclude retired coins
        if (!coin || !profit || EXCLUDED_COINS.has(coin)) continue;

        if (action === "OPEN") {
          openCount++;
        } else if (action === "CLOSE") {
          closeCount++;
        }
      }

      const netOpen = Math.max(0, openCount - closeCount);
      logger.debug(`Open positions: ${openCount} opened - ${closeCount} closed = ${netOpen} net open (excluded: ${[...EXCLUDED_COINS].join(", ")})`);
      return netOpen;
    },
    []
  );

  // Parse Calculations data with dynamic Grand Total finding
  const parseCalculationsData = useCallback(
    (rows: string[][], fetchTimestamp: string): TradingStats => {
      logger.verbose(`Rows received: ${rows?.length} rows`);

      if (!rows || rows.length < 3) {
        logger.warn(`FALLBACK: Not enough rows (need 3, got ${rows?.length})`);
        return getMockTradingStatsBase();
      }

      // Find Grand Total row (searches from bottom up)
      // FIXED: Reduced minimum column requirement from 6 to 2 (just need month + profit)
      let grandTotalRow = null;
      let grandTotalIndex = -1;

      for (let i = rows.length - 1; i >= 0; i--) {
        const row = rows[i];
        const firstCell = row?.[0]?.toString().toLowerCase() || '';
        logger.verbose(`Row ${i}: length=${row?.length}, firstCell="${row?.[0]}"`);

        if (row && row.length >= 2 && firstCell.includes("grand total")) {
          grandTotalRow = row;
          grandTotalIndex = i;
          logger.debug(`Found Grand Total at row ${i}`);
          break;
        }
      }

      if (!grandTotalRow || grandTotalRow.length < 2) {
        logger.warn("FALLBACK: Grand Total row not found or too short");
        return getMockTradingStatsBase();
      }

      // Parse Grand Total values - only totalProfit and totalTrades are here
      const totalProfit =
        parseFloat(grandTotalRow[1]?.toString().replace(/[$,]/g, "")) || 0;
      const totalTrades =
        parseInt(grandTotalRow[2]?.toString().replace(/[,]/g, "")) || 0;

      logger.debug(`Grand Total: $${totalProfit}, ${totalTrades} trades`);

      // Find calculated fields (D-G) in the most recent month row
      // These fields are ALWAYS in the current month's row, not Grand Total
      let avgProfitPerTrade = 0;
      let monthlyAverage = 0;
      let dailyAvg = 0;
      let bestMonthProfit = 0;

      // Search backwards from Grand Total to find a row with calculated fields in columns D-G
      for (let i = grandTotalIndex - 1; i >= 1; i--) {
        const row = rows[i];
        if (row && row.length >= 7) {
          const colD = parseFloat(row[3]?.toString().replace(/[$,]/g, "")) || 0;
          const colE = parseFloat(row[4]?.toString().replace(/[$,]/g, "")) || 0;
          const colF = parseFloat(row[5]?.toString().replace(/[$,]/g, "")) || 0;
          const colG = parseFloat(row[6]?.toString().replace(/[$,]/g, "")) || 0;

          // Found row with calculated fields
          if (colD > 0 || colE > 0 || colF > 0 || colG > 0) {
            avgProfitPerTrade = colD;
            monthlyAverage = colE;
            dailyAvg = colF;
            bestMonthProfit = colG;
            logger.debug(`Found calculated fields in row ${i}: ${row[0]}`);
            break;
          }
        }
      }

      if (avgProfitPerTrade === 0 && monthlyAverage === 0) {
        logger.warn("Calculated fields not found in any month row");
      }

      // Parse monthly data (all rows before Grand Total)
      const monthlyData: TradingDataPoint[] = [];
      const currentYear = new Date().getFullYear();
      logger.verbose(`Parsing monthly data, rows 1 to ${grandTotalIndex - 1}`);

      for (let i = 1; i < grandTotalIndex; i++) {
        const row = rows[i];
        if (row && row.length >= 2) {  // FIXED: Reduced from 3 to 2
          const monthRaw = row[0]?.toString().trim();
          const profit =
            parseFloat(row[1]?.toString().replace(/[$,]/g, "")) || 0;
          const trades = parseInt(row[2]?.toString().replace(/[,]/g, "")) || 0;

          // FIXED: Include months with $0 profit but valid month names (like future months)
          // Only skip truly empty/invalid rows
          if (
            monthRaw &&
            monthRaw !== "Grand Total" &&
            monthRaw !== "" &&
            !monthRaw.toLowerCase().includes("month")  // Skip header row if it slipped through
          ) {
            let shortMonth = monthRaw;
            let year = currentYear; // Default to current year

            // Handle date format like "2025-01"
            if (monthRaw.includes("-")) {
              const dateParts = monthRaw.split("-");
              if (dateParts.length >= 2) {
                year = parseInt(dateParts[0]) || currentYear;
                const monthNum = parseInt(dateParts[1]);
                const monthNames = [
                  "",
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ];
                shortMonth = monthNames[monthNum] || monthRaw;
              }
            } else if (monthRaw.length > 3) {
              shortMonth = monthRaw.substring(0, 3);
            }

            monthlyData.push({
              month: shortMonth,
              year,
              profit,
              trades,
            });
            logger.verbose(`Added month: ${shortMonth} ${year}, profit: $${profit}, trades: ${trades}`);
          }
        }
      }

      logger.tradingDataParsed(monthlyData.length, "Calculations");

      return {
        totalProfit,
        totalTrades,
        avgProfitPerTrade,
        monthlyAverage,
        dailyAvg,
        bestMonthProfit,
        avgPercentGain: 0, // Will be populated from Transactions tab
        openPositionCount: 0, // Will be populated from Transactions tab
        monthlyData,
        isLiveData: true,
        lastUpdated: fetchTimestamp,
      };
    },
    []
  );

  // Base mock trading stats - ONLY used as fallback when API fails
  const getMockTradingStatsBase = (): TradingStats => {
    // CRITICAL: This is mock data! If you see this in production, the API is failing
    logger.error("USING MOCK DATA - API parsing failed! Site is showing fallback data instead of real data.");

    // TEST DATA: Includes 2024 months to demonstrate multi-year display
    // TODO: Remove 2024 data after testing multi-year feature
    const monthlyData: TradingDataPoint[] = [
      // 2024 months (for testing multi-year display)
      { month: "Sep", year: 2024, profit: 312.45, trades: 68 },
      { month: "Oct", year: 2024, profit: 445.89, trades: 92 },
      { month: "Nov", year: 2024, profit: 523.12, trades: 105 },
      { month: "Dec", year: 2024, profit: 398.67, trades: 84 },
      // 2025 months
      { month: "Jan", year: 2025, profit: 477.23, trades: 89 },
      { month: "Feb", year: 2025, profit: 686.71, trades: 124 },
      { month: "Mar", year: 2025, profit: 261.97, trades: 67 },
      { month: "Apr", year: 2025, profit: 552.58, trades: 98 },
      { month: "May", year: 2025, profit: 376.3, trades: 82 },
      { month: "Jun", year: 2025, profit: 382.97, trades: 91 },
      { month: "Jul", year: 2025, profit: 817.31, trades: 156 },
      { month: "Aug", year: 2025, profit: 350.32, trades: 78 },
    ];

    const totalProfit = monthlyData.reduce(
      (sum, month) => sum + month.profit,
      0
    );
    const totalTrades = monthlyData.reduce(
      (sum, month) => sum + month.trades,
      0
    );

    return {
      totalProfit,  // $3,905.39 - THIS IS FAKE DATA
      totalTrades,  // 785 - THIS IS FAKE DATA
      avgProfitPerTrade: totalTrades > 0 ? totalProfit / totalTrades : 0,
      monthlyAverage:
        monthlyData.length > 0 ? totalProfit / monthlyData.length : 0,
      dailyAvg: 15.5,
      bestMonthProfit: Math.max(...monthlyData.map((m) => m.profit)),
      avgPercentGain: 2.35, // Mock average % gain
      openPositionCount: 42, // Mock open position count
      monthlyData,
      isLiveData: false,  // FALSE = mock data is being used
      lastUpdated: new Date().toISOString(),
    };
  };

  // Enhanced fetch - now pulls TWO tabs: Calculations and Coinbase Balance
  const fetchEnhancedTradingStats = useCallback(
    async (forceRefresh = false) => {
      try {
        setIsLoading(true);
        setError(null);

        const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID;
        const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
        const CACHE_KEY = "enhanced_stats";

        if (!SHEET_ID || !API_KEY) {
          const mockStats = getEnhancedMockTradingStats();
          setTradingStats(mockStats);
          setError("Using demo data - configure Google Sheets for live data");
          return;
        }

        // Check cache first (unless force refresh)
        if (!forceRefresh) {
          const cached = tradingDataCache.get(CACHE_KEY);
          if (cached && cached.openPositionCount !== undefined) {
            logger.cacheHit(CACHE_KEY, "tradingDataCache");
            setTradingStats(cached);
            setCacheInfo({
              isFresh: true,
              timeUntilNextRefresh: tradingDataCache.getTimeUntilExpiration(CACHE_KEY),
              isRateLimited: false,
            });
            setIsLoading(false);
            return;
          }
          if (cached && cached.openPositionCount === undefined) {
            logger.debug("Cache invalidated: missing openPositionCount field");
          } else {
            logger.cacheMiss(CACHE_KEY, "tradingDataCache");
          }
        }

        const fetchTimestamp = new Date().toISOString();

        // Fetch FOUR tabs: Calculations, Coinbase Balance, Transactions % Gain, and Transactions Action
        const [calculationsResponse, portfolioResponse, transactionsResponse, actionsResponse] =
          await Promise.allSettled([
            fetch(
              `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${CALCULATIONS_TAB}!${CALCULATIONS_RANGE}?key=${API_KEY}`
            ),
            fetch(
              `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${PORTFOLIO_TAB}!${PORTFOLIO_RANGE}?key=${API_KEY}`
            ),
            fetch(
              `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${TRANSACTIONS_TAB}!${TRANSACTIONS_RANGE}?key=${API_KEY}`
            ),
            fetch(
              `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${TRANSACTIONS_TAB}!${TRANSACTIONS_ACTION_RANGE}?key=${API_KEY}`
            ),
          ]);

        // Parse calculations data
        logger.debug(`Calculations API response status: ${calculationsResponse.status}`);
        const calculationsData =
          calculationsResponse.status === "fulfilled"
            ? await calculationsResponse.value.json()
            : null;

        if (!calculationsData) {
          logger.error("Calculations API call failed completely");
        } else {
          logger.tradingDataFetch("Google Sheets Calculations", calculationsData.values?.length);
        }

        const originalStats = calculationsData?.values
          ? parseCalculationsData(calculationsData.values, fetchTimestamp)
          : getMockTradingStatsBase();

        // Log whether we got live or mock data
        logger.info(`Using ${originalStats.isLiveData ? "LIVE DATA" : "MOCK DATA"}`);

        // Parse portfolio data
        const portfolioData =
          portfolioResponse.status === "fulfilled"
            ? await portfolioResponse.value.json()
            : null;
        const portfolioSummary = portfolioData
          ? parseCoinbaseBalance(portfolioData.values || [])
          : null;

        // Parse transactions data for average % gain
        const transactionsData =
          transactionsResponse.status === "fulfilled"
            ? await transactionsResponse.value.json()
            : null;
        const avgPercentGain = transactionsData?.values
          ? parsePercentGainColumn(transactionsData.values)
          : 0;

        // Parse actions data for open position count
        const actionsData =
          actionsResponse.status === "fulfilled"
            ? await actionsResponse.value.json()
            : null;
        const openPositionCount = actionsData?.values
          ? countOpenPositions(actionsData.values)
          : 0;

        const enhancedStats: EnhancedTradingStats = {
          ...originalStats,
          avgPercentGain, // Override with calculated value
          openPositionCount, // Override with counted value
          portfolioSummary: portfolioSummary || undefined,
        };

        // Cache the fresh data
        tradingDataCache.set(CACHE_KEY, enhancedStats);
        logger.cacheSet(CACHE_KEY);

        setTradingStats(enhancedStats);
        setCacheInfo({
          isFresh: true,
          timeUntilNextRefresh: tradingDataCache.getTimeUntilExpiration(CACHE_KEY),
          isRateLimited: false,
        });
      } catch (error) {
        logger.error("Error fetching enhanced trading stats", error);
        setError(
          error instanceof Error ? error.message : "Failed to load trading data"
        );
        const mockStats = getEnhancedMockTradingStats();
        setTradingStats(mockStats);
      } finally {
        setIsLoading(false);
      }
    },
    [parseCalculationsData, parseCoinbaseBalance, parsePercentGainColumn, countOpenPositions]
  );

  // Enhanced mock data - ONLY used when API completely fails
  const getEnhancedMockTradingStats = (): EnhancedTradingStats => {
    logger.debug("Using mock data with 2024+2025 for multi-year test");

    // TEST DATA: Includes 2024 months to demonstrate multi-year display
    // Recent Performance will show last 6 (Jul-Dec 2025)
    // Previous Months will show 2024 (4 months) + early 2025 (6 months)
    const monthlyData: TradingDataPoint[] = [
      // 2024 months (will appear in Previous Months)
      { month: "Sep", year: 2024, profit: 312.45, trades: 68 },
      { month: "Oct", year: 2024, profit: 445.89, trades: 92 },
      { month: "Nov", year: 2024, profit: 523.12, trades: 105 },
      { month: "Dec", year: 2024, profit: 398.67, trades: 84 },
      // 2025 months - Jan-Jun will be in Previous Months, Jul-Dec in Recent Performance
      { month: "Jan", year: 2025, profit: 477.23, trades: 89 },
      { month: "Feb", year: 2025, profit: 686.71, trades: 124 },
      { month: "Mar", year: 2025, profit: 261.97, trades: 67 },
      { month: "Apr", year: 2025, profit: 552.58, trades: 98 },
      { month: "May", year: 2025, profit: 376.30, trades: 82 },
      { month: "Jun", year: 2025, profit: 382.97, trades: 91 },
      { month: "Jul", year: 2025, profit: 817.31, trades: 156 },
      { month: "Aug", year: 2025, profit: 350.32, trades: 78 },
      { month: "Sep", year: 2025, profit: 425.60, trades: 88 },
      { month: "Oct", year: 2025, profit: 512.45, trades: 102 },
      { month: "Nov", year: 2025, profit: 389.20, trades: 76 },
      { month: "Dec", year: 2025, profit: 298.50, trades: 62 },
    ];

    const totalProfit = monthlyData.reduce(
      (sum, month) => sum + month.profit,
      0
    );
    const totalTrades = monthlyData.reduce(
      (sum, month) => sum + month.trades,
      0
    );

    return {
      totalProfit,
      totalTrades,
      avgProfitPerTrade: totalTrades > 0 ? totalProfit / totalTrades : 0,
      monthlyAverage:
        monthlyData.length > 0 ? totalProfit / monthlyData.length : 0,
      dailyAvg: 15.5,
      bestMonthProfit: 686.71,
      avgPercentGain: 2.35, // Mock average % gain
      openPositionCount: 42, // Mock open position count
      monthlyData,
      isLiveData: false,
      lastUpdated: new Date().toISOString(),
      portfolioSummary: undefined,
    };
  };

  useEffect(() => {
    fetchEnhancedTradingStats();
  }, [fetchEnhancedTradingStats]);

  return {
    tradingStats,
    isLoading,
    error,
    refreshStats: () => fetchEnhancedTradingStats(true),
    cacheInfo,
    cacheStats: tradingDataCache?.getStats?.() || {
      hits: 0,
      misses: 0,
      size: 0,
    },
  };
};
