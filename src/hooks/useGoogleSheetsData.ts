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
    // CloudFlare might expose these differently
    (typeof window !== "undefined" && (window as any).VITE_GOOGLE_SHEET_ID) ||
    (typeof window !== "undefined" && (window as any).GOOGLE_SHEET_ID);

  const API_KEY =
    import.meta.env.VITE_GOOGLE_API_KEY ||
    import.meta.env.GOOGLE_API_KEY ||
    // CloudFlare might expose these differently
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
      console.log("📋 Sheet ID (first 10 chars):", SHEET_ID?.substring(0, 10));

      // Don't fall back to mock data immediately
      if (!SHEET_ID || !API_KEY) {
        const errorMsg = `Missing credentials: Sheet ID: ${!!SHEET_ID}, API Key: ${!!API_KEY}`;
        console.error("❌", errorMsg);
        setError(errorMsg);
        setTradingStats(null);
        return;
      }

      const calculationsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${CALCULATIONS_TAB}!${CALCULATIONS_RANGE}?key=${API_KEY}`;
      console.log(
        "🌐 Making request to:",
        calculationsUrl.replace(API_KEY, "API_KEY_HIDDEN")
      );

      const response = await fetch(calculationsUrl);
      console.log("📡 Response status:", response.status, response.statusText);

      if (!response.ok) {
        const errorText = await response.text();
        console.error(
          `❌ Google Sheets API error: ${response.status} ${response.statusText}`,
          errorText
        );

        // Try to parse error details
        try {
          const errorJson = JSON.parse(errorText);
          console.error("📋 Error details:", errorJson);
          setError(
            `API Error: ${errorJson.error?.message || response.statusText}`
          );
        } catch {
          setError(`API Error: ${response.status} ${response.statusText}`);
        }

        setTradingStats(null);
        return;
      }

      const data = await response.json();
      console.log("📥 Raw Google Sheets response:", data);

      if (!data.values || data.values.length === 0) {
        console.warn("⚠️ No data found in Calculations tab");
        setError("No data found in Calculations tab");
        setTradingStats(null);
        return;
      }

      const stats = parseCalculationsData(data.values);
      setTradingStats(stats);
      console.log(
        "✅ Successfully fetched live trading stats from Google Sheets"
      );
    } catch (err) {
      console.error("❌ Failed to fetch trading stats:", err);
      setError(
        `Network error: ${err instanceof Error ? err.message : "Unknown error"}`
      );
      setTradingStats(null);
    } finally {
      setIsLoading(false);
    }
  }, [SHEET_ID, API_KEY, CALCULATIONS_TAB, CALCULATIONS_RANGE]);

  useEffect(() => {
    fetchTradingStats();
  }, [fetchTradingStats]);

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

    // Calculate monthlyAverage
    const monthlyAverage =
      monthlyData.length > 0
        ? monthlyData.reduce((sum, month) => sum + month.profit, 0) /
          monthlyData.length
        : 0;

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
  };

  return {
    tradingStats,
    isLoading,
    error,
    refreshStats: fetchTradingStats,
  };
};
