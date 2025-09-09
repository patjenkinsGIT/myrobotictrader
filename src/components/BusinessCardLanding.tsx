import React from "react";
import {
  DollarSign,
  Target,
  TrendingUp,
  ExternalLink,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { tradingData, calculateDailyAverage } from "../data/tradingResults";
import {
  liveTradingData,
  calculateLiveDailyAverage,
} from "../data/liveTrading";
import { calculateTimeSinceStart } from "../utils/tradingTime";

export const BusinessCardLanding: React.FC = () => {
  // Use your existing data logic
  const currentData = liveTradingData.isLiveData
    ? liveTradingData
    : tradingData;
  const dailyAvg = liveTradingData.isLiveData
    ? calculateLiveDailyAverage()
    : calculateDailyAverage();

  // Get dynamic time since start
  const timeSinceStart = calculateTimeSinceStart();

  // Your actual affiliate link with tracking
  const affiliateLink =
    "https://dailyprofits.link/class?utm_source=business_card&utm_medium=nfc_qr&utm_campaign=live_results_2024";

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pb-10 pt-10">
      {/* Background effects - matching your Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-purple-500/15 to-transparent"></div>

      {/* Logo at top - Same as your Hero */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-purple-500/40 bg-gradient-to-br from-purple-500 to-pink-500 p-0.5">
            <div className="w-full h-full rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm">
              <img
                src="/robot-logo.png"
                alt="MyRoboticTrader Robot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-2xl font-bold">
            <span className="text-white">My</span>
            <span className="text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">
              Robotic
            </span>
            <span className="text-white">Trader</span>
            <span className="text-purple-300 text-sm ml-1">.com</span>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10 mt-16">
        {/* Header */}
        <div className="mb-8">
          {/* Live indicator - matching your badge style */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/30 to-emerald-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-green-400/40 mb-6 shadow-lg shadow-green-500/20">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-200 font-medium">
              {liveTradingData.isLiveData ? "LIVE DATA" : "REAL RESULTS"}
            </span>
          </div>

          {/* Welcome message */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Thanks for tapping my card! 👋
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-2">
              Here are my LIVE trading results:
            </p>
            <p className="text-lg text-purple-200">
              "Set It and Forget It" in action
            </p>
          </div>
        </div>

        {/* Main stats - matching your Hero card style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {/* Total Profits - Hero stat */}
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-green-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/40">
              <DollarSign className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-4xl font-bold text-green-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                ${currentData.totalProfit.toLocaleString()}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Total Profits
              </div>
              <div className="text-green-300 text-sm mt-1">
                {timeSinceStart} • Always Growing!
              </div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>

          {/* Total Trades */}
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-blue-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/40">
              <Target className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                {currentData.totalTrades.toLocaleString()}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Total Trades
              </div>
              <div className="text-blue-300 text-sm mt-1">
                Consistent & Automated
              </div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>

          {/* Daily Average - More impactful! */}
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/40">
              <TrendingUp className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                ${dailyAvg}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Daily Average
              </div>
              <div className="text-purple-300 text-sm mt-1">Steady Growth</div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>
        </div>

        {/* CTA Buttons - matching your Hero style */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2"
          >
            Get FREE Access Now
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/"
            className="group border-2 border-white/40 hover:border-white/60 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/15 flex items-center justify-center gap-2 shadow-lg shadow-white/10"
          >
            <Smartphone className="w-5 h-5" />
            View Full Site
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Secondary info */}
        <div className="text-center">
          <p className="text-sm text-yellow-300 font-medium mb-4">
            🔥 Limited Time: Free Access to Daily Profits Class
          </p>
          <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
            * Actual trading results from my personal account. Started January
            8, 2025. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </section>
  );
};
