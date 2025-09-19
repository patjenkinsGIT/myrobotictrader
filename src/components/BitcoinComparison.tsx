import React from "react";
import {
  TrendingUp,
  TrendingDown,
  Target,
  Shield,
  AlertTriangle,
  Bitcoin,
} from "lucide-react";
import useBitcoinCorrelation from "../hooks/useBitcoinCorrelation";

interface MonthlyTradingData {
  month: string;
  profit: number;
  trades?: number;
}

interface BitcoinComparisonProps {
  monthlyTradingData: MonthlyTradingData[];
}

export const BitcoinComparison: React.FC<BitcoinComparisonProps> = ({
  monthlyTradingData,
}) => {
  const {
    currentBitcoin,
    correlationData,
    independentMonths,
    totalMonths,
    isLoading,
    error,
  } = useBitcoinCorrelation(monthlyTradingData);

  if (isLoading && !currentBitcoin) {
    return (
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-orange-900/20 to-yellow-900/20 rounded-2xl border border-orange-500/20 p-6">
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-400"></div>
              <span className="ml-3 text-gray-300">
                Loading Bitcoin comparison...
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const winRate = totalMonths > 0 ? (independentMonths / totalMonths) * 100 : 0;
  const currentBtcChange = currentBitcoin?.change30d || 0;
  const lastMonth = monthlyTradingData[monthlyTradingData.length - 1];

  // Simple status messages people can understand
  const getSimpleStatus = (yourProfit: number, bitcoinChange: number) => {
    if (yourProfit > 0 && bitcoinChange < 0) {
      return {
        text: "✅ You made money while Bitcoin lost money",
        color: "text-green-400",
        bgColor: "bg-green-500/10",
      };
    }
    if (yourProfit > 0 && bitcoinChange > 0) {
      return {
        text: "🚀 Both you and Bitcoin made money",
        color: "text-green-400",
        bgColor: "bg-green-500/10",
      };
    }
    if (yourProfit > 0) {
      return {
        text: "💰 You stayed profitable",
        color: "text-green-400",
        bgColor: "bg-green-500/10",
      };
    }
    return {
      text: "📊 Market comparison",
      color: "text-gray-400",
      bgColor: "bg-gray-500/10",
    };
  };

  const status = lastMonth
    ? getSimpleStatus(lastMonth.profit, currentBtcChange)
    : null;

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-orange-900/20 to-yellow-900/20 rounded-2xl border border-orange-500/20 p-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 p-3 shadow-lg shadow-orange-500/40">
              <Bitcoin className="w-full h-full text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">
                Bitcoin vs My Results
              </h3>
              <p className="text-orange-300">
                Live Bitcoin Price: $
                {currentBitcoin?.price?.toLocaleString() || "Loading..."}
              </p>
            </div>
          </div>

          {/* Simple Comparison */}
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl border border-white/10 p-6 mb-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Your Performance */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-500/20 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400">
                  +${lastMonth?.profit?.toFixed(0) || "0"}
                </div>
                <div className="text-sm text-gray-300">My Trading Profit</div>
                <div className="text-xs text-gray-400 mt-1">Last Month</div>
              </div>

              {/* VS */}
              <div className="flex flex-col items-center justify-center">
                <div className="text-4xl font-bold text-white opacity-50 mb-2">
                  VS
                </div>
                <div className="text-xs text-gray-400 text-center">
                  Same time period
                </div>
              </div>

              {/* Bitcoin Performance */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-orange-500/20 flex items-center justify-center">
                  {currentBtcChange >= 0 ? (
                    <TrendingUp className="w-8 h-8 text-green-400" />
                  ) : (
                    <TrendingDown className="w-8 h-8 text-red-400" />
                  )}
                </div>
                <div
                  className={`text-2xl font-bold ${
                    currentBtcChange >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {currentBtcChange >= 0 ? "+" : ""}
                  {currentBtcChange.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-300">Bitcoin Change</div>
                <div className="text-xs text-gray-400 mt-1">Past 30 Days</div>
              </div>
            </div>

            {/* Status Message - Simple Language */}
            {status && (
              <div
                className={`mt-6 p-4 rounded-lg border ${status.bgColor} border-green-500/20`}
              >
                <div className={`flex items-center gap-2 ${status.color}`}>
                  <Shield className="w-5 h-5" />
                  <span className="font-semibold text-lg">{status.text}</span>
                </div>
              </div>
            )}
          </div>

          {/* Why This Matters - Simple Explanation */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-blue-400" />
              <h4 className="text-lg font-semibold text-white">
                Why This Comparison Matters
              </h4>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {winRate.toFixed(0)}%
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  Success Rate - Months I made money regardless of what Bitcoin
                  did
                </p>
                <div className="text-xs text-gray-400">
                  {independentMonths} winning months out of {totalMonths} total
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-green-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm">
                    My strategy works in any market
                  </span>
                </div>
                <div className="flex items-center gap-2 text-blue-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm">
                    Not dependent on Bitcoin going up
                  </span>
                </div>
                <div className="flex items-center gap-2 text-purple-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm">
                    Consistent profits regardless of market direction
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Monthly Table */}
          <div className="mt-6 bg-white/5 rounded-xl border border-white/10 overflow-hidden">
            <div className="p-4 border-b border-white/10">
              <h4 className="text-lg font-semibold text-white">
                Month by Month: Me vs Bitcoin
              </h4>
              <p className="text-sm text-gray-400">
                See how my results compare to Bitcoin each month
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="text-left p-4 text-sm font-medium text-gray-300">
                      Month
                    </th>
                    <th className="text-right p-4 text-sm font-medium text-gray-300">
                      My Profit
                    </th>
                    <th className="text-right p-4 text-sm font-medium text-gray-300">
                      Bitcoin Change
                    </th>
                    <th className="text-center p-4 text-sm font-medium text-gray-300">
                      Result
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {correlationData.slice(-6).map((data) => {
                    const matchingMonth = monthlyTradingData.find(
                      (m) => m.month === data.month
                    );
                    const profit = matchingMonth ? matchingMonth.profit : 0;

                    return (
                      <tr key={data.month} className="border-t border-white/5">
                        <td className="p-4 text-white font-medium">
                          {data.month}
                        </td>
                        <td className="p-4 text-right">
                          <span className="text-green-400 font-semibold">
                            +${profit.toFixed(0)}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <span
                            className={`font-semibold ${
                              data.bitcoinReturn >= 0
                                ? "text-green-400"
                                : "text-red-400"
                            }`}
                          >
                            {data.bitcoinReturn >= 0 ? "+" : ""}
                            {data.bitcoinReturn}%
                          </span>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-xs text-gray-300">
                            {profit > 0 && data.bitcoinReturn < 0
                              ? "✅ Won while BTC lost"
                              : profit > 0 && data.bitcoinReturn > 0
                              ? "🚀 Both won"
                              : profit > 0
                              ? "💰 I won"
                              : "📊 Mixed"}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-2">
                The Bottom Line
              </h4>
              <p className="text-gray-300 mb-4">
                Most people only make money when Bitcoin goes up. My robotic
                trading system makes money consistently, whether Bitcoin is
                going up, down, or sideways. That's the power of a proven
                strategy.
              </p>
              {error && (
                <div className="flex items-center justify-center gap-2 text-yellow-400 text-sm">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Bitcoin data temporarily unavailable</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
