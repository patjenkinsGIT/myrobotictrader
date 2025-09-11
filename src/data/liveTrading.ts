// Live Trading Data - Updated from Google Sheets
// Last updated: 2025-09-11T19:44:38.294Z

export const liveTradingData = {
  totalProfit: 4061.44,
  monthlyAverage: 444.02,
  dailyAverage: 16.79,
  bestMonth: 817.31,
  totalTrades: 855,
  avgProfitPerTrade: 4.73,
  monthlyData: [
  {
    "month": "Jan",
    "profit": 477.17
  },
  {
    "month": "Feb",
    "profit": 686.72
  },
  {
    "month": "Mar",
    "profit": 261.93
  },
  {
    "month": "Apr",
    "profit": 552.58
  },
  {
    "month": "May",
    "profit": 376.29
  },
  {
    "month": "Jun",
    "profit": 382.98
  },
  {
    "month": "Jul",
    "profit": 817.31
  },
  {
    "month": "Aug",
    "profit": 413.54
  },
  {
    "month": "Sep",
    "profit": 92.91
  }
],
  lastUpdated: "2025-09-11T19:44:38.294Z",
  isLiveData: true,
};

export const calculateLiveDailyAverage = (): string => {
  return liveTradingData.dailyAverage.toFixed(2);
};