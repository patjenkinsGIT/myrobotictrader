// /functions/api/trophy-card.js
// Trophy card generator for record-breaking trading achievements

export async function onRequest(context) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (context.request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(context.request.url);
    const type = url.searchParams.get("type") || "month";
    const format = url.searchParams.get("format") || "html";
    const debug = url.searchParams.get("debug") === "true";

    // Fetch real trading data from Google Sheets
    const trophyData = await fetchTrophyData(context, type);

    // If debug mode, show raw data
    if (debug) {
      return new Response(JSON.stringify(trophyData, null, 2), {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
      });
    }

    if (format === "svg") {
      const svg = generateTrophyCardSVG(trophyData, type);
      return new Response(svg, {
        headers: {
          ...corsHeaders,
          "Content-Type": "image/svg+xml",
          "Cache-Control": "public, max-age=300",
        },
      });
    } else {
      const html = generateTrophyCardHTML(trophyData, type);
      return new Response(html, {
        headers: {
          ...corsHeaders,
          "Content-Type": "text/html",
          "Cache-Control": "public, max-age=300",
        },
      });
    }
  } catch (error) {
    console.error("Trophy card error:", error);
    const url = new URL(context.request.url);
    const debug = url.searchParams.get("debug") === "true";
    const fallbackData = getFallbackData(
      url.searchParams.get("type") || "month"
    );
    const format = url.searchParams.get("format") || "html";

    // If debug mode and error, show error details
    if (debug) {
      return new Response(
        JSON.stringify(
          { error: error.message, fallback: fallbackData },
          null,
          2
        ),
        {
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
        }
      );
    }

    if (format === "svg") {
      const svg = generateTrophyCardSVG(
        fallbackData,
        url.searchParams.get("type") || "month"
      );
      return new Response(svg, {
        headers: {
          ...corsHeaders,
          "Content-Type": "image/svg+xml",
          "Cache-Control": "public, max-age=60",
        },
      });
    } else {
      const html = generateTrophyCardHTML(
        fallbackData,
        url.searchParams.get("type") || "month"
      );
      return new Response(html, {
        headers: {
          ...corsHeaders,
          "Content-Type": "text/html",
          "Cache-Control": "public, max-age=60",
        },
      });
    }
  }
}

