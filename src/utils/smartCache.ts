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

  set(key: K, value: V): void {
    this.data.set(key, { value, time: Date.now() });
    this.stats.sets++;
    this.stats.entryCount = this.data.size;
    this.stats.totalEntries = this.data.size;
  }

  get(key: K, ttl?: number): V | undefined {
    const item = this.data.get(key);
    if (item) {
      const timeToLive = ttl || this.defaultTTL;
      const isExpired = Date.now() - item.time > timeToLive;

      if (!isExpired) {
        // Data is still fresh - return it
        this.stats.hits++;
        return item.value;
      } else {
        // Data expired - remove it and return undefined
        this.data.delete(key);
        this.stats.expiredEntries++;
        this.stats.misses++;
        return undefined;
      }
    } else {
      this.stats.misses++;
      return undefined;
    }
  }

  delete(key: K): boolean {
    const deleted = this.data.delete(key);
    if (deleted) {
      this.stats.deletes++;
      this.stats.entryCount = this.data.size;
      this.stats.totalEntries = this.data.size;
    }
    return deleted;
  }

  clear(): void {
    this.data.clear();
    this.stats.entryCount = 0;
    this.stats.totalEntries = 0;
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
        removedCount++;
      }
    }

    this.stats.expiredEntries += removedCount;
    this.stats.entryCount = this.data.size;
    this.stats.totalEntries = this.data.size;
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
  defaultTTL?: number
): SmartCache<K, V> {
  const cache = new SmartCache<K, V>();
  if (defaultTTL) {
    cache.setDefaultTTL(defaultTTL);
  }
  return cache;
}

// Create trading data cache with 4-hour TTL (4 * 60 * 60 * 1000 = 14,400,000 ms)
export const tradingDataCache = createSmartCache<string, any>(
  4 * 60 * 60 * 1000
);

export { SmartCache, createSmartCache };
export default SmartCache;
