---
paths:
  - ".github/**"
  - "functions/**"
  - "vite.config.ts"
  - "dist/**"
---

# Deployment & Troubleshooting

> Loaded when working on CI/CD, serverless functions, or build config.

## GitHub Actions Workflow

**File**: `.github/workflows/update-trading-data.yml`

- Trigger: Manual (workflow_dispatch) or scheduled (cron)
- Purpose: Auto-update trading data from Google Sheets
- Steps: Checkout → Setup Node 18 → Install deps → Replace env vars → Run update → Commit → Push
- Required secrets: `VITE_GOOGLE_SHEET_ID`, `VITE_GOOGLE_API_KEY`

## Cloudflare Pages Deployment

1. Push to main branch
2. Cloudflare Pages auto-detects change
3. Build command: `npm run build`
4. Output directory: `dist/`
5. Deploys to MyRoboticTrader.com
6. Functions in `functions/api/` automatically deployed as Workers

## Pre-Deployment Checklist

- [ ] `npm run lint` passes with 0 warnings
- [ ] `npm run build` succeeds without errors
- [ ] `.env` file has production API keys
- [ ] All console.log debug statements removed
- [ ] Test locally with `npm run preview`
- [ ] Verify caching works (check browser network tab)
- [ ] Check mobile responsiveness

## CTB — Check The Basics

**Before deep-diving into complex debugging, always check the basics first.**

1. **CSS imports** — Is `main.tsx` importing the right CSS file? (Must be `index.css`, not a stale pre-compiled file)
2. **Build output** — Does `npm run build` succeed? Check output file sizes for anything unexpected
3. **Stale files** — Are there pre-compiled or cached files that haven't been regenerated?
4. **Environment variables** — Are all `VITE_*` vars set locally AND in Cloudflare?
5. **Browser cache** — Hard refresh (Cmd+Shift+R) or incognito window
6. **Console errors** — Open browser dev tools and check for JS runtime errors

> **Real example (Feb 2026):** Production showed a blank dark screen. Root cause: `main.tsx` imported `output.css` (stale) instead of `index.css`. One word, one line. CTB would have caught it in minutes.

## Common Build Errors

**TypeScript compilation fails:**
- Read error messages carefully — TS errors are descriptive
- Clear and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check `tsconfig.json`: ensure `"strict": true` and all paths correct

**Vite build fails:**
- Check `vite.config.ts` for syntax errors
- Clear Vite cache: `rm -rf node_modules/.vite && npm run dev`

## Common Runtime Errors

**"Cannot read property of undefined":**
```typescript
const data = tradingStats?.monthlyData || [];
const profit = tradingStats?.totalProfit ?? 0;
```

**API calls failing:**
- Check `.env` for `VITE_GOOGLE_SHEET_ID` and `VITE_GOOGLE_API_KEY`
- Check browser console for CORS errors
- Verify Google Sheets API enabled in Google Cloud Console

**Cache not working:**
```typescript
localStorage.getItem('trading_data_cache');
localStorage.clear(); // Manual clear
```

**Environment variables not accessible:**
- Must start with `VITE_` to be accessible in browser
- Restart dev server after `.env` changes

**Too many API calls:**
- Ensure `useEffect` has correct dependencies (empty array = run once)
- Check cache hit rate in console