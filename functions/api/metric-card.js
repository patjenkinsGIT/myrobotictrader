export default {
  async fetch(request, env, ctx) {
    try {
      // Get your live trading data from Google Sheets
      const GOOGLE_SHEET_ID = env.VITE_GOOGLE_SHEET_ID || "your-sheet-id";
      const GOOGLE_API_KEY = env.VITE_GOOGLE_API_KEY || "your-api-key";

      let tradingData = {
        monthlyProfit: 200.65,
        totalProfit: 4169.18,
        trades: 36,
        deployedPercent: 39,
        month: "September 2025",
      };

      // Fetch live data if API credentials are available
      if (GOOGLE_SHEET_ID && GOOGLE_API_KEY) {
        try {
          const sheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/Portfolio%20Summary!A:Z?key=${GOOGLE_API_KEY}`;
          const response = await fetch(sheetsUrl);
          const data = await response.json();

          if (data.values) {
            // Parse your Google Sheets data here
            // Update tradingData with live values
          }
        } catch (error) {
          console.log("Using fallback data");
        }
      }

      const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>AI Trading Results - ${tradingData.month}</title>
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
              height: 315px;
              background: rgba(255, 255, 255, 0.08);
              backdrop-filter: blur(16px);
              border: 1px solid rgba(255, 255, 255, 0.2);
              border-radius: 24px;
              padding: 32px;
              position: relative;
              overflow: hidden;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
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
              margin-bottom: 24px;
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
              margin: 24px 0 32px 0;
            }
            
            .profit-amount {
              font-size: 64px;
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
              font-size: 18px;
              font-weight: 600;
              letter-spacing: 0.025em;
              text-transform: uppercase;
            }
            
            .stats-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 16px;
              margin-top: auto;
            }
            
            .stat-item {
              background: rgba(255, 255, 255, 0.05);
              border: 1px solid rgba(255, 255, 255, 0.1);
              border-radius: 16px;
              padding: 16px;
              text-align: center;
              transition: all 0.3s ease;
              position: relative;
              overflow: hidden;
            }
            
            .stat-item::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 2px;
              background: linear-gradient(90deg, #8b5cf6 0%, #3b82f6 100%);
              opacity: 0;
              transition: opacity 0.3s ease;
            }
            
            .stat-item:hover::before {
              opacity: 1;
            }
            
            .stat-value {
              font-size: 24px;
              font-weight: 700;
              color: white;
              margin-bottom: 4px;
              font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
            }
            
            .stat-label {
              font-size: 12px;
              color: rgba(255, 255, 255, 0.6);
              font-weight: 500;
              text-transform: uppercase;
              letter-spacing: 0.05em;
            }
            
            .watermark {
              position: absolute;
              bottom: 16px;
              right: 20px;
              color: rgba(255, 255, 255, 0.4);
              font-size: 12px;
              font-weight: 500;
              letter-spacing: 0.025em;
            }
            
            .accent-glow {
              position: absolute;
              top: -50%;
              right: -50%;
              width: 200%;
              height: 200%;
              background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
              animation: rotate 20s linear infinite;
              z-index: -1;
            }
            
            @keyframes rotate {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            
            /* Ensure consistent sizing */
            .metric-card {
              min-width: 600px;
              min-height: 315px;
              max-width: 600px;
              max-height: 315px;
            }
          </style>
        </head>
        <body>
          <div class="metric-card">
            <div class="accent-glow"></div>
            
            <div class="header">
              <div class="status-indicator"></div>
              <div>
                <h1 class="title">AI Trading Results</h1>
                <p class="subtitle">${tradingData.month} Performance</p>
              </div>
            </div>
            
            <div class="main-metric">
              <div class="profit-amount">$${tradingData.monthlyProfit.toFixed(
                2
              )}</div>
              <div class="profit-label">Monthly Profit</div>
            </div>
            
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-value">${tradingData.trades}</div>
                <div class="stat-label">Trades</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">$${tradingData.totalProfit.toFixed(
                  2
                )}</div>
                <div class="stat-label">Total Profit</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">${tradingData.deployedPercent}%</div>
                <div class="stat-label">Deployed</div>
              </div>
            </div>
            
            <div class="watermark">MyRoboticTrader.com</div>
          </div>
        </body>
        </html>
      `;

      return new Response(html, {
        headers: {
          "Content-Type": "text/html",
          "Cache-Control": "public, max-age=300", // 5 minute cache
        },
      });
    } catch (error) {
      return new Response("Error generating metric card", { status: 500 });
    }
  },
};
