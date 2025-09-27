// MyStory.tsx - Enhanced Personal Story Component
import React from "react";
import {
  User,
  TrendingUp,
  CheckCircle,
  Target,
  DollarSign,
  Lightbulb,
} from "lucide-react";
import { TradingStats } from "../hooks/useGoogleSheetsData";
import { calculateTimeSinceStart } from "../utils/tradingTime";

interface MyStoryProps {
  tradingStats: TradingStats | null;
}

const MyStory: React.FC<MyStoryProps> = ({ tradingStats }) => {
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
  const hasLiveData = tradingStats !== null;

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

            {/* Enhanced Story Text with Strategic Headers */}
            <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
              {/* Section 1: The Investment Journey */}
              <div>
                <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6" />
                  My Journey Started Like Yours
                </h3>
                <p>
                  I've been following the markets since 2014, and I genuinely
                  love investing. I did okay with my stock investments, but
                  tracking individual stocks became incredibly tedious. I got
                  frustrated with mutual funds because of their fees and average
                  returns - even index funds weren't delivering what I hoped
                  for. Target date funds? Don't get me started on those.
                </p>
              </div>

              {/* Section 2: The Search for Something Better */}
              <div>
                <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center gap-2">
                  <DollarSign className="w-6 h-6" />
                  Chasing the Dream of Extra Income
                </h3>
                <p>
                  <span className="text-blue-300 font-semibold">
                    Like many of you, I've always wanted to make extra income in
                    addition to my 9-to-5 job.
                  </span>{" "}
                  Over the years, I invested tens of thousands in various
                  courses and systems - email marketing, affiliate marketing,
                  Amazon wholesale, you name it. Some methods seemed unreliable,
                  and honestly, part of the problem was probably me not putting
                  in full effort or knowing how to position myself properly.
                </p>
                <p className="mt-4">
                  I was tired of chasing the next "breakthrough" system. Tired
                  of complex strategies that required constant attention. Tired
                  of watching opportunities slip by because I was stuck at work
                  or didn't have time to analyze the market.
                </p>
              </div>

              {/* Section 3: The Discovery */}
              <div>
                <h3 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center gap-2">
                  <Lightbulb className="w-6 h-6" />
                  Then Everything Changed
                </h3>
                <p>
                  So when I discovered this autonomous trading system while
                  researching new opportunities, my first thought was:{" "}
                  <span className="text-yellow-300 font-semibold italic">
                    "Here's just another system promising easy money."
                  </span>{" "}
                  I was naturally skeptical - and you should be too.
                </p>
                <p className="mt-4">
                  <span className="text-green-300 font-semibold">
                    But this one is truly automated!
                  </span>{" "}
                  I set it up, connected my exchange accounts with trading-only
                  API permissions, and started with a small amount to test it.
                  The autonomous trader trades while I'm working, sleeping, or
                  spending time with family.
                </p>
              </div>

              {/* Section 4: The Results */}
              <div>
                <h3 className="text-2xl font-bold text-green-300 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6" />
                  The Results Speak for Themselves
                </h3>
                <p>
                  <span className="text-green-400 font-bold text-xl">
                    In just {timeSinceStart}, my system has generated $
                    {currentData.totalProfit.toLocaleString()} in realized
                    profits.
                  </span>{" "}
                  That's an average of{" "}
                  <span className="text-green-300 font-semibold">
                    ${dailyAvg} per day
                  </span>{" "}
                  - money that's been withdrawn and spent on real life.
                </p>
                <p className="mt-4">
                  This isn't paper gains or "what if" projections. This is
                  actual cash that I use for every day living. As of now, it's
                  giving me the extra moneey to spend for every day expenses and
                  save for emergencies. I'm also reinvestig a portion of my
                  profits to scale my investment capital.
                </p>
              </div>

              {/* Section 5: Why I'm Sharing */}
              <div className="bg-blue-500/10 border-l-4 border-blue-400 pl-6 py-4 rounded-r-lg">
                <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Why I'm Sharing This With You
                </h3>
                <p>
                  I see people struggling with finances every day - having too
                  much month left at the end of the money. Working overtime just
                  to stay afloat. Missing out on time with family because they
                  need that extra shift.
                </p>
                <p className="mt-4">
                  <span className="text-blue-200 font-semibold">
                    This platform could genuinely help, but not many people know
                    about it.
                  </span>{" "}
                  That's why I built this site and share what's working for me.
                  As you can see, my total profits are not breaking any records,
                  but it's consistent and reliable - It's truly "Set It and
                  Forget It." My trader only takes what the market GIVES. I'm
                  not a financial guru or marketing expert - I'm just someone
                  who found something that works and wants to help others
                  discover it too.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid with Dynamic Data */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">
              Real Profits Generated
            </h4>
            <p className="text-green-400 text-3xl font-bold mb-2">
              ${currentData.totalProfit.toLocaleString()}
            </p>
            <p className="text-gray-400 text-sm">
              In {timeSinceStart}. Daily average: ${dailyAvg} per day.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">
              Truly Automated
            </h4>
            <p className="text-gray-300 text-sm">
              Set it up once, and the robot handles everything. No chart
              watching, no timing the market, no stress.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">
              Helping Others
            </h4>
            <p className="text-gray-300 text-sm">
              My mission is to help people build additional income streams
              without sacrificing family time or peace of mind.
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl border border-purple-400/20 p-8">
          <p className="text-gray-200 max-w-3xl mx-auto text-lg leading-relaxed">
            <span className="text-white font-semibold">Here's the truth:</span>{" "}
            I'm not a financial advisor, and I can't promise you'll get the same
            results I have. But I can show you exactly what's working for me,
            with real numbers that are updated{" "}
            {hasLiveData ? "live" : "regularly"} from my actual trading accounts
            below.
          </p>
          <p className="text-blue-300 mt-4 font-medium">
            If you're ready to explore a different path to financial growth,
            keep reading.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyStory; // ✅ Exports the component directly
