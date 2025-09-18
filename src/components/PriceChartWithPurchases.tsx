import React, { useState, useEffect, useCallback } from "react";
import { TrendingDown } from "lucide-react";
import { tradingDataCache } from "../utils/smartCache";

interface LiveTransaction {
  id: string;
  coin: string;
  action: "CLOSE" | "OPEN";
  price: string;
  quantity: string;
  profit: number;
  timestamp: string;
  status: "completed" | "profit_goal_reached";
}

interface ChartDataPoint {
  timestamp: Date;
  price: number;
  isTransaction: boolean;
  transactionType?: "OPEN" | "CLOSE";
  profit?: number;
  quantity?: string;
}

interface CoinAnalysis {
  coin: string;
  totalTrades: number;
  openTrades: number;
  closedTrades: number;
  totalProfit: number;
  avgProfit: number;
  successRate: number;
  bestTrade: number;
  recentActivity: LiveTransaction[];
}

export const PriceChartWithPurchases: React.FC = () => {
  const [transactions, setTransactions] = useState<LiveTransaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCoin, setSelectedCoin] = useState<string>("BONK");
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
  const [coinAnalysis, setCoinAnalysis] = useState<CoinAnalysis[]>([]);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [isCacheHit, setIsCacheHit] = useState(false);

  const SHEET_TAB = "Last25Results";
  const SHEET_RANGE = "A:G";

  const formatPrice = useCallback((price: string): string => {
    if (!price) return "$0.00";
    if (price.includes("$")) return price;
    const cleanPrice = price.replace(/[,$]/g, "");
    const numPrice = parseFloat(cleanPrice);
    if (isNaN(numPrice)) return price;
    if (numPrice < 0.00001) return `$${numPrice.toFixed(8)}`;
    else if (numPrice < 0.001) return `$${numPrice.toFixed(5)}`;
    else if (numPrice < 1) return `$${numPrice.toFixed(4)}`;
    else if (numPrice < 100) return `$${numPrice.toFixed(2)}`;
    else return `$${numPrice.toLocaleString()}`;
  }, []);

  const formatQuantity = useCallback((quantity: string): string => {
    if (!quantity) return "0";
    const cleanQuantity = quantity.replace(/[,$]/g, "");
    const numQuantity = parseFloat(cleanQuantity);
    if (isNaN(numQuantity)) return quantity;
    if (numQuantity >= 1000000) return `${(numQuantity / 1000000).toFixed(1)}M`;
    else if (numQuantity >= 1000) return `${(numQuantity / 1000).toFixed(1)}K`;
    else if (numQuantity < 1) return numQuantity.toFixed(3);
    else return numQuantity.toLocaleString();
  }, []);

  const formatTimestamp = useCallback((timestamp: string): string => {
    if (!timestamp) return "Unknown";
    if (timestamp.toLowerCase().includes("today")) return timestamp;
    try {
      const date = new Date(timestamp);
      if (!isNaN(date.getTime())) {
        const now = new Date();
        if (date.toDateString() === now.toDateString()) {
          return `Today ${date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}`;
        } else {
          return (
            date.toLocaleDateString() +
            " " +
            date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          );
        }
      }
    } catch (e) {
      // If parsing fails, return original
    }
    return timestamp;
  }, []);

  const parseStatus = useCallback(
    (status: string): "completed" | "profit_goal_reached" => {
      if (!status) return "completed";
      return status.toLowerCase().includes("profit goal reached")
        ? "profit_goal_reached"
        : "completed";
    },
    []
  );

  const parseGoogleSheetsData = useCallback(
    (rows: string[][]): LiveTransaction[] => {
      if (!rows || rows.length === 0) return [];
      return rows
        .map((row, index) => {
          if (index === 0 && row[0]?.toLowerCase() === "coin") return null;
          const [coin, action, price, quantity, status, profit, timestamp] =
            row;
          if (!coin || !profit) return null;
          const parsedProfit =
            parseFloat(profit.toString().replace(/[$,]/g, "")) || 0;
          return {
            id: `tx_${Date.now()}_${index}`,
            coin: coin?.toString().trim() || "",
            action: (action?.toString().trim() as "CLOSE" | "OPEN") || "CLOSE",
            price: formatPrice(price?.toString() || ""),
            quantity: formatQuantity(quantity?.toString() || ""),
            profit: parsedProfit,
            timestamp: formatTimestamp(timestamp?.toString() || ""),
            status: parseStatus(status?.toString() || ""),
          };
        })
        .filter(
          (tx): tx is LiveTransaction =>
            tx !== null && tx.coin.length > 0 && tx.profit !== undefined
        );
    },
    [formatPrice, formatQuantity, formatTimestamp, parseStatus]
  );

  const getCacheStatus = () => {
    const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID;
    const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
    if (!SHEET_ID || !API_KEY || error)
      return { text: "SAMPLE", color: "text-gray-300" };
    if (isCacheHit) return { text: "CACHED", color: "text-blue-300" };
    return { text: "LIVE", color: "text-green-300" };
  };

  const fetchTransactions = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      setIsCacheHit(false);
      const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID;
      const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
      if (SHEET_ID && API_KEY) {
        const cacheKey = `${SHEET_ID}_${SHEET_TAB}_${SHEET_RANGE}`;
        let cachedData = tradingDataCache.get(cacheKey);
        if (cachedData) {
          setTransactions(cachedData as LiveTransaction[]);
          setLastUpdated(new Date());
          setIsCacheHit(true);
          setIsLoading(false);
          return;
        }
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_TAB}!${SHEET_RANGE}?key=${API_KEY}`;
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(
            `Google Sheets API error: ${response.status} ${response.statusText}`
          );
        const data = await response.json();
        if (data.values && data.values.length > 0) {
          const liveTransactions = parseGoogleSheetsData(data.values);
          tradingDataCache.set(cacheKey, liveTransactions);
          setTransactions(liveTransactions);
          setLastUpdated(new Date());
          setIsCacheHit(false);
          return;
        } else {
          setError("No data found in Last25Results tab");
        }
      } else {
        setError("Google Sheets configuration missing");
      }
    } catch (err) {
      console.error("Failed to fetch transactions:", err);
      setError("Failed to load live transaction data");
    } finally {
      setIsLoading(false);
    }
  }, [SHEET_TAB, SHEET_RANGE, parseGoogleSheetsData]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  useEffect(() => {
    if (transactions.length === 0) return;
    const coinGroups = transactions.reduce((acc, tx) => {
      if (!acc[tx.coin]) acc[tx.coin] = [];
      acc[tx.coin].push(tx);
      return acc;
    }, {} as Record<string, LiveTransaction[]>);

    const analysis = Object.entries(coinGroups).map(([coin, txs]) => {
      const closedTrades = txs.filter(
        (tx: LiveTransaction) => tx.action === "CLOSE"
      );
      const openTrades = txs.filter(
        (tx: LiveTransaction) => tx.action === "OPEN"
      );
      const totalProfit = closedTrades.reduce(
        (sum: number, tx: LiveTransaction) => sum + tx.profit,
        0
      );
      const avgProfit =
        closedTrades.length > 0 ? totalProfit / closedTrades.length : 0;
      const bestTrade = Math.max(
        ...closedTrades.map((tx: LiveTransaction) => tx.profit),
        0
      );
      const recentActivity = txs
        .sort(
          (a: LiveTransaction, b: LiveTransaction) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        )
        .slice(0, 5);
      return {
        coin,
        totalTrades: txs.length,
        openTrades: openTrades.length,
        closedTrades: closedTrades.length,
        totalProfit,
        avgProfit,
        successRate: closedTrades.length > 0 ? 100 : 0,
        bestTrade,
        recentActivity,
      };
    });

    analysis.sort((a, b) => b.totalProfit - a.totalProfit);
    setCoinAnalysis(analysis);
    if (analysis.length > 0 && !analysis.find((a) => a.coin === selectedCoin)) {
      setSelectedCoin(analysis[0].coin);
    }
  }, [transactions, selectedCoin]);

  useEffect(() => {
    if (transactions.length === 0) return;
    const coinTransactions = transactions
      .filter((tx) => tx.coin === selectedCoin)
      .sort(
        (a, b) =>
          new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      );
    if (coinTransactions.length === 0) return;
    const chartPoints: ChartDataPoint[] = [];
    coinTransactions.forEach((tx) => {
      const currentPrice = parseFloat(
        tx.price.replace("$", "").replace(",", "")
      );
      const timestamp = new Date(tx.timestamp);
      chartPoints.push({
        timestamp,
        price: currentPrice,
        isTransaction: true,
        transactionType: tx.action,
        profit: tx.profit,
        quantity: tx.quantity,
      });
    });
    chartPoints.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
    setChartData(chartPoints);
  }, [transactions, selectedCoin]);

  const availableCoins = coinAnalysis.slice(0, 8);
  const cacheStatus = getCacheStatus();

  if (isLoading) {
    return (
      <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-8">
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400 mr-3"></div>
          <span className="text-gray-300 text-lg">
            Loading strategic analysis...
          </span>
        </div>
      </div>
    );
  }

  if (error || chartData.length === 0) {
    return (
      <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-8">
        <div className="text-center">
          <TrendingDown className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-4">
            No Chart Data Available
          </h3>
          <p className="text-gray-300">
            {error ||
              `No transaction data found for ${selectedCoin}. Available coins: ${availableCoins
                .map((a) => a.coin)
                .join(", ")}`}
          </p>
        </div>
      </div>
    );
  }

  // Chart calculations
  const chartWidth = 900;
  const chartHeight = 500;
  const padding = 80;
  const prices = chartData.map((d) => d.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceRange = maxPrice - minPrice || 0.000001;
  const paddedMinPrice = minPrice - priceRange * 0.1;
  const paddedMaxPrice = maxPrice + priceRange * 0.1;
  const paddedPriceRange = paddedMaxPrice - paddedMinPrice;
  const minTime = Math.min(...chartData.map((d) => d.timestamp.getTime()));
  const maxTime = Math.max(...chartData.map((d) => d.timestamp.getTime()));
  const timeRange = maxTime - minTime || 1;

  const scaleX = (timestamp: Date) => {
    const ratio = (timestamp.getTime() - minTime) / timeRange;
    return padding + ratio * (chartWidth - 2 * padding);
  };

  const scaleY = (price: number) => {
    const ratio = (price - paddedMinPrice) / paddedPriceRange;
    return chartHeight - padding - ratio * (chartHeight - 2 * padding);
  };

  const pathData = chartData
    .map((point, index) => {
      const x = scaleX(point.timestamp);
      const y = scaleY(point.price);
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  const transactionPoints = chartData.filter((d) => d.isTransaction);
  const buyPoints = transactionPoints.filter(
    (d) => d.transactionType === "OPEN"
  );
  const sellPoints = transactionPoints.filter(
    (d) => d.transactionType === "CLOSE"
  );

  return (
    <div className="space-y-8">
      {/* Coin Selector - Simple and focused */}
      <div className="flex flex-wrap justify-center gap-2">
        {availableCoins.map((coinData) => (
          <button
            key={coinData.coin}
            onClick={() => setSelectedCoin(coinData.coin)}
            className={`px-4 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCoin === coinData.coin
                ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/30"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
          >
            <div className="text-sm font-bold">{coinData.coin}</div>
            <div className="text-xs opacity-75">
              {coinData.totalTrades} trades • ${coinData.totalProfit.toFixed(0)}
            </div>
          </button>
        ))}
      </div>

      {/* Chart Container - Main focus */}
      <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-8">
        <div className="text-center mb-6">
          <div className="flex justify-center items-center gap-2 mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Strategic Purchase Chart - {selectedCoin}
            </h3>
            <div className="flex items-center gap-2 bg-black/20 rounded-full px-3 py-1">
              <div
                className={`w-2 h-2 rounded-full ${
                  isCacheHit ? "bg-blue-400" : "bg-green-400"
                } animate-pulse`}
              ></div>
              <span className={`text-xs font-medium ${cacheStatus.color}`}>
                {cacheStatus.text}
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            Updated: {lastUpdated.toLocaleTimeString()} • Live data from Google
            Sheets
          </p>
        </div>

        <div className="relative bg-black/20 rounded-xl p-4 overflow-x-auto">
          <div className="min-w-[900px]">
            <svg
              width={chartWidth}
              height={chartHeight}
              className="w-full h-auto"
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            >
              <defs>
                <pattern
                  id="grid"
                  width="50"
                  height="50"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 50 0 L 0 0 0 50"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                  />
                </pattern>
                <linearGradient
                  id="priceGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>

              <rect width={chartWidth} height={chartHeight} fill="url(#grid)" />

              {pathData && (
                <path
                  d={pathData}
                  fill="none"
                  stroke="url(#priceGradient)"
                  strokeWidth="3"
                  className="drop-shadow-lg"
                />
              )}

              {buyPoints.map((point, index) => {
                const x = scaleX(point.timestamp);
                const y = scaleY(point.price);
                return (
                  <g key={`buy-${index}`}>
                    <circle
                      cx={x}
                      cy={y}
                      r="10"
                      fill="#10B981"
                      stroke="#ffffff"
                      strokeWidth="3"
                      className="drop-shadow-lg"
                    />
                    <text
                      x={x}
                      y={y - 20}
                      textAnchor="middle"
                      fill="#10B981"
                      fontSize="12"
                      fontWeight="bold"
                      className="drop-shadow-sm"
                    >
                      BUY
                    </text>
                  </g>
                );
              })}

              {sellPoints.map((point, index) => {
                const x = scaleX(point.timestamp);
                const y = scaleY(point.price);
                return (
                  <g key={`sell-${index}`}>
                    <circle
                      cx={x}
                      cy={y}
                      r="10"
                      fill="#EF4444"
                      stroke="#ffffff"
                      strokeWidth="3"
                      className="drop-shadow-lg"
                    />
                    <text
                      x={x}
                      y={y - 20}
                      textAnchor="middle"
                      fill="#EF4444"
                      fontSize="12"
                      fontWeight="bold"
                      className="drop-shadow-sm"
                    >
                      SELL
                    </text>
                    {point.profit && (
                      <text
                        x={x}
                        y={y + 25}
                        textAnchor="middle"
                        fill="#10B981"
                        fontSize="11"
                        fontWeight="bold"
                        className="drop-shadow-sm"
                      >
                        +${point.profit.toFixed(2)}
                      </text>
                    )}
                  </g>
                );
              })}

              {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
                const price = paddedMinPrice + paddedPriceRange * ratio;
                const y = scaleY(price);
                return (
                  <g key={`y-label-${ratio}`}>
                    <line
                      x1={padding - 10}
                      y1={y}
                      x2={padding}
                      y2={y}
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="1"
                    />
                    <text
                      x={padding - 15}
                      y={y + 4}
                      textAnchor="end"
                      fill="rgba(255,255,255,0.7)"
                      fontSize="12"
                    >
                      ${price < 0.001 ? price.toFixed(6) : price.toFixed(4)}
                    </text>
                  </g>
                );
              })}

              {[0, 0.5, 1].map((ratio) => {
                const time = minTime + timeRange * ratio;
                const x = scaleX(new Date(time));
                const date = new Date(time);
                return (
                  <g key={`x-label-${ratio}`}>
                    <line
                      x1={x}
                      y1={chartHeight - padding}
                      x2={x}
                      y2={chartHeight - padding + 10}
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="1"
                    />
                    <text
                      x={x}
                      y={chartHeight - padding + 25}
                      textAnchor="middle"
                      fill="rgba(255,255,255,0.7)"
                      fontSize="12"
                    >
                      {date.toLocaleDateString()}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 mt-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
            <span className="text-gray-300">
              Strategic Buy ({buyPoints.length})
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-white"></div>
            <span className="text-gray-300">
              Profit Taking ({sellPoints.length})
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-green-500 rounded"></div>
            <span className="text-gray-300">Price Movement</span>
          </div>
        </div>
      </div>
    </div>
  );
};
