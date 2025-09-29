// src/components/DynamicSmartMoneyComparison.tsx
import React, { useState, useEffect, useRef } from "react";
import { TrendingUp, DollarSign, Shield, AlertTriangle } from "lucide-react";
import { trackCTAClick, trackOutboundLink } from "../utils/analytics";
import { useGoogleSheetsData } from "../hooks/useGoogleSheetsData";

const DynamicSmartMoneyComparison: React.FC = () => {
  const { tradingStats, portfolioSummary } = useGoogleSheetsData();

  const [selectedCrypto, setSelectedCrypto] = useState("btc");
  const [customCrypto, setCustomCrypto] = useState("");
  const [cryptoData, setCryptoData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const yourTradingData = {
    totalDeposited: portfolioSummary?.totalCapitalDeployed || 28432,
    currentOpenPositions: portfolioSummary?.openTradingPositions || 11762,
    safeReserves: portfolioSummary?.availableUSDC || 16624,
    totalCurrentValue: portfolioSummary?.totalAccountValue || 28386,
    totalTrades: tradingStats?.totalTrades || 875,
    successRate:
      ((portfolioSummary?.realizedProfits || 4169) /
        (portfolioSummary?.totalCapitalDeployed || 28432)) *
      100,
    realizedProfits: portfolioSummary?.realizedProfits || 4169,
  };

  const startDate = new Date("2025-01-09");
  const daysSinceStart = Math.floor(
    (Date.now() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  const historicalPrices: Record<
    string,
    { startPrice: number; gainSinceStart: number; change24h: number }
  > = {
    btc: { startPrice: 94300, gainSinceStart: 0.0222, change24h: -1.2 },
    eth: { startPrice: 3300, gainSinceStart: -0.0606, change24h: -2.3 },
    sol: { startPrice: 185, gainSinceStart: -0.0378, change24h: -3.1 },
    ada: { startPrice: 0.88, gainSinceStart: -0.1023, change24h: -1.8 },
    doge: { startPrice: 0.33, gainSinceStart: -0.2727, change24h: -2.5 },
  };

  const getDynamicMessage = () => {
    if (!cryptoData) return null;
    const { unrealizedGain } = calculateComparison()?.allIn || {
      unrealizedGain: 0,
    };
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
        )} on paper. But you've already withdrawn ${formatCurrency(
          yourRealizedProfits
        )} in REAL profits that can't be taken away by a market crash.`,
      };
    }

    if (unrealizedGain > 0 && difference > 0) {
      return {
        type: "success" as const,
        icon: "💪",
        title: "Best of Both Worlds",
        message: `Your AI trader captured ${formatCurrency(
          yourRealizedProfits
        )} in realized gains AND still has exposure to market upside. You're ${formatCurrency(
          difference
        )} ahead of simply holding ${cryptoData.name}.`,
      };
    }

    return null;
  };

  const dynamicMessage = getDynamicMessage();

  const fetchCryptoData = async (crypto: string) => {
    setError(null);
    try {
      const response = await fetch(`/api/coinmarketcap?crypto=${crypto}`);
      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setCryptoData({
        name: data.name,
        symbol: data.symbol.toUpperCase(),
        price: data.price,
        startPrice: data.startPrice,
        gainSinceStart: data.gainSinceStart,
        change24h: data.change24h,
        change7d: data.change7d,
        change30d: data.change30d,
        change90d: data.change90d,
        daysSinceStart,
      });
    } catch (err) {
      console.error("Crypto fetch error:", err);
      const fallback = historicalPrices[crypto.toLowerCase()];
      if (fallback) {
        setCryptoData({
          name: crypto.toUpperCase(),
          symbol: crypto.toUpperCase(),
          price: fallback.startPrice * (1 + fallback.gainSinceStart),
          startPrice: fallback.startPrice,
          gainSinceStart: fallback.gainSinceStart,
          change24h: fallback.change24h,
          change7d: null,
          change30d: null,
          change90d: null,
          daysSinceStart,
        });
        setError("Using cached prices - live data temporarily unavailable");
      } else {
        setError(
          "Price data unavailable for this cryptocurrency. Try Bitcoin or Ethereum."
        );
      }
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

  const [isSearching, setIsSearching] = useState(false);
  const lastSearchTime = useRef<number>(0);

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
    `$${amount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const formatPercent = (percent: number) =>
    `${percent > 0 ? "+" : ""}${percent.toFixed(2)}%`;

  const comparison = calculateComparison();

  if (!comparison || !cryptoData) {
    return (
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="text-white text-lg">Loading comparison data...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="comparison" className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Smart Money Difference
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Compare my AI-enhanced trading approach vs. simply holding crypto
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            {["BTC", "ETH", "SOL", "ADA", "DOGE"].map((crypto) => (
              <button
                key={crypto}
                onClick={() => setSelectedCrypto(crypto.toLowerCase())}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedCrypto === crypto.toLowerCase()
                    ? "bg-blue-500 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {crypto}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 max-w-md mx-auto">
            <input
              type="text"
              value={customCrypto}
              onChange={(e) => setCustomCrypto(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleCustomCrypto()}
              placeholder="Or try another (e.g., XRP, LINK)"
              className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-blue-500"
              disabled={isSearching}
            />
            <button
              onClick={handleCustomCrypto}
              disabled={isSearching || !customCrypto.trim()}
              className="px-6 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isSearching ? "..." : "Compare"}
            </button>
          </div>
          {error && <p className="text-yellow-400 text-sm mt-2">{error}</p>}
        </div>

        {cryptoData && (
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">
                {cryptoData.name} ({cryptoData.symbol})
              </h3>
              <div className="text-3xl font-bold text-blue-400">
                {formatCurrency(cryptoData.price)}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-gray-400 text-sm">Since Start</div>
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
        )}

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
            <div className="absolute top-4 right-4">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                All-In on {cryptoData.name}
              </h3>
              <p className="text-red-300">Risky & stressful</p>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between py-2 border-b border-white/10">
                <span className="text-gray-300">Investment:</span>
                <span className="text-white font-semibold">
                  {formatCurrency(comparison.allIn.investment)}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/10">
                <span className="text-gray-300">Current Value:</span>
                <span
                  className={`font-semibold ${
                    comparison.allIn.unrealizedGain >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {formatCurrency(comparison.allIn.currentValue)}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/10">
                <span className="text-gray-300">Unrealized Gain:</span>
                <span
                  className={`font-bold text-lg ${
                    comparison.allIn.unrealizedGain >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {formatCurrency(comparison.allIn.unrealizedGain)}
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-300">Cash Out:</span>
                <span className="text-red-400 font-semibold">$0.00</span>
              </div>
            </div>
            <div className="bg-red-500/20 rounded-lg p-4 border border-red-400/30">
              <p className="text-red-200 text-sm">{comparison.allIn.risk}</p>
            </div>
          </div>

          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
            <div className="absolute top-4 right-4">
              <TrendingUp className="w-8 h-8 text-green-400" />
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                My AI Trading Way
              </h3>
              <p className="text-green-300">Proven & profitable</p>
            </div>
            <div className="space-y-4 mb-8">
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
            <div className="bg-green-500/20 rounded-lg p-4 border border-green-400/30">
              <div className="flex items-start gap-2">
                <Shield className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-green-300 font-bold mb-1">
                    Smart Money Advantage:
                  </p>
                  <p className="text-green-200 text-sm">
                    Real profits withdrawn. Safe reserves maintained. No timing
                    needed.
                  </p>
                  <p className="text-green-200 text-sm mt-2">
                    {yourTradingData.totalTrades} trades •{" "}
                    {formatPercent(yourTradingData.successRate)} success rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {dynamicMessage && (
          <div
            className={`rounded-2xl p-6 mb-12 border-2 ${
              dynamicMessage.type === "warning"
                ? "bg-yellow-500/10 border-yellow-500/30"
                : "bg-green-500/10 border-green-500/30"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">{dynamicMessage.icon}</div>
              <div className="flex-1">
                <h4
                  className={`text-xl font-bold mb-2 ${
                    dynamicMessage.type === "warning"
                      ? "text-yellow-300"
                      : "text-green-300"
                  }`}
                >
                  {dynamicMessage.title}
                </h4>
                <p className="text-gray-200 text-base leading-relaxed">
                  {dynamicMessage.message}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 border-2 border-purple-400/40 rounded-2xl p-8 md:p-12 mb-12 text-center">
          <div className="max-w-4xl mx-auto">
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
                ? `Real cash secured while ${cryptoData.name} holders watch paper gains`
                : `Profits locked in regardless of market direction`}
            </p>
            <p className="text-purple-200 text-lg">
              This is the power of AI-enhanced automated trading: consistent
              profits without the stress, timing, or guesswork.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => handleMasterclassClick("comparison_bottom")}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-bold py-4 px-8 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Learn My Complete System (Free Masterclass)
          </button>
        </div>
      </div>
    </section>
  );
};

export default DynamicSmartMoneyComparison;
