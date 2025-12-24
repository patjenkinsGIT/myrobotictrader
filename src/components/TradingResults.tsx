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
  Percent,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
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
}

export const TradingResults: React.FC<TradingResultsProps> = ({
  tradingStats,
  isLoading = false,
  error = null,
  refreshStats = () => console.log("Refresh not implemented"),
  cacheInfo = { isFresh: false, isRateLimited: false, timeUntilNextRefresh: 0 },
}) => {
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
              onClick={refreshStats}
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
            >
              <RefreshCw className="w-4 h-4" />
              Retry Connection
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

  // ============================================
  // LOCAL TESTING MODE - Set to true to test with mock 2026 data
  // ============================================
  const USE_MOCK_2026_DATA = false; // Mock data disabled for production

  const mock2026Months: TradingDataPoint[] = USE_MOCK_2026_DATA ? [
    { month: "Jan", year: 2026, profit: 312.45, trades: 48 },
    { month: "Feb", year: 2026, profit: 287.32, trades: 41 },
    { month: "Mar", year: 2026, profit: 198.76, trades: 29 },
  ] : [];

  // Combine real data with mock 2026 data (for testing)
  const realMonthlyData = currentData.monthlyData || [];
  const allMonthlyData = [...realMonthlyData, ...mock2026Months];

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

  // CTA tracking handler
  const handleStartTrading = () => {
    trackCTAClick("start_trading_save_1000", "trading_results_section");
    trackOutboundLink(
      "https://gobabytrade.com/432706BE",
      "Start Trading Save $1000 Trading Results"
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
    <section id="trading-results" className="py-16 px-4 relative overflow-hidden">
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

          {/* Clean Live Data Indicator with Professional Cache Status */}
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

                {/* Professional Cache Status Display */}
                <div className="flex items-center justify-center gap-4 text-xs text-gray-400 border-t border-green-400/20 pt-2">
                  <div className="flex items-center gap-1">
                    <Database className="w-3 h-3" />
                    <span>Cache: {cacheInfo.isFresh ? "Fresh" : "Stale"}</span>
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

        {/* First row - BRIGHTENED CARDS like Hero style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-green-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/40">
              <DollarSign className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-3xl font-bold text-green-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                ${currentData.totalProfit?.toFixed(2) || "0.00"}
              </div>{" "}
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Total Profits
              </div>
              <div className="text-green-300 text-sm mt-1">
                {timeSinceStart}
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>

          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-orange-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/40">
              <Target className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-3xl font-bold text-orange-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-amber-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                {currentData.totalTrades?.toLocaleString() || "0"}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Closed Trades
              </div>
              <div className="text-orange-300 text-sm mt-1">
                Consistent & Automated
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
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

        {/* Second row - Monthly Average, Daily Average, Best Month, Avg % Gain */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                {bestMonthData ? `${getFullMonthName(bestMonthData.month)} ${bestMonthData.year}` : "N/A"}
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>

          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-blue-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/40">
              <Percent className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-2xl font-bold text-cyan-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                {currentData.avgPercentGain?.toFixed(2) || "0.00"}%
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Avg % Gain
              </div>
              <div className="text-cyan-300 text-sm mt-1">Per Trade</div>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-sm text-green-300 bg-green-900/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block border border-green-500/20">
            ✓ All profits shown are net amounts after trading fees and rebates
          </p>
        </div>

        {/* Year-Based Performance Charts - All months grouped by year with vertical bars */}
        {allMonthlyData.length > 0 && (() => {
          // Group ALL months by year
          const monthsByYear = allMonthlyData.reduce((acc: Record<number, TradingDataPoint[]>, month: TradingDataPoint) => {
            const year = month.year;
            if (!acc[year]) acc[year] = [];
            acc[year].push(month);
            return acc;
          }, {} as Record<number, TradingDataPoint[]>);

          // Sort years descending (newest first - 2026 at top, 2025 below)
          const sortedYears = Object.keys(monthsByYear).map(Number).sort((a, b) => b - a);

          // Find the actual best month object (the one with highest profit)
          const bestMonth = allMonthlyData.reduce((best: TradingDataPoint, current: TradingDataPoint) =>
            current.profit > best.profit ? current : best
          , allMonthlyData[0]);

          // Compare by month name AND year - foolproof identification
          const isBestMonthEver = (month: TradingDataPoint) =>
            month.month === bestMonth.month && month.year === bestMonth.year;

          return (
            <>
              {sortedYears.map((year) => {
                const yearMonths = monthsByYear[year];
                const yearTotalProfit = yearMonths.reduce((sum: number, m: TradingDataPoint) => sum + m.profit, 0);
                const yearTotalTrades = yearMonths.reduce((sum: number, m: TradingDataPoint) => sum + m.trades, 0);
                const yearHasBestMonth = yearMonths.some(isBestMonthEver);

                return (
                  <div
                    key={year}
                    className={`bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border-2 p-4 md:p-8 mb-6 relative ${
                      yearHasBestMonth ? 'border-cyan-400/60' : 'border-white/10'
                    }`}
                  >
                    {/* Robot Trading Image - only on most recent year */}
                    {year === sortedYears[0] && (
                      <div className="absolute top-4 right-4 opacity-20 pointer-events-none hidden md:block">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 flex items-center justify-center animate-pulse shadow-lg shadow-purple-500/20">
                          <img
                            src="/robot-trading.png"
                            alt="Robot Trading"
                            className="w-12 h-12 object-contain filter brightness-110"
                          />
                        </div>
                      </div>
                    )}

                    {/* Year Header with totals */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-2">
                      <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                        <span>{year} Performance</span>
                        <span className="text-sm text-gray-400 font-normal">
                          ({yearMonths.length} {yearMonths.length === 1 ? 'month' : 'months'})
                        </span>
                      </h3>
                      <div className="text-sm font-semibold text-emerald-300">
                        ${yearTotalProfit.toFixed(2)} • {yearTotalTrades} trades
                      </div>
                    </div>

                    {/* Recharts Bar Chart - Responsive and Professional */}
                    {(() => {
                      const yearHighestProfit = Math.max(...yearMonths.map((m: TradingDataPoint) => m.profit));

                      // Prepare data for Recharts with color info
                      const chartData = yearMonths.map((month: TradingDataPoint) => {
                        const isBest = isBestMonthEver(month);
                        const isYearHighest = month.profit === yearHighestProfit;
                        return {
                          name: month.month,
                          profit: Math.round(month.profit),
                          trades: month.trades,
                          isBest,
                          isYearHighest,
                          fill: isBest
                            ? "#f43f5e" // rose-500
                            : isYearHighest
                              ? "#eab308" // yellow-500
                              : "#10b981", // emerald-500
                        };
                      });

                      // Custom tooltip
                      const CustomTooltip = ({ active, payload }: any) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div style={{ backgroundColor: '#1e1b4b' }} className="rounded-lg p-4 shadow-2xl">
                              <p className="text-white font-bold text-base">{getFullMonthName(data.name)}</p>
                              <p className="text-green-400 font-mono font-bold text-xl">${data.profit.toLocaleString()}</p>
                              <p className="text-white text-sm">{data.trades} trades</p>
                              {data.isBest && (
                                <p className="text-yellow-300 text-sm font-bold mt-1">🏆 Best Month Ever!</p>
                              )}
                            </div>
                          );
                        }
                        return null;
                      };

                      // Custom label for best month
                      const renderCustomLabel = (props: any) => {
                        const { x, y, width, index } = props;
                        const data = chartData[index];
                        if (data && data.isBest) {
                          return (
                            <text
                              x={x + width / 2}
                              y={y - 25}
                              fill="#22d3ee"
                              textAnchor="middle"
                              fontSize={12}
                              fontWeight="bold"
                            >
                              🏆 BEST
                            </text>
                          );
                        }
                        return null;
                      };

                      // Calculate responsive width - fewer months = narrower chart
                      const chartWidthPercent = yearMonths.length <= 3
                        ? "50%"
                        : yearMonths.length <= 6
                          ? "75%"
                          : "100%";

                      // Custom tick to show trades below month name
                      const CustomXAxisTick = (props: any) => {
                        const { x, y, payload } = props;
                        const monthData = chartData.find((d: { name: string; trades: number }) => d.name === payload.value);
                        return (
                          <g transform={`translate(${x},${y})`}>
                            <text
                              x={0}
                              y={0}
                              dy={16}
                              textAnchor="middle"
                              fill="#9ca3af"
                              fontSize={12}
                            >
                              {payload.value}
                            </text>
                            <text
                              x={0}
                              y={0}
                              dy={32}
                              textAnchor="middle"
                              fill="#6b7280"
                              fontSize={10}
                            >
                              {monthData?.trades || 0}
                            </text>
                          </g>
                        );
                      };

                      return (
                        <div className="w-full">
                          {/* Color Legend - Using inline styles for reliable rendering */}
                          <div className="flex justify-center gap-4 md:gap-6 mb-4 text-xs md:text-sm">
                            <div className="flex items-center gap-2">
                              <div
                                className="w-4 h-4 rounded"
                                style={{ background: "linear-gradient(to top, #059669, #34d399)" }}
                              ></div>
                              <span className="text-gray-300">Monthly</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div
                                className="w-4 h-4 rounded"
                                style={{ background: "linear-gradient(to top, #ea580c, #fb923c)" }}
                              ></div>
                              <span className="text-gray-300">Year's Best</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div
                                className="w-4 h-4 rounded"
                                style={{ background: "linear-gradient(to top, #0e7490, #06b6d4)" }}
                              ></div>
                              <span className="text-gray-300">All-Time Best</span>
                            </div>
                          </div>

                          <div className="flex justify-center" style={{ height: yearMonths.length > 6 ? 300 : 270 }}>
                            <div style={{ width: chartWidthPercent, height: "100%" }}>
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                  data={chartData}
                                  margin={{ top: 40, right: 20, left: 20, bottom: 25 }}
                                  barCategoryGap="20%"
                                >
                                  {/* Gradient Definitions */}
                                  <defs>
                                    <linearGradient id={`gradient-green-${year}`} x1="0" y1="1" x2="0" y2="0">
                                      <stop offset="0%" stopColor="#059669" />
                                      <stop offset="100%" stopColor="#34d399" />
                                    </linearGradient>
                                    <linearGradient id={`gradient-orange-${year}`} x1="0" y1="1" x2="0" y2="0">
                                      <stop offset="0%" stopColor="#ea580c" />
                                      <stop offset="100%" stopColor="#fb923c" />
                                    </linearGradient>
                                    <linearGradient id={`gradient-cyan-${year}`} x1="0" y1="1" x2="0" y2="0">
                                      <stop offset="0%" stopColor="#0e7490" />
                                      <stop offset="100%" stopColor="#06b6d4" />
                                    </linearGradient>
                                  </defs>
                                  <XAxis
                                    dataKey="name"
                                    tick={<CustomXAxisTick />}
                                    axisLine={{ stroke: "#374151" }}
                                    tickLine={false}
                                    interval={0}
                                  />
                                  <YAxis hide />
                                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.05)" }} />
                                  <Bar
                                    dataKey="profit"
                                    radius={[4, 4, 0, 0]}
                                    maxBarSize={45}
                                    minPointSize={3}
                                  >
                                    {chartData.map((entry: { fill: string; isBest: boolean; isYearHighest: boolean }, index: number) => (
                                      <Cell
                                        key={`cell-${index}`}
                                        fill={
                                          entry.isBest
                                            ? `url(#gradient-cyan-${year})`
                                            : entry.isYearHighest
                                              ? `url(#gradient-orange-${year})`
                                              : `url(#gradient-green-${year})`
                                        }
                                        style={{
                                          filter: entry.isBest
                                            ? "drop-shadow(0 0 12px rgba(34, 211, 238, 0.8))"
                                            : entry.isYearHighest
                                              ? "drop-shadow(0 0 8px rgba(251, 146, 60, 0.7))"
                                              : "none",
                                        }}
                                      />
                                    ))}
                                    <LabelList
                                      dataKey="profit"
                                      position="top"
                                      formatter={(value) => `$${value}`}
                                      style={{ fill: "#e5e7eb", fontSize: 11, fontWeight: 600 }}
                                    />
                                    <LabelList content={renderCustomLabel} />
                                  </Bar>
                                </BarChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                        </div>
                      );
                    })()}

                    {/* Year Summary */}
                    {yearHasBestMonth && (
                      <div className="text-center">
                        <p className="text-cyan-400 font-semibold text-sm md:text-base">
                          🏆 Best month ever: {bestMonth ? `${getFullMonthName(bestMonth.month)}` : "N/A"}{" "}
                          with ${bestMonth?.profit.toFixed(2) || "0.00"}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Overall Summary */}
              <div className="text-center mb-6">
                <p className="text-emerald-300 font-semibold text-sm md:text-lg">
                  📈 {currentData.totalTrades || 0} total trades • $
                  {currentData.avgProfitPerTrade?.toFixed(2) || "0.00"} avg profit/trade •
                  Best month ever: {bestMonth ? `${getFullMonthName(bestMonth.month)} '${String(bestMonth.year).slice(-2)}` : "N/A"}{" "}
                  with ${bestMonth?.profit.toFixed(2) || "0.00"}
                </p>
              </div>

              {/* CTA BUTTON */}
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30 shadow-lg shadow-purple-500/20">
                  <h4 className="text-xl font-bold text-white mb-3">
                    Ready to Experience Autonomous Trading?
                  </h4>
                  <p className="text-gray-200 mb-4 max-w-xl mx-auto">
                    GoBabyTrade is the same AI-enhanced system I use. Use my link to save $1,000!
                  </p>
                  <a
                    href="https://gobabytrade.com/432706BE"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleStartTrading}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30"
                  >
                    Start Trading – Save $1,000
                    <TrendingUp className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </>
          );
        })()}

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
