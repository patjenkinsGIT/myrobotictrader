import * as React from "react";
import { ArrowRight, CheckCircle, Rocket, TrendingUp } from "lucide-react";
import { trackCTAClick, trackOutboundLink } from "../utils/analytics";

export const CallToAction: React.FC = function () {
  const handleGetFreeTraining = () => {
    trackCTAClick("get_free_training", "cta_section");
    trackOutboundLink(
      "https://dailyprofits.link/class",
      "Get Free Training CTA"
    );
  };

  const handleStartTrading = () => {
    trackCTAClick("start_trading", "cta_section");
    trackOutboundLink("https://dailyprofits.link/gbt", "Start Trading CTA");
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-800/60"></div>

      {/* Subtle robot accent - top right */}
      <div className="absolute top-10 right-10 opacity-8 pointer-events-none hidden xl:block">
        <img
          src="/robot-trading.png"
          alt=""
          className="w-20 h-20 animate-pulse"
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-emerald-400/40 mb-6 mt-4 shadow-lg shadow-emerald-500/20">
          <Rocket className="w-4 h-4 text-emerald-300" />
          <span className="text-emerald-100 font-medium">Ready to Start?</span>
        </div>

        {/* Updated headline - Direct and benefit-focused */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Stop Trading.
          <span className="block text-emerald-400">
            Start Profiting.
          </span>
        </h2>

        <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
          See how it works in the free masterclass. Then test it risk-free with paper trading before risking a single dollar.
        </p>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
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
        <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 backdrop-blur-sm rounded-2xl border border-slate-600/30 p-10 mb-10 max-w-3xl mx-auto shadow-lg shadow-slate-500/20 relative">
          {/* Small robot accent inside the box */}
          <div className="absolute bottom-4 right-4 opacity-10 pointer-events-none hidden md:block">
            <img src="/robot-trading.png" alt="" className="w-12 h-12" />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            What You'll Learn:
          </h3>

          <ul className="text-left space-y-5 mb-8">
            <li className="flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2">
              <ArrowRight className="w-5 h-5 text-emerald-300 mr-3 mt-1 flex-shrink-0 group-hover:text-teal-300 transition-colors" />
              <span className="text-lg">
                Why the system never sells at a loss (even during crashes)
              </span>
            </li>
            <li className="flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2">
              <ArrowRight className="w-5 h-5 text-emerald-300 mr-3 mt-1 flex-shrink-0 group-hover:text-teal-300 transition-colors" />
              <span className="text-lg">
                How to profit while you sleep (no chart-watching)
              </span>
            </li>
            <li className="flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2">
              <ArrowRight className="w-5 h-5 text-emerald-300 mr-3 mt-1 flex-shrink-0 group-hover:text-teal-300 transition-colors" />
              <span className="text-lg">
                What happens when markets drop 30% overnight
              </span>
            </li>
            <li className="flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2">
              <ArrowRight className="w-5 h-5 text-emerald-300 mr-3 mt-1 flex-shrink-0 group-hover:text-teal-300 transition-colors" />
              <span className="text-lg">
                Why you'll never panic-sell or miss a recovery
              </span>
            </li>
            <li className="flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2">
              <ArrowRight className="w-5 h-5 text-emerald-300 mr-3 mt-1 flex-shrink-0 group-hover:text-teal-300 transition-colors" />
              <span className="text-lg">
                Stay in complete control—override anytime (but you won't want to)
              </span>
            </li>
            <li className="flex items-start text-gray-200 group hover:text-white transition-all duration-300 hover:translate-x-2">
              <ArrowRight className="w-5 h-5 text-emerald-300 mr-3 mt-1 flex-shrink-0 group-hover:text-teal-300 transition-colors" />
              <span className="text-lg">
                Real data from 8+ months (not cherry-picked wins)
              </span>
            </li>
          </ul>

          <p className="text-lg text-emerald-200 font-medium">
            Free masterclass. Real strategies. No fluff or sales pitch.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
          <a
            href="https://dailyprofits.link/class"
            onClick={handleGetFreeTraining}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2"
          >
            Watch Free Masterclass
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="https://dailyprofits.link/gbt"
            onClick={handleStartTrading}
            target="_blank"
            rel="noopener noreferrer"
            className="group border-2 border-white/40 hover:border-white/60 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/15 flex items-center justify-center gap-2 shadow-lg shadow-white/10"
          >
            Try Paper Trading Risk-Free
          </a>
        </div>

        {/* Guarantee */}
        <div className="flex items-center justify-center gap-3 text-green-300">
          <TrendingUp className="w-6 h-6" />
          <span className="text-lg font-semibold">
            Try Paper Trading First - Zero Risk, Real Results
          </span>
        </div>
      </div>
    </section>
  );
};
