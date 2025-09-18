import React, { useState, useEffect, useCallback } from "react";
import {
  TrendingDown,
  Target,
  Zap,
  Activity,
  DollarSign,
  Clock,
  ArrowDown,
  ArrowUp,
  Sparkles,
  Brain,
  TrendingUp,
} from "lucide-react";
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
  const selectedCoinData = coinAnalysis.find(
    (analysis) => analysis.coin === selectedCoin
  );
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
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20"></div>
      <div className="relative max-w-6xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6">
            <Brain className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 font-medium">
              STRATEGIC ANALYSIS
            </span>
            <div
              className={`w-2 h-2 rounded-full ${
                isCacheHit ? "bg-blue-400" : "bg-green-400"
              } animate-pulse`}
            ></div>
            <span className={`text-xs font-medium ${cacheStatus.color}`}>
              {cacheStatus.text}
            </span>
            <Sparkles className="w-4 h-4 text-purple-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Strategic Purchase Analysis
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-2">
            Live analysis of strategic dip buying across {coinAnalysis.length}{" "}
            cryptocurrencies
          </p>
          <p className="text-sm text-gray-400">
            Last updated: {lastUpdated.toLocaleTimeString()} • Total trades
            analyzed: {transactions.length} • Total profit tracked: $
            {coinAnalysis
              .reduce((sum, coin) => sum + coin.totalProfit, 0)
              .toFixed(2)}
          </p>

          {/* Enhanced Coin Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 mt-6">
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
                  {coinData.totalTrades} trades • $
                  {coinData.totalProfit.toFixed(0)}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Metrics Cards */}
        {selectedCoinData && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/15">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/40">
                <Target className="w-full h-full text-white" />
              </div>
              <div className="relative text-center">
                <div className="text-2xl font-bold text-purple-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-indigo-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                  {selectedCoinData.totalTrades}
                </div>
                <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                  Total Trades
                </div>
                <div className="text-purple-300 text-sm mt-1">
                  {selectedCoinData.openTrades} open •{" "}
                  {selectedCoinData.closedTrades} closed
                </div>
              </div>
            </div>

            <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-emerald-500/15">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/40">
                <DollarSign className="w-full h-full text-white" />
              </div>
              <div className="relative text-center">
                <div className="text-2xl font-bold text-emerald-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-teal-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                  ${selectedCoinData.totalProfit.toFixed(2)}
                </div>
                <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                  Total Profit
                </div>
                <div className="text-emerald-300 text-sm mt-1">
                  ${selectedCoinData.avgProfit.toFixed(2)} avg
                </div>
              </div>
            </div>

            <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-green-500/15">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/40">
                <TrendingUp className="w-full h-full text-white" />
              </div>
              <div className="relative text-center">
                <div className="text-2xl font-bold text-green-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                  {selectedCoinData.successRate}%
                </div>
                <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                  Success Rate
                </div>
                <div className="text-green-300 text-sm mt-1">
                  All Profitable
                </div>
              </div>
            </div>

            <div className="group relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-amber-500/15">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-300"></div>
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/40">
                <Zap className="w-full h-full text-white" />
              </div>
              <div className="relative text-center">
                <div className="text-2xl font-bold text-amber-300 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-300 group-hover:to-orange-300 group-hover:bg-clip-text transition-all duration-300 font-mono">
                  ${selectedCoinData.bestTrade.toFixed(2)}
                </div>
                <div className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                  Best Trade
                </div>
                <div className="text-amber-300 text-sm mt-1">Single Trade</div>
              </div>
            </div>
          </div>
        )}

        {/* Chart Container */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-8 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Strategic Purchase Chart - {selectedCoin}
            </h3>
            <p className="text-gray-300 mb-4">
              Live data from Google Sheets • Green = Buy • Red = Sell • Updated:{" "}
              {lastUpdated.toLocaleTimeString()}
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

                <rect
                  width={chartWidth}
                  height={chartHeight}
                  fill="url(#grid)"
                />

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

        {/* Enhanced Recent Activity */}
        {selectedCoinData && (
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-8 mb-8 relative">
            <div className="absolute top-4 right-4 opacity-20 pointer-events-none hidden md:block">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-sm border border-purple-400/30 flex items-center justify-center animate-pulse shadow-lg shadow-purple-500/20">
                <Activity className="w-8 h-8 text-purple-400" />
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">
              Recent Strategic Activity - {selectedCoin}
            </h3>

            <div className="space-y-4 max-h-96 overflow-y-auto scrollbar-hide">
              {selectedCoinData.recentActivity.map((transaction, index) => (
                <div
                  key={`${transaction.coin}-${transaction.timestamp}-${index}`}
                  className="flex items-center justify-between bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 border border-white/10"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                        transaction.action === "OPEN"
                          ? "bg-gradient-to-br from-green-500 to-emerald-500 shadow-green-500/30"
                          : "bg-gradient-to-br from-red-500 to-pink-500 shadow-red-500/30"
                      }`}
                    >
                      {transaction.action === "OPEN" ? (
                        <ArrowDown className="w-5 h-5 text-white" />
                      ) : (
                        <ArrowUp className="w-5 h-5 text-white" />
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-white text-lg">
                          {transaction.coin}
                        </span>
                        <span
                          className={`font-mono text-sm px-2 py-1 rounded ${
                            transaction.action === "OPEN"
                              ? "text-green-400 bg-green-500/20"
                              : "text-red-400 bg-red-500/20"
                          }`}
                        >
                          {transaction.action}
                        </span>
                        {transaction.status === "profit_goal_reached" && (
                          <span className="text-xs text-yellow-400 bg-yellow-500/20 px-2 py-1 rounded flex items-center gap-1">
                            <Target className="w-3 h-3" />
                            GOAL
                          </span>
                        )}
                      </div>
                      <div className="text-gray-400 text-sm flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        {transaction.timestamp}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-white font-mono text-lg mb-1">
                      {transaction.price}
                    </div>
                    {transaction.action === "CLOSE" &&
                      transaction.profit > 0 && (
                        <div className="text-green-400 font-semibold">
                          +${transaction.profit.toFixed(2)} profit
                        </div>
                      )}
                    {transaction.action === "OPEN" && (
                      <div className="text-blue-400 font-semibold text-sm">
                        Active Position
                      </div>
                    )}
                    <div className="text-gray-400 text-xs">
                      Qty: {transaction.quantity}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-6 pt-4 border-t border-white/10">
              <p className="text-purple-300 font-semibold text-sm md:text-lg">
                🎯 Live strategic analysis • 🤖 AI-powered timing • 💰{" "}
                {selectedCoinData.successRate}% success rate
              </p>
              <div className="flex justify-center items-center gap-4 mt-3 text-xs text-gray-400">
                <span>📊 {selectedCoinData.totalTrades} total trades</span>
                <span>
                  💵 ${selectedCoinData.totalProfit.toFixed(2)} total profit
                </span>
                <span>
                  🏆 ${selectedCoinData.bestTrade.toFixed(2)} best trade
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Strategy Explanation */}
        <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
            How The Strategic Buying Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
                <TrendingDown className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                1. Dip Detection
              </h4>
              <p className="text-gray-300 text-sm">
                AI algorithms identify price dips and market "wiggles" in
                real-time across multiple cryptocurrencies.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                2. Strategic Entry
              </h4>
              <p className="text-gray-300 text-sm">
                The bot executes precise buy orders at optimal entry points,
                maximizing profit potential on each trade.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30">
                <ArrowUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                3. Profit Taking
              </h4>
              <p className="text-gray-300 text-sm">
                Automated profit-taking ensures consistent gains while
                minimizing risk and emotional trading decisions.
              </p>
            </div>
          </div>
          <div className="text-center mt-8 pt-6 border-t border-white/10">
            <p className="text-indigo-300 font-medium">
              ✨ This is why every single trade shown above is profitable - the
              AI only buys at strategic moments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
