import * as React from "react";
import { ArrowRight, CheckCircle, Rocket, TrendingUp } from "lucide-react";

export const CallToAction: React.FC = function () {
  return (
    <section className="py-10 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6 mt-4">
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
          Experience autonomous trading that protects your capital while
          maximizing profits. Start with paper trading to see the results
          risk-free.
        </p>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center justify-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
            <span className="text-gray-300">Never trades at a loss</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
            <span className="text-gray-300">Funds stay on Coinbase/Kraken</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
            <span className="text-gray-300">Set it and forget it</span>
          </div>
        </div>

        {/* Masterclass Bullet List */}
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl border border-white/20 p-8 mb-8 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Inside the Free Masterclass, You'll Discover:
          </h3>

          <ul className="text-left space-y-4 mb-6">
            <li className="flex items-start text-gray-300 group hover:text-white transition-all duration-300 hover:translate-x-2">
              <ArrowRight className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-400 transition-colors" />
              <span className="text-lg">
                How our robotic trader avoids realized losses—even during wild
                market swings
              </span>
            </li>
            <li className="flex items-start text-gray-300 group hover:text-white transition-all duration-300 hover:translate-x-2">
              <ArrowRight className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-400 transition-colors" />
              <span className="text-lg">
                The simple, set-and-forget strategy that lets you trade
                profitably without being glued to your screen
              </span>
            </li>
            <li className="flex items-start text-gray-300 group hover:text-white transition-all duration-300 hover:translate-x-2">
              <ArrowRight className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-400 transition-colors" />
              <span className="text-lg">
                Real examples: What happens when the crypto market drops
              </span>
            </li>
            <li className="flex items-start text-gray-300 group hover:text-white transition-all duration-300 hover:translate-x-2">
              <ArrowRight className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-400 transition-colors" />
              <span className="text-lg">
                The truth about "never trading at a loss" (and how we actually
                do it)
              </span>
            </li>
            <li className="flex items-start text-gray-300 group hover:text-white transition-all duration-300 hover:translate-x-2">
              <ArrowRight className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-400 transition-colors" />
              <span className="text-lg">
                Why you never have to worry about selling early or missing out
                on recoveries
              </span>
            </li>
            <li className="flex items-start text-gray-300 group hover:text-white transition-all duration-300 hover:translate-x-2">
              <ArrowRight className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-400 transition-colors" />
              <span className="text-lg">
                How you stay in control—override automation any time you want
              </span>
            </li>
            <li className="flex items-start text-gray-300 group hover:text-white transition-all duration-300 hover:translate-x-2">
              <ArrowRight className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0 group-hover:text-pink-400 transition-colors" />
              <span className="text-lg">
                Answers to common crypto trading questions (myths, risks, and
                more)
              </span>
            </li>
          </ul>

          <p className="text-lg text-purple-200 font-medium">
            No signup, no payment required. Just real strategies and actionable
            insights!
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
        <div className="flex items-center justify-center gap-3 text-green-400">
          <TrendingUp className="w-6 h-6" />
          <span className="text-lg font-semibold">
            Start with Paper Trading - No Risk
          </span>
        </div>
      </div>
    </section>
  );
};
