import { useState, useEffect, useRef } from "react";
import {
  Shield,
  AlertTriangle,
  DollarSign,
  Target,
  Brain,
  Zap,
  Search,
} from "lucide-react";
import { trackCTAClick, trackOutboundLink } from "../utils/analytics";
import { useGoogleSheetsData } from "../hooks/useGoogleSheetsData";

// Types of data we expect from CoinMarketCap API
interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  currentPrice: number;
  startPrice: number;
  gainSinceStart: number;
  change24h: number;
  change7d: number | null;
  change30d: number | null;
  daysSinceStart: number;
}

interface CachedCryptoData {
  data: CryptoData;
  timestamp: number;
}

const DynamicSmartMoneyComparison = () => {
  // Get live trading data from your Google Sheets
  const { tradingStats } = useGoogleSheetsData();

  // Dynamic state for crypto data
  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");
  const [cryptoData, setCryptoData] = useState<CryptoData | null>(null);
  const [customCrypto, setCustomCrypto] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Enhanced cache with longer duration for CMC
  const cryptoCache = new Map<string, CachedCryptoData>();
  const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes (CMC updates less frequently)

  // Fallback data for when API is completely unavailable
  const fallbackCryptoData: Record<string, Partial<CryptoData>> = {
    bitcoin: {
      currentPrice: 95000,
      gainSinceStart: 0.52,
      change24h: -2.3,
      symbol: "BTC",
      name: "Bitcoin",
    },
    ethereum: {
      currentPrice: 3600,
      gainSinceStart: 0.45,
      change24h: -1.8,
      symbol: "ETH",
      name: "Ethereum",
    },
    solana: {
      currentPrice: 145,
      gainSinceStart: 2.1,
      change24h: -3.2,
      symbol: "SOL",
      name: "Solana",
    },
    dogecoin: {
      currentPrice: 0.38,
      gainSinceStart: 1.8,
      change24h: -4.1,
      symbol: "DOGE",
      name: "Dogecoin",
    },
  };

  // Extract your trading data from Google Sheets - NOW WITH LIVE PORTFOLIO DATA!
  const yourTradingData = {
    // Live data from Coinbase Balance tab
    totalDeposited:
      tradingStats?.portfolioSummary?.totalCapitalDeposited || 28432,
    realizedProfits:
      tradingStats?.portfolioSummary?.realizedProfits ||
      tradingStats?.totalProfit ||
      4169,
    currentOpenPositions:
      tradingStats?.portfolioSummary?.openTradingPositions || 11762,
    safeReserves: tradingStats?.portfolioSummary?.availableUSDC || 16624,
    totalCurrentValue:
      tradingStats?.portfolioSummary?.totalAccountValue || 28386,
    avgTradeSize: tradingStats?.avgProfitPerTrade || 4.76,
    totalTrades: tradingStats?.totalTrades || 875,
    successRate: 100,
    timeframe: "9 months",
    startDate: "2025-01-08",
    monthlyAverage: tradingStats?.monthlyAverage || 463,
    dailyAverage: tradingStats?.dailyAvg || 16.79,
    bestMonthProfit: tradingStats?.bestMonthProfit || 817.31,
    roiOnCapital:
      ((tradingStats?.portfolioSummary?.realizedProfits || 4169) /
        (tradingStats?.portfolioSummary?.totalCapitalDeposited || 28432)) *
      100,
    isLiveData: tradingStats?.isLiveData || false,
  };

  // Popular crypto options
  const popularCryptos = [
    { id: "bitcoin", name: "Bitcoin", symbol: "BTC" },
    { id: "ethereum", name: "Ethereum", symbol: "ETH" },
    { id: "solana", name: "Solana", symbol: "SOL" },
    { id: "dogecoin", name: "Dogecoin", symbol: "DOGE" },
    { id: "cardano", name: "Cardano", symbol: "ADA" },
    { id: "polygon", name: "Polygon", symbol: "MATIC" },
    { id: "chainlink", name: "Chainlink", symbol: "LINK" },
    { id: "avalanche", name: "Avalanche", symbol: "AVAX" },
  ];

  // Fetch crypto data with CoinMarketCap
  const fetchCryptoData = async (
    cryptoId: string,
    retries: number = 2
  ): Promise<void> => {
    try {
      // CHECK CACHE FIRST - before ANY other operations
      const cached = cryptoCache.get(cryptoId);
      if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        console.log(`Using cached data for ${cryptoId}`);
        setCryptoData(cached.data);
        setIsLoading(false);
        setError(null);
        return;
      }

      setIsLoading(true);
      setError(null);

      // Call your backend proxy that uses CoinMarketCap
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const response = await fetch(`/api/coinmarketcap?crypto=${cryptoId}`, {
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        if (response.status === 429 && retries > 0) {
          // Rate limited - wait and retry with exponential backoff
          const waitTime = (3 - retries) * 2000; // 2s, then 4s
          await new Promise((resolve) => setTimeout(resolve, waitTime));
          return fetchCryptoData(cryptoId, retries - 1);
        }
        throw new Error(`API responded with ${response.status}`);
      }

      const data = await response.json();

      if (!data || !data.currentPrice) {
        throw new Error("Invalid data received");
      }

      // Calculate gain since your start date
      const startDate = new Date("2025-01-08");
      const daysSinceStart = Math.floor(
        (new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      const cryptoInfo = popularCryptos.find((c) => c.id === cryptoId);

      const newCryptoData: CryptoData = {
        id: cryptoId,
        name: cryptoInfo?.name || data.name || cryptoId,
        symbol: cryptoInfo?.symbol || data.symbol || cryptoId.toUpperCase(),
        currentPrice: data.currentPrice,
        startPrice:
          data.startPrice ||
          data.currentPrice / (1 + (data.gainSinceStart || 0)),
        gainSinceStart: data.gainSinceStart || 0,
        change24h: data.change24h || 0,
        change7d: data.change7d || null,
        change30d: data.change30d || null,
        daysSinceStart,
      };

      // Cache the successful result
      cryptoCache.set(cryptoId, {
        data: newCryptoData,
        timestamp: Date.now(),
      });

      setCryptoData(newCryptoData);
      setError(null);
    } catch (err) {
      console.error("Crypto fetch error:", err);

      // Try fallback data
      const fallback = fallbackCryptoData[cryptoId];
      if (fallback) {
        const startDate = new Date("2025-01-08");
        const daysSinceStart = Math.floor(
          (new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
        );

        setCryptoData({
          id: cryptoId,
          name: fallback.name || cryptoId,
          symbol: fallback.symbol || cryptoId.toUpperCase(),
          currentPrice: fallback.currentPrice || 0,
          startPrice: fallback.currentPrice! / (1 + fallback.gainSinceStart!),
          gainSinceStart: fallback.gainSinceStart || 0,
          change24h: fallback.change24h || 0,
          change7d: null,
          change30d: null,
          daysSinceStart,
        });
        setError("Using cached prices - live data temporarily unavailable");
      } else {
        setError(
          "Price data unavailable for this cryptocurrency. Try Bitcoin or Ethereum."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Load initial data
  useEffect(() => {
    fetchCryptoData(selectedCrypto);
  }, [selectedCrypto]);

  // Calculate comparison data
  const calculateComparison = () => {
    if (!cryptoData) return null;

    const allInValue =
      yourTradingData.totalDeposited * (1 + cryptoData.gainSinceStart);
    const allInProfit = allInValue - yourTradingData.totalDeposited;

    return {
      allIn: {
        investment: yourTradingData.totalDeposited,
        currentValue: allInValue,
        unrealizedGain: allInProfit,
        realized: 0,
        risk: `100% exposed to ${cryptoData.name} volatility`,
      },
      yourWay: {
        investment: yourTradingData.totalDeposited,
        realizedProfits: yourTradingData.realizedProfits,
        currentPositions: yourTradingData.currentOpenPositions,
        reserves: yourTradingData.safeReserves,
        totalValue:
          yourTradingData.totalCurrentValue + yourTradingData.realizedProfits,
      },
    };
  };

  // Rate limiting state
  const [isSearching, setIsSearching] = useState(false);
  const lastSearchTime = useRef<number>(0);

  const handleCustomCrypto = async () => {
    const now = Date.now();
    const timeSinceLastSearch = now - lastSearchTime.current;

    // Rate limit: Max 1 search every 2 seconds
    if (timeSinceLastSearch < 2000) {
      setError("Please wait a moment before searching again");
      return;
    }

    if (customCrypto.trim() && !isSearching) {
      setIsSearching(true);
      lastSearchTime.current = now;
      await fetchCryptoData(customCrypto.toLowerCase().trim());
      setSelectedCrypto(customCrypto.toLowerCase().trim());
      setCustomCrypto(""); // Clear input after search
      setIsSearching(false);
    }
  };

  // CTA tracking
  const handleMasterclassClick = (location: string) => {
    trackCTAClick("join_free_masterclass", `dynamic_comparison_${location}`);
    trackOutboundLink(
      "https://dailyprofits.link/class",
      `Masterclass from Dynamic Comparison ${location}`
    );
  };

  const formatCurrency = (amount: number) =>
    `$${amount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  const formatPercent = (percent: number) =>
    `${percent > 0 ? "+" : ""}${percent.toFixed(2)}%`;

  const comparison = calculateComparison();

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            💰 All-In vs. Smart Money Strategy
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Compare what would have happened if you went "all in" on any crypto
            vs. my proven AI trading system with{" "}
            {yourTradingData.isLiveData ? "LIVE" : ""} real results
          </p>
        </div>

        {/* Crypto Selection */}
        <div className="bg-white/8 backdrop-blur-sm rounded-2xl border border-white/20 p-8 mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-6">
            Choose Any Cryptocurrency to Compare
          </h3>

          {/* Popular Cryptos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {popularCryptos.map((crypto) => (
              <button
                key={crypto.id}
                onClick={() => setSelectedCrypto(crypto.id)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  selectedCrypto === crypto.id
                    ? "border-purple-500/50 bg-purple-500/10"
                    : "border-white/20 hover:border-white/30"
                }`}
              >
                <div className="font-bold text-white">{crypto.symbol}</div>
                <div className="text-sm text-gray-300">{crypto.name}</div>
              </button>
            ))}
          </div>

          {/* Custom Input */}
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Enter crypto ID (e.g., 'bitcoin', 'ethereum')"
              value={customCrypto}
              onChange={(e) => setCustomCrypto(e.target.value)}
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 backdrop-blur-sm focus:border-purple-500/50 focus:outline-none transition-colors"
              onKeyPress={(e) => e.key === "Enter" && handleCustomCrypto()}
              disabled={isSearching}
              maxLength={30}
            />
            <button
              onClick={handleCustomCrypto}
              disabled={isSearching || !customCrypto.trim()}
              className="px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSearching ? (
                <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
              ) : (
                <Search className="w-5 h-5 text-white" />
              )}
            </button>
          </div>

          <p className="text-gray-400 text-sm text-center mt-3">
            Use common crypto names (bitcoin, ethereum, solana, etc.)
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="animate-spin w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-300">
              Loading crypto data from CoinMarketCap...
            </p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 mb-12 text-center">
            <AlertTriangle className="w-8 h-8 text-red-400 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white mb-4">
              Unable to Load Crypto Data
            </h3>
            <p className="text-red-400">{error}</p>
            <p className="text-red-400 text-sm mt-2">
              Try a different cryptocurrency or refresh the page
            </p>
          </div>
        )}

        {/* Comparison Results */}
        {cryptoData && comparison && !isLoading && (
          <>
            {/* Current Crypto Info */}
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
                        (cryptoData.change7d || 0) >= 0
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {formatPercent(cryptoData.change7d || 0)}
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-gray-400 text-sm">30d</div>
                    <div
                      className={`font-bold ${
                        (cryptoData.change30d || 0) >= 0
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {formatPercent(cryptoData.change30d || 0)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Comparison Cards */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* All In Strategy */}
              <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-red-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-red-500/15">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

                <div className="relative flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 p-3 mr-4 shadow-lg shadow-red-500/40">
                    <AlertTriangle className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      All In {cryptoData.symbol}
                    </h3>
                    <p className="text-red-300">The "YOLO" strategy</p>
                  </div>
                </div>

                <div className="relative space-y-4 mb-8">
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-gray-300">Investment (Jan 8):</span>
                    <span className="text-white font-semibold">
                      {formatCurrency(comparison.allIn.investment)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
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
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-gray-300">Unrealized Gain/Loss:</span>
                    <span
                      className={`font-semibold ${
                        comparison.allIn.unrealizedGain >= 0
                          ? "text-orange-400"
                          : "text-red-400"
                      }`}
                    >
                      {formatCurrency(comparison.allIn.unrealizedGain)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-gray-300">Cash in Hand:</span>
                    <span className="text-red-400 font-semibold">$0.00</span>
                  </div>
                </div>

                <div className="relative bg-red-500/20 rounded-lg p-4 border border-red-400/30">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-red-300 font-bold mb-1">
                        High Risk Reality:
                      </p>
                      <p className="text-red-200 text-sm">
                        {comparison.allIn.risk}
                      </p>
                      <p className="text-red-200 text-sm mt-2">
                        Paper gains mean nothing until you sell. Can you time
                        the market perfectly?
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Smart Money Strategy */}
              <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-green-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-green-500/15">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

                <div className="relative flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 mr-4 shadow-lg shadow-green-500/40">
                    <Brain className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Smart AI System
                    </h3>
                    <p className="text-green-300">Proven & profitable</p>
                  </div>
                </div>

                <div className="relative space-y-4 mb-8">
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-gray-300">Same Investment:</span>
                    <span className="text-white font-semibold">
                      {formatCurrency(comparison.yourWay.investment)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-gray-300">Current Positions:</span>
                    <span className="text-green-400 font-semibold">
                      {formatCurrency(comparison.yourWay.currentPositions)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-gray-300">USDC Reserves:</span>
                    <span className="text-blue-400 font-semibold">
                      {formatCurrency(comparison.yourWay.reserves)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-gray-300">Real Cash Profits:</span>
                    <span className="text-green-400 font-bold text-lg">
                      {formatCurrency(comparison.yourWay.realizedProfits)}
                    </span>
                  </div>
                </div>

                <div className="relative bg-green-500/20 rounded-lg p-4 border border-green-400/30">
                  <div className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-green-300 font-bold mb-1">
                        Smart Money Advantage:
                      </p>
                      <p className="text-green-200 text-sm">
                        Real profits withdrawn. Safe reserves maintained. No
                        timing needed.
                      </p>
                      <p className="text-green-200 text-sm mt-2">
                        {yourTradingData.totalTrades} trades •{" "}
                        {formatPercent(yourTradingData.successRate)} success
                        rate
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Insight Box - FULL WIDTH CENTERED & BOLD */}
            <div className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 border-2 border-purple-400/40 rounded-2xl p-8 md:p-12 mb-12 text-center">
              <div className="max-w-4xl mx-auto">
                {/* Icon centered above on mobile, larger */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 p-5 mx-auto mb-6 shadow-lg shadow-purple-500/50">
                  <DollarSign className="w-full h-full text-white" />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  The Real Money Difference
                </h3>

                <p className="text-purple-100 text-xl md:text-2xl font-semibold mb-4">
                  {comparison.allIn.unrealizedGain < 0
                    ? `${formatCurrency(
                        comparison.yourWay.realizedProfits +
                          Math.abs(comparison.allIn.unrealizedGain)
                      )} better than going all-in`
                    : comparison.allIn.unrealizedGain > 0
                    ? `${formatCurrency(
                        comparison.yourWay.realizedProfits
                      )} in real cash vs ${formatCurrency(
                        comparison.allIn.unrealizedGain
                      )} paper gains`
                    : `${formatCurrency(
                        comparison.yourWay.realizedProfits
                      )} in real profits`}
                </p>

                <p className="text-purple-200 text-lg md:text-xl max-w-2xl mx-auto">
                  Smart money takes real profits. Gamblers chase paper gains.
                </p>
              </div>
            </div>

            {/* Single Strategic CTA */}
            <div className="text-center bg-white/8 backdrop-blur-sm rounded-2xl border border-white/20 p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                Stop Gambling. Start Profiting.
              </h3>
              <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
                Join my free masterclass and discover the exact AI trading
                system that generated{" "}
                {formatCurrency(yourTradingData.realizedProfits)} in real,
                withdrawable profits.
              </p>
              <a
                href="https://dailyprofits.link/class"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleMasterclassClick("final")}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30"
              >
                Join Free Masterclass Now
                <Zap className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-6 text-sm">
                <div className="flex items-center gap-2 text-green-300">
                  <Shield className="w-4 h-4" />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-2 text-blue-300">
                  <Target className="w-4 h-4" />
                  <span>Proven System</span>
                </div>
                <div className="flex items-center gap-2 text-purple-300">
                  <DollarSign className="w-4 h-4" />
                  <span>Real Results</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default DynamicSmartMoneyComparison;
