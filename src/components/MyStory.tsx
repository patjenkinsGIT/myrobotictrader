import * as React from "react";
import { User, TrendingUp, CheckCircle, Target } from "lucide-react";
import { tradingData } from "../data/tradingResults";
import { liveTradingData } from "../data/liveTrading";

export const MyStory: React.FC = () => {
  // Use live data if available, fallback to original data
  const currentData = liveTradingData.isLiveData
    ? liveTradingData
    : tradingData;

  // Helper function to get full month name
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

  // Find best month for story context
  const bestMonth = currentData.monthlyData.reduce((best, current) =>
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
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl shadow-purple-500/20">
                <img
                  src="/patrick-2.jpeg"
                  alt="Patrick - MyRoboticTrader Creator"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-lg shadow-green-400/40"></div>
              <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg shadow-purple-400/40"></div>
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
                    After attending the free training, I couldn't wait to get
                    started. I got setup the same day and was paper trading for
                    about 2 hours, but I almost immediately moved to real money
                    within hours after seeing a few successful trades.
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
                  What happened next surprised me. Month after month, consistent
                  results. My best month was{" "}
                  <span className="text-yellow-300 font-semibold">
                    {getFullMonthName(bestMonth.month)} with $
                    {bestMonth.profit.toFixed(2)}
                  </span>
                  , but even my quieter months were profitable.
                </p>

                <p className="text-lg text-gray-200 leading-relaxed">
                  After{" "}
                  <span className="text-purple-300 font-semibold">
                    8 months
                  </span>{" "}
                  of consistent results, I knew I had to share this with others.
                  The system simply works.
                </p>
              </div>

              {/* Quick Stats - Back to original 2 cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3 bg-green-500/10 rounded-lg p-4 border border-green-400/20">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                  <div>
                    <div className="text-green-300 font-semibold font-mono">
                      ${currentData.totalProfit.toLocaleString()}
                    </div>
                    <div className="text-gray-300 text-sm">Total Profits</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-blue-500/10 rounded-lg p-4 border border-blue-400/20">
                  <TrendingUp className="w-6 h-6 text-blue-300 flex-shrink-0" />
                  <div>
                    <div className="text-blue-300 font-semibold">8 Months</div>
                    <div className="text-gray-300 text-sm">
                      Consistent Trading
                    </div>
                  </div>
                </div>
              </div>
            </div>

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

        {/* Why I'm Sharing Section - Updated with your personal input */}
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
                Real Results
              </h4>
              <p className="text-gray-300 text-sm">
                I've always had an interest in investing and have invested in
                stocks before with reasonable success, but I've never had
                anything that trades this frequently and automatically.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Automated Approach
              </h4>
              <p className="text-gray-300 text-sm">
                The system handles the analysis and execution automatically. No
                need to watch charts or make emotional decisions - just
                consistent, methodical trading.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Worth Sharing
              </h4>
              <p className="text-gray-300 text-sm">
                We are still early in this phase of decentralized finance and
                the opportunities are amazing. It's an exciting time to see
                what's going to happen!
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-300 max-w-3xl mx-auto">
              I'm not a financial expert - I'm just someone who found a system
              that has worked consistently for me and wanted to share it with
              others who might be interested in a systematic approach to
              trading. The detailed results below show exactly what this system
              has produced over 8 months.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
