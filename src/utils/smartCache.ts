interface CacheStats {
  hits: number;
  misses: number;
  sets: number;
  deletes: number;
  evictions: number;
  memoryUsage: number;
  entryCount: number;
  totalEntries: number;
  rateLimitedKeys: string[];
  expiredEntries: number;
  staleEntries: number;
}

interface CacheInfo {
  totalEntries: number;
  rateLimitedKeys: string[];
  expiredEntries: number;
  staleEntries: number;
  memoryUsage: number;
  hits: number;
  misses: number;
}

class SmartCache<K = string, V = any> {
  private data = new Map<K, { value: V; time: number }>();
  private stats: CacheStats = {
    hits: 0,
    misses: 0,
    sets: 0,
    deletes: 0,
    evictions: 0,
    memoryUsage: 0,
    entryCount: 0,
    totalEntries: 0,
    rateLimitedKeys: [],
    expiredEntries: 0,
    staleEntries: 0,
  };

  // Default TTL: 4 hours (4 * 60 * 60 * 1000 milliseconds)
  private defaultTTL = 4 * 60 * 60 * 1000;
  private localStoragePrefix: string;
  private persistToLocalStorage: boolean;

  constructor(
    localStoragePrefix = "smart_cache",
    persistToLocalStorage = true
  ) {
    this.localStoragePrefix = localStoragePrefix;
    this.persistToLocalStorage = persistToLocalStorage;

    // Load existing data from localStorage on initialization
    if (this.persistToLocalStorage) {
      this.loadFromLocalStorage();
    }
  }

  private loadFromLocalStorage(): void {
    try {
      const keys = Object.keys(localStorage);
      const prefix = `${this.localStoragePrefix}_`;
      let restoredCount = 0;

      for (const key of keys) {
        if (key.startsWith(prefix)) {
          const cacheKey = key.substring(prefix.length) as K;
          const storedData = localStorage.getItem(key);

          if (storedData) {
            const parsed = JSON.parse(storedData);
            const now = Date.now();

            // Check if data is still valid
            if (now - parsed.time <= this.defaultTTL) {
              this.data.set(cacheKey, parsed);
              restoredCount++;
              console.log(
                `📥 Restored from localStorage: ${String(
                  cacheKey
                )} (age: ${Math.round((now - parsed.time) / 1000)}s)`
              );
            } else {
              // Remove expired data from localStorage
              localStorage.removeItem(key);
              this.stats.expiredEntries++;
              console.log(
                `⏰ Removed expired localStorage entry: ${String(cacheKey)}`
              );
            }
          }
        }
      }

      this.stats.entryCount = this.data.size;
      this.stats.totalEntries = this.data.size;

      if (restoredCount > 0) {
        console.log(
          `✅ SmartCache initialized with ${restoredCount} cached entries from localStorage`
        );
      } else {
        console.log(`🆕 SmartCache initialized with empty cache`);
      }
    } catch (error) {
      console.warn("Error loading cache from localStorage:", error);
    }
  }

  private saveToLocalStorage(key: K, item: { value: V; time: number }): void {
    if (!this.persistToLocalStorage) return;

    try {
      const storageKey = `${this.localStoragePrefix}_${String(key)}`;
      localStorage.setItem(storageKey, JSON.stringify(item));
      console.log(`💾 Saved to localStorage: ${String(key)}`);
    } catch (error) {
      console.warn("Error saving to localStorage:", error);
    }
  }

  private removeFromLocalStorage(key: K): void {
    if (!this.persistToLocalStorage) return;

    try {
      const storageKey = `${this.localStoragePrefix}_${String(key)}`;
      localStorage.removeItem(storageKey);
      console.log(`🗑️ Removed from localStorage: ${String(key)}`);
    } catch (error) {
      console.warn("Error removing from localStorage:", error);
    }
  }

  set(key: K, value: V): void {
    const item = { value, time: Date.now() };
    this.data.set(key, item);

    // Save to localStorage
    this.saveToLocalStorage(key, item);

    this.stats.sets++;
    this.stats.entryCount = this.data.size;
    this.stats.totalEntries = this.data.size;

    console.log(
      `💾 Cached data for key: ${String(key)} (memory + localStorage)`
    );
  }

  get(key: K, ttl?: number): V | undefined {
    const item = this.data.get(key);
    if (item) {
      const timeToLive = ttl || this.defaultTTL;
      const isExpired = Date.now() - item.time > timeToLive;

      if (!isExpired) {
        // Data is still fresh - return it
        this.stats.hits++;
        const ageInSeconds = Math.round((Date.now() - item.time) / 1000);
        console.log(
          `✅ Cache HIT for key: ${String(key)} (age: ${ageInSeconds}s)`
        );
        return item.value;
      } else {
        // Data expired - remove it and return undefined
        this.data.delete(key);
        this.removeFromLocalStorage(key);
        this.stats.expiredEntries++;
        this.stats.misses++;
        console.log(`⏰ Cache EXPIRED for key: ${String(key)}`);
        return undefined;
      }
    } else {
      this.stats.misses++;
      console.log(`❌ Cache MISS for key: ${String(key)}`);
      return undefined;
    }
  }

