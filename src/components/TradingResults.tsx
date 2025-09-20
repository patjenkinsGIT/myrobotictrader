// At the top of TradingResults component, add:
<div style={{ border: "3px solid red", margin: "10px" }}>
  // ... rest of your TradingResults content
</div>;
import React from "react";
import {
  TrendingUp,
  DollarSign,
  Calendar,
  BarChart3,
  Zap,
  Target,
  AlertCircle,
  RefreshCw,
  Clock,
} from "lucide-react";
import { trackCTAClick, trackOutboundLink } from "../utils/analytics";
import { LiveTransactionLog } from "./LiveTransactionLog";
import { TradingDataPoint } from "../hooks/useGoogleSheetsData";

// Define the props interface for TradingResults
interface TradingResultsProps {
  tradingStats?: any;
  isLoading?: boolean;
  error?: string | null;
  refreshStats?: () => void;
  cacheInfo?: {
    isFresh: boolean;
    isRateLimited: boolean;
    timeUntilNextRefresh: number;
  };
}

export const TradingResults: React.FC<TradingResultsProps> = ({
  tradingStats,
  isLoading = false,
  error = null,
  refreshStats = () => console.log("Refresh not implemented"),
  cacheInfo = { isFresh: false, isRateLimited: false, timeUntilNextRefresh: 0 },
}) => {
  // Format time until next refresh (removed unused function)
  // const formatTimeUntilRefresh = (ms: number) => {
  //   if (ms <= 0) return "Available now";
  //   const hours = Math.floor(ms / (1000 * 60 * 60));
  //   const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  //   if (hours > 0) return `${hours}h ${minutes}m`;
  //   return `${minutes}m`;
  // };

  if (isLoading) {
    return (
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-400 mr-3"></div>
            <span className="text-gray-300 text-lg">
              Loading live trading data...
            </span>
          </div>
        </div>
      </section>
    );
  }

  // Error checking
  const hasError = error && error.trim() !== "";
  const hasValidData =
    tradingStats &&
    typeof tradingStats === "object" &&
    tradingStats.totalProfit !== undefined;

  if (hasError || !hasValidData) {
    return (
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 mb-8">
            <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">
              Unable to Load Live Trading Data
            </h3>
            <p className="text-red-300 mb-6">
              {hasError
                ? error
                : "Trading data is not available. This could be due to API configuration issues or data loading problems."}
            </p>
            <button
              onClick={refreshStats}
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
            >
              <RefreshCw className="w-4 h-4" />
              Retry Connection
            </button>
          </div>
        </div>
      </section>
    );
  }

  // We have valid data - proceed with rendering
  const currentData = tradingStats;
  const dailyAvg = currentData.dailyAvg?.toFixed(2) || "0.00";

  // Handle monthly data
  const allMonthlyData = currentData.monthlyData || [];
  const recentMonths = allMonthlyData.slice(-6); // Last 6 months for chart
  const olderMonths =
    allMonthlyData.length > 6 ? allMonthlyData.slice(0, -6).reverse() : []; // Previous months

  // Find best month
  const bestMonthData =
    allMonthlyData.find(
      (month: TradingDataPoint) => month.profit === currentData.bestMonthProfit
    ) || allMonthlyData[0];

  // Helper functions
  const getFullMonthName = (shortMonth: string) => {
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

  const getShortMonthName = (shortMonth: string) => {
    return shortMonth.substring(0, 3);
  };

  const formatCurrency = (
    value: number | string | null | undefined
  ): string => {
    const numValue = Number(value);
    if (isNaN(numValue)) return "0.00";
    return numValue.toFixed(2);
  };

  // CTA tracking handler
  const handleJoinMasterclass = () => {
    trackCTAClick("join_free_masterclass", "trading_results_section");
    trackOutboundLink(
      "https://dailyprofits.link/class",
      "Join Free Masterclass Trading Results"
    );
  };

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          {/* Mobile Responsive Header */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6 mx-auto max-w-fit">
            <BarChart3 className="w-4 h-4 text-green-400" />
            <span className="text-green-300 font-medium text-sm sm:text-base">
              {currentData.isLiveData ? "LIVE DATA" : "REAL RESULTS"}
            </span>
            {currentData.isLiveData && (
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            )}
            {/* Desktop Cache Info */}
            <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400">
              <Clock className="w-3 h-3" />
              <span>Last updated: {new Date().toLocaleTimeString()}</span>
              {cacheInfo.isFresh && (
                <>
                  <span>•</span>
                  <span className="text-green-400">Fresh Data Cached</span>
                </>
              )}
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My Trading Results
          </h2>

          <div className="mb-6">
            <p className="text-xl text-purple-200 font-medium mb-4">
              Don't just take my word for it - here are my actual trading
              results:
            </p>
            <div>
              <TrendingUp className="w-8 h-8 text-green-300 mx-auto animate-bounce" />
            </div>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-2">
            These are my actual profits from using my robotic trader.{" "}
            <span className="text-green-300 font-semibold">
              Started January 8, 2025 - Live Updates!
            </span>
          </p>

          {/* Mobile Cache Status */}
          <div className="sm:hidden text-xs text-gray-400 mt-4 p-2 bg-white/5 rounded-lg">
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-3 h-3" />
              <span>Last updated: {new Date().toLocaleTimeString()}</span>
              {cacheInfo.isFresh && (
                <>
                  <span>•</span>
                  <span className="text-green-400">Fresh Data</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* First row - Main Trading Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-green-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/40">
              <DollarSign className="w-full h-full text-white" />
            </div>
            <div className="relative text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                ${formatCurrency(currentData.totalProfit)}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Total Profits
              </div>
              <div className="text-green-300 text-sm mt-1">
                8 months, 14 days
              </div>
            </div>
          </div>

          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-blue-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/40">
              <Target className="w-full h-full text-white" />
            </div>
            <div className="relative text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                {currentData.totalTrades || 0}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Total Trades
              </div>
              <div className="text-blue-300 text-sm mt-1">
                Consistent & Automated
              </div>
            </div>
          </div>

          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/40">
              <Zap className="w-full h-full text-white" />
            </div>
            <div className="relative text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                ${formatCurrency(currentData.avgProfitPerTrade)}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Avg Per Trade
              </div>
              <div className="text-purple-300 text-sm mt-1">Steady Gains</div>
            </div>
          </div>
        </div>

        {/* Live Transaction Log */}
        <LiveTransactionLog />

        {/* Second row - Monthly Average, Daily Average, Best Month */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-emerald-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/40">
              <Calendar className="w-full h-full text-white" />
            </div>
            <div className="relative text-center">
              <div className="text-2xl md:text-3xl font-bold text-emerald-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-teal-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                ${formatCurrency(currentData.monthlyAverage)}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Monthly Average
              </div>
              <div className="text-emerald-300 text-sm mt-1">
                Consistent Performance
              </div>
            </div>
          </div>

          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-indigo-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/40">
              <TrendingUp className="w-full h-full text-white" />
            </div>
            <div className="relative text-center">
              <div className="text-2xl md:text-3xl font-bold text-indigo-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                ${dailyAvg}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Daily Average
              </div>
              <div className="text-indigo-300 text-sm mt-1">Steady Growth</div>
            </div>
          </div>

          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-amber-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/40">
              <Zap className="w-full h-full text-white" />
            </div>
            <div className="relative text-center">
              <div className="text-2xl md:text-3xl font-bold text-amber-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-300 group-hover:to-orange-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                ${formatCurrency(currentData.bestMonthProfit)}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Best Month
              </div>
              <div className="text-amber-300 text-sm mt-1">
                {bestMonthData ? getFullMonthName(bestMonthData.month) : "N/A"}{" "}
                2025
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-sm text-green-300 bg-green-900/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block border border-green-500/20">
            ✓ All profits shown are net amounts after trading fees and rebates
          </p>
        </div>

        {/* Recent Months Chart */}
        {recentMonths.length > 0 && (
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-8 mb-8 relative">
            <div className="absolute top-4 right-4 opacity-20 pointer-events-none hidden md:block">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 flex items-center justify-center animate-pulse shadow-lg shadow-purple-500/20">
                <img
                  src="/robot-trading.png"
                  alt="Robot Trading"
                  className="w-12 h-12 object-contain filter brightness-110"
                />
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">
              Recent Performance (Last 6 Months)
            </h3>

            <div className="w-full overflow-x-auto">
              <div
                className="flex items-end justify-center gap-2 md:gap-6 mb-4 md:mb-6 min-w-max mx-auto px-2"
                style={{ height: "200px" }}
              >
                {recentMonths.map((month: TradingDataPoint) => {
                  const maxBarHeight = 140;
                  const maxProfit = Math.max(
                    ...recentMonths.map((m: TradingDataPoint) => m.profit)
                  );
                  const height = Math.max(
                    (month.profit / maxProfit) * maxBarHeight,
                    12
                  );
                  const isHighest = month.profit === maxProfit;

                  return (
                    <div
                      key={month.month}
                      className="flex flex-col items-center min-w-0"
                    >
                      <div
                        className={`text-xs md:text-sm mb-1 md:mb-2 font-semibold ${
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
                        style={{ height: `${height}px`, minHeight: "12px" }}
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
                {formatCurrency(currentData.avgProfitPerTrade)} avg profit/trade
                • Best month:{" "}
                {bestMonthData ? getFullMonthName(bestMonthData.month) : "N/A"}{" "}
                with ${formatCurrency(currentData.bestMonthProfit)}
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
                    <th className="text-gray-300 font-semibold py-3 px-4 text-sm md:text-base">
                      Month
                    </th>
                    <th className="text-gray-300 font-semibold py-3 px-4 text-right text-sm md:text-base">
                      Profit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {olderMonths.map((month: TradingDataPoint, index: number) => (
                    <tr
                      key={month.month}
                      className={`border-b border-white/5 ${
                        index % 2 === 0 ? "bg-white/5" : ""
                      } hover:bg-white/10 transition-colors duration-200`}
                    >
                      <td className="py-3 px-4 text-white font-medium text-sm md:text-base">
                        {getFullMonthName(month.month)} 2025
                      </td>
                      <td className="py-3 px-4 text-right text-green-400 font-semibold text-sm md:text-base">
                        ${formatCurrency(month.profit)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mt-4">
              <p className="text-emerald-300 text-sm">
                Showing {olderMonths.length} previous months • Total: $
                {olderMonths
                  .reduce(
                    (sum: number, month: TradingDataPoint) =>
                      sum + month.profit,
                    0
                  )
                  .toFixed(2)}
              </p>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-6 md:p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Experience Autonomous Trading?
          </h3>
          <p className="text-purple-200 mb-6 text-lg">
            Join successful traders using set-it-and-forget-it cryptocurrency
            trading.
          </p>
          <button
            onClick={handleJoinMasterclass}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
          >
            Join Free Masterclass
            <TrendingUp className="w-5 h-5" />
          </button>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-400">
            * These are my actual trading results from my personal robotic
            trader account. Started January 8, 2025.
            <br />
            Live data from Google Sheets. Past performance does not guarantee
            future results.
          </p>
        </div>
      </div>
    </section>
  );
};
