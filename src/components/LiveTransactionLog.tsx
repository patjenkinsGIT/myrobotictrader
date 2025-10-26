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
  Download,
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
  const [error, setError] = useState<string | null>(null);
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
    const keys = Object.keys(transactionsByMonth).filter(
      (key) => key !== "Unknown"
    );
    return keys.sort((a, b) => {
      const dateA = new Date(a);
      const dateB = new Date(b);
      return dateB.getTime() - dateA.getTime();
    });
  }, [transactionsByMonth]);

  // Get current month's transactions
  const currentMonthTransactions = useMemo(() => {
    const monthKey = monthKeys[currentPage - 1];
    return monthKey ? transactionsByMonth[monthKey] : [];
  }, [transactionsByMonth, monthKeys, currentPage]);

  // Calculate totals for current month
  const monthSummary = useMemo(() => {
    const closedTransactions = currentMonthTransactions.filter(
      (tx) => tx.action === "CLOSE"
    );
    const openTransactions = currentMonthTransactions.filter(
      (tx) => tx.action === "OPEN"
    );
    const totalProfit = closedTransactions.reduce(
      (sum, tx) => sum + tx.profit,
      0
    );
    const profitGoalCount = closedTransactions.filter(
      (tx) => tx.status === "profit_goal_reached"
    ).length;
    const successRate =
      closedTransactions.length > 0
        ? (
            (closedTransactions.length / closedTransactions.length) *
            100
          ).toFixed(1)
        : "100.0";

    return {
      totalProfit: `$${totalProfit.toFixed(2)}`,
      closedTrades: closedTransactions.length,
      openTrades: openTransactions.length,
      totalTrades: currentMonthTransactions.length,
      successRate: `${successRate}%`,
      profitGoals: profitGoalCount,
    };
  }, [currentMonthTransactions]);

  // Pagination helpers
  const totalPages = monthKeys.length;
  const currentMonthName = monthKeys[currentPage - 1] || "Unknown";

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // CSV Download functionality
  const downloadCSV = () => {
    const headers = [
      "Coin",
      "Action",
      "Price",
      "Quantity",
      "Profit",
      "Status",
      "Timestamp",
    ];
    const csvRows = [headers.join(",")];

    currentMonthTransactions.forEach((tx) => {
      const row = [
        tx.coin,
        tx.action,
        tx.price.replace(/,/g, ""),
        tx.quantity.replace(/,/g, ""),
        tx.action === "CLOSE" ? tx.profit.toFixed(2) : "0.00",
        tx.status === "profit_goal_reached"
          ? "Profit Goal Reached"
          : "Completed",
        `"${tx.timestamp}"`,
      ];
      csvRows.push(row.join(","));
    });

    const csvContent = csvRows.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    const filename = `${currentMonthName.replace(" ", "_")}_Transactions.csv`;

    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

  // Fetch transactions
  const fetchTransactions = useCallback(
    async (showLoading = true) => {
      try {
        if (showLoading) setIsLoading(true);
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

          try {
            const response = await fetch(url);

            if (!response.ok) {
              throw new Error(`Google Sheets API error: ${response.status}`);
            }

            const data = await response.json();

            if (data.values && data.values.length > 0) {
              const liveTransactions = parseGoogleSheetsData(data.values);
              tradingDataCache.set(cacheKey, liveTransactions);
              setTransactions(liveTransactions);
              setLastUpdated(new Date());
              setIsCacheHit(false);
              return;
            } else {
              setError("No data found. Using sample data.");
            }
          } catch (apiError) {
            console.error("API error:", apiError);
            setError("Failed to load data.");
          }
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));
        const fallbackData = getFallbackData();
        setTransactions(fallbackData);
        setLastUpdated(new Date());
        setIsCacheHit(false);
      } catch (err) {
        console.error("Error:", err);
        setError("Error loading data.");
        setTransactions(getFallbackData());
        setIsCacheHit(false);
      } finally {
        setIsLoading(false);
      }
    },
    [SHEET_TAB, SHEET_RANGE, parseGoogleSheetsData, getFallbackData]
  );

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const getCoinColor = (coin: string) => {
    const colors: { [key: string]: string } = {
      BTC: "text-orange-400",
      ETH: "text-blue-400",
      SUI: "text-purple-400",
      BONK: "text-yellow-400",
      DOGE: "text-yellow-300",
      SOL: "text-purple-500",
      MATIC: "text-indigo-400",
      ADA: "text-blue-500",
      LINK: "text-blue-600",
      DOT: "text-pink-400",
      AVAX: "text-red-400",
      UNI: "text-pink-500",
      ATOM: "text-purple-500",
      FTM: "text-blue-600",
      ALGO: "text-gray-400",
      XRP: "text-gray-300",
      LTC: "text-gray-500",
      BCH: "text-green-500",
      VET: "text-blue-700",
      THETA: "text-purple-600",
      HBAR: "text-gray-600",
      ICP: "text-orange-300",
      NEAR: "text-green-300",
      FLOW: "text-blue-800",
      MANA: "text-red-300",
    };
    return colors[coin] || "text-gray-400";
  };

  const getProfitColor = (profit: number) => {
    if (profit >= 10) return "text-green-300";
    if (profit >= 7) return "text-green-400";
    return "text-green-500";
  };

  const getActionColor = (action: string) => {
    return action === "CLOSE"
      ? "bg-green-500/20 text-green-300"
      : "bg-blue-500/20 text-blue-300";
  };

  const getCacheStatus = () => {
    const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID;
    const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

    if (!SHEET_ID || !API_KEY || error) {
      return { text: "SAMPLE", color: "text-gray-300" };
    }

    if (isCacheHit) {
      return { text: "CACHED", color: "text-blue-300" };
    }

    return { text: "LIVE", color: "text-green-300" };
  };

  if (isLoading && transactions.length === 0) {
    return (
      <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-6 mb-8">
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-400"></div>
          <span className="ml-3 text-gray-300">Loading...</span>
        </div>
      </div>
    );
  }

  const cacheStatus = getCacheStatus();

  return (
    <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-6 mb-8 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-2 md:p-3 shadow-lg shadow-green-500/40 flex-shrink-0">
            <Activity className="w-full h-full text-white" />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white truncate">
              TRADING SCOREBOARD
            </h3>
            <p className="text-xs md:text-sm text-gray-400 truncate">
              {currentMonthName ||
                new Date().toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={() => setShowOnMobile(!showOnMobile)}
            className="md:hidden flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 border border-white/20 transition-all"
          >
            {showOnMobile ? (
              <>
                <EyeOff className="w-4 h-4 text-gray-300" />
                <span className="text-sm text-gray-300">Hide</span>
              </>
            ) : (
              <>
                <Eye className="w-4 h-4 text-gray-300" />
                <span className="text-sm text-gray-300">Show</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-green-400/30">
            <div
              className={`w-2.5 h-2.5 rounded-full ${
                isCacheHit ? "bg-blue-400" : "bg-green-400"
              } animate-pulse`}
            ></div>
            <span
              className={`text-sm font-semibold ${cacheStatus.color} whitespace-nowrap`}
            >
              {cacheStatus.text}
            </span>
          </div>

          <button
            onClick={downloadCSV}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-400/30 hover:border-blue-400/50 transition-all shadow-lg"
            title={`Download ${currentMonthName} CSV`}
          >
            <Download className="w-4 h-4 text-blue-300" />
            <span className="hidden sm:inline text-sm text-blue-300 font-semibold whitespace-nowrap">
              Download CSV
            </span>
            <span className="sm:hidden text-sm text-blue-300 font-semibold">
              CSV
            </span>
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 mb-4">
          <p className="text-yellow-400 text-sm break-words">{error}</p>
        </div>
      )}

      {/* Pagination Top */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mb-6 px-2">
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

      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 md:gap-4 mb-6">
        <div className="group relative bg-white/8 backdrop-blur-sm rounded-xl p-2 md:p-3 border border-white/20 hover:border-white/30 transition-all text-center">
          <div className="text-sm md:text-lg font-bold text-green-300 truncate">
            {monthSummary.totalProfit}
          </div>
          <div className="text-xs text-gray-400">Total Profit</div>
        </div>
        <div className="group relative bg-white/8 backdrop-blur-sm rounded-xl p-2 md:p-3 border border-white/20 hover:border-white/30 transition-all text-center">
          <div className="text-sm md:text-lg font-bold text-green-400">
            {monthSummary.closedTrades}
          </div>
          <div className="text-xs text-gray-400">Closed Trades</div>
        </div>
        <div className="group relative bg-white/8 backdrop-blur-sm rounded-xl p-2 md:p-3 border border-white/20 hover:border-white/30 transition-all text-center">
          <div className="text-sm md:text-lg font-bold text-blue-300">
            {monthSummary.openTrades}
          </div>
          <div className="text-xs text-gray-400">Open Trades</div>
        </div>
        <div className="group relative bg-white/8 backdrop-blur-sm rounded-xl p-2 md:p-3 border border-white/20 hover:border-white/30 transition-all text-center">
          <div className="text-sm md:text-lg font-bold text-purple-300">
            {monthSummary.totalTrades}
          </div>
          <div className="text-xs text-gray-400">Total Trades</div>
        </div>
        <div className="group relative bg-white/8 backdrop-blur-sm rounded-xl p-2 md:p-3 border border-white/20 hover:border-white/30 transition-all text-center col-span-2 lg:col-span-1">
          <div className="text-sm md:text-lg font-bold text-orange-300">
            {monthSummary.successRate}
          </div>
          <div className="text-xs text-gray-400">Success Rate</div>
        </div>
      </div>

      {/* Last Updated */}
      <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 mb-4 px-2">
        <Clock className="w-3 h-3 md:w-4 md:h-4 text-gray-400 flex-shrink-0" />
        <span className="text-xs text-gray-400 text-center break-words">
          Last updated: {lastUpdated.toLocaleTimeString()}
          {isCacheHit && (
            <span className="text-blue-400 ml-1 sm:ml-2">• Cached</span>
          )}
          {!isCacheHit && cacheStatus.text === "LIVE" && (
            <span className="text-green-400 ml-1 sm:ml-2">• Fresh</span>
          )}
        </span>
      </div>

      {/* Transaction Log */}
      <div
        className={`bg-black/20 rounded-xl border border-white/5 overflow-hidden ${
          !showOnMobile ? "hidden md:block" : ""
        }`}
      >
        {/* Mobile Cards */}
        <div className="block md:hidden">
          <div className="space-y-2 p-2 max-h-96 overflow-y-auto overflow-x-hidden">
            {currentMonthTransactions.length === 0 ? (
              <div className="p-8 text-center text-gray-400">
                No transactions for {currentMonthName}
              </div>
            ) : (
              currentMonthTransactions.map((tx) => (
                <div
                  key={tx.id}
                  className={`bg-white/5 rounded-lg p-3 border border-white/10 ${
                    tx.action === "OPEN" ? "border-l-2 border-l-blue-400" : ""
                  } max-w-full`}
                >
                  <div className="flex items-center justify-between mb-2 gap-2 min-w-0">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <span
                        className={`font-bold text-sm ${getCoinColor(
                          tx.coin
                        )} flex-shrink-0`}
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
                    tx.action === "OPEN" ? "border-l-2 border-l-blue-400" : ""
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
