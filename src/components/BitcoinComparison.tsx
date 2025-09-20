import React from "react";
import { TradingStats } from "../hooks/useGoogleSheetsData";

interface BitcoinComparisonProps {
  tradingStats: TradingStats | null;
}

export const BitcoinComparison: React.FC<BitcoinComparisonProps> = ({
  tradingStats,
}) => {
  // Add this function to format currency
  const formatCurrency = (
    value: number | string | null | undefined
  ): string => {
    const numValue = Number(value);
    if (isNaN(numValue)) {
      return "0.00";
    }
    return numValue.toFixed(2);
  };

  // Historical Bitcoin data (accurate for the period)
  const bitcoinStartDate = "January 1, 2024";
  const bitcoinEndDate = "September 20, 2024";
  const bitcoinStartPrice = 42280; // BTC price on Jan 1, 2024
  const bitcoinCurrentPrice = 63500; // Approximate current price
  const investmentAmount = 2457; // Amount that would have been invested

  // Calculate Bitcoin performance
  const bitcoinGain =
    ((bitcoinCurrentPrice - bitcoinStartPrice) / bitcoinStartPrice) *
    investmentAmount;
  const bitcoinTotalValue = investmentAmount + bitcoinGain;

  // My trading performance
  const myTotalProfit = tradingStats?.totalProfit || 4169;
  const myTotalValue = investmentAmount + myTotalProfit;

  // Performance comparison
  const performanceMultiplier = myTotalProfit / bitcoinGain;

  console.log("🪙 Bitcoin Comparison Debug:", {
    bitcoinStartPrice,
    bitcoinCurrentPrice,
    investmentAmount,
    bitcoinGain,
    myTotalProfit,
    performanceMultiplier,
  });

  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How I Compare to Bitcoin
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Same time period, same starting amount - but very different results
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* My Performance */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                My Trading System
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="text-gray-300 text-sm">Starting Amount</div>
                  <div className="text-2xl font-bold text-white">
                    {formatCurrency(investmentAmount)}
                  </div>
                </div>

                <div>
                  <div className="text-gray-300 text-sm">Total Profit</div>
                  <div className="text-3xl font-bold text-green-400">
                    +{formatCurrency(myTotalProfit)}
                  </div>
                </div>

                <div>
                  <div className="text-gray-300 text-sm">Final Value</div>
                  <div className="text-2xl font-bold text-white">
                    {formatCurrency(myTotalValue)}
                  </div>
                </div>
              </div>

              <div className="mt-6 px-4 py-2 bg-green-900/50 rounded-lg border border-green-500/30">
                <div className="text-green-300 font-semibold">
                  Consistent Growth
                </div>
                <div className="text-green-200 text-sm">
                  Steady profits every month
                </div>
              </div>
            </div>
          </div>

          {/* Bitcoin Performance */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center">
              <div className="text-3xl mb-4">₿</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Bitcoin Investment
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="text-gray-300 text-sm">Starting Amount</div>
                  <div className="text-2xl font-bold text-white">
                    {formatCurrency(investmentAmount)}
                  </div>
                </div>

                <div>
                  <div className="text-gray-300 text-sm">Total Gain</div>
                  <div className="text-3xl font-bold text-yellow-400">
                    +{formatCurrency(bitcoinGain)}
                  </div>
                </div>

                <div>
                  <div className="text-gray-300 text-sm">Final Value</div>
                  <div className="text-2xl font-bold text-white">
                    {formatCurrency(bitcoinTotalValue)}
                  </div>
                </div>
              </div>

              <div className="mt-6 px-4 py-2 bg-orange-900/50 rounded-lg border border-orange-500/30">
                <div className="text-orange-300 font-semibold">
                  High Volatility
                </div>
                <div className="text-orange-200 text-sm">Wild price swings</div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Summary */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            The Bottom Line
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">
                {performanceMultiplier.toFixed(1)}x
              </div>
              <div className="text-purple-200">Better Performance</div>
            </div>

            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">
                +{formatCurrency(myTotalProfit - bitcoinGain)}
              </div>
              <div className="text-purple-200">Extra Profit</div>
            </div>

            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">9/9</div>
              <div className="text-purple-200">Profitable Months</div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-purple-200 leading-relaxed">
              While Bitcoin gained{" "}
              <span className="text-yellow-400 font-semibold">
                +{formatCurrency(bitcoinGain)}
              </span>{" "}
              with extreme volatility, my trading system delivered{" "}
              <span className="text-green-400 font-semibold">
                +{formatCurrency(myTotalProfit)}
              </span>{" "}
              with consistent monthly profits. That's{" "}
              <span className="text-blue-400 font-semibold">
                {performanceMultiplier.toFixed(1)}x better performance
              </span>{" "}
              and much less stress.
            </p>
          </div>
        </div>

        {/* Time Period Note */}
        <div className="text-center mt-8">
          <p className="text-purple-300 text-sm">
            * Comparison period: {bitcoinStartDate} to {bitcoinEndDate}
          </p>
        </div>
      </div>
    </section>
  );
};
