/**
 * Production-ready logging utility
 * Manages console output levels for different environments
 */

export enum LogLevel {
  ERROR = 0,
  WARN = 1,
  INFO = 2,
  DEBUG = 3,
  VERBOSE = 4,
}

interface LogConfig {
  level: LogLevel;
  enableConsole: boolean;
  enableRemote: boolean;
  remoteEndpoint?: string;
}

class Logger {
  private config: LogConfig;
  private isDevelopment: boolean;

  constructor() {
    this.isDevelopment = process.env.NODE_ENV === "development";

    // Production config: Only show errors and warnings
    // Development config: Show everything
    this.config = {
      level: this.isDevelopment ? LogLevel.VERBOSE : LogLevel.WARN,
      enableConsole: true,
      enableRemote: !this.isDevelopment,
      remoteEndpoint: "/api/logs",
    };
  }

  private shouldLog(level: LogLevel): boolean {
    return level <= this.config.level;
  }

  private formatMessage(level: string, message: string, data?: any): string {
    const timestamp = new Date().toISOString();
    const baseMessage = `[${timestamp}] ${level}: ${message}`;

    if (data) {
      return `${baseMessage} ${JSON.stringify(data)}`;
    }

    return baseMessage;
  }

  private logToConsole(level: LogLevel, message: string, data?: any) {
    if (!this.config.enableConsole || !this.shouldLog(level)) return;

    const formattedMessage = this.formatMessage(LogLevel[level], message, data);

    switch (level) {
      case LogLevel.ERROR:
        console.error(formattedMessage);
        break;
      case LogLevel.WARN:
        console.warn(formattedMessage);
        break;
      case LogLevel.INFO:
        console.info(formattedMessage);
        break;
      case LogLevel.DEBUG:
      case LogLevel.VERBOSE:
        console.log(formattedMessage);
        break;
    }
  }

  // Public logging methods
  error(message: string, data?: any) {
    this.logToConsole(LogLevel.ERROR, `❌ ${message}`, data);
  }

  warn(message: string, data?: any) {
    this.logToConsole(LogLevel.WARN, `⚠️ ${message}`, data);
  }

  info(message: string, data?: any) {
    this.logToConsole(LogLevel.INFO, `ℹ️ ${message}`, data);
  }

  debug(message: string, data?: any) {
    this.logToConsole(LogLevel.DEBUG, `🔍 ${message}`, data);
  }

  verbose(message: string, data?: any) {
    this.logToConsole(LogLevel.VERBOSE, `📝 ${message}`, data);
  }

  // Cache-specific logging methods
  cacheHit(key: string, source?: string) {
    this.debug(`Cache hit: ${key}${source ? ` (${source})` : ""}`);
  }

  cacheMiss(key: string, source?: string) {
    this.debug(`Cache miss: ${key}${source ? ` (${source})` : ""}`);
  }

  cacheSet(key: string, ttl?: number) {
    this.debug(`Cache set: ${key}${ttl ? ` (TTL: ${ttl}ms)` : ""}`);
  }

  // API-specific logging methods
  apiRequest(url: string, method: string = "GET") {
    this.debug(`API Request: ${method} ${url}`);
  }

  apiResponse(url: string, status: number, duration?: number) {
    const message = `API Response: ${status} ${url}${
      duration ? ` (${duration}ms)` : ""
    }`;

    if (status >= 400) {
      this.warn(message);
    } else {
      this.debug(message);
    }
  }

  apiError(url: string, error: Error | string) {
    this.error(`API Error: ${url}`, error);
  }

  // Trading-specific logging methods
  tradingDataFetch(source: string, recordCount?: number) {
    this.info(
      `Trading data fetched from ${source}${
        recordCount ? ` (${recordCount} records)` : ""
      }`
    );
  }

  tradingDataParsed(recordCount: number, source: string) {
    this.info(`Parsed ${recordCount} trading records from ${source}`);
  }

  tradingDataError(source: string, error: Error | string) {
    this.error(`Trading data error from ${source}`, error);
  }

  // Performance logging
  performanceStart(operation: string): number {
    const startTime = performance.now();
    this.verbose(`Performance start: ${operation}`);
    return startTime;
  }

  performanceEnd(operation: string, startTime: number) {
    const duration = performance.now() - startTime;
    this.debug(`Performance end: ${operation} (${duration.toFixed(2)}ms)`);
    return duration;
  }

  // Summary logging for production
  summary(operation: string, data: Record<string, any>) {
    this.info(`Summary: ${operation}`, data);
  }
}

// Export singleton instance
export const logger = new Logger();

// Convenience exports for common patterns
export const logCacheOperation = (
  operation: "hit" | "miss" | "set",
  key: string,
  extra?: any
) => {
  switch (operation) {
    case "hit":
      logger.cacheHit(key, extra);
      break;
    case "miss":
      logger.cacheMiss(key, extra);
      break;
    case "set":
      logger.cacheSet(key, extra);
      break;
  }
};

export const logApiCall = (url: string, method: string = "GET") => {
  const startTime = logger.performanceStart(`API ${method} ${url}`);

  return {
    success: (status: number) => {
      const duration = logger.performanceEnd(`API ${method} ${url}`, startTime);
      logger.apiResponse(url, status, duration);
    },
    error: (error: Error | string) => {
      logger.performanceEnd(`API ${method} ${url}`, startTime);
      logger.apiError(url, error);
    },
  };
};

export default logger;
