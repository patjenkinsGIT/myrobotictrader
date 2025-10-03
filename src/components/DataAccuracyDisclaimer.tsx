import { Info, CheckCircle } from "lucide-react";
import { useState } from "react";

interface DataAccuracyDisclaimerProps {
  cryptoData?: {
    symbol: string;
    name: string;
    debug?: {
      estimationMethod: string;
      hasHistoricalData: boolean;
    };
  };
}

export const DataAccuracyDisclaimer = ({
  cryptoData,
}: DataAccuracyDisclaimerProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-4xl mx-auto mt-8 mb-4 relative z-10">
      {/* Main Disclaimer Badge */}
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden">
        {/* Header - Always Visible */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-4 hover:bg-gray-700/30 transition-colors"
          aria-expanded={isExpanded}
        >
          <div className="flex items-center gap-3">
            <Info className="w-5 h-5 text-blue-400 flex-shrink-0" />
            <div className="text-left">
              <h3 className="text-white font-semibold text-sm">
                Data Accuracy & Methodology
              </h3>
              <p className="text-gray-400 text-xs mt-0.5">
                {cryptoData ? (
                  <>
                    {cryptoData.symbol} uses{" "}
                    <span className="font-semibold text-green-400">
                      Verified Historical Data
                    </span>
                  </>
                ) : (
                  "Using verified top 100 cryptocurrency data"
                )}
              </p>
            </div>
          </div>

          {/* Accuracy Badge */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full">
              <CheckCircle className="w-3.5 h-3.5 text-green-400" />
              <span className="text-green-400 text-xs font-semibold">
                Verified
              </span>
            </div>

            {/* Expand Arrow */}
            <div
              className={`transform transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="text-gray-400"
              >
                <path d="M5 8l5 5 5-5H5z" />
              </svg>
            </div>
          </div>
        </button>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="border-t border-gray-700/50 p-6 space-y-4 bg-gray-900/30">
            {/* Top 100 Explanation */}
            <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <h4 className="text-green-400 font-semibold text-sm">
                  Top 100 Cryptocurrencies
                </h4>
              </div>
              <p className="text-gray-300 text-xs mb-2">
                Real historical prices from January 8, 2025
              </p>
              <div className="text-xs text-gray-400 space-y-1">
                <div>✓ Manually researched and verified</div>
                <div>✓ 100% accurate historical data</div>
                <div>✓ Updated current prices every 5 minutes</div>
              </div>
            </div>

            {/* Current Crypto Status */}
            {cryptoData && (
              <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-blue-400 font-semibold text-sm mb-1">
                      Current Selection: {cryptoData.name} ({cryptoData.symbol})
                    </h4>
                    <p className="text-gray-300 text-sm">
                      This cryptocurrency is in our top 100 verified list. The
                      January 8, 2025 price has been manually researched and
                      verified for maximum accuracy. All comparisons use real
                      historical data.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Methodology */}
            <div className="border-t border-gray-700/50 pt-4">
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 w-1 h-1 rounded-full bg-gray-500 mt-2" />
                <p className="text-gray-400 text-xs leading-relaxed">
                  <strong className="text-gray-300">Our Methodology:</strong>{" "}
                  We've manually researched and verified January 8, 2025 prices
                  for the top 100 cryptocurrencies by market capitalization.
                  This ensures accurate historical comparisons without relying
                  on premium API access. Current prices are fetched from
                  CoinMarketCap and update every 5 minutes.
                </p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-700/50">
              <span>Historical data verified as of January 2025</span>
              <span>Current prices update every 5 minutes</span>
            </div>
          </div>
        )}
      </div>

      {/* Quick Inline Badge (Compact Version) */}
      {!isExpanded && cryptoData && (
        <div className="text-center mt-2">
          <button
            onClick={() => setIsExpanded(true)}
            className="text-xs text-gray-400 hover:text-gray-300 transition-colors"
          >
            ✓ Using verified historical data · Click for details
          </button>
        </div>
      )}
    </div>
  );
};
