# CLAUDE.md - AI Assistant Guide for MyRoboticTrader

**Last Updated**: 2025-11-29
**Documentation Version**: 1.2.0
**Codebase Version**: 1.0.0
**Total Lines of Code**: ~11,794 TypeScript lines

---

## Table of Contents

1. [My Tools Quick Reference](#my-tools-quick-reference) ⭐
2. [Project Overview](#project-overview)
3. [Architecture & Key Patterns](#architecture--key-patterns)
4. [Directory Structure](#directory-structure)
5. [Development Workflows](#development-workflows)
6. [Key Conventions](#key-conventions)
7. [Common Tasks](#common-tasks)
8. [Critical Files Reference](#critical-files-reference)
9. [API Integrations](#api-integrations)
10. [Deployment](#deployment)
11. [Troubleshooting](#troubleshooting)
12. [Maintaining This Documentation](#maintaining-this-documentation)

---

## My Tools Quick Reference

> **Purpose**: Quick inventory of all available skills and MCP tools so you never forget what's available.

### Claude Code Skills (6)

| Skill | Invoke With | Use For |
|-------|-------------|---------|
| **myrobotictrader-skill** | `/skill myrobotictrader-skill` | Brand voice content, blog posts, social media for MRT |
| **marketing-writer** | `/skill marketing-writer` | Landing pages, launch emails, feature announcements |
| **affiliate-marketing** | `/skill affiliate-marketing` | Affiliate content, product reviews, comparisons |
| **design-guide** | `/skill design-guide` | UI/component design, ensuring modern clean look |
| **idea-validator** | `/skill idea-validator` | Validate new ideas before building |
| **roadmap-builder** | `/skill roadmap-builder` | Prioritize features, decide what to build next |

### MCP Server: myrobotictrader-mcp

#### Trading & Market Data
| Tool | What It Does |
|------|--------------|
| `fetch_trading_data` | Pull live trading stats from Google Sheets |
| `get_crypto_price` | Get current price for a specific coin (BTC, ETH, etc.) |
| `get_top_cryptos` | Top coins by market cap |
| `get_market_movers` | Today's biggest gainers and losers |
| `get_fear_greed_index` | Market sentiment (0-100 fear/greed scale) |
| `get_altcoin_season_index` | BTC season vs Altcoin season indicator |

#### Content & News
| Tool | What It Does |
|------|--------------|
| `fetch_crypto_news` | Get news by category (crypto, regulation, DeFi, etc.) |
| `search_topic_now` | Research a specific topic with current news |
| `generate_content` | Draft blog posts, tweets, or thread content |
| `add_topic` / `remove_topic` | Manage your content watchlist |
| `list_topics` | See all topics you're tracking |

#### Discord Monitoring (DePIN Projects)
| Tool | What It Does |
|------|--------------|
| `discord_list_servers` | See which Discord servers the bot is in |
| `discord_list_channels` | List channels in a server |
| `discord_read_messages` | Read recent messages from a channel |
| `discord_search_keywords` | Search for specific keywords (TGE, airdrop, etc.) |
| `discord_monitor_announcements` | Watch for important announcements |

### Common Workflows

**Write a blog post:**
```
1. search_topic_now → research the topic
2. fetch_trading_data → get your live stats
3. /skill myrobotictrader-skill → activate brand voice
4. generate_content or write manually
```

**Check market conditions:**
```
1. get_fear_greed_index → sentiment
2. get_altcoin_season_index → BTC vs alts
3. get_market_movers → what's moving today
4. fetch_crypto_news → relevant news
```

**Monitor DePIN project:**
```
1. discord_list_channels → find announcement channel
2. discord_monitor_announcements → check for TGE/airdrop news
3. discord_search_keywords → search specific terms
```

---

## Project Overview

### What This Is

MyRoboticTrader is a **production-ready React/TypeScript landing page** showcasing automated cryptocurrency trading results. The site features:

- **Live trading statistics** from Google Sheets
- **Real-time crypto prices** via Binance WebSocket & CoinGecko API
- **Enterprise-grade caching system** (95% API reduction)
- **Blog system** for trading education
- **Cloudflare serverless functions** for dynamic content
- **Comprehensive SEO** with structured data

### Tech Stack

```
Frontend:  React 18.2 + TypeScript 5 + Vite 4.4
Styling:   Tailwind CSS 3.3
Routing:   React Router DOM 7.8.2
Icons:     Lucide React 0.263.1
Hosting:   Cloudflare Pages
Functions: Cloudflare Workers (7 serverless functions)
CI/CD:     GitHub Actions
```

### Key Metrics

- **30+ React components** (functional components only)
- **6 custom hooks** for data fetching & state management
- **3 API integrations** (Google Sheets, CoinGecko, Binance)
- **Smart caching** with 30-min TTL (4-hour in production)
- **Zero class components** - all modern hooks-based

---

## Architecture & Key Patterns

### Component Architecture

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

### Data Flow

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

### State Management Strategy

- **useState**: Local component state (loading, error, data)
- **useEffect**: Data fetching, subscriptions, side effects
- **useCallback**: Memoized functions (refresh handlers)
- **NO Redux/Context**: Simple prop drilling for this use case

### Caching Architecture

**Location**: `src/utils/smartCache.ts`

```typescript
// In-Memory + localStorage dual persistence
const cache = createSmartCache<string, any>(
  30 * 60 * 1000,              // 30-min TTL (dev: 5 min)
  "trading_data_cache",         // localStorage prefix
  true                          // persist to localStorage
);

// Features:
// - Survives page refreshes
// - Automatic cleanup of expired entries
// - Statistics tracking (hits, misses, evictions)
// - Rate limit handling
```

**Usage Pattern**:
```typescript
const cached = cache.get(key, ttl);
if (cached) return cached;

const fresh = await fetchData();
cache.set(key, fresh);
return fresh;
```

---

## Directory Structure

```
myrobotictrader/
│
├── src/
│   ├── components/           # 30+ UI components
│   │   ├── Hero.tsx          # Landing hero section
│   │   ├── TradingResults.tsx    # Core trading stats display (28KB)
│   │   ├── LiveTransactionLog.tsx # Real-time transaction list (34KB)
│   │   ├── PriceChartWithPurchases.tsx # Chart visualization (29KB)
│   │   ├── SEOHead.tsx       # Dynamic SEO management
│   │   ├── StaticSEO.tsx     # Static SEO for crawlers
│   │   ├── Footer.tsx        # Footer with legal disclaimers
│   │   ├── FullNav.tsx       # Responsive navigation
│   │   └── ...               # 20+ more components
│   │
│   ├── hooks/                # Custom React hooks (40KB)
│   │   ├── useGoogleSheetsData.ts   # **CRITICAL** - Main data hook (11.5KB)
│   │   ├── useLiveBitcoinData.ts    # Bitcoin data from CoinGecko (6.6KB)
│   │   ├── useWebSocketPrice.ts     # Binance WebSocket (4.8KB)
│   │   ├── useLiveTransactions.ts   # Transaction data (2.2KB)
│   │   ├── useBitcoinCorrelation.ts # BTC correlation (5KB)
│   │   └── useMediaQuery.ts  # Responsive breakpoints (730B)
│   │
│   ├── services/
│   │   └── transactionService.ts    # Transaction data service (10.7KB)
│   │
│   ├── utils/
│   │   ├── smartCache.ts     # **CRITICAL** - Caching system (8.3KB)
│   │   ├── analytics.ts      # Google Analytics 4 (1.5KB)
│   │   ├── logger.ts         # Production logging (5.2KB)
│   │   └── tradingTime.ts    # Trading time calculations (2.6KB)
│   │
│   ├── config/
│   │   ├── analytics.ts      # Analytics constants
│   │   └── production.ts     # **CRITICAL** - Prod config (141 lines)
│   │
│   ├── data/
│   │   ├── tradingResults.ts # Static trading data
│   │   └── posts.json        # Blog posts (59.5KB)
│   │
│   ├── pages/
│   │   ├── ResourcesPage.tsx
│   │   ├── PrivacyPage.tsx
│   │   ├── TransparencyPage.tsx
│   │   ├── BlogListPage.tsx
│   │   └── BlogPostPage.tsx
│   │
│   ├── App.tsx               # **CRITICAL** - Router + main data fetching
│   ├── main.tsx              # React entry point
│   ├── index.css             # Tailwind directives + custom animations
│   └── vite-env.d.ts         # Vite type definitions
│
├── functions/api/            # Cloudflare Workers (serverless)
│   ├── crypto.js             # CoinGecko API wrapper
│   ├── metric-card.js        # SVG metric card generator
│   ├── metric-card.png.js    # PNG metric card
│   ├── trophy-card.js        # Achievement card generator
│   ├── post-to-x.js          # Twitter/X posting automation
│   ├── rss.js                # RSS feed generation
│   └── coinmarketcap.js      # CoinMarketCap API wrapper
│
├── .github/workflows/
│   └── update-trading-data.yml # GitHub Actions automation
│
├── dist/                     # Build output (not in git)
├── public/                   # Static assets
│
├── vite.config.ts            # **CRITICAL** - Vite build config
├── tsconfig.json             # TypeScript compiler options
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── package.json              # Dependencies & scripts
├── index.html                # HTML entry point
├── updateTradingData.js      # Data update script (Node.js)
├── .env                      # Environment variables (NOT IN GIT)
└── .env.example              # Environment template
```

---

## Development Workflows

### Initial Setup

```bash
# 1. Clone repository
git clone https://github.com/patjenkinsGIT/myrobotictrader.git
cd myrobotictrader

# 2. Install dependencies
npm install

# 3. Create .env file (copy from .env.example)
cp .env.example .env

# 4. Add your API keys to .env
# VITE_GOOGLE_SHEET_ID=your-sheet-id
# VITE_GOOGLE_API_KEY=your-api-key

# 5. Start development server
npm run dev
# → Opens at http://localhost:3000
```

### Development Commands

```bash
npm run dev          # Start Vite dev server (port 3000)
npm run build        # TypeScript compile + Vite build → dist/
npm run preview      # Preview production build (port 4173)
npm run lint         # ESLint with strict rules (--max-warnings 0)
npm run update-trading  # Fetch latest data from Google Sheets
```

### Making Changes

**ALWAYS follow this pattern**:

1. **Read before editing**: Use Read tool to understand existing code
2. **Check types**: Look at TypeScript interfaces/types
3. **Follow conventions**: Match existing code style
4. **Test locally**: Run `npm run dev` and verify in browser
5. **Check console**: Ensure no errors (should be clean)
6. **Run lint**: `npm run lint` must pass with 0 warnings
7. **Build test**: `npm run build` must succeed

### File Modification Guidelines

**DO:**
- ✅ Edit existing files when possible (avoid creating new files)
- ✅ Preserve TypeScript types and interfaces
- ✅ Use existing utility functions (smartCache, logger, analytics)
- ✅ Follow Tailwind CSS utility-first approach
- ✅ Keep console output minimal (production-ready)

**DON'T:**
- ❌ Create new files unless absolutely necessary
- ❌ Add console.log spam (use logger utility)
- ❌ Introduce new dependencies without justification
- ❌ Break TypeScript strict mode compliance
- ❌ Bypass ESLint rules

---

## Key Conventions

### TypeScript Standards

```typescript
// 1. Always define interfaces for props
interface ComponentProps {
  title: string;
  count?: number;  // Optional props with ?
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

### Component Structure

```typescript
import React, { useState, useEffect } from 'react';
import { IconName } from 'lucide-react';

interface Props {
  // Props here
}

export const ComponentName: React.FC<Props> = ({ prop }) => {
  // 1. Hooks (useState, useEffect, custom hooks)
  const [state, setState] = useState();

  // 2. Event handlers
  const handleClick = () => {
    // Handler logic
  };

  // 3. Effects
  useEffect(() => {
    // Effect logic
  }, [dependencies]);

  // 4. Render
  return (
    <section className="py-16">
      {/* Component JSX */}
    </section>
  );
};
```

### Styling Conventions

```typescript
// Use Tailwind utility classes
<div className="flex items-center justify-between px-4 py-2">

// Responsive design (mobile-first)
<div className="text-sm md:text-base lg:text-lg">

// Hover states for interactive elements
<button className="bg-blue-600 hover:bg-blue-700 transition-colors">

// Consistent spacing (multiples of 4: 4, 8, 12, 16)
<section className="py-16 px-8 md:px-12 lg:px-16">
```

### Data Fetching Pattern

```typescript
// 1. Create custom hook (see src/hooks/)
export const useMyData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check cache first
        const cached = cache.get(cacheKey);
        if (cached) {
          setData(cached);
          setLoading(false);
          return;
        }

        // Fetch fresh data
        const response = await fetch(url);
        const result = await response.json();

        // Cache and set state
        cache.set(cacheKey, result);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
```

### Error Handling

```typescript
// Pattern 1: Try-catch with fallback data
try {
  const data = await fetchData();
  return data;
} catch (error) {
  logger.apiError('Failed to fetch', error);
  return MOCK_DATA;  // Always provide fallback
}

// Pattern 2: Promise.allSettled for parallel calls
const results = await Promise.allSettled([
  fetchStats(),
  fetchTransactions(),
  fetchBitcoinData()
]);

results.forEach((result, index) => {
  if (result.status === 'fulfilled') {
    // Use result.value
  } else {
    logger.error(`Call ${index} failed:`, result.reason);
    // Use fallback for this specific call
  }
});
```

### Console Management

**CRITICAL**: Keep console clean in production.

```typescript
// ❌ BAD - Debug spam
console.log('🎯 Hook called from:', new Error().stack);
console.log('🔍 Parsing data:', data);
console.log('✅ Success!');

// ✅ GOOD - Use logger utility
import { logger } from '../utils/logger';

logger.debug('Parsing data', { rowCount: data.length });
logger.error('API call failed', error);

// Logger respects environment:
// - Production: Only WARN and ERROR
// - Development: All levels (DEBUG, INFO, WARN, ERROR, VERBOSE)
```

---

## Common Tasks

### Task 1: Add a New Component

```bash
# 1. Create component file
# File: src/components/NewFeature.tsx

import React from 'react';

interface NewFeatureProps {
  title: string;
}

export const NewFeature: React.FC<NewFeatureProps> = ({ title }) => {
  return (
    <section className="py-16 px-8">
      <h2 className="text-3xl font-bold">{title}</h2>
    </section>
  );
};

# 2. Import in App.tsx or parent component
import { NewFeature } from './components/NewFeature';

# 3. Add to render tree
<NewFeature title="My Feature" />

# 4. Test locally
npm run dev

# 5. Verify types
npm run build
```

### Task 2: Modify Trading Data Display

**Key File**: `src/components/TradingResults.tsx` (28KB)

```typescript
// This component receives data from App.tsx
interface TradingResultsProps {
  tradingStats: EnhancedTradingStats;  // From useGoogleSheetsData hook
  onRefresh: () => void;
}

// Data structure (see src/hooks/useGoogleSheetsData.ts):
interface EnhancedTradingStats {
  totalProfit: number;
  totalTrades: number;
  successRate: number;
  startDate: string;
  lastUpdated: string;
  monthlyData: Array<{
    month: string;
    profit: number;
    trades: number;
  }>;
  portfolioSummary: {
    totalInvested: number;
    currentValue: number;
    totalReturn: number;
  };
}

// To modify display:
// 1. Read src/components/TradingResults.tsx
// 2. Edit JSX in return statement
// 3. Preserve TypeScript types
// 4. Test with npm run dev
```

### Task 3: Update Google Sheets Integration

**Key File**: `src/hooks/useGoogleSheetsData.ts` (11.5KB)

```typescript
// Configuration
const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

// Sheets accessed:
// 1. "Calculations!A:G" - Monthly profit/trade data
// 2. "Coinbase Balance!A:D" - Portfolio summary

// To modify:
// 1. Read src/hooks/useGoogleSheetsData.ts
// 2. Update parseCalculationsData() for new columns
// 3. Update EnhancedTradingStats interface if adding fields
// 4. Test with real API key in .env
// 5. Verify caching still works (check cache.get/set calls)
```

### Task 4: Add New Serverless Function

**Location**: `functions/api/new-function.js`

```javascript
// Template for Cloudflare Worker
export async function onRequest(context) {
  const { request, env } = context;

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle OPTIONS for CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: corsHeaders,
      status: 204
    });
  }

  try {
    // Your logic here
    const data = await fetchSomeData();

    return new Response(JSON.stringify(data), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300',  // 5-min cache
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
      status: 500,
    });
  }
}

// Deploy: Cloudflare Pages automatically deploys functions/api/*
```

### Task 5: Update Environment Variables

```bash
# 1. Update .env file locally
echo "VITE_NEW_API_KEY=your-key" >> .env

# 2. Update .env.example for documentation
echo "VITE_NEW_API_KEY=your-api-key-here" >> .env.example

# 3. Add to GitHub repository secrets (for CI/CD)
# → GitHub repo → Settings → Secrets → Actions
# → Add "VITE_NEW_API_KEY"

# 4. Update .github/workflows/update-trading-data.yml if needed
# Add environment variable to workflow

# 5. Access in code
const apiKey = import.meta.env.VITE_NEW_API_KEY;

# Note: All env vars must start with VITE_ to be accessible in browser
```

### Task 6: Add Blog Post

**Key File**: `src/data/posts.json` (59.5KB)

```json
{
  "posts": [
    {
      "title": "Your Post Title",
      "slug": "your-post-slug",
      "date": "2025-11-24T00:00:00Z",
      "content": "Full markdown content here...\n\n## Heading\n\nParagraph text.",
      "category": "Trading Strategy",
      "metaDescription": "SEO-friendly description under 160 characters",
      "heroImage": "/path-to-image.jpg",
      "imageAlt": "Image description for accessibility"
    }
  ]
}

// Route automatically created: /blog/your-post-slug
// Listed on: /blog
```

### Task 7: Modify Caching Behavior

**Key File**: `src/utils/smartCache.ts` (8.3KB)

```typescript
// Change TTL (Time To Live)
const cache = createSmartCache<string, any>(
  60 * 60 * 1000,  // 1 hour (default: 30 min)
  "my_cache_key",
  true  // persist to localStorage
);

// Clear cache manually
cache.clear();

// Get statistics
const stats = cache.getStats();
console.log('Hit rate:', stats.hits / (stats.hits + stats.misses));

// Force cache cleanup
cache.cleanup();
```

---

## Critical Files Reference

### Must-Know Files

| File | Purpose | Lines | When to Modify |
|------|---------|-------|----------------|
| `src/App.tsx` | **Main app router + data fetching** | - | Adding routes, changing global data flow |
| `src/hooks/useGoogleSheetsData.ts` | **Core data hook for trading stats** | 11.5KB | Changing Google Sheets integration |
| `src/utils/smartCache.ts` | **Caching system** | 8.3KB | Modifying cache behavior, TTL |
| `src/config/production.ts` | **Production configuration** | 141 lines | Changing prod/dev settings |
| `src/components/TradingResults.tsx` | **Main trading display** | 28KB | Modifying trading stats UI |
| `vite.config.ts` | **Build configuration** | - | Adding plugins, changing build settings |
| `package.json` | **Dependencies & scripts** | - | Adding packages, modifying scripts |

### Configuration Files Priority

1. **`vite.config.ts`** - Build process, plugins, chunking strategy
2. **`tsconfig.json`** - TypeScript compiler (strict mode enabled)
3. **`tailwind.config.js`** - CSS framework settings
4. **`src/config/production.ts`** - Runtime environment config
5. **`.env`** - Environment variables (NOT in git)

### Data Flow Files

```
Google Sheets API
    ↓
src/hooks/useGoogleSheetsData.ts (fetch + parse)
    ↓
src/utils/smartCache.ts (cache layer)
    ↓
src/App.tsx (state management)
    ↓
src/components/TradingResults.tsx (display)
```

---

## API Integrations

### Google Sheets API

**Hook**: `src/hooks/useGoogleSheetsData.ts`

```typescript
// Endpoint format:
https://sheets.googleapis.com/v4/spreadsheets/{SHEET_ID}/values/{RANGE}?key={API_KEY}

// Ranges accessed:
// 1. "Calculations!A:G" - Monthly statistics
// 2. "Coinbase Balance!A:D" - Portfolio summary

// Parsing logic:
// - Finds "Grand Total" row (searches from bottom up)
// - Extracts currency values (removes $, commas)
// - Converts dates (2025-01 → "Jan")
// - Returns EnhancedTradingStats object

// Error handling:
// - Falls back to MOCK_DATA on API failures
// - Caches successful responses for 30 minutes
// - Logs errors to console (logger.apiError)
```

**Environment Variables**:
```bash
VITE_GOOGLE_SHEET_ID=your-sheet-id
VITE_GOOGLE_API_KEY=your-api-key
```

### CoinGecko API

**Hooks**:
- `src/hooks/useLiveBitcoinData.ts` (6.6KB)
- `src/hooks/useBitcoinCorrelation.ts` (5KB)

```typescript
// Endpoints:
// 1. Current price + 24h/7d/30d changes
GET https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true&include_7d_change=true&include_30d_change=true

// 2. Historical data (240 days)
GET https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=240&interval=daily

// No API key required (free tier)
// Rate limits: Handle gracefully with try-catch + fallback data
```

### Binance WebSocket

**Hook**: `src/hooks/useWebSocketPrice.ts` (4.8KB)

```typescript
// WebSocket URL:
wss://stream.binance.com:9443/ws/!ticker@arr

// Coins tracked: BONK, DOGE, SHIB, BTC, ETH, SOL, ADA, SUI, MATIC, DOT, AVAX, LINK, UNI, ATOM, FTM, ALGO, XRP, LTC, BCH, VET, THETA, HBAR, ICP, NEAR, FLOW

// Data structure:
interface CryptoPrice {
  symbol: string;
  price: number;
  change24h: number;
  changePercent24h: number;
  volume24h: number;
  high24h: number;
  low24h: number;
  timestamp: number;
}

// Connection states: connecting | connected | disconnected | error
// Auto-reconnect on disconnect
```

---

## Deployment

### GitHub Actions Workflow

**File**: `.github/workflows/update-trading-data.yml`

```yaml
# Trigger: Manual (workflow_dispatch) or scheduled (cron)
# Purpose: Auto-update trading data from Google Sheets

# Steps:
# 1. Checkout repository
# 2. Setup Node.js 18
# 3. Install dependencies
# 4. Replace env vars in updateTradingData.js (sed)
# 5. Run: npm run update-trading
# 6. Commit changes if data updated
# 7. Push to main branch

# Required secrets:
# - VITE_GOOGLE_SHEET_ID
# - VITE_GOOGLE_API_KEY
```

### Cloudflare Pages Deployment

```
1. Push to main branch
2. Cloudflare Pages auto-detects change
3. Build command: npm run build
4. Output directory: dist/
5. Deploys to MyRoboticTrader.com
6. Functions in functions/api/ automatically deployed as Workers
```

### Manual Deployment

```bash
# 1. Build for production
npm run build

# 2. Test build locally
npm run preview

# 3. Deploy dist/ folder to hosting platform
# (Cloudflare Pages, Netlify, Vercel, etc.)
```

### Pre-Deployment Checklist

- [ ] `npm run lint` passes with 0 warnings
- [ ] `npm run build` succeeds without errors
- [ ] `.env` file has production API keys
- [ ] All console.log debug statements removed
- [ ] Test locally with `npm run preview`
- [ ] Verify caching works (check browser network tab)
- [ ] Check mobile responsiveness
- [ ] Validate SEO tags (use browser dev tools)

---

## Troubleshooting

### Build Errors

**Problem**: TypeScript compilation fails

```bash
# Solution 1: Check for type errors
npm run build
# Read error messages carefully - TS errors are descriptive

# Solution 2: Clear and reinstall
rm -rf node_modules package-lock.json
npm install

# Solution 3: Check tsconfig.json
# Ensure "strict": true and all paths are correct
```

**Problem**: Vite build fails

```bash
# Check vite.config.ts for syntax errors
# Verify all imports in src/ resolve correctly
# Clear Vite cache:
rm -rf node_modules/.vite
npm run dev
```

### Runtime Errors

**Problem**: "Cannot read property of undefined"

```typescript
// Always add null checks:
const data = tradingStats?.monthlyData || [];
const profit = tradingStats?.totalProfit ?? 0;

// Use optional chaining and nullish coalescing
```

**Problem**: API calls failing

```bash
# 1. Check .env file
cat .env
# Ensure VITE_GOOGLE_SHEET_ID and VITE_GOOGLE_API_KEY are set

# 2. Check browser console for CORS errors
# 3. Verify Google Sheets API is enabled in Google Cloud Console
# 4. Check API key restrictions (allow Sheets API)
```

**Problem**: Cache not working

```typescript
// Check localStorage in browser dev tools
localStorage.getItem('trading_data_cache');

// Clear cache manually
localStorage.clear();

// Check cache stats
import { tradingDataCache } from './utils/smartCache';
console.log(tradingDataCache.getStats());
```

### Development Issues

**Problem**: Hot reload not working

```bash
# Restart dev server
# Press Ctrl+C
npm run dev

# If still not working, clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

**Problem**: Styles not applying

```bash
# Ensure Tailwind classes are in content paths
# Check tailwind.config.js:
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
]

# Rebuild Tailwind
npm run dev
```

**Problem**: Environment variables not accessible

```bash
# Remember: Must start with VITE_
# ❌ GOOGLE_API_KEY (not accessible)
# ✅ VITE_GOOGLE_API_KEY (accessible)

# Access with:
import.meta.env.VITE_GOOGLE_API_KEY

# Restart dev server after .env changes
```

### Performance Issues

**Problem**: Slow page loads

```bash
# Check cache hit rate in console
# Should be ~95% after initial load

# Verify caching in Network tab:
# - First load: API calls visible
# - Subsequent loads within 30 min: No API calls

# Check bundle size:
npm run build
# Look at dist/assets/ file sizes
# vendor chunk should be code-split
```

**Problem**: Too many API calls

```typescript
// Ensure useEffect dependencies are correct
useEffect(() => {
  fetchData();
}, []);  // Empty array = run once on mount

// NOT:
useEffect(() => {
  fetchData();
});  // Runs on every render (BAD!)
```

---

## Best Practices for AI Assistants

### Before Making Changes

1. **Read files first**: NEVER propose changes without reading the file
2. **Understand context**: Check related files (imports, exports)
3. **Verify types**: Look at TypeScript interfaces
4. **Check patterns**: Match existing code style

### When Writing Code

1. **Preserve types**: Don't break TypeScript strict mode
2. **Follow conventions**: Use existing patterns (hooks, components)
3. **Clean console**: Use logger utility, not console.log
4. **Cache awareness**: Use smartCache for API calls
5. **Error handling**: Always provide fallback data

### Testing Changes

1. **Local test**: `npm run dev` and verify in browser
2. **Type check**: `npm run build` must succeed
3. **Lint check**: `npm run lint` must pass (0 warnings)
4. **Console check**: Should be clean (no debug spam)
5. **Cache check**: Verify caching still works

### Git Workflow

```bash
# 1. Check current branch
git branch
# Should be: claude/claude-md-mid455pdtkjx14f6-01SNFL174bXpyoujS5M9oJ26

# 2. Stage changes
git add <files>

# 3. Commit with descriptive message
git commit -m "Add: New feature for X"
# OR: "Fix: Issue with Y"
# OR: "Update: Component Z for better UX"

# 4. Push to feature branch
git push -u origin claude/claude-md-mid455pdtkjx14f6-01SNFL174bXpyoujS5M9oJ26

# Note: Branch must start with 'claude/' and end with session ID
```

### Communication

1. **Explain changes**: Tell user what you modified and why
2. **Provide context**: Reference file paths and line numbers
3. **Show examples**: Include code snippets when helpful
4. **Warn about risks**: Flag breaking changes or dependencies

---

## Quick Reference

### File Size Reference

| File | Size | Importance |
|------|------|------------|
| `src/components/TradingResults.tsx` | 28KB | HIGH - Main trading display |
| `src/components/LiveTransactionLog.tsx` | 34KB | HIGH - Transaction list |
| `src/components/PriceChartWithPurchases.tsx` | 29KB | MEDIUM - Chart visualization |
| `src/hooks/useGoogleSheetsData.ts` | 11.5KB | **CRITICAL** - Core data hook |
| `src/utils/smartCache.ts` | 8.3KB | **CRITICAL** - Caching system |
| `src/data/posts.json` | 59.5KB | MEDIUM - Blog content |

### Common Imports

```typescript
// React
import React, { useState, useEffect, useCallback } from 'react';

// Icons
import { IconName } from 'lucide-react';

// Router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Hooks
import { useGoogleSheetsData } from './hooks/useGoogleSheetsData';

// Utils
import { logger } from './utils/logger';
import { tradingDataCache } from './utils/smartCache';
import { trackEvent } from './utils/analytics';
```

### TypeScript Interfaces

```typescript
// Main trading stats
interface EnhancedTradingStats {
  totalProfit: number;
  totalTrades: number;
  successRate: number;
  startDate: string;
  lastUpdated: string;
  monthlyData: Array<{
    month: string;
    profit: number;
    trades: number;
  }>;
  portfolioSummary: {
    totalInvested: number;
    currentValue: number;
    totalReturn: number;
  };
}

// Transaction
interface LiveTransaction {
  coin: string;
  action: 'BUY' | 'SELL';
  price: number;
  quantity: number;
  status: 'COMPLETED' | 'PENDING' | 'FAILED';
  profit?: number;
  timestamp: string;
}
```

---

## Maintaining This Documentation

### When to Update CLAUDE.md

This documentation should evolve with the codebase. Here's when updates are needed:

#### **Major Updates Required** (Every 3-6 months or when):

- ✅ **Architectural changes** - New state management, routing changes, major refactors
- ✅ **New patterns adopted** - Different component structure, new conventions
- ✅ **Major features added** - New API integrations, significant components (10+ files)
- ✅ **Dependency upgrades** - React 19, Router v8, major library changes
- ✅ **File structure reorganization** - Moving directories, splitting large files
- ✅ **New team members struggle** - If onboarding reveals documentation gaps

#### **Minor Updates** (As needed):

- 📝 **Quick fixes** - Typos, outdated commands, incorrect file paths
- 📝 **New troubleshooting tips** - Common errors discovered
- 📝 **Environment variable changes** - New API keys, config updates
- 📝 **Deployment procedure updates** - CI/CD workflow changes

#### **Skip Updates For**:

- ❌ Individual bug fixes
- ❌ Content updates (blog posts, copy changes)
- ❌ Minor styling tweaks
- ❌ Single component additions that follow existing patterns

### Update Workflow Options

#### **Option 1: Regular Feature Branch** (Recommended for most updates)

```bash
# Create feature branch
git checkout main
git pull origin main
git checkout -b docs/update-claude-md

# Update CLAUDE.md
# (Edit the file with your changes)

# Commit and push
git add CLAUDE.md
git commit -m "Update: CLAUDE.md with new API integration details"
git push origin docs/update-claude-md

# Create PR and merge to main
```

#### **Option 2: Direct to Main** (For quick fixes only)

```bash
# Quick typo fixes or minor corrections
git checkout main
git pull origin main

# Fix issue in CLAUDE.md
# (Edit the file)

git add CLAUDE.md
git commit -m "Fix: Correct command syntax in CLAUDE.md"
git push origin main
```

#### **Option 3: Claude Code Session Branch** (AI assistant updates)

```bash
# This is specifically for Claude Code AI sessions
# Branch format: claude/claude-md-<session-id>
# Claude Code handles this automatically when you ask it to update

# Example: "Claude, update CLAUDE.md to reflect the new auth system"
# Claude will create: claude/claude-md-<new-session-id>
```

**Note**: The `claude/` prefix branch pattern is specific to Claude Code AI assistant sessions. For human developers or routine updates, use Option 1 or 2.

### Recommended Maintenance Schedule

| Frequency | Action | Example Trigger |
|-----------|--------|-----------------|
| **Quarterly** | Full review & update | Major version releases, significant features |
| **Monthly** | Quick scan for outdated info | Check commands still work, paths correct |
| **As Needed** | Add troubleshooting tips | New common errors discovered |
| **Immediate** | Critical fixes | Wrong commands, broken workflows |

### Maintenance Best Practices

1. **Update the "Last Updated" date**: Always change the date at the bottom when making updates
2. **Test all commands**: Verify bash commands actually work before committing
3. **Verify file paths**: Ensure all referenced files still exist at those locations
4. **Check file sizes**: Update file size references if files have grown significantly
5. **Update line counts**: If major code changes occur, update the "Total Lines of Code" metric
6. **Get feedback**: Ask team members what was confusing or missing
7. **Keep it practical**: Focus on what helps developers understand the codebase quickly

### Documentation Health Check

Run this quick check periodically:

```bash
# 1. Verify key files still exist
ls src/hooks/useGoogleSheetsData.ts
ls src/utils/smartCache.ts
ls src/components/TradingResults.tsx

# 2. Check build commands work
npm run build
npm run lint

# 3. Verify dev server starts
npm run dev
# (Ctrl+C to stop)

# 4. Check environment variables
cat .env.example
```

### For AI Assistants: Updating This File

If you're an AI assistant asked to update CLAUDE.md:

1. **Read the entire file first** - Understand current structure
2. **Check what changed** - Use git diff, file search to see recent changes
3. **Update relevant sections** - Don't rewrite everything, update specific parts
4. **Preserve formatting** - Keep the same markdown style and structure
5. **Update metadata** - Change "Last Updated" date
6. **Test references** - Verify file paths and commands are still accurate
7. **Keep it concise** - Add new info without unnecessary verbosity

### Version History

| Date | Version | Changes |
|------|---------|---------|
| 2025-11-24 | 1.0.0 | Initial comprehensive documentation created |
| 2025-11-24 | 1.1.0 | Added "Maintaining This Documentation" section with update workflows and schedule |
| - | - | (Future updates will be logged here) |

---

## Conclusion

This codebase is **production-ready** with enterprise-grade patterns:

- ✅ Clean architecture (components, hooks, services, utils)
- ✅ TypeScript strict mode (type safety)
- ✅ Smart caching (95% API reduction)
- ✅ Professional logging (clean console)
- ✅ Comprehensive SEO (structured data)
- ✅ Responsive design (mobile-first)
- ✅ CI/CD pipeline (GitHub Actions + Cloudflare)

**Philosophy**: Simplicity over complexity. This project avoids over-engineering (no Redux, no complex state management) while maintaining professional standards.

**For AI Assistants**: Always read before editing, preserve types, follow conventions, and test locally. Your changes should enhance, not complicate.

---

**Last Updated**: 2025-11-24
**Maintained By**: Patrick Jenkins
**License**: MIT (Educational purpose only - see README.md Legal section)
