import React from "react";
import {
  TrendingUp,
  TrendingDown,
  Target,
  Shield,
  AlertTriangle,
  Bitcoin,
} from "lucide-react";
import useBitcoinCorrelation from "../hooks/useBitcoinCorrelation";

interface MonthlyTradingData {
  month: string;
  profit: number;
  trades?: number;
}

interface BitcoinCorrelationProps {
  monthlyTradingData: MonthlyTradingData[];
}

export const BitcoinCorrelation: React.FC<BitcoinCorrelationProps> = ({
  monthlyTradingData,
}) => {
  const {
    currentBitcoin,
    correlationData,
    independentMonths,
    totalMonths,
    isLoading,
    error,
    // refreshData - removed since it's not used in this component
  } = useBitcoinCorrelation(monthlyTradingData);

  if (isLoading && !currentBitcoin) {
    return (
      <div className="bg-gradient-to-r from-orange-900/20 to-yellow-900/20 rounded-2xl border border-orange-500/20 p-6 mb-8">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-400"></div>
          <span className="ml-3 text-gray-300">
            Loading Bitcoin correlation data...
          </span>
        </div>
      </div>
    );
  }

  const independenceRate =
    totalMonths > 0 ? (independentMonths / totalMonths) * 100 : 0;
  const currentBtcChange = currentBitcoin?.change30d || 0;

  return (
    <div className="bg-gradient-to-r from-orange-900/20 to-yellow-900/20 rounded-2xl border border-orange-500/20 p-6 mb-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 p-3 shadow-lg shadow-orange-500/40">
          <Bitcoin className="w-full h-full text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">
            Market Independence Analysis
          </h3>
          <p className="text-orange-300">
            Your Strategy vs Bitcoin Performance
          </p>
        </div>
      </div>

      {/* Current Status Card */}
      <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl border border-white/10 p-6 mb-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Your Recent Performance */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-500/20 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-green-400">
              +$
              {monthlyTradingData[
                monthlyTradingData.length - 1
              ]?.profit?.toFixed(0) || "0"}
            </div>
            <div className="text-sm text-gray-300">Your Last Month</div>
          </div>

          {/* VS */}
          <div className="flex items-center justify-center">
            <div className="text-4xl font-bold text-white opacity-50">VS</div>
          </div>

          {/* Bitcoin Performance */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-red-500/20 flex items-center justify-center">
              {currentBtcChange >= 0 ? (
                <TrendingUp className="w-8 h-8 text-green-400" />
              ) : (
                <TrendingDown className="w-8 h-8 text-red-400" />
              )}
            </div>
            <div
              className={`text-2xl font-bold ${
                currentBtcChange >= 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {currentBtcChange >= 0 ? "+" : ""}
              {currentBtcChange.toFixed(1)}%
            </div>
            <div className="text-sm text-gray-300">Bitcoin (30 days)</div>
          </div>
        </div>

        {/* Status Message */}
        <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
          <div className="flex items-center gap-2 text-green-300">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">
              {currentBtcChange < 0 &&
              monthlyTradingData[monthlyTradingData.length - 1]?.profit > 0
                ? "✅ Profitable while Bitcoin declined - True alpha generation"
                : independenceRate > 70
                ? "✅ Consistently independent performance - Market-neutral strategy"
                : "📈 Strong performance regardless of market conditions"}
            </span>
          </div>
        </div>
      </div>

      {/* Independence Statistics */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-blue-400" />
            <h4 className="text-lg font-semibold text-white">
              Market Independence
            </h4>
          </div>
          <div className="text-3xl font-bold text-blue-400 mb-2">
            {independenceRate.toFixed(0)}%
          </div>
          <p className="text-gray-300 text-sm">
            {independentMonths} of {totalMonths} months show independent
            performance
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-green-400" />
            <h4 className="text-lg font-semibold text-white">
              Risk Protection
            </h4>
          </div>
          <div className="text-3xl font-bold text-green-400 mb-2">
            Low Correlation
          </div>
          <p className="text-gray-300 text-sm">
            Strategy performs regardless of Bitcoin direction
          </p>
        </div>
      </div>

      {/* Monthly Comparison Table */}
      <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
        <div className="p-4 border-b border-white/10">
          <h4 className="text-lg font-semibold text-white">
            Monthly Performance Comparison
          </h4>
          <p className="text-sm text-gray-400">
            Your results vs Bitcoin monthly returns
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="text-left p-4 text-sm font-medium text-gray-300">
                  Month
                </th>
                <th className="text-right p-4 text-sm font-medium text-gray-300">
                  Your Profit
                </th>
                <th className="text-right p-4 text-sm font-medium text-gray-300">
                  Bitcoin Return
                </th>
                <th className="text-center p-4 text-sm font-medium text-gray-300">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {correlationData.slice(-6).map((data) => (
                <tr key={data.month} className="border-t border-white/5">
                  <td className="p-4 text-white font-medium">{data.month}</td>
                  <td className="p-4 text-right">
                    <span className="text-green-400 font-semibold">
                      +$
                      {(() => {
                        const month = monthlyTradingData.find(
                          (m) => m.month === data.month
                        );
                        return month ? month.profit.toFixed(0) : "0";
                      })()}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <span
                      className={`font-semibold ${
                        data.bitcoinReturn >= 0
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {data.bitcoinReturn >= 0 ? "+" : ""}
                      {data.bitcoinReturn}%
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    {data.status === "independent" && (
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                        Independent
                      </span>
                    )}
                    {data.status === "inverse" && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">
                        Inverse
                      </span>
                    )}
                    {data.status === "correlated" && (
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs">
                        Correlated
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20">
        <div className="text-center">
          <h4 className="text-lg font-semibold text-white mb-2">
            Why This Matters
          </h4>
          <p className="text-gray-300 mb-4">
            Most crypto traders only profit during bull markets. Our strategy
            generates consistent returns regardless of Bitcoin's performance,
            proving genuine skill over market luck.
          </p>
          {error && (
            <div className="flex items-center justify-center gap-2 text-yellow-400 text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>Bitcoin data from fallback source</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
