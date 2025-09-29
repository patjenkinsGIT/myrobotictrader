// src/components/TradingResults.tsx - UPDATED with props
import React from "react";
import {
  TrendingUp,
  Calendar,
  BarChart3,
  Zap,
  Target,
  AlertCircle,
  Clock,
  Trophy,
} from "lucide-react";
import { calculateTimeSinceStart } from "../utils/tradingTime";
import { LiveTransactionLog } from "./LiveTransactionLog";

// Props interface
interface TradingResultsProps {
  tradingStats: any;
  tradingRecords: any;
  isLoading: boolean;
  error: string | null;
}

export const TradingResults: React.FC<TradingResultsProps> = ({
  tradingStats,
  tradingRecords,
  isLoading,
  error,
}) => {
  const timeSinceStart = calculateTimeSinceStart();

  if (isLoading) {
    return (
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-400 mr-3"></div>
            <span className="text-gray-300 text-lg">
              Loading live trading data...
            </span>
          </div>
        </div>
      </section>
    );
  }

  const hasError = error && error.trim() !== "";
  const hasValidData =
    tradingStats &&
    typeof tradingStats === "object" &&
    tradingStats.totalProfit !== undefined;

  if (hasError || !hasValidData) {
    return (
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 mb-8">
            <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">
              Unable to Load Live Trading Data
            </h3>
            <p className="text-red-300 mb-6">
              {hasError
                ? error
                : "Trading data is not available. This could be due to API configuration issues or data loading problems."}
            </p>
          </div>
        </div>
      </section>
    );
  }

  const currentData = tradingStats;

  return (
    <section id="results" className="py-16 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Live Trading Results
          </h2>
          <p className="text-xl text-gray-300">
            Real-time performance metrics from my AI-enhanced trading system
          </p>
        </div>

        {/* First row - Total Profit, Total Trades, Avg Per Trade */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Total Profit Card */}
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105">
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 mb-4 mx-auto">
              <TrendingUp className="w-full h-full text-white" />
            </div>
            <div className="relative text-center">
              <div className="text-3xl font-bold text-green-300 mb-2 font-mono">
                ${currentData.totalProfit?.toFixed(2) || "0.00"}
              </div>
              <div className="text-gray-200 font-medium">Total Profits</div>
              <div className="text-green-300 text-sm mt-1">
                {timeSinceStart}
              </div>
            </div>
          </div>

          {/* Total Trades Card */}
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105">
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 mb-4 mx-auto">
              <Target className="w-full h-full text-white" />
            </div>
            <div className="relative text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2 font-mono">
                {currentData.totalTrades?.toLocaleString() || "0"}
              </div>
              <div className="text-gray-200 font-medium">Total Trades</div>
              <div className="text-blue-300 text-sm mt-1">
                Consistent & Automated
              </div>
            </div>
          </div>

          {/* Avg Per Trade Card */}
          <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105">
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 mb-4 mx-auto">
              <Zap className="w-full h-full text-white" />
            </div>
            <div className="relative text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2 font-mono">
                ${currentData.avgProfitPerTrade?.toFixed(2) || "0.00"}
              </div>
              <div className="text-gray-200 font-medium">Avg Per Trade</div>
              <div className="text-purple-300 text-sm mt-1">Steady Gains</div>
            </div>
          </div>
        </div>

        {/* Live Transaction Log */}
        <LiveTransactionLog />

        {/* Second row - Monthly Average, Daily Average, Best Month */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Monthly Average */}
          <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 mb-4 mx-auto">
              <Calendar className="w-full h-full text-white" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-300 mb-2 font-mono">
                ${currentData.monthlyAverage?.toFixed(2) || "0.00"}
              </div>
              <div className="text-gray-200 font-medium">Monthly Average</div>
              <div className="text-emerald-300 text-sm mt-1">
                Consistent Growth
              </div>
            </div>
          </div>

          {/* Daily Average */}
          <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 p-3 mb-4 mx-auto">
              <Clock className="w-full h-full text-white" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-300 mb-2 font-mono">
                ${currentData.dailyAvg?.toFixed(2) || "0.00"}
              </div>
              <div className="text-gray-200 font-medium">Daily Average</div>
              <div className="text-orange-300 text-sm mt-1">Passive Income</div>
            </div>
          </div>

          {/* Best Month */}
          <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 p-3 mb-4 mx-auto">
              <BarChart3 className="w-full h-full text-white" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2 font-mono">
                ${currentData.bestMonthProfit?.toFixed(2) || "0.00"}
              </div>
              <div className="text-gray-200 font-medium">Best Month</div>
              <div className="text-yellow-300 text-sm mt-1">
                Peak Performance
              </div>
            </div>
          </div>
        </div>

        {/* NEW: Records Scoreboard Section */}
        {tradingRecords &&
          (tradingRecords.bestDay ||
            tradingRecords.bestWeek ||
            tradingRecords.bestMonth) && (
            <div className="mt-16">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Trophy className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-3xl font-bold text-white">
                    Trading Records
                  </h3>
                  <Trophy className="w-8 h-8 text-yellow-400" />
                </div>
                <p className="text-gray-300">
                  Personal bests across different timeframes
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Best Day Record */}
                {tradingRecords.bestDay && (
                  <RecordCard
                    title="Best Day"
                    icon="🔥"
                    amount={tradingRecords.bestDay.amount}
                    period={tradingRecords.bestDay.period}
                    trades={tradingRecords.bestDay.trades}
                    beatBy={tradingRecords.bestDay.beatBy}
                  />
                )}

                {/* Best Week Record */}
                {tradingRecords.bestWeek && (
                  <RecordCard
                    title="Best Week"
                    icon="💰"
                    amount={tradingRecords.bestWeek.amount}
                    period={tradingRecords.bestWeek.period}
                    trades={tradingRecords.bestWeek.trades}
                    beatBy={tradingRecords.bestWeek.beatBy}
                  />
                )}

                {/* Best Month Record */}
                {tradingRecords.bestMonth && (
                  <RecordCard
                    title="Best Month"
                    icon="🚀"
                    amount={tradingRecords.bestMonth.amount}
                    period={tradingRecords.bestMonth.period}
                    trades={tradingRecords.bestMonth.trades}
                    beatBy={tradingRecords.bestMonth.beatBy}
                  />
                )}
              </div>
            </div>
          )}
      </div>
    </section>
  );
};

