import { useState, useEffect } from "react";
import { DollarSign, Shield, AlertTriangle } from "lucide-react";
import { trackCTAClick, trackOutboundLink } from "../utils/analytics";
import { SimpleCryptoSelector } from "./SimpleCryptoSelector";
import { SimpleDisclaimer } from "./SimpleDisclaimer";

interface CryptoData {
  name: string;
  symbol: string;
  price: number;
  priceOnJan8: number;
  gainSinceStart: number;
  change24h: number;
  change7d: number | null;
  change30d: number | null;
  daysSinceStart: number;
}

interface EnhancedTradingStats {
  totalDeposited: number;
  totalCurrentValue: number;
  currentOpenPositions: number;
  safeReserves: number;
  realizedProfits: number;
  totalTrades: number;
  wins: number;
}

const yourTradingData: EnhancedTradingStats = {
  totalDeposited: 25000,
  totalCurrentValue: 26677.0,
  currentOpenPositions: 12384.94,
  safeReserves: 14292.06,
  realizedProfits: 4218.96,
  totalTrades: 888,
  wins: 888,
};

export const DynamicSmartMoneyComparison = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("btc");
  const [cryptoData, setCryptoData] = useState<CryptoData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCryptoData = async (symbol: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/coinmarketcap?symbol=${symbol.toUpperCase()}`
      );
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const startDate = new Date("2025-01-08");
      const today = new Date();
      const daysSinceStart = Math.floor(
        (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      setCryptoData({
        name: data.name,
        symbol: data.symbol,
        price: data.price,
        priceOnJan8: data.priceOnJan8,
        gainSinceStart: data.gainSinceStart,
        change24h: data.change24h,
        change7d: data.change7d,
        change30d: data.change30d,
        daysSinceStart,
      });
    } catch (err) {
      console.error("Error fetching crypto data:", err);
      setError(
        "Unable to load cryptocurrency data. Please try another selection."
      );
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
  const successRate =
    yourTradingData.totalTrades > 0
      ? (yourTradingData.wins / yourTradingData.totalTrades) * 100
      : 0;

  const dynamicMessage =
    comparison && comparison.allIn.unrealizedGain < 0
      ? {
          type: "warning" as const,
          icon: "⚠️",
          title: `While ${cryptoData?.name} Dropped ${formatPercent(
            cryptoData?.gainSinceStart! * 100
          )}...`,
          message: `You would have LOST ${formatCurrency(
            Math.abs(comparison.allIn.unrealizedGain)
          )} going all-in. Instead, you're up ${formatCurrency(
            comparison.yourWay.realizedProfits
          )} in REAL profits. That's a ${formatCurrency(
            comparison.yourWay.realizedProfits +
              Math.abs(comparison.allIn.unrealizedGain)
          )} difference.`,
        }
      : comparison && comparison.allIn.unrealizedGain > 0
      ? {
          type: "success" as const,
          icon: "💰",
          title: `${cryptoData?.name} Holders Are Celebrating...`,
          message: `But their ${formatCurrency(
            comparison.allIn.unrealizedGain
          )} is just paper gains. You? You've already WITHDRAWN ${formatCurrency(
            comparison.yourWay.realizedProfits
          )} to your bank account. Real money > Hopium.`,
        }
      : null;

  if (!cryptoData || !comparison) {
    return (
      <section className="relative py-16 px-4 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Smart Money Difference
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Compare your results against any cryptocurrency
            </p>

            <SimpleCryptoSelector
              selectedCrypto={selectedCrypto}
              onSelect={setSelectedCrypto}
            />

            {isLoading && (
              <div className="text-center mt-8">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                <p className="text-gray-300 mt-4">Loading comparison data...</p>
              </div>
            )}

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mt-8">
                <p className="text-red-400">{error}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-16 px-4 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Smart Money Difference
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            See how your AI-enhanced trading compares to holding
          </p>

          <SimpleCryptoSelector
            selectedCrypto={selectedCrypto}
            onSelect={setSelectedCrypto}
          />

          <SimpleDisclaimer cryptoData={cryptoData} />
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
                <span className="text-gray-300">Paper Gains/Losses:</span>
                <span
                  className={`font-semibold ${
                    comparison.allIn.unrealizedGain >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {formatCurrency(comparison.allIn.unrealizedGain)}
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-300">Realized Cash:</span>
                <span className="text-gray-500 font-semibold">
                  {formatCurrency(0)}
                </span>
              </div>
            </div>
            <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4">
              <p className="text-red-200 text-sm font-medium">
                {comparison.allIn.risk}
              </p>
              <p className="text-red-300 text-sm mt-2">
                {comparison.allIn.unrealizedGain >= 0
                  ? "Nice gains, but can you actually spend them? What if it crashes tomorrow?"
                  : "Down money and can't do anything about it. Hope it recovers... someday."}
              </p>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-green-400/40">
            <div className="absolute top-4 right-4">
              <Shield className="w-8 h-8 text-green-400" />
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Your AI-Enhanced Way
              </h3>
              <p className="text-green-300">Smart, systematic & profitable</p>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between py-2 border-b border-white/10">
                <span className="text-gray-300">Investment:</span>
                <span className="text-white font-semibold">
                  {formatCurrency(comparison.yourWay.investment)}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/10">
                <span className="text-gray-300">Realized Profits:</span>
                <span className="text-green-400 font-semibold">
                  {formatCurrency(comparison.yourWay.realizedProfits)}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/10">
                <span className="text-gray-300">Active Positions:</span>
                <span className="text-blue-400 font-semibold">
                  {formatCurrency(comparison.yourWay.currentPositions)}
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-300">Safe Reserves:</span>
                <span className="text-purple-400 font-semibold">
                  {formatCurrency(comparison.yourWay.reserves)}
                </span>
              </div>
            </div>
            <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-4">
              <p className="text-green-200 text-sm font-medium">
                Real profits withdrawn. Active positions working. Safe reserves
                maintained. No timing needed.
              </p>
              <p className="text-green-200 text-sm mt-2">
                {yourTradingData.totalTrades} trades •{" "}
                {formatPercent(successRate)} success rate
              </p>
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

// Note: The following components were modified to be simpler versions as per the context provided.
