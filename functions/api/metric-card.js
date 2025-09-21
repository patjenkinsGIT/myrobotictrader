// /functions/api/metric-card.js
// Generates trading metric cards as images for social media

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

    // Generate the metric card HTML
    const cardHtml = generateMetricCardHtml(tradingData, month, type);

    // Convert HTML to image using a service or return HTML for now
    // For now, we'll return the HTML that can be screenshot
    return new Response(cardHtml, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/html",
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

function generateMetricCardHtml(data, month, type) {
  const backgroundColor = "#1a1527"; // Your brand purple
  const accentColor = "#10b981"; // Green for profits
  const textColor = "#ffffff";
  const subTextColor = "#a1a1aa";

  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: ${backgroundColor};
            color: ${textColor};
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 20px;
        }
        
        .metric-card {
            width: 600px;
            height: 315px;
            background: linear-gradient(135deg, ${backgroundColor} 0%, #2d1b3d 100%);
            border-radius: 20px;
            padding: 40px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            position: relative;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }
        
        .header {
            grid-column: 1 / -1;
            text-align: center;
            margin-bottom: 20px;
        }
        
        .title {
            font-size: 24px;
            font-weight: 700;
            color: ${textColor};
            margin-bottom: 8px;
        }
        
        .subtitle {
            font-size: 14px;
            color: ${subTextColor};
            font-weight: 400;
        }
        
        .main-metric {
            text-align: center;
            grid-column: 1 / -1;
        }
        
        .main-value {
            font-size: 48px;
            font-weight: 700;
            color: ${accentColor};
            line-height: 1;
            margin-bottom: 8px;
        }
        
        .main-label {
            font-size: 16px;
            color: ${subTextColor};
            font-weight: 500;
        }
        
        .stats-grid {
            grid-column: 1 / -1;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-top: 20px;
        }
        
        .stat-item {
            text-align: center;
            padding: 15px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .stat-value {
            font-size: 20px;
            font-weight: 700;
            color: ${textColor};
            margin-bottom: 4px;
        }
        
        .stat-label {
            font-size: 12px;
            color: ${subTextColor};
            font-weight: 500;
        }
        
        .branding {
            position: absolute;
            bottom: 15px;
            right: 20px;
            font-size: 12px;
            color: ${subTextColor};
            font-weight: 500;
        }
        
        .accent-dot {
            width: 8px;
            height: 8px;
            background: ${accentColor};
            border-radius: 50%;
            display: inline-block;
            margin-right: 8px;
            position: relative;
            top: -1px;
        }
    </style>
</head>
<body>
    <div class="metric-card">
        <div class="header">
            <div class="title">
                <span class="accent-dot"></span>
                AI Trading Results
            </div>
            <div class="subtitle">${data.month} 2025 Performance</div>
        </div>
        
        <div class="main-metric">
            <div class="main-value">$${data.monthlyProfit.toLocaleString()}</div>
            <div class="main-label">Monthly Profit</div>
        </div>
        
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-value">${data.tradesThisMonth}</div>
                <div class="stat-label">Trades</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">$${data.totalProfit.toLocaleString()}</div>
                <div class="stat-label">Total Profit</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${data.deploymentRatio}%</div>
                <div class="stat-label">Deployed</div>
            </div>
        </div>
        
        <div class="branding">MyRoboticTrader.com</div>
    </div>
</body>
</html>
  `;
}
