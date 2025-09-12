import React, { useState, useEffect } from "react";
import {
  Activity,
  Clock,
  DollarSign,
  TrendingUp,
  Wifi,
  WifiOff,
} from "lucide-react";
import { tradingDataCache } from "../utils/smartCache";

interface Transaction {
  id: string;
  timestamp: string;
  type: "buy" | "sell";
  symbol: string;
  amount: number;
  price: number;
  profit: number;
  status: "completed" | "pending" | "failed";
}

// Mock transaction data for demonstration
const mockTransactions: Transaction[] = [
  {
    id: "1",
    timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(), // 15 minutes ago
    type: "sell",
    symbol: "BTC/USDT",
    amount: 0.025,
    price: 43250.5,
    profit: 12.75,
    status: "completed",
  },
  {
    id: "2",
    timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45 minutes ago
    type: "buy",
    symbol: "ETH/USDT",
    amount: 0.5,
    price: 2650.25,
    profit: 0,
    status: "completed",
  },
  {
    id: "3",
    timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(), // 2 hours ago
    type: "sell",
    symbol: "ETH/USDT",
    amount: 0.5,
    price: 2675.8,
    profit: 25.55,
    status: "completed",
  },
  {
    id: "4",
    timestamp: new Date(Date.now() - 1000 * 60 * 180).toISOString(), // 3 hours ago
    type: "sell",
    symbol: "ADA/USDT",
    amount: 1000,
    price: 0.385,
    profit: 8.2,
    status: "completed",
  },
  {
    id: "5",
    timestamp: new Date(Date.now() - 1000 * 60 * 240).toISOString(), // 4 hours ago
    type: "buy",
    symbol: "BTC/USDT",
    amount: 0.025,
    price: 43180.25,
    profit: 0,
    status: "completed",
  },
];

export const LiveTransactionLog: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [isLoading, setIsLoading] = useState(true);

  const fetchTransactions = async (): Promise<Transaction[]> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real implementation, this would fetch from your trading API
    // For now, we'll use mock data with some randomization
    const randomizedTransactions = mockTransactions.map((tx) => ({
      ...tx,
      profit: tx.profit + (Math.random() - 0.5) * 2, // Add some variance
    }));

    return randomizedTransactions;
  };

  const loadTransactions = async () => {
    try {
      setIsLoading(true);

      // Use smart cache with shorter TTL for transaction data
      const cacheKey = "live-transactions";
      let data = tradingDataCache.get(cacheKey);

      if (!data) {
        // Cache miss - fetch fresh data
        data = await fetchTransactions();
        tradingDataCache.set(cacheKey, data);
      }

      setTransactions(data);
      setIsConnected(true);
      setLastUpdate(new Date());
    } catch (error) {
      console.error("Failed to load transactions:", error);
      setIsConnected(false);

      // Try to get cached data
      const cachedData = tradingDataCache.get("live-transactions");
      if (cachedData) {
        setTransactions(cachedData as Transaction[]);
      } else {
        setTransactions(mockTransactions);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTransactions();

    // Set up periodic refresh
    const interval = setInterval(() => {
      loadTransactions();
    }, 60000); // Refresh every minute

    return () => clearInterval(interval);
  }, []);

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;

    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;

    return date.toLocaleDateString();
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const getStatusColor = (status: Transaction["status"]) => {
    switch (status) {
      case "completed":
        return "text-green-400";
      case "pending":
        return "text-yellow-400";
      case "failed":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  const getTypeColor = (type: Transaction["type"]) => {
    return type === "buy" ? "text-blue-400" : "text-green-400";
  };

  if (isLoading && transactions.length === 0) {
    return (
      <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-6 mb-8">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-400 mr-3"></div>
          <span className="text-gray-300">Loading live transactions...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-2.5 shadow-lg shadow-green-500/40">
            <Activity className="w-full h-full text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              Live Transaction Log
            </h3>
            <p className="text-gray-400 text-sm">Real-time trading activity</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${
              isConnected
                ? "bg-green-500/20 text-green-300 border border-green-500/30"
                : "bg-red-500/20 text-red-300 border border-red-500/30"
            }`}
          >
            {isConnected ? (
              <>
                <Wifi className="w-3 h-3" />
                <span>Live</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </>
            ) : (
              <>
                <WifiOff className="w-3 h-3" />
                <span>Offline</span>
              </>
            )}
          </div>

          <div className="text-xs text-gray-400 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>Updated {formatTime(lastUpdate.toISOString())}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 max-h-80 overflow-y-auto">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-8 h-8 rounded-lg p-2 ${
                  transaction.type === "buy"
                    ? "bg-blue-500/20 text-blue-400"
                    : "bg-green-500/20 text-green-400"
                }`}
              >
                {transaction.type === "buy" ? (
                  <TrendingUp className="w-full h-full rotate-180" />
                ) : (
                  <TrendingUp className="w-full h-full" />
                )}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span
                    className={`font-semibold text-sm uppercase ${getTypeColor(
                      transaction.type
                    )}`}
                  >
                    {transaction.type}
                  </span>
                  <span className="text-white font-medium">
                    {transaction.symbol}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(
                      transaction.status
                    )} bg-current/10`}
                  >
                    {transaction.status}
                  </span>
                </div>
                <div className="text-gray-400 text-sm">
                  {transaction.amount} @ {formatCurrency(transaction.price)}
                </div>
              </div>
            </div>

            <div className="text-right">
              {transaction.profit > 0 && (
                <div className="flex items-center gap-1 text-green-400 font-semibold">
                  <DollarSign className="w-4 h-4" />
                  <span>+{formatCurrency(transaction.profit)}</span>
                </div>
              )}
              <div className="text-gray-400 text-sm">
                {formatTime(transaction.timestamp)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {transactions.length === 0 && (
        <div className="text-center py-8 text-gray-400">
          <Activity className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>No recent transactions</p>
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">
            Showing last {transactions.length} transactions
          </span>
          <div className="flex items-center gap-4 text-gray-400">
            <span>Total Profit: </span>
            <span className="text-green-400 font-semibold">
              {formatCurrency(
                transactions.reduce((sum, tx) => sum + tx.profit, 0)
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
