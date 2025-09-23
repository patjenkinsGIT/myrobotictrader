// /functions/api/rss.js
// Enhanced RSS feed with image support for N8N automation

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
    // Fetch RSS items from Google Sheets RSS Feed tab
    const rssItems = await fetchRSSItems(context);

    // Generate RSS feed with image support
    const rssXml = generateRSSFeedWithImages(rssItems, context);

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

async function fetchRSSItems(context) {
  const SHEET_ID = context.env.GOOGLE_SHEET_ID;
  const API_KEY = context.env.GOOGLE_API_KEY;

  try {
    // Fetch from RSS Feed tab (columns A through J to include new image column)
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/RSS Feed!A:J?key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Sheets API error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.values || data.values.length < 2) {
      console.log("No RSS items found in sheet");
      return [];
    }

    // Parse RSS items from sheet data
    const items = [];
    const rows = data.values;

    // Skip header row (index 0)
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];

      // Check if row has minimum required data
      if (row && row.length >= 6) {
        const postType = row[0];
        const period = row[1];
        const title = row[2];
        const description = row[3];
        const guid = row[4];
        const published = row[5];
        const publishDate = row[6] ? new Date(row[6]) : new Date();
        const priority = row[7] ? parseInt(row[7]) : 3;
        const posted = row[8] || false; // Posted to X column
        const imageUrl = row[9] || null; // New image URL column

        // Only include PUBLISHED items (fixed the logic from before)
        if (published === true || published === "TRUE" || published === "Yes") {
          items.push({
            postType,
            period,
            title,
            description,
            guid,
            publishDate,
            priority,
            posted,
            imageUrl, // Include image URL
          });
        }
      }
    }

    // Sort by priority (1 = highest) then by publish date
    items.sort((a, b) => {
      if (a.priority !== b.priority) {
        return a.priority - b.priority;
      }
      return new Date(b.publishDate) - new Date(a.publishDate);
    });

    // Limit to most recent 10 items to keep RSS feed manageable
    return items.slice(0, 10);
  } catch (error) {
    console.error("Error fetching RSS items from sheet:", error);

    // Return fallback items if sheet fetch fails
    return [
      {
        postType: "fallback",
        period: "Current",
        title: "Trading System Active",
        description:
          "My autonomous AI trader continues generating consistent profits. See live results at myrobotictrader.com",
        guid: `fallback-${Date.now()}`,
        publishDate: new Date(),
        priority: 1,
        posted: false,
        imageUrl: null,
      },
    ];
  }
}

function generateRSSFeedWithImages(items, context) {
  const baseUrl = "https://myrobotictrader.com";
  const currentDate = new Date();
  const pubDate = currentDate.toUTCString();

  // Generate RSS XML items with image support
  const rssItems = items
    .map((item) => {
      const itemPubDate = item.publishDate
        ? new Date(item.publishDate).toUTCString()
        : pubDate;

      // Determine image URL - use specified image or default to metric card
      const imageUrl = item.imageUrl || `${baseUrl}/api/metric-card?format=svg`;

      // Create image enclosure tag for RSS
      const imageEnclosure = imageUrl
        ? `<enclosure url="${imageUrl}" type="image/svg+xml" length="1000"/>`
        : "";

      return `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <description><![CDATA[
        ${item.description}
        
        📊 View live results: ${baseUrl}
        🔗 Compare strategies: ${baseUrl}#dynamic-comparison
        
        #CryptoTrading #AITrading #PassiveIncome #TradingResults
      ]]></description>
      <link>${baseUrl}#dynamic-comparison</link>
      <guid isPermaLink="false">${item.guid}</guid>
      <pubDate>${itemPubDate}</pubDate>
      <category>${item.postType}</category>
      ${imageEnclosure}
      <imageUrl>${imageUrl}</imageUrl>
    </item>`;
    })
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
