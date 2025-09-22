// /functions/api/metric-card.js
// Generates trading metric cards as images for social media
// Add this at the top of your existing metric-card.js function
const url = new URL(context.request.url);
const wantsSVG =
  url.pathname.includes(".png") || url.searchParams.get("format") === "svg";

if (wantsSVG) {
  const svg = generateMetricCardSVG(tradingData);
  return new Response(svg, {
    headers: {
      ...corsHeaders,
      "Content-Type": "image/svg+xml",
    },
  });
}
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
    // Fetch your trading data (you'll need to implement this)
    const tradingData = await fetchTradingData();

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
