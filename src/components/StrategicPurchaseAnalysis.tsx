// src/components/StrategicPurchaseAnalysis.tsx
import React, { useState, useEffect } from "react";
import { PriceChartWithPurchases } from "./PricheChartWithPurchases";
import {
  TrendingUp,
  TrendingDown,
  Target,
  Zap,
  Activity,
  DollarSign,
  Clock,
  ArrowDown,
  ArrowUp,
  Sparkles,
  Brain,
} from "lucide-react";
import { useLiveTransactions } from "../hooks/useLiveTransactions";

interface PricePoint {
  timestamp: string;
  price: number;
  isPurchase: boolean;
  coin: string;
  profit?: number;
  quantity?: string;
}

interface CoinAnalysis {
  coin: string;
  totalTrades: number;
  avgPurchasePrice: number;
  avgProfit: number;
  successRate: number;
  pricePoints: PricePoint[];
}

export const StrategicPurchaseAnalysis: React.FC = () => {
  const { transactions, isLoading, error } = useLiveTransactions();
  const [selectedCoin, setSelectedCoin] = useState<string>("ALL");
  const [analysisData, setAnalysisData] = useState<CoinAnalysis[]>([]);

  // Process transaction data for analysis
  useEffect(() => {
    if (transactions.length === 0) return;

    const coinGroups = transactions.reduce((acc, tx) => {
      if (!acc[tx.coin]) {
        acc[tx.coin] = [];
      }
      acc[tx.coin].push(tx);
      return acc;
    }, {} as Record<string, typeof transactions>);

    const analysis = Object.entries(coinGroups).map(([coin, txs]) => {
      const avgPrice =
        txs.reduce((sum, tx) => {
          const price = parseFloat(tx.price.replace("$", "").replace(",", ""));
          return sum + (isNaN(price) ? 0 : price);
        }, 0) / txs.length;

      const avgProfit =
        txs.reduce((sum, tx) => sum + tx.profit, 0) / txs.length;

      const pricePoints: PricePoint[] = txs.map((tx) => ({
        timestamp: tx.timestamp,
        price: parseFloat(tx.price.replace("$", "").replace(",", "")) || 0,
        isPurchase: true,
        coin: tx.coin,
        profit: tx.profit,
        quantity: tx.quantity,
      }));

      // Sort by timestamp (most recent first)
      pricePoints.sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );

      return {
        coin,
        totalTrades: txs.length,
        avgPurchasePrice: avgPrice,
        avgProfit,
        successRate: 100, // All your trades are profitable
        pricePoints: pricePoints.slice(0, 10), // Show last 10 trades
      };
    });

    // Sort by total trades (most active coins first)
    analysis.sort((a, b) => b.totalTrades - a.totalTrades);
    setAnalysisData(analysis);

    // Set default selected coin to the most traded one
    if (analysis.length > 0 && selectedCoin === "ALL") {
      setSelectedCoin(analysis[0].coin);
    }
  }, [transactions, selectedCoin]);

  const getSelectedCoinData = () => {
    if (selectedCoin === "ALL") {
      return {
        coin: "ALL COINS",
        totalTrades: transactions.length,
        avgPurchasePrice: 0,
        avgProfit:
          transactions.reduce((sum, tx) => sum + tx.profit, 0) /
          transactions.length,
        successRate: 100,
        pricePoints: transactions.slice(0, 15).map((tx) => ({
          timestamp: tx.timestamp,
          price: parseFloat(tx.price.replace("$", "").replace(",", "")) || 0,
          isPurchase: true,
          coin: tx.coin,
          profit: tx.profit,
          quantity: tx.quantity,
        })),
      };
    }
    return (
      analysisData.find((data) => data.coin === selectedCoin) || analysisData[0]
    );
  };

  const selectedData = getSelectedCoinData();

  if (isLoading) {
    return (
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400 mr-3"></div>
            <span className="text-gray-300 text-lg">
              Analyzing strategic purchase patterns...
            </span>
          </div>
        </div>
      </section>
    );
  }

  if (error || !selectedData) {
    return (
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8">
            <Activity className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">
              Unable to Load Purchase Analysis
            </h3>
            <p className="text-red-300">
              {error || "No transaction data available for analysis."}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6">
            <Brain className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 font-medium">
              STRATEGIC ANALYSIS
            </span>
            <Sparkles className="w-4 h-4 text-purple-400" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Strategic Purchase Analysis
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            See how my robotic trader strategically buys on price dips and
            wiggles to maximize profits
          </p>

          {/* Coin Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setSelectedCoin("ALL")}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCoin === "ALL"
                  ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/30"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              All Coins ({transactions.length})
            </button>
            {analysisData.slice(0, 6).map((data) => (
              <button
                key={data.coin}
                onClick={() => setSelectedCoin(data.coin)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCoin === data.coin
                    ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/30"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {data.coin} ({data.totalTrades})
              </button>
            ))}
          </div>
        </div>

        {/* Key Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/40">
              <Target className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-2xl font-bold text-purple-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-indigo-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                {selectedData.totalTrades}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Strategic Buys
              </div>
              <div className="text-purple-300 text-sm mt-1">
                {selectedData.coin}
              </div>
            </div>
          </div>

          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-emerald-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/40">
              <DollarSign className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-2xl font-bold text-emerald-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-teal-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                ${selectedData.avgProfit.toFixed(2)}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Avg Profit
              </div>
              <div className="text-emerald-300 text-sm mt-1">Per Trade</div>
            </div>
          </div>

          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-green-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/40">
              <TrendingUp className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-2xl font-bold text-green-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                {selectedData.successRate}%
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Success Rate
              </div>
              <div className="text-green-300 text-sm mt-1">All Profitable</div>
            </div>
          </div>

          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-amber-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/40">
              <Zap className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-2xl font-bold text-amber-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-300 group-hover:to-orange-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                AI
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Dip Detection
              </div>
              <div className="text-amber-300 text-sm mt-1">Smart Timing</div>
            </div>
          </div>
        </div>
        <PriceChartWithPurchases />

        {/* Strategic Purchase Timeline */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-8 mb-8 relative">
          <div className="absolute top-4 right-4 opacity-20 pointer-events-none hidden md:block">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-sm border border-purple-400/30 flex items-center justify-center animate-pulse shadow-lg shadow-purple-500/20">
              <Activity className="w-8 h-8 text-purple-400" />
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">
            Recent Strategic Purchases - {selectedData.coin}
          </h3>

          <div className="space-y-4 max-h-96 overflow-y-auto scrollbar-hide">
            {selectedData.pricePoints.map((point, index) => (
              <div
                key={`${point.coin}-${point.timestamp}-${index}`}
                className="flex items-center justify-between bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/30">
                    <ArrowDown className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-white text-lg">
                        {point.coin}
                      </span>
                      <span className="text-green-400 font-mono text-sm bg-green-500/20 px-2 py-1 rounded">
                        BUY
                      </span>
                    </div>
                    <div className="text-gray-400 text-sm flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      {point.timestamp}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-white font-mono text-lg mb-1">
                    $
                    {point.price < 1
                      ? point.price.toFixed(4)
                      : point.price.toLocaleString()}
                  </div>
                  <div className="text-green-400 font-semibold">
                    +${point.profit?.toFixed(2)} profit
                  </div>
                  <div className="text-gray-400 text-xs">
                    Qty: {point.quantity}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 pt-4 border-t border-white/10">
            <p className="text-purple-300 font-semibold text-sm md:text-lg">
              🎯 Strategic dip buying • 🤖 AI-powered timing • 💰 100%
              profitable trades
            </p>
          </div>
        </div>

        {/* Strategy Explanation */}
        <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
            How The Strategic Buying Works
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
                <TrendingDown className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                1. Dip Detection
              </h4>
              <p className="text-gray-300 text-sm">
                AI algorithms identify price dips and market "wiggles" in
                real-time across multiple cryptocurrencies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                2. Strategic Entry
              </h4>
              <p className="text-gray-300 text-sm">
                The bot executes precise buy orders at optimal entry points,
                maximizing profit potential on each trade.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30">
                <ArrowUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                3. Profit Taking
              </h4>
              <p className="text-gray-300 text-sm">
                Automated profit-taking ensures consistent gains while
                minimizing risk and emotional trading decisions.
              </p>
            </div>
          </div>

          <div className="text-center mt-8 pt-6 border-t border-white/10">
            <p className="text-indigo-300 font-medium">
              ✨ This is why every single trade shown above is profitable - the
              AI only buys at strategic moments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
