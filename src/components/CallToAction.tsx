import * as React from "react";
import { ArrowRight, CheckCircle, Rocket, TrendingUp } from "lucide-react";

export const CallToAction: React.FC = function () {
  return (
    <section className="py-10 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-pink-900/60"></div>

      {/* Subtle robot accent - top right */}
      <div className="absolute top-10 right-10 opacity-8 pointer-events-none hidden lg:block">
        <img
          src="/robot-trading.png"
          alt=""
          className="w-20 h-20 animate-pulse"
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/40 mb-6 mt-4 shadow-lg shadow-purple-500/20">
          <Rocket className="w-4 h-4 text-purple-300" />
          <span className="text-purple-200 font-medium">Ready to Start?</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Start Your Journey to
          <span className="block text-transparent bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 bg-clip-text">
            Financial Freedom
          </span>
        </h2>

        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Autonomous trading that protects your capital while maximizing
          profits. Start with paper trading risk-free.
        </p>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center justify-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
            <span className="text-gray-200">Never trades at a loss</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
            <span className="text-gray-200">Your funds stay secure</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
            <span className="text-gray-200">Set it and forget it</span>
          </div>
        </div>

        {/* Masterclass Bullet List */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl border border-purple-400/30 p-8 mb-8 max-w-3xl mx-auto shadow-lg shadow-purple-500/20 relative">
          {/* Small robot accent inside the box */}
          <div className="absolute bottom-4 right-4 opacity-10 pointer-events-none hidden md:block">
            <img src="/robot-trading.png" alt="" className="w-12 h-12" />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Free Masterclass Reveals:
          </h3>

          <ul className="text-left space-y-4 mb-6">
            <li className="flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2">
              <ArrowRight className="w-5 h-5 text-purple-300 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-300 transition-colors" />
              <span className="text-lg">
                How our system avoids losses—even during market crashes
              </span>
            </li>
            <li className="flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2">
              <ArrowRight className="w-5 h-5 text-purple-300 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-300 transition-colors" />
              <span className="text-lg">
                Set-and-forget strategy that trades profitably without screen
                time
              </span>
            </li>
            <li className="flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2">
              <ArrowRight className="w-5 h-5 text-purple-300 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-300 transition-colors" />
              <span className="text-lg">
                Real examples: What happens when crypto markets drop
              </span>
            </li>
            <li className="flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2">
              <ArrowRight className="w-5 h-5 text-purple-300 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-300 transition-colors" />
              <span className="text-lg">
                The truth about "never trading at a loss" (and how we do it)
              </span>
            </li>
            <li className="flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2">
              <ArrowRight className="w-5 h-5 text-purple-300 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-300 transition-colors" />
              <span className="text-lg">
                Why you never worry about selling early or missing recoveries
              </span>
            </li>
            <li className="flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2">
              <ArrowRight className="w-5 h-5 text-purple-300 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-300 transition-colors" />
              <span className="text-lg">
                Stay in complete control—override automation anytime
              </span>
            </li>
            <li className="flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2">
              <ArrowRight className="w-5 h-5 text-purple-300 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-300 transition-colors" />
              <span className="text-lg">
                Common crypto trading myths debunked with real data
              </span>
            </li>
          </ul>

          <p className="text-lg text-purple-200 font-medium">
            Free access. Real strategies you can implement immediately after the
            masterclass!
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://financialintelligence4u.com/masterclass?am_id=patrick1567"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2"
          >
            Get Free Training
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="https://gobabytrade.com/fi4u"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-2 border-white/40 hover:border-white/60 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/15 flex items-center justify-center gap-2 shadow-lg shadow-white/10"
          >
            Start Trading
          </a>
        </div>

        {/* Guarantee */}
        <div className="flex items-center justify-center gap-3 text-green-300">
          <TrendingUp className="w-6 h-6" />
          <span className="text-lg font-semibold">
            Start with Paper Trading - Zero Risk
          </span>
        </div>
      </div>
    </section>
  );
};
