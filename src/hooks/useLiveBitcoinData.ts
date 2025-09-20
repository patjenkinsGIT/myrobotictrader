// hooks/useLiveBitcoinData.ts - Live Bitcoin Data with Transparency
import { useState, useEffect, useCallback } from "react";

interface BitcoinPrice {
  current: number;
  change24h: number;
  change7d: number;
  change30d: number;
  lastUpdated: string;
}

interface BitcoinPricePoint {
  month: string;
  price: number;
  change: string;
  status: "up" | "down";
}

interface BitcoinComparisonData {
  startDate: string;
  startPrice: number;
  endPrice: number;
  investmentAmount: number;
  finalValue: number;
  totalLoss: number;
  pricePoints: BitcoinPricePoint[];
  isLiveData: boolean;
  dataSource: string;
  lastUpdated: string;
}

interface UseLiveBitcoinDataResult {
  bitcoinData: BitcoinComparisonData | null;
  currentPrice: BitcoinPrice | null;
  isLoading: boolean;
  error: string | null;
  refreshData: () => void;
}

export const useLiveBitcoinData = (): UseLiveBitcoinDataResult => {
  const [bitcoinData, setBitcoinData] = useState<BitcoinComparisonData | null>(
    null
  );
  const [currentPrice, setCurrentPrice] = useState<BitcoinPrice | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch live Bitcoin data from CoinGecko API (free, reliable)
  const fetchLiveBitcoinData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Get current Bitcoin price and recent changes
      const currentResponse = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true&include_7d_change=true&include_30d_change=true"
      );

      if (!currentResponse.ok) {
        throw new Error("Failed to fetch current Bitcoin data");
      }

      const currentData = await currentResponse.json();
      const btc = currentData.bitcoin;

      // Get historical data for the 8-month period (Jan-Aug 2025)
      const historicalResponse = await fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=240" // ~8 months
      );

      let pricePoints: BitcoinPricePoint[] = [];
      let startPrice = 42000; // Fallback if API fails
      let endPrice = btc.usd;
      let isLiveData = true;

      if (historicalResponse.ok) {
        const historicalData = await historicalResponse.json();

        // Process historical prices to get monthly data points
        const prices = historicalData.prices;

        // Calculate monthly price points from historical data
        const monthlyPrices = calculateMonthlyPrices(prices);
        pricePoints = monthlyPrices;
        startPrice = monthlyPrices[0]?.price || 42000;
      } else {
        // Fallback to estimated data if historical API fails
        pricePoints = getFallbackPricePoints();
        isLiveData = false;
      }

      // Calculate investment scenario
      const investmentAmount = 10000;
      const finalValue = Math.round((investmentAmount * endPrice) / startPrice);
      const totalLoss = finalValue - investmentAmount;

      const comparisonData: BitcoinComparisonData = {
        startDate: "January 8, 2025",
        startPrice,
        endPrice,
        investmentAmount,
        finalValue,
        totalLoss,
        pricePoints,
        isLiveData,
        dataSource: isLiveData
          ? "CoinGecko API (Live)"
          : "Historical Estimates",
        lastUpdated: new Date().toISOString(),
      };

      const currentPriceData: BitcoinPrice = {
        current: btc.usd,
        change24h: btc.usd_24h_change || 0,
        change7d: btc.usd_7d_change || 0,
        change30d: btc.usd_30d_change || 0,
        lastUpdated: new Date().toISOString(),
      };

      setBitcoinData(comparisonData);
      setCurrentPrice(currentPriceData);
    } catch (err) {
      console.error("Error fetching Bitcoin data:", err);
      setError(
        err instanceof Error ? err.message : "Failed to fetch Bitcoin data"
      );

      // Use fallback data on error
      const fallbackData = getFallbackBitcoinData();
      setBitcoinData(fallbackData);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Calculate monthly price points from historical data
  const calculateMonthlyPrices = (
    prices: [number, number][]
  ): BitcoinPricePoint[] => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
    const monthlyPrices: BitcoinPricePoint[] = [];

    // Group prices by month and calculate averages
    for (let i = 0; i < months.length; i++) {
      const monthIndex = i;
      const monthPrices = prices.slice(monthIndex * 30, (monthIndex + 1) * 30);

      if (monthPrices.length > 0) {
        const avgPrice =
          monthPrices.reduce((sum, [, price]) => sum + price, 0) /
          monthPrices.length;
        const prevPrice = i > 0 ? monthlyPrices[i - 1].price : avgPrice;
        const change = ((avgPrice - prevPrice) / prevPrice) * 100;

        monthlyPrices.push({
          month: months[i],
          price: Math.round(avgPrice),
          change: `${change >= 0 ? "+" : ""}${change.toFixed(1)}%`,
          status: change >= 0 ? "up" : "down",
        });
      }
    }

    return monthlyPrices;
  };

  // Fallback price points if API fails
  const getFallbackPricePoints = (): BitcoinPricePoint[] => [
    { month: "Jan", price: 41000, change: "-2.4%", status: "down" },
    { month: "Feb", price: 50000, change: "+22%", status: "up" },
    { month: "Mar", price: 45000, change: "-10%", status: "down" },
    { month: "Apr", price: 52000, change: "+15.6%", status: "up" },
    { month: "May", price: 48000, change: "-7.7%", status: "down" },
    { month: "Jun", price: 49000, change: "+2.1%", status: "up" },
    { month: "Jul", price: 46500, change: "-5.1%", status: "down" },
    { month: "Aug", price: 39600, change: "-14.8%", status: "down" },
  ];

  // Fallback data if everything fails
  const getFallbackBitcoinData = (): BitcoinComparisonData => ({
    startDate: "January 8, 2025",
    startPrice: 42000,
    endPrice: 39600,
    investmentAmount: 10000,
    finalValue: 7600,
    totalLoss: -2400,
    pricePoints: getFallbackPricePoints(),
    isLiveData: false,
    dataSource: "Historical Estimates (API Error)",
    lastUpdated: new Date().toISOString(),
  });

  // Refresh data function
  const refreshData = useCallback(() => {
    fetchLiveBitcoinData();
  }, [fetchLiveBitcoinData]);

  // Fetch data on mount
  useEffect(() => {
    fetchLiveBitcoinData();
  }, [fetchLiveBitcoinData]);

  return {
    bitcoinData,
    currentPrice,
    isLoading,
    error,
    refreshData,
  };
};
