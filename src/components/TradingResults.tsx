import * as React from "react";
import {
  TrendingUp,
  DollarSign,
  Calendar,
  BarChart3,
  Zap,
  Activity,
} from "lucide-react";
import { tradingData, calculateDailyAverage } from "../data/tradingResults";

export const TradingResults: React.FC = () => {
  const dailyAvg = calculateDailyAverage();

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6">
            <BarChart3 className="w-4 h-4 text-green-400" />
            <span className="text-green-300 font-medium">Real Results</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My Trading Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            These are my actual profits from using my robotic trader.
            <span className="text-green-400 font-semibold">
              {" "}
              Started January 8, 2025
            </span>{" "}
            - Stats Updated Monthly!
          </p>
        </div>

        {/* Main Stats Grid - 2 rows of 3 cards each */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Row 1 */}
          {/* Total Profits */}
          <div className="bg-gradient-to-br from-emerald-500/40 to-green-600/40 backdrop-blur-sm rounded-2xl border border-emerald-400/30 p-6 text-center shadow-lg shadow-emerald-500/20">
            <DollarSign className="w-8 h-8 text-emerald-300 mx-auto mb-3" />
            <div className="text-2xl font-bold text-emerald-200 mb-2 font-mono">
              ${tradingData.totalProfit.toLocaleString()}
            </div>
            <div className="text-gray-200 text-sm">Total Profits</div>
            <div className="text-xs text-emerald-300 mt-1 font-medium">
              8 Months Trading
            </div>
          </div>

          {/* Monthly Average */}
          <div className="bg-gradient-to-br from-blue-500/40 to-cyan-600/40 backdrop-blur-sm rounded-2xl border border-blue-400/30 p-6 text-center shadow-lg shadow-blue-500/20">
            <Calendar className="w-8 h-8 text-blue-300 mx-auto mb-3" />
            <div className="text-2xl font-bold text-blue-200 mb-2 font-mono">
              $441.54
            </div>
            <div className="text-gray-200 text-sm">Monthly Average</div>
            <div className="text-xs text-blue-300 mt-1">
              Consistent Performance
            </div>
          </div>

          {/* Daily Average */}
          <div className="bg-gradient-to-br from-purple-500/40 to-violet-600/40 backdrop-blur-sm rounded-2xl border border-purple-400/30 p-6 text-center shadow-lg shadow-purple-500/20">
            <TrendingUp className="w-8 h-8 text-purple-300 mx-auto mb-3" />
            <div className="text-2xl font-bold text-purple-200 mb-2 font-mono">
              ${dailyAvg}
            </div>
            <div className="text-gray-200 text-sm">Daily Average</div>
            <div className="text-xs text-purple-300 mt-1">Steady Growth</div>
          </div>
        </div>

        {/* Second row of stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Best Month */}
          <div className="bg-gradient-to-br from-pink-500/40 to-rose-600/40 backdrop-blur-sm rounded-2xl border border-pink-400/30 p-6 text-center shadow-lg shadow-pink-500/20">
            <Zap className="w-8 h-8 text-pink-300 mx-auto mb-3" />
            <div className="text-2xl font-bold text-pink-200 mb-2 font-mono">
              $817.31
            </div>
            <div className="text-gray-200 text-sm">Best Month</div>
            <div className="text-xs text-pink-300 mt-1">July 2025</div>
          </div>

          {/* Total Trades */}
          <div className="bg-gradient-to-br from-orange-500/40 to-amber-600/40 backdrop-blur-sm rounded-2xl border border-orange-400/30 p-6 text-center shadow-lg shadow-orange-500/20">
            <Activity className="w-8 h-8 text-orange-300 mx-auto mb-3" />
            <div className="text-2xl font-bold text-orange-200 mb-2 font-mono">
              840
            </div>
            <div className="text-gray-200 text-sm">Closed Trades</div>
            <div className="text-xs text-orange-300 mt-1">Active System</div>
          </div>

          {/* Average Profit Per Trade */}
          <div className="bg-gradient-to-br from-teal-500/40 to-cyan-600/40 backdrop-blur-sm rounded-2xl border border-teal-400/30 p-6 text-center shadow-lg shadow-teal-500/20">
            <DollarSign className="w-8 h-8 text-teal-300 mx-auto mb-3" />
            <div className="text-2xl font-bold text-teal-200 mb-2 font-mono">
              $4.73
            </div>
            <div className="text-gray-200 text-sm">Avg Profit/Trade</div>
            <div className="text-xs text-teal-300 mt-1">Consistent Gains</div>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-sm text-green-300 bg-green-900/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block border border-green-500/20">
            ✓ All profits shown are net amounts after trading fees and rebates
          </p>
        </div>

        {/* Monthly Chart - MOBILE RESPONSIVE VERSION */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">
            Monthly Performance (2025)
          </h3>

          {/* Responsive chart container */}
          <div className="w-full overflow-x-auto">
            <div
              className="flex items-end justify-center gap-2 md:gap-4 mb-4 md:mb-6 min-w-max mx-auto"
              style={{ height: "200px" }}
            >
              {[
                { month: "Jan", profit: 477.17 },
                { month: "Feb", profit: 686.72 },
                { month: "Mar", profit: 261.93 },
                { month: "Apr", profit: 552.58 },
                { month: "May", profit: 376.29 },
                { month: "Jun", profit: 382.98 },
                { month: "Jul", profit: 817.31 },
                { month: "Aug", profit: 413.54 },
              ].map((month) => {
                const maxBarHeight = 140;
                const height = Math.max(
                  (month.profit / 817.31) * maxBarHeight,
                  12
                );
                const isHighest = month.profit === 817.31;

                return (
                  <div key={month.month} className="flex flex-col items-center">
                    <div
                      className={`text-xs md:text-sm mb-1 md:mb-2 font-semibold ${
                        isHighest ? "text-yellow-300" : "text-gray-200"
                      }`}
                    >
                      ${Math.round(month.profit)}
                    </div>

                    <div
                      className={`w-8 md:w-12 rounded-t-lg transition-all duration-1000 ease-out ${
                        isHighest
                          ? "bg-gradient-to-t from-yellow-500 to-yellow-300 shadow-lg shadow-yellow-400/40"
                          : "bg-gradient-to-t from-emerald-500 to-green-400 shadow-lg shadow-emerald-400/30"
                      }`}
                      style={{
                        height: `${height}px`,
                        minHeight: "12px",
                      }}
                    ></div>

                    <div className="text-xs md:text-sm text-gray-200 mt-2 md:mt-3 font-medium">
                      {month.month}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <p className="text-emerald-300 font-semibold text-sm md:text-lg">
              📈 840 trades • $4.73 avg profit/trade • Best month: $817.31
              (July)
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            * These are my actual trading results from my personal robotic
            trader account. Started January 8, 2025. Results updated regularly.
            Past performance does not guarantee future results. Last updated:
            September 1, 2025
          </p>
        </div>
      </div>
    </section>
  );
};
