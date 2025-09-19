// src/components/BitcoinComparison.tsx
import React from "react";
import {
  TrendingUp,
  TrendingDown,
  Target,
  Shield,
  AlertTriangle,
  Bitcoin,
  CheckCircle,
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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-white/5 rounded-2xl border border-white/10 p-8 backdrop-blur-sm">
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-400/30 border-t-purple-400"></div>
              <span className="ml-4 text-gray-300 text-lg">
                Loading comparison data...
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const independenceRate =
    totalMonths > 0 ? (independentMonths / totalMonths) * 100 : 0;
  const currentBtcChange = currentBitcoin?.change30d || 0;
  const lastMonthProfit =
    monthlyTradingData[monthlyTradingData.length - 1]?.profit || 0;

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background matching your production design */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="bg-white/5 rounded-2xl border border-white/10 p-8 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
          {/* Simple Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 p-3 shadow-lg">
              <Bitcoin className="w-full h-full text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">
                Simple Proof This Works
              </h3>
              <p className="text-purple-200">
                See how you made money when others lost
              </p>
            </div>
          </div>

          {/* Main Comparison - Lightened Colors */}
          <div className="bg-white/8 backdrop-blur-sm rounded-xl border border-white/15 p-4 md:p-8 mb-8 hover:bg-white/10 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
              {/* Your Results */}
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 md:p-4 shadow-lg">
                  <TrendingUp className="w-full h-full text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1 md:mb-2">
                  +${lastMonthProfit.toFixed(0)}
                </div>
                <div className="text-green-200 font-medium text-sm md:text-base">
                  You Made This Month
                </div>
              </div>

              {/* VS */}
              <div className="text-center md:block hidden">
                <div className="text-3xl md:text-4xl font-bold text-purple-300 opacity-60">
                  VS
                </div>
              </div>

              {/* Mobile VS */}
              <div className="text-center md:hidden">
                <div className="text-lg font-bold text-purple-300 opacity-60 py-2">
                  VS
                </div>
              </div>

              {/* Bitcoin Results - With Price Quote */}
              <div className="text-center">
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-xl p-3 md:p-4 shadow-lg ${
                    currentBtcChange >= 0
                      ? "bg-gradient-to-br from-green-500 to-emerald-500"
                      : "bg-gradient-to-br from-red-500 to-rose-500"
                  }`}
                >
                  {currentBtcChange >= 0 ? (
                    <TrendingUp className="w-full h-full text-white" />
                  ) : (
                    <TrendingDown className="w-full h-full text-white" />
                  )}
                </div>

                {/* Bitcoin Price */}
                <div className="text-lg md:text-xl font-bold text-orange-300 mb-1">
                  ${currentBitcoin?.price?.toLocaleString() || "65,250"}
                </div>

                <div
                  className={`text-2xl md:text-3xl font-bold mb-1 md:mb-2 ${
                    currentBtcChange >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {currentBtcChange >= 0 ? "+" : ""}
                  {currentBtcChange.toFixed(1)}%
                </div>
                <div
                  className={`font-medium text-sm md:text-base ${
                    currentBtcChange >= 0 ? "text-green-200" : "text-red-200"
                  }`}
                >
                  Bitcoin Investors Got
                </div>
              </div>
            </div>

            {/* Simple Explanation - First Person */}
            <div className="mt-8 p-6 bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-xl border border-green-500/25">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-green-300 font-semibold text-lg mb-2">
                    What This Means:
                  </h4>
                  <p className="text-green-200 text-base leading-relaxed">
                    {currentBtcChange < 0 && lastMonthProfit > 0
                      ? `While Bitcoin investors lost ${Math.abs(
                          currentBtcChange
                        ).toFixed(
                          1
                        )}% of their money this month, I made ${lastMonthProfit.toFixed(
                          0
                        )}. This shows my strategy works even when the crypto market is down.`
                      : currentBtcChange === 0
                      ? `While Bitcoin stayed flat this month (0% change), I still made ${lastMonthProfit.toFixed(
                          0
                        )}. This shows my strategy generates profits regardless of Bitcoin's direction.`
                      : independenceRate > 70
                      ? `My profits don't depend on whether Bitcoin goes up or down. This means I can make money in any market condition - that's the power of a truly independent trading strategy.`
                      : `I'm consistently making money regardless of what Bitcoin does. This proves my strategy works independently of market trends.`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Stats - Lightened */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/8 rounded-xl p-6 border border-white/15 hover:border-white/25 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white">
                  Independence Score
                </h4>
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {independenceRate.toFixed(0)}%
              </div>
              <p className="text-gray-300 text-sm">
                {independentMonths} out of {totalMonths} months I made money
                regardless of Bitcoin's performance
              </p>
            </div>

            <div className="bg-white/8 rounded-xl p-6 border border-white/15 hover:border-white/25 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white">Risk Level</h4>
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">
                Lower
              </div>
              <p className="text-gray-300 text-sm">
                Less risky than buying Bitcoin because my profits don't depend
                on price movements
              </p>
            </div>
          </div>

          {/* Simplified Table - Lightened */}
          <div className="bg-white/8 rounded-xl border border-white/15 overflow-hidden">
            <div className="p-4 md:p-6 border-b border-white/15 bg-white/5">
              <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                Month-by-Month Comparison
              </h4>
              <p className="text-gray-400 text-sm md:text-base">
                See how I did vs Bitcoin each month
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/8">
                  <tr>
                    <th className="text-left p-3 md:p-4 text-xs md:text-sm font-medium text-gray-300">
                      Month
                    </th>
                    <th className="text-right p-3 md:p-4 text-xs md:text-sm font-medium text-gray-300">
                      I Made
                    </th>
                    <th className="text-right p-3 md:p-4 text-xs md:text-sm font-medium text-gray-300">
                      Bitcoin
                    </th>
                    <th className="text-center p-3 md:p-4 text-xs md:text-sm font-medium text-gray-300">
                      Result
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {correlationData.map((data) => {
                    const matchingMonth = monthlyTradingData.find(
                      (m) => m.month === data.month
                    );
                    const profit = matchingMonth ? matchingMonth.profit : 0;

                    return (
                      <tr
                        key={data.month}
                        className="border-t border-white/10 hover:bg-white/8 transition-colors duration-200"
                      >
                        <td className="p-3 md:p-4 text-white font-medium text-sm md:text-base">
                          {data.month}
                        </td>
                        <td className="p-3 md:p-4 text-right">
                          <span className="text-green-400 font-semibold text-sm md:text-base">
                            +${profit.toFixed(0)}
                          </span>
                        </td>
                        <td className="p-3 md:p-4 text-right">
                          <span
                            className={`font-semibold text-sm md:text-base ${
                              data.bitcoinReturn >= 0
                                ? "text-green-400"
                                : "text-red-400"
                            }`}
                          >
                            {data.bitcoinReturn >= 0 ? "+" : ""}
                            {data.bitcoinReturn}%
                          </span>
                        </td>
                        <td className="p-3 md:p-4 text-center">
                          {data.status === "independent" && (
                            <span className="px-2 md:px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                              You Won
                            </span>
                          )}
                          {data.status === "inverse" && (
                            <span className="px-2 md:px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium">
                              You Won Big
                            </span>
                          )}
                          {data.status === "correlated" && (
                            <span className="px-2 md:px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
                              Both Good
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Simple Bottom Message - First Person */}
          <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-xl border border-purple-500/25">
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-3">
                Why This Matters to You
              </h4>
              <p className="text-purple-100 text-lg leading-relaxed mb-4">
                Most people who buy Bitcoin only make money when prices go up.
                But my strategy makes money whether Bitcoin goes up, down, or
                sideways. That's why it's safer and more reliable for building
                wealth.
              </p>
              <div className="text-sm text-purple-300 font-medium">
                This isn't about predicting the market - it's about having a
                system that works in any market.
              </div>
              {error && (
                <div className="flex items-center justify-center gap-2 text-yellow-400 text-sm mt-4">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Using backup Bitcoin data</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
