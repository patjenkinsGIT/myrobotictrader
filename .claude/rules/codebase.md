---
paths:
  - "src/**"
---

# Codebase Architecture & Conventions

> Loaded when working on source code.

## Component Architecture

**Pattern**: Functional Components + Hooks (No Redux/Context)

```
App.tsx (Router + Data Fetching)
  ↓
HomePage (Landing page composition)
  ↓
Components (Hero, TradingResults, Features, etc.)
  ↓
Custom Hooks (useGoogleSheetsData, useLiveBitcoinData, etc.)
  ↓
Services & Utils (smartCache, transactionService, logger)
```

## Data Flow

```
Google Sheets API
    ↓
useGoogleSheetsData hook
    ↓
smartCache (localStorage + in-memory, 30-min TTL)
    ↓
App.tsx state
    ↓
Props → Child Components
    ↓
UI Rendering
```

**Key Principle**: Single source of truth in `App.tsx`, prop drilling to children.

## State Management

- **useState**: Local component state (loading, error, data)
- **useEffect**: Data fetching, subscriptions, side effects
- **useCallback**: Memoized functions (refresh handlers)
- **NO Redux/Context**: Simple prop drilling for this use case

## Caching Architecture

**Location**: `src/utils/smartCache.ts`

```typescript
const cache = createSmartCache<string, any>(
  30 * 60 * 1000,              // 30-min TTL (dev: 5 min)
  "trading_data_cache",         // localStorage prefix
  true                          // persist to localStorage
);
```

Features: Survives page refreshes, automatic cleanup, statistics tracking, rate limit handling.

## TypeScript Standards

```typescript
// 1. Always define interfaces for props
interface ComponentProps {
  title: string;
  count?: number;
  onRefresh: () => void;
}

// 2. Use React.FC for components
export const MyComponent: React.FC<ComponentProps> = ({ title, count = 0 }) => {
  return <div>{title}: {count}</div>;
};

// 3. Type state properly
const [data, setData] = useState<TradingStats | null>(null);
const [loading, setLoading] = useState<boolean>(false);
const [error, setError] = useState<string | null>(null);
```

## Component Structure Pattern

```typescript
import React, { useState, useEffect } from 'react';
import { IconName } from 'lucide-react';

interface Props { /* Props here */ }

export const ComponentName: React.FC<Props> = ({ prop }) => {
  // 1. Hooks
  // 2. Event handlers
  // 3. Effects
  // 4. Render
  return (<section className="py-16">{/* JSX */}</section>);
};
```

## Styling Conventions

- Tailwind utility-first: `flex items-center justify-between px-4 py-2`
- Mobile-first responsive: `text-sm md:text-base lg:text-lg`
- Hover states: `bg-blue-600 hover:bg-blue-700 transition-colors`
- Consistent spacing (multiples of 4): `py-16 px-8 md:px-12 lg:px-16`

## Data Fetching Pattern

```typescript
export const useMyData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cached = cache.get(cacheKey);
        if (cached) { setData(cached); setLoading(false); return; }
        const response = await fetch(url);
        const result = await response.json();
        cache.set(cacheKey, result);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally { setLoading(false); }
    };
    fetchData();
  }, []);

  return { data, loading, error };
};
```

## Error Handling

- Always provide fallback data on API failures (use MOCK_DATA pattern)
- Use `Promise.allSettled` for parallel calls
- Log with `logger` utility, not `console.log`

## Console Management — CRITICAL

```typescript
// ❌ BAD
console.log('🎯 Hook called from:', new Error().stack);

// ✅ GOOD
import { logger } from '../utils/logger';
logger.debug('Parsing data', { rowCount: data.length });

// Production: Only WARN and ERROR
// Development: All levels
```

## Critical Files

| File | Purpose |
|------|---------|
| `src/App.tsx` | Main router + data fetching |
| `src/hooks/useGoogleSheetsData.ts` | Core data hook (CRITICAL) |
| `src/utils/smartCache.ts` | Caching system (CRITICAL) |
| `src/config/production.ts` | Production config |
| `src/components/TradingResults.tsx` | Main trading display |
| `src/data/posts.json` | Blog posts |

## Common Imports

```typescript
import React, { useState, useEffect, useCallback } from 'react';
import { IconName } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useGoogleSheetsData } from './hooks/useGoogleSheetsData';
import { logger } from './utils/logger';
import { tradingDataCache } from './utils/smartCache';
import { trackEvent } from './utils/analytics';
```