import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Activity,
  Clock,
  Target,
  TrendingUp,
  Eye,
  EyeOff,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { tradingDataCache } from "../utils/smartCache";

export interface LiveTransaction {
  id: string;
  coin: string;
  action: "CLOSE" | "OPEN";
  price: string;
  quantity: string;
  profit: number;
  timestamp: string;
  status: "completed" | "profit_goal_reached";
}

export const LiveTransactionLog: React.FC = () => {
  const [transactions, setTransactions] = useState<LiveTransaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [showOnMobile, setShowOnMobile] = useState(false);
  const [isCacheHit, setIsCacheHit] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Constants
  const SHEET_TAB = "Transactions Raw Data";
  const SHEET_RANGE = "A:G";

  // Format price to display properly
  const formatPrice = useCallback((price: string): string => {
    if (!price) return "$0.00";

    // If already formatted with $, return as is
    if (price.includes("$")) return price;

    const cleanPrice = price.replace(/[,$]/g, "");
    const numPrice = parseFloat(cleanPrice);

    if (isNaN(numPrice)) return price;

    // Format based on price range
    if (numPrice < 0.00001) {
      return `$${numPrice.toFixed(8)}`;
    } else if (numPrice < 0.001) {
      return `$${numPrice.toFixed(5)}`;
    } else if (numPrice < 1) {
      return `$${numPrice.toFixed(4)}`;
    } else if (numPrice < 100) {
      return `$${numPrice.toFixed(2)}`;
    } else {
      return `$${numPrice.toLocaleString()}`;
    }
  }, []);

  // Format quantity to handle large numbers
  const formatQuantity = useCallback((quantity: string): string => {
    if (!quantity) return "0";

    const cleanQuantity = quantity.replace(/[,$]/g, "");
    const numQuantity = parseFloat(cleanQuantity);

    if (isNaN(numQuantity)) return quantity;

    // Format large numbers
    if (numQuantity >= 1000000) {
      return `${(numQuantity / 1000000).toFixed(1)}M`;
    } else if (numQuantity >= 1000) {
      return `${(numQuantity / 1000).toFixed(1)}K`;
    } else if (numQuantity < 1) {
      return numQuantity.toFixed(3);
    } else {
      return numQuantity.toLocaleString();
    }
  }, []);

  // Format timestamp for display
  const formatTimestamp = useCallback((timestamp: string): string => {
    if (!timestamp) return "Unknown";

    // If it contains "Today", keep as is
    if (timestamp.toLowerCase().includes("today")) {
      return timestamp;
    }

    // Try to parse and format other timestamps
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

  // Parse status from your format
  const parseStatus = useCallback(
    (status: string): "completed" | "profit_goal_reached" => {
      if (!status) return "completed";
      return status.toLowerCase().includes("profit goal reached")
        ? "profit_goal_reached"
        : "completed";
    },
    []
  );

  // Parse Google Sheets data from A:G columns
  const parseGoogleSheetsData = useCallback(
    (rows: string[][]): LiveTransaction[] => {
      if (!rows || rows.length === 0) return [];

      return rows
        .map((row, index) => {
          // Skip header row
          if (index === 0 && row[0]?.toLowerCase() === "coin") {
            return null;
          }

          const [coin, action, price, quantity, status, profit, timestamp] =
            row;

          // Skip empty rows
          if (!coin || !profit) {
            return null;
          }

          // Parse profit amount from string like "$7.34"
          const parsedProfit =
            parseFloat(profit.toString().replace(/[$,]/g, "")) || 0;

          const transaction = {
            id: `tx_${Date.now()}_${index}`,
            coin: coin?.toString().trim() || "",
            action: (action?.toString().trim() as "CLOSE" | "OPEN") || "CLOSE",
            price: formatPrice(price?.toString() || ""),
            quantity: formatQuantity(quantity?.toString() || ""),
            profit: parsedProfit,
            timestamp: formatTimestamp(timestamp?.toString() || ""),
            status: parseStatus(status?.toString() || ""),
          };

          return transaction;
        })
        .filter(
          (tx): tx is LiveTransaction =>
            tx !== null && tx.coin.length > 0 && tx.profit !== undefined
        );
    },
    [formatPrice, formatQuantity, formatTimestamp, parseStatus]
  );

  // Group transactions by month
  const transactionsByMonth = useMemo(() => {
    const grouped: { [key: string]: LiveTransaction[] } = {};

    transactions.forEach((tx) => {
      const timestamp = tx.timestamp;
      let monthKey = "";

      if (timestamp.toLowerCase().includes("today")) {
        const now = new Date();
        monthKey = `${now.toLocaleString("default", {
          month: "long",
        })} ${now.getFullYear()}`;
      } else {
        try {
          const date = new Date(timestamp);
          if (!isNaN(date.getTime())) {
            monthKey = `${date.toLocaleString("default", {
              month: "long",
            })} ${date.getFullYear()}`;
          } else {
            const match = timestamp.match(/(\d+)\/(\d+)/);
            if (match) {
              const month = parseInt(match[1]);
              const year = new Date().getFullYear();
              const date = new Date(year, month - 1);
              monthKey = `${date.toLocaleString("default", {
                month: "long",
              })} ${year}`;
            } else {
              monthKey = "Unknown";
            }
          }
        } catch (e) {
          monthKey = "Unknown";
        }
      }

      if (!grouped[monthKey]) {
        grouped[monthKey] = [];
      }
      grouped[monthKey].push(tx);
    });

    return grouped;
  }, [transactions]);

  // Get array of months in reverse chronological order
  const monthKeys = useMemo(() => {
    return Object.keys(transactionsByMonth).sort((a, b) => {
      if (a === "Unknown") return 1;
      if (b === "Unknown") return -1;

      const dateA = new Date(a);
      const dateB = new Date(b);
      return dateB.getTime() - dateA.getTime();
    });
  }, [transactionsByMonth]);

  const totalPages = monthKeys.length;

  // Get current month's transactions
  const currentMonthName = monthKeys[currentPage - 1] || "";
  const currentMonthTransactions = transactionsByMonth[currentMonthName] || [];

  // Calculate totals for current month
  const { totalProfit, closedCount, openCount } = useMemo(() => {
    const closed = currentMonthTransactions.filter(
      (tx) => tx.action === "CLOSE"
    );
    const open = currentMonthTransactions.filter((tx) => tx.action === "OPEN");
    const profit = closed.reduce((sum, tx) => sum + tx.profit, 0);

    return {
      totalProfit: profit,
      closedCount: closed.length,
      openCount: open.length,
    };
  }, [currentMonthTransactions]);

  // Navigation handlers
  const goToPage = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    },
    [totalPages]
  );

  // Fallback data
  const getFallbackData = useCallback((): LiveTransaction[] => {
    const mockRows: string[][] = [
      ["Coin", "Action", "Price", "Quantity", "Status", "Profit", "Timestamp"],
      [
        "SUI",
        "CLOSE",
        "$3.60",
        "50.9",
        "Profit Goal Reached",
        "$7.34",
        "Today 2:48 AM",
      ],
      [
        "BONK",
        "CLOSE",
        "$0.00002",
        "10.2M",
        "Profit Goal Reached",
        "$9.03",
        "9/8 12:26 PM",
      ],
      ["DOGE", "CLOSE", "$0.24", "710", "Completed", "$5.16", "9/8 9:19 AM"],
      [
        "BTC",
        "CLOSE",
        "$43,250.00",
        "0.025",
        "Profit Goal Reached",
        "$12.45",
        "9/7 11:45 PM",
      ],
      ["ETH", "CLOSE", "$2,650.75", "1.8", "Completed", "$8.92", "9/7 6:33 PM"],
      [
        "ADA",
        "OPEN",
        "$0.45",
        "2,450",
        "Active Position",
        "$0.00",
        "9/7 2:15 PM",
      ],
      [
        "SOL",
        "OPEN",
        "$145.32",
        "12.5",
        "Active Position",
        "$0.00",
        "9/7 8:22 AM",
      ],
      [
        "MATIC",
        "OPEN",
        "$0.89",
        "1,200",
        "Active Position",
        "$0.00",
        "9/6 11:58 PM",
      ],
      ["LINK", "CLOSE", "$11.45", "85.3", "Completed", "$9.87", "9/6 7:41 PM"],
      ["DOT", "CLOSE", "$5.67", "180.5", "Completed", "$7.12", "9/6 3:29 PM"],
    ];
    return parseGoogleSheetsData(mockRows);
  }, [parseGoogleSheetsData]);

  // Fetch live transactions
  const fetchLiveTransactions = useCallback(async () => {
    try {
      setIsLoading(true);

      const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID;
      if (!SHEET_ID) {
        console.warn("No Sheet ID - using fallback data");
        setTransactions(getFallbackData());
        setIsLoading(false);
        return;
      }

      const cacheKey = `transactions_${SHEET_TAB}`;
      const cachedData = tradingDataCache.get(cacheKey);

      if (cachedData) {
        console.log("✅ Using cached transaction data");
        setTransactions(cachedData);
        setIsCacheHit(true);
        setIsLoading(false);
        setLastUpdated(new Date());
        return;
      }

      const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_TAB}!${SHEET_RANGE}?key=${API_KEY}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }

      const data = await response.json();
      const rows = data.values || [];

      if (rows.length === 0) {
        setTransactions(getFallbackData());
        setIsLoading(false);
        return;
      }

      const parsedTransactions = parseGoogleSheetsData(rows);

      if (parsedTransactions.length === 0) {
        setTransactions(getFallbackData());
      } else {
        setTransactions(parsedTransactions);
        tradingDataCache.set(cacheKey, parsedTransactions);
        setIsCacheHit(false);
      }

      setLastUpdated(new Date());
    } catch (err) {
      console.error("Error fetching transactions:", err);
      setTransactions(getFallbackData());
    } finally {
      setIsLoading(false);
    }
  }, [SHEET_TAB, SHEET_RANGE, getFallbackData, parseGoogleSheetsData]);

  useEffect(() => {
    fetchLiveTransactions();
    const interval = setInterval(fetchLiveTransactions, 4 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchLiveTransactions]);

  // Helper functions
  const getCoinColor = (coin: string): string => {
    const colors: { [key: string]: string } = {
      BTC: "text-orange-400",
      ETH: "text-blue-400",
      SOL: "text-purple-400",
      ADA: "text-cyan-400",
      DOGE: "text-yellow-400",
      MATIC: "text-indigo-400",
      LINK: "text-blue-300",
      DOT: "text-pink-400",
      AVAX: "text-red-400",
      SUI: "text-blue-300",
      BONK: "text-orange-300",
    };
    return colors[coin.toUpperCase()] || "text-gray-300";
  };

  const getActionColor = (action: string): string => {
    return action === "OPEN"
      ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
      : "bg-green-500/20 text-green-400 border border-green-500/30";
  };

  const getProfitColor = (profit: number): string => {
    if (profit > 10) return "text-green-400";
    if (profit > 5) return "text-green-300";
    return "text-green-200";
  };

  if (isLoading && transactions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="text-gray-400 flex items-center gap-2">
          <Activity className="w-5 h-5 animate-pulse" />
          <span>Loading transaction history...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header with Month Stats */}
      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-2">
        <div className="flex items-center gap-3 justify-between md:justify-start flex-wrap">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-bold text-white">
              Transaction History
            </h3>
          </div>
          <button
            onClick={() => setShowOnMobile(!showOnMobile)}
            className="md:hidden flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 rounded-lg text-blue-400 text-sm font-medium hover:bg-blue-500/30 transition-colors flex-shrink-0"
          >
            {showOnMobile ? (
              <>
                <EyeOff className="w-4 h-4" />
                <span>Hide</span>
              </>
            ) : (
              <>
                <Eye className="w-4 h-4" />
                <span>Show</span>
              </>
            )}
          </button>
        </div>

        {/* Month Summary Stats */}
        <div className="flex items-center gap-4 text-sm flex-wrap">
          <div className="text-gray-400">
            <span className="font-medium text-white">{currentMonthName}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Closed:</span>
            <span className="font-bold text-green-400">{closedCount}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Open:</span>
            <span className="font-bold text-blue-400">{openCount}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Profit:</span>
            <span className="font-bold text-green-400">
              +${totalProfit.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Pagination Top */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mb-4 px-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg bg-white/8 hover:bg-white/12 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-1 items-center overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent max-w-full px-1">
            {Array.from({ length: Math.min(8, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 8) {
                pageNum = i + 1;
              } else if (currentPage <= 4) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 3) {
                pageNum = totalPages - 7 + i;
              } else {
                pageNum = currentPage - 3 + i;
              }

              const monthName = monthKeys[pageNum - 1];
              if (!monthName) return null;

              const [month, year] = monthName.split(" ");
              const shortMonth = month.substring(0, 3);
              const shortYear = year ? year.substring(2) : "";
              const displayText = `${shortMonth} ${shortYear}`;

              return (
                <button
                  key={pageNum}
                  onClick={() => goToPage(pageNum)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                    currentPage === pageNum
                      ? "bg-blue-500 text-white shadow-lg"
                      : "bg-white/8 hover:bg-white/12 text-gray-300"
                  }`}
                  title={monthName}
                >
                  {displayText}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg bg-white/8 hover:bg-white/12 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Cache Status */}
      <div className="mb-3 px-2">
        <span className="text-xs text-gray-500 flex items-center gap-2 justify-center md:justify-start flex-wrap">
          <Clock className="w-3 h-3" />
          Last updated: {lastUpdated.toLocaleTimeString()}
          {isCacheHit && (
            <span className="text-green-400 ml-2">• Fresh Data Cached</span>
          )}
        </span>
      </div>

      {/* Transaction Display */}
      <div
        className={`bg-black/20 rounded-xl border border-white/5 overflow-hidden ${
          !showOnMobile ? "hidden md:block" : ""
        }`}
      >
        {/* Mobile Cards */}
        <div className="block md:hidden">
          <div className="space-y-2 p-2 max-h-96 overflow-y-auto">
            {currentMonthTransactions.length === 0 ? (
              <div className="p-8 text-center text-gray-400">
                No transactions for {currentMonthName}
              </div>
            ) : (
              currentMonthTransactions.map((tx) => (
                <div
                  key={tx.id}
                  className={`bg-white/5 rounded-lg p-3 border-l-2 ${
                    tx.action === "OPEN"
                      ? "border-l-blue-400"
                      : "border-l-green-400"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2 gap-2">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <span
                        className={`font-bold text-sm truncate ${getCoinColor(
                          tx.coin
                        )}`}
                      >
                        {tx.coin}
                      </span>
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getActionColor(
                          tx.action
                        )} flex-shrink-0`}
                      >
                        {tx.action}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400 flex-shrink-0 truncate max-w-[120px]">
                      {tx.timestamp}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2 gap-2">
                    <div className="text-xs text-gray-300 truncate flex-1 min-w-0">
                      <span className="text-gray-500">Price:</span>{" "}
                      <span className="font-mono">{tx.price}</span>
                    </div>
                    <div className="text-xs text-gray-300 truncate flex-1 min-w-0 text-right">
                      <span className="text-gray-500">Qty:</span>{" "}
                      <span className="font-mono">{tx.quantity}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex-shrink-0">
                      {tx.action === "CLOSE" ? (
                        <div
                          className={`font-bold text-sm font-mono ${getProfitColor(
                            tx.profit
                          )}`}
                        >
                          +${tx.profit.toFixed(2)}
                        </div>
                      ) : (
                        <div className="text-gray-500 text-sm">Active</div>
                      )}
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {tx.status === "profit_goal_reached" && (
                        <>
                          <Target className="w-3 h-3 text-yellow-400" />
                          <span className="text-xs text-yellow-400">Goal</span>
                        </>
                      )}
                      {tx.action === "OPEN" && (
                        <>
                          <TrendingUp className="w-3 h-3 text-blue-400" />
                          <span className="text-xs text-blue-400">Active</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block">
          <div className="bg-white/5 px-4 py-3 border-b border-white/5">
            <div className="grid grid-cols-12 gap-2 text-xs font-semibold text-gray-300 uppercase tracking-wider">
              <div className="col-span-2">Coin</div>
              <div className="col-span-2">Action</div>
              <div className="col-span-2">Price</div>
              <div className="col-span-2">Quantity</div>
              <div className="col-span-2">Profit</div>
              <div className="col-span-2">Time</div>
            </div>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {currentMonthTransactions.length === 0 ? (
              <div className="p-8 text-center text-gray-400">
                No transactions for {currentMonthName}
              </div>
            ) : (
              currentMonthTransactions.map((tx, index) => (
                <div
                  key={tx.id}
                  className={`px-4 py-3 border-b border-white/5 hover:bg-white/5 ${
                    index % 2 === 0 ? "bg-white/2" : ""
                  } ${
                    tx.action === "OPEN"
                      ? "border-l-2 border-l-blue-400"
                      : "border-l-2 border-l-green-400"
                  }`}
                >
                  <div className="grid grid-cols-12 gap-2 items-center text-sm">
                    <div className="col-span-2">
                      <div className={`font-bold ${getCoinColor(tx.coin)}`}>
                        {tx.coin}
                      </div>
                    </div>
                    <div className="col-span-2">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getActionColor(
                          tx.action
                        )}`}
                      >
                        {tx.action}
                      </span>
                    </div>
                    <div className="col-span-2">
                      <div className="text-gray-200 font-mono text-xs">
                        {tx.price}
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-gray-300 font-mono text-xs">
                        {tx.quantity}
                      </div>
                    </div>
                    <div className="col-span-2">
                      {tx.action === "CLOSE" ? (
                        <div
                          className={`font-bold font-mono ${getProfitColor(
                            tx.profit
                          )}`}
                        >
                          +${tx.profit.toFixed(2)}
                        </div>
                      ) : (
                        <div className="text-gray-500 font-mono text-xs">-</div>
                      )}
                      {tx.status === "profit_goal_reached" && (
                        <div className="text-xs text-yellow-400 flex items-center gap-1 mt-1">
                          <Target className="w-3 h-3" />
                          <span>Goal</span>
                        </div>
                      )}
                      {tx.action === "OPEN" && (
                        <div className="text-xs text-blue-400 flex items-center gap-1 mt-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>Active</span>
                        </div>
                      )}
                    </div>
                    <div className="col-span-2">
                      <div className="text-gray-400 text-xs">
                        {tx.timestamp}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Pagination Bottom */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6 px-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg bg-white/8 hover:bg-white/12 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-1 items-center overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent max-w-full px-1">
            {Array.from({ length: Math.min(8, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 8) {
                pageNum = i + 1;
              } else if (currentPage <= 4) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 3) {
                pageNum = totalPages - 7 + i;
              } else {
                pageNum = currentPage - 3 + i;
              }

              const monthName = monthKeys[pageNum - 1];
              if (!monthName) return null;

              const [month, year] = monthName.split(" ");
              const shortMonth = month.substring(0, 3);
              const shortYear = year ? year.substring(2) : "";
              const displayText = `${shortMonth} ${shortYear}`;

              return (
                <button
                  key={pageNum}
                  onClick={() => goToPage(pageNum)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                    currentPage === pageNum
                      ? "bg-blue-500 text-white shadow-lg"
                      : "bg-white/8 hover:bg-white/12 text-gray-300"
                  }`}
                  title={monthName}
                >
                  {displayText}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg bg-white/8 hover:bg-white/12 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Footer */}
      <div className="mt-4 text-center px-2">
        <p className="text-xs text-gray-500 break-words">
          ✅ Smart Cache enabled • Live data with intelligent caching •{" "}
          <span className="text-green-400 font-medium">
            Shows both Open & Closed positions
          </span>
        </p>
        {!showOnMobile && (
          <p className="text-xs text-gray-500 mt-1 md:hidden">
            Tap "Show" to view history
          </p>
        )}
      </div>
    </div>
  );
};