// Record Card Component
interface RecordCardProps {
  title: string;
  icon: string;
  amount: number;
  period: string;
  trades: number;
  beatBy: number;
}

const RecordCard: React.FC<RecordCardProps> = ({
  title,
  icon,
  amount,
  period,
  trades,
  beatBy,
}) => {
  const isNewRecord = beatBy > 0;

  return (
    <div className="relative bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-lg rounded-xl p-6 border-2 border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 group">
      {/* New Record Badge */}
      {isNewRecord && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
            ⭐ NEW RECORD
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-4xl">{icon}</span>
        <Trophy className="w-6 h-6 text-yellow-400 opacity-60 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Title */}
      <h4 className="text-lg font-semibold text-white/90 mb-2">{title}</h4>

      {/* Amount */}
      <div className="mb-3">
        <span className="text-3xl font-bold text-yellow-400">
          ${amount.toFixed(2)}
        </span>
      </div>

      {/* Period */}
      <p className="text-sm text-gray-300 mb-3">{period}</p>

      {/* Stats Row */}
      <div className="flex items-center justify-between text-sm">
        <div>
          <span className="text-gray-400">{trades} trades</span>
        </div>
        {isNewRecord && (
          <div className="text-green-400 font-semibold">
            +${beatBy.toFixed(2)}
          </div>
        )}
      </div>

      {/* Hover effect border glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-400/0 to-orange-400/0 group-hover:from-yellow-400/10 group-hover:to-orange-400/10 transition-all duration-300 pointer-events-none" />
    </div>
  );
};
