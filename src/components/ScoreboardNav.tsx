import * as React from "react";
import { DollarSign, TrendingUp, Calendar } from "lucide-react";
import { useGoogleSheetsData } from "../hooks/useGoogleSheetsData";

export const ScoreboardNav: React.FC = () => {
  const { tradingStats, isLoading } = useGoogleSheetsData();
  const [isVisible, setIsVisible] = React.useState(true);

  // Calculate daily average
  const calculateDailyAvg = () => {
    if (!tradingStats?.totalProfit) return 0;
    const startDate = new Date("2025-01-08");
    const today = new Date();
    const daysSince = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    return daysSince > 0 ? tradingStats.totalProfit / daysSince : 0;
  };

  const dailyAvg = calculateDailyAvg();

  React.useEffect(() => {
    // Find TradingResults section by looking for element with id or data attribute
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When TradingResults section is in view, hide scoreboard
          // When it's out of view, show scoreboard
          setIsVisible(!entry.isIntersecting);
        });
      },
      {
        // Trigger when TradingResults section is 20% visible
        threshold: 0.2,
      }
    );

    // Observe the TradingResults section
    const tradingResultsSection = document.getElementById("trading-results");
    if (tradingResultsSection) {
      observer.observe(tradingResultsSection);
    }

    return () => {
      if (tradingResultsSection) {
        observer.unobserve(tradingResultsSection);
      }
    };
  }, []);

  return (
    <div
      className={`sticky top-16 left-0 right-0 z-45 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="bg-white/8 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Total Profit */}
            <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-2 border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 p-2 flex-shrink-0">
                <DollarSign className="w-full h-full text-white" />
              </div>
              <div className="min-w-0">
                {isLoading ? (
                  <div className="text-sm font-bold text-green-300 animate-pulse">
                    Loading...
                  </div>
                ) : (
                  <>
                    <div className="text-sm font-bold text-green-300 truncate">
                      $
                      {tradingStats?.totalProfit.toLocaleString("en-US", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                      +
                    </div>
                    <div className="text-xs text-gray-400">Total Profit</div>
                  </>
                )}
              </div>
            </div>

            {/* Monthly Average */}
            <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-2 border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 p-2 flex-shrink-0">
                <Calendar className="w-full h-full text-white" />
              </div>
              <div className="min-w-0">
                {isLoading ? (
                  <div className="text-sm font-bold text-blue-300 animate-pulse">
                    Loading...
                  </div>
                ) : (
                  <>
                    <div className="text-sm font-bold text-blue-300 truncate">
                      $
                      {tradingStats?.monthlyAverage?.toLocaleString("en-US", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }) || "0"}
                    </div>
                    <div className="text-xs text-gray-400">Monthly Avg</div>
                  </>
                )}
              </div>
            </div>

            {/* Daily Average */}
            <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-2 border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-2 flex-shrink-0">
                <TrendingUp className="w-full h-full text-white" />
              </div>
              <div className="min-w-0">
                {isLoading ? (
                  <div className="text-sm font-bold text-purple-300 animate-pulse">
                    Loading...
                  </div>
                ) : (
                  <>
                    <div className="text-sm font-bold text-purple-300 truncate">
                      $
                      {dailyAvg.toLocaleString("en-US", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </div>
                    <div className="text-xs text-gray-400">Daily Avg</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
