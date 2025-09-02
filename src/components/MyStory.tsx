import * as React from "react";
import { User, TrendingUp, CheckCircle } from "lucide-react";

export const MyStory: React.FC = function () {
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
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                Like many people, I was skeptical about automated trading. But
                after discovering this robotic trader system, everything
                changed.
              </p>

              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                <span className="text-green-300 font-semibold">
                  After the free masterclass, I couldn't wait to get everything
                  going. I got setup the same day and was paper trading for
                  about 2 hours but I almost immediately moved to real money
                  within hours after a few trades.
                </span>{" "}
              </p>

              <p className="text-lg text-gray-200 leading-relaxed mb-8">
                The system's "never trade at a loss" approach immediately made
                sense to me.
              </p>

              <p className="text-lg text-gray-200 leading-relaxed mb-8">
                After 8 months of using this system and seeing consistent
                profits, I knew I had to share it with others. The results speak
                for themselves.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-green-500/10 rounded-lg p-4 border border-green-400/20">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                  <div>
                    <div className="text-green-300 font-semibold">$3,900+</div>
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
      </div>
    </section>
  );
};
