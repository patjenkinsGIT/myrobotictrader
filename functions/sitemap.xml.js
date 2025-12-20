// /functions/sitemap.xml.js - serves at /sitemap.xml
// Dynamic sitemap generator - auto-includes all blog posts

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
    const baseUrl = "https://myrobotictrader.com";
    const today = new Date().toISOString().split("T")[0];

    // Fetch posts.json to get all blog posts
    const postsResponse = await fetch(`${baseUrl}/posts.json`);
    let posts = [];

    if (postsResponse.ok) {
      const data = await postsResponse.json();
      // posts.json is a plain array, not { posts: [...] }
      posts = Array.isArray(data) ? data : (data.posts || []);
    }

    // Static pages with priorities
    const staticPages = [
      { path: "/", priority: "1.0", changefreq: "daily" },
      { path: "/blog", priority: "0.9", changefreq: "daily" },
      { path: "/faq", priority: "0.7", changefreq: "weekly" },
      { path: "/resources", priority: "0.6", changefreq: "monthly" },
      { path: "/card", priority: "0.5", changefreq: "monthly" },
      { path: "/privacy", priority: "0.3", changefreq: "yearly" },
    ];

    // Generate URL entries for static pages
    const staticUrls = staticPages
      .map(
        (page) => `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
      )
      .join("");

    // Generate URL entries for blog posts
    const blogUrls = posts
      .map((post) => {
        const postDate = post.date
          ? new Date(post.date).toISOString().split("T")[0]
          : today;
        return `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${postDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
      })
      .join("");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${blogUrls}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600", // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error("Sitemap generation error:", error);
    return new Response("Sitemap unavailable", {
      status: 500,
      headers: corsHeaders,
    });
  }
}
