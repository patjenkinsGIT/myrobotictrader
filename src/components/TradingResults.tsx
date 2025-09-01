import * as React from "react";
import { TrendingUp, DollarSign, Calendar, BarChart3, Zap } from "lucide-react";
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
            Patrick's Trading Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            These are my actual profits from using MyRoboticTrader.
            <span className="text-green-400 font-semibold">
              {" "}
              Started January 8, 2025
            </span>{" "}
            - updated regularly!
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Total Profits */}
          <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 backdrop-blur-sm rounded-2xl border border-green-500/20 p-6 text-center">
            <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-green-400 mb-2">
              ${tradingData.totalProfit.toLocaleString()}
            </div>
            <div className="text-gray-300 text-sm">Total Profits</div>
            <div className="text-xs text-green-300 mt-1 font-medium">
              8 Months Trading
            </div>
          </div>

          {/* Monthly Average */}
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-6 text-center">
            <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-blue-400 mb-2">$441.54</div>
            <div className="text-gray-300 text-sm">Monthly Average</div>
            <div className="text-xs text-gray-400 mt-1">
              Consistent Performance
            </div>
          </div>

          {/* Daily Average */}
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-6 text-center">
            <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-purple-400 mb-2">
              ${dailyAvg}
            </div>
            <div className="text-gray-300 text-sm">Daily Average</div>
            <div className="text-xs text-gray-400 mt-1">Steady Growth</div>
          </div>

          {/* Best Month */}
          <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/30 backdrop-blur-sm rounded-2xl border border-pink-500/20 p-6 text-center">
            <Zap className="w-8 h-8 text-pink-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-pink-400 mb-2">$817.31</div>
            <div className="text-gray-300 text-sm">Best Month</div>
            <div className="text-xs text-gray-400 mt-1">July 2025</div>
          </div>
        </div>

        {/* Monthly Chart - FIXED VERSION */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Monthly Performance (2025)
          </h3>

          {/* Fixed chart container with explicit height */}
          <div
            className="flex items-end justify-center gap-4 mb-6"
            style={{ height: "280px" }}
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
              // Calculate height in pixels, not percentage
              const maxBarHeight = 220; // Leave room for labels
              const height = Math.max(
                (month.profit / 817.31) * maxBarHeight,
                15
              ); // Minimum 15px
              const isHighest = month.profit === 817.31;

              return (
                <div key={month.month} className="flex flex-col items-center">
                  {/* Profit amount above bar */}
                  <div
                    className={`text-sm mb-2 font-semibold ${
                      isHighest ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ${Math.round(month.profit)}
                  </div>

                  {/* Bar with fixed pixel height */}
                  <div
                    className={`w-12 rounded-t-lg transition-all duration-1000 ease-out ${
                      isHighest
                        ? "bg-gradient-to-t from-yellow-600 to-yellow-400 shadow-lg shadow-yellow-500/30"
                        : "bg-gradient-to-t from-green-600 to-green-400 shadow-lg shadow-green-500/20"
                    }`}
                    style={{
                      height: `${height}px`,
                      minHeight: "15px", // Ensure minimum visibility
                    }}
                  ></div>

                  {/* Month label below bar */}
                  <div className="text-sm text-gray-300 mt-3 font-medium">
                    {month.month}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-green-400 font-semibold text-lg">
              📈 $441.54 average per month • Best month: $817.31 (July)
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            * These are Patrick's actual trading results from his personal
            MyRoboticTrader account. Started January 8, 2025. Results updated
            regularly. Past performance does not guarantee future results. Last
            updated: September 1, 2025
          </p>
        </div>
      </div>
    </section>
  );
};
