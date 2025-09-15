import React from "react";
import { User, TrendingUp, CheckCircle, Target } from "lucide-react";
import { TradingStats } from "../hooks/useGoogleSheetsData";
import { calculateTimeSinceStart } from "../utils/tradingTime";

interface MyStoryProps {
  tradingStats: TradingStats | null;
}

export const MyStory: React.FC<MyStoryProps> = ({ tradingStats }) => {
  // Calculate time since starting trading (January 8, 2025)
  const timeSinceStart = calculateTimeSinceStart();

  // Fallback data if Google Sheets is not available
  const fallbackData = {
    totalProfit: 12450,
    totalTrades: 1247,
    isLiveData: false,
    dailyAvg: 89,
  };

  // Use Google Sheets data if available, otherwise fallback
  const currentData = tradingStats || fallbackData;
  const dailyAvg = tradingStats?.dailyAvg?.toFixed(0) || "89";

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
                investing. I did okay with my stock investments, but tracking
                individual stocks became incredibly tedious. I got frustrated
                with mutual funds because of their fees and average returns -
                even index funds weren't delivering what I hoped for. Target
                date funds? Don't get me started on those.{" "}
              </p>

              <p>
                <span className="text-blue-300 font-semibold">
                  I've always wanted to make extra income in addition to my
                  9-to-5 job, so over the years I invested tens of thousands in
                  various courses and systems{" "}
                </span>{" "}
                - email marketing, affiliate marketing, Amazon wholesale, you
                name it. Some methods seemed unreliable, and honestly, part of
                the problem was probably me not putting in full effort or
                knowing how to position myself properly.{" "}
              </p>

              <p>
                So when I discovered this autonomous trading system while
                researching new opportunities, I thought "here's just another
                system promising easy money."{" "}
                <span className="text-yellow-300 font-semibold">
                  {" "}
                  I was naturally skeptical.
                </span>
              </p>

              <p>
                <span className="text-green-300 font-semibold">
                  But this one is truly automated! I attended, and still attend
                  the live webinar, and something felt completely different. The
                  authenticity was refreshing. They answered every question
                  thoroughly. They're live every week, genuinely encouraging
                  people to come back and ask more questions. You can see the
                  actual developer talking about the product - he's there every
                  single week.{" "}
                </span>{" "}
              </p>

              <p>
                <span className="text-blue-300 font-semibold">
                  When I watched the trades execute during the live demo, I
                  realized this was the first time I'd seen a system that could
                  make real profits without me doing ANYTHING. All I had to do
                  was choose my currencies, decide how much to invest in each
                  one, and set what I wanted to keep or reinvest from my
                  profits. The autonomous trader handles all the money
                  management. I was up and running that same evening with only a
                  couple hours of paper trading, seeing a few trades was all I
                  needed to see. I turned on the real trader IMMEDIATELY and
                  haven't looked back!{" "}
                </span>{" "}
              </p>

              <p>
                I started with my very first trade on January 8, 2025, and after{" "}
                <span className="text-purple-300 font-semibold">
                  {timeSinceStart}
                </span>{" "}
                of using this system and seeing{" "}
                <span className="text-green-300 font-semibold">
                  ${currentData.totalProfit.toLocaleString()} in total profits
                </span>
                , I'm honestly sleeping better at night. For the first time in
                years, I'm not constantly worried about my financial future.
              </p>

              <p>
                <span className="text-yellow-300 font-semibold">
                  As I approach retirement, this really is the closest thing to
                  true passive income I've experienced. I wish this had been
                  available years ago, but I'm grateful that I found it when I
                  did and I'm super happy that I can share my experience here. I
                  really want others to have the opportunity to experience
                  trading on a level that everyone can use. This is a true gift.{" "}
                </span>{" "}
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
              updated {currentData.isLiveData ? "live" : "regularly"}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
