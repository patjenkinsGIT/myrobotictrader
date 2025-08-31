import * as React from "react";
import { Bot, ExternalLink, Twitter } from "lucide-react";

export const Footer: React.FC = function () {
  return (
    <footer className="relative py-16 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Bot className="w-8 h-8 text-purple-400" />
            <h3 className="text-2xl font-bold text-white">
              MyRoboticTrader.com
            </h3>
          </div>

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Revolutionizing cryptocurrency trading through advanced AI
            automation. Join thousands of successful traders who trust our
            platform for consistent profits.
          </p>

          {/* Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <a
              href="https://gobabytrade.com/fi4u"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group"
            >
              Start Trading Platform
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://financialintelligence4u.com/masterclass?am_id=patrick1567"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group"
            >
              Free Masterclass
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://x.com/myrobotictrader"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group"
            >
              <Twitter className="w-4 h-4" />
              Follow Us on X
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Disclaimers Section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-gray-500 max-w-5xl mx-auto">
            {/* Affiliate Disclosure */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 className="text-gray-300 font-semibold mb-2">
                Affiliate Disclosure
              </h4>
              <p className="leading-relaxed">
                MyRoboticTrader.com is an independent affiliate marketer. We may
                receive compensation when you click on links or purchase
                products/services through our referral links. This does not
                affect the price you pay or our honest recommendations. We only
                promote products and services we believe provide value to our
                users.
              </p>
            </div>

            {/* Risk Warning */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 className="text-gray-300 font-semibold mb-2">Risk Warning</h4>
              <p className="leading-relaxed">
                Trading cryptocurrencies involves substantial risk and may not
                be suitable for all investors. Past performance does not
                guarantee future results. Please consider your investment
                objectives and risk tolerance before trading. Never invest more
                than you can afford to lose.
              </p>
            </div>

            {/* Facebook/Meta Disclaimer */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 className="text-gray-300 font-semibold mb-2">
                Facebook Disclaimer
              </h4>
              <p className="leading-relaxed">
                This website is not affiliated with, endorsed, or sponsored by
                Facebook, Inc. or Meta Platforms, Inc. Facebook is a trademark
                of Meta Platforms, Inc. Any Facebook references are used for
                identification purposes only and do not imply endorsement or
                affiliation.
              </p>
            </div>

            {/* General Disclaimer */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 className="text-gray-300 font-semibold mb-2">
                Educational Purpose
              </h4>
              <p className="leading-relaxed">
                The information provided on this website is for educational and
                informational purposes only. It should not be considered as
                financial, investment, or trading advice. Always consult with
                qualified financial professionals before making investment
                decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <div className="text-gray-400 text-sm mb-2">
            © 2025 MyRoboticTrader.com. All rights reserved.
          </div>
          <div className="text-xs text-gray-500">
            Independent affiliate marketing website. Not affiliated with any
            trading platform or exchange.
          </div>
        </div>
      </div>
    </footer>
  );
};
