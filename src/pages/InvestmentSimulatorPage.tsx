import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { ArrowRight } from "lucide-react";
import { FullNav } from "../components/FullNav";
import { useGoogleSheetsData } from "../hooks/useGoogleSheetsData";

// ── Types ────────────────────────────────────────────────────────────────────

interface MonthlyDataPoint {
  month: string;
  pct: number;
  trades: number;
}

interface ChartDataPoint {
  month: string;
  value: number;
  monthPct: number;
  trades: number;
  monthlyTakeHome: number;
  pocketed: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ payload: ChartDataPoint }>;
  label?: string;
}

// ── Hardcoded fallback: Pat's real monthly trading history ────────────────────
// 906 closed trades. 100% profit goal hit rate.
// Monthly return = realized P&L as % of actual capital deployed that month.
const FALLBACK_PAT_DATA: MonthlyDataPoint[] = [
  { month: "Feb 2025", pct: 3.52, trades: 95 },
  { month: "Mar 2025", pct: 1.65, trades: 75 },
  { month: "Apr 2025", pct: 3.31, trades: 106 },
  { month: "May 2025", pct: 1.33, trades: 78 },
  { month: "Jun 2025", pct: 1.31, trades: 72 },
  { month: "Jul 2025", pct: 2.71, trades: 173 },
  { month: "Aug 2025", pct: 1.27, trades: 67 },
  { month: "Sep 2025", pct: 0.7, trades: 42 },
  { month: "Oct 2025", pct: 0.69, trades: 45 },
  { month: "Nov 2025", pct: 0.76, trades: 36 },
  { month: "Dec 2025", pct: 0.47, trades: 27 },
  { month: "Jan 2026", pct: 0.55, trades: 53 },
  { month: "Feb 2026", pct: 0.57, trades: 30 },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

const fmt = (n: number): string =>
  n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(2)}M`
    : n >= 1_000
    ? `$${Math.round(n).toLocaleString()}`
    : `$${n.toFixed(2)}`;

const SimTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div
      style={{
        background: "rgba(15,5,35,0.95)",
        border: "1px solid rgba(167,139,250,0.4)",
        borderRadius: 10,
        padding: "12px 16px",
        fontSize: 14,
        boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
      }}
    >
      <div style={{ color: "#e5e7eb", marginBottom: 6, fontWeight: 600 }}>{label}</div>
      <div style={{ color: "#f8fafc", fontWeight: 800, fontSize: 18 }}>{fmt(d.value)}</div>
      {d.monthPct > 0 && (
        <div style={{ color: "#86efac", marginTop: 3, fontSize: 13 }}>
          +{d.monthPct.toFixed(2)}% this month
        </div>
      )}
      {d.monthlyTakeHome > 0 && (
        <div style={{ color: "#fdba74", marginTop: 2, fontSize: 13 }}>
          💰 {fmt(d.monthlyTakeHome)} pocketed
        </div>
      )}
      {d.trades > 0 && (
        <div style={{ color: "#d1d5db", marginTop: 2, fontSize: 13 }}>{d.trades} trades</div>
      )}
    </div>
  );
};

// ── Main Component ───────────────────────────────────────────────────────────

export const InvestmentSimulatorPage: React.FC = () => {
  const { tradingStats } = useGoogleSheetsData();

  // ── Derive live monthly % data from Google Sheets ──
  const livePatData: MonthlyDataPoint[] | null = useMemo(() => {
    if (
      !tradingStats?.monthlyData?.length ||
      !tradingStats?.portfolioSummary?.totalCapitalDeposited
    ) {
      return null;
    }

    const monthlyData = tradingStats.monthlyData;
    const totalDeposited = tradingStats.portfolioSummary.totalCapitalDeposited;
    let runningCapital = totalDeposited;
    const derived: MonthlyDataPoint[] = [];

    for (const m of monthlyData) {
      if (m.profit <= 0 && m.trades === 0) continue;
      const pct = runningCapital > 0 ? (m.profit / runningCapital) * 100 : 0;
      runningCapital += m.profit;
      derived.push({
        month: `${m.month} ${m.year}`,
        pct: Math.round(pct * 100) / 100,
        trades: m.trades,
      });
    }

    return derived.length > 0 ? derived : null;
  }, [tradingStats]);

  const PAT_DATA = livePatData ?? FALLBACK_PAT_DATA;
  const isUsingLiveData = livePatData !== null;

  // ── Computed stats from active data ──
  const { AVG_PCT, BEST_MONTH, WORST_MONTH, TOTAL_TRADES } = useMemo(() => {
    const avg = PAT_DATA.reduce((s, d) => s + d.pct, 0) / PAT_DATA.length;
    const best = PAT_DATA.reduce((a, b) => (a.pct > b.pct ? a : b));
    const worst = PAT_DATA.reduce((a, b) => (a.pct < b.pct ? a : b));
    const total = PAT_DATA.reduce((s, d) => s + d.trades, 0);
    return { AVG_PCT: avg, BEST_MONTH: best, WORST_MONTH: worst, TOTAL_TRADES: total };
  }, [PAT_DATA]);

  // Dynamic trade count from live data or computed fallback
  const tradeCountLabel = tradingStats?.totalTrades
    ? `${tradingStats.totalTrades.toLocaleString()} Real Closed Trades`
    : `${TOTAL_TRADES.toLocaleString()} Real Closed Trades`;

  // ── User inputs ──
  const [capital, setCapital] = useState(10000);
  const [rawCapital, setRawCapital] = useState("10,000");
  const [contribution, setContribution] = useState(0);
  const [rawContribution, setRawContribution] = useState("0");
  const [mode, setMode] = useState<"replay" | "project">("replay");
  const [projMonths, setProjMonths] = useState(24);

  const handleCapitalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    setRawCapital(Number(raw).toLocaleString());
    const n = parseInt(raw, 10);
    if (!isNaN(n) && n >= 500) setCapital(n);
  };
  const handleCapitalBlur = () => setRawCapital(capital.toLocaleString());

  const handleContributionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    setRawContribution(Number(raw).toLocaleString());
    const n = parseInt(raw, 10);
    setContribution(isNaN(n) ? 0 : n);
  };
  const handleContributionBlur = () => setRawContribution(contribution.toLocaleString());

  // ── 50/50 chart calculation ──
  const chartData = useMemo(() => {
    const points: ChartDataPoint[] = [
      { month: "Start", value: capital, monthPct: 0, trades: 0, pocketed: 0, monthlyTakeHome: 0 },
    ];
    let portfolio = capital;
    let totalPocketed = 0;

    if (mode === "replay") {
      for (const d of PAT_DATA) {
        portfolio += contribution;
        const grossProfit = portfolio * (d.pct / 100);
        const takeHome = grossProfit * 0.5;
        const reinvested = grossProfit * 0.5;
        portfolio += reinvested;
        totalPocketed += takeHome;
        points.push({
          month: d.month,
          value: Math.round(portfolio),
          monthPct: d.pct,
          trades: d.trades,
          monthlyTakeHome: Math.round(takeHome),
          pocketed: Math.round(totalPocketed),
        });
      }
    } else {
      for (let i = 0; i < projMonths; i++) {
        const label = i < PAT_DATA.length ? PAT_DATA[i].month : `Mo ${i + 1}`;
        portfolio += contribution;
        const grossProfit = portfolio * (AVG_PCT / 100);
        const takeHome = grossProfit * 0.5;
        const reinvested = grossProfit * 0.5;
        portfolio += reinvested;
        totalPocketed += takeHome;
        points.push({
          month: label,
          value: Math.round(portfolio),
          monthPct: AVG_PCT,
          trades: 0,
          monthlyTakeHome: Math.round(takeHome),
          pocketed: Math.round(totalPocketed),
        });
      }
    }
    return points;
  }, [capital, contribution, mode, projMonths, PAT_DATA, AVG_PCT]);

  const finalPortfolio = chartData[chartData.length - 1].value;
  const totalPocketed = chartData[chartData.length - 1].pocketed;
  const totalMonths = chartData.length - 1;
  const avgTakeHome = totalPocketed / totalMonths;
  const totalContributed = contribution * totalMonths;
  const totalIn = capital + totalContributed;
  const totalOut = finalPortfolio + totalPocketed;
  const cumulativeReturnPct = totalIn > 0 ? ((totalOut - totalIn) / totalIn) * 100 : 0;

  const suggestions = [5000, 10000, 25000, 50000];
  const contributionSuggestions = [0, 250, 500, 1000];

  // ── Stats for "My Real Numbers" section ──
  const statsCards = useMemo(
    () => [
      { label: "Closed Trades", value: TOTAL_TRADES.toLocaleString(), sub: "all hit profit goal" },
      { label: "Avg Monthly", value: `${AVG_PCT.toFixed(2)}%`, sub: "return on capital" },
      { label: "Best Month", value: `${BEST_MONTH.pct.toFixed(2)}%`, sub: BEST_MONTH.month },
      { label: "Slowest Month", value: `${WORST_MONTH.pct.toFixed(2)}%`, sub: WORST_MONTH.month },
      { label: "Success Rate", value: "100%", sub: "profit goal hit rate" },
      { label: "Avg Per Trade", value: "4.30%", sub: "per closed position" },
      { label: "Capital Recycled", value: "~6x", sub: "same dollars redeployed" },
    ],
    [AVG_PCT, BEST_MONTH, WORST_MONTH, TOTAL_TRADES]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <Helmet>
        <title>Trading Simulator | See What Your Money Could Do | MyRoboticTrader</title>
        <meta
          name="description"
          content="Use real trading data to simulate what your investment could have earned. Based on 1,000+ real closed trades with a 100% profit goal hit rate."
        />
      </Helmet>
      <FullNav />

      <div
        style={{
          fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
          color: "#f8fafc",
          paddingBottom: 60,
        }}
      >
        {/* ── Header ── */}
        <div style={{ padding: "36px 24px 0", textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#4ade8015",
              border: "1px solid #4ade8030",
              borderRadius: 20,
              padding: "6px 18px",
              marginBottom: 20,
              fontSize: 13,
              color: "#86efac",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            ✓ {tradeCountLabel} · 100% Profit Goal Hit Rate
          </div>

          <h1
            style={{
              fontSize: "clamp(26px, 5vw, 42px)",
              fontWeight: 800,
              margin: "0 0 14px",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            If You Had Invested Alongside Me
          </h1>

          <p style={{ color: "#d1d5db", fontSize: 16, lineHeight: 1.7, margin: "0 0 8px" }}>
            Every trade I make is published publicly on this site. This calculator takes my real
            month-by-month trading history and shows what your money could have done — no estimates,
            no projections from someone else's data. Just mine.
          </p>
        </div>

        <div style={{ maxWidth: 800, margin: "32px auto 0", padding: "0 20px" }}>
          {/* ── Capital input ── */}
          <div
            style={{
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: 20,
              padding: "28px 28px 24px",
              marginBottom: 20,
              boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
            }}
          >
            <label
              style={{
                display: "block",
                fontSize: 14,
                fontWeight: 700,
                color: "#e5e7eb",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 14,
              }}
            >
              How much would you start with?
            </label>

            <div style={{ position: "relative", maxWidth: 280, marginBottom: 16 }}>
              <span
                style={{
                  position: "absolute",
                  left: 16,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#9ca3af",
                  fontWeight: 700,
                  fontSize: 22,
                }}
              >
                $
              </span>
              <input
                type="text"
                value={rawCapital}
                onChange={handleCapitalChange}
                onBlur={handleCapitalBlur}
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  background: "rgba(0,0,0,0.3)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 12,
                  padding: "14px 16px 14px 36px",
                  fontSize: 24,
                  fontWeight: 800,
                  color: "#f8fafc",
                  outline: "none",
                  letterSpacing: "-0.01em",
                }}
              />
            </div>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {suggestions.map((v) => (
                <button
                  key={v}
                  onClick={() => {
                    setCapital(v);
                    setRawCapital(v.toLocaleString());
                  }}
                  style={{
                    background: capital === v ? "#7c3aed" : "rgba(255,255,255,0.06)",
                    color: capital === v ? "#fff" : "#d1d5db",
                    border: `1px solid ${capital === v ? "#7c3aed" : "rgba(255,255,255,0.15)"}`,
                    borderRadius: 20,
                    padding: "7px 18px",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  ${v.toLocaleString()}
                </button>
              ))}
              <span
                style={{ color: "#9ca3af", fontSize: 13, alignSelf: "center", paddingLeft: 4 }}
              >
                Most people start with $5K–$25K
              </span>
            </div>

            {/* Monthly contribution */}
            <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <label
                style={{
                  display: "block",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#e5e7eb",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 12,
                }}
              >
                Monthly Contribution{" "}
                <span
                  style={{
                    color: "#9ca3af",
                    fontWeight: 400,
                    textTransform: "none",
                    letterSpacing: 0,
                  }}
                >
                  (optional)
                </span>
              </label>
              <div style={{ position: "relative", maxWidth: 220, marginBottom: 12 }}>
                <span
                  style={{
                    position: "absolute",
                    left: 16,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#9ca3af",
                    fontWeight: 700,
                    fontSize: 20,
                  }}
                >
                  $
                </span>
                <input
                  type="text"
                  value={rawContribution}
                  onChange={handleContributionChange}
                  onBlur={handleContributionBlur}
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    background: "rgba(0,0,0,0.3)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: 12,
                    padding: "12px 16px 12px 34px",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#f8fafc",
                    outline: "none",
                  }}
                />
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {contributionSuggestions.map((v) => (
                  <button
                    key={v}
                    onClick={() => {
                      setContribution(v);
                      setRawContribution(v.toLocaleString());
                    }}
                    style={{
                      background: contribution === v ? "#7c3aed" : "rgba(255,255,255,0.06)",
                      color: contribution === v ? "#fff" : "#d1d5db",
                      border: `1px solid ${contribution === v ? "#7c3aed" : "rgba(255,255,255,0.15)"}`,
                      borderRadius: 20,
                      padding: "6px 16px",
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    {v === 0 ? "None" : `$${v.toLocaleString()}/mo`}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Mode toggle ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
            {(
              [
                {
                  key: "replay" as const,
                  label: "Replay My History",
                  sub: "Exact month-by-month results from my account",
                },
                {
                  key: "project" as const,
                  label: "Project Forward",
                  sub: `Based on my ${AVG_PCT.toFixed(2)}%/mo average`,
                },
              ] as const
            ).map((m) => (
              <button
                key={m.key}
                onClick={() => setMode(m.key)}
                style={{
                  background: mode === m.key ? "rgba(124,58,237,0.25)" : "rgba(255,255,255,0.10)",
                  border: `2px solid ${mode === m.key ? "#a78bfa" : "rgba(255,255,255,0.25)"}`,
                  borderRadius: 14,
                  padding: "16px 18px",
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: mode === m.key ? "#c4b5fd" : "#e5e7eb",
                    marginBottom: 4,
                  }}
                >
                  {m.label}
                </div>
                <div style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.4 }}>{m.sub}</div>
              </button>
            ))}
          </div>

          {/* Project forward time horizon */}
          {mode === "project" && (
            <div
              style={{
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: 14,
                padding: "20px 24px",
                marginBottom: 20,
              }}
            >
              <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#e5e7eb", marginBottom: 10 }}>
                Time horizon: <span style={{ color: "#c4b5fd" }}>{projMonths} months</span>
              </label>
              <input
                type="range"
                min={6}
                max={120}
                value={projMonths}
                onChange={(e) => setProjMonths(+e.target.value)}
                style={{ width: "100%", accentColor: "#7c3aed", marginBottom: 10 }}
              />
              <div style={{ display: "flex", gap: 8 }}>
                {[6, 12, 24, 36, 60, 120].map((m) => (
                  <button
                    key={m}
                    onClick={() => setProjMonths(m)}
                    style={{
                      background: projMonths === m ? "#7c3aed" : "rgba(255,255,255,0.06)",
                      color: projMonths === m ? "#fff" : "#d1d5db",
                      border: `1px solid ${projMonths === m ? "#7c3aed" : "rgba(255,255,255,0.15)"}`,
                      borderRadius: 20,
                      padding: "6px 16px",
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    {m === 120 ? "10yr" : `${m}mo`}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── 50/50 philosophy callout ── */}
          <div
            style={{
              background: "rgba(74,222,128,0.08)",
              border: "1px solid rgba(74,222,128,0.25)",
              borderRadius: 14,
              padding: "16px 20px",
              marginBottom: 16,
              display: "flex",
              gap: 12,
            }}
          >
            <span style={{ fontSize: 22, flexShrink: 0 }}>💡</span>
            <div style={{ fontSize: 14, color: "#86efac", lineHeight: 1.6 }}>
              <strong style={{ color: "#86efac" }}>50/50 Rule applied:</strong> Each month's profits
              are split in half — 50% pocketed as income, 50% reinvested to keep growing your
              portfolio.
              {contribution > 0 && (
                <span>
                  {" "}
                  Plus your ${contribution.toLocaleString()}/mo contribution is added each month.
                </span>
              )}
            </div>
          </div>

          {/* ── Result stats ── */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginBottom: 12 }}>
            <div
              style={{
                background: "rgba(74,222,128,0.08)",
                border: "1px solid rgba(74,222,128,0.4)",
                borderRadius: 16,
                padding: "20px 22px",
                boxShadow: "0 4px 20px rgba(74,222,128,0.1)",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  color: "#e5e7eb",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  marginBottom: 8,
                }}
              >
                Cumulative Return
              </div>
              <div style={{ fontSize: 30, fontWeight: 800, color: "#4ade80", lineHeight: 1 }}>
                +{cumulativeReturnPct.toFixed(1)}%
              </div>
              <div style={{ fontSize: 13, color: "#9ca3af", marginTop: 6 }}>
                portfolio + pocketed vs. invested
              </div>
            </div>
            <div
              style={{
                background: "rgba(251,191,36,0.08)",
                border: "1px solid rgba(251,191,36,0.4)",
                borderRadius: 16,
                padding: "20px 22px",
                boxShadow: "0 4px 20px rgba(251,191,36,0.1)",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  color: "#e5e7eb",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  marginBottom: 8,
                }}
              >
                Avg Monthly Take-Home
              </div>
              <div style={{ fontSize: 30, fontWeight: 800, color: "#fbbf24", lineHeight: 1 }}>
                {fmt(avgTakeHome)}
              </div>
              <div style={{ fontSize: 13, color: "#9ca3af", marginTop: 6 }}>
                pocketed each month (50%)
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginBottom: 20 }}>
            <div
              style={{
                background: "rgba(167,139,250,0.08)",
                border: "1px solid rgba(167,139,250,0.4)",
                borderRadius: 16,
                padding: "20px 22px",
                boxShadow: "0 4px 20px rgba(167,139,250,0.1)",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  color: "#e5e7eb",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  marginBottom: 8,
                }}
              >
                Portfolio Value
              </div>
              <div style={{ fontSize: 30, fontWeight: 800, color: "#a78bfa", lineHeight: 1 }}>
                {fmt(finalPortfolio)}
              </div>
              <div style={{ fontSize: 13, color: "#9ca3af", marginTop: 6 }}>
                still working for you
              </div>
            </div>
            <div
              style={{
                background: "rgba(56,189,248,0.08)",
                border: "1px solid rgba(56,189,248,0.4)",
                borderRadius: 16,
                padding: "20px 22px",
                boxShadow: "0 4px 20px rgba(56,189,248,0.1)",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  color: "#e5e7eb",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  marginBottom: 8,
                }}
              >
                Total Pocketed
              </div>
              <div style={{ fontSize: 30, fontWeight: 800, color: "#38bdf8", lineHeight: 1 }}>
                {fmt(totalPocketed)}
              </div>
              <div style={{ fontSize: 13, color: "#9ca3af", marginTop: 6 }}>
                over {totalMonths} months
              </div>
            </div>
          </div>

          {/* ── Context note ── */}
          <div
            style={{
              background: "rgba(74,222,128,0.08)",
              border: "1px solid rgba(74,222,128,0.25)",
              borderRadius: 14,
              padding: "16px 20px",
              marginBottom: 20,
              display: "flex",
              gap: 12,
            }}
          >
            <span style={{ fontSize: 22, flexShrink: 0 }}>📈</span>
            <div style={{ fontSize: 14, color: "#86efac", lineHeight: 1.6 }}>
              Results scale with your capital — my account had grown through contributions by the
              time the bigger months hit. Starting with more capital or contributing consistently
              accelerates the results you see here.
            </div>
          </div>

          {/* ── Chart ── */}
          <div
            style={{
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: 20,
              padding: "24px 12px 16px",
              marginBottom: 20,
              boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
            }}
          >
            <div
              style={{
                paddingLeft: 16,
                marginBottom: 16,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#f1f5f9", display: "flex", alignItems: "center", gap: 10 }}>
                  {mode === "replay" ? "My Actual Month-by-Month Results" : "Projected Growth"}
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      padding: "3px 10px",
                      borderRadius: 12,
                      background: isUsingLiveData
                        ? "rgba(74,222,128,0.15)"
                        : "rgba(251,191,36,0.15)",
                      color: isUsingLiveData ? "#4ade80" : "#fbbf24",
                      border: `1px solid ${isUsingLiveData ? "rgba(74,222,128,0.3)" : "rgba(251,191,36,0.3)"}`,
                    }}
                  >
                    {isUsingLiveData && (
                      <span
                        className="animate-pulse"
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "#4ade80",
                          display: "inline-block",
                        }}
                      />
                    )}
                    {isUsingLiveData ? "Live Data" : "Cached Data"}
                  </span>
                </div>
                <div style={{ fontSize: 13, color: "#9ca3af", marginTop: 3 }}>
                  {mode === "replay"
                    ? "Exact percentages from my published trading history"
                    : `Using my ${AVG_PCT.toFixed(2)}%/mo historical average`}
                </div>
              </div>
              <div style={{ paddingRight: 16, fontSize: 13, color: "#9ca3af" }}>
                Start: {fmt(capital)}
              </div>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartData} margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
                <defs>
                  <linearGradient id="simulator-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#7c3aed" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.12)" />
                <XAxis
                  dataKey="month"
                  tick={{ fill: "#9ca3af", fontSize: 12 }}
                  tickLine={false}
                  interval="preserveStartEnd"
                />
                <YAxis
                  tickFormatter={(v: number) =>
                    v >= 1_000_000
                      ? `$${(v / 1_000_000).toFixed(1)}M`
                      : `$${(v / 1000).toFixed(0)}K`
                  }
                  tick={{ fill: "#9ca3af", fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip content={<SimTooltip />} />
                <ReferenceLine
                  y={capital}
                  stroke="rgba(255,255,255,0.2)"
                  strokeDasharray="4 4"
                  label={{
                    value: "your start",
                    fill: "#9ca3af",
                    fontSize: 11,
                    position: "insideTopLeft",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#a78bfa"
                  strokeWidth={3}
                  fill="url(#simulator-grad)"
                  dot={false}
                  activeDot={{ r: 5, fill: "#c4b5fd" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* ── My actual numbers callout ── */}
          <div
            style={{
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: 16,
              padding: "24px 28px",
              marginBottom: 20,
              boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
            }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#e5e7eb",
                textTransform: "uppercase",
                letterSpacing: "0.07em",
                marginBottom: 18,
              }}
            >
              My Real Numbers Behind This Calculator
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: 12,
              }}
            >
              {statsCards.map((s) => (
                <div
                  key={s.label}
                  style={{
                    textAlign: "center",
                    background: "rgba(124,58,237,0.12)",
                    border: "1px solid rgba(167,139,250,0.25)",
                    borderRadius: 12,
                    padding: "14px 10px",
                  }}
                >
                  <div style={{ fontSize: 24, fontWeight: 800, color: "#a78bfa", marginBottom: 4 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: 13, color: "#e5e7eb", fontWeight: 600 }}>{s.label}</div>
                  <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 3 }}>{s.sub}</div>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: 16,
                fontSize: 14,
                color: "#9ca3af",
                lineHeight: 1.6,
                borderTop: "1px solid rgba(255,255,255,0.1)",
                paddingTop: 16,
              }}
            >
              These aren't projections from someone else's account. Every trade behind these numbers
              is published on this site — you can verify every single one in the Trading Scoreboard
              above.
            </div>
          </div>

          {/* ── CTA ── */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.20), rgba(255,255,255,0.10))",
              border: "1px solid rgba(167,139,250,0.5)",
              borderRadius: 20,
              padding: "36px 32px",
              textAlign: "center",
              marginBottom: 20,
              boxShadow: "0 4px 30px rgba(124,58,237,0.2)",
            }}
          >
            <h3
              style={{
                fontSize: 22,
                fontWeight: 800,
                margin: "0 0 12px",
                letterSpacing: "-0.01em",
              }}
            >
              Seen enough to get started?
            </h3>
            <p
              style={{
                color: "#d1d5db",
                fontSize: 15,
                margin: "0 0 24px",
                lineHeight: 1.7,
                maxWidth: 440,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              These are my real results — every trade published publicly on this site. The $1,000
              discount is available through my referral link below.
            </p>
            <a
              href="https://crypto.gobabytrade.com/signup.aspx?RID=432706BE"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                color: "#fff",
                border: "none",
                borderRadius: 12,
                padding: "16px 40px",
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 4px 24px rgba(124,58,237,0.4)",
                letterSpacing: "-0.01em",
                textDecoration: "none",
              }}
            >
              Start Trading – Save $1,000
              <ArrowRight size={18} />
            </a>
          </div>

          {/* ── Disclaimer ── */}
          <div
            style={{
              fontSize: 13,
              color: "#6b7280",
              lineHeight: 1.7,
              textAlign: "center",
              maxWidth: 620,
              margin: "0 auto",
            }}
          >
            <strong style={{ color: "#9ca3af" }}>Affiliate disclosure:</strong> This site contains
            affiliate links — we may earn a commission if you sign up through our referral.{" "}
            <strong style={{ color: "#9ca3af" }}>Risk disclosure:</strong> Past trading performance
            is not indicative of future results. Cryptocurrency trading involves substantial risk.
            This calculator is for educational purposes only and does not constitute financial
            advice. Only invest what you can afford to lose.
          </div>
        </div>
      </div>
    </div>
  );
};
