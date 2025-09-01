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
            <span className="text-green-300 font-medium">Live Results</span>
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
            - consistent results for 8 months!
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

          {/* 30-Day Profits */}
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-6 text-center">
            <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-blue-400 mb-2">
              ${tradingData.thirtyDayProfit.toLocaleString()}
            </div>
            <div className="text-gray-300 text-sm">30-Day Profits</div>
            <div className="text-xs text-gray-400 mt-1">Recent Performance</div>
          </div>

          {/* Daily Average */}
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-6 text-center">
            <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-purple-400 mb-2">
              ${dailyAvg}
            </div>
            <div className="text-gray-300 text-sm">Daily Average</div>
            <div className="text-xs text-gray-400 mt-1">Consistent Growth</div>
          </div>

          {/* Today's Profit */}
          <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/30 backdrop-blur-sm rounded-2xl border border-pink-500/20 p-6 text-center">
            <Zap className="w-8 h-8 text-pink-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-pink-400 mb-2">
              ${tradingData.todayProfit}
            </div>
            <div className="text-gray-300 text-sm">Today's Profit</div>
            <div className="text-xs text-gray-400 mt-1">Live Update</div>
          </div>
        </div>

        {/* Monthly Chart */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Monthly Performance Trend
          </h3>

          <div className="flex items-end justify-center gap-4 h-48">
            {[
              { month: "Aug 2025", profit: 408 },
              { month: "Jul 2025", profit: 520 },
              { month: "Jun 2025", profit: 480 },
              { month: "May 2025", profit: 450 },
              { month: "Apr 2025", profit: 380 },
              { month: "Mar 2025", profit: 420 },
            ].map((month) => {
              const height = (month.profit / 520) * 100;
              return (
                <div key={month.month} className="flex flex-col items-center">
                  <div className="text-sm text-gray-300 mb-2">
                    ${month.profit}
                  </div>
                  <div
                    className="w-12 bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg transition-all duration-1000 ease-out"
                    style={{ height: `${height}%` }}
                  ></div>
                  <div className="text-xs text-gray-400 mt-2 transform -rotate-45 origin-left">
                    {month.month}
                  </div>
                </div>
              );
            })}
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
