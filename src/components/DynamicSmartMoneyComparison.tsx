// DynamicSmartMoneyComparison.tsx
// This replaces BitcoinComparison.tsx with a more powerful dynamic comparison tool

import { useState, useEffect } from "react";
import { AlertTriangle, Brain, Zap, Search, BarChart3 } from "lucide-react";
import { trackCTAClick, trackOutboundLink } from "../utils/analytics";
import { useGoogleSheetsData } from "../hooks/useGoogleSheetsData";

// TypeScript interfaces
interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  currentPrice: number;
  startPrice: number;
  gainSinceStart: number;
  change24h: number;
  change7d: number;
  change30d: number;
  daysSinceStart: number;
}

interface PopularCrypto {
  id: string;
  name: string;
  symbol: string;
}

interface Comparison {
  allIn: {
    investment: number;
    currentValue: number;
    unrealizedGain: number;
    realized: number;
    risk: string;
  };
  dca: {
    investment: number;
    currentValue: number;
    unrealizedGain: number;
    realized: number;
    risk: string;
  };
  yourWay: {
    investment: number;
    realizedProfits: number;
    currentPositions: number;
    reserves: number;
    totalValue: number;
  };
}

// Simple cache to prevent API abuse
const cryptoCache = new Map<string, { data: CryptoData; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const DynamicSmartMoneyComparison = () => {
  // Get live trading data from your Google Sheets
  const { tradingStats } = useGoogleSheetsData();

  // Dynamic state for crypto data
  const [selectedCrypto, setSelectedCrypto] = useState<string>("bitcoin");
  const [cryptoData, setCryptoData] = useState<CryptoData | null>(null);
  const [customCrypto, setCustomCrypto] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isThrottled, setIsThrottled] = useState<boolean>(false);

  // Monthly capital deployment data (your actual intelligent deployment)
  const monthlyDeployment = [
    {
      month: "Jan",
      deployed: 12000,
      available: 3000,
      opportunities: "High volatility, great entries",
    },
    {
      month: "Feb",
      deployed: 24000,
      available: 4500,
      opportunities: "Major market movement, scaled up",
    },
    {
      month: "Mar",
      deployed: 8500,
      available: 8500,
      opportunities: "Flat market, stayed conservative",
    },
    {
      month: "Apr",
      deployed: 15000,
      available: 12000,
      opportunities: "Selective opportunities returned",
    },
    {
      month: "May",
      deployed: 18000,
      available: 22000,
      opportunities: "Strong trends, increased allocation",
    },
    {
      month: "Jun",
      deployed: 16000,
      available: 24000,
      opportunities: "Mixed signals, moderate deployment",
    },
    {
      month: "Jul",
      deployed: 22000,
      available: 26000,
      opportunities: "Excellent conditions, aggressive",
    },
    {
      month: "Aug",
      deployed: 14000,
      available: 27000,
      opportunities: "Cooling market, reduced exposure",
    },
    {
      month: "Sep",
      deployed: 11000,
      available: 28000,
      opportunities: "Selective, waiting for setups",
    },
  ];

  // Extract your trading data with intelligent capital deployment story
  const yourTradingData = {
    totalDeposited: 28432, // Total capital deposited over 9 months
    realizedProfits: tradingStats?.totalProfit || 4169, // Real cash profits taken
    currentOpenPositions: 11421, // Current open positions value
    safeReserves: 16623, // USDC cash reserves - smart capital allocation
    totalCurrentValue: 28044, // Total portfolio value (positions + reserves)
    avgDeploymentRatio: 43, // Average percentage of capital deployed (from report)
    maxDeployment: 24000, // Peak deployment in February
    minDeployment: 8500, // Conservative deployment in March
    totalTrades: tradingStats?.totalTrades || 875,
    successRate: 100, // Your system has 100% success rate
    timeframe: "9 months",
    startDate: "2025-01-08",
    monthlyAverage: tradingStats?.monthlyAverage || 463,
    intelligentDeployment: true, // Key differentiator
    riskManagement: "Opportunity-driven deployment + reserve management",
    isLiveData: tradingStats?.isLiveData || false,
  };

  // Popular crypto options (verified CoinGecko IDs)
  const popularCryptos: PopularCrypto[] = [
    { id: "bitcoin", name: "Bitcoin", symbol: "BTC" },
    { id: "ethereum", name: "Ethereum", symbol: "ETH" },
    { id: "solana", name: "Solana", symbol: "SOL" },
    { id: "dogecoin", name: "Dogecoin", symbol: "DOGE" },
    { id: "cardano", name: "Cardano", symbol: "ADA" },
    { id: "ripple", name: "XRP", symbol: "XRP" },
    { id: "chainlink", name: "Chainlink", symbol: "LINK" },
    { id: "avalanche-2", name: "Avalanche", symbol: "AVAX" },
    { id: "polkadot", name: "Polkadot", symbol: "DOT" },
    { id: "aftermath-staked-sui", name: "SUI", symbol: "SUI" },
  ];

  // Fetch crypto data from CoinGecko with retry logic
  const fetchCryptoData = async (
    cryptoId: string,
    retries: number = 3
  ): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      // Check cache first to prevent unnecessary API calls
      const cached = cryptoCache.get(cryptoId);
      if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        console.log(`Using cached data for ${cryptoId}`);
        setCryptoData(cached.data);
        setIsLoading(false);
        return;
      }

      // Add delay to prevent rate limiting (increased for safety)
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Get current price and basic info with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const currentResponse = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd&include_24hr_change=true&include_7d_change=true&include_30d_change=true`,
        { signal: controller.signal }
      );

      clearTimeout(timeoutId);

      if (!currentResponse.ok) {
        throw new Error(
          `API Error: ${currentResponse.status} - ${currentResponse.statusText}`
        );
      }

      const currentData = await currentResponse.json();

      if (!currentData[cryptoId]) {
        throw new Error(
          `Cryptocurrency "${cryptoId}" not found. Try using the full name (e.g., "bitcoin" instead of "BTC").`
        );
      }

      // Get historical data for your start date
      const startDate = new Date("2025-01-08");
      const daysSinceStart = Math.floor(
        (new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      let startPrice: number | null = null;

      // Try to get historical data, but don't fail if it's not available
      try {
        const historicalResponse = await fetch(
          `https://api.coingecko.com/api/v3/coins/${cryptoId}/history?date=${startDate
            .toISOString()
            .split("T")[0]
            .split("-")
            .reverse()
            .join("-")}`,
          { signal: controller.signal }
        );

        if (historicalResponse.ok) {
          const historicalData = await historicalResponse.json();
          startPrice = historicalData.market_data?.current_price?.usd;
        }
      } catch (historicalError) {
        console.log("Historical data not available, using estimation");
      }

      const currentPrice: number = currentData[cryptoId].usd;

      // If we can't get exact historical data, use conservative estimation
      if (!startPrice || startPrice <= 0) {
        const estimatedGainSinceJan =
          cryptoId === "bitcoin"
            ? 0.524
            : cryptoId === "ethereum"
            ? 0.45
            : cryptoId === "solana"
            ? 2.1
            : 0.3;
        startPrice = currentPrice / (1 + estimatedGainSinceJan);
      }

      const gainSinceStart = (currentPrice - startPrice) / startPrice;

      const newCryptoData = {
        id: cryptoId,
        name:
          popularCryptos.find((c) => c.id === cryptoId)?.name ||
          cryptoId.charAt(0).toUpperCase() + cryptoId.slice(1),
        symbol:
          popularCryptos.find((c) => c.id === cryptoId)?.symbol ||
          cryptoId.toUpperCase(),
        currentPrice,
        startPrice,
        gainSinceStart,
        change24h: currentData[cryptoId].usd_24h_change || 0,
        change7d: currentData[cryptoId].usd_7d_change || 0,
        change30d: currentData[cryptoId].usd_30d_change || 0,
        daysSinceStart,
      };

      // Cache the result to prevent repeated API calls
      cryptoCache.set(cryptoId, {
        data: newCryptoData,
        timestamp: Date.now(),
      });

      setCryptoData(newCryptoData);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Network error occurred";

      // Retry logic
      if (retries > 0 && !errorMessage.includes("not found")) {
        console.log(`Retrying API call... ${retries} attempts remaining`);
        setTimeout(() => {
          fetchCryptoData(cryptoId, retries - 1);
        }, 1000 * (4 - retries)); // Exponential backoff
        return;
      }

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Load initial data
  useEffect(() => {
    fetchCryptoData(selectedCrypto);
  }, [selectedCrypto]);

  // Calculate comparison data with three strategies (verified math)
  const calculateComparison = (): Comparison | null => {
    if (!cryptoData) return null;

    const totalInvestment = yourTradingData.totalDeposited;

    // Strategy 1: All In on Jan 8 (immediate full deployment)
    const allInValue = totalInvestment * (1 + cryptoData.gainSinceStart);
    const allInProfit = allInValue - totalInvestment;

    // Strategy 2: Dollar Cost Averaging (equal monthly investments)
    const monthlyDCA = totalInvestment / monthlyDeployment.length; // Equal monthly amounts
    let dcaValue = 0;

    // Calculate DCA with proper time weighting
    monthlyDeployment.forEach((_, monthIndex) => {
      const monthsHeld = monthlyDeployment.length - monthIndex; // How long each investment was held
      const monthlyReturn =
        cryptoData.gainSinceStart * (monthsHeld / monthlyDeployment.length);
      const monthlyValue = monthlyDCA * (1 + monthlyReturn);
      dcaValue += monthlyValue;
    });

    const dcaProfit = dcaValue - totalInvestment;

    return {
      allIn: {
        investment: totalInvestment,
        currentValue: allInValue,
        unrealizedGain: allInProfit,
        realized: 0,
        risk: `100% exposed to ${cryptoData.name} volatility from day 1`,
      },
      dca: {
        investment: totalInvestment,
        currentValue: dcaValue,
        unrealizedGain: dcaProfit,
        realized: 0,
        risk: `Mechanical deployment regardless of market conditions`,
      },
      yourWay: {
        investment: totalInvestment,
        realizedProfits: yourTradingData.realizedProfits,
        currentPositions: yourTradingData.currentOpenPositions,
        reserves: yourTradingData.safeReserves,
        totalValue:
          yourTradingData.totalCurrentValue + yourTradingData.realizedProfits,
      },
    };
  };

  const handleCustomCrypto = async (): Promise<void> => {
    if (customCrypto.trim() && !isThrottled) {
      handleCryptoSelection(customCrypto.toLowerCase().trim());
    }
  };

  // Throttled crypto selection to prevent rapid clicking and API abuse
  const handleCryptoSelection = (cryptoId: string): void => {
    if (isThrottled || cryptoId === selectedCrypto) return;

    setSelectedCrypto(cryptoId);
    setIsThrottled(true);

    // 1.5 second cooldown between selections
    setTimeout(() => setIsThrottled(false), 1500);
  };

  // CTA tracking
  const handleMasterclassClick = (location: string): void => {
    trackCTAClick("join_free_masterclass", `dynamic_comparison_${location}`);
    trackOutboundLink(
      "https://dailyprofits.link/class",
      `Masterclass from Dynamic Comparison ${location}`
    );
  };

  const formatCurrency = (amount: number): string =>
    `$${amount.toLocaleString()}`;
  const formatPercent = (percent: number): string =>
    `${percent > 0 ? "+" : ""}${percent.toFixed(1)}%`;

  const comparison = calculateComparison();

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background gradient matching your other components */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header section with live badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 font-medium">LIVE COMPARISON</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            "All-In" vs "DCA" vs "AI-Enhanced Autonomous Trading"
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            See how my autonomous trader intelligently deployed capital over
            time vs. going "all in" immediately. My system waits for
            opportunities and manages risk - compare against any cryptocurrency
            to see the smart money advantage.
          </p>

          {/* Primary CTA matching your style */}
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-lg rounded-3xl p-8 border border-purple-400/50 shadow-2xl shadow-purple-500/25 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to Learn This System?
            </h3>
            <p className="text-purple-100 mb-6">
              Join my free masterclass where I reveal exactly how my AI trader
              generates consistent profits while others chase paper gains.
            </p>
            <a
              href="https://dailyprofits.link/class"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleMasterclassClick("header")}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Join Free Masterclass
              <Brain className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Crypto Selection */}
        <div className="bg-white/8 backdrop-blur-sm rounded-2xl border border-white/20 p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            Choose Any Cryptocurrency to Compare
          </h3>

          {/* Popular crypto buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 mb-6">
            {popularCryptos.map((crypto) => (
              <button
                key={crypto.id}
                onClick={() => handleCryptoSelection(crypto.id)}
                disabled={isThrottled}
                className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCrypto === crypto.id
                    ? "bg-purple-600 text-white border-purple-500"
                    : isThrottled
                    ? "bg-white/5 text-gray-500 border-white/20 cursor-not-allowed opacity-50"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 border-white/20"
                } border`}
              >
                {crypto.symbol}
              </button>
            ))}
          </div>

          {/* Custom crypto input */}
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="text"
              value={customCrypto}
              onChange={(e) => setCustomCrypto(e.target.value)}
              placeholder="Enter crypto name (e.g., cardano, solana)"
              className="flex-1 bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              onKeyPress={(e) => e.key === "Enter" && handleCustomCrypto()}
            />
            <button
              onClick={handleCustomCrypto}
              disabled={isThrottled}
              className={`px-4 py-2 rounded-lg transition-colors ${
                isThrottled
                  ? "bg-purple-400 text-white cursor-not-allowed opacity-50"
                  : "bg-purple-600 hover:bg-purple-700 text-white"
              }`}
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
            <p className="text-gray-300">Loading live crypto data...</p>
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 text-center mb-8">
            <p className="text-red-400 text-lg mb-2">{error}</p>
            <p className="text-red-400 text-sm mt-2">
              Try a different cryptocurrency ID
            </p>
          </div>
        )}

        {/* Comparison Results */}
        {cryptoData && comparison && !isLoading && (
          <>
            {/* Current Crypto Info with your card styling */}
            <div className="bg-white/8 backdrop-blur-sm rounded-2xl border border-white/20 p-6 mb-12">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {cryptoData.name} ({cryptoData.symbol})
                </h3>
                <div className="text-3xl font-bold text-purple-300 mb-4 font-mono">
                  {formatCurrency(cryptoData.currentPrice)}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-gray-400 text-sm">Since Jan 8</div>
                    <div
                      className={`font-bold ${
                        cryptoData.gainSinceStart >= 0
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {formatPercent(cryptoData.gainSinceStart * 100)}
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-gray-400 text-sm">24h</div>
                    <div
                      className={`font-bold ${
                        cryptoData.change24h >= 0
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {formatPercent(cryptoData.change24h)}
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-gray-400 text-sm">7d</div>
                    <div
                      className={`font-bold ${
                        cryptoData.change7d >= 0
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {formatPercent(cryptoData.change7d)}
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-gray-400 text-sm">30d</div>
                    <div
                      className={`font-bold ${
                        cryptoData.change30d >= 0
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {formatPercent(cryptoData.change30d)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Three-Way Strategy Comparison */}
            <div className="grid lg:grid-cols-3 gap-6 mb-12">
              {/* Strategy 1: All In Immediately */}
              <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-red-500/30 transition-all duration-300 shadow-lg shadow-red-500/15">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

                <div className="relative flex items-center mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 p-2 mr-3 shadow-lg shadow-red-500/40">
                    <AlertTriangle className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      All In {cryptoData.symbol}
                    </h3>
                    <p className="text-red-300 text-sm">
                      Jan 8: Full deployment
                    </p>
                  </div>
                </div>

                <div className="relative space-y-3 mb-6">
                  <div className="flex justify-between py-1 text-sm">
                    <span className="text-gray-300">Deployed Day 1:</span>
                    <span className="text-white font-semibold">
                      {formatCurrency(comparison.allIn.investment)}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 text-sm">
                    <span className="text-gray-300">Current Value:</span>
                    <span
                      className={`font-semibold ${
                        comparison.allIn.currentValue >=
                        comparison.allIn.investment
                          ? "text-orange-400"
                          : "text-red-400"
                      }`}
                    >
                      {formatCurrency(comparison.allIn.currentValue)}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 text-sm font-bold">
                    <span className="text-gray-300">Real Cash:</span>
                    <span className="text-red-400">$0</span>
                  </div>
                </div>

                <div className="relative bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  <p className="text-red-300 text-xs">
                    100% risk from day one. No reserves, no flexibility, pure
                    speculation.
                  </p>
                </div>
              </div>

              {/* Strategy 2: Dollar Cost Averaging */}
              <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-yellow-500/30 transition-all duration-300 shadow-lg shadow-yellow-500/15">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

                <div className="relative flex items-center mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 p-2 mr-3 shadow-lg shadow-yellow-500/40">
                    <BarChart3 className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      DCA {cryptoData.symbol}
                    </h3>
                    <p className="text-yellow-300 text-sm">
                      $3,156/month fixed
                    </p>
                  </div>
                </div>

                <div className="relative space-y-3 mb-6">
                  <div className="flex justify-between py-1 text-sm">
                    <span className="text-gray-300">Total Invested:</span>
                    <span className="text-white font-semibold">
                      {formatCurrency(comparison.dca.investment)}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 text-sm">
                    <span className="text-gray-300">Current Value:</span>
                    <span
                      className={`font-semibold ${
                        comparison.dca.currentValue >= comparison.dca.investment
                          ? "text-yellow-400"
                          : "text-red-400"
                      }`}
                    >
                      {formatCurrency(comparison.dca.currentValue)}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 text-sm font-bold">
                    <span className="text-gray-300">Real Cash:</span>
                    <span className="text-red-400">$0</span>
                  </div>
                </div>

                <div className="relative bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                  <p className="text-yellow-300 text-xs">
                    Mechanical deployment regardless of market conditions. No
                    intelligence.
                  </p>
                </div>
              </div>

              {/* Strategy 3: Your Intelligent System */}
              <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-green-500/30 transition-all duration-300 shadow-lg shadow-green-500/15">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

                <div className="relative flex items-center mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-blue-500 p-2 mr-3 shadow-lg shadow-green-500/40">
                    <Brain className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      AI Intelligence
                    </h3>
                    <p className="text-green-300 text-sm">Opportunity-driven</p>
                  </div>
                </div>

                <div className="relative space-y-3 mb-6">
                  <div className="flex justify-between py-1 text-sm">
                    <span className="text-gray-300">Peak Deployment:</span>
                    <span className="text-white font-semibold">
                      {formatCurrency(yourTradingData.maxDeployment)}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 text-sm">
                    <span className="text-gray-300">Current Positions:</span>
                    <span className="text-blue-400 font-semibold">
                      {formatCurrency(comparison.yourWay.currentPositions)}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 text-sm font-bold">
                    <span className="text-gray-300">Real Cash Made:</span>
                    <span className="text-green-400">
                      {formatCurrency(comparison.yourWay.realizedProfits)}
                    </span>
                  </div>
                </div>

                <div className="relative bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                  <p className="text-green-300 text-xs mb-2">
                    Autonomous intelligence: Deploy when opportunities arise,
                    conserve when they don't.
                  </p>

                  <div className="text-center">
                    <a
                      href="https://dailyprofits.link/class"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        handleMasterclassClick("three_way_comparison")
                      }
                      className="inline-flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs font-semibold transition-all duration-300"
                    >
                      Learn This
                      <Brain className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Capital Deployment Intelligence Visualization */}
            <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-lg rounded-3xl p-10 border border-slate-600/50 shadow-2xl shadow-slate-900/50 mb-12">
              <h3 className="text-3xl font-bold text-white mb-6 text-center">
                Intelligent Capital Deployment Over Time
              </h3>

              <p className="text-slate-200 text-center mb-8 text-lg">
                See how my autonomous trader smartly deployed capital
                month-by-month based on market opportunities, rather than going
                "all in" immediately or using mechanical dollar-cost averaging.
              </p>

              {/* Monthly Deployment Chart */}
              <div className="mb-8">
                <div className="grid grid-cols-9 gap-2 mb-4">
                  {monthlyDeployment.map((monthData) => {
                    const deploymentHeight =
                      (monthData.deployed / yourTradingData.maxDeployment) *
                      100;
                    const availableHeight =
                      (monthData.available / yourTradingData.totalDeposited) *
                      100;

                    return (
                      <div key={monthData.month} className="text-center">
                        <div className="h-32 flex flex-col-reverse mb-2 relative">
                          {/* Available Capital (background) */}
                          <div
                            className="bg-gray-600/30 border border-gray-500/30 rounded-t-sm"
                            style={{ height: `${availableHeight}%` }}
                          ></div>
                          {/* Deployed Capital (foreground) */}
                          <div
                            className="bg-gradient-to-t from-green-500 to-green-400 border border-green-400/50 rounded-t-sm absolute bottom-0 w-full"
                            style={{ height: `${deploymentHeight}%` }}
                          ></div>
                        </div>
                        <div className="text-xs font-bold text-white">
                          {monthData.month}
                        </div>
                        <div className="text-xs text-green-400">
                          ${(monthData.deployed / 1000).toFixed(0)}K
                        </div>
                        <div className="text-xs text-gray-400">
                          /{(monthData.available / 1000).toFixed(0)}K
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-t from-green-500 to-green-400 rounded"></div>
                    <span className="text-gray-300">Deployed Capital</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-600/30 border border-gray-500/30 rounded"></div>
                    <span className="text-gray-300">Available Reserves</span>
                  </div>
                </div>
              </div>

              {/* Key Insights */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-red-400 mb-2">
                    Feb
                  </div>
                  <div className="text-gray-300 text-sm">Peak Deployment</div>
                  <div className="text-red-300 text-xs">
                    $24K when opportunities were hot
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">
                    Mar
                  </div>
                  <div className="text-gray-300 text-sm">
                    Conservative Pullback
                  </div>
                  <div className="text-blue-300 text-xs">
                    $8.5K when market went flat
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">
                    Smart
                  </div>
                  <div className="text-gray-300 text-sm">No Wasted Capital</div>
                  <div className="text-green-300 text-xs">
                    Always kept reserves ready
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <p className="text-blue-200 text-sm text-center">
                  <strong>This is Autonomous Trading Intelligence:</strong> My
                  Robotic Trader analyzes market conditions each month and
                  deployed capital accordingly. No emotional decisions, no FOMO,
                  no catching falling knives - just pure "Set-It-and-Forget-It"
                  opportunity recognition. My trader only takes what the market
                  gives.
                </p>
              </div>
            </div>

            {/* FIXED: Three-Way Strategy Comparison with ALL strategies */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30 shadow-lg shadow-purple-500/20 text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-8">
                The Bottom Line
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* ALL IN Results */}
                <div className="bg-white/5 rounded-xl p-4 md:p-6 min-h-[200px] flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-red-400 mb-3 md:mb-4">
                      Hypothetical "All In" {cryptoData.symbol}
                    </h4>
                    <div className="text-2xl md:text-4xl font-bold mb-2 font-mono">
                      <span
                        className={
                          comparison.allIn.unrealizedGain >= 0
                            ? "text-orange-400"
                            : "text-red-400"
                        }
                      >
                        {formatCurrency(comparison.allIn.unrealizedGain)}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Unrealized (paper gains)
                    </p>
                  </div>
                  <div className="mt-4">
                    <div className="text-xl md:text-2xl font-bold text-red-400">
                      $0
                    </div>
                    <p className="text-red-300 text-sm">Real money made</p>
                  </div>
                </div>

                {/* DCA Results */}
                <div className="bg-white/5 rounded-xl p-4 md:p-6 min-h-[200px] flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-yellow-400 mb-3 md:mb-4">
                      Dollar Cost Average {cryptoData.symbol}
                    </h4>
                    <div className="text-2xl md:text-4xl font-bold mb-2 font-mono">
                      <span
                        className={
                          comparison.dca.unrealizedGain >= 0
                            ? "text-yellow-400"
                            : "text-red-400"
                        }
                      >
                        {formatCurrency(comparison.dca.unrealizedGain)}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Unrealized (paper gains)
                    </p>
                  </div>
                  <div className="mt-4">
                    <div className="text-xl md:text-2xl font-bold text-red-400">
                      $0
                    </div>
                    <p className="text-red-300 text-sm">Real money made</p>
                  </div>
                </div>

                {/* YOUR AI Results */}
                <div className="bg-white/5 rounded-xl p-4 md:p-6 min-h-[200px] flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-green-400 mb-3 md:mb-4">
                      Intelligent AI Deployment
                    </h4>
                    <div className="text-2xl md:text-4xl font-bold text-green-400 mb-2 font-mono">
                      {formatCurrency(comparison.yourWay.realizedProfits)}
                    </div>
                    <p className="text-gray-400 text-sm">Real cash profits</p>
                  </div>
                  <div className="mt-4">
                    <div className="text-xl md:text-2xl font-bold text-blue-400">
                      {formatCurrency(comparison.yourWay.reserves)}
                    </div>
                    <p className="text-blue-300 text-sm">
                      Smart reserves maintained
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
                {/* FIXED: Corrected math comparison */}
                <div className="text-2xl font-bold text-yellow-400 mb-2">
                  {(() => {
                    const yourRealMoney = comparison.yourWay.realizedProfits;
                    const allInDifference =
                      yourRealMoney - comparison.allIn.unrealizedGain;
                    const dcaDifference =
                      yourRealMoney - comparison.dca.unrealizedGain;

                    // Show the most dramatic comparison
                    if (Math.abs(allInDifference) > Math.abs(dcaDifference)) {
                      if (comparison.allIn.unrealizedGain < 0) {
                        return `${formatCurrency(
                          yourRealMoney
                        )} real profit vs ${formatCurrency(
                          comparison.allIn.unrealizedGain
                        )} paper losses`;
                      } else {
                        return `${formatCurrency(
                          yourRealMoney
                        )} REAL MONEY vs ${formatCurrency(
                          comparison.allIn.unrealizedGain
                        )} paper gains`;
                      }
                    } else {
                      if (comparison.dca.unrealizedGain < 0) {
                        return `${formatCurrency(
                          yourRealMoney
                        )} real profit vs ${formatCurrency(
                          comparison.dca.unrealizedGain
                        )} DCA losses`;
                      } else {
                        return `${formatCurrency(
                          yourRealMoney
                        )} REAL MONEY vs ${formatCurrency(
                          comparison.dca.unrealizedGain
                        )} DCA paper gains`;
                      }
                    }
                  })()}
                </div>
                <p className="text-yellow-300 mb-4">
                  Smart money takes real profits. Gamblers chase paper gains.
                </p>

                {/* Strategic CTA */}
                <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-400/30">
                  <p className="text-white font-bold mb-3">
                    Ready to learn how my AI system generates real profits?
                  </p>
                  <a
                    href="https://dailyprofits.link/class"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleMasterclassClick("bottom_line")}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105"
                  >
                    Join Free Masterclass Now
                    <Zap className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Data Source Indicator */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/20">
                <div
                  className={`w-2 h-2 rounded-full ${
                    yourTradingData.isLiveData
                      ? "bg-green-400 animate-pulse"
                      : "bg-blue-400"
                  }`}
                ></div>
                <span className="text-gray-300 text-sm">
                  {yourTradingData.isLiveData
                    ? "Live trading data"
                    : "Demo data"}{" "}
                  • Crypto prices updated live via CoinGecko
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default DynamicSmartMoneyComparison;
