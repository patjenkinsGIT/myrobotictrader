// functions/api/trophy-card.js
// Generates trophy/record celebration cards for social media

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const type = url.searchParams.get("type") || "month"; // day, week, or month

  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const recordData = await fetchRecordData(env, type);

    const svg = generateTrophyCardSVG(recordData, type);
    return new Response(svg, {
      headers: {
        ...corsHeaders,
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=300",
      },
    });
  } catch (error) {
    console.error("Trophy card error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate trophy card" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
}

async function fetchRecordData(env, type) {
  try {
    const SHEET_ID = env.GOOGLE_SHEET_ID;
    const API_KEY = env.GOOGLE_API_KEY;
    const RECORDS_TAB = "Records";
    const RECORDS_RANGE = "A:H";

    if (!SHEET_ID || !API_KEY) {
      // Fallback mock data
      return {
        type: type,
        amount: type === "day" ? 127.45 : type === "week" ? 487.91 : 1247.83,
        date:
          type === "day"
            ? "Aug 15, 2025"
            : type === "week"
            ? "Aug 12-18, 2025"
            : "August 2025",
        trades: type === "day" ? 18 : type === "week" ? 67 : 245,
        previous: type === "day" ? 98.23 : type === "week" ? 412.5 : 892.17,
        beatBy: type === "day" ? 29.22 : type === "week" ? 75.41 : 355.66,
      };
    }

    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RECORDS_TAB}!${RECORDS_RANGE}?key=${API_KEY}`
    );

    const data = await response.json();
    const rows = data.values || [];

    // Row 3 = Best Day, Row 4 = Best Week, Row 5 = Best Month
    const rowIndex = type === "day" ? 2 : type === "week" ? 3 : 4;
    const row = rows[rowIndex];

    if (!row || row.length < 7) {
      throw new Error("Record data not found");
    }

    return {
      type: type,
      amount: parseFloat(row[1]?.replace(/[$,]/g, "") || "0"),
      date: row[4] || "N/A", // Period column
      trades: parseInt(row[3]?.replace(/[,]/g, "") || "0"),
      previous: parseFloat(row[5]?.replace(/[$,]/g, "") || "0"),
      beatBy: parseFloat(row[6]?.replace(/[$,]/g, "") || "0"),
    };
  } catch (error) {
    console.error("Error fetching record data:", error);
    throw error;
  }
}

function generateTrophyCardSVG(data, type) {
  const titles = {
    day: "🔥 RECORD DAY!",
    week: "💰 BEST WEEK EVER!",
    month: "🚀 RECORD MONTH!",
  };

  const subtitles = {
    day: "Highest Single-Day Profit",
    week: "Highest Weekly Profit",
    month: "Highest Monthly Profit",
  };

  const isNewRecord = data.beatBy > 0;

  return `<svg width="600" height="350" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Gold gradient for trophy theme -->
    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#fbbf24;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#f59e0b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#d97706;stop-opacity:1" />
    </linearGradient>
    
    <!-- Accent gradient -->
    <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
    </linearGradient>
    
    <!-- Background gradient -->
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#1e293b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0f172a;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="600" height="350" fill="url(#bgGradient)" rx="24"/>
  
  <!-- Decorative corner accents -->
  <path d="M 0,24 Q 0,0 24,0 L 100,0" stroke="url(#goldGradient)" stroke-width="3" fill="none" opacity="0.6"/>
  <path d="M 600,24 Q 600,0 576,0 L 500,0" stroke="url(#goldGradient)" stroke-width="3" fill="none" opacity="0.6"/>
  
  <!-- Trophy icon (top center) -->
  <g transform="translate(275, 35)">
    <circle cx="25" cy="25" r="22" fill="url(#goldGradient)" opacity="0.2"/>
    <text x="25" y="37" text-anchor="middle" font-size="32" fill="url(#goldGradient)">🏆</text>
  </g>
  
  ${
    isNewRecord
      ? `
  <!-- NEW RECORD banner -->
  <rect x="150" y="15" width="300" height="35" fill="#dc2626" rx="8" opacity="0.9"/>
  <text x="300" y="38" text-anchor="middle" fill="white" font-size="16" font-weight="bold" font-family="Arial, sans-serif">⭐ NEW RECORD ⭐</text>
  `
      : ""
  }
  
  <!-- Title -->
  <text x="300" y="${
    isNewRecord ? "95" : "85"
  }" text-anchor="middle" fill="url(#goldGradient)" font-size="32" font-weight="bold" font-family="Arial, sans-serif">${
    titles[type]
  }</text>
  
  <!-- Subtitle -->
  <text x="300" y="${
    isNewRecord ? "120" : "110"
  }" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="14" font-family="Arial, sans-serif">${
    subtitles[type]
  }</text>
  
  <!-- Main profit amount -->
  <text x="300" y="${
    isNewRecord ? "190" : "180"
  }" text-anchor="middle" fill="url(#goldGradient)" font-size="64" font-weight="bold" font-family="Arial, monospace">$${data.amount.toFixed(
    2
  )}</text>
  
  <!-- Date/Period -->
  <text x="300" y="${
    isNewRecord ? "220" : "210"
  }" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="16" font-weight="600" font-family="Arial, sans-serif">${
    data.date
  }</text>
  
  <!-- Stats row -->
  <g transform="translate(0, ${isNewRecord ? "245" : "235"})">
    <!-- Trades executed -->
    <rect x="80" y="0" width="150" height="60" fill="rgba(255,255,255,0.08)" rx="12" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
    <text x="155" y="30" text-anchor="middle" fill="white" font-size="24" font-weight="bold" font-family="Arial, monospace">${
      data.trades
    }</text>
    <text x="155" y="48" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="11" font-weight="600" font-family="Arial, sans-serif">TRADES</text>
    
    ${
      isNewRecord && data.beatBy > 0
        ? `
    <!-- Beat previous by -->
    <rect x="250" y="0" width="180" height="60" fill="rgba(255,255,255,0.08)" rx="12" stroke="rgba(16,185,129,0.3)" stroke-width="2"/>
    <text x="340" y="30" text-anchor="middle" fill="#10b981" font-size="24" font-weight="bold" font-family="Arial, monospace">+$${data.beatBy.toFixed(
      2
    )}</text>
    <text x="340" y="48" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="11" font-weight="600" font-family="Arial, sans-serif">BEAT PREVIOUS BY</text>
    `
        : `
    <!-- Previous record -->
    <rect x="250" y="0" width="180" height="60" fill="rgba(255,255,255,0.08)" rx="12" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
    <text x="340" y="30" text-anchor="middle" fill="white" font-size="20" font-weight="bold" font-family="Arial, monospace">$${data.previous.toFixed(
      2
    )}</text>
    <text x="340" y="48" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="11" font-weight="600" font-family="Arial, sans-serif">PREVIOUS BEST</text>
    `
    }
  </g>
  
  <!-- Branding -->
  <text x="560" y="330" text-anchor="end" fill="rgba(255,255,255,0.35)" font-size="11" font-family="Arial, sans-serif">MyRoboticTrader.com</text>
  
  <!-- Sparkle effects -->
  <circle cx="50" cy="140" r="2" fill="#fbbf24" opacity="0.8">
    <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="550" cy="160" r="2" fill="#fbbf24" opacity="0.6">
    <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="80" cy="250" r="1.5" fill="#fbbf24" opacity="0.7">
    <animate attributeName="opacity" values="1;0.4;1" dur="3s" repeatCount="indefinite"/>
  </circle>
  <circle cx="520" cy="270" r="1.5" fill="#fbbf24" opacity="0.5">
    <animate attributeName="opacity" values="0.4;1;0.4" dur="2.8s" repeatCount="indefinite"/>
  </circle>
</svg>`;
}
