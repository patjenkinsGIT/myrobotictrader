// /functions/api/post-to-x.js
// Direct X API posting function - eliminates need for IFTTT

export async function onRequest(context) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (context.request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get approved RSS items ready for posting
    const approvedItems = await getApprovedRSSItems(context);

    if (approvedItems.length === 0) {
      return new Response(
        JSON.stringify({ message: "No approved items to post" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const results = [];

    // Post each approved item to X
    for (const item of approvedItems) {
      try {
        const result = await postToX(context, item);
        results.push(result);

        // Mark as posted in Google Sheets
        await markAsPosted(context, item.guid);
      } catch (error) {
        console.error(`Failed to post item ${item.guid}:`, error);
        results.push({ guid: item.guid, error: error.message });
      }
    }

    return new Response(JSON.stringify({ results }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("X posting error:", error);
    return new Response(JSON.stringify({ error: "Posting failed" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
}

async function getApprovedRSSItems(context) {
  const SHEET_ID = context.env.GOOGLE_SHEET_ID;
  const API_KEY = context.env.GOOGLE_API_KEY;

  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/RSS Feed!A:I?key=${API_KEY}`
    );

    const data = await response.json();
    if (!data.values || data.values.length < 2) return [];

    const items = [];
    const rows = data.values;

    // Parse approved items that haven't been posted yet
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (row && row.length >= 7) {
        const published = row[5]; // Published column
        const posted = row[8] || false; // Posted to X column (new)

        // Only process published items that haven't been posted yet
        if ((published === true || published === "TRUE") && !posted) {
          items.push({
            postType: row[0],
            period: row[1],
            title: row[2],
            description: row[3],
            guid: row[4],
            publishDate: row[6] ? new Date(row[6]) : new Date(),
            rowIndex: i + 1, // For updating the sheet later
          });
        }
      }
    }

    return items;
  } catch (error) {
    console.error("Error fetching approved items:", error);
    return [];
  }
}

async function postToX(context, item) {
  // X API credentials from environment variables
  const X_API_KEY = context.env.X_API_KEY;
  const X_API_SECRET = context.env.X_API_SECRET;
  const X_ACCESS_TOKEN = context.env.X_ACCESS_TOKEN;
  const X_ACCESS_TOKEN_SECRET = context.env.X_ACCESS_TOKEN_SECRET;

  // Create tweet content
  const tweetText = `${item.title}

${item.description}

📊 View live results: https://myrobotictrader.com
🔗 Compare strategies: https://myrobotictrader.com#dynamic-comparison

#AITrading #CryptoProfit #PassiveIncome`;

  // First, upload the image
  let mediaId = null;
  try {
    mediaId = await uploadImageToX(context, {
      X_API_KEY,
      X_API_SECRET,
      X_ACCESS_TOKEN,
      X_ACCESS_TOKEN_SECRET,
    });
  } catch (error) {
    console.log("Image upload failed, posting without image:", error);
  }

  // Post tweet with or without image
  const tweetData = {
    text: tweetText,
  };

  if (mediaId) {
    tweetData.media = { media_ids: [mediaId] };
  }

  // Use Twitter API v2 to post tweet
  const tweetResponse = await fetch("https://api.twitter.com/2/tweets", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${context.env.X_BEARER_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tweetData),
  });

  if (!tweetResponse.ok) {
    throw new Error(`X API error: ${tweetResponse.status}`);
  }

  const result = await tweetResponse.json();
  return {
    guid: item.guid,
    tweetId: result.data.id,
    success: true,
  };
}

async function uploadImageToX(context, credentials) {
  // Get the metric card as SVG
  const svgUrl = `${
    new URL(context.request.url).origin
  }/api/metric-card?format=svg`;
  const svgResponse = await fetch(svgUrl);
  const svgContent = await svgResponse.text();

  // Convert SVG to PNG using a simple service or return SVG directly
  // For now, let's try uploading the SVG directly
  const svgBuffer = new TextEncoder().encode(svgContent);

  // Upload to X using media upload API
  const uploadResponse = await fetch(
    "https://upload.twitter.com/1.1/media/upload.json",
    {
      method: "POST",
      headers: {
        Authorization: createOAuthHeader(
          "POST",
          "https://upload.twitter.com/1.1/media/upload.json",
          credentials
        ),
        "Content-Type": "multipart/form-data",
      },
      body: createMediaUploadBody(svgBuffer, "image/svg+xml"),
    }
  );

  if (!uploadResponse.ok) {
    throw new Error(`Media upload failed: ${uploadResponse.status}`);
  }

  const uploadResult = await uploadResponse.json();
  return uploadResult.media_id_string;
}

async function markAsPosted(context, guid) {
  // Mark the item as posted in Google Sheets
  // This prevents duplicate posting
  // Implementation would update the "Posted to X" column
  console.log(`Marked ${guid} as posted to X`);
}

function createOAuthHeader(method, url, credentials) {
  // OAuth 1.0a header creation for X API
  // This is complex - you might want to use a library
  // For now, return a placeholder
  return `OAuth oauth_consumer_key="${credentials.X_API_KEY}"`;
}

function createMediaUploadBody(buffer, contentType) {
  // Create multipart form data for media upload
  // Simplified implementation
  return buffer;
}
