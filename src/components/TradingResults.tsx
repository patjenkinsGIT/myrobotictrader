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
  Database,
  Wifi,
} from "lucide-react";
import { trackCTAClick, trackOutboundLink } from "../utils/analytics";
import { calculateTimeSinceStart } from "../utils/tradingTime";
import { LiveTransactionLog } from "./LiveTransactionLog";
import { BitcoinCorrelation } from "./BitcoinCorrelation";

interface MonthlyTradingData {
  month: string;
  profit: number;
  trades?: number;
}

interface TradingStats {
  totalProfit: number;
  totalTrades: number;
  avgProfitPerTrade: number;
  monthlyAverage: number;
  dailyAvg: number;
  bestMonthProfit: number;
  monthlyData: MonthlyTradingData[];
  lastUpdated: string;
  isLiveData: boolean;
}

interface TradingResultsProps {
  tradingStats?: TradingStats;
  isLoading?: boolean;
  error?: string | null;
  refreshStats?: () => void;
  cacheInfo?: {
    isFresh: boolean;
    isRateLimited: boolean;
    timeUntilNextRefresh: number;
  };
}

const TradingResults: React.FC<TradingResultsProps> = ({
  tradingStats,
  isLoading = false,
  error = null,
  refreshStats = () => console.log("Refresh not implemented"),
  cacheInfo = { isFresh: false, isRateLimited: false, timeUntilNextRefresh: 0 },
}) => {
  const timeSinceStart = calculateTimeSinceStart();

  // Acknowledge cacheInfo parameter (even though we don't use it)
  void cacheInfo;

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

  const currentData = tradingStats;
  const dailyAvg = currentData.dailyAvg?.toFixed(2) || "0.00";
  const allMonthlyData = currentData.monthlyData || [];
  const recentMonths = allMonthlyData.slice(-6);

  // Handle empty array case properly - explicit callback with both parameters
  const maxProfit =
    allMonthlyData.length > 0
      ? Math.max(...allMonthlyData.map((m, _) => m.profit))
      : 0;

  return (
    <section id="results" className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_70%)]"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-500/20">
            <Wifi className="w-4 h-4" />
            <span>LIVE DATA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Trading Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Don't just take my word for it - here are my actual trading results:
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>
              These are my actual profits from using my robotic trader.{" "}
              <span className="text-green-400 font-medium">
                Started January 8, 2025
              </span>{" "}
              - Live Updates!
            </span>
          </div>

          <div className="inline-flex items-center gap-4 bg-gray-900/50 text-gray-300 px-4 py-2 rounded-full text-sm border border-white/10">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-green-400" />
              <span>Live Data Connected</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Clock className="w-3 h-3" />
              <span>
                Last updated:{" "}
                {new Date(currentData.lastUpdated).toLocaleString("en-US", {
                  month: "numeric",
                  day: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Main Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl border border-green-500/20 p-8 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/40">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              ${currentData.totalProfit?.toLocaleString() || "0"}
            </div>
            <div className="text-lg text-green-300 font-medium mb-1">
              Total Profits
            </div>
            <div className="text-sm text-green-200">
              {timeSinceStart} ({currentData.monthlyData?.length || 0} months)
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8 text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/40">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              {currentData.totalTrades?.toLocaleString() || "0"}
            </div>
            <div className="text-lg text-blue-300 font-medium mb-1">
              Total Trades
            </div>
            <div className="text-sm text-blue-200">Consistent & Automated</div>
          </div>

          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8 text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/40">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              ${currentData.avgProfitPerTrade?.toFixed(2) || "0.00"}
            </div>
            <div className="text-lg text-purple-300 font-medium mb-1">
              Avg Per Trade
            </div>
            <div className="text-sm text-purple-200">Steady Gains</div>
          </div>
        </div>

        {/* NEW: Bitcoin Correlation Component */}
        <BitcoinCorrelation monthlyTradingData={allMonthlyData} />

        {/* Live Transaction Log */}
        <LiveTransactionLog />

        {/* Additional Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-r from-gray-500/20 to-slate-500/20 backdrop-blur-sm rounded-2xl border border-gray-500/20 p-8 text-center">
            <div className="w-16 h-16 bg-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-gray-600/40">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              ${currentData.monthlyAverage?.toFixed(0) || "0"}
            </div>
            <div className="text-lg text-gray-300 font-medium mb-1">
              Monthly Average
            </div>
            <div className="text-sm text-gray-400">Consistent Performance</div>
          </div>

          <div className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl border border-indigo-500/20 p-8 text-center">
            <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/40">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              ${dailyAvg}
            </div>
            <div className="text-lg text-indigo-300 font-medium mb-1">
              Daily Average
            </div>
            <div className="text-sm text-indigo-200">Steady Growth</div>
          </div>

          <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-sm rounded-2xl border border-orange-500/20 p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/40">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              ${currentData.bestMonthProfit?.toFixed(0) || "0"}
            </div>
            <div className="text-lg text-orange-300 font-medium mb-1">
              Best Month
            </div>
            <div className="text-sm text-orange-200">
              {(() => {
                if (allMonthlyData.length === 0) return "July";
                const bestMonth = allMonthlyData.find(
                  (m, _) => m.profit === maxProfit
                );
                return bestMonth ? bestMonth.month : "July";
              })()}{" "}
              2025
            </div>
          </div>
        </div>

        {/* Monthly Performance Chart */}
        {recentMonths.length > 0 && (
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-12">
            <div className="flex items-center gap-3 mb-8">
              <BarChart3 className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">
                Monthly Performance Trend
              </h3>
            </div>

            <div className="space-y-6">
              {recentMonths.map((month, _) => {
                const percentage =
                  maxProfit > 0 ? (month.profit / maxProfit) * 100 : 0;
                return (
                  <div key={month.month} className="flex items-center gap-4">
                    <div className="w-12 text-sm font-medium text-gray-300">
                      {month.month}
                    </div>
                    <div className="flex-1 bg-gray-700 rounded-full h-6 relative">
                      <div
                        className="bg-gradient-to-r from-green-500 to-blue-500 h-6 rounded-full flex items-center justify-end pr-3 transition-all duration-1000"
                        style={{ width: `${Math.max(percentage, 10)}%` }}
                      >
                        <span className="text-white text-sm font-medium">
                          ${month.profit.toFixed(0)}
                        </span>
                      </div>
                    </div>
                    <div className="w-20 text-sm text-gray-400 text-right">
                      {percentage.toFixed(0)}% of best
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl border border-green-500/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Own Robotic Trading Journey?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              These results speak for themselves. Join thousands who have
              already discovered the power of automated cryptocurrency trading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  trackCTAClick("Get Started", "trading-results");
                  trackOutboundLink(
                    "https://dailyprofits.link/class",
                    "Get Started - Trading Results"
                  );
                  window.open("https://dailyprofits.link/class", "_blank");
                }}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg shadow-green-500/40 hover:shadow-xl hover:scale-105"
              >
                Start Your Journey
              </button>
              <button
                onClick={() => {
                  trackCTAClick("Learn More", "trading-results");
                  trackOutboundLink(
                    "https://dailyprofits.link/gbt",
                    "Learn More - Trading Results"
                  );
                  window.open("https://dailyprofits.link/gbt", "_blank");
                }}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                View Trading Platform
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export the component
export { TradingResults };
export default TradingResults;
