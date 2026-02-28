# CLAUDE.md - MyRoboticTrader

**Last Updated**: 2026-02-28
**Documentation Version**: 3.0.0

> Detailed rules are in `.claude/rules/` and load automatically based on which files you're working on.
> - `brand-voice.md` — Always loaded. Brand voice, content rules, business data.
> - `codebase.md` — Loaded for `src/**`. Architecture, patterns, conventions.
> - `api-integrations.md` — Loaded for `src/hooks/**`, `functions/api/**`. API details.
> - `deployment.md` — Loaded for `.github/**`, `functions/**`. CI/CD, troubleshooting.

---

## Project Overview

React 18.2 + TypeScript 5 + Vite 4.4 + Tailwind CSS 3.3 landing page for autonomous crypto trading results. Hosted on Cloudflare Pages with 7 serverless Workers. 30+ components, 6 custom hooks, 3 API integrations (Google Sheets, CoinGecko, Binance WebSocket). Primary dev tool: Claude Code.

---

## Workflow Orchestration

### 1. Plan Mode Default
- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately

### 2. Subagent Strategy
- Use subagents liberally to keep main context window clean
- One task per subagent for focused execution

### 3. Self-Improvement Loop
- After ANY correction from the user: update `tasks/lessons.md` with the pattern
- Review lessons at session start for this project

### 4. Verification Before Done
- Never mark a task complete without proving it works
- Run build, check lint, check console, demonstrate correctness

### 5. Demand Elegance (Balanced)
- For non-trivial changes: pause and ask "is there a more elegant way?"
- Skip this for simple, obvious fixes — don't over-engineer

### 6. Autonomous Bug Fixing
- When given a bug report: just fix it. Don't ask for hand-holding
- Zero context switching required from the user

---

## Task Management System

### Process
1. **Plan First:** Write plan to `tasks/todo.md` with checkable items
2. **Track Progress:** Mark items complete as you go
3. **Capture Lessons:** Update `tasks/lessons.md` after any corrections

### Session Start Checklist
1. Read this CLAUDE.md (automatic)
2. Review `tasks/lessons.md` — check for patterns to avoid
3. Review `tasks/todo.md` — check for in-progress work
4. Ask if there's a specific task or continue where you left off

---

## Development Commands

```bash
npm run dev          # Start Vite dev server (port 3000)
npm run build        # TypeScript compile + Vite build → dist/
npm run preview      # Preview production build (port 4173)
npm run lint         # ESLint with strict rules (--max-warnings 0)
npm run update-trading  # Fetch latest data from Google Sheets
```

### Making Changes — ALWAYS Follow This Pattern
1. **Read before editing** — Use Read tool to understand existing code
2. **Check types** — Look at TypeScript interfaces
3. **Follow conventions** — Match existing code style
4. **Test** — `npm run dev`, `npm run build`, clean console

### Do / Don't
- **DO:** Edit existing files, preserve types, use logger (not console.log), use smartCache for API calls, Tailwind utility-first
- **DON'T:** Create files unless necessary, add deps without justification, break strict mode, bypass ESLint

---

## Tools Quick Reference

### Skills (6)

| Skill | Use For |
|-------|---------|
| `/skill design-guide` | UI/component design |
| `/skill idea-validator` | Validate new ideas |
| `/skill roadmap-builder` | Prioritize features |
| `/skill myrobotictrader-skill` | Brand voice content, blog posts |
| `/skill marketing-writer` | Landing pages, launch emails |
| `/skill affiliate-marketing` | Affiliate content, reviews |

### MCP: myrobotictrader-mcp

| Tool | What It Does |
|------|-------------|
| `fetch_trading_data` | Pull live stats from Google Sheets |
| `get_crypto_price` | Current price for a coin |
| `get_top_cryptos` | Top coins by market cap |
| `get_market_movers` | Biggest gainers/losers |
| `get_fear_greed_index` | Market sentiment (0-100) |
| `get_altcoin_season_index` | BTC vs Altcoin season |
| `fetch_crypto_news` | News by category |
| `search_topic_now` | Research a topic with current news |
| `generate_content` | Draft blog posts, tweets, threads |
| `add_topic` / `remove_topic` / `list_topics` | Content watchlist |
| `discord_list_servers` / `discord_list_channels` | Discord server info |
| `discord_read_messages` / `discord_search_keywords` | Discord monitoring |
| `discord_monitor_announcements` | Watch for TGE/airdrop news |

### Common Workflows
- **Blog post:** `search_topic_now` → `fetch_trading_data` → `/skill myrobotictrader-skill` → write
- **Market check:** `get_fear_greed_index` → `get_altcoin_season_index` → `get_market_movers` → `fetch_crypto_news`
- **DePIN monitor:** `discord_list_channels` → `discord_monitor_announcements` → `discord_search_keywords`

---

## Directory Structure

```
myrobotictrader/
├── .claude/rules/        # Modular rules (loaded by path)
├── tasks/                # todo.md + lessons.md
├── src/
│   ├── components/       # 30+ UI components
│   ├── hooks/            # 6 custom hooks (data fetching)
│   ├── services/         # Transaction service
│   ├── utils/            # smartCache, logger, analytics
│   ├── config/           # Production config
│   ├── data/             # posts.json, tradingResults.ts
│   ├── App.tsx           # Router + main data fetching
│   └── main.tsx          # Entry point (imports index.css)
├── functions/api/        # 7 Cloudflare Workers
├── .github/workflows/    # GitHub Actions
├── public/               # Static assets + blog images
└── dist/                 # Build output
```

---

## Version History

| Date | Version | Changes |
|------|---------|---------|
| 2025-11-24 | 1.0.0 | Initial documentation |
| 2026-02-27 | 2.0.0 | Added brand voice, workflow, task management, business data |
| 2026-02-28 | 3.0.0 | Modularized into `.claude/rules/` — CLAUDE.md slimmed from 1460 to ~150 lines |

---

**Maintained By**: Patrick Jenkins
