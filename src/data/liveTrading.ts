// Live Trading Data - Updated from Google Sheets
// Last updated: 2025-09-05T01:50:28.698Z

export const liveTradingData = {
  totalProfit: 4000.25,
  monthlyAverage: 444.47,
  dailyAverage: 16.74,
  bestMonth: 817.31,
  totalTrades: 845,
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
    "profit": 31.72
  }
],
  lastUpdated: "2025-09-05T01:50:28.698Z",
  isLiveData: true,
};

export const calculateLiveDailyAverage = (): string => {
  return liveTradingData.dailyAverage.toFixed(2);
};