// Live Trading Data - Updated from Google Sheets
// Last updated: 2025-09-09T22:28:31.185Z

export const liveTradingData = {
  totalProfit: 4054.46,
  monthlyAverage: 450.5,
  dailyAverage: 16.62,
  bestMonth: 817.31,
  totalTrades: 854,
  avgProfitPerTrade: 4.75,
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
    "profit": 85.93
  }
],
  lastUpdated: "2025-09-09T22:28:31.185Z",
  isLiveData: true,
};

export const calculateLiveDailyAverage = (): string => {
  return liveTradingData.dailyAverage.toFixed(2);
};