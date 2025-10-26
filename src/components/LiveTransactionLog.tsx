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

  // Parse Google Sheets data from A:G columns - NOW INCLUDES BOTH OPEN AND CLOSED
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
      // Extract month/year from timestamp
      const timestamp = tx.timestamp;
      let monthKey = "";

      if (timestamp.toLowerCase().includes("today")) {
        const now = new Date();
        monthKey = `${now.toLocaleString("default", {
          month: "long",
        })} ${now.getFullYear()}`;
      } else {
        // Try to parse the date
        try {
          const date = new Date(timestamp);
          if (!isNaN(date.getTime())) {
            monthKey = `${date.toLocaleString("default", {
              month: "long",
            })} ${date.getFullYear()}`;
          } else {
            // If parsing fails, try to extract from format like "9/8 12:26 PM"
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

  // Get array of months in reverse chronological order (newest first)
  const monthKeys = useMemo(() => {
    const keys = Object.keys(transactionsByMonth);
    // Sort months by date (newest first)
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

  // Fallback data with both OPEN and CLOSED transactions
  const getFallbackData = useCallback((): LiveTransaction[] => {
    const mockRows: string[][] = [
      ["Coin", "Action", "Price", "Quantity", "Status", "Profit", "Timestamp"], // Header
      // Recent CLOSED transactions
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
      // Current OPEN positions
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
      [
        "AVAX",
        "CLOSE",
        "$28.91",
        "45.2",
        "Profit Goal Reached",
        "$11.34",
        "9/6 10:15 AM",
      ],
      ["UNI", "CLOSE", "$6.78", "125.8", "Completed", "$5.89", "9/5 9:47 PM"],
      ["ATOM", "CLOSE", "$9.23", "95.7", "Completed", "$8.45", "9/5 4:12 PM"],
      [
        "FTM",
        "OPEN",
        "$0.35",
        "3,200",
        "Active Position",
        "$0.00",
        "9/5 12:38 PM",
      ],
      ["ALGO", "CLOSE", "$0.18", "5,500", "Completed", "$4.67", "9/5 8:55 AM"],
      [
        "XRP",
        "CLOSE",
        "$0.52",
        "1,850",
        "Profit Goal Reached",
        "$9.12",
        "9/4 11:23 PM",
      ],
      ["LTC", "CLOSE", "$67.89", "18.5", "Completed", "$7.89", "9/4 6:17 PM"],
      [
        "BCH",
        "OPEN",
        "$234.56",
        "5.2",
        "Active Position",
        "$0.00",
        "9/4 1:44 PM",
      ],
      ["VET", "CLOSE", "$0.02", "12,500", "Completed", "$5.78", "9/4 9:31 AM"],
      ["THETA", "CLOSE", "$1.23", "450", "Completed", "$8.23", "9/3 10:56 PM"],
      ["HBAR", "CLOSE", "$0.06", "8,900", "Completed", "$6.45", "9/3 5:42 PM"],
      [
        "ICP",
        "CLOSE",
        "$4.56",
        "78.3",
        "Profit Goal Reached",
        "$9.67",
        "9/3 2:18 PM",
      ],
      [
        "NEAR",
        "OPEN",
        "$3.45",
        "125.7",
        "Active Position",
        "$0.00",
        "9/3 10:25 AM",
      ],
      ["FLOW", "CLOSE", "$0.78", "650", "Completed", "$4.89", "9/2 8:13 PM"],
      ["MANA", "CLOSE", "$0.45", "1,100", "Completed", "$6.12", "9/2 3:47 PM"],
    ];

    return parseGoogleSheetsData(mockRows);
  }, [parseGoogleSheetsData]);

  // Fetch transactions from Google Sheets Last25Results tab with Smart Cache
  const fetchTransactions = useCallback(
    async (showLoading = true) => {
      try {
        if (showLoading) setIsLoading(true);
        setError(null);
        setIsCacheHit(false);

        // Move environment variables inside the function
        const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID;
        const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

        // Check if we have Google Sheets configuration
        if (SHEET_ID && API_KEY) {
          // Use smart cache for transaction data
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
              console.error(`Google Sheets API error: ${response.status}`);
              throw new Error(
                `Google Sheets API error: ${response.status} ${response.statusText}`
              );
            }

            const data = await response.json();

            if (data.values && data.values.length > 0) {
              const liveTransactions = parseGoogleSheetsData(data.values);

              // Cache the fresh data
              tradingDataCache.set(cacheKey, liveTransactions);

              setTransactions(liveTransactions);
              setLastUpdated(new Date());
              setIsCacheHit(false);
              return;
            } else {
              setError(
                "No data found in Last25Results tab. Using sample data."
              );
            }
          } catch (apiError) {
            console.error("Google Sheets API error:", apiError);
            setError(
              `Failed to load from Last25Results tab: ${
                apiError instanceof Error ? apiError.message : "Unknown error"
              }`
            );
          }
        }

        // Use fallback data
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const fallbackData = getFallbackData();
        setTransactions(fallbackData);
        setLastUpdated(new Date());
        setIsCacheHit(false);
      } catch (err) {
        console.error("Failed to fetch transactions:", err);
        setError("Failed to load transactions. Using sample data.");
        setTransactions(getFallbackData());
        setIsCacheHit(false);
      } finally {
        setIsLoading(false);
      }
    },
    [SHEET_TAB, SHEET_RANGE, parseGoogleSheetsData, getFallbackData]
  );

  // Fetch on mount - NO AUTO-REFRESH
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
      ADA: "text-blue-300",
      SOL: "text-green-400",
      MATIC: "text-purple-300",
      LINK: "text-blue-500",
      DOT: "text-pink-400",
      AVAX: "text-red-400",
      UNI: "text-pink-300",
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

  // Get cache status for display
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
          <span className="ml-3 text-gray-300">
            Loading transaction data...
          </span>
        </div>
      </div>
    );
  }

  const cacheStatus = getCacheStatus();

  return (
    <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-6 mb-8">
      {/* Header with live indicator and mobile toggle */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-2 md:p-3 shadow-lg shadow-green-500/40">
            <Activity className="w-full h-full text-white" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">
              TRADING SCOREBOARD
            </h3>
            <p className="text-xs md:text-sm text-gray-400">
              {currentMonthName}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Mobile toggle button */}
          <button
            onClick={() => setShowOnMobile(!showOnMobile)}
            className="md:hidden flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 border border-white/20 transition-all duration-200"
          >
            {showOnMobile ? (
              <>
                <EyeOff className="w-4 h-4 text-gray-300" />
                <span className="text-xs text-gray-300">Hide Details</span>
              </>
            ) : (
              <>
                <Eye className="w-4 h-4 text-gray-300" />
                <span className="text-xs text-gray-300">Show Details</span>
              </>
            )}
          </button>

          {/* Smart Cache indicator */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full px-3 py-1 border border-green-400/30">
            <div
              className={`w-2 h-2 rounded-full ${
                isCacheHit ? "bg-blue-400" : "bg-green-400"
              } animate-pulse`}
            ></div>
            <span
              className={`text-xs md:text-sm font-medium ${cacheStatus.color}`}
            >
              {cacheStatus.text}
            </span>
          </div>
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 mb-4">
          <p className="text-yellow-400 text-sm">{error}</p>
        </div>
      )}

      {/* Summary stats - Always visible, optimized for mobile */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 md:gap-4 mb-6">
        <div className="group relative bg-white/8 backdrop-blur-sm rounded-xl p-2 md:p-3 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-green-500/15 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-15 rounded-xl transition-opacity duration-300"></div>
          <div className="relative text-sm md:text-lg font-bold text-green-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-300 group-hover:to-emerald-300 group-hover:bg-clip-text transition-all duration-300">
            {monthSummary.totalProfit}
          </div>
          <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            Total Profit
          </div>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
        </div>

        <div className="group relative bg-white/8 backdrop-blur-sm rounded-xl p-2 md:p-3 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-green-500/15 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-15 rounded-xl transition-opacity duration-300"></div>
          <div className="relative text-sm md:text-lg font-bold text-green-400 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
            {monthSummary.closedTrades}
          </div>
          <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            Closed
          </div>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
        </div>

        <div className="group relative bg-white/8 backdrop-blur-sm rounded-xl p-2 md:p-3 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-blue-500/15 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-15 rounded-xl transition-opacity duration-300"></div>
          <div className="relative text-sm md:text-lg font-bold text-blue-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300">
            {monthSummary.openTrades}
          </div>
          <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            Open
          </div>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
        </div>

        <div className="group relative bg-white/8 backdrop-blur-sm rounded-xl p-2 md:p-3 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/15 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-15 rounded-xl transition-opacity duration-300"></div>
          <div className="relative text-sm md:text-lg font-bold text-purple-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
            {monthSummary.totalTrades}
          </div>
          <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            Total
          </div>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
        </div>

        <div className="group relative bg-white/8 backdrop-blur-sm rounded-xl p-2 md:p-3 border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-orange-500/15 text-center col-span-2 lg:col-span-1">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 opacity-0 group-hover:opacity-15 rounded-xl transition-opacity duration-300"></div>
          <div className="relative text-sm md:text-lg font-bold text-orange-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-amber-300 group-hover:bg-clip-text transition-all duration-300">
            {monthSummary.successRate}
          </div>
          <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            Success
          </div>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 -z-10 blur-xl"></div>
        </div>
      </div>

      {/* Last updated info */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <Clock className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
        <span className="text-xs text-gray-400">
          Last updated: {lastUpdated.toLocaleTimeString()}
          {isCacheHit && (
            <span className="text-blue-400 ml-2">• Smart Cache Hit</span>
          )}
          {!isCacheHit && cacheStatus.text === "LIVE" && (
            <span className="text-green-400 ml-2">• Fresh Data Cached</span>
          )}
        </span>
      </div>

      {/* Transaction log - Conditional rendering for mobile */}
      <div
        className={`bg-black/20 rounded-xl border border-white/5 overflow-hidden ${
          !showOnMobile ? "hidden md:block" : ""
        }`}
      >
        {/* Mobile-first transaction list - Card layout for mobile, table for desktop */}
        <div className="block md:hidden">
          {/* Mobile Card Layout */}
          <div className="space-y-2 p-2 max-h-96 overflow-y-auto">
            {currentMonthTransactions.length === 0 ? (
              <div className="p-8 text-center text-gray-400">
                No transactions available for {currentMonthName}
              </div>
            ) : (
              currentMonthTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className={`bg-white/5 rounded-lg p-3 border border-white/10 ${
                    transaction.action === "OPEN"
                      ? "border-l-2 border-l-blue-400"
                      : ""
                  }`}
                >
                  {/* Top row: Coin and Action */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-bold text-sm ${getCoinColor(
                          transaction.coin
                        )}`}
                      >
                        {transaction.coin}
                      </span>
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getActionColor(
                          transaction.action
                        )}`}
                      >
                        {transaction.action}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      {transaction.timestamp}
                    </div>
                  </div>

                  {/* Middle row: Price and Quantity */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs text-gray-300">
                      <span className="text-gray-500">Price:</span>{" "}
                      {transaction.price}
                    </div>
                    <div className="text-xs text-gray-300">
                      <span className="text-gray-500">Qty:</span>{" "}
                      {transaction.quantity}
                    </div>
                  </div>

                  {/* Bottom row: Profit and Status */}
                  <div className="flex items-center justify-between">
                    <div>
                      {transaction.action === "CLOSE" ? (
                        <div
                          className={`font-bold text-sm ${getProfitColor(
                            transaction.profit
                          )}`}
                        >
                          +${transaction.profit.toFixed(2)}
                        </div>
                      ) : (
                        <div className="text-gray-500 text-sm">
                          Active Position
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      {transaction.status === "profit_goal_reached" && (
                        <>
                          <Target className="w-3 h-3 text-yellow-400" />
                          <span className="text-xs text-yellow-400">Goal</span>
                        </>
                      )}
                      {transaction.action === "OPEN" && (
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

        {/* Desktop Table Layout */}
        <div className="hidden md:block">
          {/* Header */}
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

          {/* Scrollable transaction list */}
          <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
            {currentMonthTransactions.length === 0 ? (
              <div className="p-8 text-center text-gray-400">
                No transactions available for {currentMonthName}
              </div>
            ) : (
              currentMonthTransactions.map((transaction, index) => (
                <div
                  key={transaction.id}
                  className={`px-4 py-3 border-b border-white/5 hover:bg-white/5 transition-colors duration-200 ${
                    index % 2 === 0 ? "bg-white/2" : ""
                  } ${
                    transaction.action === "OPEN"
                      ? "border-l-2 border-l-blue-400"
                      : ""
                  }`}
                >
                  <div className="grid grid-cols-12 gap-2 items-center text-sm">
                    {/* Coin */}
                    <div className="col-span-2">
                      <div
                        className={`font-bold ${getCoinColor(
                          transaction.coin
                        )}`}
                      >
                        {transaction.coin}
                      </div>
                    </div>

                    {/* Action */}
                    <div className="col-span-2">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getActionColor(
                          transaction.action
                        )}`}
                      >
                        {transaction.action}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="col-span-2">
                      <div className="text-gray-200 font-mono text-xs">
                        {transaction.price}
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="col-span-2">
                      <div className="text-gray-300 font-mono text-xs">
                        {transaction.quantity}
                      </div>
                    </div>

                    {/* Profit */}
                    <div className="col-span-2">
                      {transaction.action === "CLOSE" ? (
                        <div
                          className={`font-bold font-mono ${getProfitColor(
                            transaction.profit
                          )}`}
                        >
                          +${transaction.profit.toFixed(2)}
                        </div>
                      ) : (
                        <div className="text-gray-500 font-mono text-xs">-</div>
                      )}
                      {transaction.status === "profit_goal_reached" && (
                        <div className="text-xs text-yellow-400 flex items-center gap-1 mt-1">
                          <Target className="w-3 h-3" />
                          <span>Goal Reached</span>
                        </div>
                      )}
                      {transaction.action === "OPEN" && (
                        <div className="text-xs text-blue-400 flex items-center gap-1 mt-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>Active</span>
                        </div>
                      )}
                    </div>

                    {/* Time */}
                    <div className="col-span-2">
                      <div className="text-gray-400 text-xs">
                        {transaction.timestamp}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg bg-white/8 hover:bg-white/12 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-1 items-center">
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
              const shortMonth = monthName
                ? monthName.split(" ")[0].substring(0, 3)
                : "";

              return (
                <button
                  key={pageNum}
                  onClick={() => goToPage(pageNum)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    currentPage === pageNum
                      ? "bg-blue-500 text-white shadow-lg"
                      : "bg-white/8 hover:bg-white/12 text-gray-300"
                  }`}
                  title={monthName}
                >
                  {shortMonth}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg bg-white/8 hover:bg-white/12 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Next month"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Footer note - CLEANED UP */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          ✅ Smart Cache enabled • Live data with intelligent caching •{" "}
          <span className="text-green-400 font-medium">
            Shows both Open & Closed positions
          </span>
        </p>
        {!showOnMobile && (
          <p className="text-xs text-gray-500 mt-1 md:hidden">
            Tap "Show Details" to view transaction history
          </p>
        )}
      </div>
    </div>
  );
};
