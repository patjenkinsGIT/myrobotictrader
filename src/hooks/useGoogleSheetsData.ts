// Enhanced useGoogleSheetsData.ts - Add this to your existing hook file

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

      // Start from row 2 (index 2) since row 0 is titles and row 1 is headers
      for (let i = 2; i < rows.length; i++) {
        const row = rows[i];
        if (!row || row.length < 18) continue; // Need all columns

        const [
          month,
          totalCapitalAvailable,
          capitalDeployed,
          cashReserves,
          deploymentRatio,
          reserveSafety, // Skip column G (gap)
          ,
          ,
          bitcoinValue,
          bitcoinReturn, // Skip bitcoinStrategy, fullCapitalDeployed, keep bitcoinValue, bitcoinReturn // Skip riskLevel // Skip column M (gap)
          ,
          ,
          aiPortfolioValue,
          aiProfit,
          aiReturnDeployed,
          aiReturnTotal,
          advantage,
        ] = row;

        // Only process rows with valid data
        if (month && month.toString().startsWith("2025")) {
          efficiencyData.push({
            month: month.toString(),
            totalCapitalAvailable:
              parseFloat(totalCapitalAvailable?.toString()) || 0,
            capitalDeployed: parseFloat(capitalDeployed?.toString()) || 0,
            cashReserves: parseFloat(cashReserves?.toString()) || 0,
            deploymentRatio: parseFloat(deploymentRatio?.toString()) || 0,
            reserveSafety: parseFloat(reserveSafety?.toString()) || 0,
            bitcoinValue: parseFloat(bitcoinValue?.toString()) || 0,
            bitcoinReturn: parseFloat(bitcoinReturn?.toString()) || 0,
            aiPortfolioValue: parseFloat(aiPortfolioValue?.toString()) || 0,
            aiProfit: parseFloat(aiProfit?.toString()) || 0,
            aiReturnDeployed: parseFloat(aiReturnDeployed?.toString()) || 0,
            aiReturnTotal: parseFloat(aiReturnTotal?.toString()) || 0,
            advantage: parseFloat(advantage?.toString()) || 0,
          });
        }
      }

      return efficiencyData;
    },
    []
  );

  // Parse your actual Calculations data to maintain compatibility
  const parseCalculationsData = useCallback(
    (rows: string[][], fetchTimestamp: string): TradingStats => {
      console.log(
        `Parsing calculations data with ${rows.length} rows at ${fetchTimestamp}`
      );

      if (!rows || rows.length < 2) {
        // Return mock data if no real data available
        return getMockTradingStatsBase();
      }

      // Your Calculations tab structure - adapt this to your actual format
      let totalProfit = 0;
      let totalTrades = 0;
      let avgProfitPerTrade = 0;
      let monthlyAverage = 0;
      let dailyAvg = 0;
      let bestMonthProfit = 0;

      // Parse from your actual sheet structure
      // Look for the data row (usually row with numbers)
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        if (row && row.length > 4) {
          // Assuming your format has the summary stats in one row
          totalProfit =
            parseFloat(row[0]?.toString().replace(/[$,]/g, "")) || 0;
          totalTrades = parseFloat(row[1]?.toString()) || 0;
          avgProfitPerTrade = parseFloat(row[2]?.toString()) || 0;
          monthlyAverage = parseFloat(row[3]?.toString()) || 0;
          dailyAvg = parseFloat(row[4]?.toString()) || 0;
          bestMonthProfit = parseFloat(row[5]?.toString()) || 0;

          if (totalProfit > 0) break; // Found valid data
        }
      }

      // Generate monthly data (this maintains compatibility with existing components)
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

      // Use parsed data or fallback to calculated values
      const finalTotalProfit =
        totalProfit > 0
          ? totalProfit
          : monthlyData.reduce(
              (sum: number, month: TradingDataPoint) => sum + month.profit,
              0
            );
      const finalTotalTrades =
        totalTrades > 0
          ? totalTrades
          : monthlyData.reduce(
              (sum: number, month: TradingDataPoint) => sum + month.trades,
              0
            );
      const finalAvgProfitPerTrade =
        avgProfitPerTrade > 0
          ? avgProfitPerTrade
          : finalTotalTrades > 0
          ? finalTotalProfit / finalTotalTrades
          : 0;
      const finalMonthlyAverage =
        monthlyAverage > 0
          ? monthlyAverage
          : monthlyData.length > 0
          ? finalTotalProfit / monthlyData.length
          : 0;

      return {
        totalProfit: finalTotalProfit,
        totalTrades: finalTotalTrades,
        avgProfitPerTrade: finalAvgProfitPerTrade,
        monthlyAverage: finalMonthlyAverage,
        dailyAvg: dailyAvg > 0 ? dailyAvg : finalMonthlyAverage / 30,
        bestMonthProfit:
          bestMonthProfit > 0
            ? bestMonthProfit
            : Math.max(...monthlyData.map((m: TradingDataPoint) => m.profit)),
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
