// Live Trading Data - Updated from Google Sheets
// Last updated: 2025-09-07T18:29:26.280Z

export const liveTradingData = {
  totalProfit: 4021.15,
  monthlyAverage: 446.79,
  dailyAverage: 16.62,
  bestMonth: 817.31,
  totalTrades: 849,
  avgProfitPerTrade: 4.74,
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
    "profit": 52.62
  }
],
  lastUpdated: "2025-09-07T18:29:26.280Z",
  isLiveData: true,
};

export const calculateLiveDailyAverage = (): string => {
  return liveTradingData.dailyAverage.toFixed(2);
};