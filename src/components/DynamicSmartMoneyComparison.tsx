// src/components/DynamicSmartMoneyComparison.tsx - COMPLETE RESTORED VERSION
import { useState, useEffect, useRef } from "react";
import {
  TrendingUp,
  Shield,
  AlertTriangle,
  DollarSign,
  Target,
  Brain,
  Zap,
  BarChart3,
  PiggyBank,
  RefreshCw,
  Search,
} from "lucide-react";
import { trackCTAClick, trackOutboundLink } from "../utils/analytics";
import { useGoogleSheetsData } from "../hooks/useGoogleSheetsData";

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
  const { tradingStats } = useGoogleSheetsData();

  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");
  const [cryptoData, setCryptoData] = useState<CryptoData | null>(null);
  const [customCrypto, setCustomCrypto] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const lastSearchTime = useRef<number>(0);

  const cryptoCache = new Map<string, CachedCryptoData>();
  const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes for CMC

  // Extract your trading data from Google Sheets with CORRECT property names
  const yourTradingData = {
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
    { id: "avalanche-2", name: "Avalanche", symbol: "AVAX" },
  ];

  // Fetch crypto data from CoinMarketCap via proxy
  const fetchCryptoData = async (cryptoId: string, retries: number = 2) => {
    try {
      // Check cache first
      const cached = cryptoCache.get(cryptoId);
      if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        console.log(`✅ Using cached data for ${cryptoId}`);
        setCryptoData(cached.data);
        setIsLoading(false);
        setError(null);
        return;
      }

      setIsLoading(true);
      setError(null);

      // Call CoinMarketCap API proxy with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const response = await fetch(`/api/coinmarketcap?crypto=${cryptoId}`, {
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        if (response.status === 429 && retries > 0) {
          // Rate limited - retry with exponential backoff
          const waitTime = (3 - retries) * 2000;
          await new Promise((resolve) => setTimeout(resolve, waitTime));
          return fetchCryptoData(cryptoId, retries - 1);
        }
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();

      if (!data || !data.currentPrice) {
        throw new Error("Invalid data received from API");
      }

      // Calculate days since start
      const startDate = new Date(yourTradingData.startDate);
      const daysSinceStart = Math.floor(
        (Date.now() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      const cryptoDataObj: CryptoData = {
        id: cryptoId,
        name: data.name,
        symbol: data.symbol,
        currentPrice: data.currentPrice,
        startPrice: data.startPrice,
        gainSinceStart: data.gainSinceStart,
        change24h: data.change24h,
        change7d: data.change7d,
        change30d: data.change30d,
        daysSinceStart,
      };

      console.log(
        `✅ CMC: ${data.symbol} fetched - ${data.currentPrice.toFixed(2)}`
      );

      setCryptoData(cryptoDataObj);
      cryptoCache.set(cryptoId, {
        data: cryptoDataObj,
        timestamp: Date.now(),
      });
    } catch (err) {
      console.error("Error fetching crypto data:", err);
      setError(
        "Unable to fetch live crypto prices. Please try again or select a different crypto."
      );
    } finally {
      setIsLoading(false);
    }
  };

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
        gainPercent: cryptoData.gainSinceStart * 100,
      },
      yourWay: {
        investment: yourTradingData.totalDeposited,
        realizedProfits: yourTradingData.realizedProfits,
        currentPositions: yourTradingData.currentOpenPositions,
        reserves: yourTradingData.safeReserves,
        totalValue:
          yourTradingData.totalCurrentValue + yourTradingData.realizedProfits,
        gainPercent: yourTradingData.roiOnCapital,
      },
    };
  };

  // Dynamic message based on comparison
  const getDynamicMessage = () => {
    if (!cryptoData) return null;
    const comparison = calculateComparison();
    if (!comparison) return null;

    const { unrealizedGain } = comparison.allIn;
    const yourRealizedProfits = yourTradingData.realizedProfits;
    const difference = yourRealizedProfits - unrealizedGain;

    if (unrealizedGain < 0 && yourRealizedProfits > 0) {
      return {
        type: "success" as const,
        icon: "🎯",
        title: "Smart Money Wins Big",
        message: `While ${cryptoData.name} holders are down ${formatCurrency(
          Math.abs(unrealizedGain)
        )}, your AI trader locked in ${formatCurrency(
          yourRealizedProfits
        )} in real profits. That's ${formatCurrency(
          difference
        )} better than holding!`,
      };
    }

    if (unrealizedGain > 0 && difference < 0) {
      return {
        type: "warning" as const,
        icon: "⚠️",
        title: "Paper Gains vs Real Money",
        message: `Sure, ${cryptoData.name} is up ${formatCurrency(
          unrealizedGain
        )} on paper. But you've already banked ${formatCurrency(
          yourRealizedProfits
        )} in REAL profits. No stress, no volatility risk, just consistent gains.`,
      };
    }

    if (difference > 0) {
      return {
        type: "success" as const,
        icon: "💰",
        title: "You're Crushing It",
        message: `Your AI trader has secured ${formatCurrency(
          yourRealizedProfits
        )} in realized profits - ${formatCurrency(
          difference
        )} more than holding ${
          cryptoData.name
        }. Plus you've got ${formatCurrency(
          yourTradingData.safeReserves
        )} in safe reserves!`,
      };
    }

    return {
      type: "info" as const,
      icon: "📊",
      title: "Strategic Trading Advantage",
      message: `While both strategies show gains, your approach provides ${formatCurrency(
        yourTradingData.safeReserves
      )} in safety reserves and ${formatCurrency(
        yourRealizedProfits
      )} in locked profits. That's real financial security.`,
    };
  };

  // Rate limiting for custom search
  const handleCustomCrypto = async () => {
    const now = Date.now();
    const timeSinceLastSearch = now - lastSearchTime.current;

    if (timeSinceLastSearch < 2000) {
      setError("Please wait a moment before searching again");
      return;
    }

    if (customCrypto.trim() && !isSearching) {
      setIsSearching(true);
      lastSearchTime.current = now;
      await fetchCryptoData(customCrypto.toLowerCase().trim());
      setSelectedCrypto(customCrypto.toLowerCase().trim());
      setCustomCrypto("");
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
  const dynamicMessage = getDynamicMessage();

  if (isLoading && !cryptoData) {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3">
            <RefreshCw className="w-6 h-6 text-purple-400 animate-spin" />
            <p className="text-xl text-white">Loading comparison data...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-full px-6 py-2 border border-purple-400/30 mb-6">
            <BarChart3 className="w-5 h-5 text-purple-300" />
            <span className="text-purple-200 font-medium">Live Comparison</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Smart Money vs{" "}
            <span className="text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text">
              All-In Gambling
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Compare strategic AI trading against buying and holding. Real data,
            real results.
          </p>
        </div>

        {/* Crypto Selector */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center items-center mb-4">
            {popularCryptos.map((crypto) => (
              <button
                key={crypto.id}
                onClick={() => setSelectedCrypto(crypto.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                  selectedCrypto === crypto.id
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/50"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20"
                }`}
              >
                {crypto.symbol}
              </button>
            ))}
          </div>

          {/* Custom Search */}
          <div className="flex gap-2 justify-center max-w-md mx-auto">
            <input
              type="text"
              value={customCrypto}
              onChange={(e) => setCustomCrypto(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleCustomCrypto()}
              placeholder="Try any crypto (e.g., 'cardano')..."
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-purple-500 focus:bg-white/15 transition-all"
            />
            <button
              onClick={handleCustomCrypto}
              disabled={isSearching}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90 disabled:opacity-50 transition-all flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
              {isSearching ? "..." : "Search"}
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-8 p-4 bg-yellow-500/20 border border-yellow-500/50 rounded-xl text-yellow-200 text-center max-w-2xl mx-auto">
            <AlertTriangle className="w-5 h-5 inline mr-2" />
            {error}
          </div>
        )}

        {/* Dynamic Message */}
        {dynamicMessage && (
          <div
            className={`mb-8 p-6 rounded-2xl border-2 max-w-4xl mx-auto ${
              dynamicMessage.type === "success"
                ? "bg-green-500/10 border-green-500/30"
                : dynamicMessage.type === "warning"
                ? "bg-yellow-500/10 border-yellow-500/30"
                : "bg-blue-500/10 border-blue-500/30"
            }`}
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl">{dynamicMessage.icon}</span>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {dynamicMessage.title}
                </h3>
                <p className="text-gray-200 text-lg">
                  {dynamicMessage.message}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Comparison Cards */}
        {comparison && cryptoData && (
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* All-In Strategy */}
            <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 border-2 border-red-500/30 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-10 h-10 text-red-400" />
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    All-In on {cryptoData.name}
                  </h3>
                  <p className="text-red-300 text-sm">High Risk Strategy</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-red-500/20">
                  <span className="text-gray-300">Initial Investment</span>
                  <span className="text-2xl font-bold text-white">
                    {formatCurrency(comparison.allIn.investment)}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-red-500/20">
                  <span className="text-gray-300">Current Value</span>
                  <span className="text-2xl font-bold text-white">
                    {formatCurrency(comparison.allIn.currentValue)}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-red-500/20">
                  <span className="text-gray-300">Unrealized Gain/Loss</span>
                  <span
                    className={`text-3xl font-bold ${
                      comparison.allIn.unrealizedGain >= 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {formatCurrency(comparison.allIn.unrealizedGain)}
                    <span className="text-lg ml-2">
                      ({formatPercent(comparison.allIn.gainPercent)})
                    </span>
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Realized Profits</span>
                  <span className="text-2xl font-bold text-gray-500">
                    $0.00
                  </span>
                </div>

                <div className="mt-6 p-4 bg-red-500/20 rounded-xl border border-red-500/30">
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-red-300 mt-1 flex-shrink-0" />
                    <p className="text-sm text-red-200">
                      {comparison.allIn.risk}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Trading Strategy */}
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border-2 border-green-500/30 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-10 h-10 text-green-400" />
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Smart AI Trading
                  </h3>
                  <p className="text-green-300 text-sm">Protected Strategy</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-green-500/20">
                  <span className="text-gray-300">Initial Investment</span>
                  <span className="text-2xl font-bold text-white">
                    {formatCurrency(comparison.yourWay.investment)}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-green-500/20">
                  <span className="text-gray-300">Total Value</span>
                  <span className="text-2xl font-bold text-white">
                    {formatCurrency(comparison.yourWay.totalValue)}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-green-500/20">
                  <span className="text-gray-300">Unrealized Positions</span>
                  <span className="text-2xl font-bold text-blue-400">
                    {formatCurrency(comparison.yourWay.currentPositions)}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-semibold">
                    Realized Profits (Banked!)
                  </span>
                  <span className="text-3xl font-bold text-green-400">
                    {formatCurrency(comparison.yourWay.realizedProfits)}
                    <span className="text-lg ml-2">
                      ({formatPercent(comparison.yourWay.gainPercent)})
                    </span>
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-green-500/20 rounded-xl border border-green-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <PiggyBank className="w-4 h-4 text-green-300" />
                      <span className="text-sm text-gray-300">
                        Safe Reserves
                      </span>
                    </div>
                    <p className="text-xl font-bold text-white">
                      {formatCurrency(comparison.yourWay.reserves)}
                    </p>
                  </div>

                  <div className="p-4 bg-green-500/20 rounded-xl border border-green-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="w-4 h-4 text-green-300" />
                      <span className="text-sm text-gray-300">
                        Total Trades
                      </span>
                    </div>
                    <p className="text-xl font-bold text-white">
                      {yourTradingData.totalTrades}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Key Insights */}
        {comparison && (
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-yellow-400" />
                <h4 className="text-lg font-semibold text-white">
                  Daily Average
                </h4>
              </div>
              <p className="text-3xl font-bold text-green-400">
                {formatCurrency(yourTradingData.dailyAverage)}
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Consistent daily gains
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-green-400" />
                <h4 className="text-lg font-semibold text-white">Best Month</h4>
              </div>
              <p className="text-3xl font-bold text-green-400">
                {formatCurrency(yourTradingData.bestMonthProfit)}
              </p>
              <p className="text-sm text-gray-400 mt-2">Peak performance</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <DollarSign className="w-6 h-6 text-blue-400" />
                <h4 className="text-lg font-semibold text-white">ROI</h4>
              </div>
              <p className="text-3xl font-bold text-blue-400">
                {formatPercent(yourTradingData.roiOnCapital)}
              </p>
              <p className="text-sm text-gray-400 mt-2">Return on capital</p>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => handleMasterclassClick("bottom")}
            className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg rounded-xl hover:opacity-90 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50 flex items-center gap-3 mx-auto"
          >
            <span>Learn the Smart Money Strategy</span>
            <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-gray-400 mt-4">
            Free masterclass • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default DynamicSmartMoneyComparison;
