import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Activity,
  Clock,
  Target,
  TrendingUp,
  Download,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
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

const TRANSACTIONS_PER_PAGE = 100;

export const LiveTransactionLog: React.FC = () => {
  const [allTransactions, setAllTransactions] = useState<LiveTransaction[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [isCacheHit, setIsCacheHit] = useState(false);
  const [showOnMobile, setShowOnMobile] = useState(false);

  // Calculate pagination
  const totalPages = Math.ceil(allTransactions.length / TRANSACTIONS_PER_PAGE);
  const startIndex = (currentPage - 1) * TRANSACTIONS_PER_PAGE;
  const endIndex = startIndex + TRANSACTIONS_PER_PAGE;
  const currentTransactions = allTransactions.slice(startIndex, endIndex);

  // Calculate summary for current page with date range
  const pageSummary = useMemo(() => {
    const closed = currentTransactions.filter((tx) => tx.action === "CLOSE");
    const open = currentTransactions.filter((tx) => tx.action === "OPEN");
    const totalProfit = closed.reduce((sum, tx) => sum + tx.profit, 0);
    const profitGoalReached = closed.filter(
      (tx) => tx.status === "profit_goal_reached"
    ).length;

    // Get date range for current page
    let dateRange = "";
    if (currentTransactions.length > 0) {
      const firstDate = new Date(currentTransactions[0].timestamp);
      const lastDate = new Date(
        currentTransactions[currentTransactions.length - 1].timestamp
      );

      if (!isNaN(firstDate.getTime()) && !isNaN(lastDate.getTime())) {
        const formatDate = (date: Date) =>
          date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          });
        dateRange = `${formatDate(lastDate)} - ${formatDate(firstDate)}`;
      }
    }

    return {
      totalProfit,
      closedCount: closed.length,
      openCount: open.length,
      totalCount: currentTransactions.length,
      successRate: closed.length > 0 ? "100%" : "0%",
      profitGoalReached,
      dateRange,
    };
  }, [currentTransactions]);

  // Format helpers
  const formatPrice = useCallback((price: string): string => {
    if (!price) return "$0.00";
    if (price.includes("$")) return price;
    const numPrice = parseFloat(price.replace(/[,$]/g, ""));
    if (isNaN(numPrice)) return price;
    if (numPrice < 0.00001) return `$${numPrice.toFixed(8)}`;
    if (numPrice < 0.001) return `$${numPrice.toFixed(5)}`;
    if (numPrice < 1) return `$${numPrice.toFixed(4)}`;
    if (numPrice < 100) return `$${numPrice.toFixed(2)}`;
    return `$${numPrice.toLocaleString()}`;
  }, []);

  const formatQuantity = useCallback((quantity: string): string => {
    if (!quantity) return "0";
    const numQuantity = parseFloat(quantity.replace(/[,$]/g, ""));
    if (isNaN(numQuantity)) return quantity;
    if (numQuantity >= 1000000) return `${(numQuantity / 1000000).toFixed(1)}M`;
    if (numQuantity >= 1000) return `${(numQuantity / 1000).toFixed(1)}K`;
    if (numQuantity < 1) return numQuantity.toFixed(3);
    return numQuantity.toLocaleString();
  }, []);

  const formatTimestamp = useCallback((timestamp: string): string => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) return timestamp;
    return (
      date.toLocaleDateString() +
      " " +
      date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  }, []);

  const parseGoogleSheetsData = useCallback(
    (rows: string[][]): LiveTransaction[] => {
      if (!rows || rows.length === 0) return [];
      return rows
        .map((row, index) => {
          // Skip header rows - check for common header text in ANY column
          const rowText = row.join("|").toLowerCase();
          if (
            (rowText.includes("coin") && rowText.includes("action")) ||
            (rowText.includes("symbol") && rowText.includes("action")) ||
            (rowText.includes("price") &&
              rowText.includes("quantity") &&
              rowText.includes("profit")) ||
            row[0]?.toString().toLowerCase().trim() === "symbol" ||
            row[0]?.toString().toLowerCase().trim() === "coin" ||
            row[1]?.toString().toLowerCase().trim() === "action"
          ) {
            return null;
          }

          const [coin, action, price, quantity, status, profit, timestamp] =
            row;
          if (!coin || profit === undefined || coin.toString().trim() === "")
            return null;

          const parsedProfit =
            parseFloat(profit.toString().replace(/[$,]/g, "")) || 0;
          return {
            id: `tx_${Date.now()}_${index}`,
            coin: coin?.toString().trim() || "",
            action:
              (action?.toString().trim().toUpperCase() as "CLOSE" | "OPEN") ||
              "CLOSE",
            price: formatPrice(price?.toString() || ""),
            quantity: formatQuantity(quantity?.toString() || ""),
            profit: parsedProfit,
            timestamp: formatTimestamp(timestamp?.toString() || ""),
            status: (status?.toString().toLowerCase().includes("goal")
              ? "profit_goal_reached"
              : "completed") as "completed" | "profit_goal_reached",
          };
        })
        .filter(
          (tx): tx is LiveTransaction => tx !== null && tx.coin.length > 0
        );
    },
    [formatPrice, formatQuantity, formatTimestamp]
  );

  // Fetch ALL transactions from Google Sheets
  const fetchTransactions = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      setIsCacheHit(false);

      const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID;
      const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
      const SHEET_TAB = "Transactions Raw Data";
      const SHEET_RANGE = "A:G";

      if (SHEET_ID && API_KEY) {
        const cacheKey = `${SHEET_ID}_${SHEET_TAB}_${SHEET_RANGE}`;
        const cachedData = tradingDataCache.get(cacheKey);

        if (cachedData) {
          setAllTransactions(cachedData as LiveTransaction[]);
          setIsCacheHit(true);
          setIsLoading(false);
          return;
        }

        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_TAB}!${SHEET_RANGE}?key=${API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) throw new Error(`API error: ${response.status}`);

        const data = await response.json();
        if (data.values && data.values.length > 0) {
          const transactions = parseGoogleSheetsData(data.values);
          tradingDataCache.set(cacheKey, transactions);
          setAllTransactions(transactions);
          setLastUpdated(new Date());
        }
      }
    } catch (err) {
      console.error("Failed to fetch transactions:", err);
      setError("Failed to load transactions");
    } finally {
      setIsLoading(false);
    }
  }, [parseGoogleSheetsData]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  // Download CSV function
  const downloadCSV = useCallback(() => {
    const headers = [
      "Coin",
      "Action",
      "Price",
      "Quantity",
      "Status",
      "Profit",
      "Timestamp",
    ];
    const csvContent = [
      headers.join(","),
      ...allTransactions.map((tx) =>
        [
          tx.coin,
          tx.action,
          tx.price,
          tx.quantity,
          tx.status,
          tx.profit,
          tx.timestamp,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `trading-transactions-${
      new Date().toISOString().split("T")[0]
    }.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  }, [allTransactions]);

  // Pagination handlers
  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const getCoinColor = (coin: string) => {
    const colors: { [key: string]: string } = {
      BTC: "text-orange-400",
      ETH: "text-blue-400",
      DOGE: "text-yellow-400",
      SUI: "text-purple-400",
    };
    return colors[coin] || "text-gray-300";
  };

  const getActionColor = (action: string) => {
    return action === "CLOSE"
      ? "bg-green-500/20 text-green-300"
      : "bg-blue-500/20 text-blue-300";
  };

  const getProfitColor = (profit: number) => {
    if (profit > 10) return "text-green-400";
    if (profit > 5) return "text-green-300";
    return "text-emerald-300";
  };

  if (isLoading && allTransactions.length === 0) {
    return (
      <div className="text-center py-12">
        <Activity className="w-8 h-8 text-blue-400 animate-spin mx-auto mb-4" />
        <p className="text-gray-400">Loading transactions...</p>
      </div>
    );
  }

  if (error && allTransactions.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-red-400 mb-4">⚠️ {error}</div>
        <button
          onClick={fetchTransactions}
          className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="mb-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 shadow-lg">
            <Activity className="w-full h-full text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">
              TRADING SCOREBOARD
            </h2>
            <p className="text-sm text-gray-400">
              {currentPage === 1 ? "Last" : "Viewing"}{" "}
              {currentTransactions.length} Transactions
              {totalPages > 1 && ` (Page ${currentPage} of ${totalPages})`}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          {/* Mobile toggle button */}
          <button
            onClick={() => setShowOnMobile(!showOnMobile)}
            className="md:hidden flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            {showOnMobile ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
            <span className="text-xs">{showOnMobile ? "Hide" : "Show"}</span>
          </button>
          <button
            onClick={downloadCSV}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download CSV</span>
          </button>
          <div className="px-3 py-2 bg-green-500/20 rounded-lg">
            <span className="text-xs text-green-400 font-medium uppercase">
              {isCacheHit ? "CACHED" : "LIVE"}
            </span>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
        <div className="group relative bg-white/8 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-green-500/30 transition-all">
          <div className="text-lg font-bold text-green-300">
            ${pageSummary.totalProfit.toFixed(2)}
          </div>
          <div className="text-xs text-gray-400">Total Profit</div>
          {pageSummary.dateRange && (
            <div className="text-xs text-gray-500 mt-1">
              {pageSummary.dateRange}
            </div>
          )}
        </div>
        <div className="group relative bg-white/8 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-green-500/30 transition-all">
          <div className="text-lg font-bold text-green-300">
            {pageSummary.closedCount}
          </div>
          <div className="text-xs text-gray-400">Closed</div>
        </div>
        <div className="group relative bg-white/8 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-blue-500/30 transition-all">
          <div className="text-lg font-bold text-blue-300">
            {pageSummary.openCount}
          </div>
          <div className="text-xs text-gray-400">Open</div>
        </div>
        <div className="group relative bg-white/8 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-purple-500/30 transition-all">
          <div className="text-lg font-bold text-purple-300">
            {pageSummary.totalCount}
          </div>
          <div className="text-xs text-gray-400">Total</div>
        </div>
        <div className="group relative bg-white/8 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-orange-500/30 transition-all">
          <div className="text-lg font-bold text-orange-300">
            {pageSummary.successRate}
          </div>
          <div className="text-xs text-gray-400">Success</div>
        </div>
      </div>

      {/* Pagination - Top */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mb-4">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg bg-white/8 hover:bg-white/12 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }
              return (
                <button
                  key={pageNum}
                  onClick={() => goToPage(pageNum)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === pageNum
                      ? "bg-blue-500 text-white"
                      : "bg-white/8 hover:bg-white/12 text-gray-300"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg bg-white/8 hover:bg-white/12 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Last updated */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <Clock className="w-4 h-4 text-gray-400" />
        <span className="text-xs text-gray-400">
          Last updated: {lastUpdated.toLocaleTimeString()}
        </span>
      </div>

      {/* Transaction Table */}
      <div
        className={`bg-black/20 rounded-xl border border-white/5 overflow-hidden ${
          !showOnMobile ? "hidden md:block" : ""
        }`}
      >
        {/* Desktop Table */}
        <div className="hidden md:block">
          <div className="bg-white/5 px-4 py-3 border-b border-white/5">
            <div className="grid grid-cols-12 gap-2 text-xs font-semibold text-gray-300 uppercase">
              <div className="col-span-2">Coin</div>
              <div className="col-span-2">Action</div>
              <div className="col-span-2">Price</div>
              <div className="col-span-2">Quantity</div>
              <div className="col-span-2">Profit</div>
              <div className="col-span-2">Time</div>
            </div>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {currentTransactions.map((tx, index) => (
              <div
                key={tx.id}
                className={`px-4 py-3 border-b border-r border-t border-white/5 hover:bg-white/5 transition-colors ${
                  index % 2 === 0 ? "bg-white/2" : ""
                } border-l-4 ${
                  tx.action === "OPEN" ? "border-l-blue-400" : ""
                }`}
                style={
                  tx.action === "CLOSE" ? { borderLeftColor: "#4ade80" } : {}
                }
              >
                <div className="grid grid-cols-12 gap-2 items-center text-sm">
                  <div className="col-span-2">
                    <span className={`font-bold ${getCoinColor(tx.coin)}`}>
                      {tx.coin}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span
                      className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getActionColor(
                        tx.action
                      )}`}
                    >
                      {tx.action}
                    </span>
                  </div>
                  <div className="col-span-2 text-gray-300">{tx.price}</div>
                  <div className="col-span-2 text-gray-300">{tx.quantity}</div>
                  <div className="col-span-2">
                    {tx.action === "CLOSE" ? (
                      <div className="flex flex-col">
                        <span
                          className={`font-bold font-mono ${getProfitColor(
                            tx.profit
                          )}`}
                        >
                          +${tx.profit.toFixed(2)}
                        </span>
                        {tx.status === "profit_goal_reached" && (
                          <span className="text-xs text-yellow-400 flex items-center gap-1">
                            <Target className="w-3 h-3" />
                            Goal
                          </span>
                        )}
                      </div>
                    ) : (
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-blue-400" />
                        Active
                      </span>
                    )}
                  </div>
                  <div className="col-span-2 text-gray-400 text-xs">
                    {tx.timestamp}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="block md:hidden space-y-2 p-2 max-h-96 overflow-y-auto">
          {currentTransactions.map((tx) => (
            <div
              key={tx.id}
              className="bg-white/5 rounded-lg p-3 border border-r border-t border-b border-white/10 border-l-4"
              style={
                tx.action === "OPEN"
                  ? { borderLeftColor: "#60a5fa" }
                  : { borderLeftColor: "#4ade80" }
              }
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className={`font-bold ${getCoinColor(tx.coin)}`}>
                    {tx.coin}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${getActionColor(
                      tx.action
                    )}`}
                  >
                    {tx.action}
                  </span>
                </div>
                <div className="text-xs text-gray-400">{tx.timestamp}</div>
              </div>
              <div className="flex justify-between mb-2 text-xs text-gray-300">
                <div>
                  <span className="text-gray-500">Price:</span> {tx.price}
                </div>
                <div>
                  <span className="text-gray-500">Qty:</span> {tx.quantity}
                </div>
              </div>
              <div className="flex justify-between items-center">
                {tx.action === "CLOSE" ? (
                  <span className={`font-bold ${getProfitColor(tx.profit)}`}>
                    +${tx.profit.toFixed(2)}
                  </span>
                ) : (
                  <span className="text-blue-400 text-sm flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Active
                  </span>
                )}
                {tx.status === "profit_goal_reached" && (
                  <span className="text-xs text-yellow-400 flex items-center gap-1">
                    <Target className="w-3 h-3" />
                    Goal
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination - Bottom */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg bg-white/8 hover:bg-white/12 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }
              return (
                <button
                  key={pageNum}
                  onClick={() => goToPage(pageNum)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === pageNum
                      ? "bg-blue-500 text-white"
                      : "bg-white/8 hover:bg-white/12 text-gray-300"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg bg-white/8 hover:bg-white/12 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Mobile helper text */}
      {!showOnMobile && (
        <div className="text-center mt-4 md:hidden">
          <p className="text-xs text-gray-500">
            Tap "Show" button above to view transaction history
          </p>
        </div>
      )}
    </div>
  );
};
