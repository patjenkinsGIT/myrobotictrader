import { CheckCircle } from "lucide-react";

interface SimpleDisclaimerProps {
  cryptoData?: {
    symbol: string;
    name: string;
  };
}

export const SimpleDisclaimer: React.FC<SimpleDisclaimerProps> = ({
  cryptoData,
}) => {
  return (
    <div className="max-w-4xl mx-auto mb-8">
      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="text-green-400 font-semibold text-sm mb-1">
              Verified Historical Data
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              {cryptoData ? (
                <>
                  <span className="font-semibold">
                    {cryptoData.name} ({cryptoData.symbol})
                  </span>{" "}
                  uses manually verified January 8, 2025 historical price data.
                  All comparisons are based on real historical data with 100%
                  accuracy.
                </>
              ) : (
                <>
                  All top 25 cryptocurrencies use manually verified January 8,
                  2025 historical prices for accurate comparisons.
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleDisclaimer;
