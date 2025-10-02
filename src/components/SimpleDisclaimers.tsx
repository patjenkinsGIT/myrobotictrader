import { Info, AlertCircle } from "lucide-react";

interface CryptoData {
  name: string;
  symbol: string;
  price: number;
}

interface TooltipAccuracyBadgeProps {
  cryptoData: CryptoData;
}

export const TooltipAccuracyBadge = ({
  cryptoData,
}: TooltipAccuracyBadgeProps) => {
  // Could display crypto-specific info if needed
  console.log("Displaying badge for:", cryptoData.name);

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30">
      <Info className="w-4 h-4 text-blue-400" />
      <span className="text-blue-200 text-sm">Live verified data</span>
    </div>
  );
};

export const FooterDisclaimer = () => {
  return (
    <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10">
      <div className="flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
        <div className="text-gray-400 text-sm leading-relaxed">
          <strong className="text-gray-300">Disclaimer:</strong> All
          cryptocurrency prices are live from CoinMarketCap API. Historical
          comparisons use January 8, 2025 as the baseline date. Results shown
          are for illustrative purposes to demonstrate the difference between
          holding strategies and systematic trading approaches. Past performance
          does not guarantee future results.
        </div>
      </div>
    </div>
  );
};
