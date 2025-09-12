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

  // Environment variables
  const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID;
  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
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

  // Parse Google Sheets data
  const parseCalculationsData = (rows: string[][]): TradingStats => {
    console.log("🔍 Parsing Calculations data - Total rows:", rows.length);

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
          console.log(
            "💰 Found Grand Total - Profit:",
            totalProfit,
            "Trades:",
            totalTrades
          );
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
        console.log(
          `📅 Added month data: ${monthName} = $${profit} (${trades} trades)`
        );
      }
    }

    // Look for calculated fields in the sheet
    rows.forEach((row, index) => {
      if (row[0] === "Avg Profit / Trade") {
        avgProfitPerTrade = parseFloat(row[1]?.replace(/[$,]/g, "") || "0");
        console.log(
          `📈 Found Avg Profit/Trade in row ${index}:`,
          avgProfitPerTrade
        );
      }
      if (row[0] === "Monthly Avg") {
        monthlyAverage = parseFloat(row[1]?.replace(/[$,]/g, "") || "0");
        console.log(`📊 Found Monthly Avg in row ${index}:`, monthlyAverage);
      }
      if (row[0] === "Daily Avg") {
        dailyAvg = parseFloat(row[1]?.replace(/[$,]/g, "") || "0");
        console.log(`📊 Found Daily Avg in row ${index}:`, dailyAvg);
      }
      if (row[0] === "Best Month") {
        bestMonthProfit = parseFloat(row[1]?.replace(/[$,]/g, "") || "0");
        console.log(`🏆 Found Best Month in row ${index}:`, bestMonthProfit);
      }
    });

    // Calculate missing values if not found in sheet
    if (monthlyData.length > 0) {
      if (monthlyAverage === 0) {
        monthlyAverage =
          monthlyData.reduce((sum, month) => sum + month.profit, 0) /
          monthlyData.length;
        console.log(`📊 Calculated Monthly Average: ${monthlyAverage}`);
      }

      if (dailyAvg === 0) {
        const actualTradingDays = getDaysSinceStart();
        dailyAvg =
          actualTradingDays > 0
            ? totalProfit / actualTradingDays
            : monthlyAverage / 30;
        console.log(
          `📊 Calculated Daily Avg based on ${actualTradingDays} actual trading days: ${dailyAvg}`
        );
      }

      if (bestMonthProfit === 0) {
        bestMonthProfit = Math.max(...monthlyData.map((m) => m.profit));
        console.log(`🏆 Calculated Best Month: ${bestMonthProfit}`);
      }

      if (avgProfitPerTrade === 0 && totalProfit > 0 && totalTrades > 0) {
        avgProfitPerTrade = totalProfit / totalTrades;
        console.log(`📈 Calculated Avg Profit/Trade: ${avgProfitPerTrade}`);
      }

      const finalStats = {
        totalProfit,
        totalTrades,
        avgProfitPerTrade,
        monthlyAverage,
        monthlyData,
        dailyAvg,
        bestMonthProfit,
        lastUpdated: new Date().toISOString(),
        isLiveData: true,
      };

      console.log("📊 Final parsed stats:", finalStats);
      return finalStats;
    } else {
      console.warn("⚠️ No monthly data found, using fallback");
      return getMockTradingStats();
    }
  };

  // Add this right at the start of fetchTradingStats function
  console.log("🔍 Environment Debug:", {
    SHEET_ID: import.meta.env.VITE_GOOGLE_SHEET_ID,
    API_KEY: import.meta.env.VITE_GOOGLE_API_KEY ? "Present" : "Missing",
    SHEET_ID_exists: !!import.meta.env.VITE_GOOGLE_SHEET_ID,
    API_KEY_exists: !!import.meta.env.VITE_GOOGLE_API_KEY,
  });

  // Fetch trading stats with smart caching
  const fetchTradingStats = useCallback(
    async (forceRefresh = false) => {
      try {
        setIsLoading(true);
        setError(null);

        console.log("🔄 Fetching trading stats with smart caching...");
        console.log("📊 Sheet ID available:", !!SHEET_ID);
        console.log("🔑 API Key available:", !!API_KEY);

        // If no credentials, use mock data
        if (!SHEET_ID || !API_KEY) {
          console.warn("⚠️ No Google Sheets credentials - using mock data");
          const mockStats = getMockTradingStats();
          setTradingStats(mockStats);
          setError("Using demo data - configure Google Sheets for live data");
          return;
        }

        // Use smart caching for the API call
        const cacheKey = `${SHEET_ID}_${CALCULATIONS_TAB}_${CALCULATIONS_RANGE}`;
        let data;

        if (!forceRefresh) {
          data = tradingDataCache.get(cacheKey);
        }

        if (!data) {
          // Cache miss or force refresh - fetch fresh data
          const response = await fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${CALCULATIONS_TAB}!${CALCULATIONS_RANGE}?key=${API_KEY}`
          );
          const rawData = await response.json();

          if (!rawData.values || rawData.values.length === 0) {
            throw new Error("No data found in Calculations tab");
          }

          data = parseCalculationsData(rawData.values);
          tradingDataCache.set(cacheKey, data);
        }

        setTradingStats(data);
      } catch (error) {
        console.error("❌ Error fetching trading stats:", error);
        setError(
          error instanceof Error ? error.message : "Failed to fetch data"
        );

        // Fallback to mock data on error
        const mockStats = getMockTradingStats();
        setTradingStats(mockStats);
      } finally {
        setIsLoading(false);
      }
    },
    [
      SHEET_ID,
      API_KEY,
      CALCULATIONS_TAB,
      CALCULATIONS_RANGE,
      parseCalculationsData,
    ]
  );

  // Update cache info
  const updateCacheInfo = useCallback(() => {
    const cacheKey = `sheets_${SHEET_ID}_${CALCULATIONS_TAB}!${CALCULATIONS_RANGE}`;
    const timeUntilNext = tradingDataCache.getTimeUntilNextRequest(cacheKey);

    setCacheInfo({
      isFresh: timeUntilNext === 0,
      timeUntilNextRefresh: timeUntilNext,
      isRateLimited: false, // Our simple cache doesn't track rate limiting
    });
  }, [SHEET_ID, CALCULATIONS_TAB, CALCULATIONS_RANGE]);

  // Refresh stats (respects cache)
  const refreshStats = useCallback(() => {
    console.log("🔄 Refreshing trading stats (respects cache)...");
    fetchTradingStats(false);
  }, [fetchTradingStats]);

  // Force refresh (bypasses cache)
  const forceRefresh = useCallback(() => {
    console.log("🔄 Force refreshing trading stats (bypasses cache)...");
    fetchTradingStats(true);
  }, [fetchTradingStats]);

  // Initial load
  useEffect(() => {
    fetchTradingStats();
  }, [fetchTradingStats]);

  // Update cache info periodically
  useEffect(() => {
    updateCacheInfo();
    const interval = setInterval(updateCacheInfo, 60000); // Update every minute
    return () => clearInterval(interval);
  }, [updateCacheInfo]);

  // Auto-refresh every 30 minutes (but will use cache if within 4 hours)
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("⏰ Auto-refresh check (will use cache if valid)");
      fetchTradingStats(false); // Don't show loading for auto-refresh
    }, 30 * 60 * 1000); // 30 minutes

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
