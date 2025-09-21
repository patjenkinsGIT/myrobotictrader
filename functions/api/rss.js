// /functions/api/rss.js
// Generates RSS feed with trading results for automated social media posting

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
    // Fetch your actual trading data (integrate with your Google Sheets)
    const tradingData = await fetchLatestTradingData();

    // Generate RSS feed
    const rssXml = generateRSSFeed(tradingData);

    return new Response(rssXml, {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/rss+xml; charset=utf-8",
      },
    });
  } catch (error) {
    console.error("RSS generation error:", error);
    return new Response("RSS feed unavailable", {
      status: 500,
      headers: corsHeaders,
    });
  }
}

// In /functions/api/rss.js, replace the mock function with:
async function fetchLatestTradingData() {
  const SHEET_ID = "your-google-sheet-id"; // You'll need to hardcode this or use environment variables
  const API_KEY = "your-google-api-key";

  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Calculations!A:G?key=${API_KEY}`
    );
    const data = await response.json();

    // Parse the data using similar logic to your existing hook
    // Extract monthly data, totals, etc.

    return parsedData;
  } catch (error) {
    // Return fallback data if Google Sheets fails
    return mockData;
  }
}

function generateRSSFeed(data) {
  const baseUrl = "https://myrobotictrader.com";
  const currentDate = new Date();
  const pubDate = currentDate.toUTCString();

  // Generate different types of posts
  const items = [];

  // Monthly summary post
  const monthlyPost = {
    title: `${data.latestMonth.month} Trading Results: $${data.latestMonth.profit} profit`,
    description: `AI trader generated $${data.latestMonth.profit} profit from ${data.latestMonth.trades} trades in ${data.latestMonth.month}. Deployment ratio: ${data.latestMonth.deploymentRatio}%. Total profit now: $${data.totalStats.totalProfit}`,
    link: `${baseUrl}#dynamic-comparison`,
    cardUrl: `${baseUrl}/api/metric-card?month=${data.latestMonth.month.toLowerCase()}&type=monthly`,
    pubDate: pubDate,
    guid: `monthly-${data.latestMonth.month.toLowerCase()}-${currentDate.getFullYear()}`,
  };

  // Milestone post if appropriate
  if (data.totalStats.totalProfit > 4000) {
    const milestonePost = {
      title: `Milestone: Crossed $${Math.floor(
        data.totalStats.totalProfit / 1000
      )}K Total Profit`,
      description: `My autonomous AI trader has now generated over $${data.totalStats.totalProfit} in verified profits across ${data.totalStats.totalTrades} trades. See the live comparison tool.`,
      link: `${baseUrl}#dynamic-comparison`,
      cardUrl: `${baseUrl}/api/metric-card?type=milestone`,
      pubDate: new Date(
        currentDate.getTime() - 24 * 60 * 60 * 1000
      ).toUTCString(), // Yesterday
      guid: `milestone-${Math.floor(data.totalStats.totalProfit / 1000)}k`,
    };
    items.push(milestonePost);
  }

  // Performance comparison post
  const comparisonPost = {
    title: `Real Money vs Paper Gains: $${data.totalStats.totalProfit} withdrawn`,
    description: `While others chase unrealized gains, my AI system has generated $${data.totalStats.totalProfit} in actual withdrawable profits. Compare your crypto strategy against mine.`,
    link: `${baseUrl}#dynamic-comparison`,
    cardUrl: `${baseUrl}/api/metric-card?type=comparison`,
    pubDate: new Date(
      currentDate.getTime() - 2 * 24 * 60 * 60 * 1000
    ).toUTCString(), // 2 days ago
    guid: `comparison-${data.latestMonth.month.toLowerCase()}`,
  };

  items.push(monthlyPost, comparisonPost);

  // Generate RSS XML
  const rssItems = items
    .map(
      (item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <description><![CDATA[
        ${item.description}
        
        📊 View the metric card: ${item.cardUrl}
        🔗 Try the comparison tool: ${item.link}
        
        #CryptoTrading #AITrading #PassiveIncome #TradingResults
      ]]></description>
      <link>${item.link}</link>
      <guid isPermaLink="false">${item.guid}</guid>
      <pubDate>${item.pubDate}</pubDate>
      <enclosure url="${item.cardUrl}" type="text/html" length="0"/>
    </item>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>MyRoboticTrader - AI Trading Results</title>
    <description>Live autonomous AI trading performance updates and results</description>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/api/rss" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <managingEditor>contact@myrobotictrader.com (MyRoboticTrader)</managingEditor>
    <webMaster>contact@myrobotictrader.com (MyRoboticTrader)</webMaster>
    <lastBuildDate>${pubDate}</lastBuildDate>
    <category>Finance</category>
    <category>Cryptocurrency</category>
    <category>Trading</category>
    <ttl>360</ttl>
    
    ${rssItems}
    
  </channel>
</rss>`;
}
