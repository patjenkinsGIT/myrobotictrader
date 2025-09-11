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
      { month: "Jan", profit: 477.23 },
      { month: "Feb", profit: 686.71 },
      { month: "Mar", profit: 261.97 },
      { month: "Apr", profit: 552.58 },
      { month: "May", profit: 376.3 },
      { month: "Jun", profit: 382.97 },
      { month: "Jul", profit: 817.31 },
      { month: "Aug", profit: 350.32 },
      { month: "Sep", profit: 450.0 },
    ];

    const totalProfit = monthlyData.reduce(
      (sum, month) => sum + month.profit,
      0
    );
    const totalTrades = 947;
    const avgProfitPerTrade = 4.75;
    const monthlyAverage = 451.27;
    const dailyAvg = 16.51;
    const bestMonthProfit = 817.31;

    return {
      totalProfit,
      totalTrades,
      avgProfitPerTrade,
      monthlyAverage,
      monthlyData,
      dailyAvg,
      bestMonthProfit,
      lastUpdated: new Date().toISOString(),
      isLiveData: false,
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
    let monthlyAverage = 0;

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

    // FIXED: Look for calculated fields in rows 46-49, columns A:B
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

    // FIXED: Only calculate missing values if not found in sheet - PRIORITIZE SHEET VALUES
    if (monthlyData.length > 0) {
      // Use sheet values if found, otherwise calculate
      if (monthlyAverage === 0) {
        monthlyAverage =
          monthlyData.reduce((sum, month) => sum + month.profit, 0) /
          monthlyData.length;
        console.log(`📊 Calculated Monthly Average: ${monthlyAverage}`);
      }

      // FIXED: Only calculate dailyAvg if NOT found in sheet (prioritize sheet value)
      if (dailyAvg === 0) {
        const startDate = new Date("2025-01-08");
        const currentDate = new Date();
        const actualTradingDays = Math.ceil(
          (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
        );
        dailyAvg =
          actualTradingDays > 0
            ? totalProfit / actualTradingDays
            : monthlyAverage / 30;
        console.log(
          `📊 Calculated Daily Avg based on ${actualTradingDays} actual trading days: ${dailyAvg}`
        );
      } else {
        console.log(`📊 Using Daily Avg from sheet: ${dailyAvg}`);
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
