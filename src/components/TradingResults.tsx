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
import {
  liveTradingData,
  calculateLiveDailyAverage,
} from "../data/liveTrading";

export const TradingResults: React.FC = () => {
  // Use live data if available, fallback to original data
  const currentData = liveTradingData.isLiveData
    ? liveTradingData
    : tradingData;
  const dailyAvg = liveTradingData.isLiveData
    ? calculateLiveDailyAverage()
    : calculateDailyAverage();

  // Split monthly data for better mobile display with smooth transition
  const allMonthlyData = currentData.monthlyData;
  const recentMonths = allMonthlyData.slice(-6); // Last 6 months for chart
  const olderMonths = allMonthlyData.slice(0, -5).reverse(); // Previous months for table (newest first)

  // Find best month with name
  const bestMonthData = allMonthlyData.reduce((best, current) =>
    current.profit > best.profit ? current : best
  );

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6">
            <BarChart3 className="w-4 h-4 text-green-400" />
            <span className="text-green-300 font-medium">
              {liveTradingData.isLiveData ? "Live Data" : "Real Results"}
            </span>
            {liveTradingData.isLiveData && (
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            )}
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
            -{" "}
            {liveTradingData.isLiveData
              ? "Live Updates!"
              : "Stats Updated Monthly!"}
          </p>

          {liveTradingData.isLiveData && (
            <div className="mt-4">
              <p className="text-sm text-green-300">
                Last updated:{" "}
                {new Date(liveTradingData.lastUpdated).toLocaleString()}
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-emerald-500/40 to-green-600/40 backdrop-blur-sm rounded-2xl border border-emerald-400/30 p-6 text-center shadow-lg shadow-emerald-500/20">
            <DollarSign className="w-8 h-8 text-emerald-300 mx-auto mb-3" />
            <div className="text-2xl font-bold text-emerald-200 mb-2 font-mono">
              ${currentData.totalProfit.toLocaleString()}
            </div>
            <div className="text-gray-200 text-sm">Total Profits</div>
            <div className="text-xs text-emerald-300 mt-1 font-medium">
              8 Months Trading
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/40 to-cyan-600/40 backdrop-blur-sm rounded-2xl border border-blue-400/30 p-6 text-center shadow-lg shadow-blue-500/20">
            <Calendar className="w-8 h-8 text-blue-300 mx-auto mb-3" />
            <div className="text-2xl font-bold text-blue-200 mb-2 font-mono">
              ${currentData.monthlyAverage.toFixed(2)}
            </div>
            <div className="text-gray-200 text-sm">Monthly Average</div>
            <div className="text-xs text-blue-300 mt-1">
              Consistent Performance
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/40 to-violet-600/40 backdrop-blur-sm rounded-2xl border border-purple-400/30 p-6 text-center shadow-lg shadow-purple-500/20">
            <TrendingUp className="w-8 h-8 text-purple-300 mx-auto mb-3" />
            <div className="text-2xl font-bold text-purple-200 mb-2 font-mono">
              ${dailyAvg}
            </div>
            <div className="text-gray-200 text-sm">Daily Average</div>
            <div className="text-xs text-purple-300 mt-1">Steady Growth</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-pink-500/40 to-rose-600/40 backdrop-blur-sm rounded-2xl border border-pink-400/30 p-6 text-center shadow-lg shadow-pink-500/20">
            <Zap className="w-8 h-8 text-pink-300 mx-auto mb-3" />
            <div className="text-2xl font-bold text-pink-200 mb-2 font-mono">
              ${bestMonthData.profit.toFixed(2)}
            </div>
            <div className="text-gray-200 text-sm">Best Month</div>
            <div className="text-xs text-pink-300 mt-1">
              {bestMonthData.month} 2025
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/40 to-amber-600/40 backdrop-blur-sm rounded-2xl border border-orange-400/30 p-6 text-center shadow-lg shadow-orange-500/20">
            <Activity className="w-8 h-8 text-orange-300 mx-auto mb-3" />
            <div className="text-2xl font-bold text-orange-200 mb-2 font-mono">
              {currentData.totalTrades.toLocaleString()}
            </div>
            <div className="text-gray-200 text-sm">Closed Trades</div>
            <div className="text-xs text-orange-300 mt-1">Active System</div>
          </div>

          <div className="bg-gradient-to-br from-teal-500/40 to-cyan-600/40 backdrop-blur-sm rounded-2xl border border-teal-400/30 p-6 text-center shadow-lg shadow-teal-500/20">
            <DollarSign className="w-8 h-8 text-teal-300 mx-auto mb-3" />
            <div className="text-2xl font-bold text-teal-200 mb-2 font-mono">
              ${currentData.avgProfitPerTrade.toFixed(2)}
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

        {/* Recent Months Chart - Mobile Optimized (Last 6 Months) */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-8 mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">
            Recent Performance (Last 6 Months)
          </h3>

          <div className="w-full overflow-x-auto">
            <div
              className="flex items-end justify-center gap-3 md:gap-6 mb-4 md:mb-6 min-w-max mx-auto"
              style={{ height: "200px" }}
            >
              {recentMonths.map((month) => {
                const maxBarHeight = 140;
                const maxProfit = Math.max(
                  ...recentMonths.map((m) => m.profit)
                );
                const height = Math.max(
                  (month.profit / maxProfit) * maxBarHeight,
                  12
                );
                const isHighest = month.profit === maxProfit;

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
                      className={`w-10 md:w-16 rounded-t-lg transition-all duration-1000 ease-out ${
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
              📈 {currentData.totalTrades} trades • $
              {currentData.avgProfitPerTrade.toFixed(2)} avg profit/trade • Best
              month: ${bestMonthData.profit.toFixed(2)} ({bestMonthData.month})
            </p>
          </div>
        </div>

        {/* Previous Months Table (with smooth transition from chart) */}
        {olderMonths.length > 0 && (
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-8 mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">
              Previous Months Performance
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-gray-300 font-semibold py-3 px-4">
                      Month
                    </th>
                    <th className="text-gray-300 font-semibold py-3 px-4 text-right">
                      Profit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {olderMonths.map((month, index) => (
                    <tr
                      key={month.month}
                      className={`border-b border-white/5 ${
                        index % 2 === 0 ? "bg-white/5" : ""
                      }`}
                    >
                      <td className="text-gray-200 py-3 px-4 font-medium">
                        {month.month} 2025
                      </td>
                      <td className="text-emerald-300 py-3 px-4 text-right font-mono font-semibold">
                        ${month.profit.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mt-4">
              <p className="text-gray-400 text-sm">
                Showing {olderMonths.length} previous months • Total: $
                {olderMonths
                  .reduce((sum, month) => sum + month.profit, 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>
        )}

        <div className="text-center mt-8">
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            * These are my actual trading results from my personal robotic
            trader account. Started January 8, 2025.
            {liveTradingData.isLiveData
              ? " Live data from Google Sheets."
              : " Results updated regularly."}
            Past performance does not guarantee future results.
            {liveTradingData.isLiveData &&
              ` Last updated: ${new Date(
                liveTradingData.lastUpdated
              ).toLocaleDateString()}`}
          </p>
        </div>
      </div>
    </section>
  );
};
