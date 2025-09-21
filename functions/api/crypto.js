// Simple in-memory cache to prevent rate limiting
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const cryptoId = url.searchParams.get("crypto");

  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Handle preflight CORS requests
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (!cryptoId) {
    return new Response(JSON.stringify({ error: "Missing crypto parameter" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // Check cache first
  const cacheKey = cryptoId;
  const cached = cache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    console.log(`Cache hit for ${cryptoId}`);
    return new Response(JSON.stringify(cached.data), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
        "X-Cache": "HIT",
      },
    });
  }

  try {
    console.log(`Fetching fresh data for ${cryptoId}`);

    // Call CoinGecko API server-side
    const coingeckoUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd&include_24hr_change=true&include_7d_change=true&include_30d_change=true&include_market_cap=true`;

    const response = await fetch(coingeckoUrl);

    if (!response.ok) {
      // Handle rate limiting specifically
      if (response.status === 429) {
        throw new Error(
          "Rate limited by CoinGecko. Please try again in a few minutes."
        );
      }
      throw new Error(`CoinGecko API error: ${response.status}`);
    }

    const data = await response.json();

    // Validate that we got actual data
    if (!data[cryptoId]) {
      throw new Error(`No data found for cryptocurrency: ${cryptoId}`);
    }

    // Cache the successful result
    cache.set(cacheKey, {
      data: data,
      timestamp: Date.now(),
    });

    // Clean up old cache entries periodically
    if (cache.size > 50) {
      const cutoff = Date.now() - CACHE_DURATION;
      for (const [key, value] of cache.entries()) {
        if (value.timestamp < cutoff) {
          cache.delete(key);
        }
      }
    }

    return new Response(JSON.stringify(data), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
        "X-Cache": "MISS",
      },
    });
  } catch (error) {
    console.error(`Error fetching ${cryptoId}:`, error.message);

    // Return cached data if available during errors
    if (cached) {
      console.log(`Returning stale cache for ${cryptoId} due to error`);
      return new Response(JSON.stringify(cached.data), {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
          "X-Cache": "STALE",
        },
      });
    }

    return new Response(
      JSON.stringify({
        error: error.message || "Failed to fetch crypto data",
        cryptoId: cryptoId,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
}