async function fetchTrophyData(context, type) {
  const SHEETS_API_KEY = context.env.GOOGLE_API_KEY;
  const SPREADSHEET_ID = context.env.GOOGLE_SHEET_ID;

  // Debug: Check what we're getting
  const debugInfo = {
    hasApiKey: !!SHEETS_API_KEY,
    apiKeyLength: SHEETS_API_KEY ? SHEETS_API_KEY.length : 0,
    hasSpreadsheetId: !!SPREADSHEET_ID,
    spreadsheetIdLength: SPREADSHEET_ID ? SPREADSHEET_ID.length : 0,
    envKeys: Object.keys(context.env || {}),
  };

  if (!SHEETS_API_KEY || !SPREADSHEET_ID) {
    throw new Error(
      `Missing API credentials - Debug: ${JSON.stringify(debugInfo)}`
    );
  }

  // Fetch from Records tab (A1:H5 to include all records)
  const range = "Records!A1:H5";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}?key=${SHEETS_API_KEY}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`);
  }

  const data = await response.json();
  const rows = data.values || [];

  if (rows.length < 5) {
    throw new Error(
      `Insufficient data in Records tab - found ${rows.length} rows, need 5`
    );
  }

  // Parse the Records tab data
  // Row 0: Headers
  // Row 1: "Record Type" header row
  // Row 2: Best Day
  // Row 3: Best Week
  // Row 4: Best Month

  const parseRecordRow = (row, rowType) => {
    // Debug: Store raw row data
    const rawData = {
      rowType: rowType,
      rawRow: row,
      columnB_Amount: row[1],
      columnC_Date: row[2],
      columnD_Trades: row[3],
      columnE_Period: row[4],
      columnF_Previous: row[5],
      columnG_BeatBy: row[6],
      columnH_LastUpdated: row[7],
    };

    // Handle potential missing columns
    const parsed = {
      amount: parseFloat((row[1] || "0").replace(/[$,]/g, "")),
      date: row[2] || "",
      trades: parseInt(row[3] || "0"),
      period: row[4] || "",
      previousAmount: parseFloat((row[5] || "0").replace(/[$,]/g, "")),
      beatBy: parseFloat((row[6] || "0").replace(/[$,]/g, "")),
      lastUpdated: row[7] || "",
      _debug: rawData, // Include raw data for debugging
    };

    return parsed;
  };

  const recordsData = {
    day: parseRecordRow(rows[2], "day"),
    week: parseRecordRow(rows[3], "week"),
    month: parseRecordRow(rows[4], "month"),
  };

  // Format data for the requested type
  const record = recordsData[type];

  // If period is empty for month, try to construct it from date
  let displayDate = record.period || record.date || `${type} Record`;

  // Special handling for month type
  if (type === "month") {
    // Handle "2025-07 2025" format or "2025-07" format
    if (displayDate.includes("2025-07") || record.date === "2025-07") {
      displayDate = "July 2025";
    } else if (displayDate.includes("2025-01") || record.date === "2025-01") {
      displayDate = "January 2025";
    } else if (record.date && record.date.match(/^\d{4}-\d{2}$/)) {
      // Handle YYYY-MM format
      const [year, month] = record.date.split("-");
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      displayDate = `${monthNames[parseInt(month) - 1]} ${year}`;
    } else if (!record.period && record.date) {
      // Try to extract month/year from date field
      const dateStr = record.date;
      if (dateStr.includes("/")) {
        // Format like "1/25/2025" -> "January 2025"
        const dateParts = dateStr.split("/");
        const monthNum = parseInt(dateParts[0]);
        const year = dateParts[2] || new Date().getFullYear();
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        displayDate = `${monthNames[monthNum - 1]} ${year}`;
      }
    }
  }

  return {
    date: displayDate,
    profit: record.amount,
    trades: record.trades,
    beatBy: record.beatBy,
    previous: record.previousAmount,
    lastUpdated: record.lastUpdated,
    _debug: record._debug, // Include debug info
  };
}

function getFallbackData(type) {
  // Based on your actual records from the spreadsheet
  const fallback = {
    day: {
      date: "Jan 25, 2025",
      profit: 129.03,
      trades: 17,
      beatBy: 0,
      previous: 129.03,
      lastUpdated: "9/29/2025, 5:54:10 PM",
    },
    week: {
      date: "Jan 25 - Jan 31, 2025",
      profit: 417.53,
      trades: 72,
      beatBy: 0,
      previous: 417.53,
      lastUpdated: "9/29/2025, 5:54:10 PM",
    },
    month: {
      date: "January 2025",
      profit: 817.31,
      trades: 112,
      beatBy: 0,
      previous: 817.31,
      lastUpdated: "9/29/2025, 5:54:10 PM",
    },
  };

  return fallback[type] || fallback.month;
}

function generateTrophyCardHTML(data, type) {
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

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${titles[type]} - MyRoboticTrader</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      /* Beautiful animated page background */
      background: linear-gradient(135deg, 
        #667eea 0%, 
        #764ba2 25%, 
        #f093fb 50%, 
        #f5576c 75%, 
        #4facfe 100%);
      background-size: 400% 400%;
      animation: gradientShift 15s ease infinite;
    }
    
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    .card-container {
      width: 600px;
      height: 350px;
      border-radius: 24px;
      background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e293b 100%);
      position: relative;
      overflow: hidden;
      box-shadow: 
        0 25px 50px -12px rgba(0, 0, 0, 0.5),
        0 0 100px rgba(251, 191, 36, 0.2);
    }
    
    .corner-accent {
      position: absolute;
      width: 100px;
      height: 3px;
      background: linear-gradient(90deg, #fbbf24, #f59e0b, #d97706);
      opacity: 0.6;
    }
    
    .corner-accent.top-left {
      top: 0;
      left: 0;
      border-radius: 24px 0 0 0;
    }
    
    .corner-accent.top-right {
      top: 0;
      right: 0;
      border-radius: 0 24px 0 0;
    }
    
    .trophy-icon {
      position: absolute;
      top: 35px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      background: rgba(251, 191, 36, 0.2);
      border-radius: 50%;
    }
    
    .title {
      position: absolute;
      top: 100px;
      width: 100%;
      text-align: center;
      font-size: 28px;
      font-weight: bold;
      background: linear-gradient(90deg, #fbbf24, #f59e0b, #d97706);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: 1.5px;
    }
    
    .subtitle {
      position: absolute;
      top: 135px;
      width: 100%;
      text-align: center;
      color: rgba(255, 255, 255, 0.7);
      font-size: 13px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    
    .date-period {
      position: absolute;
      top: 165px;
      width: 100%;
      text-align: center;
      color: rgba(255, 255, 255, 0.9);
      font-size: 18px;
      font-weight: 600;
    }
    
    .profit-amount {
      position: absolute;
      top: 190px;
      width: 100%;
      text-align: center;
      font-size: 44px;
      font-weight: bold;
      color: #10b981;
      font-family: 'SF Mono', Monaco, monospace;
      text-shadow: 0 0 30px rgba(16, 185, 129, 0.3);
    }
    
    .badges {
      position: absolute;
      bottom: 35px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 20px;
      justify-content: center;
      width: auto;
    }
    
    .badge {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 12px;
      padding: 12px 20px;
      text-align: center;
      min-width: 150px;
    }
    
    .badge.beat-previous {
      border: 2px solid rgba(16, 185, 129, 0.3);
      min-width: 200px;
    }
    
    .badge-value {
      font-size: 24px;
      font-weight: bold;
      color: white;
      font-family: 'SF Mono', Monaco, monospace;
    }
    
    .badge-value.green {
      color: #10b981;
    }
    
    .badge-label {
      font-size: 10px;
      color: rgba(255, 255, 255, 0.7);
      margin-top: 4px;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
    
    .branding {
      position: absolute;
      bottom: 20px;
      right: 40px;
      color: rgba(255, 255, 255, 0.35);
      font-size: 11px;
    }
    
    .sparkle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: #fbbf24;
      border-radius: 50%;
      animation: sparkle 3s ease-in-out infinite;
    }
    
    .sparkle:nth-child(1) {
      top: 140px;
      left: 50px;
      animation-delay: 0s;
    }
    
    .sparkle:nth-child(2) {
      top: 160px;
      right: 50px;
      animation-delay: 0.5s;
    }
    
    .sparkle:nth-child(3) {
      bottom: 100px;
      left: 80px;
      animation-delay: 1s;
      width: 3px;
      height: 3px;
    }
    
    .sparkle:nth-child(4) {
      bottom: 120px;
      right: 80px;
      animation-delay: 1.5s;
      width: 3px;
      height: 3px;
    }
    
    @keyframes sparkle {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }
  </style>
</head>
<body>
  <div class="card-container">
    <div class="corner-accent top-left"></div>
    <div class="corner-accent top-right"></div>
    
    <div class="trophy-icon">🏆</div>
    
    <div class="title">${titles[type]}</div>
    <div class="subtitle">${subtitles[type]}</div>
    
    <div class="date-period">${data.date}</div>
    <div class="profit-amount">$${data.profit.toFixed(2)}</div>
    
    <div class="badges">
      <div class="badge">
        <div class="badge-value">${data.trades}</div>
        <div class="badge-label">TRADES</div>
      </div>
      
      ${
        isNewRecord && data.beatBy > 0
          ? `
      <div class="badge beat-previous">
        <div class="badge-value green">+$${data.beatBy.toFixed(2)}</div>
        <div class="badge-label">BEAT PREVIOUS BY</div>
      </div>
      `
          : `
      <div class="badge">
        <div class="badge-value">$${data.previous.toFixed(2)}</div>
        <div class="badge-label">PREVIOUS BEST</div>
      </div>
      `
      }
    </div>
    
    <div class="branding">MyRoboticTrader.com</div>
    
    <div class="sparkle"></div>
    <div class="sparkle"></div>
    <div class="sparkle"></div>
    <div class="sparkle"></div>
  </div>
</body>
</html>`;
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

  // Return pure SVG without HTML wrapper
  return `<svg width="600" height="350" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background gradient -->
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e1b4b;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#312e81;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1e293b;stop-opacity:1" />
    </linearGradient>
    
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
  </defs>
  
  <!-- Full background with gradient -->
  <rect width="600" height="350" fill="url(#bgGradient)" rx="24"/>
  
  <!-- Decorative corner accents -->
  <path d="M 0,24 Q 0,0 24,0 L 100,0" stroke="url(#goldGradient)" stroke-width="3" fill="none" opacity="0.6"/>
  <path d="M 600,24 Q 600,0 576,0 L 500,0" stroke="url(#goldGradient)" stroke-width="3" fill="none" opacity="0.6"/>
  
  <!-- Trophy icon (top center) -->
  <g transform="translate(275, 35)">
    <circle cx="25" cy="25" r="22" fill="url(#goldGradient)" opacity="0.2"/>
    <text x="25" y="37" text-anchor="middle" font-size="32" fill="url(#goldGradient)">🏆</text>
  </g>
  
  <!-- Title -->
  <text x="300" y="125" text-anchor="middle" font-size="28" font-weight="bold" fill="url(#goldGradient)" font-family="Arial, sans-serif" letter-spacing="1.5">${
    titles[type]
  }</text>
  
  <!-- Subtitle -->
  <text x="300" y="148" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="13" font-weight="600" font-family="Arial, sans-serif" letter-spacing="2">${subtitles[
    type
  ].toUpperCase()}</text>
  
  <!-- Date/Period -->
  <text x="300" y="178" text-anchor="middle" fill="rgba(255,255,255,0.9)" font-size="17" font-weight="600" font-family="Arial, sans-serif">${
    data.date
  }</text>
  
  <!-- Profit amount (adjusted spacing) -->
  <text x="300" y="220" text-anchor="middle" fill="#10b981" font-size="44" font-weight="bold" font-family="Arial, monospace">${data.profit.toFixed(
    2
  )}</text>
  
  <!-- Badges properly centered -->
  <g transform="translate(${isNewRecord ? "115" : "155"}, 260)">
    <!-- Trades executed -->
    <rect x="0" y="0" width="140" height="55" fill="rgba(255,255,255,0.08)" rx="12" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
    <text x="70" y="28" text-anchor="middle" fill="white" font-size="22" font-weight="bold" font-family="Arial, monospace">${
      data.trades
    }</text>
    <text x="70" y="44" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="10" font-weight="600" font-family="Arial, sans-serif">TRADES</text>
    
    ${
      isNewRecord && data.beatBy > 0
        ? `
    <!-- Beat previous by -->
    <rect x="150" y="0" width="180" height="55" fill="rgba(255,255,255,0.08)" rx="12" stroke="rgba(16,185,129,0.3)" stroke-width="2"/>
    <text x="240" y="28" text-anchor="middle" fill="#10b981" font-size="22" font-weight="bold" font-family="Arial, monospace">+${data.beatBy.toFixed(
      2
    )}</text>
    <text x="240" y="44" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="10" font-weight="600" font-family="Arial, sans-serif">BEAT PREVIOUS BY</text>
    `
        : `
    <!-- Previous record -->
    <rect x="150" y="0" width="150" height="55" fill="rgba(255,255,255,0.08)" rx="12" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
    <text x="225" y="28" text-anchor="middle" fill="white" font-size="18" font-weight="bold" font-family="Arial, monospace">${data.previous.toFixed(
      2
    )}</text>
    <text x="225" y="44" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="10" font-weight="600" font-family="Arial, sans-serif">PREVIOUS BEST</text>
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
