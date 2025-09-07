// Live Trading Data - Updated from Google Sheets
// Last updated: 2025-09-07T01:56:16.063Z

export const liveTradingData = {
  totalProfit: 4010.49,
  monthlyAverage: 445.61,
  dailyAverage: 16.64,
  bestMonth: 817.31,
  totalTrades: 847,
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
    "profit": 41.96
  }
],
  lastUpdated: "2025-09-07T01:56:16.063Z",
  isLiveData: true,
};

export const calculateLiveDailyAverage = (): string => {
  return liveTradingData.dailyAverage.toFixed(2);
};