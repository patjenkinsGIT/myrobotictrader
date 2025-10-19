import React from "react";
import {
  PiggyBank,
  TrendingUp,
  ShoppingCart,
  Wallet,
  Activity,
  Zap,
} from "lucide-react";

// Define only what we need locally - no external imports
interface ProfitManagementProps {
  tradingStats?: any; // Accept any type to avoid conflicts
}

export const ProfitManagement: React.FC<ProfitManagementProps> = ({
  tradingStats,
}) => {
  // Extract data from portfolioSummary if available, otherwise use fallback
  const realizedProfits =
    tradingStats?.portfolioSummary?.realizedProfits || 4359.23;
  const profitsWithdrawn =
    tradingStats?.portfolioSummary?.profitsWithdrawn || 1106.99;
  const totalTradingVolume =
    tradingStats?.portfolioSummary?.totalTradingVolume || 142000;
  const totalCapitalDeposited =
    tradingStats?.portfolioSummary?.totalCapitalDeposited || 29538;
  const profitsSaved = tradingStats?.portfolioSummary?.profitsSaved || 1490.81;

  // Use Open Trading Positions (Row 5) as the active capital - this is what you update from Coinbase!
  const avgActiveCapital =
    tradingStats?.portfolioSummary?.openTradingPositions || 12000;

  // Your 50% savings rule
  const savingsRate = 50;

  // Calculated values
  const profitsReinvested = realizedProfits * 0.5;

  // Capital Efficiency Calculations
  // Capital Turnover = Total Volume / Active Capital (Row 5 - Open Trading Positions)
  // This shows how many times you've "turned over" your actively deployed capital
  const capitalTurnover =
    avgActiveCapital > 0 ? totalTradingVolume / avgActiveCapital : 0;

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-teal-900/20"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Smart Profit Management
          </h2>
          <p className="text-gray-100 text-lg max-w-3xl mx-auto">
            I don't just make profits—I manage them systematically. Here's how
            the 50/50 rule builds wealth while enjoying life.
          </p>
        </div>

        {/* Main Metrics Grid - Matching TradingResults Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Total Realized Profits */}
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-emerald-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/40">
              <TrendingUp className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-3xl font-bold text-emerald-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-teal-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                $
                {realizedProfits.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Total Trading Profits
              </div>
              <div className="text-emerald-300 text-sm mt-1">
                From{" "}
                {tradingStats?.portfolioSummary?.totalTrades?.toLocaleString() ||
                  "900+"}{" "}
                Trades
              </div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>

          {/* Profits Saved (50%) */}
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-blue-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/40">
              <PiggyBank className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                $
                {profitsSaved.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Profits Saved
              </div>
              <div className="text-blue-300 text-sm mt-1">
                {savingsRate}% Savings Rule
              </div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>

          {/* Profits Enjoyed */}
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/40">
              <ShoppingCart className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                $
                {profitsWithdrawn.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Profits Enjoyed
              </div>
              <div className="text-purple-300 text-sm mt-1">
                Living Life Too
              </div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>

          {/* Profits Reinvested */}
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-indigo-500/15">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/40">
              <Wallet className="w-full h-full text-white" />
            </div>

            <div className="relative text-center">
              <div className="text-3xl font-bold text-indigo-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-violet-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                $
                {profitsReinvested.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
              <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                Profits Reinvested
              </div>
              <div className="text-indigo-300 text-sm mt-1">
                Compounding Growth
              </div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>
        </div>

        {/* Capital Efficiency Section - Matching TradingResults Style */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Capital Efficiency Performance
            </h3>
            <p className="text-gray-200 text-lg">
              How effectively your capital works for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Total Trading Volume */}
            <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-cyan-500/15">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/40">
                <Activity className="w-full h-full text-white" />
              </div>

              <div className="relative text-center">
                <div className="text-3xl font-bold text-cyan-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-blue-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                  ${(totalTradingVolume / 1000).toFixed(0)}K
                </div>
                <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                  Total Trading Volume
                </div>
                <div className="text-cyan-300 text-sm mt-1">
                  Lifetime Market Activity
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
            </div>

            {/* Capital Turnover */}
            <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-yellow-500/15">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/40 flex items-center justify-center">
                <Zap className="w-full h-full text-white" />
              </div>

              <div className="relative text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:to-orange-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                  {capitalTurnover.toFixed(1)}x
                </div>
                <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                  Capital Turnover
                </div>
                <div className="text-yellow-300 text-sm mt-1">
                  Money Recycled 12 Times
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
            </div>

            {/* Active Capital */}
            <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-green-500/15">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>

              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/40">
                <TrendingUp className="w-full h-full text-white" />
              </div>

              <div className="relative text-center">
                <div className="text-3xl font-bold text-green-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                  ~${(avgActiveCapital / 1000).toFixed(0)}K
                </div>
                <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                  Active at One Time
                </div>
                <div className="text-green-300 text-sm mt-1">
                  Conservative Deployment
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
            </div>
          </div>

          {/* Explanation Card - Matching style */}
          <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-gray-200 text-lg text-center leading-relaxed">
              I've generated{" "}
              <span className="text-cyan-300 font-bold">
                ${totalTradingVolume.toLocaleString()}
              </span>{" "}
              in trading volume using only{" "}
              <span className="text-green-300 font-bold">
                ~${avgActiveCapital.toLocaleString()}
              </span>{" "}
              actively deployed at any time — that's{" "}
              <span className="text-yellow-300 font-bold">
                {capitalTurnover.toFixed(1)}x turnover
              </span>
              . My money gets recycled almost 12 times through strategic
              trading, while most of my $
              {totalCapitalDeposited.toLocaleString()} stays in safe reserves.
            </p>
          </div>
        </div>

        {/* 50/50 Rule Explanation - Matching style */}
        <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            How The 50/50 Rule Works
          </h3>
          <div className="space-y-2 text-gray-200">
            <p className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">50%</span>
              <span>
                of every profit stays in the account—automatically reinvested
                for compound growth
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-blue-400 font-bold">50%</span>
              <span>
                is available to save or spend—building wealth while enjoying
                life
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
