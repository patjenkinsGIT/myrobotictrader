import { useState, useEffect } from "react";
import {
  Database,
  Clock,
  WifiOff,
  RefreshCw,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";
import { tradingDataCache } from "../utils/smartCache";

interface CacheStatusIndicatorProps {
  className?: string;
  showDetails?: boolean;
}

export const CacheStatusIndicator: React.FC<CacheStatusIndicatorProps> = ({
  className = "",
  showDetails = false,
}) => {
  const [stats, setStats] = useState(tradingDataCache.getStats());
  const [cacheInfo, setCacheInfo] = useState(tradingDataCache.getCacheInfo());
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const updateStats = () => {
      setStats(tradingDataCache.getStats());
      setCacheInfo(tradingDataCache.getCacheInfo());
    };

    updateStats();
    const interval = setInterval(updateStats, 5000); // Update every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms: number) => {
    if (ms <= 0) return "Now";

    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  const getStatusColor = () => {
    if (stats.rateLimitedKeys.length > 0) return "text-yellow-400";
    if (stats.expiredEntries > 0) return "text-orange-400";
    if (stats.totalEntries > 0) return "text-green-400";
    return "text-gray-400";
  };

  const getStatusIcon = () => {
    if (stats.rateLimitedKeys.length > 0) return <Clock className="w-4 h-4" />;
    if (stats.expiredEntries > 0) return <AlertTriangle className="w-4 h-4" />;
    if (stats.totalEntries > 0) return <Database className="w-4 h-4" />;
    return <WifiOff className="w-4 h-4" />;
  };

  const getStatusText = () => {
    if (stats.rateLimitedKeys.length > 0) return "Rate Limited";
    if (stats.expiredEntries > 0) return "Cache Stale";
    if (stats.totalEntries > 0) return "Cache Active";
    return "No Cache";
  };

  const getHitRate = () => {
    const total = stats.hits + stats.misses;
    return total > 0 ? Math.round((stats.hits / total) * 100) : 0;
  };

  const handleCleanup = () => {
    tradingDataCache.cleanup();
    setStats(tradingDataCache.getStats());
    setCacheInfo(tradingDataCache.getCacheInfo());
  };

  const handleClearAll = () => {
    tradingDataCache.clear();
    setStats(tradingDataCache.getStats());
    setCacheInfo(tradingDataCache.getCacheInfo());
  };

  if (!showDetails) {
    return (
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-gray-800/50 border border-gray-600/30 ${className}`}
      >
        <div className={getStatusColor()}>{getStatusIcon()}</div>
        <span className={`${getStatusColor()} text-xs`}>{getStatusText()}</span>
        <div
          className={`w-2 h-2 rounded-full ${
            stats.rateLimitedKeys.length > 0
              ? "bg-yellow-400"
              : stats.totalEntries > 0
              ? "bg-green-400"
              : "bg-gray-400"
          } ${stats.totalEntries > 0 ? "animate-pulse" : ""}`}
        ></div>
      </div>
    );
  }

  return (
    <div
      className={`bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-600/30 ${className}`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-3 hover:bg-gray-800/30 transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          <div className={getStatusColor()}>{getStatusIcon()}</div>
          <div>
            <div className={`font-medium text-sm ${getStatusColor()}`}>
              Smart Cache Status
            </div>
            <div className="text-xs text-gray-400">
              {stats.totalEntries} entries • {getHitRate()}% hit rate •{" "}
              {getStatusText()}
            </div>
          </div>
        </div>
        <RefreshCw
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {isExpanded && (
        <div className="border-t border-gray-600/30 p-3 space-y-3">
          {/* Performance Metrics */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-gray-800/30 rounded p-2">
              <div className="text-gray-400 mb-1">Cache Hits</div>
              <div className="text-green-400 font-semibold flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                {stats.hits}
              </div>
            </div>
            <div className="bg-gray-800/30 rounded p-2">
              <div className="text-gray-400 mb-1">Cache Misses</div>
              <div className="text-red-400 font-semibold">{stats.misses}</div>
            </div>
            <div className="bg-gray-800/30 rounded p-2">
              <div className="text-gray-400 mb-1">Hit Rate</div>
              <div
                className={`font-semibold ${
                  getHitRate() > 80
                    ? "text-green-400"
                    : getHitRate() > 50
                    ? "text-yellow-400"
                    : "text-red-400"
                }`}
              >
                {getHitRate()}%
              </div>
            </div>
            <div className="bg-gray-800/30 rounded p-2">
              <div className="text-gray-400 mb-1">Total Entries</div>
              <div className="text-white font-semibold">
                {stats.totalEntries}
              </div>
            </div>
          </div>

          {/* Cache Entries Details */}
          {cacheInfo.totalEntries > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-medium text-gray-300">
                Cache Entries:
              </div>
              <div className="max-h-32 overflow-y-auto space-y-1">
                {tradingDataCache.keys().map((key, index) => {
                  const value = tradingDataCache.get(key);
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between text-xs bg-gray-800/20 rounded p-2"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="text-gray-300 font-mono truncate">
                          {String(key)}
                        </div>
                        <div className="text-gray-500">
                          Value:{" "}
                          {typeof value === "object" ? "Object" : String(value)}
                        </div>
                      </div>
                      <div className="text-right ml-2">
                        <div className="text-xs text-green-400">Active</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Rate Limited Keys */}
          {stats.rateLimitedKeys.length > 0 && (
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded p-2">
              <div className="text-yellow-400 text-xs font-medium mb-1">
                Rate Limited Keys:
              </div>
              <div className="space-y-1">
                {stats.rateLimitedKeys.map((key: string) => {
                  const timeUntilNext =
                    tradingDataCache.getTimeUntilNextRequest(key);
                  return (
                    <div
                      key={key}
                      className="flex items-center justify-between text-xs"
                    >
                      <span className="text-gray-300 font-mono truncate">
                        {key}
                      </span>
                      <span className="text-yellow-400 ml-2">
                        {formatTime(timeUntilNext)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Status Summary */}
          <div className="bg-gray-800/20 rounded p-2 text-xs">
            <div className="grid grid-cols-2 gap-2 text-gray-400">
              <div>
                Stale:{" "}
                <span className="text-orange-400">{stats.staleEntries}</span>
              </div>
              <div>
                Expired:{" "}
                <span className="text-red-400">{stats.expiredEntries}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-600/30">
            <div className="flex gap-2">
              <button
                onClick={handleCleanup}
                className="text-xs text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1 px-2 py-1 rounded bg-gray-800/30 hover:bg-gray-700/30"
              >
                <RefreshCw className="w-3 h-3" />
                Cleanup
              </button>
              <button
                onClick={handleClearAll}
                className="text-xs text-red-400 hover:text-red-300 transition-colors duration-200 flex items-center gap-1 px-2 py-1 rounded bg-red-900/20 hover:bg-red-800/30"
              >
                <Database className="w-3 h-3" />
                Clear All
              </button>
            </div>
            <div className="text-xs text-gray-500">
              Updated: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
