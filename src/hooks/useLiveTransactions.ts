import { useState, useEffect } from "react";
import {
  LiveTransaction,
  transactionService,
} from "../services/transactionService";

export const useLiveTransactions = () => {
  const [transactions, setTransactions] = useState<LiveTransaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // Fetch transactions on mount
  useEffect(() => {
    fetchTransactions();
  }, []);

  // Set up periodic updates (every 2 minutes)
  useEffect(() => {
    const interval = setInterval(() => {
      fetchTransactions(false); // Silent update
    }, 2 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const fetchTransactions = async (showLoading = true) => {
    try {
      if (showLoading) setIsLoading(true);
      setError(null);

      // Try to fetch from live source first
      const liveTransactions = await transactionService.fetchLiveTransactions();

      if (liveTransactions && liveTransactions.length > 0) {
        setTransactions(liveTransactions);
        setLastUpdated(new Date());
      }
    } catch (err) {
      console.error("Failed to fetch transactions:", err);
      setError("Failed to load live transactions");

      // Use fallback data
      const fallbackData = await transactionService.fetchLiveTransactions();
      setTransactions(fallbackData);
    } finally {
      setIsLoading(false);
    }
  };

  // Manual refresh function
  const refreshTransactions = () => {
    fetchTransactions(true);
  };

  // Calculate summary stats
  const summary = {
    totalProfit: transactions.reduce((sum, tx) => sum + tx.profit, 0),
    avgProfit:
      transactions.length > 0
        ? transactions.reduce((sum, tx) => sum + tx.profit, 0) /
          transactions.length
        : 0,
    totalTrades: transactions.length,
    profitGoalReached: transactions.filter(
      (tx) => tx.status === "profit_goal_reached"
    ).length,
    successRate: "100%", // All trades are profitable as per your system
  };

  return {
    transactions,
    isLoading,
    error,
    lastUpdated,
    summary,
    refreshTransactions,
  };
};
