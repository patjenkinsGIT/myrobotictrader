# CLAUDE.md - AI Assistant Guide for MyRoboticTrader

**Last Updated**: 2026-02-27
**Documentation Version**: 2.0.0
**Codebase Version**: 1.0.0
**Total Lines of Code**: ~11,794 TypeScript lines

---

## Table of Contents

1. [Business Context & Brand Voice](#business-context--brand-voice) ⭐ NEW
2. [Workflow Orchestration](#workflow-orchestration) ⭐ NEW
3. [Task Management System](#task-management-system) ⭐ NEW
4. [Key Business Data](#key-business-data) ⭐ NEW
5. [My Tools Quick Reference](#my-tools-quick-reference)
6. [Project Overview](#project-overview)
7. [Architecture & Key Patterns](#architecture--key-patterns)
8. [Directory Structure](#directory-structure)
9. [Development Workflows](#development-workflows)
10. [Key Conventions](#key-conventions)
11. [Common Tasks](#common-tasks)
12. [Critical Files Reference](#critical-files-reference)
13. [API Integrations](#api-integrations)
14. [Deployment](#deployment)
15. [Troubleshooting](#troubleshooting)
16. [Maintaining This Documentation](#maintaining-this-documentation)

---

## Business Context & Brand Voice

> **Read this section first. It governs ALL content creation and site decisions.**

### What This Business Is

MyRoboticTrader.com is an affiliate marketing site promoting autonomous AI-enhanced crypto trading through GoBabyTrade. The core pitch: **"Set It and Forget It Crypto Trading."** The site is backed by real, verifiable trading results — NOT hype, NOT manufactured urgency, NOT get-rich-quick promises.

### Revenue Model

- **Primary:** Affiliate commissions from GoBabyTrade — **$1K+ per commission**, direct relationship with the developer/owner (no middlemen)
- **Secondary:** Driving traffic to webinar signups at `dailyprofits.link/class`
- **Content strategy:** Blog posts that position systematic crypto trading as a smarter alternative to gambling, day trading, side hustles, and lottery tickets
- **Target audience:** Crypto-curious individuals aged 25-45 seeking passive income — Uber drivers, service techs, people with side hustle mentality

### Brand Voice Rules

**The voice is: contrarian, credible, conversational, data-backed.**

- Write like Pat is explaining to a smart friend why this works, not like a landing page copywriter
- The anti-gambling angle is central: lottery, sports betting, day trading = emotional money destruction. Our system = math-based, autonomous, proven
- Real results ALWAYS. Every claim must be backed by actual trading data. Never fabricate or exaggerate numbers
- Transparency IS the brand. Real dashboards, real numbers, no manufactured scarcity

### Content Rules — MUST FOLLOW

| Rule                                   | Why                                                                                                      |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Never promise guaranteed returns**   | Say "historically" or "based on our results" — compliance matters                                        |
| **Never use fake urgency/scarcity**    | No "only X spots left" or countdown timers. That's BookProfits energy, not ours                          |
| **Never write generic AI content**     | "In this comprehensive guide..." is an instant delete. Write like a person, not a template               |
| **Always include FTC disclosure**      | GoBabyTrade's compliance team actively reviews the site. Don't jeopardize a $1K+ commission relationship |
| **Never bash competitors by name**     | Position against the category (gambling, day trading), not specific companies                            |
| **Never round up or exaggerate stats** | The 100% win rate is real. It doesn't need embellishment                                                 |

### Content Categories

education, anti-gambling, market-intelligence, lifestyle, results, trading-basics, crypto-news, passive-income, automation, transparency, affiliate, depin

### Blog Post Patterns That Work

- **"Financial disaster + our alternative"** — lottery odds, sports betting losses, day trading failure rates → systematic trading as the answer
- **"Real results"** — here's what the bot did this month, here's the math
- **"Passive income comparison"** — staking, DePIN, rental income vs. autonomous trading
- **"Educational"** — how crypto trading works, what makes a bot profitable, risk management

---

## Workflow Orchestration

> **These rules govern HOW you work, not just WHAT you build.**

### 1. Plan Mode Default

- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately — don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

### 2. Subagent Strategy

- Use subagents liberally to keep main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution

### 3. Self-Improvement Loop

- After ANY correction from the user: update `tasks/lessons.md` with the pattern
- Write rules for yourself that prevent the same mistake
- Ruthlessly iterate on these lessons until mistake rate drops
- Review lessons at session start for this project

### 4. Verification Before Done

- Never mark a task complete without proving it works
- Diff behavior between main and your changes when relevant
- Ask yourself: "Would a staff engineer approve this?"
- Run build, check lint, check console, demonstrate correctness

### 5. Demand Elegance (Balanced)

- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes — don't over-engineer
- Challenge your own work before presenting it

### 6. Autonomous Bug Fixing

- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests — then resolve them
- Zero context switching required from the user
- Go fix failing CI tests without being told how

---

## Task Management System

> **Every task follows this process. No exceptions for non-trivial work.**

### Process

1. **Plan First:** Write plan to `tasks/todo.md` with checkable items
2. **Verify Plan:** Check in before starting implementation
3. **Track Progress:** Mark items complete as you go
4. **Explain Changes:** High-level summary at each step
5. **Document Results:** Add review section to `tasks/todo.md`
6. **Capture Lessons:** Update `tasks/lessons.md` after any corrections

### Session Start Checklist

Every time you begin a new session on this project:

1. ✅ Read this CLAUDE.md (automatic)
2. ✅ Review `tasks/lessons.md` — check for patterns to avoid
3. ✅ Review `tasks/todo.md` — check for in-progress work
4. ✅ Ask if there's a specific task or continue where you left off

### Files

- **`tasks/todo.md`** — Active task tracker with plans, progress, and reviews
- **`tasks/lessons.md`** — Self-improvement log. After ANY correction, add an entry with: what went wrong, the rule that prevents it, and why it matters for this project

---

## Key Business Data

> **Reference these numbers in blog content. Keep them current when Pat provides updates.**

### Trading Performance (Last Updated: Feb 2026)

| Metric                   | Value                        |
| ------------------------ | ---------------------------- |
| Total trades closed      | 1,000+                       |
| Win rate                 | 100% (all trades profitable) |
| Average gain per trade   | ~4%                          |
| Average profit per trade | ~$4.98                       |
| Monthly average profit   | ~$444                        |
| Trading period           | 12+ months                   |
| Starting capital         | ~$3,000                      |
| Current account value    | ~$21,500+ (with deposits)    |
| Best month               | $817.31 (July 2025)          |

### Important Context for Content

- Pat personally uses GoBabyTrade with real money — this is not theoretical
- The 100% win rate is across ALL closed trades, not cherry-picked
- Performance data is displayed live on the site via Google Sheets integration
- The system trades multiple cryptocurrencies (BONK, DOGE, SHIB, etc.)
- Trading is fully autonomous — no manual intervention required
- Position sizes are controlled (~$125 per trade), not full-portfolio bets

### Numbers to NEVER misstate

- Don't say "guaranteed" — say "historically" or "based on 12+ months of results"
- Don't round $4,888 to "$5,000" — use the real number
- Don't say "no risk" — say "managed risk with controlled position sizes"
- If you don't have current numbers, say "based on [timeframe] results"

---

## My Tools Quick Reference

> **Purpose**: Quick inventory of all available skills and MCP tools so you never forget what's available.

### Claude Code Skills (6)

#### Global Skills (available in all projects)

_Location: `~/.claude/skills/`_

| Skill               | Invoke With              | Use For                                         |
| ------------------- | ------------------------ | ----------------------------------------------- |
| **design-guide**    | `/skill design-guide`    | UI/component design, ensuring modern clean look |
| **idea-validator**  | `/skill idea-validator`  | Validate new ideas before building              |
| **roadmap-builder** | `/skill roadmap-builder` | Prioritize features, decide what to build next  |

#### Project Skills (myrobotictrader only)

_Location: `.claude/skills/`_

| Skill                     | Invoke With                    | Use For                                               |
| ------------------------- | ------------------------------ | ----------------------------------------------------- |
| **myrobotictrader-skill** | `/skill myrobotictrader-skill` | Brand voice content, blog posts, social media for MRT |
| **marketing-writer**      | `/skill marketing-writer`      | Landing pages, launch emails, feature announcements   |
| **affiliate-marketing**   | `/skill affiliate-marketing`   | Affiliate content, product reviews, comparisons       |

### MCP Server: myrobotictrader-mcp

#### Trading & Market Data

| Tool                       | What It Does                                           |
| -------------------------- | ------------------------------------------------------ |
| `fetch_trading_data`       | Pull live trading stats from Google Sheets             |
| `get_crypto_price`         | Get current price for a specific coin (BTC, ETH, etc.) |
| `get_top_cryptos`          | Top coins by market cap                                |
| `get_market_movers`        | Today's biggest gainers and losers                     |
| `get_fear_greed_index`     | Market sentiment (0-100 fear/greed scale)              |
| `get_altcoin_season_index` | BTC season vs Altcoin season indicator                 |

#### Content & News

| Tool                         | What It Does                                          |
| ---------------------------- | ----------------------------------------------------- |
| `fetch_crypto_news`          | Get news by category (crypto, regulation, DeFi, etc.) |
| `search_topic_now`           | Research a specific topic with current news           |
| `generate_content`           | Draft blog posts, tweets, or thread content           |
| `add_topic` / `remove_topic` | Manage your content watchlist                         |
| `list_topics`                | See all topics you're tracking                        |

#### Discord Monitoring (DePIN Projects)

| Tool                            | What It Does                                      |
| ------------------------------- | ------------------------------------------------- |
| `discord_list_servers`          | See which Discord servers the bot is in           |
| `discord_list_channels`         | List channels in a server                         |
| `discord_read_messages`         | Read recent messages from a channel               |
| `discord_search_keywords`       | Search for specific keywords (TGE, airdrop, etc.) |
| `discord_monitor_announcements` | Watch for important announcements                 |

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
Dev Tool:  Claude Code (primary development tool)
```

### Key Metrics

- **30+ React components** (functional components only)
- **6 custom hooks** for data fetching & state management
- **3 API integrations** (Google Sheets, CoinGecko, Binance)
- **Smart caching** with 30-min TTL (4-hour in production)
- **Zero class components** - all modern hooks-based
- **49 blog posts** live + 2 landing pages
- **4 critical SEO content pieces** in backlog

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
  30 * 60 * 1000, // 30-min TTL (dev: 5 min)
  "trading_data_cache", // localStorage prefix
  true, // persist to localStorage
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
├── tasks/                    # ⭐ NEW - Task management
│   ├── todo.md               # Active task tracker
│   └── lessons.md            # Self-improvement log
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
  logger.apiError("Failed to fetch", error);
  return MOCK_DATA; // Always provide fallback
}

// Pattern 2: Promise.allSettled for parallel calls
const results = await Promise.allSettled([
  fetchStats(),
  fetchTransactions(),
  fetchBitcoinData(),
]);

results.forEach((result, index) => {
  if (result.status === "fulfilled") {
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
console.log("🎯 Hook called from:", new Error().stack);
console.log("🔍 Parsing data:", data);
console.log("✅ Success!");

// ✅ GOOD - Use logger utility
import { logger } from "../utils/logger";

logger.debug("Parsing data", { rowCount: data.length });
logger.error("API call failed", error);

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
  tradingStats: EnhancedTradingStats; // From useGoogleSheetsData hook
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
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Handle OPTIONS for CORS preflight
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders,
      status: 204,
    });
  }

  try {
    // Your logic here
    const data = await fetchSomeData();

    return new Response(JSON.stringify(data), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=300", // 5-min cache
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
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
  60 * 60 * 1000, // 1 hour (default: 30 min)
  "my_cache_key",
  true, // persist to localStorage
);

// Clear cache manually
cache.clear();

// Get statistics
const stats = cache.getStats();
console.log("Hit rate:", stats.hits / (stats.hits + stats.misses));

// Force cache cleanup
cache.cleanup();
```

---

## Critical Files Reference

### Must-Know Files

| File                                | Purpose                              | Lines     | When to Modify                           |
| ----------------------------------- | ------------------------------------ | --------- | ---------------------------------------- |
| `src/App.tsx`                       | **Main app router + data fetching**  | -         | Adding routes, changing global data flow |
| `src/hooks/useGoogleSheetsData.ts`  | **Core data hook for trading stats** | 11.5KB    | Changing Google Sheets integration       |
| `src/utils/smartCache.ts`           | **Caching system**                   | 8.3KB     | Modifying cache behavior, TTL            |
| `src/config/production.ts`          | **Production configuration**         | 141 lines | Changing prod/dev settings               |
| `src/components/TradingResults.tsx` | **Main trading display**             | 28KB      | Modifying trading stats UI               |
| `vite.config.ts`                    | **Build configuration**              | -         | Adding plugins, changing build settings  |
| `package.json`                      | **Dependencies & scripts**           | -         | Adding packages, modifying scripts       |
| `tasks/lessons.md`                  | **Self-improvement log**             | -         | After ANY correction from user           |
| `tasks/todo.md`                     | **Active task tracker**              | -         | Before starting any non-trivial task     |

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
//stream.binance.com:9443/ws/!ticker@arr

// Coins tracked: BONK, DOGE, SHIB, BTC, ETH, SOL, ADA, SUI, MATIC, DOT, AVAX, LINK, UNI, ATOM, FTM, ALGO, XRP, LTC, BCH, VET, THETA, HBAR, ICP, NEAR, FLOW

// Data structure:
wss: interface CryptoPrice {
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

### CTB - Check The Basics

**Before deep-diving into complex debugging, always check the basics first.** Most production issues come from simple things hiding in plain sight.

**Quick checklist (run through this FIRST):**

1. **CSS imports** - Is `main.tsx` importing the right CSS file? (Must be `index.css`, not a stale pre-compiled file)
2. **Build output** - Does `npm run build` succeed? Check the output file sizes for anything unexpected
3. **Stale files** - Are there pre-compiled or cached files that haven't been regenerated? (e.g., old Tailwind output, stale dist/ assets)
4. **Environment variables** - Are all `VITE_*` vars set locally AND in Cloudflare?
5. **Browser cache** - Hard refresh (Cmd+Shift+R) or incognito window to rule out caching
6. **Console errors** - Open browser dev tools and check for JS runtime errors

> **Real example (Feb 2026):** Production showed a blank dark screen. Spent time checking JS errors, Cloudflare headers, deployment configs, asset hashes... turned out `main.tsx` imported `output.css` (a stale pre-compiled Tailwind file) instead of `index.css`. One word, one line. CTB would have caught it in minutes.

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
localStorage.getItem("trading_data_cache");

// Clear cache manually
localStorage.clear();

// Check cache stats
import { tradingDataCache } from "./utils/smartCache";
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
}, []); // Empty array = run once on mount

// NOT:
useEffect(() => {
  fetchData();
}); // Runs on every render (BAD!)
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

### When Writing Content

1. **Follow Brand Voice**: See [Business Context & Brand Voice](#business-context--brand-voice) — contrarian, credible, conversational
2. **Use real data**: Reference numbers from [Key Business Data](#key-business-data)
3. **FTC compliance**: Always include affiliate disclosure
4. **No generic AI writing**: If it sounds like ChatGPT wrote it, rewrite it
5. **CTA in every post**: Link to homepage scoreboard or webinar

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

# 2. Stage changes
git add <files>

# 3. Commit with descriptive message
git commit -m "Add: New feature for X"
# OR: "Fix: Issue with Y"
# OR: "Update: Component Z for better UX"

# 4. Push to feature branch
git push
```

### Communication

1. **Explain changes**: Tell user what you modified and why
2. **Provide context**: Reference file paths and line numbers
3. **Show examples**: Include code snippets when helpful
4. **Warn about risks**: Flag breaking changes or dependencies

---

## Quick Reference

### File Size Reference

| File                                         | Size   | Importance                    |
| -------------------------------------------- | ------ | ----------------------------- |
| `src/components/TradingResults.tsx`          | 28KB   | HIGH - Main trading display   |
| `src/components/LiveTransactionLog.tsx`      | 34KB   | HIGH - Transaction list       |
| `src/components/PriceChartWithPurchases.tsx` | 29KB   | MEDIUM - Chart visualization  |
| `src/hooks/useGoogleSheetsData.ts`           | 11.5KB | **CRITICAL** - Core data hook |
| `src/utils/smartCache.ts`                    | 8.3KB  | **CRITICAL** - Caching system |
| `src/data/posts.json`                        | 59.5KB | MEDIUM - Blog content         |

### Common Imports

```typescript
// React
import React, { useState, useEffect, useCallback } from "react";

// Icons
import { IconName } from "lucide-react";

// Router
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Hooks
import { useGoogleSheetsData } from "./hooks/useGoogleSheetsData";

// Utils
import { logger } from "./utils/logger";
import { tradingDataCache } from "./utils/smartCache";
import { trackEvent } from "./utils/analytics";
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
  action: "BUY" | "SELL";
  price: number;
  quantity: number;
  status: "COMPLETED" | "PENDING" | "FAILED";
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
- ✅ **Trading data milestones** - Update Key Business Data when Pat provides new numbers
- ✅ **New lessons learned** - Major patterns added to tasks/lessons.md that should be promoted to CLAUDE.md

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

### Documentation Health Check

Run this quick check periodically:

```bash
# 1. Verify key files still exist
ls src/hooks/useGoogleSheetsData.ts
ls src/utils/smartCache.ts
ls src/components/TradingResults.tsx
ls tasks/lessons.md
ls tasks/todo.md

# 2. Check build commands work
npm run build
npm run lint

# 3. Verify dev server starts
npm run dev
# (Ctrl+C to stop)

# 4. Check environment variables
cat .env.example
```

### Version History

| Date       | Version | Changes                                                                                                                                                                                                                     |
| ---------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2025-11-24 | 1.0.0   | Initial comprehensive documentation created                                                                                                                                                                                 |
| 2025-11-24 | 1.1.0   | Added "Maintaining This Documentation" section                                                                                                                                                                              |
| 2025-11-29 | 1.2.0   | Documentation version update                                                                                                                                                                                                |
| 2026-02-27 | 2.0.0   | Added Business Context & Brand Voice, Workflow Orchestration, Task Management System, Key Business Data sections. Added tasks/ directory for self-improvement loop. Updated Best Practices with content writing guidelines. |

---

**Last Updated**: 2026-02-27
**Maintained By**: Patrick Jenkins
**License**: MIT (Educational purpose only - see README.md Legal section)
