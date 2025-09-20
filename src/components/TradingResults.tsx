// TradingResults.tsx - Clean Structure Based on Your Specs
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
} from "lucide-react";
import { trackCTAClick } from "../utils/analytics";
import { calculateTimeSinceStart } from "../utils/tradingTime";
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
  const timeSinceStart = calculateTimeSinceStart();

  // Helper functions for month names
  const getFullMonthName = (month: string) => {
    const months: { [key: string]: string } = {
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
    return months[month] || month;
  };
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

  // Error handling
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
  const allMonthlyData = currentData.monthlyData || [];

  // Get last 6 months for chart (most recent months)
  const recentMonths = allMonthlyData.slice(-6);

  // Get older months for table (3 months in descending order)
  const olderMonths =
    allMonthlyData.length > 6
      ? allMonthlyData.slice(0, -6).slice(-3).reverse()
      : [];

  const bestMonthData = allMonthlyData.reduce(
    (prev: any, current: any) =>
      prev.profit > current.profit ? prev : current,
    allMonthlyData[0] || { month: "N/A", profit: 0 }
  );

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-emerald-900/20"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* MY TRADING RESULTS Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/30 to-emerald-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-green-400/40 mb-6 shadow-lg shadow-green-500/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-200 font-medium">LIVE DATA</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            My Trading Results
          </h2>

          <p className="text-xl text-gray-200 mb-2">
            Don't just take my word for it - here are my actual trading results:
          </p>

          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>

          <p className="text-gray-300 mb-6">
            These are my actual profits from using my robotic trader.{" "}
            <span className="text-green-300 font-semibold">
              Started January 8, 2025
            </span>{" "}
            - Live Updates!
          </p>

          {/* Live Data Status */}
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-xl border border-green-400/20 p-4 inline-block shadow-lg shadow-green-500/10">
            <div className="flex items-center justify-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-200 font-medium">
                Live Data Connected
              </span>
            </div>
            <div className="text-xs text-gray-300 mt-1">
              Last updated: {new Date().toLocaleString()}
            </div>
            <div className="flex items-center justify-center gap-4 text-xs text-gray-400 mt-2">
              <span>📊 Cache: {cacheInfo.isFresh ? "Fresh" : "Stale"}</span>
              <span>🔄 Auto-updating</span>
            </div>
          </div>
        </div>

        {/* FIRST 3 CALCULATION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Profits */}
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-green-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/40">
              <DollarSign className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-3xl font-bold text-green-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                ${currentData.totalProfit?.toLocaleString() || "0"}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Total Profits
              </div>
              <div className="text-green-300 text-sm mt-1">
                {timeSinceStart} • Steady Gains
              </div>
            </div>
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
              <div className="text-blue-300 text-sm mt-1">
                Consistent & Automated
              </div>
            </div>
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
          </div>
        </div>

        {/* TRADING SCOREBOARD (LiveTransactionLog) */}
        <LiveTransactionLog />

        {/* LAST 3 CALCULATION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Monthly Average */}
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-emerald-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/40">
              <Calendar className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-3xl font-bold text-emerald-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-teal-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                ${currentData.monthlyAverage?.toFixed(2) || "0.00"}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Monthly Average
              </div>
              <div className="text-emerald-300 text-sm mt-1">
                Consistent Performance
              </div>
            </div>
          </div>

          {/* Daily Average */}
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-indigo-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/40">
              <BarChart3 className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-3xl font-bold text-indigo-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                ${currentData.dailyAvg?.toFixed(2) || "0.00"}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Daily Average
              </div>
              <div className="text-indigo-300 text-sm mt-1">Steady Growth</div>
            </div>
          </div>

          {/* Best Month */}
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-amber-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/40">
              <TrendingUp className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-3xl font-bold text-amber-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-300 group-hover:to-orange-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                $
                {currentData.bestMonthProfit?.toFixed(2) ||
                  bestMonthData.profit?.toFixed(2) ||
                  "0.00"}
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

        {/* RECENT PERFORMANCE BAR CHARTS (6 Months) */}
        {recentMonths.length > 0 && (
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-8 mb-8 relative">
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
                        <span className="md:hidden">{month.month}</span>
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

        {/* PREVIOUS MONTHS PERFORMANCE (3 Months Desc Order) */}
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
                        index % 2 === 0 ? "bg-white/2" : "bg-transparent"
                      }`}
                    >
                      <td className="py-3 px-4 text-gray-200 font-medium">
                        {getFullMonthName(month.month)} 2025
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span className="text-green-300 font-semibold font-mono">
                          ${month.profit.toFixed(2)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CTA BUTTON */}
        <div className="text-center">
          <button
            onClick={() => trackCTAClick("trading_results_cta")}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-green-500/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
            <TrendingUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="relative">
              Start Your Automated Trading Journey
            </span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </button>

          <p className="text-gray-300 text-sm mt-4 max-w-md mx-auto">
            Join the platform that's generating these results automatically. No
            manual trading required.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-8">
          <p className="text-sm text-green-300 bg-green-900/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block border border-green-500/20">
            ✓ All profits shown are net amounts after trading fees and rebates
          </p>
        </div>
      </div>
    </section>
  );
};
