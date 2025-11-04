import * as React from "react";
import { ArrowRight, Shield, Clock, Users } from "lucide-react";
import { FloatingIcons } from "./FloatingIcons";
import { trackCTAClick, trackOutboundLink } from "../utils/analytics";
import { useGoogleSheetsData } from "../hooks/useGoogleSheetsData";

export const Hero: React.FC = () => {
  // Get live trading data
  const { tradingStats, isLoading } = useGoogleSheetsData();
  const handleGetFreeTraining = () => {
    trackCTAClick("get_free_training", "hero");
    trackOutboundLink("https://dailyprofits.link/class", "Get Free Training");
  };

  const handleStartTrading = () => {
    trackCTAClick("start_trading", "hero");
    trackOutboundLink("https://dailyprofits.link/gbt", "Start Trading");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pb-10 pt-10">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-emerald-500/10 to-transparent"></div>

      {/* Floating Icons - only in hero section */}
      <FloatingIcons />

      {/* Logo at top - Keep custom robot here */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-emerald-500/40 bg-gradient-to-br from-emerald-500 to-teal-500 p-0.5">
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
            <span className="text-emerald-400 font-bold">
              Robotic
            </span>
            <span className="text-white">Trader</span>
            <span className="text-emerald-400 text-sm ml-1">.com</span>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10 mt-16">
        <div className="mb-8">
          {/* Main Headline - Addresses the 9-to-5 grind everyone feels */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight px-4">
            <span className="block">
              Your 9-to-5 Pays the Bills.
            </span>
            <span className="block text-emerald-400">
              This Pays for Everything Else.
            </span>
          </h1>

          {/* Sub-headline - Addresses skepticism upfront */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-100 mb-8 max-w-4xl mx-auto px-4">
            Sounds too good to be true? I thought so too.
          </p>

          {/* LIVE numbers - Proof for skeptics - PROMINENT */}
          <div className="mb-10 max-w-4xl mx-auto px-4">
            {isLoading ? (
              <p className="text-lg text-gray-200">Loading live results...</p>
            ) : (
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border-2 border-emerald-500/50 rounded-2xl p-8 shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:border-emerald-500/70 transition-all duration-300">
                {/* LIVE Badge */}
                {tradingStats?.isLiveData && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-emerald-500 px-4 py-1.5 rounded-full shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-white font-bold text-sm uppercase tracking-wide">Live Data</span>
                  </div>
                )}

                <p className="text-xl sm:text-2xl text-gray-100 mb-4 font-medium">But here's my actual results:</p>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  <span className="text-emerald-400">
                    ${tradingStats?.totalProfit.toLocaleString("en-US", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>
                  <span className="text-gray-200"> profit in </span>
                  <span className="text-cyan-400">
                    {tradingStats?.monthlyData.length || 8} months
                  </span>
                </p>
                <p className="text-base text-gray-300 mt-4 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Updated live from my trading accounts
                </p>
              </div>
            )}
          </div>

          {/* What is this? - For newbies who don't know what automated trading is */}
          <div className="mb-16 max-w-3xl mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              What is this?
            </h2>
            <div className="text-left space-y-3 text-base sm:text-lg text-gray-200">
              <p>
                <span className="text-emerald-400 font-semibold">Automated crypto trading</span> means a computer program trades for you 24/7. You don't watch charts. You don't time the market. You don't do anything.
              </p>
              <p>
                The system buys crypto when conditions are right. Sells when you're in profit. Never sells at a loss.
              </p>
              <p>
                You wake up to profits. While you were sleeping, at work, or watching Netflix.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a
            href="https://dailyprofits.link/class"
            onClick={handleGetFreeTraining}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2"
          >
            Get Free Training
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="https://dailyprofits.link/gbt"
            onClick={handleStartTrading}
            target="_blank"
            rel="noopener noreferrer"
            className="group border-2 border-white/40 hover:border-white/60 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/15 flex items-center justify-center gap-2 shadow-lg shadow-white/10"
          >
            Start Trading
          </a>
        </div>

        {/* Real Performance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {/* Total Profit - LIVE */}
          <div className="relative bg-gradient-to-br from-emerald-900 to-emerald-950 rounded-2xl p-6 border-4 border-emerald-500 hover:border-emerald-400 transition-all duration-200 hover:scale-105 shadow-xl shadow-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-400/70">
            <div className="absolute inset-0 bg-emerald-500/20 rounded-2xl"></div>

            <div className="relative w-12 h-12 rounded-xl bg-emerald-500 p-3 mb-4 mx-auto transition-transform duration-200 shadow-lg shadow-emerald-500/40">
              <Shield className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              {isLoading ? (
                <>
                  <div className="text-2xl font-bold text-green-300 mb-2 animate-pulse">
                    Loading...
                  </div>
                  <div className="text-gray-200 font-medium">Total Profit</div>
                </>
              ) : (
                <>
                  <div className="text-4xl font-bold text-emerald-200 mb-2 transition-all duration-200">
                    $
                    {tradingStats?.totalProfit.toLocaleString("en-US", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                    +
                  </div>
                  <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                    Total Profit
                  </div>
                  {tradingStats?.isLiveData && (
                    <div className="mt-2 flex items-center justify-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-300">LIVE</span>
                    </div>
                  )}
                </>
              )}
            </div>

          </div>

          {/* Time Period - LIVE */}
          <div className="relative bg-gradient-to-br from-cyan-900 to-cyan-950 rounded-2xl p-6 border-4 border-cyan-500 hover:border-cyan-400 transition-all duration-200 hover:scale-105 shadow-xl shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-400/70">
            <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl"></div>

            <div className="relative w-12 h-12 rounded-xl bg-cyan-500 p-3 mb-4 mx-auto transition-transform duration-200 shadow-lg shadow-cyan-500/40">
              <Clock className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              {isLoading ? (
                <>
                  <div className="text-2xl font-bold text-cyan-300 mb-2 animate-pulse">
                    Loading...
                  </div>
                  <div className="text-gray-200 font-medium">Profitable</div>
                </>
              ) : (
                <>
                  <div className="text-4xl font-bold text-cyan-200 mb-2 transition-all duration-200">
                    {tradingStats?.monthlyData.length || 8}+ Months
                  </div>
                  <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                    Profitable
                  </div>
                </>
              )}
            </div>

          </div>

          {/* Zero Losses */}
          <div className="relative bg-gradient-to-br from-teal-900 to-teal-950 rounded-2xl p-6 border-4 border-teal-500 hover:border-teal-400 transition-all duration-200 hover:scale-105 shadow-xl shadow-teal-500/50 hover:shadow-2xl hover:shadow-teal-400/70">
            <div className="absolute inset-0 bg-teal-500/20 rounded-2xl"></div>

            <div className="relative w-12 h-12 rounded-xl bg-teal-500 p-3 mb-4 mx-auto transition-transform duration-200 shadow-lg shadow-teal-500/40">
              <Users className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-4xl font-bold text-teal-200 mb-2 transition-all duration-200">
                Zero
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Losing Months
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
