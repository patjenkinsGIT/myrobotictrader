// MyStory.tsx - Personal Story with Moses the Dog
import React from "react";
import { User, CheckCircle, Target, Heart } from "lucide-react";
import { TradingStats } from "../hooks/useGoogleSheetsData";
import { calculateTimeSinceStart } from "../utils/tradingTime";

interface MyStoryProps {
  tradingStats: TradingStats | null;
}

const MyStory: React.FC<MyStoryProps> = ({ tradingStats }) => {
  // Calculate time since starting trading (January 8, 2025)
  const timeSinceStart = calculateTimeSinceStart();

  // Only pull total profits and time data for the story
  const totalProfit = tradingStats?.totalProfit || 0;
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

        {/* Main Story Container */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-blue-400/20 p-8 shadow-lg shadow-blue-500/10 mb-8">
          {/* Mobile: Image at top */}
          <div className="flex justify-center mb-8 lg:hidden">
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl shadow-purple-500/20">
                <img
                  src="/patrick-and-moses.jpg"
                  alt="Patrick Jenkins with Moses"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-lg shadow-green-400/40"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg shadow-purple-400/40"></div>
            </div>
          </div>

          {/* Desktop: Image floats right, text wraps */}
          <div className="hidden lg:block float-right ml-8 mb-4">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl shadow-purple-500/20">
                <img
                  src="/patrick-and-moses.jpg"
                  alt="Patrick Jenkins with Moses"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-lg shadow-green-400/40"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg shadow-purple-400/40"></div>
            </div>
          </div>

          {/* Story Text */}
          <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
            <p>
              Like most people, I spent years{" "}
              <span className="text-white font-semibold">
                trying to figure out crypto trading
              </span>
              . I'd watch charts, read analysis, try to time the market... and
              mostly just stress myself out while missing opportunities.
            </p>

            <p>
              Then I discovered something that changed everything:{" "}
              <span className="text-blue-300 font-semibold">
                AI-enhanced autonomous trading technology
              </span>
              . Not a bot that just follows simple rules, but a sophisticated
              system that trades 24/7, never panics, and only takes
              profits—never losses.
            </p>

            <p>
              I started with $25,000 in January 2025. {timeSinceStart} later,
              I've generated{" "}
              <span className="text-green-300 font-bold">
                ${totalProfit.toLocaleString()}
              </span>{" "}
              in{" "}
              <span className="text-white font-semibold">realized profits</span>
              . Not paper gains that could disappear—actual money I've taken off
              the table.
            </p>

            <p className="text-white font-semibold bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-xl border border-purple-400/30">
              <Heart className="w-5 h-5 inline-block mr-2 text-pink-400" />
              Here's the best part: While my automated trader works 24/7, I get
              to spend quality time with my new dog Moses. No more staring at
              charts all day. No more missing out on life because I'm "watching
              the market." The system handles everything while I actually enjoy
              my life.
            </p>

            <p>
              The platform makes money while I sleep, while I'm at the park with
              Moses, while I'm doing literally anything else. That's the whole
              point of "
              <span className="text-purple-300 font-semibold">
                Set It and Forget It
              </span>
              " trading.
            </p>

            <p>
              I see people struggling with finances, having too much month left
              at the end of the money. This technology could really help, but
              not many people know about it. That's why I built this site—to
              show what's actually possible when you stop trying to manually
              trade and let technology do the heavy lifting.
            </p>
          </div>
        </div>

        {/* Three Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">
              Real Results
            </h4>
            <p className="text-gray-300 text-sm">
              {timeSinceStart} of consistent profits. $
              {totalProfit.toLocaleString()} realized and verified.
            </p>
          </div>

          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">
              True Automation
            </h4>
            <p className="text-gray-300 text-sm">
              Works 24/7. No charts to watch. No stress. Just consistent profits
              while you live your life.
            </p>
          </div>

          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">
              Life Balance
            </h4>
            <p className="text-gray-300 text-sm">
              Spend time with Moses, family, hobbies. The system handles the
              trading so you can enjoy life.
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center">
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            I'm not a financial guru or marketing expert—I'm just someone who
            found something that works and wanted to share it. The numbers below
            are my actual results, updated {hasLiveData ? "live" : "regularly"}.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
