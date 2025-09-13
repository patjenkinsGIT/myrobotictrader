import { useState, useEffect, useCallback } from "react";
import { tradingDataCache } from "../utils/smartCache";

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

// Enhanced hook with smart caching
export const useGoogleSheetsData = () => {
  const [tradingStats, setTradingStats] = useState<TradingStats | null>(null);
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

  // Mock data for fallback
  const getMockTradingStats = (): TradingStats => {
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
    const avgProfitPerTrade = totalTrades > 0 ? totalProfit / totalTrades : 0;
    const monthlyAverage =
      monthlyData.length > 0 ? totalProfit / monthlyData.length : 0;
    const dailyAvg =
      getDaysSinceStart() > 0 ? totalProfit / getDaysSinceStart() : 0;
    const bestMonthProfit = Math.max(...monthlyData.map((m) => m.profit));

    return {
      totalProfit,
      totalTrades,
      avgProfitPerTrade,
      monthlyAverage,
      dailyAvg,
      bestMonthProfit,
      monthlyData,
      isLiveData: false,
      lastUpdated: new Date().toISOString(),
    };
  };

  // Parse Google Sheets data with proper timestamp handling
  const parseCalculationsData = (
    rows: string[][],
    fetchTimestamp: string
  ): TradingStats => {
    let monthlyData: TradingDataPoint[] = [];
    let totalProfit = 0;
    let totalTrades = 0;
    let avgProfitPerTrade = 0;
    let dailyAvg = 0;
    let bestMonthProfit = 0;
    let monthlyAverage = 0;

    // Parse monthly data (rows 1-9, skipping header row 0)
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];

      if (!row[0] || row[0].includes("Grand Total")) {
        if (row[0] && row[0].includes("Grand Total")) {
          totalProfit = parseFloat(row[1]?.replace(/[$,]/g, "") || "0");
          totalTrades = parseInt(row[2]?.replace(/[,]/g, "") || "0");
        }
        continue;
      }

      const monthStr = row[0]; // "2025-01"
      const profit = parseFloat(row[1]?.replace(/[$,]/g, "") || "0");
      const trades = parseInt(row[2]?.replace(/[,]/g, "") || "0");

      if (monthStr && profit > 0) {
        const monthNum = monthStr.split("-")[1];
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
        const monthName = monthNames[parseInt(monthNum)] || monthStr;

        monthlyData.push({
          month: monthName,
          profit: profit,
          trades: trades,
        });
      }
    }

    // Look for calculated fields in the sheet
    rows.forEach((row) => {
      if (row[0] === "Avg Profit / Trade") {
        avgProfitPerTrade = parseFloat(row[1]?.replace(/[$,]/g, "") || "0");
      }
      if (row[0] === "Monthly Avg") {
        monthlyAverage = parseFloat(row[1]?.replace(/[$,]/g, "") || "0");
      }
      if (row[0] === "Daily Avg") {
        dailyAvg = parseFloat(row[1]?.replace(/[$,]/g, "") || "0");
      }
      if (row[0] === "Best Month") {
        bestMonthProfit = parseFloat(row[1]?.replace(/[$,]/g, "") || "0");
      }
    });

    // Calculate missing values if not found in sheet
    if (monthlyData.length > 0) {
      if (monthlyAverage === 0) {
        monthlyAverage =
          monthlyData.reduce((sum, month) => sum + month.profit, 0) /
          monthlyData.length;
      }

      if (dailyAvg === 0) {
        const actualTradingDays = getDaysSinceStart();
        dailyAvg =
          actualTradingDays > 0
            ? totalProfit / actualTradingDays
            : monthlyAverage / 30;
      }

      if (bestMonthProfit === 0) {
        bestMonthProfit = Math.max(...monthlyData.map((m) => m.profit));
      }

      if (avgProfitPerTrade === 0 && totalProfit > 0 && totalTrades > 0) {
        avgProfitPerTrade = totalProfit / totalTrades;
      }

      return {
        totalProfit,
        totalTrades,
        avgProfitPerTrade,
        monthlyAverage,
        monthlyData,
        dailyAvg,
        bestMonthProfit,
        lastUpdated: fetchTimestamp,
        isLiveData: true,
      };
    } else {
      return getMockTradingStats();
    }
  };

  // Fetch trading stats with smart caching
  const fetchTradingStats = useCallback(async (forceRefresh = false) => {
    try {
      setIsLoading(true);
      setError(null);

      const SHEET_ID =
        import.meta.env.VITE_GOOGLE_SHEET_ID ||
        import.meta.env?.VITE_GOOGLE_SHEET_ID ||
        (globalThis as any).VITE_GOOGLE_SHEET_ID;

      const API_KEY =
        import.meta.env.VITE_GOOGLE_API_KEY ||
        import.meta.env?.VITE_GOOGLE_API_KEY ||
        (globalThis as any).VITE_GOOGLE_API_KEY;

      // If no credentials, use mock data
      if (!SHEET_ID || !API_KEY) {
        const mockStats = getMockTradingStats();
        setTradingStats(mockStats);
        setError("Using demo data - configure Google Sheets for live data");
        return;
      }

      // Use smart caching for the API call
      const cacheKey = `${SHEET_ID}_${CALCULATIONS_TAB}_${CALCULATIONS_RANGE}`;

      let data;
      let isFromCache = false;

      if (!forceRefresh) {
        data = tradingDataCache.get(cacheKey);
        isFromCache = !!data;
      }

      if (!data) {
        // Cache miss or force refresh - fetch fresh data
        const fetchTimestamp = new Date().toISOString();

        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${CALCULATIONS_TAB}!${CALCULATIONS_RANGE}?key=${API_KEY}`
        );
        const rawData = await response.json();

        if (!rawData.values || rawData.values.length === 0) {
          throw new Error("No data found in Calculations tab");
        }

        data = parseCalculationsData(rawData.values, fetchTimestamp);
        tradingDataCache.set(cacheKey, data);
      }

      setCacheInfo({
        isFresh: isFromCache,
        timeUntilNextRefresh: 0,
        isRateLimited: false,
      });

      setTradingStats(data);
    } catch (error) {
      console.error("Error fetching trading stats:", error);
      setError(error instanceof Error ? error.message : "Failed to fetch data");

      // Fallback to mock data on error
      const mockStats = getMockTradingStats();
      setTradingStats(mockStats);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Update cache info
  const updateCacheInfo = useCallback(() => {
    const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID;
    const cacheKey = `${SHEET_ID}_${CALCULATIONS_TAB}_${CALCULATIONS_RANGE}`;
    const cachedData = tradingDataCache.get(cacheKey);

    setCacheInfo({
      isFresh: !!cachedData,
      timeUntilNextRefresh: 0,
      isRateLimited: false,
    });
  }, [CALCULATIONS_TAB, CALCULATIONS_RANGE]);

  // Refresh stats (respects cache)
  const refreshStats = useCallback(() => {
    fetchTradingStats(false);
  }, [fetchTradingStats]);

  // Force refresh (bypasses cache)
  const forceRefresh = useCallback(() => {
    fetchTradingStats(true);
  }, [fetchTradingStats]);

  // Initial load
  useEffect(() => {
    fetchTradingStats();
  }, [fetchTradingStats]);

  // Update cache info periodically
  useEffect(() => {
    updateCacheInfo();
    const interval = setInterval(updateCacheInfo, 60000);
    return () => clearInterval(interval);
  }, [updateCacheInfo]);

  // Auto-refresh every 30 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      fetchTradingStats(false);
    }, 30 * 60 * 1000);

    return () => clearInterval(interval);
  }, [fetchTradingStats]);

  return {
    tradingStats,
    isLoading,
    error,
    refreshStats,
    forceRefresh,
    cacheInfo,
    cacheStats: tradingDataCache.getStats(),
  };
};

// Helper function to calculate days since trading started
function getDaysSinceStart(): number {
  const startDate = new Date("2025-01-08");
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
