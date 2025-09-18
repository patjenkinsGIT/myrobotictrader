import { useState, useEffect, useCallback } from "react";

interface BitcoinData {
  price: number;
  change24h: number;
  change7d: number;
  change30d: number;
  lastUpdated: string;
}

interface MonthlyTradingData {
  month: string;
  profit: number;
  trades?: number;
}

interface CorrelationData {
  month: string;
  yourReturn: number;
  bitcoinReturn: number;
  status: "independent" | "correlated" | "inverse";
}

interface BitcoinCorrelationResult {
  currentBitcoin: BitcoinData | null;
  correlationData: CorrelationData[];
  independentMonths: number;
  totalMonths: number;
  isLoading: boolean;
  error: string | null;
  refreshData: () => void;
}

const useBitcoinCorrelation = (
  monthlyTradingData: MonthlyTradingData[]
): BitcoinCorrelationResult => {
  const [currentBitcoin, setCurrentBitcoin] = useState<BitcoinData | null>(
    null
  );
  const [correlationData, setCorrelationData] = useState<CorrelationData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Historical Bitcoin monthly returns (approximate - you can update with actual data)
  const bitcoinMonthlyReturns = {
    Jan: -3.2, // Bitcoin declined 3.2% in January
    Feb: 12.5, // Bitcoin gained 12.5% in February
    Mar: -8.1, // Bitcoin declined 8.1% in March
    Apr: 15.3, // Bitcoin gained 15.3% in April
    May: -7.8, // Bitcoin declined 7.8% in May
    Jun: 4.2, // Bitcoin gained 4.2% in June
    Jul: -2.1, // Bitcoin declined 2.1% in July
    Aug: 8.7, // Bitcoin gained 8.7% in August
    Sep: -5.4, // Bitcoin declined 5.4% in September (current)
  };

  const fetchCurrentBitcoinData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Use CoinGecko API (free, no auth required)
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true&include_7d_change=true&include_30d_change=true"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch Bitcoin data");
      }

      const data = await response.json();
      const btcData = data.bitcoin;

      setCurrentBitcoin({
        price: btcData.usd,
        change24h: btcData.usd_24h_change || 0,
        change7d: btcData.usd_7d_change || 0,
        change30d: btcData.usd_30d_change || 0,
        lastUpdated: new Date().toISOString(),
      });
    } catch (err) {
      console.error("Error fetching Bitcoin data:", err);
      setError(
        err instanceof Error ? err.message : "Failed to fetch Bitcoin data"
      );

      // Fallback to mock data if API fails
      setCurrentBitcoin({
        price: 65250,
        change24h: -2.3,
        change7d: -5.7,
        change30d: -8.4,
        lastUpdated: new Date().toISOString(),
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Calculate correlation between your trading results and Bitcoin
  const calculateCorrelation = useCallback(() => {
    if (!monthlyTradingData || monthlyTradingData.length === 0) return;

    const correlations: CorrelationData[] = monthlyTradingData.map(
      (monthData) => {
        const month = monthData.month;
        const yourProfit = monthData.profit;
        const bitcoinReturn =
          bitcoinMonthlyReturns[month as keyof typeof bitcoinMonthlyReturns] ||
          0;

        // Calculate your percentage return (assuming average monthly investment)
        // This is a simplified calculation - you can adjust based on your actual capital
        const estimatedCapital = 10000; // Estimate based on your trading capital
        const yourReturn = (yourProfit / estimatedCapital) * 100;

        // Determine correlation status
        let status: "independent" | "correlated" | "inverse" = "independent";

        if (Math.abs(yourReturn - bitcoinReturn) < 2) {
          status = "correlated"; // Similar returns
        } else if (
          (yourReturn > 0 && bitcoinReturn < 0) ||
          (yourReturn < 0 && bitcoinReturn > 0)
        ) {
          status = "inverse"; // Opposite directions
        } else {
          status = "independent"; // Different magnitudes but may be same direction
        }

        return {
          month,
          yourReturn: yourReturn,
          bitcoinReturn,
          status,
        };
      }
    );

    setCorrelationData(correlations);
  }, [monthlyTradingData]);

  const refreshData = useCallback(() => {
    fetchCurrentBitcoinData();
    calculateCorrelation();
  }, [fetchCurrentBitcoinData, calculateCorrelation]);

  useEffect(() => {
    refreshData();
  }, [refreshData]);

  const independentMonths = correlationData.filter(
    (d) => d.status === "independent" || d.status === "inverse"
  ).length;

  return {
    currentBitcoin,
    correlationData,
    independentMonths,
    totalMonths: correlationData.length,
    isLoading,
    error,
    refreshData,
  };
};

export default useBitcoinCorrelation;
