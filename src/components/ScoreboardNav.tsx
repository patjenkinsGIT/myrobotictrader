import * as React from "react";
import { DollarSign, TrendingUp, Calendar } from "lucide-react";
import { useGoogleSheetsData } from "../hooks/useGoogleSheetsData";

export const ScoreboardNav: React.FC = () => {
  const { tradingStats, isLoading } = useGoogleSheetsData();

  // Calculate daily average
  const calculateDailyAvg = () => {
    if (!tradingStats?.totalProfit) return 0;
    const startDate = new Date("2025-01-08");
    const today = new Date();
    const daysSince = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    return daysSince > 0 ? tradingStats.totalProfit / daysSince : 0;
  };

  const dailyAvg = calculateDailyAvg();

  return (
    <div className="bg-white/8 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {/* Total Profit */}
            <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-1.5 border border-white/10">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 p-1.5 flex-shrink-0">
                <DollarSign className="w-full h-full text-white" />
              </div>
              <div className="min-w-0">
                {isLoading ? (
                  <div className="text-xs font-bold text-green-300 animate-pulse">
                    Loading...
                  </div>
                ) : (
                  <>
                    <div className="text-xs font-bold text-green-300 truncate">
                      $
                      {tradingStats?.totalProfit.toLocaleString("en-US", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                      +
                    </div>
                    <div className="text-[10px] text-gray-400">Total Profit</div>
                  </>
                )}
              </div>
            </div>

            {/* Monthly Average */}
            <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-1.5 border border-white/10">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 p-1.5 flex-shrink-0">
                <Calendar className="w-full h-full text-white" />
              </div>
              <div className="min-w-0">
                {isLoading ? (
                  <div className="text-xs font-bold text-blue-300 animate-pulse">
                    Loading...
                  </div>
                ) : (
                  <>
                    <div className="text-xs font-bold text-blue-300 truncate">
                      $
                      {tradingStats?.monthlyAverage?.toLocaleString("en-US", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }) || "0"}
                    </div>
                    <div className="text-[10px] text-gray-400">Monthly Avg</div>
                  </>
                )}
              </div>
            </div>

            {/* Daily Average */}
            <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-1.5 border border-white/10">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-1.5 flex-shrink-0">
                <TrendingUp className="w-full h-full text-white" />
              </div>
              <div className="min-w-0">
                {isLoading ? (
                  <div className="text-xs font-bold text-purple-300 animate-pulse">
                    Loading...
                  </div>
                ) : (
                  <>
                    <div className="text-xs font-bold text-purple-300 truncate">
                      $
                      {dailyAvg.toLocaleString("en-US", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </div>
                    <div className="text-[10px] text-gray-400">Daily Avg</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
