import { useState, useEffect, useCallback } from "react";

// Shared interface for both components
export interface TradingDataPoint {
  month: string;
  profit: number;
}

export interface TradingStats {
  totalProfit: number;
  totalTrades: number;
  avgProfitPerTrade: number;
  monthlyAverage: number;
  monthlyData: TradingDataPoint[];
  lastUpdated: string;
  isLiveData: boolean;
  dailyAvg: number;
  bestMonthProfit: number;
}

export const useGoogleSheetsData = () => {
  const [tradingStats, setTradingStats] = useState<TradingStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // FIXED: Check all possible environment variable names
  const SHEET_ID =
    import.meta.env.VITE_GOOGLE_SHEET_ID ||
    import.meta.env.GOOGLE_SHEET_ID ||
    (typeof window !== "undefined" && (window as any).VITE_GOOGLE_SHEET_ID) ||
    (typeof window !== "undefined" && (window as any).GOOGLE_SHEET_ID);

  const API_KEY =
    import.meta.env.VITE_GOOGLE_API_KEY ||
    import.meta.env.GOOGLE_API_KEY ||
    (typeof window !== "undefined" && (window as any).VITE_GOOGLE_API_KEY) ||
    (typeof window !== "undefined" && (window as any).GOOGLE_API_KEY);

  const CALCULATIONS_TAB = "Calculations";
  const CALCULATIONS_RANGE = "A:G";

  const fetchTradingStats = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      console.log("🔄 Fetching trading stats from Calculations tab...");
      console.log("📊 Sheet ID available:", !!SHEET_ID);
      console.log("🔑 API Key available:", !!API_KEY);

      // If no credentials, use fallback data for development
      if (!SHEET_ID || !API_KEY) {
        console.warn("⚠️ No Google Sheets credentials - using fallback data");
        const fallbackStats = getFallbackTradingStats();
        setTradingStats(fallbackStats);
        setError("Using demo data - configure Google Sheets for live data");
        return;
      }

      const calculationsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${CALCULATIONS_TAB}!${CALCULATIONS_RANGE}?key=${API_KEY}`;
      console.log("🌐 Making request to Google Sheets...");

      const response = await fetch(calculationsUrl);
      console.log("📡 Response status:", response.status, response.statusText);

      if (!response.ok) {
        const errorText = await response.text();
        console.error(
          `❌ Google Sheets API error: ${response.status} ${response.statusText}`,
          errorText
        );

        // Use fallback data on API error
        const fallbackStats = getFallbackTradingStats();
        setTradingStats(fallbackStats);
        setError(`API Error: ${response.status} - Using demo data`);
        return;
      }

      const data = await response.json();
      console.log("📥 Raw Google Sheets response:", data);

      if (!data.values || data.values.length === 0) {
        console.warn("⚠️ No data found in Calculations tab");
        const fallbackStats = getFallbackTradingStats();
        setTradingStats(fallbackStats);
        setError("No data in sheet - Using demo data");
        return;
      }

      const stats = parseCalculationsData(data.values);
      setTradingStats(stats);
      console.log(
        "✅ Successfully fetched live trading stats from Google Sheets"
      );
    } catch (err) {
      console.error("❌ Failed to fetch trading stats:", err);
      // Use fallback data on network error
      const fallbackStats = getFallbackTradingStats();
      setTradingStats(fallbackStats);
      setError(`Network error - Using demo data`);
    } finally {
      setIsLoading(false);
    }
  }, [SHEET_ID, API_KEY, CALCULATIONS_TAB, CALCULATIONS_RANGE]);

  useEffect(() => {
    fetchTradingStats();
  }, [fetchTradingStats]);

  // FIXED: Fallback data that ensures all values are present
  const getFallbackTradingStats = (): TradingStats => {
    const monthlyData: TradingDataPoint[] = [
      { month: "Jan", profit: 1250.0 },
      { month: "Feb", profit: 1890.5 },
      { month: "Mar", profit: 2100.75 },
      { month: "Apr", profit: 1750.25 },
      { month: "May", profit: 1650.0 },
      { month: "Jun", profit: 1950.75 },
      { month: "Jul", profit: 2200.5 },
      { month: "Aug", profit: 1857.25 },
    ];

    const totalProfit = monthlyData.reduce(
      (sum, month) => sum + month.profit,
      0
    );
    const totalTrades = 1247;
    const avgProfitPerTrade = totalProfit / totalTrades;
    const monthlyAverage = totalProfit / monthlyData.length;
    const dailyAvg = totalProfit / 240; // Assuming 240 trading days
    const bestMonthProfit = Math.max(...monthlyData.map((m) => m.profit));

    return {
      totalProfit,
      totalTrades,
      avgProfitPerTrade,
      monthlyAverage,
      monthlyData,
      dailyAvg,
      bestMonthProfit,
      lastUpdated: new Date().toISOString(),
      isLiveData: false, // This is fallback data
    };
  };

  const parseCalculationsData = (rows: string[][]): TradingStats => {
    console.log("🔍 Parsing Calculations data - Total rows:", rows.length);
    console.log("📋 First few rows:", rows.slice(0, 5));

    let monthlyData: TradingDataPoint[] = [];
    let totalProfit = 0;
    let totalTrades = 0;
    let avgProfitPerTrade = 0;
    let dailyAvg = 0;
    let bestMonthProfit = 0;

    // Parse monthly data (rows 1-9, skipping header row 0)
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      console.log(`📊 Processing row ${i}:`, row);

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
        });
        console.log(`📅 Added month data: ${monthName} = $${profit}`);
      }
    }

    // Extract summary stats from the right side (columns F-G)
    rows.forEach((row, index) => {
      if (row[4] === "Avg Profit / Trade") {
        avgProfitPerTrade = parseFloat(row[6]?.replace(/[$,]/g, "") || "0");
        console.log(
          `📈 Found Avg Profit/Trade in row ${index}:`,
          avgProfitPerTrade
        );
      }
      if (row[4] === "Daily Avg") {
        dailyAvg = parseFloat(row[6]?.replace(/[$,]/g, "") || "0");
        console.log(`📊 Found Daily Avg in row ${index}:`, dailyAvg);
      }
      if (row[4] === "Best Month") {
        bestMonthProfit = parseFloat(row[6]?.replace(/[$,]/g, "") || "0");
        console.log(`🏆 Found Best Month in row ${index}:`, bestMonthProfit);
      }
    });

    // FIXED: Calculate missing values if not found in sheet
    if (monthlyData.length > 0) {
      // Calculate monthlyAverage from actual data
      const monthlyAverage =
        monthlyData.reduce((sum, month) => sum + month.profit, 0) /
        monthlyData.length;

      // Calculate dailyAvg if not found (assume 30 days per month)
      if (dailyAvg === 0) {
        dailyAvg = monthlyAverage / 30;
        console.log(`📊 Calculated Daily Avg: ${dailyAvg}`);
      }

      // Calculate bestMonthProfit if not found
      if (bestMonthProfit === 0) {
        bestMonthProfit = Math.max(...monthlyData.map((m) => m.profit));
        console.log(`🏆 Calculated Best Month: ${bestMonthProfit}`);
      }

      // Calculate avgProfitPerTrade if not found
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
      // If no monthly data found, return fallback
      console.warn("⚠️ No monthly data found, using fallback");
      return getFallbackTradingStats();
    }
  };

  return {
    tradingStats,
    isLoading,
    error,
    refreshStats: fetchTradingStats,
  };
};
