/**
 * Production Configuration
 * Centralized settings for production environment
 */

export const PRODUCTION_CONFIG = {
  // Logging Configuration
  logging: {
    // Set to 'ERROR' for production, 'DEBUG' for development
    level: process.env.NODE_ENV === "production" ? "WARN" : "VERBOSE",

    // Console logging (always enabled, but level-controlled)
    enableConsole: true,

    // Remote logging (for production monitoring)
    enableRemote: process.env.NODE_ENV === "production",

    // Specific log categories to suppress in production
    suppressInProduction: [
      "cache_hit",
      "cache_miss",
      "individual_transaction_parse",
      "monthly_data_parse",
      "api_request_details",
      "performance_timing",
    ],
  },

  // Cache Configuration
  cache: {
    // Reduce cache size in production
    maxSize: process.env.NODE_ENV === "production" ? 50 : 1000,

    // Longer TTL in production (4 hours vs 5 minutes in dev)
    defaultTTL:
      process.env.NODE_ENV === "production"
        ? 4 * 60 * 60 * 1000 // 4 hours
        : 5 * 60 * 1000, // 5 minutes

    // More aggressive cleanup in production
    cleanupInterval:
      process.env.NODE_ENV === "production"
        ? 10 * 60 * 1000 // 10 minutes
        : 60 * 1000, // 1 minute

    // Rate limiting (stricter in production)
    rateLimitWindow: 2 * 60 * 1000, // 2 minutes
    maxRequestsPerWindow: 1, // Only 1 request per 2 minutes
  },

  // API Configuration
  api: {
    // Retry configuration
    maxRetries: process.env.NODE_ENV === "production" ? 3 : 1,

    // Timeout settings
    timeout: process.env.NODE_ENV === "production" ? 30000 : 10000, // 30s vs 10s

    // Error handling
    enableFallbackData: true,
    enableStaleWhileRevalidate: true,
  },

  // Performance Configuration
  performance: {
    // Enable performance monitoring in production
    enableMonitoring: process.env.NODE_ENV === "production",

    // Batch operations for better performance
    enableBatching: true,

    // Memory management
    enableMemoryOptimization: process.env.NODE_ENV === "production",
  },

  // Feature Flags
  features: {
    // Debug components (only in development)
    showCacheDebugger: process.env.NODE_ENV === "development",
    showSEODebugger: process.env.NODE_ENV === "development",
    showPerformanceMetrics: process.env.NODE_ENV === "development",

    // Analytics
    enableAnalytics: process.env.NODE_ENV === "production",
    enableErrorReporting: process.env.NODE_ENV === "production",
  },
};

/**
 * Get environment-specific configuration
 */
export const getConfig = () => {
  return PRODUCTION_CONFIG;
};

/**
 * Check if we should log a specific category
 */
export const shouldLog = (category: string): boolean => {
  if (process.env.NODE_ENV !== "production") {
    return true; // Log everything in development
  }

  return !PRODUCTION_CONFIG.logging.suppressInProduction.includes(category);
};

/**
 * Production-optimized console methods
 */
export const productionConsole = {
  // Always show errors and warnings
  error: console.error,
  warn: console.warn,

  // Conditional info/debug based on environment
  info:
    process.env.NODE_ENV === "production"
      ? () => {} // Silent in production
      : console.info,

  debug:
    process.env.NODE_ENV === "production"
      ? () => {} // Silent in production
      : console.log,

  // Summary logs (always show important summaries)
  summary: (operation: string, data: any) => {
    console.info(`📊 ${operation}:`, data);
  },

  // Performance logs (only in development)
  performance:
    process.env.NODE_ENV === "production"
      ? () => {}
      : (message: string, data?: any) => {
          console.log(`⚡ ${message}`, data);
        },
};

export default PRODUCTION_CONFIG;
