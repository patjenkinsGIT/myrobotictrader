import React from "react";
import {
  useGoogleSheetsData,
  TradingStats,
  TradingDataPoint,
} from "../hooks/useGoogleSheetsData";

interface TradingResultsProps {
  tradingStats?: TradingStats | null;
}

export const TradingResults: React.FC<TradingResultsProps> = ({
  tradingStats: propTradingStats,
}) => {
  const { tradingStats: apiTradingStats, cacheInfo } = useGoogleSheetsData();

  // Use props if provided, otherwise fall back to API data
  const currentData = propTradingStats ||
    apiTradingStats || {
      totalProfit: 0,
      totalTrades: 0,
      avgProfitPerTrade: 0,
      monthlyAverage: 0,
      bestMonthProfit: 0,
      monthlyData: [],
    };

  // Debug logging to help identify data structure issues
  console.log("🔍 TradingResults Debug Data:", {
    propTradingStats,
    apiTradingStats,
    currentData,
    cacheInfo,
  });

  // Add this function in your component to format currency
  const formatCurrency = (
    value: number | string | null | undefined
  ): string => {
    const numValue = Number(value);
    if (isNaN(numValue)) {
      return "0.00";
    }
    return numValue.toFixed(2);
  };

  // Calculate metrics with proper fallbacks
  const totalProfit = currentData.totalProfit || 0;
  const totalTrades = currentData.totalTrades || 0;
  const monthlyAverage = currentData.monthlyAverage || totalProfit / 9; // 9 months of data
  const dailyAverage = monthlyAverage / 30; // Rough daily estimate

  // Get the last 6 months for chart (Apr-Sep)
  const allMonths = currentData.monthlyData || [];
  const recentMonths = allMonths.slice(-6); // Last 6 months for chart
  const olderMonths = allMonths.slice(0, -6); // Earlier months for table

  // Calculate max profit for chart scaling
  const maxProfit = Math.max(
    ...recentMonths.map((m: TradingDataPoint) => m.profit),
    0
  );

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cache Status Indicator */}
        {cacheInfo && (
          <div className="mb-6 text-center">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                cacheInfo.isFresh
                  ? "bg-green-900/50 text-green-300 border border-green-500/30"
                  : "bg-yellow-900/50 text-yellow-300 border border-yellow-500/30"
              }`}
            >
              {cacheInfo.isFresh ? "🟢 Live Data" : "🟡 Cached Data"}
            </span>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Trading Results
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Real performance data from my autonomous crypto trading system
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">
              {formatCurrency(totalProfit)}
            </div>
            <div className="text-blue-200 font-medium">Total Profits</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">
              {totalTrades}
            </div>
            <div className="text-blue-200 font-medium">Total Trades</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">
              {formatCurrency(monthlyAverage)}
            </div>
            <div className="text-blue-200 font-medium">Monthly Average</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">
              {formatCurrency(dailyAverage)}
            </div>
            <div className="text-blue-200 font-medium">Daily Average</div>
          </div>
        </div>

        {/* Monthly Performance Chart - Last 6 Months */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">
            Recent Performance (Last 6 Months)
          </h3>

          <div className="space-y-4">
            <div className="flex justify-between items-end h-64 px-4">
              {recentMonths.length > 0 ? (
                recentMonths.map((month: TradingDataPoint) => {
                  const heightPercentage =
                    maxProfit > 0 ? (month.profit / maxProfit) * 100 : 0;
                  const isPositive = month.profit >= 0;

                  return (
                    <div
                      key={month.month}
                      className="flex flex-col items-center flex-1 mx-1"
                    >
                      <div className="flex flex-col justify-end h-48 w-full">
                        <div
                          className={`w-full rounded-t-lg transition-all duration-700 hover:brightness-110 ${
                            isPositive
                              ? "bg-gradient-to-t from-green-600 to-green-400"
                              : "bg-gradient-to-t from-red-600 to-red-400"
                          }`}
                          style={{
                            height: `${Math.max(heightPercentage, 5)}%`,
                            minHeight: "8px",
                          }}
                        />
                      </div>
                      <div className="mt-3 text-center">
                        <div className="text-white font-semibold text-sm">
                          {formatCurrency(month.profit)}
                        </div>
                        <div className="text-blue-200 text-xs mt-1">
                          {month.month}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center text-blue-200 w-full py-8">
                  Loading chart data...
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Previous Months Table */}
        {olderMonths.length > 0 && (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              Previous Months
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 text-blue-200 font-semibold">
                      Month
                    </th>
                    <th className="text-right py-3 px-4 text-blue-200 font-semibold">
                      Profit
                    </th>
                    <th className="text-right py-3 px-4 text-blue-200 font-semibold">
                      Trades
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {olderMonths.map((month: TradingDataPoint) => (
                    <tr
                      key={month.month}
                      className="border-b border-white/5 bg-white/5"
                    >
                      <td className="py-3 px-4 text-white font-medium">
                        {month.month}
                      </td>
                      <td
                        className={`py-3 px-4 text-right font-semibold ${
                          month.profit >= 0 ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {formatCurrency(month.profit)}
                      </td>
                      <td className="py-3 px-4 text-right text-blue-200">
                        {month.trades}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
