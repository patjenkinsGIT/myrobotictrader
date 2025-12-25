// pages/TransparencyPage.tsx - Data Transparency Policy

import {
  Shield,
  Database,
  Wifi,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

export const TransparencyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/30 to-green-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-400/40 mb-6 shadow-lg shadow-blue-500/20">
            <Shield className="w-4 h-4 text-blue-300" />
            <span className="text-blue-200 font-medium">Data Transparency</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Data Transparency Policy
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Complete transparency about how we source, display, and verify all
            data shown on MyRoboticTrader.com
          </p>
        </div>

        {/* My Trading Data Section */}
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl border border-green-400/20 p-8 shadow-lg shadow-green-500/10 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 shadow-lg shadow-green-500/40">
              <CheckCircle className="w-full h-full text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              My Trading Results Data
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-green-300 mb-3">
                Live Data Source
              </h3>
              <p className="text-gray-300 mb-4">
                All my trading results are automatically updated from my actual
                trading account. Everything you see here is real. This
                includes:
              </p>

              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Total Profits:</strong> Real money earned from my
                    actual trading account
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Monthly Breakdown:</strong> Actual monthly profit
                    amounts, not estimates
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Trade Count:</strong> Real number of completed
                    trades
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Transaction Log:</strong> Live feed of recent trades
                    with actual prices and profits
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-green-500/20 rounded-xl p-4 border border-green-400/30">
              <h4 className="text-white font-semibold mb-2">
                Update Frequency
              </h4>
              <p className="text-green-200 text-sm">
                Trading data updates automatically every 4 hours with
                intelligent caching. Manual refresh available for immediate
                updates. Live indicators show when data was last updated and
                cache status.
              </p>
            </div>
          </div>
        </div>

        {/* Bitcoin Data Section */}
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-2xl border border-orange-400/20 p-8 shadow-lg shadow-orange-500/10 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 p-3 shadow-lg shadow-orange-500/40">
              <Database className="w-full h-full text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Bitcoin Comparison Data
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-orange-300 mb-3">
                Live Market Data
              </h3>
              <p className="text-gray-300 mb-4">
                Bitcoin prices and comparison calculations use live market data
                from reliable financial APIs:
              </p>

              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <Wifi className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Primary Source:</strong> CoinGecko API (free, public
                    financial data)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Wifi className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Current Prices:</strong> Real-time Bitcoin price in
                    USD
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Wifi className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Historical Data:</strong> Actual market prices
                    during comparison period
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Fallback:</strong> If API fails, clearly marked
                    historical estimates are used
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-300 mb-3">
                Calculation Methodology
              </h3>
              <p className="text-gray-300 mb-4">
                Bitcoin investment scenarios are calculated as follows:
              </p>

              <div className="bg-orange-500/20 rounded-xl p-4 border border-orange-400/30">
                <ul className="space-y-2 text-orange-200 text-sm">
                  <li>
                    <strong>Investment Amount:</strong> $10,000 (same amount for
                    fair comparison)
                  </li>
                  <li>
                    <strong>Start Date:</strong> January 8, 2025 (when I started
                    robotic trading)
                  </li>
                  <li>
                    <strong>Start Price:</strong> Actual Bitcoin price on
                    January 8, 2025
                  </li>
                  <li>
                    <strong>End Value:</strong> (Investment Amount × Current
                    Price) ÷ Start Price
                  </li>
                  <li>
                    <strong>Profit/Loss:</strong> End Value - Investment Amount
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Data Verification Section */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-blue-400/20 p-8 shadow-lg shadow-blue-500/10 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-3 shadow-lg shadow-blue-500/40">
              <Shield className="w-full h-full text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Data Verification</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-3">
                Live Indicators
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>
                    <strong>LIVE:</strong> Data fetched within last 4 hours
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>
                    <strong>CACHED:</strong> Recent data from intelligent cache
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>
                    <strong>ESTIMATES:</strong> Fallback data (clearly marked)
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-3">
                Timestamps
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• All data shows "Last Updated" timestamps</li>
                <li>• Trading results show cache status</li>
                <li>• Bitcoin data shows API source and time</li>
                <li>• Manual refresh available for verification</li>
              </ul>
            </div>
          </div>
        </div>

        {/* No Financial Advice Section */}
        <div className="bg-gradient-to-r from-gray-500/10 to-slate-500/10 backdrop-blur-sm rounded-2xl border border-gray-400/20 p-8 shadow-lg shadow-gray-500/10 mb-8">
          <div className="text-center">
            <AlertTriangle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Important Disclaimers
            </h2>

            <div className="space-y-4 text-gray-300 text-left max-w-3xl mx-auto">
              <p>
                <strong>Not Financial Advice:</strong> All data shown is for
                educational and transparency purposes only. Past performance
                does not guarantee future results. Trading involves risk of
                loss.
              </p>

              <p>
                <strong>Personal Results:</strong> The trading results shown are
                my personal results from my own trading account. Individual
                results may vary significantly.
              </p>

              <p>
                <strong>Third-Party Data:</strong> Bitcoin and market data comes
                from third-party APIs (CoinGecko). While we use reliable
                sources, we cannot guarantee 100% accuracy of external data.
              </p>

              <p>
                <strong>No Guarantees:</strong> This website makes no guarantees
                about future trading performance or results. Always consult with
                qualified financial professionals before making investment
                decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl border border-green-400/20 p-8 shadow-lg shadow-green-500/10">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Questions About Our Data?
            </h2>

            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We believe in complete transparency. If you have any questions
              about how our data is sourced, calculated, or displayed, we're
              happy to provide additional details.
            </p>

            <div className="flex items-center justify-center gap-4">
              <a
                href="mailto:patrick@myrobotictrader.com"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Contact Patrick
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="/"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Back to Results
              </a>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Transparency Policy Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};
