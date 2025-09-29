// Enhanced useGoogleSheetsData.ts - Cleaned Version (CapitalEfficiency removed)

import { useState, useEffect, useCallback } from "react";
import { tradingDataCache } from "../utils/smartCache";

// Your existing interfaces
export interface TradingDataPoint {
  month: string;
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
  monthlyData: TradingDataPoint[];
  isLiveData: boolean;
  lastUpdated: string;
}

// Portfolio Summary Interface
export interface PortfolioSummary {
  totalCapitalDeposited: number;
  availableUSDC: number;
  openTradingPositions: number;
  totalAccountValue: number;
  realizedProfits: number;
  profitsWithdrawn: number;
  netCapitalAtRisk: number;
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

  // Parse Coinbase Balance tab
  const parseCoinbaseBalance = useCallback(
    (rows: string[][]): PortfolioSummary | null => {
      if (!rows || rows.length < 20) return null;

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
        };
      } catch (error) {
        console.error("Error parsing Coinbase Balance:", error);
        return null;
      }
    },
    []
  );

  // Parse Calculations data with dynamic Grand Total finding
  const parseCalculationsData = useCallback(
    (rows: string[][], fetchTimestamp: string): TradingStats => {
      if (!rows || rows.length < 3) {
        return getMockTradingStatsBase();
      }

      // Find Grand Total row (searches from bottom up)
      let grandTotalRow = null;
      let grandTotalIndex = -1;

      for (let i = rows.length - 1; i >= 0; i--) {
        const row = rows[i];
        if (
          row &&
          row.length >= 6 &&
          row[0]?.toString().toLowerCase().includes("grand total")
        ) {
          grandTotalRow = row;
          grandTotalIndex = i;
          break;
        }
      }

      if (!grandTotalRow || grandTotalRow.length < 6) {
        return getMockTradingStatsBase();
      }

      const totalProfit =
        parseFloat(grandTotalRow[1]?.toString().replace(/[$,]/g, "")) || 0;
      const totalTrades =
        parseInt(grandTotalRow[2]?.toString().replace(/[,]/g, "")) || 0;
      const avgProfitPerTrade =
        parseFloat(grandTotalRow[3]?.toString().replace(/[$,]/g, "")) || 0;
      const monthlyAverage =
        parseFloat(grandTotalRow[4]?.toString().replace(/[$,]/g, "")) || 0;
      const dailyAvg =
        parseFloat(grandTotalRow[5]?.toString().replace(/[$,]/g, "")) || 0;
      const bestMonthProfit =
        parseFloat(grandTotalRow[6]?.toString().replace(/[$,]/g, "")) || 0;

      // Parse monthly data (all rows before Grand Total)
      const monthlyData: TradingDataPoint[] = [];

      for (let i = 1; i < grandTotalIndex; i++) {
        const row = rows[i];
        if (row && row.length >= 3) {
          const monthRaw = row[0]?.toString().trim();
          const profit =
            parseFloat(row[1]?.toString().replace(/[$,]/g, "")) || 0;
          const trades = parseInt(row[2]?.toString().replace(/[,]/g, "")) || 0;

          if (
            monthRaw &&
            monthRaw !== "Grand Total" &&
            monthRaw !== "" &&
            profit > 0
          ) {
            let shortMonth = monthRaw;

            // Handle date format like "2025-01"
            if (monthRaw.includes("-")) {
              const dateParts = monthRaw.split("-");
              if (dateParts.length >= 2) {
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
              profit,
              trades,
            });
          }
        }
      }

      return {
        totalProfit,
        totalTrades,
        avgProfitPerTrade,
        monthlyAverage,
        dailyAvg,
        bestMonthProfit,
        monthlyData,
        isLiveData: true,
        lastUpdated: fetchTimestamp,
      };
    },
    []
  );

  // Base mock trading stats
  const getMockTradingStatsBase = (): TradingStats => {
    const monthlyData: TradingDataPoint[] = [
      { month: "Jan", profit: 477.23, trades: 89 },
      { month: "Feb", profit: 686.71, trades: 124 },
      { month: "Mar", profit: 261.97, trades: 67 },
      { month: "Apr", profit: 552.58, trades: 98 },
      { month: "May", profit: 376.3, trades: 82 },
      { month: "Jun", profit: 382.97, trades: 91 },
      { month: "Jul", profit: 817.31, trades: 156 },
      { month: "Aug", profit: 350.32, trades: 78 },
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
      bestMonthProfit: Math.max(...monthlyData.map((m) => m.profit)),
      monthlyData,
      isLiveData: false,
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

        if (!SHEET_ID || !API_KEY) {
          const mockStats = getEnhancedMockTradingStats();
          setTradingStats(mockStats);
          setError("Using demo data - configure Google Sheets for live data");
          return;
        }

        const fetchTimestamp = new Date().toISOString();

        // Fetch TWO tabs: Calculations and Coinbase Balance
        const [calculationsResponse, portfolioResponse] =
          await Promise.allSettled([
            fetch(
              `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${CALCULATIONS_TAB}!${CALCULATIONS_RANGE}?key=${API_KEY}`
            ),
            fetch(
              `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${PORTFOLIO_TAB}!${PORTFOLIO_RANGE}?key=${API_KEY}`
            ),
          ]);

        // Parse calculations data
        const calculationsData =
          calculationsResponse.status === "fulfilled"
            ? await calculationsResponse.value.json()
            : null;
        const originalStats = calculationsData
          ? parseCalculationsData(calculationsData.values || [], fetchTimestamp)
          : getMockTradingStatsBase();

        // Parse portfolio data
        const portfolioData =
          portfolioResponse.status === "fulfilled"
            ? await portfolioResponse.value.json()
            : null;
        const portfolioSummary = portfolioData
          ? parseCoinbaseBalance(portfolioData.values || [])
          : null;

        const enhancedStats: EnhancedTradingStats = {
          ...originalStats,
          portfolioSummary: portfolioSummary || undefined,
        };

        setTradingStats(enhancedStats);
        setCacheInfo({
          isFresh: !forceRefresh,
          timeUntilNextRefresh: 0,
          isRateLimited: false,
        });
      } catch (error) {
        console.error("Error fetching enhanced trading stats:", error);
        setError(
          error instanceof Error ? error.message : "Failed to load trading data"
        );
        const mockStats = getEnhancedMockTradingStats();
        setTradingStats(mockStats);
      } finally {
        setIsLoading(false);
      }
    },
    [parseCalculationsData, parseCoinbaseBalance]
  );

  // Enhanced mock data
  const getEnhancedMockTradingStats = (): EnhancedTradingStats => {
    const monthlyData: TradingDataPoint[] = [
      { month: "Jan", profit: 477.23, trades: 89 },
      { month: "Feb", profit: 686.71, trades: 124 },
      { month: "Mar", profit: 261.97, trades: 67 },
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
