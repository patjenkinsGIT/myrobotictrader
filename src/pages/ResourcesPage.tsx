import * as React from "react";
import {
  ExternalLink,
  Shield,
  Calculator,
  TrendingUp,
  BookOpen,
  Wallet,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const ResourcesPage: React.FC = function () {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-pink-900/40"></div>

        {/* Subtle robot accent */}
        <div className="absolute top-10 right-10 opacity-10 pointer-events-none hidden lg:block">
          <img
            src="/robot-trading.png"
            alt=""
            className="w-24 h-24 animate-pulse"
          />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
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
            After 8 months of successful automated trading, these are the
            essential tools and services that have made my crypto journey
            profitable and stress-free.
          </p>

          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-blue-400/20 p-6 max-w-2xl mx-auto">
            <p className="text-blue-200 font-medium">
              💡 <strong>My Promise:</strong> I only recommend tools I
              personally use and believe provide real value. Your success is my
              success.
            </p>
          </div>
        </div>
      </section>

      {/* Trading Platforms Section */}
      <section className="py-16 px-4">
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
              These are the exchanges I use for my automated trading system.
              Reliable, secure, and perfect for robotic trading.
            </p>
          </div>

          {/* Coinbase One Card */}
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl border border-blue-400/20 p-8 mb-8 shadow-lg shadow-blue-500/10 relative">
            <div className="absolute top-6 right-6">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                RECOMMENDED
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-3">
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

              <div className="bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-xl p-6 border border-blue-400/10">
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
        </div>
      </section>

      {/* Tax & Accounting Section */}
      <section className="py-16 px-4">
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

          {/* CoinTracker Card */}
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-2xl border border-orange-400/20 p-8 shadow-lg shadow-orange-500/10 relative">
            <div className="absolute top-6 right-6">
              <div className="bg-gradient-to-r from-green-400 to-emerald-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                ESSENTIAL
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-3">
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

              <div className="bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-xl p-6 border border-orange-400/10">
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

      {/* Coming Soon Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/40 mb-6 shadow-lg shadow-purple-500/20">
              <Star className="w-4 h-4 text-purple-300" />
              <span className="text-purple-200 font-medium">Coming Soon</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              More Tools I'm Evaluating
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I'm constantly testing new tools to improve my trading setup.
              Here's what's coming next to this resource page.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl border border-gray-600/20 p-6 text-center">
              <Shield className="w-8 h-8 text-gray-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Hardware Wallets
              </h3>
              <p className="text-gray-400 text-sm">
                Ledger & Trezor for cold storage security
              </p>
            </div>

            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl border border-gray-600/20 p-6 text-center">
              <TrendingUp className="w-8 h-8 text-gray-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Trading Tools
              </h3>
              <p className="text-gray-400 text-sm">
                TradingView & analysis platforms
              </p>
            </div>

            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl border border-gray-600/20 p-6 text-center">
              <BookOpen className="w-8 h-8 text-gray-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Education
              </h3>
              <p className="text-gray-400 text-sm">
                Courses & books that shaped my strategy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl border border-purple-400/30 p-8 shadow-lg shadow-purple-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Trading Journey?
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              These tools have been essential to my $4,000+ profit success.
              Start with the free masterclass to learn the system, then set up
              your tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://dailyprofits.link/class"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30"
              >
                Free Masterclass First
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://dailyprofits.link/gbt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white/60 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/15 shadow-lg shadow-white/10"
              >
                Start Trading Now
                <TrendingUp className="w-4 h-4" />
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
