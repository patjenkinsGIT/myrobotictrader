// /functions/blog/[slug].js
// Serves proper OG meta tags for blog posts to social media crawlers

export async function onRequest(context) {
  const { request, params, next } = context;
  const slug = params.slug;

  // Check if this is a social media crawler
  const userAgent = request.headers.get('user-agent') || '';
  const isCrawler = /facebookexternalhit|Facebot|Twitterbot|LinkedInBot|WhatsApp|Slackbot|TelegramBot|Pinterest|Discordbot|Googlebot|bingbot/i.test(userAgent);

  // If not a crawler, let the SPA handle it normally
  if (!isCrawler) {
    return next();
  }

  try {
    // Fetch posts data
    const postsResponse = await fetch('https://myrobotictrader.com/posts.json');
    const posts = await postsResponse.json();

    // Find the post by slug
    const post = posts.find(p => p.slug === slug);

    if (!post) {
      return next();
    }

    // Generate the full URLs
    const ogImageUrl = 'https://myrobotictrader.com' + post.heroImage;
    const canonicalUrl = 'https://myrobotictrader.com/blog/' + post.slug;

    // Escape HTML entities
    const title = escapeHtml(post.title);
    const description = escapeHtml(post.metaDescription);
    const imageAlt = escapeHtml(post.imageAlt || post.title);

    // Return HTML with proper meta tags for crawlers
    const html = '<!DOCTYPE html>\n' +
      '<html lang="en">\n' +
      '<head>\n' +
      '  <meta charset="UTF-8">\n' +
      '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
      '  <title>' + title + ' | MyRoboticTrader</title>\n' +
      '  <meta name="description" content="' + description + '">\n' +
      '  <link rel="canonical" href="' + canonicalUrl + '">\n' +
      '  <meta property="og:type" content="article">\n' +
      '  <meta property="og:url" content="' + canonicalUrl + '">\n' +
      '  <meta property="og:title" content="' + title + '">\n' +
      '  <meta property="og:description" content="' + description + '">\n' +
      '  <meta property="og:image" content="' + ogImageUrl + '">\n' +
      '  <meta property="og:image:width" content="1200">\n' +
      '  <meta property="og:image:height" content="630">\n' +
      '  <meta property="og:site_name" content="MyRoboticTrader">\n' +
      '  <meta property="article:published_time" content="' + post.date + '">\n' +
      '  <meta property="article:author" content="Patrick Jenkins">\n' +
      '  <meta name="twitter:card" content="summary_large_image">\n' +
      '  <meta name="twitter:site" content="@myrobotictrader">\n' +
      '  <meta name="twitter:creator" content="@myrobotictrader">\n' +
      '  <meta name="twitter:title" content="' + title + '">\n' +
      '  <meta name="twitter:description" content="' + description + '">\n' +
      '  <meta name="twitter:image" content="' + ogImageUrl + '">\n' +
      '  <meta name="twitter:image:alt" content="' + imageAlt + '">\n' +
      '  <meta http-equiv="refresh" content="0; url=' + canonicalUrl + '">\n' +
      '</head>\n' +
      '<body>\n' +
      '  <p>Redirecting to <a href="' + canonicalUrl + '">' + title + '</a>...</p>\n' +
      '</body>\n' +
      '</html>';

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Error serving blog meta tags:', error);
    return next();
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
