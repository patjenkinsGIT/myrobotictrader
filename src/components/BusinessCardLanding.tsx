// src/components/BusinessCardLanding.tsx
import React from "react";
import {
  DollarSign,
  Target,
  Zap,
  ExternalLink,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { tradingData } from "../data/tradingResults";
import { liveTradingData } from "../data/liveTrading";

export const BusinessCardLanding: React.FC = () => {
  // Use your existing data logic
  const currentData = liveTradingData.isLiveData
    ? liveTradingData
    : tradingData;

  // Your actual affiliate link with tracking
  const affiliateLink =
    "https://dailyprofits.link/class?utm_source=business_card&utm_medium=nfc_qr&utm_campaign=live_results_2024";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          {/* Live indicator */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-green-400/30 mb-6">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 font-medium text-sm">
              {liveTradingData.isLiveData ? "LIVE DATA" : "REAL RESULTS"}
            </span>
          </div>

          {/* Robot branding */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              MyRoboticTrader.com
            </h1>
            <p className="text-2xl text-cyan-300 font-semibold mb-4">
              "Set It and Forget It"
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-gray-200 text-xl font-medium">
              Thanks for tapping my card! 👋
            </p>
            <p className="text-purple-200 text-lg">
              Here are my LIVE trading results:
            </p>
          </div>
        </div>

        {/* Main stats */}
        <div className="flex-1 max-w-md mx-auto w-full">
          <div className="space-y-6">
            {/* Total Profits - Hero stat */}
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-sm rounded-3xl border border-green-400/30 p-8 text-center shadow-xl shadow-green-500/20">
              <DollarSign className="w-16 h-16 text-green-300 mx-auto mb-4" />
              <div className="text-5xl md:text-6xl font-bold text-green-300 font-mono mb-3">
                ${currentData.totalProfit.toLocaleString()}
              </div>
              <div className="text-green-200 font-semibold text-xl mb-2">
                Total Profits
              </div>
              <div className="text-green-300 text-base font-medium">
                8+ Months • Always Growing! 📈
              </div>
            </div>

            {/* Total Trades & Average */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl border border-blue-400/30 p-6 text-center shadow-lg shadow-blue-500/20">
                <Target className="w-12 h-12 text-blue-300 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-300 font-mono mb-2">
                  {currentData.totalTrades.toLocaleString()}
                </div>
                <div className="text-blue-200 font-medium text-lg">
                  Total Trades
                </div>
                <div className="text-blue-300 text-sm mt-1">
                  Consistent & Automated
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-violet-600/20 backdrop-blur-sm rounded-2xl border border-purple-400/30 p-6 text-center shadow-lg shadow-purple-500/20">
                <Zap className="w-12 h-12 text-purple-300 mx-auto mb-3" />
                <div className="text-3xl font-bold text-purple-300 font-mono mb-2">
                  ${currentData.avgProfitPerTrade.toFixed(2)}
                </div>
                <div className="text-purple-200 font-medium text-lg">
                  Avg Per Trade
                </div>
                <div className="text-purple-300 text-sm mt-1">
                  Steady Performance
                </div>
              </div>
            </div>

            {/* Last updated */}
            {liveTradingData.isLiveData && (
              <div className="text-center">
                <p className="text-xs text-gray-400">
                  Last updated:{" "}
                  {new Date(liveTradingData.lastUpdated).toLocaleString()}
                </p>
              </div>
            )}

            {/* Call to Action - Main conversion button */}
            <div className="pt-4">
              <a
                href={affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-5 px-6 rounded-3xl text-center text-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/25"
              >
                <div className="flex items-center justify-center gap-3">
                  <span>Get FREE Access Now</span>
                  <ExternalLink className="w-6 h-6" />
                </div>
              </a>
            </div>

            {/* Secondary CTA with urgency */}
            <div className="text-center">
              <p className="text-sm text-yellow-300 font-medium mb-3">
                🔥 Limited Time: Free Access to Daily Profits Class
              </p>
            </div>

            {/* Secondary link back to main site */}
            <div className="text-center pt-4">
              <p className="text-base text-gray-300 mb-4">
                Want to see the full system in action?
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 text-base font-medium transition-colors"
              >
                <Smartphone className="w-5 h-5" />
                View Full Site
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Disclaimer */}
            <div className="text-center pt-8">
              <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                * Actual trading results from my personal account. Started
                January 8, 2025. Past performance does not guarantee future
                results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
