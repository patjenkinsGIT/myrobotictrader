// ==========================================
// TYPESCRIPT INTERFACES
// ==========================================

interface CryptoData {
  symbol: string;
  name: string;
  currentPrice?: number;
  debug?: {
    estimationMethod: string;
    hasHistoricalData?: boolean;
  };
}

// ==========================================
// OPTION 1: Inline Badge (Minimal)
// ==========================================
// Place this right below the crypto price display

interface InlineAccuracyBadgeProps {
  cryptoData?: CryptoData;
}

export const InlineAccuracyBadge = ({
  cryptoData,
}: InlineAccuracyBadgeProps) => {
  const isVerified =
    cryptoData?.debug?.estimationMethod === "historical_data_file";

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800/50 rounded-full text-xs">
      {isVerified ? (
        <>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-gray-300">Verified Jan 8 price</span>
        </>
      ) : (
        <>
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          <span className="text-gray-300">Estimated from 30-day trend</span>
        </>
      )}
    </div>
  );
};

// ==========================================
// OPTION 2: Tooltip Badge (Hover for info)
// ==========================================
// Compact badge with tooltip on hover

interface TooltipAccuracyBadgeProps {
  cryptoData?: CryptoData;
}

export const TooltipAccuracyBadge = ({
  cryptoData,
}: TooltipAccuracyBadgeProps) => {
  const isVerified =
    cryptoData?.debug?.estimationMethod === "historical_data_file";

  return (
    <div className="group relative inline-block">
      <div
        className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium cursor-help ${
          isVerified
            ? "bg-green-500/10 text-green-400 border border-green-500/30"
            : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/30"
        }`}
      >
        {isVerified ? "✓" : "~"} Data
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-gray-900 border border-gray-700 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
        <div className="text-xs text-gray-300 space-y-2">
          {isVerified ? (
            <>
              <p className="font-semibold text-green-400">
                ✓ Verified Historical Data
              </p>
              <p>
                This crypto is in our top 100. January 8, 2025 price has been
                manually researched and verified.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-yellow-400">
                ~ Extrapolated Estimate
              </p>
              <p>
                Estimated using 30-day market trends. Accuracy ±10%. Top 100
                cryptos use verified data.
              </p>
            </>
          )}
        </div>
        {/* Arrow */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
          <div className="border-4 border-transparent border-t-gray-900" />
        </div>
      </div>
    </div>
  );
};

// ==========================================
// OPTION 3: Footer Notice (Always Visible)
// ==========================================
// Place at bottom of comparison section

export const FooterDisclaimer = () => {
  return (
    <div className="mt-8 p-4 bg-gray-800/30 border border-gray-700/50 rounded-lg">
      <div className="flex items-start gap-3 text-xs text-gray-400">
        <div className="flex-shrink-0 mt-0.5">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="space-y-1">
          <p className="text-gray-300 font-medium">About Our Data</p>
          <p className="leading-relaxed">
            <strong>Top 100 cryptocurrencies</strong> use verified historical
            prices from January 8, 2025.
            <strong> All other cryptocurrencies</strong> use best-effort
            estimates based on 30-day market trends due to API limitations.
            Current prices update every 5 minutes from CoinMarketCap.
          </p>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// OPTION 4: Contextual Warning (When Not Top 100)
// ==========================================
// Shows only when user selects non-verified crypto

interface ContextualWarningProps {
  cryptoData?: CryptoData;
}

export const ContextualWarning = ({ cryptoData }: ContextualWarningProps) => {
  if (!cryptoData) return null;

  const isVerified =
    cryptoData.debug?.estimationMethod === "historical_data_file";

  if (isVerified) return null;

  return (
    <div className="mb-6 p-4 bg-yellow-500/10 border-l-4 border-yellow-500 rounded-r-lg">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <svg
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <h4 className="text-yellow-400 font-semibold text-sm mb-1">
            Estimated Data for {cryptoData.name}
          </h4>
          <p className="text-gray-300 text-xs">
            This cryptocurrency is not in our top 100 verified list. The January
            8, 2025 price is estimated using 30-day market trend extrapolation.
            For maximum accuracy, try comparing against Bitcoin, Ethereum, or
            other top 100 cryptos.
          </p>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// OPTION 5: Legend Key (Show All Methods)
// ==========================================
// Educational legend showing all accuracy levels

export const AccuracyLegend = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs">
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 rounded-lg">
        <span className="font-semibold text-gray-400">Data Accuracy:</span>
      </div>

      <div className="flex items-center gap-2 px-3 py-2 bg-green-500/10 border border-green-500/30 rounded-lg">
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <span className="text-green-400">Top 100 - Verified</span>
      </div>

      <div className="flex items-center gap-2 px-3 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
        <span className="text-yellow-400">Others - Estimated (±10%)</span>
      </div>

      <div className="flex items-center gap-2 px-3 py-2 bg-orange-500/10 border border-orange-500/30 rounded-lg">
        <div className="w-2 h-2 rounded-full bg-orange-400" />
        <span className="text-orange-400">New Coins - Approximate (±20%)</span>
      </div>
    </div>
  );
};

// ==========================================
// USAGE RECOMMENDATIONS
// ==========================================
/*

CHOOSE YOUR STYLE:

1. MINIMAL (Just a badge next to price)
   → Use InlineAccuracyBadge or TooltipAccuracyBadge
   → Good for clean design

2. STANDARD (Expandable info panel)
   → Use DataAccuracyDisclaimer (from previous artifact)
   → Good for transparency

3. DEFENSIVE (Warning when not verified)
   → Use ContextualWarning
   → Good for managing expectations

4. EDUCATIONAL (Always show legend)
   → Use AccuracyLegend + FooterDisclaimer
   → Good for building trust

5. COMPREHENSIVE (All of the above)
   → Use DataAccuracyDisclaimer + TooltipAccuracyBadge + FooterDisclaimer
   → Best for maximum transparency


RECOMMENDED PLACEMENT:

// Option A: Below crypto selector
<CryptoSelector ... />
<DataAccuracyDisclaimer cryptoData={cryptoData} />

// Option B: Next to current crypto price
<div className="flex items-center gap-3">
  <div className="text-4xl">${currentPrice}</div>
  <TooltipAccuracyBadge cryptoData={cryptoData} />
</div>

// Option C: Before comparison cards
<ContextualWarning cryptoData={cryptoData} />
<ComparisonCards ... />

// Option D: At the very bottom
<ComparisonCards ... />
<FooterDisclaimer />
<AccuracyLegend />

*/
