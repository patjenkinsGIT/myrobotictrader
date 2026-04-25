import React, { useMemo, useState } from "react";
import { FullNav } from "../components/FullNav";
import { useGoogleSheetsData } from "../hooks/useGoogleSheetsData";

// Hardcoded preset rates (with their source labels in the UI)
const WEBINAR_RATE = 0.0344; // 50%/yr — webinar projection
const TOP_TRADER_RATE = 0.0595; // ~100%/yr — top-trader observed

// Comparison rates (constants — not from the sheet)
const SP500_MONTHLY = Math.pow(1.1, 1 / 12) - 1;
const HYSA_MONTHLY = Math.pow(1.045, 1 / 12) - 1;
const CASH_MONTHLY = 0;

// Fallbacks for the empty/loading/missing-data edge cases
const FALLBACK_VERIFIED_RATE = 0.0111;
const FALLBACK_BEST_RATE = 0.0285;
const FALLBACK_CAPITAL = 29666;

// Affiliate CTA target (per spec)
const CTA_HREF = "https://gobabytrade.com/432706BE";

type Mode = "50-50" | "full";

interface SimPoint {
  month: number;
  portfolio: number;
  pocketed: number;
  total: number;
}

function fmtUSD(n: number, decimals?: number): string {
  if (!isFinite(n)) return "$0";
  const sign = n < 0 ? "−" : "";
  const abs = Math.abs(n);
  const d = decimals != null ? decimals : abs < 100 ? 2 : 0;
  const s = abs.toLocaleString("en-US", {
    minimumFractionDigits: d,
    maximumFractionDigits: d,
  });
  return sign + "$" + s;
}

function fmtAxis(v: number): string {
  if (v >= 1_000_000)
    return "$" + (v / 1_000_000).toFixed(v >= 10_000_000 ? 0 : 1) + "M";
  if (v >= 1000) return "$" + Math.round(v / 1000) + "K";
  return "$" + Math.round(v);
}

function parseMoney(str: string): number {
  const cleaned = str.replace(/[^0-9.]/g, "");
  const n = parseFloat(cleaned);
  return isFinite(n) ? n : 0;
}

function fmtMoneyInput(n: number): string {
  return Math.round(n).toLocaleString("en-US");
}

function simulate(
  starting: number,
  contrib: number,
  years: number,
  monthlyRate: number,
  mode: Mode
): SimPoint[] {
  const months = Math.max(0, years * 12);
  let portfolio = starting;
  let pocketed = 0;
  const out: SimPoint[] = [{ month: 0, portfolio, pocketed, total: portfolio }];
  for (let m = 1; m <= months; m++) {
    const growth = portfolio * monthlyRate;
    if (mode === "50-50") {
      portfolio += growth / 2;
      pocketed += growth / 2;
    } else {
      portfolio += growth;
    }
    portfolio += contrib;
    out.push({ month: m, portfolio, pocketed, total: portfolio + pocketed });
  }
  return out;
}

function simulateCompare(
  starting: number,
  contrib: number,
  years: number,
  monthlyRate: number
): SimPoint[] {
  const months = Math.max(0, years * 12);
  let portfolio = starting;
  const out: SimPoint[] = [
    { month: 0, portfolio, pocketed: 0, total: portfolio },
  ];
  for (let m = 1; m <= months; m++) {
    portfolio = portfolio * (1 + monthlyRate) + contrib;
    out.push({ month: m, portfolio, pocketed: 0, total: portfolio });
  }
  return out;
}

function daysSinceISO(iso: string): number {
  const t = Date.parse(iso);
  if (!isFinite(t)) return Number.POSITIVE_INFINITY;
  return Math.floor((Date.now() - t) / (1000 * 60 * 60 * 24));
}

const STARTING_PRESETS = [1000, 5000, 10000, 25000, 50000, 100000];
const CONTRIB_PRESETS = [0, 100, 250, 500, 1000, 2000];
const YEAR_PRESETS = [1, 3, 5, 10, 15, 20, 25];

