// src/components/BitcoinComparison.tsx
import React from "react";
import {
  TrendingUp,
  TrendingDown,
  Target,
  Shield,
  AlertTriangle,
  Bitcoin,
  Zap,
} from "lucide-react";
import useBitcoinCorrelation from "../hooks/useBitcoinCorrelation";

interface MonthlyTradingData {
  month: string;
  profit: number;
  trades?: number;
}

interface BitcoinComparisonProps {
  monthlyTradingData: MonthlyTradingData[];
}

export const BitcoinComparison: React.FC<BitcoinComparisonProps> = ({
  monthlyTradingData,
}) => {
  const {
    currentBitcoin,
    correlationData,
    independentMonths,
    totalMonths,
    isLoading,
    error,
  } = useBitcoinCorrelation(monthlyTradingData);

  if (isLoading && !currentBitcoin) {
    return (
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-yellow-500/10 to-red-500/10"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500/20 via-yellow-500/15 to-amber-500/20 rounded-3xl border border-orange-400/30 p-8 backdrop-blur-sm">
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-400/30 border-t-orange-400"></div>
              <span className="ml-4 text-orange-100 text-lg font-medium">
                Loading Bitcoin comparison data...
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const independenceRate =
    totalMonths > 0 ? (independentMonths / totalMonths) * 100 : 0;
  const currentBtcChange = currentBitcoin?.change30d || 0;

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-yellow-500/10 to-red-500/10"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/5 via-blue-500/5 to-cyan-400/5"></div>

      {/* Floating particles effect */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-40 h-40 bg-gradient-to-br from-cyan-400/15 to-blue-500/15 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="group bg-gradient-to-br from-orange-500/20 via-yellow-500/15 to-amber-500/20 rounded-3xl border border-orange-400/30 p-8 backdrop-blur-sm hover:border-orange-300/50 transition-all duration-500 shadow-2xl shadow-orange-500/10 hover:shadow-orange-400/20">
          {/* Enhanced Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="relative group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 via-yellow-400 to-amber-400 p-4 shadow-xl shadow-orange-500/30 group-hover:shadow-orange-400/50 transition-all duration-300 group-hover:scale-110">
                <Bitcoin className="w-full h-full text-white drop-shadow-sm" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent mb-2">
                Why This Strategy Works
              </h3>
              <p className="text-orange-200 text-lg font-medium">
                Your profits while Bitcoin struggled
              </p>
            </div>
          </div>

          {/* Enhanced Status Card */}
          <div className="bg-gradient-to-br from-gray-900/90 via-slate-800/90 to-gray-900/90 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:border-white/30">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Your Performance - Enhanced */}
              <div className="text-center group/card">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-400 via-green-400 to-teal-400 p-5 shadow-xl shadow-green-500/30 group-hover/card:shadow-green-400/50 transition-all duration-300 group-hover/card:scale-110 group-hover/card:rotate-3">
                    <TrendingUp className="w-full h-full text-white drop-shadow-sm" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-emerald-400 to-green-400 rounded-2xl blur opacity-0 group-hover/card:opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent mb-2 group-hover/card:scale-105 transition-transform duration-300">
                  +$
                  {monthlyTradingData[
                    monthlyTradingData.length - 1
                  ]?.profit?.toFixed(0) || "0"}
                </div>
                <div className="text-emerald-200 font-medium">
                  Your Last Month
                </div>
              </div>

              {/* VS - Enhanced */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="text-6xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent animate-pulse">
                    VS
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 blur-xl opacity-20 animate-pulse"></div>
                </div>
              </div>

              {/* Bitcoin Performance - Enhanced */}
              <div className="text-center group/card">
                <div className="relative">
                  <div
                    className={`w-20 h-20 mx-auto mb-4 rounded-2xl p-5 shadow-xl transition-all duration-300 group-hover/card:scale-110 group-hover/card:rotate-3 ${
                      currentBtcChange >= 0
                        ? "bg-gradient-to-br from-emerald-400 via-green-400 to-teal-400 shadow-green-500/30 group-hover/card:shadow-green-400/50"
                        : "bg-gradient-to-br from-red-400 via-rose-400 to-pink-400 shadow-red-500/30 group-hover/card:shadow-red-400/50"
                    }`}
                  >
                    {currentBtcChange >= 0 ? (
                      <TrendingUp className="w-full h-full text-white drop-shadow-sm" />
                    ) : (
                      <TrendingDown className="w-full h-full text-white drop-shadow-sm" />
                    )}
                  </div>
                  <div
                    className={`absolute -inset-1 rounded-2xl blur opacity-0 group-hover/card:opacity-30 transition-opacity duration-300 ${
                      currentBtcChange >= 0
                        ? "bg-gradient-to-br from-emerald-400 to-green-400"
                        : "bg-gradient-to-br from-red-400 to-rose-400"
                    }`}
                  ></div>
                </div>
                <div
                  className={`text-3xl font-bold mb-2 group-hover/card:scale-105 transition-transform duration-300 ${
                    currentBtcChange >= 0
                      ? "bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent"
                      : "bg-gradient-to-r from-red-300 to-rose-300 bg-clip-text text-transparent"
                  }`}
                >
                  {currentBtcChange >= 0 ? "+" : ""}
                  {currentBtcChange.toFixed(1)}%
                </div>
                <div
                  className={`font-medium ${
                    currentBtcChange >= 0 ? "text-emerald-200" : "text-red-200"
                  }`}
                >
                  Bitcoin (30 days)
                </div>
              </div>
            </div>

            {/* Enhanced Status Message */}
            <div className="mt-8 p-6 bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-teal-500/20 rounded-2xl border border-emerald-400/30 backdrop-blur-sm hover:border-emerald-300/50 transition-all duration-300">
              <div className="flex items-center gap-3 text-emerald-200">
                <div className="p-2 bg-gradient-to-br from-emerald-400 to-green-400 rounded-full shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="font-semibold text-lg">
                  {currentBtcChange < 0 &&
                  monthlyTradingData[monthlyTradingData.length - 1]?.profit > 0
                    ? "✨ You made money while Bitcoin lost money"
                    : independenceRate > 70
                    ? "🚀 Consistent profits regardless of market conditions"
                    : "💪 Strong performance in all market conditions"}
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Statistics Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="group/stat bg-gradient-to-br from-blue-500/20 via-cyan-500/15 to-teal-500/20 rounded-2xl p-8 border border-blue-400/30 backdrop-blur-sm hover:border-blue-300/50 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl shadow-lg group-hover/stat:shadow-blue-400/50 transition-all duration-300 group-hover/stat:scale-110">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  Strategy Independence
                </h4>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent mb-3 group-hover/stat:scale-105 transition-transform duration-300">
                {independenceRate.toFixed(0)}%
              </div>
              <p className="text-blue-200 font-medium">
                {independentMonths} of {totalMonths} months show independent
                performance from Bitcoin
              </p>
            </div>

            <div className="group/stat bg-gradient-to-br from-emerald-500/20 via-green-500/15 to-teal-500/20 rounded-2xl p-8 border border-emerald-400/30 backdrop-blur-sm hover:border-emerald-300/50 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-emerald-400 to-green-400 rounded-xl shadow-lg group-hover/stat:shadow-emerald-400/50 transition-all duration-300 group-hover/stat:scale-110">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent">
                  Market Protection
                </h4>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent mb-3 group-hover/stat:scale-105 transition-transform duration-300">
                Low Risk
              </div>
              <p className="text-emerald-200 font-medium">
                Strategy performs well regardless of Bitcoin direction
              </p>
            </div>
          </div>

          {/* Enhanced Comparison Table */}
          <div className="bg-gradient-to-br from-slate-900/95 via-gray-800/95 to-slate-900/95 rounded-2xl border border-white/20 overflow-hidden shadow-2xl backdrop-blur-md hover:border-white/30 transition-all duration-500">
            <div className="p-6 border-b border-white/20 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
              <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-200 via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-2">
                Monthly Performance Comparison
              </h4>
              <p className="text-purple-200 font-medium">
                Your results vs Bitcoin monthly returns
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-purple-500/20 to-blue-500/20">
                  <tr>
                    <th className="text-left p-6 text-lg font-bold text-purple-200">
                      Month
                    </th>
                    <th className="text-right p-6 text-lg font-bold text-emerald-200">
                      Your Profit
                    </th>
                    <th className="text-right p-6 text-lg font-bold text-orange-200">
                      Bitcoin Return
                    </th>
                    <th className="text-center p-6 text-lg font-bold text-cyan-200">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {correlationData.slice(-6).map((data) => {
                    const matchingMonth = monthlyTradingData.find(
                      (m) => m.month === data.month
                    );
                    const profit = matchingMonth ? matchingMonth.profit : 0;

                    return (
                      <tr
                        key={data.month}
                        className="border-t border-white/10 hover:bg-gradient-to-r hover:from-purple-500/5 hover:to-blue-500/5 transition-all duration-300 group/row"
                      >
                        <td className="p-6 text-white font-bold text-lg group-hover/row:text-purple-200 transition-colors duration-300">
                          {data.month}
                        </td>
                        <td className="p-6 text-right">
                          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent group-hover/row:scale-105 transition-transform duration-300 inline-block">
                            +${profit.toFixed(0)}
                          </span>
                        </td>
                        <td className="p-6 text-right">
                          <span
                            className={`text-2xl font-bold group-hover/row:scale-105 transition-transform duration-300 inline-block ${
                              data.bitcoinReturn >= 0
                                ? "bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent"
                                : "bg-gradient-to-r from-red-300 to-rose-300 bg-clip-text text-transparent"
                            }`}
                          >
                            {data.bitcoinReturn >= 0 ? "+" : ""}
                            {data.bitcoinReturn}%
                          </span>
                        </td>
                        <td className="p-6 text-center">
                          {data.status === "independent" && (
                            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-blue-200 rounded-full text-sm font-bold border border-blue-400/50 hover:border-blue-300/70 transition-all duration-300 hover:scale-105">
                              Independent
                            </span>
                          )}
                          {data.status === "inverse" && (
                            <span className="px-4 py-2 bg-gradient-to-r from-emerald-500/30 to-green-500/30 text-emerald-200 rounded-full text-sm font-bold border border-emerald-400/50 hover:border-emerald-300/70 transition-all duration-300 hover:scale-105">
                              Opposite Direction
                            </span>
                          )}
                          {data.status === "correlated" && (
                            <span className="px-4 py-2 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 text-yellow-200 rounded-full text-sm font-bold border border-yellow-400/50 hover:border-yellow-300/70 transition-all duration-300 hover:scale-105">
                              Similar
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Enhanced Bottom Explanation */}
          <div className="mt-8 p-8 bg-gradient-to-br from-purple-500/20 via-blue-500/15 to-cyan-500/20 rounded-2xl border border-purple-400/30 backdrop-blur-sm hover:border-purple-300/50 transition-all duration-500 shadow-xl hover:shadow-2xl group/cta">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full shadow-lg group-hover/cta:shadow-purple-400/50 transition-all duration-300 group-hover/cta:scale-110">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-200 via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  Why This Matters
                </h4>
              </div>
              <p className="text-purple-100 mb-6 text-lg font-medium leading-relaxed">
                Most crypto traders only profit during bull markets. This
                strategy generates consistent returns regardless of Bitcoin's
                performance, proving skill over market luck.
              </p>
              {error && (
                <div className="flex items-center justify-center gap-3 text-yellow-300 font-medium">
                  <AlertTriangle className="w-5 h-5" />
                  <span>Bitcoin data from fallback source</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
