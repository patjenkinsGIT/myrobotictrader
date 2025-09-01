// Patrick's Real Trading Results - Updated from actual MyRoboticTrader account
export const tradingData = {
  // Total profit since starting with the robotic trader
  totalProfit: 3973.86,

  // Recent performance metrics
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
  const days = Math.max(tradingData.accountInfo.tradingDays, 1);
  return (tradingData.totalProfit / days).toFixed(2);
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
