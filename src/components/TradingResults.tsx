import React from "react";
import {
  TrendingUp,
  DollarSign,
  BarChart3,
  Zap,
  Target,
  AlertCircle,
  RefreshCw,
  Database,
} from "lucide-react";
import { trackCTAClick, trackOutboundLink } from "../utils/analytics";
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
  // cacheInfo = { isFresh: false, isRateLimited: false, timeUntilNextRefresh: 0 },
}) => {
  const timeSinceStart = calculateTimeSinceStart();

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

  // More specific error checking
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
  //const dailyAvg = currentData.dailyAvg?.toFixed(2) || "0.00";
  const allMonthlyData = currentData.monthlyData || [];
  const recentMonths = allMonthlyData.slice(-6);
  //const olderMonths = allMonthlyData.length > 6 ? allMonthlyData.slice(0, -6).reverse() : [];

  // Find best month
  //const bestMonthData =
  //  allMonthlyData.find(
  //   (month: TradingDataPoint) => month.profit === currentData.bestMonthProfit
  //  ) || allMonthlyData[0];

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

  const handleJoinMasterclass = () => {
    trackCTAClick("join_free_masterclass", "trading_results_section");
    trackOutboundLink(
      "https://dailyprofits.link/class",
      "Join Free Masterclass Trading Results"
    );
  };

  // const formatCurrency = (
  //   value: number | string | null | undefined
  //  ): string => {
  //    const numValue = Number(value);
  //    if (isNaN(numValue)) return "0.00";
  //    return numValue.toFixed(2);
  //  };

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Clean Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6">
            <BarChart3 className="w-4 h-4 text-green-400" />
            <span className="text-green-300 font-medium">
              {currentData.isLiveData ? "LIVE DATA" : "REAL RESULTS"}
            </span>
            {currentData.isLiveData && (
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            )}
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            My Trading Results
          </h2>

          <p className="text-xl text-gray-300 mb-4">
            Don't just take my word for it - here are my actual trading results:
          </p>

          <div className="mb-8">
            <TrendingUp className="w-8 h-8 text-green-300 mx-auto animate-bounce" />
          </div>

          {/* Clean Live Data Status */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800/60 to-gray-700/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 font-medium text-sm">
                Live Data Connected
              </span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <span className="text-gray-300 text-sm">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "numeric",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              })}
            </span>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <Database className="w-3 h-3 text-blue-300" />
              <span className="text-blue-300 text-sm">Cache: Stale</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-3 h-3 text-purple-300" />
              <span className="text-purple-300 text-sm">Auto-updating</span>
            </div>
          </div>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            These are my actual profits from using my robotic trader.
            <span className="text-green-300 font-medium">
              Started January 8, 2025
            </span>{" "}
            - Live Updates!
          </p>
        </div>

        {/* Main Stats Row */}
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
                {timeSinceStart}
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

        {/* Live Transaction Log */}
        <LiveTransactionLog />

        {/* Monthly Chart and Stats */}
        {recentMonths.length > 0 && (
          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 backdrop-blur-sm rounded-2xl border border-emerald-500/20 p-6 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Monthly Performance Chart
            </h3>

            <div className="flex justify-center items-end gap-2 md:gap-4 h-64 mb-4">
              {recentMonths.map((month: TradingDataPoint) => {
                const maxProfit = Math.max(
                  ...recentMonths.map((m: TradingDataPoint) => m.profit)
                );
                const height = Math.max((month.profit / maxProfit) * 200, 12);
                const isHighest = month.profit === maxProfit;

                return (
                  <div key={month.month} className="flex flex-col items-center">
                    <div
                      className={`text-xs mb-2 font-semibold transition-colors duration-300 ${
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
        )}

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Own Success Story?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands who are already using AI-enhanced robotic trading
              to build consistent profits.
            </p>
            <button
              onClick={handleJoinMasterclass}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30"
            >
              <Target className="w-5 h-5" />
              Join Free Masterclass
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
