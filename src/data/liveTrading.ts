// Live Trading Data - Updated from Google Sheets
// Last updated: 2025-09-04T12:21:52.194Z

export const liveTradingData = {
  totalProfit: 3996.17,
  monthlyAverage: 444.02,
  dailyAverage: 16.72,
  bestMonth: 817.31,
  totalTrades: 844,
  avgProfitPerTrade: 4.73,
  monthlyData: [
  {
    "month": "Jan",
    "profit": 477.23
  },
  {
    "month": "Feb",
    "profit": 686.71
  },
  {
    "month": "Mar",
    "profit": 261.97
  },
  {
    "month": "Apr",
    "profit": 552.58
  },
  {
    "month": "May",
    "profit": 376.3
  },
  {
    "month": "Jun",
    "profit": 382.97
  },
  {
    "month": "Jul",
    "profit": 817.31
  },
  {
    "month": "Aug",
    "profit": 413.59
  },
  {
    "month": "Sep",
    "profit": 27.51
  }
],
  lastUpdated: "2025-09-04T12:21:52.195Z",
  isLiveData: true,
};

export const calculateLiveDailyAverage = (): string => {
  return liveTradingData.dailyAverage.toFixed(2);
};