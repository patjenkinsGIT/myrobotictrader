import { useState, useEffect, useRef, useCallback } from "react";

interface PriceData {
  symbol: string;
  price: number;
  change24h: number;
  changePercent24h: number;
  volume24h: number;
  timestamp: number;
  high24h: number;
  low24h: number;
}

interface WebSocketPriceHookReturn {
  prices: Record<string, PriceData>;
  isConnected: boolean;
  error: string | null;
  subscribe: (symbols: string[]) => void;
  unsubscribe: (symbols: string[]) => void;
  reconnect: () => void;
  connectionStatus: "connecting" | "connected" | "disconnected" | "error";
}

// Map your coins to Binance symbols
const SYMBOL_MAP: Record<string, string> = {
  BONK: "BONKUSDT",
  DOGE: "DOGEUSDT",
  SHIB: "SHIBUSDT",
  BTC: "BTCUSDT",
  ETH: "ETHUSDT",
  SOL: "SOLUSDT",
  ADA: "ADAUSDT",
  SUI: "SUIUSDT",
  MATIC: "MATICUSDT",
  DOT: "DOTUSDT",
  AVAX: "AVAXUSDT",
  LINK: "LINKUSDT",
  UNI: "UNIUSDT",
  ATOM: "ATOMUSDT",
  FTM: "FTMUSDT",
  ALGO: "ALGOUSDT",
  XRP: "XRPUSDT",
  LTC: "LTCUSDT",
  BCH: "BCHUSDT",
  VET: "VETUSDT",
  THETA: "THETAUSDT",
  HBAR: "HBARUSDT",
  ICP: "ICPUSDT",
  NEAR: "NEARUSDT",
  FLOW: "FLOWUSDT",
};

export const useWebSocketPrice = (): WebSocketPriceHookReturn => {
  const [prices, setPrices] = useState<Record<string, PriceData>>({});
  const [isConnected, setIsConnected] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<
    "connecting" | "connected" | "disconnected" | "error"
  >("disconnected");
  const [error, setError] = useState<string | null>(null);
  const [subscribedSymbols, setSubscribedSymbols] = useState<Set<string>>(
    new Set()
  );

  const wsRef = useRef<WebSocket | null>(null);

  const connect = useCallback(() => {
    try {
      setConnectionStatus("connecting");

      if (wsRef.current) {
        wsRef.current.close();
      }

      const wsUrl = "wss://stream.binance.com:9443/ws/!ticker@arr";
      wsRef.current = new WebSocket(wsUrl);

      wsRef.current.onopen = () => {
        console.log("🚀 WebSocket connected to Binance");
        setIsConnected(true);
        setConnectionStatus("connected");
        setError(null);
      };

      wsRef.current.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);

          if (Array.isArray(data)) {
            const newPrices: Record<string, PriceData> = {};

            data.forEach((ticker: any) => {
              const symbol = ticker.s;
              const baseSymbol = symbol.replace("USDT", "");

              const originalSymbol =
                Object.keys(SYMBOL_MAP).find(
                  (key) => SYMBOL_MAP[key] === symbol
                ) || baseSymbol;

              if (subscribedSymbols.has(originalSymbol)) {
                newPrices[originalSymbol] = {
                  symbol: originalSymbol,
                  price: parseFloat(ticker.c),
                  change24h: parseFloat(ticker.p),
                  changePercent24h: parseFloat(ticker.P),
                  volume24h: parseFloat(ticker.v),
                  high24h: parseFloat(ticker.h),
                  low24h: parseFloat(ticker.l),
                  timestamp: Date.now(),
                };
              }
            });

            if (Object.keys(newPrices).length > 0) {
              setPrices((prev) => ({ ...prev, ...newPrices }));
            }
          }
        } catch (err) {
          console.error("Error parsing WebSocket message:", err);
        }
      };

      wsRef.current.onerror = () => {
        setError("WebSocket connection error");
        setIsConnected(false);
        setConnectionStatus("error");
      };

      wsRef.current.onclose = () => {
        setIsConnected(false);
        setConnectionStatus("disconnected");
      };
    } catch (err) {
      setError("Failed to create WebSocket connection");
      setConnectionStatus("error");
    }
  }, [subscribedSymbols]);

  const subscribe = useCallback(
    (symbols: string[]) => {
      const newSymbols = new Set([...subscribedSymbols, ...symbols]);
      setSubscribedSymbols(newSymbols);
      console.log(`📈 Subscribed to live prices: ${symbols.join(", ")}`);
    },
    [subscribedSymbols]
  );

  const unsubscribe = useCallback(
    (symbols: string[]) => {
      const newSymbols = new Set(subscribedSymbols);
      symbols.forEach((symbol) => newSymbols.delete(symbol));
      setSubscribedSymbols(newSymbols);
    },
    [subscribedSymbols]
  );

  const reconnect = useCallback(() => {
    setError(null);
    connect();
  }, [connect]);

  useEffect(() => {
    connect();
    return () => {
      if (wsRef.current) {
        wsRef.current.close(1000, "Component unmounting");
      }
    };
  }, [connect]);

  return {
    prices,
    isConnected,
    error,
    subscribe,
    unsubscribe,
    reconnect,
    connectionStatus,
  };
};
