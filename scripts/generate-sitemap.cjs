const fs = require('fs');
const path = require('path');

// Load posts data
const postsPath = path.join(__dirname, '../src/data/posts.json');
const posts = JSON.parse(fs.readFileSync(postsPath, 'utf8'));

// Base URL
const BASE_URL = 'https://myrobotictrader.com';

// Today's date
const now = new Date();
const today = now.toISOString().split('T')[0];

// Filter posts based on published flag and publishDate
const isPostPublished = (post) => {
  // If explicitly set to false, it's not published
  if (post.published === false) return false;

  // If there's a publishDate, check if it's in the past
  if (post.publishDate) {
    const publishDate = new Date(post.publishDate);
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    publishDate.setHours(0, 0, 0, 0);
    return publishDate <= todayDate;
  }

  // Default: published
  return true;
};

const publishedPosts = posts.filter(isPostPublished);
const scheduledPosts = posts.filter(p => !isPostPublished(p));

if (scheduledPosts.length > 0) {
  console.log(`\n📅 Excluding ${scheduledPosts.length} scheduled/unpublished post(s):`);
  scheduledPosts.forEach(post => {
    const reason = post.published === false
      ? 'unpublished'
      : `scheduled: ${post.publishDate?.split('T')[0] || 'unknown'}`;
    console.log(`   - ${post.slug} (${reason})`);
  });
}

// Build sitemap
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BASE_URL}/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${BASE_URL}/faq</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${BASE_URL}/resources</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${BASE_URL}/card</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${BASE_URL}/transparency</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${BASE_URL}/privacy</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
`;

// Add published posts
publishedPosts
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .forEach(post => {
    const postDate = post.date.split('T')[0];
    sitemap += `  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <lastmod>${postDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  });

sitemap += `</urlset>`;

// Write sitemap
const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemap, 'utf8');

console.log(`\n✅ Sitemap generated!`);
console.log(`   📄 Static pages: 7`);
console.log(`   📝 Published posts: ${publishedPosts.length}`);
console.log(`   📅 Scheduled (excluded): ${scheduledPosts.length}`);
console.log(`   📊 Total URLs: ${7 + publishedPosts.length}\n`);
