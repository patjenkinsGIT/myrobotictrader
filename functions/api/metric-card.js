// /functions/api/metric-card.js
// Generates trading metric cards as HTML or SVG for social media

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const month = url.searchParams.get("month") || "current";
  const type = url.searchParams.get("type") || "monthly";

  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Fetch your trading data
    const tradingData = await fetchTradingData();

    // Check if SVG format is requested
    const wantsSVG =
      url.pathname.includes(".png") || url.searchParams.get("format") === "svg";

    if (wantsSVG) {
      const svg = generateMetricCardSVG(tradingData);
      return new Response(svg, {
        headers: {
          ...corsHeaders,
          "Content-Type": "image/svg+xml",
          "Cache-Control": "public, max-age=300",
        },
      });
    }

    // Generate the enhanced metric card HTML
    const cardHtml = generateEnhancedMetricCardHtml(tradingData, month, type);

    return new Response(cardHtml, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/html",
        "Cache-Control": "public, max-age=300", // 5 minute cache
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to generate metric card" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
}

// Mock trading data - replace with actual Google Sheets fetch
async function fetchTradingData() {
  try {
    const SHEET_ID = process.env.GOOGLE_SHEET_ID;
    const API_KEY = process.env.GOOGLE_API_KEY;
    const CALCULATIONS_TAB = "Calculations";
    const CALCULATIONS_RANGE = "A:G";

    if (!SHEET_ID || !API_KEY) {
      // Fallback to mock data if credentials missing
      return {
        monthlyProfit: 200.65,
        totalProfit: 4169.18,
        tradesThisMonth: 36,
        totalTrades: 875,
        month: "September",
        deploymentRatio: 39,
        avgProfitPerTrade: 4.76,
        successRate: 100,
      };
    }

    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${CALCULATIONS_TAB}!${CALCULATIONS_RANGE}?key=${API_KEY}`
    );

    const data = await response.json();
    const rows = data.values || [];

    // Find Grand Total row
    let grandTotalRow = null;
    for (let i = rows.length - 1; i >= 0; i--) {
      if (rows[i] && rows[i][0]?.includes("Grand Total")) {
        grandTotalRow = rows[i];
        break;
      }
    }

    if (!grandTotalRow) {
      throw new Error("Grand Total row not found");
    }

    // Parse the Grand Total data
    const totalProfit = parseFloat(grandTotalRow[1]?.replace(/[$,]/g, "")) || 0;
    const totalTrades = parseInt(grandTotalRow[2]?.replace(/[,]/g, "")) || 0;
    const avgProfitPerTrade =
      parseFloat(grandTotalRow[3]?.replace(/[$,]/g, "")) || 0;
    const monthlyAverage =
      parseFloat(grandTotalRow[4]?.replace(/[$,]/g, "")) || 0;

    // Get current month's data (last row before Grand Total)
    const lastMonthIndex = rows.length - 2;
    const currentMonthRow = rows[lastMonthIndex];
    const monthlyProfit =
      parseFloat(currentMonthRow[1]?.replace(/[$,]/g, "")) || 0;
    const tradesThisMonth =
      parseInt(currentMonthRow[2]?.replace(/[,]/g, "")) || 0;

    // Get month name
    const currentDate = new Date();
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
    const month = monthNames[currentDate.getMonth()];

    return {
      monthlyProfit,
      totalProfit,
      tradesThisMonth,
      totalTrades,
      month,
      deploymentRatio: 39, // You can add this to Sheets if needed
      avgProfitPerTrade,
      successRate: 100,
    };
  } catch (error) {
    console.error("Error fetching trading data:", error);
    // Return fallback data on error
    return {
      monthlyProfit: 200.65,
      totalProfit: 4169.18,
      tradesThisMonth: 36,
      totalTrades: 875,
      month: "September",
      deploymentRatio: 39,
      avgProfitPerTrade: 4.76,
      successRate: 100,
    };
  }
}
function generateMetricCardSVG(data) {
  return `
<svg width="600" height="350" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background gradient -->
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e1b4b"/>
      <stop offset="50%" style="stop-color:#312e81"/>
      <stop offset="100%" style="stop-color:#1e40af"/>
    </linearGradient>
    
    <!-- Profit gradient -->
    <linearGradient id="profit" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#10b981"/>
      <stop offset="100%" style="stop-color:#34d399"/>
    </linearGradient>
    
    <!-- Stat card accent -->
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#8b5cf6"/>
      <stop offset="100%" style="stop-color:#3b82f6"/>
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="600" height="350" fill="url(#bg)" rx="24"/>
  
  <!-- Main card background -->
  <rect x="20" y="20" width="560" height="310" fill="rgba(255,255,255,0.08)" rx="24" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
  
  <!-- Status indicator -->
  <circle cx="50" cy="60" r="6" fill="#10b981" opacity="0.8">
    <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite"/>
  </circle>
  
  <!-- Header -->
  <text x="70" y="70" fill="white" font-size="24" font-weight="bold" font-family="Arial, sans-serif">AI Trading Results</text>
  <text x="70" y="95" fill="rgba(255,255,255,0.7)" font-size="16" font-family="Arial, sans-serif">${
    data.month
  } 2025 Performance</text>
  
  <!-- Main profit amount -->
  <text x="300" y="180" text-anchor="middle" fill="url(#profit)" font-size="60" font-weight="bold" font-family="Arial, monospace">$${data.monthlyProfit.toFixed(
    2
  )}</text>
  <text x="300" y="205" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="16" font-weight="600" font-family="Arial, sans-serif">MONTHLY PROFIT</text>
  
  <!-- Stat Cards Background -->
  <rect x="60" y="240" width="120" height="70" fill="rgba(255,255,255,0.08)" rx="16" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
  <rect x="60" y="240" width="120" height="2" fill="url(#accent)" rx="1"/>
  
  <rect x="240" y="240" width="120" height="70" fill="rgba(255,255,255,0.08)" rx="16" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
  <rect x="240" y="240" width="120" height="2" fill="url(#accent)" rx="1"/>
  
  <rect x="420" y="240" width="120" height="70" fill="rgba(255,255,255,0.08)" rx="16" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
  <rect x="420" y="240" width="120" height="2" fill="url(#accent)" rx="1"/>
  
  <!-- Stat Values and Labels -->
  <text x="120" y="275" text-anchor="middle" fill="white" font-size="22" font-weight="bold" font-family="Arial, monospace">${
    data.tradesThisMonth
  }</text>
  <text x="120" y="295" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="11" font-weight="600" font-family="Arial, sans-serif">TRADES</text>
  
  <text x="300" y="275" text-anchor="middle" fill="white" font-size="22" font-weight="bold" font-family="Arial, monospace">$${data.totalProfit.toFixed(
    2
  )}</text>
  <text x="300" y="295" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="11" font-weight="600" font-family="Arial, sans-serif">TOTAL PROFIT</text>
  
  <text x="480" y="275" text-anchor="middle" fill="white" font-size="22" font-weight="bold" font-family="Arial, monospace">${
    data.deploymentRatio
  }%</text>
  <text x="480" y="295" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="11" font-weight="600" font-family="Arial, sans-serif">DEPLOYED</text>
  
  <!-- Watermark -->
  <text x="560" y="325" text-anchor="end" fill="rgba(255,255,255,0.35)" font-size="11" font-family="Arial, sans-serif">MyRoboticTrader.com</text>
</svg>`;
}

function generateEnhancedMetricCardHtml(data, month, type) {
  return `
<!DOCTYPE html>
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
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e40af 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }
        
        .metric-card {
            width: 600px;
            height: 350px;
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 24px;
            padding: 32px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            display: flex;
            flex-direction: column;
        }
        
        .metric-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
            border-radius: 24px;
            z-index: -1;
        }
        
        .header {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            position: relative;
        }
        
        .status-indicator {
            width: 12px;
            height: 12px;
            background: #10b981;
            border-radius: 50%;
            margin-right: 12px;
            box-shadow: 0 0 12px rgba(16, 185, 129, 0.5);
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }
        
        .title {
            color: white;
            font-size: 24px;
            font-weight: 700;
            letter-spacing: -0.025em;
            margin: 0;
        }
        
        .subtitle {
            color: rgba(255, 255, 255, 0.7);
            font-size: 16px;
            font-weight: 500;
            margin: 0;
            margin-top: 4px;
        }
        
        .main-metric {
            text-align: center;
            margin: 20px 0 25px 0;
            flex-shrink: 0;
        }
        
        .profit-amount {
            font-size: 60px;
            font-weight: 800;
            background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1;
            margin-bottom: 8px;
            font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
            letter-spacing: -0.02em;
        }
        
        .profit-label {
            color: rgba(255, 255, 255, 0.8);
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 0.025em;
            text-transform: uppercase;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
            margin-top: auto;
            margin-bottom: 30px;
        }
        
        .stat-item {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 16px;
            padding: 16px 12px;
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            min-height: 70px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        .stat-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, #8b5cf6 0%, #3b82f6 100%);
            opacity: 0.7;
        }
        
        .stat-value {
            font-size: 20px;
            font-weight: 700;
            color: white;
            margin-bottom: 4px;
            font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
            line-height: 1.1;
        }
        
        .stat-label {
            font-size: 10px;
            color: rgba(255, 255, 255, 0.7);
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            line-height: 1.2;
        }
        
        .watermark {
            position: absolute;
            bottom: 8px;
            right: 20px;
            color: rgba(255, 255, 255, 0.35);
            font-size: 10px;
            font-weight: 500;
            letter-spacing: 0.025em;
            z-index: 10;
        }
    </style>
</head>
<body>
    <div class="metric-card">        
        <div class="header">
            <div class="status-indicator"></div>
            <div>
                <h1 class="title">AI Trading Results</h1>
                <p class="subtitle">${data.month} 2025 Performance</p>
            </div>
        </div>
        
        <div class="main-metric">
            <div class="profit-amount">$${data.monthlyProfit.toFixed(2)}</div>
            <div class="profit-label">Monthly Profit</div>
        </div>
        
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-value">${data.tradesThisMonth}</div>
                <div class="stat-label">Trades</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">$${data.totalProfit.toFixed(2)}</div>
                <div class="stat-label">Total Profit</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${data.deploymentRatio}%</div>
                <div class="stat-label">Deployed</div>
            </div>
        </div>
        
        <div class="watermark">MyRoboticTrader.com</div>
    </div>
</body>
</html>
  `;
}
