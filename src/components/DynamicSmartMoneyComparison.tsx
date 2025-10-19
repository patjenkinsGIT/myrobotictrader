import { useState, useEffect, useRef } from "react";
import { Shield, AlertTriangle, Brain, Zap, Search } from "lucide-react";
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
  const cryptoCacheRef = useRef(new Map<string, CachedCryptoData>());
  const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

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

  // Extract your trading data with CORRECT property names from PortfolioSummary
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
    totalTrades: tradingStats?.totalTrades || 875,
    avgTradeSize: tradingStats?.avgProfitPerTrade || 4.76,
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

  // Popular crypto options - TOP 25
  const popularCryptos = [
    { id: "bitcoin", name: "Bitcoin", symbol: "BTC" },
    { id: "ethereum", name: "Ethereum", symbol: "ETH" },
    { id: "tether", name: "Tether", symbol: "USDT" },
    { id: "xrp", name: "XRP", symbol: "XRP" },
    { id: "bnb", name: "BNB", symbol: "BNB" },
    { id: "solana", name: "Solana", symbol: "SOL" },
    { id: "usd-coin", name: "USDC", symbol: "USDC" },
    { id: "cardano", name: "Cardano", symbol: "ADA" },
    { id: "dogecoin", name: "Dogecoin", symbol: "DOGE" },
    { id: "tron", name: "TRON", symbol: "TRX" },
    { id: "avalanche-2", name: "Avalanche", symbol: "AVAX" },
    { id: "shiba-inu", name: "Shiba Inu", symbol: "SHIB" },
    { id: "chainlink", name: "Chainlink", symbol: "LINK" },
    { id: "polkadot", name: "Polkadot", symbol: "DOT" },
    { id: "bitcoin-cash", name: "Bitcoin Cash", symbol: "BCH" },
    { id: "uniswap", name: "Uniswap", symbol: "UNI" },
    { id: "near", name: "NEAR Protocol", symbol: "NEAR" },
    { id: "litecoin", name: "Litecoin", symbol: "LTC" },
    { id: "dai", name: "Dai", symbol: "DAI" },
    { id: "polygon", name: "Polygon", symbol: "MATIC" },
    { id: "internet-computer", name: "Internet Computer", symbol: "ICP" },
    { id: "pepe", name: "Pepe", symbol: "PEPE" },
    { id: "ethereum-classic", name: "Ethereum Classic", symbol: "ETC" },
    { id: "fetch-ai", name: "Fetch.ai", symbol: "FET" },
    { id: "sui", name: "Sui", symbol: "SUI" },
  ];

  // Start date for comparisons
  const START_DATE = new Date("2025-01-08");
  const daysSinceStart = Math.floor(
    (Date.now() - START_DATE.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Fetch crypto data from CoinMarketCap API via Cloudflare Function
  const fetchCryptoData = async (cryptoId: string, retries: number = 2) => {
    try {
      setIsLoading(true);
      setError(null);

      // Check cache first
      const cached = cryptoCacheRef.current.get(cryptoId);
      if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        console.log(`✅ Using cached data for ${cryptoId}`);
        setCryptoData(cached.data);
        setIsLoading(false);
        return;
      }

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

      if (!data || !data.currentPrice || data.error) {
        throw new Error(data.error || "Invalid data received from API");
      }

      const cryptoInfo: CryptoData = {
        id: cryptoId,
        name: data.name,
        symbol: data.symbol,
        currentPrice: data.currentPrice,
        startPrice: data.startPrice,
        gainSinceStart: data.gainSinceStart,
        change24h: data.change24h,
        change7d: data.change7d,
        change30d: data.change30d,
        daysSinceStart: daysSinceStart,
      };

      console.log(
        `✅ CMC: ${data.symbol} fetched - $${data.currentPrice.toFixed(2)}`
      );

      // Cache the result
      cryptoCacheRef.current.set(cryptoId, {
        data: cryptoInfo,
        timestamp: Date.now(),
      });

      setCryptoData(cryptoInfo);
    } catch (err) {
      console.error("Error fetching crypto data:", err);
      setError("Unable to fetch live crypto data");

      // Use fallback data if available
      const fallback = fallbackCryptoData[cryptoId];
      if (fallback) {
        setCryptoData({
          id: cryptoId,
          name: fallback.name || cryptoId,
          symbol: fallback.symbol || cryptoId.toUpperCase(),
          currentPrice: fallback.currentPrice || 0,
          startPrice:
            (fallback.currentPrice || 0) / (1 + (fallback.gainSinceStart || 0)),
          gainSinceStart: fallback.gainSinceStart || 0,
          change24h: fallback.change24h || 0,
          change7d: null,
          change30d: null,
          daysSinceStart: daysSinceStart,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data when crypto selection changes
  useEffect(() => {
    fetchCryptoData(selectedCrypto);
  }, [selectedCrypto]);

  // Handle custom crypto search
  const handleCustomSearch = () => {
    if (customCrypto.trim()) {
      const searchId = customCrypto.toLowerCase().trim();
      setSelectedCrypto(searchId);
      setCustomCrypto("");
    }
  };

  // Calculate comparison metrics
  const calculateComparison = () => {
    if (!cryptoData) return null;

    const investmentAmount = yourTradingData.totalDeposited;

    // All-in crypto scenario
    const allInBTC = {
      invested: investmentAmount,
      currentValue: investmentAmount * (1 + cryptoData.gainSinceStart),
      unrealizedGain: investmentAmount * cryptoData.gainSinceStart,
      percentGain: cryptoData.gainSinceStart * 100,
      withdrawnCash: 0,
    };

    // Your way (AI-Enhanced Robotic Trader)
    const yourWay = {
      invested: investmentAmount,
      realizedProfits: yourTradingData.realizedProfits,
      percentGain: (yourTradingData.realizedProfits / investmentAmount) * 100,
      withdrawnCash: yourTradingData.realizedProfits,
      currentPositions: yourTradingData.currentOpenPositions,
      reserves: yourTradingData.safeReserves,
    };

    return {
      allIn: allInBTC,
      yourWay: yourWay,
      advantage: yourWay.realizedProfits - allInBTC.unrealizedGain,
    };
  };

  const comparison = calculateComparison();

  // Format currency helper
  const formatCurrency = (value: number): string => {
    return Math.abs(value).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  // Get dynamic message based on comparison
  const getDynamicMessage = () => {
    if (!comparison) return null;

    const { advantage } = comparison;
    const unrealizedGain = comparison.allIn.unrealizedGain;

    if (unrealizedGain < 0) {
      return {
        type: "success" as const,
        icon: "🎯",
        title: `${cryptoData?.name} Is Down ${Math.abs(
          comparison.allIn.percentGain
        ).toFixed(2)}%`,
        message: `Going all-in would have LOST you $${formatCurrency(
          Math.abs(unrealizedGain)
        )}. But here's the win: my system already withdrew $${formatCurrency(
          yourTradingData.realizedProfits
        )} in REAL cash while still keeping positions active. Real money > Paper losses.`,
      };
    } else if (advantage > 0) {
      return {
        type: "success" as const,
        icon: "💰",
        title: `${
          cryptoData?.name
        } Is Up ${comparison.allIn.percentGain.toFixed(2)}%`,
        message: `Going all-in would give you $${formatCurrency(
          unrealizedGain
        )} in paper gains. But here's the problem: you can't spend paper gains. My system already withdrew $${formatCurrency(
          yourTradingData.realizedProfits
        )} in REAL cash while still keeping positions active. Real money > Paper profits.`,
      };
    } else {
      return {
        type: "warning" as const,
        icon: "⚠️",
        title: `${
          cryptoData?.name
        } Is Up ${comparison.allIn.percentGain.toFixed(2)}%`,
        message: `Sure, ${cryptoData?.name} holders have $${formatCurrency(
          unrealizedGain
        )} in paper gains. But can they spend it? My $${formatCurrency(
          yourTradingData.realizedProfits
        )} is already in my bank account. Real profits beat paper gains every time.`,
      };
    }
  };

  const message = getDynamicMessage();

  if (isLoading && !cryptoData) {
    return (
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
            <p className="mt-4">Loading comparison data...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-900 to-purple-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Smart Money vs. All-In Gambling
          </h2>
          <p className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto">
            See the REAL difference between systematic trading and going all-in
          </p>
        </div>

        {/* Crypto Selector */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <label className="block text-white text-lg font-semibold mb-4">
              Compare Against:
            </label>

            {/* Popular cryptos - Display in 5 columns on desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-4">
              {popularCryptos.map((crypto) => (
                <button
                  key={crypto.id}
                  onClick={() => setSelectedCrypto(crypto.id)}
                  className={`px-3 py-2 rounded-lg font-semibold transition-all text-sm ${
                    selectedCrypto === crypto.id
                      ? "bg-purple-600 text-white shadow-lg"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  {crypto.symbol}
                </button>
              ))}
            </div>

            {/* Custom search */}
            <div className="flex gap-2">
              <input
                type="text"
                value={customCrypto}
                onChange={(e) => setCustomCrypto(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleCustomSearch()}
                placeholder="Or search any crypto (e.g., 'polygon')"
                className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400"
              />
              <button
                onClick={handleCustomSearch}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold flex items-center gap-2 transition-colors"
              >
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>

            {error && (
              <div className="mt-4 p-3 bg-yellow-500/20 border border-yellow-500/50 rounded-lg text-yellow-200 text-sm">
                {error} - Showing estimated data
              </div>
            )}
          </div>
        </div>

        {/* Dynamic Message Box */}
        {message && (
          <div
            className={`max-w-4xl mx-auto mb-12 p-8 rounded-2xl border-2 ${
              message.type === "success"
                ? "bg-green-900/30 border-green-500"
                : "bg-yellow-900/30 border-yellow-500"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">{message.icon}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {message.title}
                </h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  {message.message}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Comparison Cards */}
        {comparison && (
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {/* All-In Bitcoin */}
            <div
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 ${
                comparison.allIn.unrealizedGain < 0
                  ? "border-red-500/50"
                  : "border-yellow-500/50"
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">
                  All-In on {cryptoData?.name}
                </h3>
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>

              <p className="text-purple-200 mb-6">Risky & stressful</p>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-gray-300">Investment:</span>
                  <span className="text-2xl font-bold text-white">
                    ${formatCurrency(comparison.allIn.invested)}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-gray-300">Current Value:</span>
                  <span
                    className={`text-2xl font-bold ${
                      comparison.allIn.unrealizedGain >= 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    ${formatCurrency(comparison.allIn.currentValue)}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-gray-300">Paper Gains/Losses:</span>
                  <span
                    className={`text-2xl font-bold ${
                      comparison.allIn.unrealizedGain >= 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {comparison.allIn.unrealizedGain >= 0 ? "+" : ""}$
                    {formatCurrency(comparison.allIn.unrealizedGain)}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Realized Cash:</span>
                  <span className="text-2xl font-bold text-gray-500">
                    $0.00
                  </span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-900/50 rounded-lg border border-red-500/30">
                <p className="text-red-200 text-center font-semibold">
                  100% exposed to {cryptoData?.name} volatility
                </p>
                <p className="text-red-300/80 text-center text-sm mt-2">
                  Nice gains, but can you actually spend them? What if it
                  crashes tomorrow?
                </p>
              </div>
            </div>

            {/* AI-Enhanced Robotic Trader */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-green-500/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">
                  AI-Enhanced Robotic Trader
                </h3>
                <Shield className="w-8 h-8 text-green-400" />
              </div>

              <p className="text-purple-200 mb-6">
                Smart, systematic & profitable
              </p>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-gray-300">Investment:</span>
                  <span className="text-2xl font-bold text-white">
                    ${formatCurrency(comparison.yourWay.invested)}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-gray-300">Realized Profits:</span>
                  <span className="text-2xl font-bold text-green-400">
                    ${formatCurrency(comparison.yourWay.realizedProfits)}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-gray-300">Active Positions:</span>
                  <span className="text-2xl font-bold text-blue-400">
                    ${formatCurrency(comparison.yourWay.currentPositions)}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Safe Reserves:</span>
                  <span className="text-2xl font-bold text-purple-400">
                    ${formatCurrency(comparison.yourWay.reserves)}
                  </span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-900/50 rounded-lg border border-green-500/30">
                <p className="text-green-200 text-center font-semibold">
                  Real profits withdrawn. Active positions working. Safe
                  reserves maintained. No timing needed.
                </p>
                <p className="text-green-300/80 text-center text-sm mt-2">
                  {yourTradingData.totalTrades} trades • +100.00% success rate
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center bg-white/8 backdrop-blur-sm rounded-2xl border border-white/20 p-8 md:p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
            Stop Gambling. Start Profiting.
          </h3>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            Join the free masterclass and discover the exact AI-Enhanced
            Autonomous trading system that generated $
            {formatCurrency(yourTradingData.realizedProfits)} in real,
            withdrawable profits.
          </p>
          <button
            onClick={() => {
              trackCTAClick("join_free_masterclass", "smart_money_bottom");
              trackOutboundLink(
                "https://dailyprofits.link/class",
                "Smart Money Bottom CTA"
              );
              window.open("https://dailyprofits.link/class", "_blank");
            }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Brain className="w-6 h-6" />
            Get Free Masterclass Access
            <Zap className="w-6 h-6" />
          </button>
          <p className="text-sm text-gray-400 mt-4">
            No credit card required • Learn the system in 60 minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default DynamicSmartMoneyComparison;
