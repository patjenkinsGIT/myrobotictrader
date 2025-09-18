import React, { useState, useEffect } from "react";
import { Wifi, WifiOff, RefreshCw } from "lucide-react";

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

interface LivePriceIndicatorProps {
  symbol: string;
  priceData?: PriceData;
  isConnected: boolean;
  connectionStatus: string;
  onReconnect: () => void;
  compact?: boolean;
}

export const LivePriceIndicator: React.FC<LivePriceIndicatorProps> = ({
  symbol,
  priceData,
  isConnected,
  connectionStatus,
  onReconnect,
  compact = false,
}) => {
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // Update timestamp when price data changes
  useEffect(() => {
    if (priceData && priceData.timestamp) {
      setLastUpdated(new Date(priceData.timestamp));
    }
  }, [priceData]);

  const formatPrice = (price: number): string => {
    if (price < 0.001) return `$${price.toFixed(6)}`;
    if (price < 1) return `$${price.toFixed(4)}`;
    if (price < 100) return `$${price.toFixed(2)}`;
    return `$${price.toLocaleString()}`;
  };

  const getConnectionColor = () => {
    if (!isConnected) return "text-red-400";
    if (connectionStatus === "connecting") return "text-yellow-400";
    return "text-green-400";
  };

  const getConnectionIcon = () => {
    if (!isConnected) return <WifiOff className="w-4 h-4" />;
    if (connectionStatus === "connecting")
      return <RefreshCw className="w-4 h-4 animate-spin" />;
    return <Wifi className="w-4 h-4" />;
  };

  if (compact) {
    return (
      <div className="flex items-center gap-2 bg-black/30 rounded-lg px-3 py-2">
        <div className={`flex items-center gap-1 ${getConnectionColor()}`}>
          {getConnectionIcon()}
          <span className="text-xs font-medium">
            {isConnected ? "LIVE" : "OFFLINE"}
          </span>
        </div>

        {priceData && (
          <div className="flex items-center gap-2 text-white">
            <span className="text-sm font-bold">
              {formatPrice(priceData.price)}
            </span>
            <span
              className={`text-xs px-2 py-1 rounded ${
                priceData.changePercent24h >= 0
                  ? "bg-green-500/20 text-green-300"
                  : "bg-red-500/20 text-red-300"
              }`}
            >
              {priceData.changePercent24h >= 0 ? "+" : ""}
              {priceData.changePercent24h.toFixed(2)}%
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl border border-white/10 p-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-bold text-white">{symbol} Live Price</h4>

        <div className="flex items-center gap-2">
          <div className={`flex items-center gap-2 ${getConnectionColor()}`}>
            {getConnectionIcon()}
            <span className="text-sm font-medium">
              {connectionStatus.charAt(0).toUpperCase() +
                connectionStatus.slice(1)}
            </span>
          </div>

          {!isConnected && (
            <button
              onClick={onReconnect}
              className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded-lg transition-colors"
            >
              Reconnect
            </button>
          )}
        </div>
      </div>

      {priceData ? (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Current Price</span>
            <span className="text-2xl font-bold text-white">
              {formatPrice(priceData.price)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-300">24h Change</span>
            <div className="flex items-center gap-2">
              <span
                className={`font-bold ${
                  priceData.changePercent24h >= 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {priceData.changePercent24h >= 0 ? "+" : ""}
                {priceData.changePercent24h.toFixed(2)}%
              </span>
              <span
                className={`text-sm ${
                  priceData.change24h >= 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                ({priceData.change24h >= 0 ? "+" : ""}
                {formatPrice(Math.abs(priceData.change24h))})
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-300">24h High/Low</span>
            <div className="text-right">
              <div className="text-green-400 text-sm">
                H: {formatPrice(priceData.high24h)}
              </div>
              <div className="text-red-400 text-sm">
                L: {formatPrice(priceData.low24h)}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-300">24h Volume</span>
            <span className="text-white font-medium">
              ${priceData.volume24h.toLocaleString()}
            </span>
          </div>

          <div className="pt-2 border-t border-white/10">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Last Updated</span>
              <span>{lastUpdated.toLocaleTimeString()}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <div className="text-gray-400 mb-2">No price data available</div>
          <div className="text-sm text-gray-500">
            {isConnected ? "Waiting for data..." : "Connection required"}
          </div>
        </div>
      )}
    </div>
  );
};
