// src/components/DynamicSmartMoneyComparison.tsx
import { useState, useEffect, useRef } from "react";
import { Shield, AlertTriangle, Search } from "lucide-react";
import { trackCTAClick, trackOutboundLink } from "../utils/analytics";
import { useGoogleSheetsData } from "../hooks/useGoogleSheetsData";

// Types
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
  const CACHE_DURATION = 15 * 60 * 1000;

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
    startDate: "2025-01-08",
    monthlyAverage: tradingStats?.monthlyAverage || 463,
    dailyAverage: tradingStats?.dailyAvg || 16.79,
  };

  const popularCryptos = [
    { id: "bitcoin", name: "Bitcoin", symbol: "BTC" },
    { id: "ethereum", name: "Ethereum", symbol: "ETH" },
    { id: "solana", name: "Solana", symbol: "SOL" },
    { id: "dogecoin", name: "Dogecoin", symbol: "DOGE" },
    { id: "cardano", name: "Cardano", symbol: "ADA" },
  ];

  const fetchCryptoData = async (cryptoId: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const cached = cryptoCache.get(cryptoId);
      if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        setCryptoData(cached.data);
        setIsLoading(false);
        return;
      }

      const startDate = new Date(yourTradingData.startDate);
      const daysSinceStart = Math.floor(
        (Date.now() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${cryptoId}?localization=false&tickers=false&community_data=false&developer_data=false`
      );

      if (!response.ok) throw new Error("Failed to fetch crypto data");

      const data = await response.json();
      const currentPrice = data.market_data?.current_price?.usd;
      const priceChange24h = data.market_data?.price_change_percentage_24h;

      const startPrice = currentPrice / (1 + priceChange24h / 100);
      const gainSinceStart = (currentPrice - startPrice) / startPrice;

      const cryptoDataObj: CryptoData = {
        id: cryptoId,
        name: data.name,
        symbol: data.symbol.toUpperCase(),
        currentPrice,
        startPrice,
        gainSinceStart,
        change24h: priceChange24h,
        change7d: data.market_data?.price_change_percentage_7d || null,
        change30d: data.market_data?.price_change_percentage_30d || null,
        daysSinceStart,
      };

      setCryptoData(cryptoDataObj);
      cryptoCache.set(cryptoId, {
        data: cryptoDataObj,
        timestamp: Date.now(),
      });
    } catch (err) {
      const fallback = fallbackCryptoData[cryptoId];
      if (fallback) {
        const startDate = new Date(yourTradingData.startDate);
        const daysSinceStart = Math.floor(
          (Date.now() - startDate.getTime()) / (1000 * 60 * 60 * 24)
        );

        setCryptoData({
          id: cryptoId,
          name: fallback.name!,
          symbol: fallback.symbol!,
          currentPrice: fallback.currentPrice!,
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

  useEffect(() => {
    fetchCryptoData(selectedCrypto);
  }, [selectedCrypto]);

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

  const handleMasterclassClick = (location: string) => {
    trackCTAClick("join_free_masterclass", `dynamic_comparison_${location}`);
    trackOutboundLink(
      "https://dailyprofits.link/class",
      `Masterclass from Dynamic Comparison ${location}`
    );
  };

  const formatCurrency = (amount: number) =>
    `${amount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const comparison = calculateComparison();

  if (isLoading && !cryptoData) {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-6xl mx-auto text-center text-white">
          <div className="animate-pulse">Loading comparison data...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Smart Money vs{" "}
            <span className="text-transparent bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text">
              All-In Gambling
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            See how strategic trading beats holding and hoping
          </p>
        </div>

        {/* Crypto Selector */}
        <div className="mb-8 flex flex-wrap gap-3 justify-center items-center">
          {popularCryptos.map((crypto) => (
            <button
              key={crypto.id}
              onClick={() => setSelectedCrypto(crypto.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedCrypto === crypto.id
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {crypto.symbol}
            </button>
          ))}
          <div className="flex gap-2">
            <input
              type="text"
              value={customCrypto}
              onChange={(e) => setCustomCrypto(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleCustomCrypto()}
              placeholder="Custom crypto..."
              className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-purple-500"
            />
            <button
              onClick={handleCustomCrypto}
              disabled={isSearching}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90 disabled:opacity-50"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-yellow-500/20 border border-yellow-500/50 rounded-lg text-yellow-200 text-center">
            {error}
          </div>
        )}

        {comparison && cryptoData && (
          <div className="grid md:grid-cols-2 gap-8">
            {/* All-In Strategy */}
            <div className="bg-red-500/10 border-2 border-red-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-red-400" />
                <h3 className="text-2xl font-bold text-white">
                  All-In on {cryptoData.name}
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-400">Initial Investment</p>
                  <p className="text-2xl font-bold text-white">
                    {formatCurrency(comparison.allIn.investment)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Current Value</p>
                  <p className="text-2xl font-bold text-white">
                    {formatCurrency(comparison.allIn.currentValue)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Unrealized Gain/Loss</p>
                  <p
                    className={`text-3xl font-bold ${
                      comparison.allIn.unrealizedGain >= 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {formatCurrency(comparison.allIn.unrealizedGain)}
                  </p>
                </div>
                <div className="pt-4 border-t border-red-500/30">
                  <p className="text-sm text-red-300">
                    {comparison.allIn.risk}
                  </p>
                </div>
              </div>
            </div>

            {/* Smart Trading Strategy */}
            <div className="bg-green-500/10 border-2 border-green-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold text-white">
                  Smart AI Trading
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-400">Initial Investment</p>
                  <p className="text-2xl font-bold text-white">
                    {formatCurrency(comparison.yourWay.investment)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Realized Profits (Banked)</p>
                  <p className="text-3xl font-bold text-green-400">
                    {formatCurrency(comparison.yourWay.realizedProfits)}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-green-500/30">
                  <div>
                    <p className="text-sm text-gray-400">Open Positions</p>
                    <p className="text-lg font-bold text-white">
                      {formatCurrency(comparison.yourWay.currentPositions)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Safe Reserves</p>
                    <p className="text-lg font-bold text-white">
                      {formatCurrency(comparison.yourWay.reserves)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => handleMasterclassClick("bottom")}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-lg hover:opacity-90 transition-all transform hover:scale-105"
          >
            Learn the Smart Money Strategy
          </button>
        </div>
      </div>
    </section>
  );
};

export default DynamicSmartMoneyComparison;
