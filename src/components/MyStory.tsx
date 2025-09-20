// MyStory.tsx - Clean Personal Story Component
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

          {/* Desktop: Image floated right with text wrap */}
          <div className="hidden lg:block float-right ml-8 mb-6">
            <div className="relative">
              <div className="w-72 h-80 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl shadow-purple-500/20">
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

          {/* Story Content */}
          <div className="text-gray-300 leading-relaxed space-y-6">
            <p className="text-lg">
              Like many people, I was frustrated watching my savings sit in
              low-yield accounts while inflation ate away at my purchasing
              power. I knew I needed to find a better way to grow my money, but
              traditional investing felt risky and time-consuming.
            </p>

            <p className="text-lg">
              That's when I discovered this "Set It and Forget It" robotic
              trading platform. What caught my attention wasn't flashy promises
              of overnight riches – it was the mathematical approach and the
              fact that{" "}
              <span className="text-purple-300 font-semibold">
                the system never trades at a loss
              </span>
              .
            </p>

            <p className="text-lg">
              I started small, just testing the waters. The results spoke for
              themselves:{" "}
              <span className="text-green-300 font-semibold">
                ${totalProfit.toLocaleString()} in profits over {timeSinceStart}
              </span>
              {hasLiveData && (
                <span className="text-blue-300">
                  {" "}
                  (updated live from my actual account)
                </span>
              )}
              .
            </p>

            <p className="text-lg">
              What I love most is the peace of mind. I don't have to watch
              charts, make emotional decisions, or worry about timing the
              market. The AI-enhanced robotic system handles everything
              automatically, and I can focus on other things while it grows my
              money consistently.
            </p>

            <p className="text-lg">
              The most surprising part? This isn't some complicated crypto
              strategy or high-risk trading. It's a methodical, mathematical
              approach that prioritizes capital preservation while generating
              steady returns.
            </p>
          </div>

          {/* Clear float */}
          <div className="clear-both"></div>
        </div>

        {/* Key Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">
              Real Results
            </h4>
            <p className="text-gray-300 text-sm">
              These aren't theoretical gains or backtested results. Every dollar
              shown is real profit from my actual trading account,{" "}
              {hasLiveData ? "updated live" : "regularly updated"}.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">
              Set & Forget
            </h4>
            <p className="text-gray-300 text-sm">
              I spend maybe 5 minutes a week checking my results. The system
              runs 24/7, making intelligent trades while I sleep, work, or spend
              time with family.
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
              I see people struggling with finances, having too much month left
              at the end of the money. This platform could really help, but not
              many people know about it.
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center">
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            I'm not a financial guru or marketing expert – I'm just someone who
            found something that works and learned I could build this site to
            share it with others. The numbers below are my actual results,
            updated {hasLiveData ? "live" : "regularly"}.
          </p>
        </div>
      </div>
    </section>
  );
};
