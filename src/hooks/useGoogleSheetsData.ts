// src/hooks/useGoogleSheetsData.ts - UPDATED VERSION
// Add Records interface and reading capability

import { useState, useEffect, useCallback } from "react";
import { tradingDataCache } from "../utils/smartCache";

// Existing interfaces
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

export interface PortfolioSummary {
  availableUSDC: number;
  openTradingPositions: number;
  totalAccountValue: number;
  totalCapitalDeployed: number;
  profitsWithdrawn: number;
  netCapitalAtRisk: number;
  realizedProfits: number;
}

// NEW: Trophy Records interface
export interface TradingRecord {
  type: "day" | "week" | "month";
  amount: number;
  date: string;
  trades: number;
  period: string;
  previous: number;
  beatBy: number;
  lastUpdated: string;
}

export interface TradingRecords {
  bestDay: TradingRecord | null;
  bestWeek: TradingRecord | null;
  bestMonth: TradingRecord | null;
}

// Add to main hook return
export interface UseGoogleSheetsDataReturn {
  tradingStats: TradingStats | null;
  portfolioSummary: PortfolioSummary | null;
  tradingRecords: TradingRecords | null; // NEW
  isLoading: boolean;
  error: string | null;
  cacheInfo: {
    isFresh: boolean;
    timeUntilNextRefresh: number;
    isRateLimited: boolean;
  };
}

