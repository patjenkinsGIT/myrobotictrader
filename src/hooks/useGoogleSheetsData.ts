// Enhanced useGoogleSheetsData.ts - Complete Fixed Version

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

// New interface for capital efficiency data
export interface CapitalEfficiencyData {
  month: string;
  totalCapitalAvailable: number;
  capitalDeployed: number;
  cashReserves: number;
  deploymentRatio: number;
  reserveSafety: number;
  bitcoinValue: number;
  bitcoinReturn: number;
  aiPortfolioValue: number;
  aiProfit: number;
  aiReturnDeployed: number;
  aiReturnTotal: number;
  advantage: number;
}

// Enhanced interface extending your existing TradingStats
export interface EnhancedTradingStats extends TradingStats {
  capitalEfficiencyData: CapitalEfficiencyData[];
  totalCapitalDeployed: number;
  totalAdvantage: number;
  avgDeploymentRatio: number;
  avgReserveSafety: number;
}

// Enhanced hook with capital efficiency data
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
  const EFFICIENCY_TAB = "CapitalEfficiency";
  const EFFICIENCY_RANGE = "A:R";

  // Parse capital efficiency data from the new tab
  const parseCapitalEfficiencyData = useCallback(
    (rows: string[][]): CapitalEfficiencyData[] => {
      if (!rows || rows.length < 3) return []; // Need at least title, header, and one data row

      const efficiencyData: CapitalEfficiencyData[] = [];

      console.log("Parsing CapitalEfficiency rows:", rows.length);
      console.log("First few rows:", rows.slice(0, 3));

      // Start from row 2 (index 2) since row 0 is titles and row 1 is headers
      for (let i = 2; i < rows.length; i++) {
        const row = rows[i];
        if (!row || row.length < 10) continue; // Need minimum columns

        console.log(`Row ${i}:`, row);

        // Based on your Google Sheets structure: A=Month, B=Total_Capital, C=Deployed, etc.
        const month = row[0];
        const totalCapitalAvailable =
          parseFloat(row[1]?.toString().replace(/[$,]/g, "")) || 0;
        const capitalDeployed =
          parseFloat(row[2]?.toString().replace(/[$,]/g, "")) || 0;
        const cashReserves =
          parseFloat(row[3]?.toString().replace(/[$,]/g, "")) || 0;
        const deploymentRatio =
          parseFloat(row[4]?.toString().replace(/[%]/g, "")) || 0;
        const reserveSafety =
          parseFloat(row[5]?.toString().replace(/[%]/g, "")) || 0;

        // Bitcoin columns (H, I, J, K in your sheet)
        const bitcoinValue =
          parseFloat(row[9]?.toString().replace(/[$,]/g, "")) || 0; // Column J
        const bitcoinReturn =
          parseFloat(row[10]?.toString().replace(/[%]/g, "")) || 0; // Column K

        // AI columns (N, O, P, Q, R)
        const aiPortfolioValue =
          parseFloat(row[13]?.toString().replace(/[$,]/g, "")) || 0; // Column N
        const aiProfit =
          parseFloat(row[14]?.toString().replace(/[$,]/g, "")) || 0; // Column O
        const aiReturnDeployed =
          parseFloat(row[15]?.toString().replace(/[%]/g, "")) || 0; // Column P
        const aiReturnTotal =
          parseFloat(row[16]?.toString().replace(/[%]/g, "")) || 0; // Column Q
        const advantage =
          parseFloat(row[17]?.toString().replace(/[$,]/g, "")) || 0; // Column R

        // Only process rows with valid data
        if (month && month.toString().startsWith("2025")) {
          console.log("Adding month:", month, {
            totalCapitalAvailable,
            capitalDeployed,
            bitcoinValue,
            bitcoinReturn,
            aiProfit,
          });

          efficiencyData.push({
            month: month.toString(),
            totalCapitalAvailable,
            capitalDeployed,
            cashReserves,
            deploymentRatio,
            reserveSafety,
            bitcoinValue,
            bitcoinReturn,
            aiPortfolioValue,
            aiProfit,
            aiReturnDeployed,
            aiReturnTotal,
            advantage,
          });
        }
      }

      console.log("Final efficiency data:", efficiencyData);
      return efficiencyData;
    },
    []
  );

  // FIXED: Parse your actual Calculations data correctly
  const parseCalculationsData = useCallback(
    (rows: string[][], fetchTimestamp: string): TradingStats => {
      console.log("🔍 Parsing Calculations data - Total rows:", rows.length);

      if (!rows || rows.length < 12) {
        console.log("❌ Not enough rows, using mock data");
        return getMockTradingStatsBase();
      }

      // Log the actual data structure for debugging
      console.log("📊 Raw Google Sheets data structure:");
      rows.forEach((row, index) => {
        if (index < 15) {
          // Show first 15 rows
          console.log(`Row ${index}:`, row);
        }
      });

      // Based on your Google Sheets, the Grand Total is in row 12 (index 11)
      // Your sheet structure: Month | Profit By Month | Trades | Avg Profit / Trade | Monthly Avg | Daily Avg | Best Month
      const grandTotalRow = rows[11]; // Row 12 (0-indexed)

      console.log("💰 Grand Total Row (index 11):", grandTotalRow);

      if (!grandTotalRow || grandTotalRow.length < 6) {
        console.log("❌ Grand Total row not found or incomplete");
        return getMockTradingStatsBase();
      }

      // Parse the actual values from your Grand Total row
      // Column B = Total Profit ($4,169.18)
      // Column C = Total Trades (875)
      // Column D = Avg Profit Per Trade ($4.76)
      // Column E = Monthly Average ($463.24)
      // Column F = Daily Average ($16.35)
      // Column G = Best Month ($817.31)

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

      console.log("💰 Parsed Grand Total values:", {
        totalProfit,
        totalTrades,
        avgProfitPerTrade,
        monthlyAverage,
        dailyAvg,
        bestMonthProfit,
      });

      // Parse monthly data from rows 1-9 (your actual monthly data)
      const monthlyData: TradingDataPoint[] = [];

      for (let i = 1; i <= 9; i++) {
        // Rows 2-10 in your sheet (1-indexed)
        const row = rows[i];
        if (row && row.length >= 3) {
          const month = row[0]?.toString().trim();
          const profit =
            parseFloat(row[1]?.toString().replace(/[$,]/g, "")) || 0;
          const trades = parseInt(row[2]?.toString().replace(/[,]/g, "")) || 0;

          if (month && month !== "Grand Total" && profit > 0) {
            // Convert full month names to short names if needed
            const shortMonth = month.length > 3 ? month.substring(0, 3) : month;
            monthlyData.push({
              month: shortMonth,
              profit,
              trades,
            });

            console.log(
              `📅 Added month data: ${shortMonth} = $${profit.toFixed(2)}`
            );
          }
        }
      }

      console.log("📈 Final monthly data:", monthlyData);

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

  // Base mock trading stats for fallback
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
      (sum: number, month: TradingDataPoint) => sum + month.profit,
      0
    );
    const totalTrades = monthlyData.reduce(
      (sum: number, month: TradingDataPoint) => sum + month.trades,
      0
    );

    return {
      totalProfit,
      totalTrades,
      avgProfitPerTrade: totalTrades > 0 ? totalProfit / totalTrades : 0,
      monthlyAverage:
        monthlyData.length > 0 ? totalProfit / monthlyData.length : 0,
      dailyAvg: 15.5,
      bestMonthProfit: Math.max(
        ...monthlyData.map((m: TradingDataPoint) => m.profit)
      ),
      monthlyData,
      isLiveData: false,
      lastUpdated: new Date().toISOString(),
    };
  };

  // Enhanced fetch function that maintains backward compatibility
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

        // Fetch both original calculations and new CapitalEfficiency data
        const calculationsResponse = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${CALCULATIONS_TAB}!${CALCULATIONS_RANGE}?key=${API_KEY}`
        );

        let efficiencyResponse;
        try {
          efficiencyResponse = await fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${EFFICIENCY_TAB}!${EFFICIENCY_RANGE}?key=${API_KEY}`
          );
        } catch (efficiencyError) {
          console.log("CapitalEfficiency tab not found, using fallback data");
          efficiencyResponse = null;
        }

        const calculationsData = await calculationsResponse.json();
        const efficiencyData = efficiencyResponse
          ? await efficiencyResponse.json()
          : null;

        // Parse original stats (this maintains compatibility with existing components)
        const originalStats = parseCalculationsData(
          calculationsData.values || [],
          fetchTimestamp
        );

        // Parse capital efficiency data (new feature)
        const capitalEfficiencyData = efficiencyData
          ? parseCapitalEfficiencyData(efficiencyData.values || [])
          : getEnhancedMockTradingStats().capitalEfficiencyData;

        // Calculate enhanced metrics
        const totalCapitalDeployed = capitalEfficiencyData.reduce(
          (sum: number, month: CapitalEfficiencyData) =>
            sum + month.capitalDeployed,
          0
        );
        const totalAdvantage = capitalEfficiencyData.reduce(
          (sum: number, month: CapitalEfficiencyData) => sum + month.advantage,
          0
        );
        const avgDeploymentRatio =
          capitalEfficiencyData.length > 0
            ? capitalEfficiencyData.reduce(
                (sum: number, month: CapitalEfficiencyData) =>
                  sum + month.deploymentRatio,
                0
              ) / capitalEfficiencyData.length
            : 0;
        const avgReserveSafety =
          capitalEfficiencyData.length > 0
            ? capitalEfficiencyData.reduce(
                (sum: number, month: CapitalEfficiencyData) =>
                  sum + month.reserveSafety,
                0
              ) / capitalEfficiencyData.length
            : 0;

        const enhancedStats: EnhancedTradingStats = {
          ...originalStats,
          capitalEfficiencyData,
          totalCapitalDeployed,
          totalAdvantage,
          avgDeploymentRatio,
          avgReserveSafety,
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

        // Fallback to enhanced mock data
        const mockStats = getEnhancedMockTradingStats();
        setTradingStats(mockStats);
      } finally {
        setIsLoading(false);
      }
    },
    [parseCalculationsData, parseCapitalEfficiencyData]
  );

  // Enhanced mock data with capital efficiency
  const getEnhancedMockTradingStats = (): EnhancedTradingStats => {
    const mockCapitalEfficiencyData: CapitalEfficiencyData[] = [
      {
        month: "2025-01",
        totalCapitalAvailable: 25000,
        capitalDeployed: 10750,
        cashReserves: 14250,
        deploymentRatio: 43.0,
        reserveSafety: 57.0,
        bitcoinValue: 27403,
        bitcoinReturn: 9.61,
        aiPortfolioValue: 25477,
        aiProfit: 477,
        aiReturnDeployed: 4.44,
        aiReturnTotal: 1.91,
        advantage: -1926,
      },
      {
        month: "2025-02",
        totalCapitalAvailable: 25500,
        capitalDeployed: 500,
        cashReserves: 25000,
        deploymentRatio: 2.0,
        reserveSafety: 98.0,
        bitcoinValue: 22590,
        bitcoinReturn: -17.61,
        aiPortfolioValue: 26164,
        aiProfit: 687,
        aiReturnDeployed: 137.4,
        aiReturnTotal: 2.69,
        advantage: 3574,
      },
      {
        month: "2025-03",
        totalCapitalAvailable: 30000,
        capitalDeployed: 4450,
        cashReserves: 25550,
        deploymentRatio: 14.8,
        reserveSafety: 85.2,
        bitcoinValue: 22102,
        bitcoinReturn: -2.16,
        aiPortfolioValue: 26426,
        aiProfit: 262,
        aiReturnDeployed: 5.88,
        aiReturnTotal: 0.87,
        advantage: 4324,
      },
    ];

    const monthlyData: TradingDataPoint[] = [
      { month: "Jan", profit: 477.23, trades: 89 },
      { month: "Feb", profit: 686.71, trades: 124 },
      { month: "Mar", profit: 261.97, trades: 67 },
    ];

    const totalProfit = monthlyData.reduce(
      (sum: number, month: TradingDataPoint) => sum + month.profit,
      0
    );
    const totalTrades = monthlyData.reduce(
      (sum: number, month: TradingDataPoint) => sum + month.trades,
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
      capitalEfficiencyData: mockCapitalEfficiencyData,
      totalCapitalDeployed: 15700,
      totalAdvantage: 5972,
      avgDeploymentRatio: 19.9,
      avgReserveSafety: 80.1,
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
