// /functions/api/coinmarketcap.js
// Backend proxy for CoinMarketCap API with static Jan 8 data

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const symbol = url.searchParams.get("symbol");

  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (!symbol) {
    return new Response(JSON.stringify({ error: "Missing symbol parameter" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const CMC_API_KEY = env.COINMARKETCAP_API_KEY;

  if (!CMC_API_KEY) {
    return new Response(JSON.stringify({ error: "API key not configured" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    // Step 1: Load static Jan 8 data from JSON file
    const staticDataUrl = new URL("/data/cryptoJan8Data.json", url.origin);
    let jan8Price = null;
    let cryptoName = null;
    let cryptoSymbol = symbol.toUpperCase();

    try {
      const staticResponse = await fetch(staticDataUrl.toString());
      const staticData = await staticResponse.json();

      // Find crypto in our JSON (match by symbol)
      const cryptoEntry = staticData.cryptos.find(
        (c) => c.symbol.toUpperCase() === symbol.toUpperCase()
      );

      if (cryptoEntry) {
        jan8Price = cryptoEntry.jan8Price;
        cryptoName = cryptoEntry.name;
        cryptoSymbol = cryptoEntry.symbol;
      }
    } catch (err) {
      console.error("Error loading static data:", err);
    }

    // Step 2: Get current price from CoinMarketCap
    const cmcUrl = `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=${symbol.toUpperCase()}`;

    const cmcResponse = await fetch(cmcUrl, {
      headers: {
        "X-CMC_PRO_API_KEY": CMC_API_KEY,
        Accept: "application/json",
      },
    });

    if (!cmcResponse.ok) {
      throw new Error(`CoinMarketCap API error: ${cmcResponse.status}`);
    }

    const cmcData = await cmcResponse.json();

    if (!cmcData.data || !cmcData.data[symbol.toUpperCase()]) {
      throw new Error("Cryptocurrency not found");
    }

    const cryptoData = cmcData.data[symbol.toUpperCase()][0];
    const currentPrice = cryptoData.quote.USD.price;

    // Use name from CMC if we don't have it from static data
    if (!cryptoName) {
      cryptoName = cryptoData.name;
    }

    // Step 3: Calculate gain since Jan 8
    let gainSinceStart;
    let estimationMethod;

    if (jan8Price) {
      // We have real Jan 8 data!
      gainSinceStart = (currentPrice - jan8Price) / jan8Price;
      estimationMethod = "historical_data_file";
    } else {
      // Fallback: Estimate using 30-day trend
      const change30d = cryptoData.quote.USD.percent_change_30d || 0;

      if (Math.abs(change30d) > 0.1) {
        // Extrapolate backwards from 30-day change
        const price30DaysAgo = currentPrice / (1 + change30d / 100);

        // Assume linear progression (rough estimate)
        const daysFromJan8 = Math.floor(
          (Date.now() - new Date("2025-01-08").getTime()) /
            (1000 * 60 * 60 * 24)
        );
        const dailyRate = change30d / 30;
        const estimatedChange = dailyRate * daysFromJan8;

        jan8Price = currentPrice / (1 + estimatedChange / 100);
        gainSinceStart = (currentPrice - jan8Price) / jan8Price;
        estimationMethod = "extrapolated_30d_trend";
      } else {
        // No good data - use conservative 25% default
        jan8Price = currentPrice / 1.25;
        gainSinceStart = 0.25;
        estimationMethod = "conservative_default";
      }
    }

    // Step 4: Return comprehensive response
    return new Response(
      JSON.stringify({
        name: cryptoName,
        symbol: cryptoSymbol,
        price: currentPrice,
        priceOnJan8: jan8Price,
        gainSinceStart: gainSinceStart,
        change24h: cryptoData.quote.USD.percent_change_24h || 0,
        change7d: cryptoData.quote.USD.percent_change_7d || 0,
        change30d: cryptoData.quote.USD.percent_change_30d || 0,
        marketCap: cryptoData.quote.USD.market_cap,
        volume24h: cryptoData.quote.USD.volume_24h,
        debug: {
          estimationMethod,
          hasHistoricalData: estimationMethod === "historical_data_file",
        },
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=300", // Cache for 5 minutes
        },
      }
    );
  } catch (error) {
    console.error("API Error:", error);

    return new Response(
      JSON.stringify({
        error: error.message || "Failed to fetch cryptocurrency data",
        details: "Please try again or select a different cryptocurrency",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
}
