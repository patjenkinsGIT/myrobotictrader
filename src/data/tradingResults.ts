// Patrick's Real Trading Results - Updated from actual MyRoboticTrader account
export const tradingData = {
  // Total profit since starting with the robotic trader
  totalProfit: 3973.86,

  // Monthly average and daily average
  monthlyAverage: 441.54,
  dailyAverage: 16.79,

  // Best performing month
  bestMonth: 817.31,

  // Trading statistics
  totalTrades: 840,
  avgProfitPerTrade: 4.73,

  // Monthly breakdown data
  monthlyData: [
    { month: "Jan", profit: 477.17 },
    { month: "Feb", profit: 686.72 },
    { month: "Mar", profit: 261.93 },
    { month: "Apr", profit: 552.58 },
    { month: "May", profit: 376.29 },
    { month: "Jun", profit: 382.98 },
    { month: "Jul", profit: 817.31 },
    { month: "Aug", profit: 413.54 },
  ],

  // Recent performance metrics (keeping your original data)
  todayProfit: 5.33,
  thirtyDayProfit: 408.33,

  // When you last updated these numbers
  lastUpdated: "2025-09-01",

  // Account info
  accountInfo: {
    platform: "Coinbase Pro",
    startDate: "2025-01-08", // Started January 8, 2025
    tradingDays: Math.floor(
      (new Date().getTime() - new Date("2025-01-08").getTime()) /
        (1000 * 60 * 60 * 24)
    ),
  },
};

// Helper functions
export const calculateDailyAverage = () => {
  return tradingData.dailyAverage.toFixed(2);
};

export const calculateWeeklyAverage = () => {
  const weeks = Math.max(tradingData.accountInfo.tradingDays / 7, 1);
  return (tradingData.totalProfit / weeks).toFixed(2);
};

export const getRecentWeeks = (count: number = 3) => {
  return [
    { week: "Week 3 Aug", profit: 408.33 },
    { week: "Week 2 Aug", profit: 520.0 },
    { week: "Week 1 Aug", profit: 480.0 },
  ].slice(0, count);
};
