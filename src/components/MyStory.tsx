import React from "react";
import { User, TrendingUp, CheckCircle, Target } from "lucide-react";
import { tradingData, calculateDailyAverage } from "../data/tradingResults";
import {
  liveTradingData,
  calculateLiveDailyAverage,
} from "../data/liveTrading";

export const MyStory: React.FC = () => {
  // Use live data if available, fallback to original data
  const currentData = liveTradingData.isLiveData
    ? liveTradingData
    : tradingData;

  // Calculate daily average
  const dailyAvg = liveTradingData.isLiveData
    ? calculateLiveDailyAverage()
    : calculateDailyAverage();

  // Calculate time since starting trading (January 8, 2025)
  const calculateTimeSinceStart = () => {
    const startDate = new Date("2025-01-08");
    const currentDate = new Date();

    const yearDiff = currentDate.getFullYear() - startDate.getFullYear();
    const monthDiff = currentDate.getMonth() - startDate.getMonth();
    const dayDiff = currentDate.getDate() - startDate.getDate();

    let totalMonths = yearDiff * 12 + monthDiff;

    // If we haven't reached the same day of the month, subtract 1
    if (dayDiff < 0) {
      totalMonths -= 1;
    }

    // Ensure at least 1 month is shown
    totalMonths = Math.max(totalMonths, 1);

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0) {
      // Less than 12 months: "8 months", "11 months"
      return `${totalMonths} ${totalMonths === 1 ? "month" : "months"}`;
    } else if (months === 0) {
      // Exactly 1 year, 2 years, etc: "1 year", "2 years"
      return `${years} ${years === 1 ? "year" : "years"}`;
    } else {
      // Mixed: "1 year 1 month", "2 years 3 months"
      const yearText = `${years} ${years === 1 ? "year" : "years"}`;
      const monthText = `${months} ${months === 1 ? "month" : "months"}`;
      return `${yearText} ${monthText}`;
    }
  };

  const timeSinceStart = calculateTimeSinceStart();

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

        {/* Main Story Container - Text wraps around image on desktop */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-blue-400/20 p-8 shadow-lg shadow-blue-500/10 mb-8">
          {/* Mobile: Image at top, separate from text */}
          <div className="flex justify-center mb-8 lg:hidden">
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl shadow-purple-500/20">
                <img
                  src="/patrick-2.jpeg"
                  alt="Patrick Jenkins"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-lg shadow-green-400/40"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg shadow-purple-400/40"></div>
            </div>
          </div>

          {/* Desktop: Image floated right with text wrapping around */}
          <div className="relative">
            <div className="hidden lg:block float-right ml-8 mb-6">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl shadow-purple-500/20">
                  <img
                    src="/patrick-2.jpeg"
                    alt="Patrick Jenkins"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-lg shadow-green-400/40"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg shadow-purple-400/40"></div>
              </div>
            </div>

            {/* Story Text - UPDATED WITH AUTHENTIC LANGUAGE */}
            <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
              <p>
                I've been following the markets since 2014, and I genuinely love
                investing. But like many people, I've tried a lot of different
                approaches over the years.
              </p>

              <p>
                <span className="text-blue-300 font-semibold">
                  Over the years, I invested tens of thousands in various
                  courses and systems
                </span>{" "}
                - email marketing, affiliate marketing, Amazon wholesale, you
                name it. Some taught me valuable skills, but honestly, most
                didn't deliver what they promised.
              </p>

              <p>
                So when I discovered this robotic trading system while
                researching new opportunities,
                <span className="text-yellow-300 font-semibold">
                  {" "}
                  I was naturally skeptical.
                </span>
              </p>

              <p>
                <span className="text-green-300 font-semibold">
                  But then I attended their live webinar, and something felt
                  different.
                </span>{" "}
                The authenticity was refreshing. They answered every question
                thoroughly. They're live every week, genuinely encouraging
                people to come back and ask more questions. You can see the
                actual developer talking about the product - he's there every
                single week.
              </p>

              <p>
                <span className="text-blue-300 font-semibold">
                  When I watched the first few trades execute during the live
                  demo, I knew I had to try this for myself.
                </span>{" "}
                I started on January 8, 2025, and moved from paper trading to
                real money pretty quickly once I saw how it worked.
              </p>

              <p>
                After{" "}
                <span className="text-purple-300 font-semibold">
                  {timeSinceStart}
                </span>{" "}
                of using this system and seeing{" "}
                <span className="text-green-300 font-semibold">
                  ${currentData.totalProfit.toLocaleString()} in total profits
                </span>
                , I'm honestly much more relaxed about my financial future. The
                results speak for themselves.
              </p>

              <p>
                <span className="text-yellow-300 font-semibold">
                  As I approach retirement, this really is the closest thing to
                  true passive income I've experienced.
                </span>{" "}
                I wish I had discovered this system years ago, but I'm grateful
                I found it when I did.
              </p>
            </div>

            {/* Clear float for proper layout */}
            <div className="clear-both"></div>
          </div>
        </div>

        {/* Additional Story Section - COMPLETELY UPDATED */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Why I Built This Site
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
                {currentData.totalTrades.toLocaleString()} actual trades
                executed with consistent profitability over {timeSinceStart} of
                real trading.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Learning Experience
              </h4>
              <p className="text-gray-300 text-sm">
                Building this site taught me that I can create powerful tools to
                share something genuinely valuable. Daily average: ${dailyAvg}{" "}
                per day.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Helping Others
              </h4>
              <p className="text-gray-300 text-sm">
                I see people struggling with finances, having too much month
                left at the end of the money. This platform could really help,
                but not many people know about it.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-300 max-w-3xl mx-auto">
              I'm not a financial guru or marketing expert - I'm just someone
              who found something that works and learned I could build this site
              to share it with others. The numbers below are my actual results,
              updated {liveTradingData.isLiveData ? "live" : "regularly"}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
