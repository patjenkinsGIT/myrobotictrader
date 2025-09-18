// src/components/PriceChartWithPurchases.tsx
import React, { useState, useEffect } from "react";
import { TrendingDown } from "lucide-react";
import { useLiveTransactions } from "../hooks/useLiveTransactions";

interface ChartDataPoint {
  timestamp: Date;
  price: number;
  isTransaction: boolean;
  transactionType?: "OPEN" | "CLOSE";
  profit?: number;
  quantity?: string;
}

export const PriceChartWithPurchases: React.FC = () => {
  const { transactions, isLoading, error } = useLiveTransactions();
  const [selectedCoin, setSelectedCoin] = useState<string>("BONK");
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);

  // Process transaction data and generate price chart
  useEffect(() => {
    if (transactions.length === 0) return;

    // Filter transactions for selected coin
    const coinTransactions = transactions
      .filter((tx) => tx.coin === selectedCoin)
      .sort(
        (a, b) =>
          new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      );

    if (coinTransactions.length === 0) return;

    // Generate chart data with realistic price movements
    const chartPoints: ChartDataPoint[] = [];

    // Get price range from actual transactions
    const prices = coinTransactions.map((tx) =>
      parseFloat(tx.price.replace("$", "").replace(",", ""))
    );
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const priceRange = maxPrice - minPrice;

    // Generate price points between transactions to show realistic movement
    coinTransactions.forEach((tx, index) => {
      const currentPrice = parseFloat(
        tx.price.replace("$", "").replace(",", "")
      );
      const timestamp = new Date(tx.timestamp);

      // Add the actual transaction point
      chartPoints.push({
        timestamp,
        price: currentPrice,
        isTransaction: true,
        transactionType: tx.action,
        profit: tx.profit,
        quantity: tx.quantity,
      });

      // Add intermediate price points for realistic chart movement
      if (index < coinTransactions.length - 1) {
        const nextTx = coinTransactions[index + 1];
        const nextPrice = parseFloat(
          nextTx.price.replace("$", "").replace(",", "")
        );
        const nextTimestamp = new Date(nextTx.timestamp);

        const timeDiff = nextTimestamp.getTime() - timestamp.getTime();
        const priceDiff = nextPrice - currentPrice;

        // Add 3-5 intermediate points with some volatility
        const numPoints = Math.min(
          5,
          Math.max(3, Math.floor(timeDiff / (1000 * 60 * 60 * 6)))
        ); // Every 6 hours

        for (let i = 1; i < numPoints; i++) {
          const ratio = i / numPoints;
          const intermediateTime = new Date(
            timestamp.getTime() + timeDiff * ratio
          );

          // Add some realistic volatility (±5% of price range)
          const volatility = (Math.random() - 0.5) * (priceRange * 0.05);
          const basePrice = currentPrice + priceDiff * ratio;
          const intermediatePrice = Math.max(
            minPrice * 0.95,
            Math.min(maxPrice * 1.05, basePrice + volatility)
          );

          chartPoints.push({
            timestamp: intermediateTime,
            price: intermediatePrice,
            isTransaction: false,
          });
        }
      }
    });

    // Sort by timestamp
    chartPoints.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
    setChartData(chartPoints);
  }, [transactions, selectedCoin]);

  // Get available coins from transactions
  const availableCoins = [...new Set(transactions.map((tx) => tx.coin))].slice(
    0,
    5
  );

  if (isLoading) {
    return (
      <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400 mr-3"></div>
          <span className="text-gray-300 text-lg">Loading price chart...</span>
        </div>
      </div>
    );
  }

  if (error || chartData.length === 0) {
    return (
      <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
        <div className="text-center">
          <TrendingDown className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-4">
            No Chart Data Available
          </h3>
          <p className="text-gray-300">
            Unable to generate price chart for {selectedCoin}
          </p>
        </div>
      </div>
    );
  }

  // Calculate chart dimensions and scaling
  const chartWidth = 800;
  const chartHeight = 400;
  const padding = 60;

  const prices = chartData.map((d) => d.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceRange = maxPrice - minPrice;

  const minTime = Math.min(...chartData.map((d) => d.timestamp.getTime()));
  const maxTime = Math.max(...chartData.map((d) => d.timestamp.getTime()));
  const timeRange = maxTime - minTime;

  // Scale functions
  const scaleX = (timestamp: Date) =>
    padding +
    ((timestamp.getTime() - minTime) / timeRange) * (chartWidth - 2 * padding);

  const scaleY = (price: number) =>
    chartHeight -
    padding -
    ((price - minPrice) / priceRange) * (chartHeight - 2 * padding);

  // Generate path for price line
  const pathData = chartData
    .map((point, index) => {
      const x = scaleX(point.timestamp);
      const y = scaleY(point.price);
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  // Get transaction points for overlays
  const transactionPoints = chartData.filter((d) => d.isTransaction);
  const buyPoints = transactionPoints.filter(
    (d) => d.transactionType === "OPEN"
  );
  const sellPoints = transactionPoints.filter(
    (d) => d.transactionType === "CLOSE"
  );

  return (
    <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-8 mb-8">
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
          Strategic Purchase Chart - Price vs Buy/Sell Points
        </h3>

        {/* Coin Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {availableCoins.map((coin) => (
            <button
              key={coin}
              onClick={() => setSelectedCoin(coin)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCoin === coin
                  ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/30"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {coin}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Container */}
      <div className="relative bg-black/20 rounded-xl p-4 overflow-x-auto">
        <svg
          width={chartWidth}
          height={chartHeight}
          className="w-full h-auto"
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        >
          {/* Grid lines */}
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width={chartWidth} height={chartHeight} fill="url(#grid)" />

          {/* Price line */}
          <path
            d={pathData}
            fill="none"
            stroke="url(#priceGradient)"
            strokeWidth="3"
            className="drop-shadow-lg"
          />

          {/* Gradient definition for price line */}
          <defs>
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

          {/* Buy points (green circles) */}
          {buyPoints.map((point, index) => (
            <g key={`buy-${index}`}>
              <circle
                cx={scaleX(point.timestamp)}
                cy={scaleY(point.price)}
                r="8"
                fill="#10B981"
                stroke="#ffffff"
                strokeWidth="2"
                className="drop-shadow-lg cursor-pointer hover:r-10 transition-all"
              />
              <circle
                cx={scaleX(point.timestamp)}
                cy={scaleY(point.price)}
                r="4"
                fill="#ffffff"
              />
            </g>
          ))}

          {/* Sell points (red circles) */}
          {sellPoints.map((point, index) => (
            <g key={`sell-${index}`}>
              <circle
                cx={scaleX(point.timestamp)}
                cy={scaleY(point.price)}
                r="8"
                fill="#EF4444"
                stroke="#ffffff"
                strokeWidth="2"
                className="drop-shadow-lg cursor-pointer hover:r-10 transition-all"
              />
              <circle
                cx={scaleX(point.timestamp)}
                cy={scaleY(point.price)}
                r="4"
                fill="#ffffff"
              />
              {/* Profit label */}
              {point.profit && (
                <text
                  x={scaleX(point.timestamp)}
                  y={scaleY(point.price) - 15}
                  textAnchor="middle"
                  fill="#10B981"
                  fontSize="12"
                  fontWeight="bold"
                  className="drop-shadow-sm"
                >
                  +${point.profit.toFixed(2)}
                </text>
              )}
            </g>
          ))}

          {/* Y-axis labels (prices) */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
            const price = minPrice + priceRange * ratio;
            const y = scaleY(price);
            return (
              <g key={`y-label-${ratio}`}>
                <line
                  x1={padding - 5}
                  y1={y}
                  x2={padding}
                  y2={y}
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1"
                />
                <text
                  x={padding - 10}
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
        </svg>
      </div>

      {/* Legend */}
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

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400 mb-1">
            {sellPoints
              .reduce((sum, point) => sum + (point.profit || 0), 0)
              .toFixed(2)}
          </div>
          <div className="text-gray-300 text-sm">
            Total Profit ({selectedCoin})
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400 mb-1">
            {(((maxPrice - minPrice) / minPrice) * 100).toFixed(1)}%
          </div>
          <div className="text-gray-300 text-sm">Price Range</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400 mb-1">
            {sellPoints.length > 0
              ? (
                  sellPoints.reduce(
                    (sum, point) => sum + (point.profit || 0),
                    0
                  ) / sellPoints.length
                ).toFixed(2)
              : "0.00"}
          </div>
          <div className="text-gray-300 text-sm">Avg Profit/Trade</div>
        </div>
      </div>
    </div>
  );
};
