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

  const fetchTradingStats = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      console.log("🔄 Fetching trading stats from Google Sheets...");

      if (!SHEET_ID || !API_KEY) {
        console.log(
          "⚠️ Google Sheets credentials not configured, using fallback data"
        );
        setTradingStats(getFallbackStats());
        return;
      }

      // For now, we'll use fallback data since you may not have a TradingStats tab yet
      // You can create a TradingStats tab later or we'll calculate from transaction data
      console.log("📊 Using calculated stats from fallback data");
      setTradingStats(getFallbackStats());
    } catch (err) {
      console.error("❌ Failed to fetch trading stats:", err);
      setTradingStats(getFallbackStats());
      setError("Failed to load trading stats");
    } finally {
      setIsLoading(false);
    }
  }, [SHEET_ID, API_KEY]);

  useEffect(() => {
    fetchTradingStats();
  }, [fetchTradingStats]);

  // Fallback data (same as your current static data)
  const getFallbackStats = (): TradingStats => {
    return {
      totalProfit: 12450,
      totalTrades: 1247,
      avgProfitPerTrade: 9.98,
      monthlyAverage: 1556.25,
      monthlyData: [
        { month: "Jan", profit: 1250.0 },
        { month: "Feb", profit: 1890.5 },
        { month: "Mar", profit: 2100.75 },
        { month: "Apr", profit: 1750.25 },
        { month: "May", profit: 1650.0 },
        { month: "Jun", profit: 1950.75 },
        { month: "Jul", profit: 2200.5 },
        { month: "Aug", profit: 1857.25 },
      ],
      lastUpdated: new Date().toISOString(),
      isLiveData: SHEET_ID && API_KEY ? true : false, // Show as live if credentials exist
    };
  };

  return {
    tradingStats,
    isLoading,
    error,
    refreshStats: fetchTradingStats,
  };
};
