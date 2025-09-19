import React, { useMemo } from "react";
import {
  DollarSign,
  TrendingUp,
  Calendar,
  Zap,
  Target,
  BarChart3,
  Clock,
  Wifi,
} from "lucide-react";
import { useGoogleSheetsData } from "../hooks/useGoogleSheetsData";
import { BitcoinCorrelation } from "./BitcoinCorrelation";
import { LiveTransactionLog } from "./LiveTransactionLog";
import { trackOutboundLink } from "../utils/analytics";

interface TradingStats {
  totalProfit: number;
  totalTrades: number;
  avgProfitPerTrade: number;
  monthlyAverage: number;
  bestMonthProfit: number;
  monthlyData: Array<{
    month: string;
    profit: number;
  }>;
}

interface TradingResultsProps {
  tradingStats?: TradingStats | null;
}

interface TradingDataPoint {
  month: string;
  profit: number;
}

export const TradingResults: React.FC<TradingResultsProps> = ({
  tradingStats: propTradingStats,
}) => {
  const {
    tradingStats: apiTradingStats,
    isLoading,
    error,
    refreshStats,
    cacheInfo,
    cacheStats,
  } = useGoogleSheetsData();

  // Use API data if available, otherwise fall back to props
  const currentData = apiTradingStats ||
    propTradingStats || {
      totalProfit: 0,
      totalTrades: 0,
      avgProfitPerTrade: 0,
      monthlyAverage: 0,
      bestMonthProfit: 0,
      monthlyData: [],
    };

  const formatCurrency = (amount: number | undefined): string => {
    if (amount === undefined || amount === null) return "0";
    return amount.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const formatTimeUntilRefresh = (seconds: number): string => {
    if (seconds <= 0) return "Ready to refresh";
    if (seconds < 60) return `${Math.round(seconds)}s`;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds % 60);
    return `${minutes}m ${remainingSeconds}s`;
  };

  // Calculate monthly performance for bar chart
  const { recentMonths, olderMonths, bestMonthData } = useMemo(() => {
    const monthlyData = currentData.monthlyData || [];
    const recent = monthlyData.slice(-6); // Last 6 months
    const older = monthlyData.slice(0, -6); // Previous months
    const best = monthlyData.reduce(
      (prev, current) => (prev.profit > current.profit ? prev : current),
      { month: "", profit: 0 }
    );

    return {
      recentMonths: recent,
      olderMonths: older,
      bestMonthData: best.profit > 0 ? best : null,
    };
  }, [currentData.monthlyData]);

  const dailyAvg = useMemo(() => {
    const avg = currentData.monthlyAverage / 30;
    return formatCurrency(avg);
  }, [currentData.monthlyAverage]);

  const getFullMonthName = (shortMonth: string): string => {
    const monthMap: { [key: string]: string } = {
      Jan: "January",
      Feb: "February",
      Mar: "March",
      Apr: "April",
      May: "May",
      Jun: "June",
      Jul: "July",
      Aug: "August",
      Sep: "September",
      Oct: "October",
      Nov: "November",
      Dec: "December",
    };
    return monthMap[shortMonth] || shortMonth;
  };

  const getShortMonthName = (shortMonth: string): string => {
    return shortMonth.substring(0, 3);
  };

  return (
    <section className="py-10 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/30 to-emerald-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-green-400/40 mb-6 mt-4 shadow-lg shadow-green-500/20">
            <BarChart3 className="w-4 h-4 text-green-300" />
            <span className="text-green-200 font-medium">Live Results</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trading Performance
            <span className="block text-transparent bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text">
              Real Results
            </span>
          </h2>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Live data updated automatically every 4 hours from actual trading
            results. These are real profits from my autonomous trading system.
          </p>

          {/* Cache Status */}
          {cacheInfo && (
            <div className="max-w-md mx-auto mb-8">
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-lg border border-gray-600/30 p-3">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        cacheInfo.isFresh ? "bg-green-400" : "bg-yellow-400"
                      }`}
                    ></div>
                    <span>{cacheInfo.isFresh ? "Fresh" : "Stale"}</span>
                  </div>
                  {cacheInfo.isRateLimited && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>
                        Next update:{" "}
                        {formatTimeUntilRefresh(cacheInfo.timeUntilNextRefresh)}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Wifi className="w-3 h-3" />
                    <span>Auto-updating</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* First row - Main Stats Cards with bright Features styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Profit */}
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-green-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/40">
              <DollarSign className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-3xl font-bold text-green-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                ${formatCurrency(currentData.totalProfit)}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Total Profit
              </div>
              <div className="text-green-300 text-sm mt-1">
                Autonomous Trading
              </div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>

          {/* Total Trades */}
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-blue-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/40">
              <Target className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                {currentData.totalTrades?.toLocaleString() || "0"}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Total Trades
              </div>
              <div className="text-blue-300 text-sm mt-1">100% Profitable</div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>

          {/* Avg Per Trade */}
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/40">
              <Zap className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                ${currentData.avgProfitPerTrade?.toFixed(2) || "0.00"}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Avg Per Trade
              </div>
              <div className="text-purple-300 text-sm mt-1">Steady Gains</div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>
        </div>

        {/* Live Transaction Log */}
        <LiveTransactionLog />

        {/* Bitcoin Correlation Analysis */}
        <BitcoinCorrelation
          monthlyTradingData={currentData.monthlyData || []}
        />

        {/* Second row - Monthly Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Monthly Average */}
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-emerald-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/40">
              <Calendar className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-2xl font-bold text-emerald-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-teal-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                ${currentData.monthlyAverage?.toFixed(2) || "0.00"}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Monthly Average
              </div>
              <div className="text-emerald-300 text-sm mt-1">
                Consistent Performance
              </div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>

          {/* Daily Average */}
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-indigo-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/40">
              <TrendingUp className="w-full h-full text-white" />
            </div>
            <div className="relative text-center">
              <div className="text-2xl font-bold text-indigo-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                ${dailyAvg}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Daily Average
              </div>
              <div className="text-indigo-300 text-sm mt-1">Steady Growth</div>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>

          {/* Best Month */}
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-amber-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/40">
              <Zap className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-2xl font-bold text-amber-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-300 group-hover:to-orange-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                ${currentData.bestMonthProfit?.toFixed(2) || "0.00"}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Best Month
              </div>
              <div className="text-amber-300 text-sm mt-1">
                {bestMonthData ? getFullMonthName(bestMonthData.month) : "N/A"}
              </div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>
        </div>

        {/* Beautiful Bar Chart - Recent Performance (Last 6 Months) */}
        {recentMonths.length > 0 && (
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-8 mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">
              Recent Performance (Last 6 Months)
            </h3>

            <div className="flex justify-center items-end space-x-3 md:space-x-8 h-40 md:h-64 mb-6">
              <div className="flex items-end space-x-2 md:space-x-4 h-full">
                {recentMonths.map((month: TradingDataPoint, index: number) => {
                  const maxProfit = Math.max(
                    ...recentMonths.map((m) => m.profit)
                  );
                  const height = Math.max((month.profit / maxProfit) * 120, 12); // Minimum height of 12px
                  const isHighest = month.profit === maxProfit;

                  return (
                    <div
                      key={month.month}
                      className="flex flex-col items-center"
                    >
                      <div
                        className={`text-xs md:text-sm font-bold mb-1 md:mb-2 transition-all duration-1000 ease-out ${
                          isHighest ? "text-yellow-300" : "text-gray-200"
                        }`}
                      >
                        ${Math.round(month.profit)}
                      </div>

                      <div
                        className={`w-8 md:w-16 rounded-t-lg transition-all duration-1000 ease-out ${
                          isHighest
                            ? "bg-gradient-to-t from-yellow-500 to-yellow-300 shadow-lg shadow-yellow-400/40"
                            : "bg-gradient-to-t from-emerald-500 to-green-400 shadow-lg shadow-emerald-400/30"
                        }`}
                        style={{
                          height: `${height}px`,
                          minHeight: "12px",
                        }}
                      ></div>

                      <div className="text-xs md:text-sm text-gray-200 mt-2 md:mt-3 font-medium text-center">
                        <span className="md:hidden">
                          {getShortMonthName(month.month)}
                        </span>
                        <span className="hidden md:inline">
                          {getFullMonthName(month.month)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-center">
              <p className="text-emerald-300 font-semibold text-sm md:text-lg">
                📈 {currentData.totalTrades || 0} trades • $
                {currentData.avgProfitPerTrade?.toFixed(2) || "0.00"} avg
                profit/trade • Best month:{" "}
                {bestMonthData ? getFullMonthName(bestMonthData.month) : "N/A"}{" "}
                with ${currentData.bestMonthProfit?.toFixed(2) || "0.00"}
              </p>
            </div>
          </div>
        )}

        {/* Previous Months Table */}
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
                  {olderMonths.map((month: TradingDataPoint, index: number) => (
                    <tr
                      key={month.month}
                      className={`border-b border-white/5 ${
                        index % 2 === 0 ? "bg-white/5" : "bg-white/2"
                      }`}
                    >
                      <td className="py-3 px-4 text-white font-medium">
                        {getFullMonthName(month.month)} 2025
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span className="text-emerald-400 font-semibold">
                          ${month.profit.toFixed(2)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mt-4 pt-4 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Showing {olderMonths.length} previous months • Total: $
                {olderMonths
                  .reduce((sum, month) => sum + month.profit, 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Experience Autonomous Trading?
          </h3>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Join successful traders using set-it-and-forget-it cryptocurrency
            trading.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                trackOutboundLink(
                  "https://dailyprofits.link/class",
                  "Join Free Masterclass - TradingResults"
                )
              }
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join Free Masterclass
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>

            <button
              onClick={() =>
                trackOutboundLink(
                  "https://dailyprofits.link/gbt",
                  "Start Trading Platform - TradingResults"
                )
              }
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Trading Platform
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
