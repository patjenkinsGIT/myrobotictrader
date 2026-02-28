---
paths:
  - "src/hooks/**"
  - "src/services/**"
  - "functions/api/**"
---

# API Integrations

> Loaded when working on hooks, services, or serverless functions.

## Google Sheets API

**Hook**: `src/hooks/useGoogleSheetsData.ts`

```typescript
// Endpoint:
https://sheets.googleapis.com/v4/spreadsheets/{SHEET_ID}/values/{RANGE}?key={API_KEY}

// Ranges accessed:
// 1. "Calculations!A:J" - Monthly statistics (columns A-G base + H-J for Fear & Greed)
// 2. "Coinbase Balance!A:D" - Portfolio summary
```

**Parsing logic:**
- Finds "Grand Total" row (searches from bottom up)
- Extracts currency values (removes $, commas)
- Converts dates (2025-01 → "Jan")
- Column J = Fear & Greed monthly averages (0-100)
- Returns `EnhancedTradingStats` object

**Error handling:**
- Falls back to MOCK_DATA on API failures
- Caches successful responses for 30 minutes
- Logs errors via `logger.apiError`

**Environment Variables:**
```bash
VITE_GOOGLE_SHEET_ID=your-sheet-id
VITE_GOOGLE_API_KEY=your-api-key
```

## CoinGecko API

**Hooks**: `useLiveBitcoinData.ts`, `useBitcoinCorrelation.ts`

```typescript
// Current price + changes:
GET https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true&include_7d_change=true&include_30d_change=true

// Historical data (240 days):
GET https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=240&interval=daily
```

No API key required (free tier). Handle rate limits gracefully with try-catch + fallback data.

## Binance WebSocket

**Hook**: `src/hooks/useWebSocketPrice.ts`

```typescript
// URL:
wss://stream.binance.com:9443/ws/!ticker@arr

// Coins: BONK, DOGE, SHIB, BTC, ETH, SOL, ADA, SUI, MATIC, DOT, AVAX, LINK, UNI, ATOM, FTM, ALGO, XRP, LTC, BCH, VET, THETA, HBAR, ICP, NEAR, FLOW

// Connection states: connecting | connected | disconnected | error
// Auto-reconnect on disconnect
```

## Serverless Function Template (Cloudflare Workers)

```javascript
export async function onRequest(context) {
  const { request, env } = context;
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders, status: 204 });
  }

  try {
    const data = await fetchSomeData();
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=300' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500,
    });
  }
}
```

## Key TypeScript Interfaces

```typescript
interface EnhancedTradingStats {
  totalProfit: number;
  totalTrades: number;
  successRate: number;
  startDate: string;
  lastUpdated: string;
  monthlyData: Array<{ month: string; profit: number; trades: number; fearGreed?: number; }>;
  portfolioSummary: { totalInvested: number; currentValue: number; totalReturn: number; };
}

interface TradingDataPoint {
  month: string;
  year: number;
  profit: number;
  trades: number;
  fearGreed?: number; // Monthly avg Fear & Greed Index (0-100), from column J
}

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
```