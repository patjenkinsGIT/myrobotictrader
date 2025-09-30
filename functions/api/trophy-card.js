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

    // Fetch trading data
    const trophyData = await fetchTrophyData(context, type);

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
    const fallbackData = getFallbackData(
      url.searchParams.get("type") || "month"
    );
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

async function fetchTrophyData(context, type) {
  // This would fetch from your Google Sheets
  // For now, using example data
  const exampleData = {
    day: {
      date: "Sep 15, 2024",
      profit: 187.42,
      trades: 8,
      beatBy: 23.15,
      previous: 164.27,
    },
    week: {
      date: "Sep 9-15, 2024",
      profit: 624.18,
      trades: 42,
      beatBy: 89.33,
      previous: 534.85,
    },
    month: {
      date: "September 2024",
      profit: 1847.32,
      trades: 168,
      beatBy: 234.67,
      previous: 1612.65,
    },
  };

  return exampleData[type] || exampleData.month;
}

function getFallbackData(type) {
  const fallback = {
    day: {
      date: "Loading...",
      profit: 187.42,
      trades: 8,
      beatBy: 23.15,
      previous: 164.27,
    },
    week: {
      date: "Loading...",
      profit: 624.18,
      trades: 42,
      beatBy: 89.33,
      previous: 534.85,
    },
    month: {
      date: "Loading...",
      profit: 1847.32,
      trades: 168,
      beatBy: 234.67,
      previous: 1612.65,
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
      /* Beautiful page background gradient */
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
      top: 195px;
      width: 100%;
      text-align: center;
      font-size: 48px;
      font-weight: bold;
      color: #10b981;
      font-family: 'SF Mono', Monaco, monospace;
      text-shadow: 0 0 30px rgba(16, 185, 129, 0.3);
    }
    
    .badges {
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 20px;
      width: ${isNewRecord ? "420px" : "235px"};
    }
    
    .badge {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 12px;
      padding: 12px 20px;
      text-align: center;
      flex: 1;
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
  <text x="300" y="180" text-anchor="middle" fill="rgba(255,255,255,0.9)" font-size="18" font-weight="600" font-family="Arial, sans-serif">${
    data.date
  }</text>
  
  <!-- Profit amount -->
  <text x="300" y="230" text-anchor="middle" fill="#10b981" font-size="48" font-weight="bold" font-family="Arial, monospace">$${data.profit.toFixed(
    2
  )}</text>
  
  <!-- Badges -->
  <g transform="translate(${isNewRecord ? "90" : "185"}, 270)">
    <!-- Trades executed -->
    <rect x="0" y="0" width="150" height="60" fill="rgba(255,255,255,0.08)" rx="12" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
    <text x="75" y="30" text-anchor="middle" fill="white" font-size="24" font-weight="bold" font-family="Arial, monospace">${
      data.trades
    }</text>
    <text x="75" y="48" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="10" font-weight="600" font-family="Arial, sans-serif">TRADES</text>
    
    ${
      isNewRecord && data.beatBy > 0
        ? `
    <!-- Beat previous by -->
    <rect x="170" y="0" width="200" height="60" fill="rgba(255,255,255,0.08)" rx="12" stroke="rgba(16,185,129,0.3)" stroke-width="2"/>
    <text x="270" y="30" text-anchor="middle" fill="#10b981" font-size="24" font-weight="bold" font-family="Arial, monospace">+$${data.beatBy.toFixed(
      2
    )}</text>
    <text x="270" y="48" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="10" font-weight="600" font-family="Arial, sans-serif">BEAT PREVIOUS BY</text>
    `
        : `
    <!-- Previous record -->
    <rect x="170" y="0" width="180" height="60" fill="rgba(255,255,255,0.08)" rx="12" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
    <text x="260" y="30" text-anchor="middle" fill="white" font-size="20" font-weight="bold" font-family="Arial, monospace">$${data.previous.toFixed(
      2
    )}</text>
    <text x="260" y="48" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="10" font-weight="600" font-family="Arial, sans-serif">PREVIOUS BEST</text>
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
