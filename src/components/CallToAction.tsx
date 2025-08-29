import * as React from "react";
import { ArrowRight, CheckCircle, Rocket, TrendingUp } from "lucide-react";


export const CallToAction: React.FC = function () {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20 mb-6">
          <Rocket className="w-4 h-4 text-purple-400" />
          <span className="text-purple-300 font-medium">Ready to Start?</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Start Your Journey to
          <span className="block text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text">
            Financial Freedom
          </span>
        </h2>

      <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
        Experience autonomous trading that protects your capital while maximizing profits. 
        Start with paper trading to see the results risk-free.
      </p>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
            <span className="text-gray-300">
              Never trades at a loss
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
            <span className="text-gray-300">Your funds stay on Coinbase/Kraken</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
            <span className="text-gray-300">Set it and forget it trading</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://financialintelligence4u.com/masterclass?am_id=patrick1567"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
          >
            Join Free Masterclass
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="https://gobabytrade.com/fi4u"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10 flex items-center justify-center gap-2"
          >
            Start Trading Now
          </a>
        </div>

        {/* Guarantee */}
        <div className="flex items-center justify-center gap-3 text-green-400 mb-8">
          <TrendingUp className="w-6 h-6" />
          <span className="text-lg font-semibold">Start with Paper Trading - No Risk</span>
        </div>
        </div>
      </div>
    </section>
  );
};
