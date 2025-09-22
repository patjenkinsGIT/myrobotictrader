// /functions/api/metric-card.png.js
// Generates PNG images of trading metric cards for social media

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
    // Get trading data (reuse logic from existing metric-card function)
    const tradingData = await fetchTradingData(context);

    // Generate PNG using Canvas API
    const imageBuffer = await generateMetricCardPNG(tradingData);

    return new Response(imageBuffer, {
      headers: {
        ...corsHeaders,
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=300", // 5 minute cache
      },
    });
  } catch (error) {
    console.error("PNG generation error:", error);
    return new Response("Image generation failed", {
      status: 500,
      headers: corsHeaders,
    });
  }
}

async function fetchTradingData(context) {
  // Fetch from Google Sheets or use fallback data
  // This can reuse the same logic from your existing metric-card function
  return {
    monthlyProfit: 200.65,
    totalProfit: 4169.18,
    tradesThisMonth: 36,
    deploymentRatio: 39,
    month: "September",
  };
}

async function generateMetricCardPNG(data) {
  // Create canvas - 600x350px to match your HTML version
  const canvas = new OffscreenCanvas(600, 350);
  const ctx = canvas.getContext("2d");

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, 600, 350);
  gradient.addColorStop(0, "#1e1b4b");
  gradient.addColorStop(0.5, "#312e81");
  gradient.addColorStop(1, "#1e40af");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 600, 350);

  // Add glassmorphism effect
  ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
  roundRect(ctx, 20, 20, 560, 310, 24);
  ctx.fill();

  // Border
  ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
  ctx.lineWidth = 1;
  roundRect(ctx, 20, 20, 560, 310, 24);
  ctx.stroke();

  // Header section
  ctx.fillStyle = "#ffffff";
  ctx.font =
    'bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText("🤖 AI Trading Results", 50, 70);

  ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
  ctx.font =
    '16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText(`${data.month} 2025 Performance`, 50, 95);

  // Main profit display
  ctx.fillStyle = "#10b981";
  ctx.font = 'bold 60px "SF Mono", Monaco, "Cascadia Code", monospace';
  ctx.textAlign = "center";
  ctx.fillText(`$${data.monthlyProfit.toFixed(2)}`, 300, 180);

  ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
  ctx.font =
    '16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText("MONTHLY PROFIT", 300, 205);

  // Stats cards
  drawStatCard(ctx, 80, 250, "36", "TRADES");
  drawStatCard(
    ctx,
    240,
    250,
    `$${data.totalProfit.toFixed(2)}`,
    "TOTAL PROFIT"
  );
  drawStatCard(ctx, 400, 250, `${data.deploymentRatio}%`, "DEPLOYED");

  // Watermark
  ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
  ctx.font =
    '11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.textAlign = "right";
  ctx.fillText("MyRoboticTrader.com", 560, 325);

  // Convert canvas to PNG buffer
  const blob = await canvas.convertToBlob({ type: "image/png" });
  return await blob.arrayBuffer();
}

// Helper function to draw rounded rectangles
function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

// Helper function to draw stat cards
function drawStatCard(ctx, x, y, value, label) {
  // Card background
  ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
  roundRect(ctx, x - 60, y - 25, 120, 70, 16);
  ctx.fill();

  // Card border
  ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
  ctx.lineWidth = 1;
  roundRect(ctx, x - 60, y - 25, 120, 70, 16);
  ctx.stroke();

  // Top accent line
  const gradient = ctx.createLinearGradient(x - 60, y - 25, x + 60, y - 25);
  gradient.addColorStop(0, "#8b5cf6");
  gradient.addColorStop(1, "#3b82f6");
  ctx.fillStyle = gradient;
  ctx.fillRect(x - 60, y - 25, 120, 2);

  // Value
  ctx.fillStyle = "#ffffff";
  ctx.font = 'bold 20px "SF Mono", Monaco, "Cascadia Code", monospace';
  ctx.textAlign = "center";
  ctx.fillText(value, x, y + 5);

  // Label
  ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
  ctx.font =
    '10px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText(label, x, y + 25);
}
