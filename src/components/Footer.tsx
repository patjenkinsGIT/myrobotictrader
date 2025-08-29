import * as React from "react";
import { Bot, ExternalLink } from "lucide-react";

export const Footer: React.FC = function () {
  return (
    <footer className="relative py-16 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Bot className="w-8 h-8 text-purple-400" />
          <h3 className="text-2xl font-bold text-white">MyRoboticTrader.com</h3>
        </div>

        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Revolutionizing cryptocurrency trading through advanced AI automation.
          Join thousands of successful traders who trust our platform for
          consistent profits.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
          <a
            href="https://crypto.gobabytrade.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group"
          >
            Start Trading
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://financialintelligence4u.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group"
          >
            About Our Company
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="text-gray-400 text-sm mb-4">
            © 2025 MyRoboticTrader.com. All rights reserved.
          </div>

          <div className="text-xs text-gray-500 max-w-4xl mx-auto">
            <p>
              <strong>Risk Warning:</strong> Trading cryptocurrencies involves
              substantial risk and may not be suitable for all investors. Past
              performance does not guarantee future results. Please consider
              your investment objectives and risk tolerance before trading.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