export const useGoogleSheetsData = (): UseGoogleSheetsDataReturn => {
  const [tradingStats, setTradingStats] = useState<TradingStats | null>(null);
  const [portfolioSummary, setPortfolioSummary] =
    useState<PortfolioSummary | null>(null);
  const [tradingRecords, setTradingRecords] = useState<TradingRecords | null>(
    null
  ); // NEW
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cacheInfo, setCacheInfo] = useState({
    isFresh: false,
    timeUntilNextRefresh: 0,
    isRateLimited: false,
  });

  const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID;
  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

  // NEW: Parse Records tab data
  const parseRecordsData = useCallback(
    (rows: string[][]): TradingRecords | null => {
      if (!rows || rows.length < 5) {
        console.log("Records tab: Not enough rows");
        return null;
      }

      try {
        // Row 3 = Best Day, Row 4 = Best Week, Row 5 = Best Month
        // Columns: A=Type, B=Amount, C=Date, D=Trades, E=Period, F=Previous, G=Beat By, H=Last Updated

        const parseRecord = (
          row: string[],
          type: "day" | "week" | "month"
        ): TradingRecord | null => {
          if (!row || row.length < 8) return null;

          const amount =
            parseFloat((row[1] || "0").toString().replace(/[$,]/g, "")) || 0;
          const trades =
            parseInt((row[3] || "0").toString().replace(/[,]/g, "")) || 0;
          const previous =
            parseFloat((row[5] || "0").toString().replace(/[$,]/g, "")) || 0;
          const beatBy =
            parseFloat((row[6] || "0").toString().replace(/[$,]/g, "")) || 0;

          if (amount === 0) return null;

          return {
            type,
            amount,
            date: row[2]?.toString() || "N/A",
            trades,
            period: row[4]?.toString() || "N/A",
            previous,
            beatBy,
            lastUpdated: row[7]?.toString() || "N/A",
          };
        };

        return {
          bestDay: parseRecord(rows[2], "day"),
          bestWeek: parseRecord(rows[3], "week"),
          bestMonth: parseRecord(rows[4], "month"),
        };
      } catch (error) {
        console.error("Error parsing Records data:", error);
        return null;
      }
    },
    []
  );

  // Existing parseCalculationsData function (keep as is)
  const parseCalculationsData = useCallback(
    (rows: string[][], fetchTimestamp: string): TradingStats => {
      if (!rows || rows.length < 3) {
        return getMockTradingStatsBase();
      }

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

      const monthlyData: TradingDataPoint[] = [];
      let bestMonthProfit = 0;

      for (let i = 0; i < grandTotalIndex; i++) {
        const row = rows[i];
        if (!row || row.length < 3) continue;

        const month = row[0]?.toString().trim();
        if (!month || month === "" || month.toLowerCase().includes("month"))
          continue;

        const profit = parseFloat(row[1]?.toString().replace(/[$,]/g, "")) || 0;
        const trades = parseInt(row[2]?.toString().replace(/[,]/g, "")) || 0;

        if (profit > 0) {
          monthlyData.push({ month, profit, trades });
          if (profit > bestMonthProfit) {
            bestMonthProfit = profit;
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

  // Existing parseCoinbaseBalanceData function (keep as is)
  const parseCoinbaseBalanceData = useCallback(
    (rows: string[][]): PortfolioSummary | null => {
      if (!rows || rows.length < 18) {
        return null;
      }

      try {
        const parseValue = (value: any): number => {
          if (value === null || value === undefined || value === "") return 0;
          const cleaned = value.toString().replace(/[$,]/g, "");
          return parseFloat(cleaned) || 0;
        };

        return {
          availableUSDC: parseValue(rows[3]?.[1]),
          openTradingPositions: parseValue(rows[4]?.[1]),
          totalAccountValue: parseValue(rows[5]?.[1]),
          totalCapitalDeployed: parseValue(rows[10]?.[1]),
          profitsWithdrawn: parseValue(rows[11]?.[1]),
          netCapitalAtRisk: parseValue(rows[12]?.[1]),
          realizedProfits: parseValue(rows[17]?.[1]),
        };
      } catch (error) {
        console.error("Error parsing Coinbase Balance:", error);
        return null;
      }
    },
    []
  );

  // Mock data generator (keep as is)
  const getMockTradingStatsBase = (): TradingStats => ({
    totalProfit: 4169.18,
    totalTrades: 875,
    avgProfitPerTrade: 4.76,
    monthlyAverage: 463.24,
    dailyAvg: 15.44,
    bestMonthProfit: 1247.83,
    monthlyData: [],
    isLiveData: false,
    lastUpdated: new Date().toISOString(),
  });

  // Main fetch function - UPDATED to include Records
  const fetchData = useCallback(async () => {
    if (!SHEET_ID || !API_KEY) {
      setError("Missing Google Sheets configuration");
      setIsLoading(false);
      return;
    }

    const cacheKey = `all-sheets-data-${SHEET_ID}`;
    const cached = tradingDataCache.get(cacheKey);

    if (cached) {
      setTradingStats(cached.stats);
      setPortfolioSummary(cached.portfolio);
      setTradingRecords(cached.records); // NEW
      setCacheInfo({
        isFresh: true,
        timeUntilNextRefresh: tradingDataCache.getTimeUntilExpiration(cacheKey),
        isRateLimited: false,
      });
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      const fetchTimestamp = new Date().toISOString();

      // Fetch all tabs in parallel
      const [calculationsResponse, coinbaseResponse, recordsResponse] =
        await Promise.all([
          fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Calculations!A:G?key=${API_KEY}`
          ),
          fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Coinbase%20Balance!A:B?key=${API_KEY}`
          ),
          fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Records!A:H?key=${API_KEY}`
          ),
        ]);

      if (!calculationsResponse.ok || !coinbaseResponse.ok) {
        throw new Error("Failed to fetch data");
      }

      const [calculationsData, coinbaseData, recordsData] = await Promise.all([
        calculationsResponse.json(),
        coinbaseResponse.json(),
        recordsResponse.ok ? recordsResponse.json() : null,
      ]);

      const stats = parseCalculationsData(
        calculationsData.values || [],
        fetchTimestamp
      );
      const portfolio = parseCoinbaseBalanceData(coinbaseData.values || []);
      const records = recordsData?.values
        ? parseRecordsData(recordsData.values)
        : null;

      // Cache all data together
      tradingDataCache.set(cacheKey, {
        stats,
        portfolio,
        records,
      });

      setTradingStats(stats);
      setPortfolioSummary(portfolio);
      setTradingRecords(records);
      setCacheInfo({
        isFresh: false,
        timeUntilNextRefresh: tradingDataCache.getTimeUntilExpiration(cacheKey),
        isRateLimited: false,
      });
      setError(null);
    } catch (err) {
      console.error("Error fetching Google Sheets data:", err);
      setError("Failed to load data");
    } finally {
      setIsLoading(false);
    }
  }, [
    SHEET_ID,
    API_KEY,
    parseCalculationsData,
    parseCoinbaseBalanceData,
    parseRecordsData,
  ]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    tradingStats,
    portfolioSummary,
    tradingRecords, // NEW
    isLoading,
    error,
    cacheInfo,
  };
};
