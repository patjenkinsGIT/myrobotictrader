import React, { useState } from "react";
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
  Database,
  Wifi,
} from "lucide-react";
import { trackCTAClick, trackOutboundLink } from "../utils/analytics";
import { calculateTimeSinceStart } from "../utils/tradingTime";
import { LiveTransactionLog } from "./LiveTransactionLog";
import { TradingDataPoint } from "../hooks/useGoogleSheetsData";

// Define the props interface for TradingResults - make all props optional to handle undefined cases
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
  cacheStats?: {
    totalEntries: number;
  };
}

export const TradingResults: React.FC<TradingResultsProps> = ({
  tradingStats,
  isLoading = false,
  error = null,
  refreshStats = () => console.log("Refresh not implemented"),
  cacheInfo = { isFresh: false, isRateLimited: false, timeUntilNextRefresh: 0 },
  cacheStats = { totalEntries: 0 },
}) => {
  // Manual refresh state management
  const [lastManualRefresh, setLastManualRefresh] = useState<number>(0);
  const [isManualRefreshing, setIsManualRefreshing] = useState<boolean>(false);
  const MANUAL_REFRESH_COOLDOWN = 2 * 60 * 1000; // 2 minutes cooldown

  const timeSinceStart = calculateTimeSinceStart();

  // Format time until next refresh
  const formatTimeUntilRefresh = (ms: number) => {
    if (ms <= 0) return "Available now";

    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  // Enhanced manual refresh handler with cooldown protection
  const handleManualRefresh = async () => {
    const now = Date.now();
    const timeSinceLastRefresh = now - lastManualRefresh;

    // Check cooldown
    if (timeSinceLastRefresh < MANUAL_REFRESH_COOLDOWN) {
      const remainingTime = Math.ceil(
        (MANUAL_REFRESH_COOLDOWN - timeSinceLastRefresh) / 1000
      );
      alert(`Please wait ${remainingTime} seconds before refreshing again`);
      return;
    }

    setIsManualRefreshing(true);

    try {
      // Call the existing refresh function
      await refreshStats();

      setLastManualRefresh(now);
      console.log("Manual refresh completed successfully");
    } catch (error) {
      console.error("Manual refresh failed:", error);
      alert("Refresh failed. Please try again.");
    } finally {
      setIsManualRefreshing(false);
    }
  };

  if (isLoading || isManualRefreshing) {
    return (
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-400 mr-3"></div>
            <span className="text-gray-300 text-lg">
              {isManualRefreshing
                ? "Refreshing trading data..."
                : "Loading live trading data..."}
            </span>
          </div>
        </div>
      </section>
    );
  }

  // More specific error checking - handle undefined tradingStats
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
              onClick={handleManualRefresh}
              disabled={isManualRefreshing}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                isManualRefreshing
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600 text-white"
              }`}
            >
              <RefreshCw
                className={`w-4 h-4 ${
                  isManualRefreshing ? "animate-spin" : ""
                }`}
              />
              {isManualRefreshing ? "Retrying..." : "Retry Connection"}
            </button>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-4 text-left max-w-2xl mx-auto">
            <h4 className="text-white font-semibold mb-2">
              Debug Information:
            </h4>
            <div className="text-gray-300 text-sm space-y-1">
              <p>
                • Sheet ID:{" "}
                {import.meta.env.VITE_GOOGLE_SHEET_ID
                  ? "✅ Configured"
                  : "❌ Missing"}
              </p>
              <p>
                • API Key:{" "}
                {import.meta.env.VITE_GOOGLE_API_KEY
                  ? "✅ Configured"
                  : "❌ Missing"}
              </p>
              <p>• Expected Tab: "Calculations"</p>
              <p>• Expected Range: A:G</p>
              <p>• Error: {error || "No specific error message"}</p>
              <p>• Cache Status: {cacheInfo?.isFresh ? "Fresh" : "Stale"}</p>
              <p>• Rate Limited: {cacheInfo?.isRateLimited ? "Yes" : "No"}</p>
              <p>• Has Trading Stats: {hasValidData ? "Yes" : "No"}</p>
              <p>• Trading Stats Type: {typeof tradingStats}</p>
              <p>
                • Trading Stats Value:{" "}
                {tradingStats === undefined
                  ? "undefined"
                  : tradingStats === null
                  ? "null"
                  : "has value"}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // We have valid data - proceed with rendering
  const currentData = tradingStats;

  // Use the dailyAvg from the data structure
  const dailyAvg = currentData.dailyAvg?.toFixed(2) || "0.00";

  // CRITICAL FIX: Properly handle monthly data
  const allMonthlyData = currentData.monthlyData || [];

  // Get last 6 months for chart (most recent months)
  const recentMonths = allMonthlyData.slice(-6);

  // Get older months for table (everything before the last 6 months)
  const olderMonths =
    allMonthlyData.length > 6 ? allMonthlyData.slice(0, -6).reverse() : [];

  // Find best month using the bestMonthProfit value
  const bestMonthData =
    allMonthlyData.find(
      (month: TradingDataPoint) => month.profit === currentData.bestMonthProfit
    ) || allMonthlyData[0];

  // Get full month name
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

  // Get short month name for mobile (3 letters)
  const getShortMonthName = (shortMonth: string) => {
    return shortMonth.substring(0, 3);
  };

  // CTA tracking handler
  const handleJoinMasterclass = () => {
    trackCTAClick("join_free_masterclass", "trading_results_section");
    trackOutboundLink(
      "https://dailyprofits.link/class",
      "Join Free Masterclass Trading Results"
    );
  };

  // Add this function in your component
  const formatCurrency = (
    value: number | string | null | undefined
  ): string => {
    const numValue = Number(value);
    if (isNaN(numValue)) {
      return "0.00";
    }
    return numValue.toFixed(2);
  };

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20"></div>

      <div className="relative max-w-6xl mx-auto">
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

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My Trading Results
          </h2>

          {/* Sub-headline with bouncing graph */}
          <div className="mb-6">
            <p className="text-xl text-purple-200 font-medium mb-4">
              Don't just take my word for it - here are my actual trading
              results:
            </p>
            <div>
              <TrendingUp className="w-8 h-8 text-green-300 mx-auto animate-bounce" />
            </div>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            These are my actual profits from using my robotic trader.
            <span className="text-green-400 font-semibold">
              {" "}
              Started January 8, 2025
            </span>{" "}
            -{" "}
            {currentData.isLiveData
              ? "Live Updates!"
              : "Stats Updated Monthly!"}
          </p>

          {/* Enhanced Live Data Indicator with Cache Status and Manual Refresh */}
          {currentData.isLiveData && (
            <div className="mt-6 flex justify-center">
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-lg p-4 border border-green-400/30 shadow-lg shadow-green-500/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="text-center">
                    <p className="text-green-300 font-semibold text-sm">
                      Live Data Connected
                    </p>
                    <p className="text-gray-300 text-xs">
                      Last updated:{" "}
                      {new Date(currentData.lastUpdated).toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Enhanced Cache Status with Manual Refresh Button */}
                <div className="flex items-center justify-center gap-4 text-xs text-gray-400 border-t border-green-400/20 pt-2">
                  <div className="flex items-center gap-1">
                    <Database className="w-3 h-3" />
                    <span>Cache: {cacheInfo.isFresh ? "Fresh" : "Stale"}</span>
                  </div>
                  {cacheInfo.isRateLimited && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>
                        Next refresh:{" "}
                        {formatTimeUntilRefresh(cacheInfo.timeUntilNextRefresh)}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Wifi className="w-3 h-3" />
                    <span>Cached entries: {cacheStats.totalEntries}</span>
                  </div>

                  {/* Manual Refresh Button */}
                  <button
                    onClick={handleManualRefresh}
                    disabled={isManualRefreshing}
                    className={`
                      flex items-center gap-1 px-3 py-1 text-xs rounded-md transition-all duration-200
                      ${
                        isManualRefreshing
                          ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                          : "bg-blue-500 hover:bg-blue-600 text-white hover:scale-105 active:scale-95"
                      }
                    `}
                    title={
                      isManualRefreshing
                        ? "Refreshing..."
                        : "Force refresh data (bypasses cache)"
                    }
                  >
                    <RefreshCw
                      className={`w-3 h-3 ${
                        isManualRefreshing ? "animate-spin" : ""
                      }`}
                    />
                    <span>
                      {isManualRefreshing ? "Refreshing..." : "Refresh Now"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* First row - BRIGHTENED CARDS like Hero style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>

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

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>

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

        {/* Second row - Monthly Average, Daily Average, Best Month */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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

          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-indigo-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/40">
              <TrendingUp className="w-full h-full text-white" />
            </div>
            <div className="relative text-center">
              <div className="text-2xl font-bold text-indigo-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                ${formatCurrency(dailyAvg)}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Daily Average
              </div>
              <div className="text-indigo-300 text-sm mt-1">Steady Growth</div>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>

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
                {bestMonthData ? getFullMonthName(bestMonthData.month) : "N/A"}{" "}
                2025
              </div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
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
            {/* Robot Trading Image from public folder - NO IMPORT NEEDED */}
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
                        index % 2 === 0 ? "bg-white/5" : ""
                      }`}
                    >
                      <td className="text-gray-200 py-3 px-4 font-medium">
                        {getFullMonthName(month.month)} 2025
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
                  .reduce(
                    (sum: number, month: TradingDataPoint) =>
                      sum + month.profit,
                    0
                  )
                  .toFixed(2)}
              </p>
            </div>

            {/* CTA BUTTON */}
            <div className="text-center mt-8">
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30 shadow-lg shadow-purple-500/20">
                <h4 className="text-xl font-bold text-white mb-3">
                  Ready to Experience Autonomous Trading?
                </h4>
                <p className="text-gray-200 mb-4 max-w-xl mx-auto">
                  Join successful traders using set-it-and-forget-it
                  cryptocurrency trading.
                </p>
                <a
                  href="https://dailyprofits.link/class"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleJoinMasterclass}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30"
                >
                  Join Free Masterclass
                  <TrendingUp className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-8">
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            * These are my actual trading results from my personal robotic
            trader account. Started January 8, 2025.
            {currentData.isLiveData
              ? " Live data from Google Sheets."
              : " Results updated regularly."}
            Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </section>
  );
};
