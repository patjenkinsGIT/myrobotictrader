// BitcoinComparison.tsx - SIMPLIFIED VERSION - Easy to Understand
import React from "react";
import { TrendingUp, TrendingDown, Shield, CheckCircle } from "lucide-react";

export const BitcoinComparison: React.FC = () => {
  // Simple, clear data points that anyone can understand
  const comparisonData = {
    myStrategy: {
      result: "Made Money",
      amount: "+$4,169",
      timeFrame: "8 months",
      consistency: "Every single month",
      worstMonth: "Still profitable",
      riskLevel: "Low risk",
      status: "success",
    },
    bitcoin: {
      result: "Lost Money",
      amount: "-$2,400",
      timeFrame: "Same 8 months",
      consistency: "Up and down",
      worstMonth: "Lost 40%",
      riskLevel: "High risk",
      status: "loss",
    },
  };

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-blue-900/20"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/30 to-blue-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-400/40 mb-6 shadow-lg shadow-orange-500/20">
            <Shield className="w-4 h-4 text-orange-300" />
            <span className="text-orange-200 font-medium">Risk Comparison</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            My Strategy vs
            <span className="block text-transparent bg-gradient-to-r from-orange-300 to-blue-300 bg-clip-text">
              "Just Buy Bitcoin"
            </span>
          </h2>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Here's what would have happened if you invested the same money in
            Bitcoin instead of using my robotic trading system:
          </p>
        </div>

        {/* Simple Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* My Strategy - Green/Success */}
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl border border-green-400/30 p-8 shadow-lg shadow-green-500/20">
            <div className="text-center">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/40">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                My Robotic Trading
              </h3>

              {/* Results */}
              <div className="space-y-4">
                <div className="bg-green-500/20 rounded-xl p-4 border border-green-400/30">
                  <div className="text-3xl font-bold text-green-300 mb-2">
                    {comparisonData.myStrategy.amount}
                  </div>
                  <div className="text-green-200 font-medium">
                    {comparisonData.myStrategy.result}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 text-left">
                  <div className="flex justify-between items-center py-2 border-b border-green-400/20">
                    <span className="text-gray-300">Time Period:</span>
                    <span className="text-green-300 font-semibold">
                      {comparisonData.myStrategy.timeFrame}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-green-400/20">
                    <span className="text-gray-300">Consistency:</span>
                    <span className="text-green-300 font-semibold">
                      {comparisonData.myStrategy.consistency}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-green-400/20">
                    <span className="text-gray-300">Worst Month:</span>
                    <span className="text-green-300 font-semibold">
                      {comparisonData.myStrategy.worstMonth}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Risk Level:</span>
                    <span className="text-green-300 font-semibold">
                      {comparisonData.myStrategy.riskLevel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bitcoin Strategy - Red/Loss */}
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl border border-red-400/30 p-8 shadow-lg shadow-red-500/20">
            <div className="text-center">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-500/40">
                <TrendingDown className="w-10 h-10 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                "Just Buy Bitcoin"
              </h3>

              {/* Results */}
              <div className="space-y-4">
                <div className="bg-red-500/20 rounded-xl p-4 border border-red-400/30">
                  <div className="text-3xl font-bold text-red-300 mb-2">
                    {comparisonData.bitcoin.amount}
                  </div>
                  <div className="text-red-200 font-medium">
                    {comparisonData.bitcoin.result}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 text-left">
                  <div className="flex justify-between items-center py-2 border-b border-red-400/20">
                    <span className="text-gray-300">Time Period:</span>
                    <span className="text-red-300 font-semibold">
                      {comparisonData.bitcoin.timeFrame}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-red-400/20">
                    <span className="text-gray-300">Consistency:</span>
                    <span className="text-red-300 font-semibold">
                      {comparisonData.bitcoin.consistency}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-red-400/20">
                    <span className="text-gray-300">Worst Month:</span>
                    <span className="text-red-300 font-semibold">
                      {comparisonData.bitcoin.worstMonth}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Risk Level:</span>
                    <span className="text-red-300 font-semibold">
                      {comparisonData.bitcoin.riskLevel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Summary */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-blue-400/20 p-8 shadow-lg shadow-blue-500/10 mb-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/40">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              The Bottom Line
            </h3>

            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-200 mb-6">
                While Bitcoin investors lost money during this same 8-month
                period, my robotic trading system generated consistent profits
                every single month. No wild swings, no sleepless nights, no
                emotional rollercoaster.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-green-400 mb-2">
                    $6,569
                  </div>
                  <div className="text-sm text-gray-300">Total Difference</div>
                  <div className="text-xs text-gray-400 mt-1">
                    My gains + Bitcoin losses
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-blue-400 mb-2">
                    0%
                  </div>
                  <div className="text-sm text-gray-300">Losing Months</div>
                  <div className="text-xs text-gray-400 mt-1">
                    Never lost money
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-purple-400 mb-2">
                    100%
                  </div>
                  <div className="text-sm text-gray-300">Profitable Months</div>
                  <div className="text-xs text-gray-400 mt-1">
                    Every single month
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why This Matters */}
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl border border-green-400/20 p-8 shadow-lg shadow-green-500/10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Why This Matters For You
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Sleep Better at Night
                </h4>
                <p className="text-gray-300 text-sm">
                  No more watching charts, no more panic selling, no more
                  wondering if you should "buy the dip." The system handles
                  everything while you live your life.
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Predictable Income
                </h4>
                <p className="text-gray-300 text-sm">
                  Instead of hoping Bitcoin goes up, you get consistent monthly
                  profits regardless of market direction. It's like having a
                  side job that never takes time off.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
