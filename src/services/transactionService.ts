// Service for fetching live transaction data from Google Sheets
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

// Google Sheets data structure matching your exact format:
// Column A: Coin, B: Action, C: Price, D: Quantity, E: Status, F: Profit, G: Timestamp
interface GoogleSheetsRow extends Array<string> {
  0: string; // Coin (SUI, BONK, DOGE)
  1: string; // Action (CLOSE)
  2: string; // Price ($3.60, $0.00)
  3: string; // Quantity (50.90, 10,260,719.00)
  4: string; // Status (Profit Goal Reached)
  5: string; // Profit ($7.34, $9.03)
  6: string; // Timestamp (Today 2:48 AM, 9/8/2025 12:26 PM)
}

export class TransactionService {
  private static instance: TransactionService;
  private cachedTransactions: LiveTransaction[] = [];
  private cachedLastUpdate: Date = new Date();
  private readonly CACHE_DURATION_MS = 5 * 60 * 1000; // 5 minutes cache

  static getInstance(): TransactionService {
    if (!TransactionService.instance) {
      TransactionService.instance = new TransactionService();
    }
    return TransactionService.instance;
  }

  // Fetch from your Google Sheets "Last25Transactions" tab with caching
  async fetchLiveTransactions(): Promise<LiveTransaction[]> {
    // Check if cache is still valid
    const cacheAge = Date.now() - this.cachedLastUpdate.getTime();
    if (
      cacheAge < this.CACHE_DURATION_MS &&
      this.cachedTransactions.length > 0
    ) {
      console.log("Returning cached transactions");
      return this.cachedTransactions;
    }

    try {
      console.log("Fetching fresh transaction data");

      // TODO: Replace with your actual Google Sheets API endpoint
      // const response = await fetch('/api/google-sheets/Last25Transactions');
      // const data = await response.json();
      // const transactions = this.parseGoogleSheetsData(data.values);

      // For now, use your actual data format for testing
      const transactions = this.simulateYourActualData();

      // Update cache
      this.updateCache(transactions);

      return transactions;
    } catch (error) {
      console.error("Failed to fetch live transactions:", error);

      // Return cached data if available, otherwise fallback
      if (this.cachedTransactions.length > 0) {
        console.log("Returning cached transactions due to error");
        return this.cachedTransactions;
      }

      return this.getFallbackData();
    }
  }

  // Update the cache with new data
  private updateCache(transactions: LiveTransaction[]): void {
    this.cachedTransactions = transactions;
    this.cachedLastUpdate = new Date();
    console.log(
      `Cache updated with ${
        transactions.length
      } transactions at ${this.cachedLastUpdate.toISOString()}`
    );
  }

  // Clear the cache manually if needed
  public clearCache(): void {
    this.cachedTransactions = [];
    this.cachedLastUpdate = new Date(0); // Set to epoch to force refresh
    console.log("Cache cleared");
  }

  // Get cache info for debugging
  public getCacheInfo(): { count: number; lastUpdate: Date; isValid: boolean } {
    const cacheAge = Date.now() - this.cachedLastUpdate.getTime();
    return {
      count: this.cachedTransactions.length,
      lastUpdate: this.cachedLastUpdate,
      isValid: cacheAge < this.CACHE_DURATION_MS,
    };
  }

  // Parse Google Sheets data in your exact format
  private parseGoogleSheetsData(rows: GoogleSheetsRow[]): LiveTransaction[] {
    if (!rows || rows.length === 0) return [];

    return rows
      .map((row, index) => {
        const [coin, action, price, quantity, status, profit, timestamp] = row;

        return {
          id: `tx_${Date.now()}_${index}`,
          coin: coin?.trim() || "",
          action: (action?.trim() as "CLOSE" | "OPEN") || "CLOSE",
          price: this.formatPrice(price),
          quantity: this.formatQuantity(quantity),
          profit: this.parseProfit(profit),
          timestamp: timestamp?.trim() || "",
          status: this.parseStatus(status),
        };
      })
      .filter(
        (tx): tx is LiveTransaction => tx.coin.length > 0 && tx.profit > 0
      ); // Fixed the filter with proper type guard
  }

  // Format price to match your display format
  private formatPrice(price: string): string {
    if (!price) return "$0.00";

    // Handle your format: $3.60, $0.00
    const cleanPrice = price.replace("$", "").replace(",", "");
    const numPrice = parseFloat(cleanPrice);

    if (isNaN(numPrice)) return price; // Return original if can't parse

    if (numPrice < 0.001) {
      return `$${numPrice.toFixed(5)}`;
    } else if (numPrice < 1) {
      return `$${numPrice.toFixed(4)}`;
    } else if (numPrice < 100) {
      return `$${numPrice.toFixed(2)}`;
    } else {
      return `$${numPrice.toLocaleString()}`;
    }
  }

  // Format quantity to handle large numbers like 10,260,719.00
  private formatQuantity(quantity: string): string {
    if (!quantity) return "0";

    // Handle your format: 50.90, 10,260,719.00, 710
    const cleanQuantity = quantity.replace(/,/g, "");
    const numQuantity = parseFloat(cleanQuantity);

    if (isNaN(numQuantity)) return quantity; // Return original if can't parse

    if (numQuantity >= 1000000) {
      return `${(numQuantity / 1000000).toFixed(1)}M`;
    } else if (numQuantity >= 1000) {
      return `${(numQuantity / 1000).toFixed(1)}K`;
    } else if (numQuantity < 1) {
      return numQuantity.toFixed(3);
    } else {
      return numQuantity.toLocaleString();
    }
  }

