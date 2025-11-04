import * as React from "react";
import {
  ExternalLink,
  Twitter,
  ArrowRight,
  Shield,
  ArrowUp,
} from "lucide-react";

export const Footer: React.FC = function () {
  return (
    <footer className="relative py-20 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content with Logo */}
        <div className="text-center mb-8">
          {/* Footer Logo - CLICKABLE */}
          <a
            href="/"
            className="inline-flex items-center justify-center gap-3 mb-6 group"
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden shadow-lg shadow-emerald-500/40 bg-gradient-to-br from-emerald-500 to-teal-500 p-0.5 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded overflow-hidden bg-white/10 backdrop-blur-sm">
                <img
                  src="/robot-logo.png"
                  alt="MyRoboticTrader Robot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-xl font-bold group-hover:scale-105 transition-transform">
              <span className="text-white">My</span>
              <span className="text-emerald-400 font-bold">
                Robotic
              </span>
              <span className="text-white">Trader</span>
              <span className="text-emerald-400 text-sm ml-1">.com</span>
            </div>
          </a>

          {/* Updated description */}
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            AI-Enhanced automated crypto trading that never sells at a loss. Your funds stay secure in your exchange while the system trades 24/7.
          </p>

          {/* Links - WITH PRIVACY POLICY LINK ADDED */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
            <a
              href="https://dailyprofits.link/class"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
            >
              Free Masterclass
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://dailyprofits.link/gbt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
            >
              Start Trading Now
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="/resources"
              className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
            >
              Recommended Tools
              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="/privacy"
              className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
            >
              <Shield className="w-4 h-4" />
              Privacy Policy
              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://x.com/myrobotictrader"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
            >
              <Twitter className="w-4 h-4" />
              Follow Us on X
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Disclaimers Section */}
        <div className="border-t border-white/10 pt-10 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-500 max-w-5xl mx-auto">
            {/* Enhanced Affiliate Disclosure */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 className="text-gray-300 font-semibold mb-2">
                Affiliate Disclosure
              </h4>
              <p className="leading-relaxed mb-3">
                We earn commissions from recommended products and services. This doesn't affect your costs. We only promote solutions we believe provide real value.
              </p>
              <p className="leading-relaxed text-emerald-300">
                <strong>Specific:</strong> We're an affiliate of Financial Intelligence 4U (financialintelligence4u.com) and earn commissions when you register for their masterclass or purchase their products.
              </p>
            </div>

            {/* Risk Warning */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 className="text-gray-300 font-semibold mb-2">Risk Warning</h4>
              <p className="leading-relaxed">
                Crypto trading involves risk. Past performance doesn't guarantee future results. Only trade with funds you can afford to lose. Always do your own research (DYOR).
              </p>
            </div>

            {/* Platform Disclaimer */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 className="text-gray-300 font-semibold mb-2">
                Platform Disclaimer
              </h4>
              <p className="leading-relaxed">
                Not affiliated with Facebook, Meta, Coinbase, Kraken, or any trading platform unless stated. Trademarks belong to their respective owners.
              </p>
            </div>

            {/* Educational Purpose */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 className="text-gray-300 font-semibold mb-2">
                Educational Purpose
              </h4>
              <p className="leading-relaxed">
                Information is educational only, not financial advice. Results vary. Consult qualified professionals before making investment decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright with Mini Logo - CLICKABLE */}
        <div className="border-t border-white/10 pt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 mb-3 group"
          >
            <div className="w-5 h-5 rounded overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-500 p-0.5 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded overflow-hidden bg-white/10 backdrop-blur-sm">
                <img
                  src="/robot-logo.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="text-gray-400 text-sm group-hover:text-emerald-400 transition-colors">
              © 2025{" "}
              <span className="text-white font-semibold">
                MyRoboticTrader
              </span>
              .com
            </span>
          </a>
          <div className="text-xs text-gray-500 mb-6">
            Independent affiliate site. Not affiliated with any trading platform unless disclosed above.
          </div>

          {/* Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition-colors group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            <span className="text-sm font-medium">Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
