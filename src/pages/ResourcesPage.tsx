import * as React from "react";
import {
  ExternalLink,
  Calculator,
  TrendingUp,
  BookOpen,
  Wallet,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useGoogleSheetsData } from "../hooks/useGoogleSheetsData";
import { calculateTimeSinceStart } from "../utils/tradingTime";
import { FullNav } from "../components/FullNav";

export const ResourcesPage: React.FC = function () {
  // Get live trading data
  const { tradingStats } = useGoogleSheetsData();

  // Calculate time since starting trading
  const timeSinceStart = calculateTimeSinceStart();

  // Format profit for display
  const formattedProfit = tradingStats?.totalProfit
    ? `$${Math.round(tradingStats.totalProfit).toLocaleString()}+`
    : "$5,000+";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <FullNav />
      {/* Hero Section - MATCHING HOMEPAGE STRUCTURE */}
      <section className="py-12 px-4 relative overflow-hidden">

        {/* Subtle robot accent */}
        <div className="absolute top-10 right-10 opacity-10 pointer-events-none hidden lg:block">
          <img
            src="/robot-trading.png"
            alt=""
            className="w-24 h-24 animate-pulse"
          />
        </div>

        <div className="relative max-w-6xl mx-auto text-center z-10 mt-8">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/40 mb-6 shadow-lg shadow-purple-500/20">
              <BookOpen className="w-4 h-4 text-purple-300" />
              <span className="text-purple-200 font-medium">
                Recommended Tools
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Tools I Use &
              <span className="block text-transparent bg-gradient-to-r from-green-300 via-blue-400 to-purple-400 bg-clip-text">
                Personally Recommend
              </span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              After {timeSinceStart} of successful automated trading, these are
              the essential tools and services that have made my crypto journey
              profitable and stress-free.
            </p>

            <div className="bg-gradient-to-r from-gray-900/30 to-purple-900/20 rounded-2xl border border-white/10 p-6 max-w-2xl mx-auto">
              <p className="text-blue-200 font-medium">
                💡 <strong>My Promise:</strong> I only recommend tools I
                personally use and believe provide real value. Your success is
                my success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Platforms Section - Reduced bottom padding */}
      <section className="py-16 px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/30 to-emerald-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-green-400/40 mb-6 shadow-lg shadow-green-500/20">
              <TrendingUp className="w-4 h-4 text-green-300" />
              <span className="text-green-200 font-medium">
                Trading Platforms
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Where I Trade & Why
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              You need at least one of these exchanges to work with the
              AI-Enhanced Autonomous Trader. Both are reliable, secure, and
              perfect for automated trading.
            </p>
          </div>

          {/* Coinbase Infographic */}
          <div className="max-w-2xl mx-auto mb-10">
            <img
              src="/graphics/resources-coinbase-01.webp"
              alt="Why Coinbase One - Zero fees comparison showing $3,300+ annual savings"
              className="w-full rounded-2xl shadow-xl shadow-blue-500/10 border border-white/10"
            />
          </div>

          {/* Coinbase One Card */}
          <div className="bg-gradient-to-r from-gray-900/30 to-purple-900/20 rounded-2xl border border-white/10 p-8 mb-8 shadow-lg shadow-purple-500/10 relative">
            {/* FIXED: Better mobile positioning for badge */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6">
              <div className="bg-gradient-to-r from-green-400 to-emerald-400 text-black px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold">
                ESSENTIAL
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* FIXED: Added top margin to prevent badge overlap on mobile */}
              <div className="mt-8 md:mt-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl p-3">
                    <Wallet className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Coinbase One
                  </h3>
                </div>

                <p className="text-gray-200 mb-6 leading-relaxed">
                  My primary exchange for automated trading. Coinbase One gives
                  you zero trading fees, which is crucial when you're making
                  multiple trades daily. The API integration is rock-solid for
                  robotic trading.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="text-gray-200">
                      $0 trading fees (saves me hundreds monthly)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="text-gray-200">
                      Perfect API for automated trading
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="text-gray-200">
                      Trusted by millions of traders
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="text-gray-200">
                      Advanced trading tools included
                    </span>
                  </div>
                </div>

                <a
                  href="https://dailyprofits.link/coinbase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30"
                >
                  Get Coinbase One
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Why I Choose Coinbase One:
                </h4>
                <div className="space-y-3 text-sm text-gray-300">
                  <p>
                    💰 <strong>Zero fees</strong> mean more profits stay in my
                    pocket
                  </p>
                  <p>
                    🤖 <strong>API reliability</strong> is crucial for automated
                    trading
                  </p>
                  <p>
                    🛡️ <strong>Security</strong> - my funds have always been
                    safe
                  </p>
                  <p>
                    📱 <strong>Mobile app</strong> lets me monitor trades
                    anywhere
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kraken Card */}
          <div className="bg-gradient-to-r from-gray-900/30 to-purple-900/20 rounded-2xl border border-white/10 p-8 shadow-lg shadow-purple-500/10 relative">
            {/* FIXED: Better mobile positioning for badge */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6">
              <div className="bg-gradient-to-r from-blue-400 to-indigo-400 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold">
                GREAT ALTERNATIVE
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* FIXED: Added top margin to prevent badge overlap on mobile */}
              <div className="mt-8 md:mt-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-indigo-500 rounded-xl p-3">
                    <Wallet className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Kraken</h3>
                </div>

                <p className="text-gray-200 mb-6 leading-relaxed">
                  My alternative exchange for automated trading. Kraken offers
                  excellent API reliability and competitive fees. Great option
                  if you prefer a different platform or want to diversify across
                  exchanges.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="text-gray-200">
                      Low trading fees and excellent API
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="text-gray-200">
                      Strong security and reputation
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="text-gray-200">
                      Works perfectly with robotic trader
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="text-gray-200">
                      Advanced trading features
                    </span>
                  </div>
                </div>

                <a
                  href="https://dailyprofits.link/krak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/30"
                >
                  Get Kraken Account
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Why Kraken Works Great:
                </h4>
                <div className="space-y-3 text-sm text-gray-300">
                  <p>
                    🔒 <strong>Security first</strong> - excellent track record
                  </p>
                  <p>
                    ⚡ <strong>Fast API</strong> - reliable for automated
                    trading
                  </p>
                  <p>
                    💰 <strong>Competitive fees</strong> - keep more of your
                    profits
                  </p>
                  <p>
                    🌍 <strong>Global reach</strong> - available in most
                    countries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax & Accounting Section - Reduced top padding */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/30 to-red-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-400/40 mb-6 shadow-lg shadow-orange-500/20">
              <Calculator className="w-4 h-4 text-orange-300" />
              <span className="text-orange-200 font-medium">
                Tax & Accounting
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Compliant & Organized
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Crypto taxes can be complex. These tools make it simple and ensure
              you're always compliant with tax regulations.
            </p>
          </div>

          {/* Tax Tracking Infographic */}
          <div className="max-w-2xl mx-auto mb-10">
            <img
              src="/graphics/resources-taxes-01.webp"
              alt="500 Trades Tax Nightmare - DIY vs CoinTracker comparison"
              className="w-full rounded-2xl shadow-xl shadow-orange-500/10 border border-white/10"
            />
          </div>

          {/* CoinTracker Card */}
          <div className="bg-gradient-to-r from-gray-900/30 to-purple-900/20 rounded-2xl border border-white/10 p-8 shadow-lg shadow-purple-500/10 relative">
            {/* FIXED: Better mobile positioning for badge */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6">
              <div className="bg-gradient-to-r from-green-400 to-emerald-400 text-black px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold">
                ESSENTIAL
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* FIXED: Added top margin to prevent badge overlap on mobile */}
              <div className="mt-8 md:mt-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl p-3">
                    <Calculator className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">CoinTracker</h3>
                </div>

                <p className="text-gray-200 mb-6 leading-relaxed">
                  After making hundreds of profitable trades, tax reporting
                  became crucial. CoinTracker automatically tracks everything
                  and generates the reports I need for my accountant. It's saved
                  me countless hours.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="text-gray-200">
                      Automatic trade tracking across exchanges
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="text-gray-200">
                      Tax forms ready for filing (8949, Schedule D)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="text-gray-200">
                      Real-time profit/loss tracking
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="text-gray-200">
                      Connects to Coinbase & Kraken
                    </span>
                  </div>
                </div>

                <a
                  href="https://dailyprofits.link/cointracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30"
                >
                  Get CoinTracker
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Why Tax Tracking Matters:
                </h4>
                <div className="space-y-3 text-sm text-gray-300">
                  <p>
                    📊 <strong>Automated reporting</strong> saves hours of
                    manual work
                  </p>
                  <p>
                    💼 <strong>Professional tax forms</strong> ready for your
                    accountant
                  </p>
                  <p>
                    🎯 <strong>Accurate calculations</strong> ensure proper tax
                    compliance
                  </p>
                  <p>
                    💰 <strong>Maximize deductions</strong> and minimize tax
                    liability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 rounded-2xl border border-white/10 p-8 shadow-lg shadow-purple-500/10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Trading Journey?
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              These tools have been essential to my {formattedProfit} profit
              success. GoBabyTrade is the AI-enhanced autonomous trading system I use.
              Use my link to save $1,000!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://dailyprofits.link/gbt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30"
              >
                Start Trading – Save $1,000
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-8 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h4 className="text-white font-semibold mb-3">
              📋 Affiliate Disclosure
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              I earn commissions from recommended products and services on this
              page. This doesn't affect your costs or my recommendations. I only
              promote tools I personally use and believe provide real value to
              traders.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              <strong>Transparency Promise:</strong> Every tool listed here is
              something I actively use in my own trading setup. Your success
              with these tools directly impacts my reputation, so I'm
              incentivized to recommend only the best.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
