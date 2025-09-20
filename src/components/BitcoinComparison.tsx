import React from "react";
import {
  Shield,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Zap,
  Target,
} from "lucide-react";
import {
  useGoogleSheetsData,
  CapitalEfficiencyData,
} from "../hooks/useGoogleSheetsData";

interface AdvantageStatus {
  text: string;
  color: string;
  icon: React.ReactElement;
}

export const BitcoinComparison: React.FC = () => {
  const { tradingStats, isLoading, error } = useGoogleSheetsData();

  if (isLoading) {
    return (
      <section className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-pulse text-white">
            Loading capital efficiency comparison...
          </div>
        </div>
      </section>
    );
  }

  if (error || !tradingStats?.capitalEfficiencyData) {
    return (
      <section className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <div className="container mx-auto px-6 text-center text-red-400">
          Unable to load comparison data
        </div>
      </section>
    );
  }

  const { capitalEfficiencyData } = tradingStats;

  // Calculate summary metrics
  const totalAIProfit = capitalEfficiencyData.reduce(
    (sum: number, month: CapitalEfficiencyData) => sum + month.aiProfit,
    0
  );
  const totalBitcoinLoss = capitalEfficiencyData.reduce(
    (sum: number, month: CapitalEfficiencyData) =>
      sum + (month.bitcoinValue - month.totalCapitalAvailable),
    0
  );
  const totalAdvantage = capitalEfficiencyData.reduce(
    (sum: number, month: CapitalEfficiencyData) => sum + month.advantage,
    0
  );
  const avgDeploymentRatio =
    capitalEfficiencyData.reduce(
      (sum: number, month: CapitalEfficiencyData) =>
        sum + month.deploymentRatio,
      0
    ) / capitalEfficiencyData.length;
  const avgReserveSafety =
    capitalEfficiencyData.reduce(
      (sum: number, month: CapitalEfficiencyData) => sum + month.reserveSafety,
      0
    ) / capitalEfficiencyData.length;

  const getAdvantageStatus = (
    advantage: number,
    deploymentRatio: number
  ): AdvantageStatus => {
    if (advantage > 10000)
      return {
        text: "I Destroyed Bitcoin",
        color: "text-yellow-300 bg-yellow-500/10",
        icon: <Zap className="w-4 h-4" />,
      };
    if (advantage > 1000)
      return {
        text: "I Crushed It",
        color: "text-green-300 bg-green-500/10",
        icon: <TrendingUp className="w-4 h-4" />,
      };
    if (advantage > 0)
      return {
        text: "I Beat Bitcoin",
        color: "text-blue-300 bg-blue-500/10",
        icon: <Target className="w-4 h-4" />,
      };
    if (deploymentRatio < 50)
      return {
        text: "Capital Protected",
        color: "text-purple-300 bg-purple-500/10",
        icon: <Shield className="w-4 h-4" />,
      };
    return {
      text: "Bitcoin Won",
      color: "text-red-300 bg-red-500/10",
      icon: <TrendingDown className="w-4 h-4" />,
    };
  };

  const formatMonth = (monthStr: string): string => {
    const [, month] = monthStr.split("-");
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months[parseInt(month) - 1] || monthStr;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Smart Capital Management vs{" "}
            <span className="text-red-400">Reckless Full Exposure</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Why our AI only uses a portion of your capital while still crushing
            Bitcoin's full-exposure strategy
          </p>
        </div>

        {/* Strategy Overview Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Bitcoin Strategy */}
          <div className="bg-red-500/10 backdrop-blur-sm rounded-xl border border-red-500/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-400" />
              <h3 className="text-2xl font-bold text-white">
                Bitcoin "All-In" Strategy
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-red-500/5 rounded-lg">
                <span className="text-gray-300">Capital Deployment:</span>
                <span className="text-red-400 font-bold">100% Exposed</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-500/5 rounded-lg">
                <span className="text-gray-300">Cash Reserves:</span>
                <span className="text-red-400 font-bold">$0 Available</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-500/5 rounded-lg">
                <span className="text-gray-300">Risk Level:</span>
                <span className="text-red-400 font-bold">Maximum Stress</span>
              </div>
            </div>
          </div>

          {/* AI Strategy */}
          <div className="bg-green-500/10 backdrop-blur-sm rounded-xl border border-green-500/20 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl font-bold text-white">
                AI Smart Deployment
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-green-500/5 rounded-lg">
                <span className="text-gray-300">Capital Deployment:</span>
                <span className="text-green-400 font-bold">
                  {avgDeploymentRatio.toFixed(0)}% Average
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-500/5 rounded-lg">
                <span className="text-gray-300">Cash Reserves:</span>
                <span className="text-green-400 font-bold">
                  {avgReserveSafety.toFixed(0)}% Protected
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-500/5 rounded-lg">
                <span className="text-gray-300">Risk Level:</span>
                <span className="text-green-400 font-bold">
                  Sleep Peacefully
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Comparison Table */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden mb-8">
          <div className="bg-white/5 p-4 border-b border-white/10">
            <h3 className="text-xl font-bold text-white text-center">
              Monthly Performance: Smart Deployment vs Reckless Exposure
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase">
                    Month
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-300 uppercase">
                    AI Deployment
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-300 uppercase">
                    AI Reserves
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-300 uppercase">
                    AI Results
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-300 uppercase">
                    Bitcoin Results
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-300 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {capitalEfficiencyData.map(
                  (row: CapitalEfficiencyData, index: number) => {
                    const status = getAdvantageStatus(
                      row.advantage,
                      row.deploymentRatio
                    );

                    return (
                      <tr
                        key={index}
                        className="hover:bg-white/5 transition-colors"
                      >
                        <td className="px-4 py-4 text-white font-medium">
                          {formatMonth(row.month)}
                        </td>

                        <td className="px-4 py-4 text-center">
                          <div className="text-blue-400 font-bold">
                            ${row.capitalDeployed.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-400">
                            ({row.deploymentRatio.toFixed(1)}% deployed)
                          </div>
                        </td>

                        <td className="px-4 py-4 text-center">
                          <div className="text-green-400 font-bold">
                            ${row.cashReserves.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-400">
                            ({row.reserveSafety.toFixed(1)}% safe)
                          </div>
                        </td>

                        <td className="px-4 py-4 text-center">
                          <div className="text-green-400 font-bold">
                            +${row.aiProfit.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-400">
                            ({row.aiReturnDeployed.toFixed(1)}% on deployed)
                          </div>
                        </td>

                        <td className="px-4 py-4 text-center">
                          <div
                            className={`font-bold ${
                              row.bitcoinReturn >= 0
                                ? "text-green-400"
                                : "text-red-400"
                            }`}
                          >
                            {row.bitcoinReturn >= 0 ? "+" : ""}
                            {row.bitcoinReturn.toFixed(1)}%
                          </div>
                          <div className="text-xs text-gray-400">
                            ($
                            {(
                              row.bitcoinValue - row.totalCapitalAvailable
                            ).toLocaleString()}{" "}
                            change)
                          </div>
                        </td>

                        <td className="px-4 py-4 text-center">
                          <div
                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${status.color}`}
                          >
                            {status.icon}
                            {status.text}
                          </div>
                          <div className="text-xs text-yellow-400 mt-1">
                            ${row.advantage >= 0 ? "+" : ""}$
                            {row.advantage.toLocaleString()} advantage
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">
              {avgReserveSafety.toFixed(0)}%
            </div>
            <div className="text-gray-300 mb-2">Average Capital Protected</div>
            <div className="text-sm text-gray-400">
              Always ready for opportunities
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">
              ${totalAIProfit.toLocaleString()}
            </div>
            <div className="text-gray-300 mb-2">Total AI Profits</div>
            <div className="text-sm text-gray-400">
              With conservative deployment
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">
              ${Math.abs(totalBitcoinLoss).toLocaleString()}
            </div>
            <div className="text-gray-300 mb-2">Bitcoin Full-Exposure Loss</div>
            <div className="text-sm text-gray-400">From market volatility</div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">
              ${totalAdvantage.toLocaleString()}
            </div>
            <div className="text-gray-300 mb-2">Smart Strategy Advantage</div>
            <div className="text-sm text-gray-400">Total outperformance</div>
          </div>
        </div>

        {/* February Spotlight */}
        {(() => {
          const febData = capitalEfficiencyData.find(
            (month: CapitalEfficiencyData) => month.month === "2025-02"
          );
          if (!febData) return null;

          return (
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-500/20 p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                🔥 February 2025: The Perfect Example
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h4 className="text-lg font-bold text-red-400 mb-3">
                    Bitcoin Full-Exposure
                  </h4>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-red-400">
                      {febData.bitcoinReturn.toFixed(1)}%
                    </div>
                    <div className="text-gray-300">Market crash</div>
                    <div className="text-sm text-gray-400">
                      100% capital at risk
                    </div>
                    <div className="text-sm text-gray-400">
                      No reserves for recovery
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="text-lg font-bold text-green-400 mb-3">
                    AI Smart Deployment
                  </h4>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-green-400">
                      +${febData.aiProfit.toLocaleString()}
                    </div>
                    <div className="text-gray-300">
                      ({febData.aiReturnDeployed.toFixed(1)}% on deployed)
                    </div>
                    <div className="text-sm text-gray-400">
                      Only {febData.deploymentRatio.toFixed(1)}% capital at risk
                    </div>
                    <div className="text-sm text-gray-400">
                      ${febData.cashReserves.toLocaleString()} safe in reserves
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Bottom CTA */}
        <div className="text-center p-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Smart Capital Management = Better Sleep + Better Returns
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
            While Bitcoin holders risk everything on market timing, our AI
            Trading system preserves capital and harvests opportunities with
            surgical precision.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span>✅ Capital Preservation</span>
            <span>✅ Active Management</span>
            <span>✅ 4.1x Efficiency</span>
            <span>✅ Zero Losing Trades</span>
          </div>
        </div>
      </div>
    </section>
  );
};
