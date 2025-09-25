// /functions/api/metric-card.png.js
// Simple SVG-based metric card generator

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
    // Get trading data
    const tradingData = await fetchTradingData(context);

    // Generate SVG
    const svg = generateMetricCardSVG(tradingData);

    return new Response(svg, {
      headers: {
        ...corsHeaders,
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=300",
      },
    });
  } catch (error) {
    console.error("SVG generation error:", error);
    return new Response("Image generation failed", {
      status: 500,
      headers: corsHeaders,
    });
  }
}

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
        tradesThisMonth: 45,
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
