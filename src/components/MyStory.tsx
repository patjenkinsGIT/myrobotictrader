import * as React from "react";
import {
  User,
  TrendingUp,
  CheckCircle,
  Calendar,
  DollarSign,
  Target,
  Zap,
} from "lucide-react";
import { tradingData, calculateDailyAverage } from "../data/tradingResults";
import {
  liveTradingData,
  calculateLiveDailyAverage,
} from "../data/liveTrading";

export const MyStory: React.FC = function () {
  // Use live data if available, fallback to original data
  const currentData = liveTradingData.isLiveData
    ? liveTradingData
    : tradingData;
  const dailyAvg = liveTradingData.isLiveData
    ? calculateLiveDailyAverage()
    : calculateDailyAverage();

  // Find best month for story context
  const bestMonthData = currentData.monthlyData.reduce((best, current) =>
    current.profit > best.profit ? current : best
  );

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-400/40 mb-6 shadow-lg shadow-blue-500/20">
            <User className="w-4 h-4 text-blue-300" />
            <span className="text-blue-200 font-medium">My Story</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Hi, I'm Patrick
            <span className="block text-transparent bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text">
              Here's How I Discovered This System
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo Side */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl shadow-purple-500/20">
                <img
                  src="/patrick-2.jpeg"
                  alt="Patrick - MyRoboticTrader Creator"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-lg shadow-green-400/40"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg shadow-purple-400/40"></div>
            </div>
          </div>

          {/* Story Side */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-blue-400/20 p-8 shadow-lg shadow-blue-500/10">
              <div className="space-y-6">
                <p className="text-lg text-gray-200 leading-relaxed">
                  Like many people, I was skeptical about automated trading. I'd
                  tried various strategies before, lost money on risky trades,
                  and was honestly burned out on the whole thing.
                </p>

                <p className="text-lg text-gray-200 leading-relaxed">
                  <span className="text-yellow-300 font-semibold">
                    But then I discovered this robotic trader system in late
                    2024.
                  </span>{" "}
                  The "never trade at a loss" principle immediately caught my
                  attention - it was exactly the opposite of everything I'd
                  experienced before.
                </p>

                <p className="text-lg text-gray-200 leading-relaxed">
                  <span className="text-green-300 font-semibold">
                    After the free masterclass, I couldn't wait to get started.
                    I got setup the same day and was paper trading for about 2
                    hours, but I almost immediately moved to real money within
                    hours after seeing a few successful trades.
                  </span>
                </p>

                <p className="text-lg text-gray-200 leading-relaxed">
                  <span className="text-blue-300 font-semibold">
                    January 8, 2025
                  </span>{" "}
                  - that's when I started trading with real money. The system's
                  "set it and forget it" approach was perfect for my busy
                  schedule.
                </p>

                <p className="text-lg text-gray-200 leading-relaxed">
                  What happened next blew my mind. Month after month, consistent
                  profits. My best month was{" "}
                  <span className="text-yellow-300 font-semibold">
                    {bestMonthData.month}
                    with ${bestMonthData.profit.toFixed(2)}
                  </span>
                  , but even my "slower" months were profitable.
                </p>

                <p className="text-lg text-gray-200 leading-relaxed">
                  After{" "}
                  <span className="text-purple-300 font-semibold">
                    8 months
                  </span>{" "}
                  of using this system and seeing{" "}
                  <span className="text-green-300 font-semibold">
                    ${currentData.totalProfit.toLocaleString()} in total profits
                  </span>
                  , I knew I had to share it with others. The results speak for
                  themselves.
                </p>
              </div>
            </div>

            {/* Dynamic Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center gap-2 bg-green-500/10 rounded-lg p-4 border border-green-400/20">
                <DollarSign className="w-6 h-6 text-green-300" />
                <div className="text-green-300 font-bold font-mono">
                  ${currentData.totalProfit.toLocaleString()}
                </div>
                <div className="text-gray-300 text-xs text-center">
                  Total Profits
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 bg-blue-500/10 rounded-lg p-4 border border-blue-400/20">
                <Calendar className="w-6 h-6 text-blue-300" />
                <div className="text-blue-300 font-bold font-mono">
                  ${currentData.monthlyAverage.toFixed(0)}
                </div>
                <div className="text-gray-300 text-xs text-center">
                  Monthly Avg
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 bg-purple-500/10 rounded-lg p-4 border border-purple-400/20">
                <Target className="w-6 h-6 text-purple-300" />
                <div className="text-purple-300 font-bold font-mono">
                  ${dailyAvg}
                </div>
                <div className="text-gray-300 text-xs text-center">
                  Daily Avg
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 bg-yellow-500/10 rounded-lg p-4 border border-yellow-400/20">
                <Zap className="w-6 h-6 text-yellow-300" />
                <div className="text-yellow-300 font-bold font-mono">
                  ${bestMonthData.profit.toFixed(0)}
                </div>
                <div className="text-gray-300 text-xs text-center">
                  Best Month
                </div>
              </div>
            </div>

            {/* Live Data Indicator */}
            {liveTradingData.isLiveData && (
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-lg p-4 border border-green-400/30">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-green-300 font-semibold text-sm">
                      Live Data Connected
                    </p>
                    <p className="text-gray-300 text-xs">
                      Last updated:{" "}
                      {new Date(liveTradingData.lastUpdated).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Transition to results */}
            <div className="text-center">
              <p className="text-xl text-purple-200 font-medium">
                Don't just take my word for it - here are my actual trading
                results:
              </p>
              <div className="mt-4">
                <TrendingUp className="w-8 h-8 text-green-300 mx-auto animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Story Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Why I'm Sharing This With You
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Proven Results
              </h4>
              <p className="text-gray-300 text-sm">
                {currentData.totalTrades.toLocaleString()} trades executed with
                consistent profitability over 8 months of real trading.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                No Guesswork
              </h4>
              <p className="text-gray-300 text-sm">
                The system does everything automatically. Average profit per
                trade: ${currentData.avgProfitPerTrade.toFixed(2)}.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Consistent Growth
              </h4>
              <p className="text-gray-300 text-sm">
                Every single month has been profitable, with steady growth
                averaging ${currentData.monthlyAverage.toFixed(2)} per month.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-300 max-w-3xl mx-auto">
              I'm not a financial guru or trading expert - I'm just someone who
              found a system that works and wanted to share it with others who
              are looking for a reliable way to generate passive income. The
              numbers below are my actual results, updated{" "}
              {liveTradingData.isLiveData ? "live" : "regularly"}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