  delete(key: K): boolean {
    const deleted = this.data.delete(key);
    if (deleted) {
      this.removeFromLocalStorage(key);
      this.stats.deletes++;
      this.stats.entryCount = this.data.size;
      this.stats.totalEntries = this.data.size;
      console.log(`🗑️ Deleted cache entry: ${String(key)}`);
    }
    return deleted;
  }

  clear(): void {
    // Clear in-memory cache
    const keys = Array.from(this.data.keys());
    this.data.clear();

    // Clear localStorage entries
    if (this.persistToLocalStorage) {
      for (const key of keys) {
        this.removeFromLocalStorage(key);
      }
    }

    this.stats.entryCount = 0;
    this.stats.totalEntries = 0;
    console.log("🧹 Cache cleared (memory and localStorage)");
  }

  size(): number {
    return this.data.size;
  }

  keys(): Array<K> {
    return Array.from(this.data.keys());
  }

  values(): Array<V> {
    return Array.from(this.data.values()).map((item) => item.value);
  }

  has(key: K): boolean {
    return this.data.has(key);
  }

  // Check if a key exists and is not expired
  hasValid(key: K, ttl?: number): boolean {
    const item = this.data.get(key);
    if (!item) return false;

    const timeToLive = ttl || this.defaultTTL;
    const isExpired = Date.now() - item.time > timeToLive;

    if (isExpired) {
      // Clean up expired entry
      this.data.delete(key);
      this.removeFromLocalStorage(key);
      this.stats.expiredEntries++;
      return false;
    }

    return true;
  }

  // Get the age of a cached item in milliseconds
  getAge(key: K): number | undefined {
    const item = this.data.get(key);
    if (!item) return undefined;
    return Date.now() - item.time;
  }

  // Get time remaining until expiration (in milliseconds)
  getTimeUntilExpiration(key: K, ttl?: number): number {
    const item = this.data.get(key);
    if (!item) return 0;

    const timeToLive = ttl || this.defaultTTL;
    const age = Date.now() - item.time;
    const remaining = timeToLive - age;

    return Math.max(0, remaining);
  }

  getStats(): CacheStats {
    return {
      ...this.stats,
      entryCount: this.data.size,
      totalEntries: this.data.size,
      memoryUsage: this.calculateMemoryUsage(),
    };
  }

  getCacheInfo(): CacheInfo {
    return {
      totalEntries: this.data.size,
      rateLimitedKeys: [],
      expiredEntries: this.stats.expiredEntries,
      staleEntries: this.stats.staleEntries,
      memoryUsage: this.calculateMemoryUsage(),
      hits: this.stats.hits,
      misses: this.stats.misses,
    };
  }

  cleanup(): void {
    // Remove all expired entries
    const now = Date.now();
    let removedCount = 0;

    for (const [key, item] of this.data.entries()) {
      const isExpired = now - item.time > this.defaultTTL;
      if (isExpired) {
        this.data.delete(key);
        this.removeFromLocalStorage(key);
        removedCount++;
      }
    }

    this.stats.expiredEntries += removedCount;
    this.stats.entryCount = this.data.size;
    this.stats.totalEntries = this.data.size;

    if (removedCount > 0) {
      console.log(`🧹 Cleaned up ${removedCount} expired cache entries`);
    }
  }

  getTimeUntilNextRequest(key: K): number {
    // For rate limiting - return time until next request is allowed
    // For now, just return time until cache expiration
    return this.getTimeUntilExpiration(key);
  }

  // Set default TTL for all cache operations
  setDefaultTTL(ttl: number): void {
    this.defaultTTL = ttl;
  }

  // Get current default TTL
  getDefaultTTL(): number {
    return this.defaultTTL;
  }

  private calculateMemoryUsage(): number {
    // Rough estimate of memory usage
    let size = 0;
    for (const [_key, value] of this.data.entries()) {
      size += JSON.stringify(_key).length + JSON.stringify(value).length;
    }
    return size;
  }
}

function createSmartCache<K = string, V = any>(
  defaultTTL?: number,
  localStoragePrefix = "smart_cache",
  persistToLocalStorage = true
): SmartCache<K, V> {
  const cache = new SmartCache<K, V>(localStoragePrefix, persistToLocalStorage);
  if (defaultTTL) {
    cache.setDefaultTTL(defaultTTL);
  }
  return cache;
}

// Create trading data cache with 4-hour TTL and localStorage persistence
export const tradingDataCache = createSmartCache<string, any>(
  4 * 60 * 60 * 1000, // 4 hours TTL
  "trading_data_cache", // localStorage prefix
  true // enable localStorage persistence
);

export { SmartCache, createSmartCache };
export default SmartCache;
