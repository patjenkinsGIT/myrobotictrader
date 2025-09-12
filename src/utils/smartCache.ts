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

export class SmartCache<K = string, V = any> {
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

  set(key: K, value: V): void {
    this.data.set(key, { value, time: Date.now() });
    this.stats.sets++;
    this.stats.entryCount = this.data.size;
    this.stats.totalEntries = this.data.size;
  }

  get(key: K): V | undefined {
    const item = this.data.get(key);
    if (item) {
      this.stats.hits++;
      return item.value;
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
      expiredEntries: 0,
      staleEntries: 0,
      memoryUsage: this.calculateMemoryUsage(),
      hits: this.stats.hits,
      misses: this.stats.misses,
    };
  }

  cleanup(): void {
    // Basic cleanup - in a real implementation this would remove expired entries
    // For now, just update stats
    this.stats.entryCount = this.data.size;
    this.stats.totalEntries = this.data.size;
  }

  getTimeUntilNextRequest(_key: K): number {
    // Return 0 for now - in a real implementation this would calculate rate limit timing
    return 0;
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

export function createSmartCache<K = string, V = any>(): SmartCache<K, V> {
  return new SmartCache<K, V>();
}

export const tradingDataCache = createSmartCache<string, any>();

export default SmartCache;