export const CalculatorPage: React.FC = () => {
  const { tradingStats, isLoading } = useGoogleSheetsData();

  // Live-derived anchors
  const liveDerived = useMemo(() => {
    const monthly = tradingStats?.monthlyData ?? [];
    const totalProfit = monthly.reduce((s, m) => s + m.profit, 0);
    const months = monthly.length;
    const avgMonthlyProfit = months > 0 ? totalProfit / months : 0;
    const capital = tradingStats?.timeWeightedAvgCapital ?? FALLBACK_CAPITAL;

    const verifiedRate =
      months > 0 && capital > 0
        ? avgMonthlyProfit / capital
        : FALLBACK_VERIFIED_RATE;

    const bestMonthProfit =
      months > 0 ? Math.max(...monthly.map((m) => m.profit)) : 0;
    const bestMonthRate =
      bestMonthProfit > 0 && capital > 0
        ? bestMonthProfit / capital
        : FALLBACK_BEST_RATE;

    const totalTrades = tradingStats?.totalTrades ?? 0;

    return {
      totalProfit,
      months,
      avgMonthlyProfit,
      capital,
      verifiedRate,
      bestMonthRate,
      totalTrades,
      lastReconciledDate: tradingStats?.lastReconciledDate,
    };
  }, [tradingStats]);

  // Inputs
  const [starting, setStarting] = useState<number>(10000);
  const [startingText, setStartingText] = useState<string>("10,000");
  const [contrib, setContrib] = useState<number>(0);
  const [contribText, setContribText] = useState<string>("0");
  const [years, setYears] = useState<number>(10);
  const [mode, setMode] = useState<Mode>("50-50");

  // Rate state. `null` means "track the live verified rate". A number means user override.
  const [userRate, setUserRate] = useState<number | null>(null);

  const placeholderRate = isLoading ? FALLBACK_VERIFIED_RATE : liveDerived.verifiedRate;
  const monthlyRate = userRate ?? placeholderRate;

  // Sim results
  const sim = useMemo(() => {
    const aut = simulate(starting, contrib, years, monthlyRate, mode);
    const sp = simulateCompare(starting, contrib, years, SP500_MONTHLY);
    const hysa = simulateCompare(starting, contrib, years, HYSA_MONTHLY);
    const cash = simulateCompare(starting, contrib, years, CASH_MONTHLY);
    return { aut, sp, hysa, cash };
  }, [starting, contrib, years, monthlyRate, mode]);

  const months = Math.max(0, years * 12);
  const totalInvested = starting + contrib * months;
  const autEnd = sim.aut[sim.aut.length - 1] ?? {
    portfolio: starting,
    pocketed: 0,
    total: starting,
    month: 0,
  };
  const totalWealth = autEnd.total;
  const profit = totalWealth - totalInvested;

  // Tangibility values (50/50 mode)
  let tangHead = "";
  let dailyV = 0;
  let weeklyV = 0;
  let monthlyV = 0;
  let showTang = false;
  if (mode === "50-50" && months >= 12) {
    showTang = true;
    const finalYearPocketed =
      autEnd.pocketed - (sim.aut[months - 12]?.pocketed ?? 0);
    monthlyV = finalYearPocketed / 12;
    weeklyV = finalYearPocketed / 52;
    dailyV = finalYearPocketed / 365;
    tangHead = `By year ${years}, you'd be pocketing income at this rate:`;
  } else if (mode === "50-50" && months > 0) {
    showTang = true;
    const monthlyAvg = autEnd.pocketed / months;
    monthlyV = monthlyAvg;
    weeklyV = monthlyAvg / 4.33;
    dailyV = monthlyAvg / 30.44;
    tangHead = `Average income pocketed each month over ${months} months:`;
  }

  // Comparison endpoints
  const spEnd = sim.sp[sim.sp.length - 1]?.portfolio ?? starting;
  const hysaEnd = sim.hysa[sim.hysa.length - 1]?.portfolio ?? starting;
  const cashEnd = sim.cash[sim.cash.length - 1]?.portfolio ?? starting;

  // SVG chart
  const chartSvg = useMemo(() => {
    const W = 800;
    const H = 380;
    const PAD_L = 60;
    const PAD_R = 16;
    const PAD_T = 16;
    const PAD_B = 36;
    const innerW = W - PAD_L - PAD_R;
    const innerH = H - PAD_T - PAD_B;

    const aut = sim.aut.map((p) => p.total);
    const sp = sim.sp.map((p) => p.portfolio);
    const hysa = sim.hysa.map((p) => p.portfolio);
    const cash = sim.cash.map((p) => p.portfolio);

    const N = aut.length;
    const all = [...aut, ...sp, ...hysa, ...cash];
    const maxV = Math.max(1, ...all);
    const minV = 0;

    const x = (i: number) =>
      N <= 1 ? PAD_L : PAD_L + (i / (N - 1)) * innerW;
    const y = (v: number) =>
      PAD_T + innerH - ((v - minV) / (maxV - minV || 1)) * innerH;

    const path = (arr: number[]) => {
      let d = "";
      for (let i = 0; i < arr.length; i++) {
        d +=
          (i === 0 ? "M" : "L") +
          x(i).toFixed(1) +
          " " +
          y(arr[i]).toFixed(1) +
          " ";
      }
      return d;
    };

    const gridLines: React.ReactElement[] = [];
    const gridCount = 5;
    for (let i = 0; i <= gridCount; i++) {
      const v = minV + (maxV - minV) * (i / gridCount);
      const yy = y(v);
      gridLines.push(
        <line
          key={`gh-${i}`}
          className="mrt-calc-grid-line"
          x1={PAD_L}
          y1={yy}
          x2={W - PAD_R}
          y2={yy}
        />
      );
      gridLines.push(
        <text
          key={`gt-${i}`}
          className="mrt-calc-axis-text"
          x={PAD_L - 8}
          y={yy + 4}
          textAnchor="end"
        >
          {fmtAxis(v)}
        </text>
      );
    }

    const yearTickEvery = Math.max(1, Math.ceil(years / 6));
    const xTicks: React.ReactElement[] = [];
    for (let yr = 0; yr <= years; yr += yearTickEvery) {
      const i = yr * 12;
      if (i >= N) continue;
      const xx = x(i);
      xTicks.push(
        <line
          key={`xtl-${yr}`}
          className="mrt-calc-grid-line"
          x1={xx}
          y1={PAD_T + innerH}
          x2={xx}
          y2={PAD_T + innerH + 4}
        />
      );
      xTicks.push(
        <text
          key={`xtt-${yr}`}
          className="mrt-calc-axis-text"
          x={xx}
          y={H - 12}
          textAnchor="middle"
        >
          {`Yr ${yr}`}
        </text>
      );
    }
    if (years % yearTickEvery !== 0) {
      const xx = x(N - 1);
      xTicks.push(
        <text
          key="xtt-final"
          className="mrt-calc-axis-text"
          x={xx}
          y={H - 12}
          textAnchor="middle"
        >
          {`Yr ${years}`}
        </text>
      );
    }

    const lastIdx = N - 1;
    const endMarkerX = x(lastIdx);
    const endMarkerY = y(aut[lastIdx] ?? starting);

    return (
      <svg
        className="mrt-calc-chart"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter
            id="mrt-calc-glow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {gridLines}
        {xTicks}
        <path
          d={path(cash)}
          fill="none"
          stroke="#6b7299"
          strokeWidth={2}
          strokeDasharray="4 4"
          opacity={0.8}
        />
        <path
          d={path(hysa)}
          fill="none"
          stroke="#a78bfa"
          strokeWidth={2.5}
          opacity={0.92}
        />
        <path
          d={path(sp)}
          fill="none"
          stroke="#60a5fa"
          strokeWidth={2.5}
          opacity={0.92}
        />
        <path
          d={path(aut)}
          fill="none"
          stroke="#4ade80"
          strokeWidth={3.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#mrt-calc-glow)"
        />
        <circle
          cx={endMarkerX}
          cy={endMarkerY}
          r={4.5}
          fill="#4ade80"
          stroke="#0c0d27"
          strokeWidth={2}
        />
      </svg>
    );
  }, [sim, years, starting]);

  // Slider mechanics
  const SLIDER_MIN = 0.5;
  const SLIDER_MAX = 7.0;
  const sliderPercent = monthlyRate * 100;
  const sliderFillPct =
    ((Math.max(SLIDER_MIN, Math.min(SLIDER_MAX, sliderPercent)) - SLIDER_MIN) /
      (SLIDER_MAX - SLIDER_MIN)) *
    100;

  const setRate = (rate: number) => setUserRate(rate);

  const presets = [
    {
      rate: liveDerived.verifiedRate,
      label: `${(liveDerived.verifiedRate * 100).toFixed(2)}%/mo`,
      name: "My verified track record",
      source: `${(((1 + liveDerived.verifiedRate) ** 12 - 1) * 100).toFixed(
        1
      )}%/yr · ${liveDerived.months || 16}-mo reconciled average`,
    },
    {
      rate: liveDerived.bestMonthRate,
      label: `${(liveDerived.bestMonthRate * 100).toFixed(2)}%/mo`,
      name: "My best month",
      source: `${(((1 + liveDerived.bestMonthRate) ** 12 - 1) * 100).toFixed(
        1
      )}%/yr · single-month high`,
    },
    {
      rate: WEBINAR_RATE,
      label: `${(WEBINAR_RATE * 100).toFixed(2)}%/mo`,
      name: "Webinar projection",
      source: "50%/yr · used in masterclass scenarios",
    },
    {
      rate: TOP_TRADER_RATE,
      label: `${(TOP_TRADER_RATE * 100).toFixed(2)}%/mo`,
      name: "Top-trader observed",
      source: "100%/yr · leaderboard outliers, not typical",
    },
  ];

  const isPresetActive = (presetRate: number) =>
    Math.abs(presetRate - monthlyRate) < 0.00005;

  // Credibility numbers (live)
  const credTotalTrades = liveDerived.totalTrades || 0;
  const credTotalProfit = liveDerived.totalProfit || 0;
  const credMonths = liveDerived.months || 0;
  // Project memory + brand-voice rule: every closed trade hit profit goal — all wins.
  const credWinRate = credTotalTrades > 0 ? "100%" : "—";

  // Staleness hint
  const showStaleHint =
    !liveDerived.lastReconciledDate ||
    daysSinceISO(liveDerived.lastReconciledDate) > 60;

  // Empty-scenario guard (years=0 or NaN comparison values)
  const isEmptyScenario = years === 0 && contrib === 0;

  const handleStartingChange = (v: string) => {
    const n = parseMoney(v);
    setStarting(n);
    setStartingText(fmtMoneyInput(n));
  };
  const handleContribChange = (v: string) => {
    const n = parseMoney(v);
    setContrib(n);
    setContribText(fmtMoneyInput(n));
  };

  return (
    <>
      <FullNav />
      <style>{CALC_STYLES}</style>
      <div className="mrt-calc-root">
        <div className="mrt-calc-wrap">
          <div className="mrt-calc-accent-bar" />

          {/* HERO */}
          <header className="mrt-calc-hero">
            <div className="mrt-calc-brand-row">
              <span className="mrt-calc-brand-dot" />
              <span>MyRoboticTrader · Calculator</span>
            </div>
            <div className="mrt-calc-credibility-badge">
              ✓ {credTotalTrades > 0 ? credTotalTrades.toLocaleString() : "—"}{" "}
              verified trades · {credWinRate} profit-goal hit rate ·{" "}
              {credMonths > 0 ? credMonths : "—"} months of published history
            </div>
            <h1>What Could Autonomous Trading Do For You?</h1>
            <p className="mrt-calc-lede">
              Most calculators ask you to invent a return rate. This one starts
              from my real, published track record — reconciled against my
              Coinbase statements — and shows you what it could compound into
              next to the S&amp;P 500, a high-yield savings account, and cash
              in the bank.
            </p>
          </header>

          {/* INPUTS CARD */}
          <section className="mrt-calc-card">
            <div className="mrt-calc-anchor-box">
              <div className="mrt-calc-anchor-icon">🟢</div>
              <div className="mrt-calc-anchor-text">
                <strong>The default anchor:</strong> over{" "}
                {credMonths > 0 ? credMonths : "16"} months, my account has
                averaged{" "}
                <strong>
                  ~$
                  {Math.round(
                    (liveDerived.avgMonthlyProfit / liveDerived.capital) * 1000
                  )}{" "}
                  in realized monthly profit for every $1,000 deployed
                </strong>{" "}
                — about{" "}
                <strong>
                  {(liveDerived.verifiedRate * 100).toFixed(2)}%/month
                </strong>
                , the live blend of my real published track record.
                <div className="mrt-calc-anchor-small">
                  Want to model what other observed scenarios would look like?
                  Use the preset buttons below — each one is labeled with its
                  source so you can see exactly where the number came from.
                  Realized profit = locked-in dollars from closed trades.
                </div>
              </div>
            </div>

            <h2>Your scenario</h2>
            <div className="mrt-calc-sub">
              All fields are live — everything updates as you tweak.
            </div>

            <div className="mrt-calc-inputs-grid">
              {/* Starting capital */}
              <div className="mrt-calc-field">
                <label>Starting capital</label>
                <div className="mrt-calc-field-input">
                  <span className="mrt-calc-currency">$</span>
                  <input
                    type="text"
                    value={startingText}
                    inputMode="numeric"
                    onChange={(e) => handleStartingChange(e.target.value)}
                    onBlur={() => setStartingText(fmtMoneyInput(starting))}
                  />
                </div>
                <div className="mrt-calc-chip-row">
                  {STARTING_PRESETS.map((v) => (
                    <span
                      key={v}
                      className={`mrt-calc-chip${
                        starting === v ? " mrt-calc-chip-active" : ""
                      }`}
                      onClick={() => {
                        setStarting(v);
                        setStartingText(fmtMoneyInput(v));
                      }}
                    >
                      {v >= 1000 ? `$${v / 1000}K` : `$${v}`}
                    </span>
                  ))}
                </div>
              </div>

              {/* Monthly contribution */}
              <div className="mrt-calc-field">
                <label>Monthly contribution</label>
                <div className="mrt-calc-field-input">
                  <span className="mrt-calc-currency">$</span>
                  <input
                    type="text"
                    value={contribText}
                    inputMode="numeric"
                    onChange={(e) => handleContribChange(e.target.value)}
                    onBlur={() => setContribText(fmtMoneyInput(contrib))}
                  />
                </div>
                <div className="mrt-calc-chip-row">
                  {CONTRIB_PRESETS.map((v) => (
                    <span
                      key={v}
                      className={`mrt-calc-chip${
                        contrib === v ? " mrt-calc-chip-active" : ""
                      }`}
                      onClick={() => {
                        setContrib(v);
                        setContribText(fmtMoneyInput(v));
                      }}
                    >
                      {v === 0 ? "None" : v >= 1000 ? `$${v / 1000}K` : `$${v}`}
                    </span>
                  ))}
                </div>
              </div>

              {/* Time horizon */}
              <div className="mrt-calc-field mrt-calc-field-full">
                <label>Time horizon</label>
                <div className="mrt-calc-chip-row">
                  {YEAR_PRESETS.map((v) => (
                    <span
                      key={v}
                      className={`mrt-calc-chip${
                        years === v ? " mrt-calc-chip-active" : ""
                      }`}
                      onClick={() => setYears(v)}
                    >
                      {v} {v === 1 ? "yr" : "yrs"}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mode toggle */}
              <div className="mrt-calc-field mrt-calc-field-full">
                <label>Strategy: pocket profits or compound everything?</label>
                <div className="mrt-calc-pill-toggle">
                  <button
                    className={mode === "50-50" ? "mrt-calc-pill-active" : ""}
                    onClick={() => setMode("50-50")}
                  >
                    50/50 split (pocket half, compound half)
                  </button>
                  <button
                    className={mode === "full" ? "mrt-calc-pill-active" : ""}
                    onClick={() => setMode("full")}
                  >
                    Full reinvest (max compound)
                  </button>
                </div>
                <div className="mrt-calc-helper">
                  50/50 is what I actually do — half my realized profits get
                  pocketed as monthly income, half stays in to keep the system
                  growing. Full reinvest models the maximum-compounding
                  scenario.
                </div>
              </div>

              {/* Rate presets + slider */}
              <div className="mrt-calc-field mrt-calc-field-full">
                <label>Monthly return scenario</label>
                <div className="mrt-calc-presets-grid">
                  {presets.map((p, i) => (
                    <button
                      key={i}
                      className={`mrt-calc-preset-btn${
                        isPresetActive(p.rate) ? " mrt-calc-preset-active" : ""
                      }`}
                      onClick={() => setRate(p.rate)}
                    >
                      <div className="mrt-calc-preset-rate">{p.label}</div>
                      <div className="mrt-calc-preset-name">{p.name}</div>
                      <div className="mrt-calc-preset-source">{p.source}</div>
                    </button>
                  ))}
                </div>
                <div
                  className="mrt-calc-slider-row"
                  style={{ marginTop: 14 }}
                >
                  <input
                    type="range"
                    min={SLIDER_MIN}
                    max={SLIDER_MAX}
                    step={0.05}
                    value={Math.max(
                      SLIDER_MIN,
                      Math.min(SLIDER_MAX, sliderPercent)
                    )}
                    onChange={(e) =>
                      setRate(parseFloat(e.target.value) / 100)
                    }
                    style={
                      {
                        ["--mrt-pct" as string]: `${sliderFillPct}%`,
                      } as React.CSSProperties
                    }
                  />
                  <div className="mrt-calc-slider-value">
                    <span>{sliderPercent.toFixed(2)}%</span>
                    {" · "}
                    <span>${(sliderPercent * 10).toFixed(2)}/$1K</span>
                  </div>
                </div>
                <div className="mrt-calc-helper">
                  The slider lets you fine-tune anywhere between 0.5%/mo and
                  7%/mo. My default is the verified live average from every-trade
                  publishing — the others are real observed scenarios with
                  their sources labeled.
                </div>
              </div>
            </div>
          </section>

          {/* HERO RESULT */}
          <section
            className="mrt-calc-hero-result"
            style={{ borderColor: "#4ade80" }}
          >
            <div className="mrt-calc-hero-label">
              Projected total wealth in <span>{years}</span> year
              {years === 1 ? "" : "s"}
            </div>
            <div className="mrt-calc-big-number">
              {isEmptyScenario ? "—" : fmtUSD(totalWealth)}
            </div>
            <div className="mrt-calc-profit-line">
              <span>
                on {fmtUSD(totalInvested)} invested
              </span>{" "}
              <span style={{ color: "#4ade80", fontWeight: 700 }}>
                ({profit >= 0 ? "+" : ""}
                {fmtUSD(profit)} projected profit)
              </span>
            </div>

            {showTang && !isEmptyScenario && (
              <div className="mrt-calc-tang-section">
                <div className="mrt-calc-tang-headline">{tangHead}</div>
                <div className="mrt-calc-tang-grid">
                  <div className="mrt-calc-tang-cell">
                    <div className="mrt-calc-tang-v">
                      {fmtUSD(dailyV, dailyV < 100 ? 2 : 0)}
                    </div>
                    <div className="mrt-calc-tang-l">every day</div>
                  </div>
                  <div className="mrt-calc-tang-cell">
                    <div className="mrt-calc-tang-v">
                      {fmtUSD(weeklyV, weeklyV < 100 ? 2 : 0)}
                    </div>
                    <div className="mrt-calc-tang-l">every week</div>
                  </div>
                  <div className="mrt-calc-tang-cell">
                    <div className="mrt-calc-tang-v">{fmtUSD(monthlyV)}</div>
                    <div className="mrt-calc-tang-l">every month</div>
                  </div>
                </div>
              </div>
            )}

            {isEmptyScenario && (
              <div className="mrt-calc-helper" style={{ marginTop: 16 }}>
                Set your scenario above — pick a starting amount, monthly
                contribution, and time horizon to see projections.
              </div>
            )}
          </section>

          {/* CHART */}
          <section className="mrt-calc-card">
            <h2>Side-by-side: where would your money actually go?</h2>
            <div className="mrt-calc-sub">
              Same starting capital, same monthly contributions, four different
              strategies.
            </div>
            <div className="mrt-calc-legend">
              <div className="mrt-calc-legend-item">
                <span
                  className="mrt-calc-legend-dot"
                  style={{
                    background: "#4ade80",
                    boxShadow: "0 0 8px rgba(74,222,128,0.6)",
                  }}
                />
                Autonomous Trading
              </div>
              <div className="mrt-calc-legend-item">
                <span
                  className="mrt-calc-legend-dot"
                  style={{ background: "#60a5fa" }}
                />
                S&amp;P 500 (10%/yr historical avg)
              </div>
              <div className="mrt-calc-legend-item">
                <span
                  className="mrt-calc-legend-dot"
                  style={{ background: "#a78bfa" }}
                />
                High-Yield Savings (4.5%/yr)
              </div>
              <div className="mrt-calc-legend-item">
                <span
                  className="mrt-calc-legend-dot"
                  style={{ background: "#6b7299" }}
                />
                Cash (no growth)
              </div>
            </div>
            <div className="mrt-calc-chart-frame">{chartSvg}</div>
          </section>

          {/* COMPARISON CARDS */}
          <section className="mrt-calc-comp-grid">
            <div
              className="mrt-calc-comp mrt-calc-comp-hero"
              style={{ borderColor: "#4ade80" }}
            >
              <div className="mrt-calc-comp-name">
                Autonomous Trading{" "}
                <span style={{ color: "#4ade80", marginLeft: 6, fontSize: 10 }}>
                  YOUR HERO
                </span>
              </div>
              <div className="mrt-calc-comp-v">{fmtUSD(totalWealth)}</div>
              <div className="mrt-calc-comp-delta" style={{ color: "#4ade80" }}>
                — baseline —
              </div>
            </div>
            {[
              { label: "S&P 500", end: spEnd },
              { label: "High-Yield Savings", end: hysaEnd },
              { label: "Cash sitting idle", end: cashEnd },
            ].map((row) => {
              const d = row.end - totalWealth;
              const positive = d >= 0;
              return (
                <div className="mrt-calc-comp" key={row.label}>
                  <div className="mrt-calc-comp-name">{row.label}</div>
                  <div className="mrt-calc-comp-v">{fmtUSD(row.end)}</div>
                  <div
                    className="mrt-calc-comp-delta"
                    style={{ color: positive ? "#4ade80" : "#f87171" }}
                  >
                    {positive ? "+" : "−"}
                    {fmtUSD(Math.abs(d)).replace("−", "")} vs. autonomous
                  </div>
                </div>
              );
            })}
          </section>

          {/* HOW THIS WORKS */}
          <section className="mrt-calc-card mrt-calc-howitworks">
            <h2>How this actually works (the part most calculators skip)</h2>
            <div className="mrt-calc-sub">
              No magic. No guru math. Three things you should understand before
              deploying a dollar.
            </div>
            <div className="mrt-calc-how-grid">
              <div
                className="mrt-calc-how-card"
                style={{ borderColor: "#4ade80" }}
              >
                <div className="mrt-calc-how-icon">🎯</div>
                <h3>Realized profit vs. inventory</h3>
                <p>
                  The autonomous trader buys when an asset drops and sells only
                  when each position hits its profit goal.{" "}
                  <strong>Realized profit</strong> — the dollars locked in — is
                  what this calculator projects forward, and is what every
                  transparency dashboard publishes.
                </p>
                <p>
                  While the system waits for sell triggers, it holds{" "}
                  <strong>open positions (inventory)</strong>. Their
                  mark-to-market value goes up and down with the market every
                  day. That's not a loss — it's an order waiting to fill. The
                  rule: <strong>never sell at a loss</strong>.
                </p>
              </div>
              <div className="mrt-calc-how-card">
                <div className="mrt-calc-how-icon">✅</div>
                <h3>100% profit-goal hit rate</h3>
                <p>
                  Across {credTotalTrades > 0 ? credTotalTrades.toLocaleString() : "every"}{" "}
                  closed trades over {credMonths > 0 ? credMonths : "many"}{" "}
                  months, every single one closed above its profit goal. That
                  number is on the transparency dashboard — you can verify each
                  trade.
                </p>
                <p>
                  The trade-off: positions that haven't hit their goal yet stay
                  open. So in any given week, your portfolio's mark-to-market
                  may be up or down even when your <em>realized</em> profit is
                  positive every month.
                </p>
              </div>
              <div
                className="mrt-calc-how-card"
                style={{ borderColor: "#fbbf24" }}
              >
                <div className="mrt-calc-how-icon">🌀</div>
                <h3>When the market softens: the loaded spring</h3>
                <p>
                  In a soft market, fewer positions hit their sell trigger, so
                  monthly realized profit slows. More inventory accumulates at
                  lower prices. When the market turns, those positions close
                  and realized profit accelerates.
                </p>
                <p>
                  My monthly realized return moves up and down across phases —
                  not because trades stop winning, but because more capital
                  sits in the "loaded spring." This calculator uses the live
                  blended average across all phases.
                </p>
              </div>
            </div>
          </section>

          {/* CREDIBILITY */}
          <section className="mrt-calc-card">
            <h2 style={{ color: "#ffffff", margin: "0 0 10px", fontSize: 22 }}>
              These aren't projections from someone else's account.
            </h2>
            <p style={{ color: "#b8bfd8", margin: "0 0 14px" }}>
              The verified anchor is reconciled across two sources: the
              published Google Sheet of every trade, and my Coinbase account
              statements.{" "}
              <strong>
                Average realized profit: ${liveDerived.avgMonthlyProfit.toFixed(0)}
                /month.
              </strong>{" "}
              Time-weighted average capital deployed:{" "}
              <strong>${liveDerived.capital.toLocaleString()}</strong>. Math: $
              {liveDerived.avgMonthlyProfit.toFixed(0)} ÷ $
              {liveDerived.capital.toLocaleString()} ={" "}
              <strong>
                {(liveDerived.verifiedRate * 100).toFixed(2)}%/mo
              </strong>{" "}
              verified realized return.
            </p>
            <div className="mrt-calc-creds-stats">
              <div className="mrt-calc-creds-stat">
                <div className="mrt-calc-creds-v">
                  {isLoading
                    ? "…"
                    : credTotalTrades > 0
                    ? credTotalTrades.toLocaleString()
                    : "—"}
                </div>
                <div className="mrt-calc-creds-l">closed trades</div>
              </div>
              <div className="mrt-calc-creds-stat">
                <div className="mrt-calc-creds-v">{credWinRate}</div>
                <div className="mrt-calc-creds-l">profit-goal hit rate</div>
              </div>
              <div className="mrt-calc-creds-stat">
                <div className="mrt-calc-creds-v">
                  {isLoading
                    ? "…"
                    : credTotalProfit > 0
                    ? `$${Math.round(credTotalProfit).toLocaleString()}`
                    : "—"}
                </div>
                <div className="mrt-calc-creds-l">
                  realized over {credMonths > 0 ? credMonths : "—"} mo
                </div>
              </div>
              <div className="mrt-calc-creds-stat">
                <div className="mrt-calc-creds-v">
                  {credMonths > 0 ? `${credMonths} mo` : "—"}
                </div>
                <div className="mrt-calc-creds-l">of public record</div>
              </div>
            </div>
            <div
              style={{
                marginTop: 14,
                fontSize: 12,
                color: "#8e95b2",
              }}
            >
              Last reconciled against Coinbase:{" "}
              {liveDerived.lastReconciledDate ?? "(pending)"}
              {showStaleHint && (
                <span style={{ color: "#fbbf24", marginLeft: 8 }}>
                  · data may be stale
                </span>
              )}
            </div>
          </section>

          {/* CTA */}
          <section className="mrt-calc-cta-card">
            <h2>Same starting capital. Different decade.</h2>
            <p>
              Stop letting your money sit. The $1,000 discount is available
              through my referral link below.
            </p>
            <a
              className="mrt-calc-cta-button"
              href={CTA_HREF}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Trading — Save $1,000 →
            </a>
          </section>

          {/* DISCLOSURE */}
          <div className="mrt-calc-disclosure">
            <p>
              <strong>Affiliate disclosure:</strong> This site contains
              affiliate links — I may earn a commission if you sign up through
              my referral. My buyers receive a $1,000 discount through this
              link.
            </p>
            <p>
              <strong>Risk disclosure:</strong> Past performance does not
              guarantee future results. Cryptocurrency trading involves
              substantial risk and the value of held positions can decline
              materially. This calculator is for educational purposes only and
              does not constitute financial advice. Only invest what you can
              afford to lose. The S&amp;P 500 (10%/yr) and high-yield savings
              (4.5%/yr) figures are historical averages used as comparison
              baselines, not guarantees.
            </p>
            <p>
              <strong>How the projection is computed:</strong> Compound the
              chosen monthly rate on capital deployed (with optional monthly
              contributions). 50/50 mode pockets half the monthly growth as
              income and reinvests the other half. Full-reinvest mode compounds
              100% of monthly growth. Comparison series compound at their
              stated rates with no take-home.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculatorPage;

// Scoped CSS — every selector prefixed with `mrt-calc-` to avoid colliding
// with global styles or other components.
const CALC_STYLES = `
.mrt-calc-root {
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
  color: #b8bfd8;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
.mrt-calc-wrap { max-width: 1100px; margin: 0 auto; padding: 32px 24px 96px; }
.mrt-calc-accent-bar {
  height: 3px;
  background: linear-gradient(90deg, transparent, rgba(96,165,250,0.55), transparent);
  margin-bottom: 32px;
}
.mrt-calc-hero { text-align: center; margin-bottom: 36px; }
.mrt-calc-brand-row {
  display: inline-flex; align-items: center; gap: 10px;
  color: #8e95b2; font-size: 14px; letter-spacing: 0.05em; text-transform: uppercase;
  margin-bottom: 24px;
}
.mrt-calc-brand-dot { width: 8px; height: 8px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 12px #4ade80; }
.mrt-calc-hero h1 {
  color: #ffffff;
  font-size: clamp(28px, 4.5vw, 48px);
  line-height: 1.1; margin: 0 0 16px;
  letter-spacing: -0.02em;
}
.mrt-calc-lede { max-width: 700px; margin: 0 auto; font-size: 17px; color: #b8bfd8; }
.mrt-calc-credibility-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(74,222,128,0.12);
  border: 1px solid rgba(74,222,128,0.32);
  color: #4ade80;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 18px;
}
.mrt-calc-card {
  background: linear-gradient(180deg, rgba(96,165,250,0.06), rgba(96,165,250,0.02));
  border: 1px solid rgba(96,165,250,0.25);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
}
.mrt-calc-card h2 {
  color: #ffffff; font-size: 22px; margin: 0 0 6px;
  letter-spacing: -0.01em;
}
.mrt-calc-sub { color: #8e95b2; font-size: 14px; margin-bottom: 20px; }
.mrt-calc-anchor-box {
  background: linear-gradient(180deg, rgba(74,222,128,0.10), rgba(74,222,128,0.02));
  border: 1px solid rgba(74,222,128,0.32);
  border-radius: 14px;
  padding: 18px 20px;
  margin-bottom: 22px;
  display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
}
.mrt-calc-anchor-icon { font-size: 28px; line-height: 1; }
.mrt-calc-anchor-text { flex: 1; min-width: 240px; }
.mrt-calc-anchor-text strong { color: #ffffff; }
.mrt-calc-anchor-small { color: #8e95b2; font-size: 13px; margin-top: 4px; }

.mrt-calc-inputs-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
@media (max-width: 720px) { .mrt-calc-inputs-grid { grid-template-columns: 1fr; } }
.mrt-calc-field { display: flex; flex-direction: column; gap: 8px; }
.mrt-calc-field-full { grid-column: 1 / -1; }
.mrt-calc-field label {
  font-size: 12px; letter-spacing: 0.07em; text-transform: uppercase;
  color: #8e95b2; font-weight: 600;
}
.mrt-calc-field-input {
  display: flex; align-items: center; gap: 8px;
  background: rgba(12,13,39,0.6);
  border: 1px solid rgba(96,165,250,0.25);
  border-radius: 10px;
  padding: 10px 14px;
  transition: border-color 0.15s;
}
.mrt-calc-field-input:focus-within { border-color: #60a5fa; }
.mrt-calc-currency { color: #8e95b2; font-size: 18px; }
.mrt-calc-field-input input {
  background: transparent; border: 0; color: #ffffff;
  font-size: 22px; font-weight: 600; width: 100%; outline: none;
  font-variant-numeric: tabular-nums;
}
.mrt-calc-chip-row { display: flex; flex-wrap: wrap; gap: 6px; }
.mrt-calc-chip {
  background: rgba(96,165,250,0.08);
  border: 1px solid rgba(96,165,250,0.25);
  color: #b8bfd8;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 13px; font-weight: 500;
  cursor: pointer;
  transition: all 0.12s;
  user-select: none;
}
.mrt-calc-chip:hover { background: rgba(96,165,250,0.18); color: #ffffff; }
.mrt-calc-chip-active {
  background: rgba(167,139,250,0.25) !important;
  border-color: #a78bfa !important;
  color: #ffffff !important;
}
.mrt-calc-helper { font-size: 12px; color: #8e95b2; margin-top: 4px; }

.mrt-calc-hero-result {
  background: linear-gradient(180deg, rgba(74,222,128,0.10), rgba(74,222,128,0.02));
  border: 1px solid rgba(74,222,128,0.32);
  border-radius: 20px;
  padding: 36px 28px;
  text-align: center;
  margin-bottom: 24px;
}
.mrt-calc-hero-label {
  font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;
  color: #8e95b2; font-weight: 600; margin-bottom: 12px;
}
.mrt-calc-big-number {
  font-size: clamp(44px, 8vw, 84px);
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.03em;
  line-height: 1;
  margin: 4px 0 12px;
  font-variant-numeric: tabular-nums;
  background: linear-gradient(180deg, #ffffff, #b8e7c4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.mrt-calc-profit-line { font-size: 17px; color: #b8bfd8; }
.mrt-calc-tang-section {
  margin-top: 24px; padding-top: 24px;
  border-top: 1px solid rgba(74,222,128,0.18);
}
.mrt-calc-tang-headline { color: #b8bfd8; font-size: 15px; margin-bottom: 14px; }
.mrt-calc-tang-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
@media (max-width: 600px) { .mrt-calc-tang-grid { grid-template-columns: 1fr; } }
.mrt-calc-tang-cell {
  background: rgba(12,13,39,0.4);
  border: 1px solid rgba(74,222,128,0.25);
  border-radius: 12px;
  padding: 14px;
}
.mrt-calc-tang-v { font-size: 26px; font-weight: 800; color: #4ade80; font-variant-numeric: tabular-nums; }
.mrt-calc-tang-l { font-size: 12px; color: #8e95b2; text-transform: uppercase; letter-spacing: 0.06em; margin-top: 4px; }

.mrt-calc-comp-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 24px; }
@media (max-width: 880px) { .mrt-calc-comp-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 460px) { .mrt-calc-comp-grid { grid-template-columns: 1fr; } }
.mrt-calc-comp {
  background: rgba(12,13,39,0.4);
  border: 1px solid rgba(96,165,250,0.25);
  border-radius: 12px;
  padding: 16px;
}
.mrt-calc-comp-hero {
  background: linear-gradient(180deg, rgba(74,222,128,0.14), rgba(74,222,128,0.04));
}
.mrt-calc-comp-name { font-size: 13px; color: #8e95b2; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; }
.mrt-calc-comp-v { font-size: 24px; font-weight: 800; color: #ffffff; margin: 6px 0 4px; font-variant-numeric: tabular-nums; letter-spacing: -0.01em; }
.mrt-calc-comp-delta { font-size: 12px; color: #8e95b2; }

.mrt-calc-legend { display: flex; flex-wrap: wrap; gap: 14px; font-size: 13px; color: #b8bfd8; margin-bottom: 12px; }
.mrt-calc-legend-item { display: flex; align-items: center; gap: 6px; }
.mrt-calc-legend-dot { width: 12px; height: 12px; border-radius: 50%; display: inline-block; }
.mrt-calc-chart-frame {
  position: relative;
  background: rgba(12,13,39,0.4);
  border: 1px solid rgba(96,165,250,0.25);
  border-radius: 12px;
  padding: 16px;
}
.mrt-calc-chart { display: block; width: 100%; height: 380px; overflow: visible; }
.mrt-calc-axis-text { fill: #8e95b2; font-size: 11px; font-family: inherit; font-variant-numeric: tabular-nums; }
.mrt-calc-grid-line { stroke: rgba(96,165,250,0.10); stroke-width: 1; }

.mrt-calc-howitworks { padding: 26px; }
.mrt-calc-howitworks h2 { color: #ffffff; margin: 0 0 6px; font-size: 24px; }
.mrt-how-grid, .mrt-calc-how-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
@media (max-width: 880px) { .mrt-calc-how-grid { grid-template-columns: 1fr; } }
.mrt-calc-how-card {
  background: rgba(12,13,39,0.4);
  border: 1px solid rgba(96,165,250,0.25);
  border-radius: 12px;
  padding: 18px;
}
.mrt-calc-how-icon { font-size: 22px; margin-bottom: 10px; display: inline-block; }
.mrt-calc-how-card h3 {
  color: #ffffff; font-size: 16px; margin: 0 0 8px;
  letter-spacing: -0.005em;
}
.mrt-calc-how-card p { font-size: 14px; color: #b8bfd8; margin: 0 0 10px; }
.mrt-calc-how-card p:last-child { margin-bottom: 0; }

.mrt-calc-creds-stats {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;
  margin-top: 14px;
}
@media (max-width: 700px) { .mrt-calc-creds-stats { grid-template-columns: repeat(2, 1fr); } }
.mrt-calc-creds-stat {
  background: rgba(12,13,39,0.4);
  border: 1px solid rgba(96,165,250,0.25);
  border-radius: 10px;
  padding: 12px;
  text-align: center;
}
.mrt-calc-creds-v { color: #60a5fa; font-weight: 800; font-size: 22px; font-variant-numeric: tabular-nums; }
.mrt-calc-creds-l { color: #8e95b2; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; margin-top: 2px; }

.mrt-calc-cta-card {
  text-align: center;
  background: linear-gradient(180deg, rgba(167,139,250,0.18), rgba(96,165,250,0.06));
  border: 1px solid rgba(167,139,250,0.4);
  border-radius: 20px;
  padding: 36px 24px;
  margin-bottom: 24px;
}
.mrt-calc-cta-card h2 { color: #ffffff; font-size: 28px; margin: 0 0 10px; letter-spacing: -0.01em; }
.mrt-calc-cta-card p { color: #b8bfd8; margin: 0 0 22px; }
.mrt-calc-cta-button {
  display: inline-block;
  background: linear-gradient(135deg, #a78bfa, #60a5fa);
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
  font-size: 17px;
  padding: 14px 32px;
  border-radius: 999px;
  box-shadow: 0 10px 30px rgba(167,139,250,0.35);
  transition: transform 0.1s, box-shadow 0.15s;
}
.mrt-calc-cta-button:hover { transform: translateY(-1px); box-shadow: 0 14px 36px rgba(167,139,250,0.45); }

.mrt-calc-disclosure {
  font-size: 12px; color: #8e95b2; line-height: 1.6;
  margin-top: 16px; padding-top: 16px;
  border-top: 1px solid rgba(96,165,250,0.15);
}
.mrt-calc-disclosure p { margin: 0 0 8px; }

.mrt-calc-pill-toggle {
  display: inline-flex; padding: 3px;
  background: rgba(12,13,39,0.5);
  border: 1px solid rgba(96,165,250,0.25);
  border-radius: 999px;
  gap: 2px;
}
.mrt-calc-pill-toggle button {
  border: 0; background: transparent;
  color: #b8bfd8; font-size: 13px; font-weight: 600;
  padding: 7px 14px; border-radius: 999px; cursor: pointer;
  transition: all 0.12s;
  font-family: inherit;
}
.mrt-calc-pill-active {
  background: #a78bfa !important;
  color: #ffffff !important;
}

.mrt-calc-presets-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}
@media (max-width: 880px) { .mrt-calc-presets-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 460px) { .mrt-calc-presets-grid { grid-template-columns: 1fr; } }
.mrt-calc-preset-btn {
  background: rgba(12,13,39,0.6);
  border: 1px solid rgba(96,165,250,0.25);
  border-radius: 12px;
  padding: 12px 14px;
  cursor: pointer;
  text-align: left;
  color: #b8bfd8;
  font-family: inherit;
  transition: all 0.15s;
}
.mrt-calc-preset-btn:hover {
  border-color: #60a5fa;
  background: rgba(12,13,39,0.85);
  transform: translateY(-1px);
}
.mrt-calc-preset-active {
  border-color: #4ade80 !important;
  background: linear-gradient(180deg, rgba(74,222,128,0.16), rgba(74,222,128,0.04)) !important;
  box-shadow: 0 0 0 2px rgba(74,222,128,0.25);
}
.mrt-calc-preset-rate {
  font-size: 18px;
  font-weight: 800;
  color: #ffffff;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.01em;
}
.mrt-calc-preset-active .mrt-calc-preset-rate { color: #4ade80; }
.mrt-calc-preset-name {
  font-size: 13px;
  font-weight: 600;
  color: #b8bfd8;
  margin-top: 4px;
}
.mrt-calc-preset-source {
  font-size: 11px;
  color: #8e95b2;
  margin-top: 4px;
  line-height: 1.35;
}

.mrt-calc-slider-row { display: flex; align-items: center; gap: 12px; }
.mrt-calc-slider-row input[type=range] {
  flex: 1; -webkit-appearance: none; appearance: none;
  height: 6px; border-radius: 6px;
  background: linear-gradient(90deg, #60a5fa var(--mrt-pct,30%), rgba(96,165,250,0.18) var(--mrt-pct,30%));
  outline: none;
}
.mrt-calc-slider-row input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none; appearance: none;
  width: 18px; height: 18px; border-radius: 50%;
  background: #ffffff;
  border: 2px solid #60a5fa;
  cursor: pointer;
  box-shadow: 0 0 0 4px rgba(96,165,250,0.18);
}
.mrt-calc-slider-row input[type=range]::-moz-range-thumb {
  width: 18px; height: 18px; border-radius: 50%;
  background: #ffffff; border: 2px solid #60a5fa;
  cursor: pointer;
}
.mrt-calc-slider-value {
  min-width: 90px; text-align: right;
  color: #ffffff; font-weight: 700; font-size: 15px;
  font-variant-numeric: tabular-nums;
}
`;
