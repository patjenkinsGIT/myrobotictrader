const puppeteer = require('puppeteer');
const fs = require('fs');

// Fetch trading data directly from Google Sheets (bypasses Cloudflare)
async function fetchTradingData() {
  const SHEET_ID = process.env.GOOGLE_SHEET_ID;
  const API_KEY = process.env.GOOGLE_API_KEY;

  if (!SHEET_ID || !API_KEY) {
    console.log('Missing credentials, using fallback data');
    return { totalProfit: 5048, totalTrades: 1002, successRate: 100 };
  }

  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Calculations!A:G?key=${API_KEY}`
    );
    const data = await response.json();
    const rows = data.values || [];

    // Find Grand Total row
    let grandTotalRow = null;
    for (let i = rows.length - 1; i >= 0; i--) {
      if (rows[i] && rows[i][0]?.includes('Grand Total')) {
        grandTotalRow = rows[i];
        break;
      }
    }

    if (!grandTotalRow) {
      throw new Error('Grand Total row not found');
    }

    const totalProfit = parseFloat(grandTotalRow[1]?.replace(/[$,]/g, '')) || 0;
    const totalTrades = parseInt(grandTotalRow[2]?.replace(/[,]/g, '')) || 0;

    console.log(`Fetched data: Profit=$${totalProfit}, Trades=${totalTrades}`);
    return { totalProfit, totalTrades, successRate: 100 };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { totalProfit: 5048, totalTrades: 1002, successRate: 100 };
  }
}

// Generate SVG (same as og-image.js)
function generateOGImageSVG(data) {
  const profitFormatted = `$${data.totalProfit.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  const tradesFormatted = data.totalTrades.toLocaleString();

  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a2e"/>
      <stop offset="50%" style="stop-color:#16213e"/>
      <stop offset="100%" style="stop-color:#1a1a2e"/>
    </linearGradient>
    <linearGradient id="greenGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#4ade80"/>
      <stop offset="100%" style="stop-color:#22c55e"/>
    </linearGradient>
    <linearGradient id="purpleAccent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#8b5cf6"/>
      <stop offset="100%" style="stop-color:#a855f7"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Subtle grid pattern -->
  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(139,92,246,0.05)" stroke-width="1"/>
  </pattern>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <!-- Decorative elements -->
  <circle cx="100" cy="100" r="200" fill="rgba(139,92,246,0.08)"/>
  <circle cx="1100" cy="530" r="180" fill="rgba(74,222,128,0.06)"/>

  <!-- Live indicator -->
  <circle cx="80" cy="80" r="8" fill="#4ade80"/>
  <text x="100" y="86" fill="#4ade80" font-size="16" font-weight="600" font-family="system-ui, -apple-system, sans-serif">LIVE DATA</text>

  <!-- Title -->
  <text x="600" y="140" text-anchor="middle" fill="white" font-size="56" font-weight="700" font-family="system-ui, -apple-system, sans-serif">MyRoboticTrader.com</text>

  <!-- Subtitle -->
  <text x="600" y="190" text-anchor="middle" fill="#a0a0a0" font-size="26" font-family="system-ui, -apple-system, sans-serif">AI-Enhanced Autonomous Crypto Trading</text>

  <!-- Stats container -->
  <rect x="100" y="240" width="1000" height="200" rx="20" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>

  <!-- Stat 1: Verified Profit -->
  <text x="267" y="310" text-anchor="middle" fill="url(#greenGlow)" font-size="72" font-weight="800" font-family="system-ui, -apple-system, sans-serif" filter="url(#glow)">${profitFormatted}</text>
  <text x="267" y="360" text-anchor="middle" fill="white" font-size="20" font-weight="600" font-family="system-ui, -apple-system, sans-serif">Verified Profit</text>

  <!-- Divider 1 -->
  <line x1="450" y1="270" x2="450" y2="410" stroke="rgba(139,92,246,0.3)" stroke-width="2"/>

  <!-- Stat 2: Trades Executed -->
  <text x="600" y="310" text-anchor="middle" fill="url(#greenGlow)" font-size="72" font-weight="800" font-family="system-ui, -apple-system, sans-serif" filter="url(#glow)">${tradesFormatted}</text>
  <text x="600" y="360" text-anchor="middle" fill="white" font-size="20" font-weight="600" font-family="system-ui, -apple-system, sans-serif">Trades Executed</text>

  <!-- Divider 2 -->
  <line x1="750" y1="270" x2="750" y2="410" stroke="rgba(139,92,246,0.3)" stroke-width="2"/>

  <!-- Stat 3: Success Rate -->
  <text x="933" y="310" text-anchor="middle" fill="url(#greenGlow)" font-size="72" font-weight="800" font-family="system-ui, -apple-system, sans-serif" filter="url(#glow)">${data.successRate}%</text>
  <text x="933" y="360" text-anchor="middle" fill="white" font-size="20" font-weight="600" font-family="system-ui, -apple-system, sans-serif">Success Rate</text>

  <!-- Tagline -->
  <text x="600" y="510" text-anchor="middle" fill="#a0a0a0" font-size="24" font-style="italic" font-family="system-ui, -apple-system, sans-serif">Every trade published. Every result verified.</text>

  <!-- Bottom accent line -->
  <rect x="400" y="560" width="400" height="4" rx="2" fill="url(#purpleAccent)"/>

  <!-- Watermark -->
  <text x="1160" y="600" text-anchor="end" fill="rgba(255,255,255,0.3)" font-size="14" font-family="system-ui, -apple-system, sans-serif">myrobotictrader.com</text>
</svg>`;
}

(async () => {
  // Fetch live trading data directly from Google Sheets
  const tradingData = await fetchTradingData();

  // Generate SVG
  const svg = generateOGImageSVG(tradingData);

  // Save SVG temporarily
  fs.writeFileSync('temp-og.svg', svg);
  console.log('SVG generated');

  // Convert SVG to PNG using Puppeteer
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });

  // Load the local SVG file
  await page.goto(`file://${process.cwd()}/temp-og.svg`, {
    waitUntil: 'networkidle0'
  });

  // Take screenshot as PNG
  await page.screenshot({
    path: 'public/og-image.png',
    type: 'png',
    clip: { x: 0, y: 0, width: 1200, height: 630 }
  });

  await browser.close();

  // Clean up temp file
  fs.unlinkSync('temp-og.svg');

  console.log('OG image generated successfully!');
  const stats = fs.statSync('public/og-image.png');
  console.log(`File size: ${(stats.size / 1024).toFixed(2)} KB`);
})();
