import * as React from "react";
import { ArrowRight, Bot, TrendingUp, Shield, Zap } from "lucide-react";

export const Hero: React.FC = function () {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-purple-500/10 to-transparent"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20 mb-6">
            <Bot className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 font-medium">
              AI-Powered Trading Revolution
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Turn Your Crypto Dreams Into
            <span className="block text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text">
              Automated Profits
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Our advanced AI trading bots work 24/7 to maximize your
            cryptocurrency returns. No experience needed - just set it and watch
            your portfolio grow.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://crypto.gobabytrade.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
          >
            Start Trading Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="https://financialintelligence4u.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10 flex items-center justify-center gap-2"
          >
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">25%+</div>
            <div className="text-gray-400">Average Monthly Returns</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-gray-400">Automated Trading</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">10K+</div>
            <div className="text-gray-400">Satisfied Traders</div>
          </div>
        </div>
      </div>
    </section>
  );
};