  // Parse profit amount from $7.34 format
  private parseProfit(profit: string): number {
    if (!profit) return 0;
    const cleanProfit = profit.replace("$", "").replace(",", "");
    return parseFloat(cleanProfit) || 0;
  }

  // Parse status from your format: "Profit Goal Reached" or other
  private parseStatus(status: string): "completed" | "profit_goal_reached" {
    if (!status) return "completed";
    return status.toLowerCase().includes("profit goal reached")
      ? "profit_goal_reached"
      : "completed";
  }

  // Simulate with your actual data format for testing
  private simulateYourActualData(): LiveTransaction[] {
    // Using your exact clipboard data format
    const mockRows: GoogleSheetsRow[] = [
      [
        "SUI",
        "CLOSE",
        "$3.60",
        "50.90",
        "Profit Goal Reached",
        "$7.34",
        "Today 2:48 AM",
      ],
      [
        "BONK",
        "CLOSE",
        "$0.00",
        "10,260,719.00",
        "Profit Goal Reached",
        "$9.03",
        "9/8/2025 12:26 PM",
      ],
      [
        "DOGE",
        "CLOSE",
        "$0.24",
        "710",
        "Profit Goal Reached",
        "$5.16",
        "9/8/2025 9:19 AM",
      ],
      [
        "BONK",
        "CLOSE",
        "$0.00",
        "10,859,512",
        "Profit Goal Reached",
        "$7.47",
        "9/8/2025 4:31 AM",
      ],
      [
        "BTC",
        "CLOSE",
        "$43,250.00",
        "0.025",
        "Profit Goal Reached",
        "$12.45",
        "9/7/2025 11:45 PM",
      ],
      [
        "ETH",
        "CLOSE",
        "$2,650.75",
        "1.8",
        "Completed",
        "$8.92",
        "9/7/2025 6:33 PM",
      ],
      [
        "ADA",
        "CLOSE",
        "$0.45",
        "2,450",
        "Completed",
        "$6.78",
        "9/7/2025 2:15 PM",
      ],
      [
        "SOL",
        "CLOSE",
        "$145.32",
        "12.5",
        "Profit Goal Reached",
        "$15.67",
        "9/7/2025 8:22 AM",
      ],
      [
        "MATIC",
        "CLOSE",
        "$0.89",
        "1,200",
        "Completed",
        "$4.23",
        "9/6/2025 11:58 PM",
      ],
      [
        "LINK",
        "CLOSE",
        "$11.45",
        "85.3",
        "Completed",
        "$9.87",
        "9/6/2025 7:41 PM",
      ],
      [
        "DOT",
        "CLOSE",
        "$5.67",
        "180.5",
        "Completed",
        "$7.12",
        "9/6/2025 3:29 PM",
      ],
      [
        "AVAX",
        "CLOSE",
        "$28.91",
        "45.2",
        "Profit Goal Reached",
        "$11.34",
        "9/6/2025 10:15 AM",
      ],
      [
        "UNI",
        "CLOSE",
        "$6.78",
        "125.8",
        "Completed",
        "$5.89",
        "9/5/2025 9:47 PM",
      ],
      [
        "ATOM",
        "CLOSE",
        "$9.23",
        "95.7",
        "Completed",
        "$8.45",
        "9/5/2025 4:12 PM",
      ],
      [
        "FTM",
        "CLOSE",
        "$0.35",
        "3,200",
        "Completed",
        "$6.23",
        "9/5/2025 12:38 PM",
      ],
      [
        "ALGO",
        "CLOSE",
        "$0.18",
        "5,500",
        "Completed",
        "$4.67",
        "9/5/2025 8:55 AM",
      ],
      [
        "XRP",
        "CLOSE",
        "$0.52",
        "1,850",
        "Profit Goal Reached",
        "$9.12",
        "9/4/2025 11:23 PM",
      ],
      [
        "LTC",
        "CLOSE",
        "$67.89",
        "18.5",
        "Completed",
        "$7.89",
        "9/4/2025 6:17 PM",
      ],
      [
        "BCH",
        "CLOSE",
        "$234.56",
        "5.2",
        "Completed",
        "$10.45",
        "9/4/2025 1:44 PM",
      ],
      [
        "VET",
        "CLOSE",
        "$0.02",
        "12,500",
        "Completed",
        "$5.78",
        "9/4/2025 9:31 AM",
      ],
      [
        "THETA",
        "CLOSE",
        "$1.23",
        "450",
        "Completed",
        "$8.23",
        "9/3/2025 10:56 PM",
      ],
      [
        "HBAR",
        "CLOSE",
        "$0.06",
        "8,900",
        "Completed",
        "$6.45",
        "9/3/2025 5:42 PM",
      ],
      [
        "ICP",
        "CLOSE",
        "$4.56",
        "78.3",
        "Profit Goal Reached",
        "$9.67",
        "9/3/2025 2:18 PM",
      ],
      [
        "NEAR",
        "CLOSE",
        "$3.45",
        "125.7",
        "Completed",
        "$7.34",
        "9/3/2025 10:25 AM",
      ],
      [
        "FLOW",
        "CLOSE",
        "$0.78",
        "650",
        "Completed",
        "$4.89",
        "9/2/2025 8:13 PM",
      ],
    ];

    return this.parseGoogleSheetsData(mockRows);
  }

  private getFallbackData(): LiveTransaction[] {
    // Return basic fallback if everything fails
    return [
      {
        id: "fallback_1",
        coin: "SUI",
        action: "CLOSE",
        price: "$3.60",
        quantity: "50.9",
        profit: 7.34,
        timestamp: "Today 2:48 AM",
        status: "profit_goal_reached",
      },
    ];
  }
}

export const transactionService = TransactionService.getInstance();
