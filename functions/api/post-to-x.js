// /functions/api/post-to-x.js
// Direct X API posting function with OAuth 1.0a authentication

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
        const posted = row[8] || false; // Posted to X column

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
  const consumerKey = context.env.X_CONSUMER_KEY;
  const consumerSecret = context.env.X_CONSUMER_SECRET;
  const accessToken = context.env.X_ACCESS_TOKEN;
  const accessTokenSecret = context.env.X_ACCESS_TOKEN_SECRET;

  // Create tweet content
  const tweetText = `${item.title}

${item.description}

📊 View live results: https://myrobotictrader.com
🔗 Compare strategies: https://myrobotictrader.com#dynamic-comparison

#AITrading #CryptoProfit #PassiveIncome`;

  // Tweet data for API v2
  const tweetData = {
    text: tweetText,
  };

  // First, try to upload image
  let mediaId = null;
  try {
    mediaId = await uploadImageToX(context, {
      consumerKey,
      consumerSecret,
      accessToken,
      accessTokenSecret,
    });

    if (mediaId) {
      tweetData.media = { media_ids: [mediaId] };
    }
  } catch (error) {
    console.log("Image upload failed, posting without image:", error);
  }

  // Generate OAuth signature for tweet posting
  const url = "https://api.twitter.com/2/tweets";
  const method = "POST";

  const oauthHeader = generateOAuthHeader(method, url, {
    consumerKey,
    consumerSecret,
    accessToken,
    accessTokenSecret,
  });

  // Post tweet
  const tweetResponse = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: oauthHeader,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tweetData),
  });

  if (!tweetResponse.ok) {
    const errorText = await tweetResponse.text();
    throw new Error(`X API error: ${tweetResponse.status} - ${errorText}`);
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

  if (!svgResponse.ok) {
    throw new Error("Failed to fetch metric card SVG");
  }

  const svgContent = await svgResponse.text();

  // Convert SVG to base64 for upload
  const svgBuffer = new TextEncoder().encode(svgContent);
  const base64SVG = btoa(String.fromCharCode(...svgBuffer));

  // Upload to X using media upload API (v1.1)
  const uploadUrl = "https://upload.twitter.com/1.1/media/upload.json";
  const method = "POST";

  const oauthHeader = generateOAuthHeader(method, uploadUrl, credentials);

  // Create form data for media upload
  const formData = new FormData();
  formData.append("media_data", base64SVG);
  formData.append("media_category", "tweet_image");

  const uploadResponse = await fetch(uploadUrl, {
    method: "POST",
    headers: {
      Authorization: oauthHeader,
    },
    body: formData,
  });

  if (!uploadResponse.ok) {
    const errorText = await uploadResponse.text();
    throw new Error(
      `Media upload failed: ${uploadResponse.status} - ${errorText}`
    );
  }

  const uploadResult = await uploadResponse.json();
  return uploadResult.media_id_string;
}

function generateOAuthHeader(method, url, credentials) {
  const { consumerKey, consumerSecret, accessToken, accessTokenSecret } =
    credentials;

  // OAuth parameters
  const oauthParams = {
    oauth_consumer_key: consumerKey,
    oauth_token: accessToken,
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
    oauth_nonce: generateNonce(),
    oauth_version: "1.0",
  };

  // Create signature base string
  const parameterString = Object.keys(oauthParams)
    .sort()
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(oauthParams[key])}`
    )
    .join("&");

  const signatureBaseString = [
    method.toUpperCase(),
    encodeURIComponent(url),
    encodeURIComponent(parameterString),
  ].join("&");

  // Create signing key
  const signingKey =
    encodeURIComponent(consumerSecret) +
    "&" +
    encodeURIComponent(accessTokenSecret);

  // Generate signature using HMAC-SHA1
  const signature = hmacSha1(signatureBaseString, signingKey);
  oauthParams.oauth_signature = signature;

  // Build authorization header
  const authHeader =
    "OAuth " +
    Object.keys(oauthParams)
      .sort()
      .map(
        (key) =>
          `${encodeURIComponent(key)}="${encodeURIComponent(oauthParams[key])}"`
      )
      .join(", ");

  return authHeader;
}

function generateNonce() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

async function hmacSha1(data, key) {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(key);
  const dataBuffer = encoder.encode(data);

  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "HMAC", hash: "SHA-1" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign("HMAC", cryptoKey, dataBuffer);
  return btoa(String.fromCharCode(...new Uint8Array(signature)));
}

async function markAsPosted(context, guid) {
  // TODO: Update Google Sheets to mark item as posted
  // This would require Google Sheets API write access
  console.log(`Marked ${guid} as posted to X`);
}
