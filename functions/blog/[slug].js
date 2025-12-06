// Cloudflare Pages Function to serve dynamic OG meta tags for blog posts
// This intercepts crawler requests and returns proper social sharing metadata

// Posts data is fetched at runtime from the deployed site
let postsCache = null;
let postsCacheTime = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

async function getPostsData(origin) {
  const now = Date.now();
  if (postsCache && (now - postsCacheTime) < CACHE_TTL) {
    return postsCache;
  }

  try {
    const response = await fetch(`${origin}/posts.json`);
    if (response.ok) {
      postsCache = await response.json();
      postsCacheTime = now;
      return postsCache;
    }
  } catch (e) {
    console.error('Failed to fetch posts.json:', e);
  }

  return postsCache || [];
}

// Crawler user-agent patterns
const CRAWLER_USER_AGENTS = [
  'facebookexternalhit',
  'Facebot',
  'Twitterbot',
  'LinkedInBot',
  'WhatsApp',
  'Slackbot',
  'TelegramBot',
  'Discordbot',
  'Pinterest',
  'Googlebot',
  'bingbot',
  'Baiduspider',
  'DuckDuckBot',
  'Embedly',
  'Quora Link Preview',
  'Rogerbot',
  'Showyoubot',
  'vkShare',
  'W3C_Validator',
  'redditbot',
];

// Check if request is from a crawler
function isCrawler(userAgent) {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  return CRAWLER_USER_AGENTS.some(crawler => ua.includes(crawler.toLowerCase()));
}

// Find post by slug
function findPost(posts, slug) {
  return posts.find(post => post.slug === slug);
}

// Generate HTML with OG meta tags for crawlers
function generateCrawlerHTML(post, url) {
  const baseUrl = 'https://myrobotictrader.com';
  const fullUrl = `${baseUrl}/blog/${post.slug}`;
  const imageUrl = post.heroImage.startsWith('http')
    ? post.heroImage
    : `${baseUrl}${post.heroImage}`;

  // Escape HTML entities for safety
  const escapeHtml = (str) => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  const title = escapeHtml(post.title);
  const description = escapeHtml(post.metaDescription || post.excerpt || '');
  const imageAlt = escapeHtml(post.imageAlt || post.title);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Primary Meta Tags -->
  <title>${title} | MyRoboticTrader</title>
  <meta name="title" content="${title} | MyRoboticTrader">
  <meta name="description" content="${description}">

  <!-- Canonical URL -->
  <link rel="canonical" href="${fullUrl}">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="${fullUrl}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${imageUrl}">
  <meta property="og:image:alt" content="${imageAlt}">
  <meta property="og:site_name" content="MyRoboticTrader">
  <meta property="article:published_time" content="${post.date}">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@MyRoboticTrader">
  <meta name="twitter:creator" content="@MyRoboticTrader">
  <meta name="twitter:url" content="${fullUrl}">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${imageUrl}">
  <meta name="twitter:image:alt" content="${imageAlt}">

  <!-- Redirect to actual page for any browser that executes JS -->
  <meta http-equiv="refresh" content="0;url=${fullUrl}">
</head>
<body>
  <h1>${title}</h1>
  <p>${description}</p>
  <p>Redirecting to <a href="${fullUrl}">${fullUrl}</a>...</p>
</body>
</html>`;
}

// Generate 404 HTML for missing posts
function generate404HTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Post Not Found | MyRoboticTrader</title>
  <meta name="robots" content="noindex">
</head>
<body>
  <h1>Post Not Found</h1>
  <p>The requested blog post could not be found.</p>
</body>
</html>`;
}

export async function onRequest(context) {
  const { request, params, next } = context;
  const userAgent = request.headers.get('user-agent') || '';
  const slug = params.slug;

  // If not a crawler, pass through to the SPA
  if (!isCrawler(userAgent)) {
    return next();
  }

  // Get origin for fetching posts.json
  const url = new URL(request.url);
  const origin = url.origin;

  // Fetch posts data
  const posts = await getPostsData(origin);

  // Find the post by slug
  const post = findPost(posts, slug);

  // If post not found, return 404
  if (!post) {
    return new Response(generate404HTML(), {
      status: 404,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  }

  // Return HTML with OG meta tags for crawler
  return new Response(generateCrawlerHTML(post, request.url), {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  });
}
