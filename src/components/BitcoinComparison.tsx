
import { TradingStats } from "../hooks/useGoogleSheetsData";

interface BitcoinComparisonProps {
  tradingStats: TradingStats | null;
}

export const BitcoinComparison: React.FC<BitcoinComparisonProps> = ({
  tradingStats,
}) => {
  // Capital deployment data from your Google Script analysis
  const capitalDeploymentData = [
    { month: "2025-01", deployed: 10750, profit: 477.17, bitcoinReturn: 9.61 },
    { month: "2025-02", deployed: 500, profit: 686.72, bitcoinReturn: -17.61 },
    { month: "2025-03", deployed: 4450, profit: 261.93, bitcoinReturn: -2.16 },
    { month: "2025-04", deployed: 415, profit: 552.58, bitcoinReturn: 14.12 },
    { month: "2025-05", deployed: 10813, profit: 376.29, bitcoinReturn: 11.07 },
    { month: "2025-06", deployed: 600, profit: 382.98, bitcoinReturn: 2.39 },
    { month: "2025-07", deployed: 1160, profit: 817.31, bitcoinReturn: 8.04 },
    { month: "2025-08", deployed: 450, profit: 350.32, bitcoinReturn: -0.32 },
  ];

  // Calculate totals
  const totalDeployed = capitalDeploymentData.reduce(
    (sum, month) => sum + month.deployed,
    0
  );
  const totalProfits =
    tradingStats?.totalProfit ||
    capitalDeploymentData.reduce((sum, month) => sum + month.profit, 0);
  const availableCapital = 25000; // Starting capital from your script
  const reservesKeptSafe =
    availableCapital - totalDeployed / capitalDeploymentData.length; // Average deployment

  // Bitcoin "all in" comparison
  const bitcoinAllInStart = availableCapital;
  let bitcoinCurrentValue = bitcoinAllInStart;
  capitalDeploymentData.forEach((month) => {
    bitcoinCurrentValue *= 1 + month.bitcoinReturn / 100;
  });
  const bitcoinTotalGain = bitcoinCurrentValue - bitcoinAllInStart;

  // Capital efficiency metrics
  const capitalEfficiency = (totalProfits / totalDeployed) * 100; // Return on deployed capital
  const avgDeploymentRatio =
    (totalDeployed / capitalDeploymentData.length / availableCapital) * 100;
  const reserveRatio = 100 - avgDeploymentRatio;

  // Format currency helper
  const formatCurrency = (value: number): string => {
    return value.toFixed(0);
  };

  const formatPercentage = (value: number): string => {
    return value.toFixed(1);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Capital Efficiency vs "Going All In"
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Smart capital deployment vs. risking everything on one bet - same
            time period, very different risk profiles
          </p>
        </div>

        {/* Strategy Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* My Smart Deployment Strategy */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/40">
                <div className="text-2xl">🧠</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Smart AI Deployment
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="text-gray-300 text-sm">Available Capital</div>
                  <div className="text-2xl font-bold text-white">
                    ${formatCurrency(availableCapital)}
                  </div>
                </div>

                <div>
                  <div className="text-gray-300 text-sm">Total Deployed</div>
                  <div className="text-3xl font-bold text-blue-400">
                    ${formatCurrency(totalDeployed)}
                  </div>
                </div>

                <div>
                  <div className="text-gray-300 text-sm">Profits Generated</div>
                  <div className="text-4xl font-bold text-green-400">
                    +${formatCurrency(totalProfits)}
                  </div>
                </div>

                <div>
                  <div className="text-gray-300 text-sm">Capital Kept Safe</div>
                  <div className="text-2xl font-bold text-purple-400">
                    ${formatCurrency(reservesKeptSafe)}
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-green-400/20">
                  <span className="text-gray-300">Avg Deployment:</span>
                  <span className="text-green-300 font-semibold">
                    {formatPercentage(avgDeploymentRatio)}%
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-green-400/20">
                  <span className="text-gray-300">Reserves Safe:</span>
                  <span className="text-green-300 font-semibold">
                    {formatPercentage(reserveRatio)}%
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-green-400/20">
                  <span className="text-gray-300">ROI on Deployed:</span>
                  <span className="text-green-300 font-semibold">
                    {formatPercentage(capitalEfficiency)}%
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Risk Level:</span>
                  <span className="text-green-300 font-semibold">
                    Controlled
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bitcoin All-In Strategy */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/40">
                <div className="text-2xl">⚡</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                "All In" Bitcoin Strategy
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="text-gray-300 text-sm">Available Capital</div>
                  <div className="text-2xl font-bold text-white">
                    ${formatCurrency(availableCapital)}
                  </div>
                </div>

                <div>
                  <div className="text-gray-300 text-sm">Total Deployed</div>
                  <div className="text-3xl font-bold text-red-400">
                    ${formatCurrency(bitcoinAllInStart)}
                  </div>
                </div>

                <div>
                  <div className="text-gray-300 text-sm">Gains Generated</div>
                  <div className="text-4xl font-bold text-orange-400">
                    +${formatCurrency(bitcoinTotalGain)}
                  </div>
                </div>

                <div>
                  <div className="text-gray-300 text-sm">Capital Kept Safe</div>
                  <div className="text-2xl font-bold text-red-400">$0</div>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-orange-400/20">
                  <span className="text-gray-300">Avg Deployment:</span>
                  <span className="text-red-400 font-semibold">100%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-orange-400/20">
                  <span className="text-gray-300">Reserves Safe:</span>
                  <span className="text-red-400 font-semibold">0%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-orange-400/20">
                  <span className="text-gray-300">ROI on Deployed:</span>
                  <span className="text-orange-400 font-semibold">
                    {formatPercentage(
                      (bitcoinTotalGain / bitcoinAllInStart) * 100
                    )}
                    %
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Risk Level:</span>
                  <span className="text-red-400 font-semibold">Maximum</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Capital Deployment Timeline */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-blue-400/20 p-8 shadow-lg shadow-blue-500/10 mb-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/40">
              <div className="text-xl">📊</div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Smart Capital Deployment Over Time
            </h3>
            <p className="text-lg text-gray-200 mb-6">
              How I strategically deployed capital month by month, keeping most
              of my money safe while generating consistent profits
            </p>
          </div>

          {/* Monthly Deployment Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {capitalDeploymentData.map((month) => {
              const monthName = month.month.split("-")[1];
              const monthNames = [
                "",
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
              const deploymentRatio = (month.deployed / availableCapital) * 100;

              return (
                <div
                  key={month.month}
                  className="bg-white/5 rounded-xl p-4 border border-white/10 text-center"
                >
                  <div className="text-lg font-bold text-white mb-1">
                    {monthNames[parseInt(monthName)]}
                  </div>
                  <div className="text-sm text-gray-300 mb-2">
                    ${month.deployed.toLocaleString()}
                  </div>
                  <div className="text-xs text-blue-400 mb-2">
                    {deploymentRatio.toFixed(1)}% deployed
                  </div>
                  <div className="text-sm font-semibold text-green-400">
                    +${month.profit.toFixed(0)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Deployment Summary */}
          <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/30 text-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <div className="text-sm text-gray-300 mb-1">
                  Average Deployed
                </div>
                <div className="text-2xl font-bold text-blue-300">
                  {formatPercentage(avgDeploymentRatio)}%
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-300 mb-1">Always Safe</div>
                <div className="text-2xl font-bold text-green-300">
                  {formatPercentage(reserveRatio)}%
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-300 mb-1">Total ROI</div>
                <div className="text-2xl font-bold text-purple-300">
                  {formatPercentage((totalProfits / totalDeployed) * 100)}%
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-300 mb-1">Risk Profile</div>
                <div className="text-2xl font-bold text-emerald-300">Smart</div>
              </div>
            </div>
          </div>
        </div>

        {/* The Capital Efficiency Advantage */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            The Capital Efficiency Advantage
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-400/30">
              <div className="text-4xl font-bold text-green-400 mb-2">
                {formatPercentage(totalProfits / bitcoinTotalGain)}x
              </div>
              <div className="text-purple-200 font-semibold">
                Better Efficiency
              </div>
              <div className="text-sm text-gray-300 mt-2">
                Profit per dollar at risk
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-blue-400/30">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                {formatPercentage(reserveRatio)}%
              </div>
              <div className="text-purple-200 font-semibold">
                Capital Protected
              </div>
              <div className="text-sm text-gray-300 mt-2">Always kept safe</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl font-bold text-purple-400 mb-2">0</div>
              <div className="text-purple-200 font-semibold">
                Sleepless Nights
              </div>
              <div className="text-sm text-gray-300 mt-2">
                No stress, no FOMO
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-400/20">
            <p className="text-lg text-purple-200 leading-relaxed">
              While the "all in" Bitcoin strategy put{" "}
              <span className="text-red-400 font-bold">
                ${formatCurrency(availableCapital)}
              </span>{" "}
              at full risk to generate{" "}
              <span className="text-orange-400 font-bold">
                ${formatCurrency(bitcoinTotalGain)}
              </span>{" "}
              in gains, my capital efficiency approach deployed only{" "}
              <span className="text-blue-400 font-bold">
                {formatPercentage(avgDeploymentRatio)}%
              </span>{" "}
              on average to generate{" "}
              <span className="text-green-400 font-bold">
                ${formatCurrency(totalProfits)}
              </span>{" "}
              in profits - with{" "}
              <span className="text-purple-400 font-bold">
                {formatPercentage(reserveRatio)}%
              </span>{" "}
              of my capital always protected.
            </p>
          </div>
        </div>

        {/* Data Transparency Footer */}
        <div className="text-center mt-8">
          <p className="text-purple-300 text-sm mb-2">
            * Data from actual USDC deployment transactions and Google Sheets
            tracking • January-August 2025
          </p>
          <p className="text-purple-400 text-xs">
            Capital deployment calculated from OPEN positions • Bitcoin returns
            from historical price data
          </p>
        </div>
      </div>
    </section>
  );
};
