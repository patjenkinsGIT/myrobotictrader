import * as React from "react";
import { ArrowRight, Bot, Shield, Clock, Users } from "lucide-react";
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
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-purple-500/15 to-transparent"></div>

      {/* Floating Icons - only in hero section */}
      <FloatingIcons />

      <div className="relative max-w-6xl mx-auto text-center z-10 mt-32">
        <div className="mb-8">
          {/* Updated badge to AI-Enhanced Autonomous Trading */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/40 mb-6 mt-4 shadow-lg shadow-purple-500/20">
            <Bot className="w-4 h-4 text-purple-300" />
            <span className="text-purple-200 font-medium">
              AI-Enhanced Autonomous Trading
            </span>
          </div>

          {/* Headline - Mobile gets shorter version, Desktop gets full version */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight px-4">
            {/* Mobile: Short version */}
            <span className="block md:hidden">
              Building Revenue Streams
              <span className="block text-transparent bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 bg-clip-text">
                Without Watching Charts
              </span>
            </span>

            {/* Desktop: Full version */}
            <span className="hidden md:block">
              How I'm Building Multiple
              <span className="block text-transparent bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 bg-clip-text">
                Revenue Streams
              </span>
              <span className="block text-white">Without Watching Charts</span>
            </span>
          </h1>

          {/* Updated sub-headline with LIVE profit number */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-4 max-w-4xl mx-auto px-4">
            {isLoading ? (
              <span className="text-gray-300">Loading live results...</span>
            ) : (
              <>
                <span className="text-green-300 font-bold">
                  $
                  {tradingStats?.totalProfit.toLocaleString("en-US", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                  + profit
                </span>{" "}
                in{" "}
                <span className="text-blue-300 font-bold">
                  {tradingStats?.monthlyData.length || 8}+ months
                </span>{" "}
                using AI-enhanced autonomous trading most people don't know
                exists.
              </>
            )}
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto px-4">
            See my live results below.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="https://dailyprofits.link/class"
            onClick={handleGetFreeTraining}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2"
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
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-green-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/40">
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
                  <div className="text-4xl font-bold text-green-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-300">
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
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>

          {/* Time Period - LIVE */}
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-blue-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/40">
              <Clock className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              {isLoading ? (
                <>
                  <div className="text-2xl font-bold text-blue-300 mb-2 animate-pulse">
                    Loading...
                  </div>
                  <div className="text-gray-200 font-medium">Profitable</div>
                </>
              ) : (
                <>
                  <div className="text-4xl font-bold text-blue-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300">
                    {tradingStats?.monthlyData.length || 8}+ Months
                  </div>
                  <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                    Profitable
                  </div>
                </>
              )}
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>

          {/* Zero Losses */}
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/40">
              <Users className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
                Zero
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Losing Months
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>
        </div>

        {/* Hero Infographic */}
        <div className="max-w-2xl mx-auto">
          <img
            src="/graphics/homepage-hero-01.webp"
            alt="Set It and Forget It - Manual Trading vs Autonomous Trading comparison"
            className="w-full rounded-2xl shadow-2xl shadow-purple-500/20 border border-white/10"
          />
        </div>
      </div>
    </section>
  );
};
