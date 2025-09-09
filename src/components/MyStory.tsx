import React from "react";
import { User, TrendingUp, CheckCircle, Target } from "lucide-react";
import { tradingData } from "../data/tradingResults";
import { liveTradingData } from "../data/liveTrading";

export const MyStory: React.FC = () => {
  // Use live data if available, fallback to original data
  const currentData = liveTradingData.isLiveData
    ? liveTradingData
    : tradingData;

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

            {/* Story Text */}
            <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
              <p>
                I've been seriously following the markets since 2014, and I love
                investing. But like many people, I've been burned by "gurus"
                before.
              </p>

              <p>
                <span className="text-red-300 font-semibold">
                  Over the years, I spent at least $30,000 on courses
                </span>{" "}
                - email marketing, affiliate marketing, CPA marketing, Amazon
                wholesale. Most were a complete waste of money and time.
              </p>

              <p>
                So when I discovered this robotic trading system while searching
                for new opportunities,
                <span className="text-yellow-300 font-semibold">
                  {" "}
                  I honestly thought it was too good to be true.
                </span>
              </p>

              <p>
                <span className="text-green-300 font-semibold">
                  But then I attended their live webinar, and I saw something
                  different.
                </span>{" "}
                Real authenticity. They answered every single question. They're
                live every week, encouraging people to come back. You can see
                the developer himself talking about the product - he's there
                every week.
              </p>

              <p>
                <span className="text-blue-300 font-semibold">
                  When I saw the first couple of trades go through during the
                  demo, I couldn't wait to start trading immediately.
                </span>{" "}
                I started on January 8, 2025, and moved from paper trading to
                real money almost instantly.
              </p>

              <p>
                After{" "}
                <span className="text-purple-300 font-semibold">8 months</span>{" "}
                of using this system and seeing{" "}
                <span className="text-green-300 font-semibold">
                  ${currentData.totalProfit.toLocaleString()} in total profits
                </span>
                , I'm so much more relaxed now. I know it works, and my results
                speak for themselves.
              </p>

              <p>
                <span className="text-yellow-300 font-semibold">
                  As I approach retirement, this is the closest thing to true
                  passive income I've ever experienced.
                </span>{" "}
                After wasting so much money on courses that didn't deliver, I
                wish I had found this system years ago.
              </p>
            </div>

            {/* Clear float for proper layout */}
            <div className="clear-both"></div>
          </div>
        </div>

        {/* Additional Story Section */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
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
                No More Guesswork
              </h4>
              <p className="text-gray-300 text-sm">
                After wasting $30,000+ on guru courses, this system actually
                works. Average profit per trade: $
                {currentData.avgProfitPerTrade.toFixed(2)}.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                True Passive Income
              </h4>
              <p className="text-gray-300 text-sm">
                Every single month has been profitable, with steady growth
                averaging ${currentData.monthlyAverage.toFixed(2)} per month.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-300 max-w-3xl mx-auto">
              I'm not a financial guru - I'm just someone who got tired of being
              scammed by internet marketers and finally found something that
              actually works. The numbers below are my actual results, updated{" "}
              {liveTradingData.isLiveData ? "live" : "regularly"}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
