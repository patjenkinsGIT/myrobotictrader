import React from "react";
import {
  TrendingUp,
  TrendingDown,
  Wifi,
  WifiOff,
  RotateCcw,
  Activity,
} from "lucide-react";

interface PriceData {
  symbol: string;
  price: number;
  changePercent24h: number;
  timestamp: number;
  high24h: number;
  low24h: number;
}

interface LivePriceIndicatorProps {
  symbol: string;
  priceData?: PriceData;
  isConnected: boolean;
  connectionStatus: "connecting" | "connected" | "disconnected" | "error";
  onReconnect?: () => void;
  className?: string;
  compact?: boolean;
}

export const LivePriceIndicator: React.FC<LivePriceIndicatorProps> = ({
  symbol,
  priceData,
  connectionStatus,
  onReconnect,
  className = "",
  compact = false,
}) => {
  const formatPrice = (price: number): string => {
    if (price === 0) return "Loading...";
    if (price < 0.00001) return `$${price.toFixed(8)}`;
    if (price < 0.001) return `$${price.toFixed(6)}`;
    if (price < 1) return `$${price.toFixed(4)}`;
    if (price < 100) return `$${price.toFixed(2)}`;
    return `$${price.toLocaleString()}`;
  };

  const formatChange = (change: number): string => {
    const sign = change >= 0 ? "+" : "";
    return `${sign}${change.toFixed(2)}%`;
  };

  const isPositive = priceData ? priceData.changePercent24h >= 0 : false;
  const changeColor = isPositive ? "text-green-400" : "text-red-400";
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  const getConnectionIcon = () => {
    switch (connectionStatus) {
      case "connected":
        return <Wifi className="w-4 h-4 text-green-400" />;
      case "connecting":
        return <Activity className="w-4 h-4 text-yellow-400 animate-pulse" />;
      case "disconnected":
        return <WifiOff className="w-4 h-4 text-gray-400" />;
      case "error":
        return <WifiOff className="w-4 h-4 text-red-400" />;
      default:
        return <WifiOff className="w-4 h-4 text-gray-400" />;
    }
  };

  if (compact) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {getConnectionIcon()}
        <div className="text-sm font-mono font-bold text-white">
          {formatPrice(priceData?.price || 0)}
        </div>
        {priceData && priceData.price > 0 && (
          <div className={`flex items-center gap-1 ${changeColor}`}>
            <TrendIcon className="w-3 h-3" />
            <span className="text-xs font-semibold">
              {formatChange(priceData.changePercent24h)}
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Connection Status */}
      <div className="flex items-center gap-2">
        {getConnectionIcon()}
        {connectionStatus === "error" && onReconnect && (
          <button
            onClick={onReconnect}
            className="p-1 hover:bg-white/10 rounded transition-colors"
            title="Reconnect"
          >
            <RotateCcw className="w-3 h-3 text-gray-400 hover:text-white" />
          </button>
        )}
        <span
          className={`text-xs font-medium ${
            connectionStatus === "connected"
              ? "text-green-400"
              : connectionStatus === "connecting"
              ? "text-yellow-400"
              : connectionStatus === "error"
              ? "text-red-400"
              : "text-gray-400"
          }`}
        >
          {connectionStatus.toUpperCase()}
        </span>
      </div>

      {/* Price Information */}
      <div className="flex items-center gap-4">
        <div className="text-right">
          <div className="text-lg font-mono font-bold text-white">
            {formatPrice(priceData?.price || 0)}
          </div>
          <div className="text-xs text-gray-400">{symbol} Live Price</div>
        </div>

        {priceData && priceData.price > 0 && (
          <div className={`flex items-center gap-1 ${changeColor}`}>
            <TrendIcon className="w-4 h-4" />
            <div className="text-right">
              <div className="text-sm font-semibold">
                {formatChange(priceData.changePercent24h)}
              </div>
              <div className="text-xs opacity-75">24h Change</div>
            </div>
          </div>
        )}

        {/* High/Low */}
        {priceData && priceData.price > 0 && (
          <div className="text-right">
            <div className="text-xs text-green-400">
              H: {formatPrice(priceData.high24h)}
            </div>
            <div className="text-xs text-red-400">
              L: {formatPrice(priceData.low24h)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
