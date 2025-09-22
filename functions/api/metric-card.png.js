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

async function fetchTradingData(context) {
  // Use fallback data for now - can integrate Google Sheets later
  return {
    monthlyProfit: 200.65,
    totalProfit: 4169.18,
    tradesThisMonth: 36,
    deploymentRatio: 39,
    month: "September",
  };
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
