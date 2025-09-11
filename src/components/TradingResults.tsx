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
}

export const useGoogleSheetsData = () => {
  const [tradingStats, setTradingStats] = useState<TradingStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Use the same environment variables as LiveTransactionLog
  const SHEET_ID =
    import.meta.env.VITE_GOOGLE_SHEET_ID || import.meta.env.GOOGLE_SHEET_ID;
  const API_KEY =
    import.meta.env.VITE_GOOGLE_API_KEY || import.meta.env.GOOGLE_API_KEY;
  const CALCULATIONS_TAB = "Calculations";
  const CALCULATIONS_RANGE = "A:G"; // Get all columns A through G

  const fetchTradingStats = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      console.log("🔄 Fetching trading stats from Calculations tab...");

      if (!SHEET_ID || !API_KEY) {
        console.log(
          "⚠️ Google Sheets credentials not configured, using fallback data"
        );
        setTradingStats(getFallbackStats());
        return;
      }

      // Fetch from Calculations tab
      const calculationsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${CALCULATIONS_TAB}!${CALCULATIONS_RANGE}?key=${API_KEY}`;

      try {
        const response = await fetch(calculationsUrl);

        if (!response.ok) {
          const errorText = await response.text();
          console.error(
            `❌ Google Sheets API error: ${response.status} ${response.statusText}`,
            errorText
          );
          throw new Error(
            `Google Sheets API error: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        console.log("📥 Raw Calculations data:", data);

        if (data.values && data.values.length > 0) {
          const stats = parseCalculationsData(data.values);
          setTradingStats(stats);
          console.log(
            "✅ Successfully fetched live trading stats from Calculations tab"
          );
        } else {
          console.log("⚠️ No data found in Calculations tab, using fallback");
          setTradingStats(getFallbackStats());
          setError("No data found in Calculations tab. Using sample data.");
        }
      } catch (apiError) {
        console.error("❌ Google Sheets API error:", apiError);
        setTradingStats(getFallbackStats());
        setError(
          `Failed to load from Calculations tab: ${
            apiError instanceof Error ? apiError.message : "Unknown error"
          }`
        );
      }
    } catch (err) {
      console.error("❌ Failed to fetch trading stats:", err);
      setTradingStats(getFallbackStats());
      setError("Failed to load trading stats");
    } finally {
      setIsLoading(false);
    }
  }, [SHEET_ID, API_KEY, CALCULATIONS_TAB, CALCULATIONS_RANGE]);

  useEffect(() => {
    fetchTradingStats();
  }, [fetchTradingStats]);

  // Parse the Calculations tab data based on your screenshot
  const parseCalculationsData = (rows: string[][]): TradingStats => {
    console.log("🔍 Parsing Calculations data:", rows);

    let monthlyData: TradingDataPoint[] = [];
    let totalProfit = 0;
    let totalTrades = 0;
    let avgProfitPerTrade = 0;

    // Parse monthly data (rows 1-9, skipping header row 0)
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];

      // Skip the "Grand Total" row and empty rows
      if (!row[0] || row[0].includes("Grand Total")) {
        // If this is the Grand Total row, extract totals
        if (row[0] && row[0].includes("Grand Total")) {
          totalProfit = parseFloat(row[1]?.replace(/[$,]/g, "") || "0");
          totalTrades = parseInt(row[2]?.replace(/[,]/g, "") || "0");
        }
        continue;
      }

      // Parse month data (A: Month, B: Profit, C: Trades)
      const monthStr = row[0]; // "2025-01"
      const profit = parseFloat(row[1]?.replace(/[$,]/g, "") || "0");

      if (monthStr && profit > 0) {
        // Convert "2025-01" to "Jan"
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
      }
    }

    // Extract summary stats from the right side (columns F-G)
    // Look for specific values in the sheet
    rows.forEach((row) => {
      if (row[4] === "Avg Profit / Trade") {
        avgProfitPerTrade = parseFloat(row[6]?.replace(/[$,]/g, "") || "0");
      }
      if (row[4] === "Daily Avg") {
      }
      if (row[4] === "Best Month") {
      }
    });

    // Calculate monthly average
    const monthlyAverage =
      monthlyData.length > 0 ? totalProfit / monthlyData.length : 0;

    console.log("📊 Parsed stats:", {
      totalProfit,
      totalTrades,
      avgProfitPerTrade,
      monthlyAverage,
      monthlyDataCount: monthlyData.length,
    });

    return {
      totalProfit,
      totalTrades,
      avgProfitPerTrade,
      monthlyAverage,
      monthlyData,
      lastUpdated: new Date().toISOString(),
      isLiveData: true,
    };
  };

  // Fallback data (same as your current static data)
  const getFallbackStats = (): TradingStats => {
    return {
      totalProfit: 4054.46,
      totalTrades: 854,
      avgProfitPerTrade: 4.75,
      monthlyAverage: 450.5,
      monthlyData: [
        { month: "Jan", profit: 477.17 },
        { month: "Feb", profit: 686.72 },
        { month: "Mar", profit: 261.93 },
        { month: "Apr", profit: 552.58 },
        { month: "May", profit: 376.29 },
        { month: "Jun", profit: 382.98 },
        { month: "Jul", profit: 817.31 },
        { month: "Aug", profit: 413.54 },
        { month: "Sep", profit: 85.93 },
      ],
      lastUpdated: new Date().toISOString(),
      isLiveData: SHEET_ID && API_KEY ? true : false,
    };
  };

  return {
    tradingStats,
    isLoading,
    error,
    refreshStats: fetchTradingStats,
  };
};
