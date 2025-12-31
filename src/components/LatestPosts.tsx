import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Newspaper, TrendingUp } from 'lucide-react';
import postsData from '../data/posts.json';
import { BlogPost, getPublishedPosts, getPostSortDate } from '../utils/blogUtils';

export const LatestPosts: React.FC<{ maxPosts?: number }> = ({ maxPosts = 4 }) => {
  // Filter to only show published posts, then sort newest first
  const posts = getPublishedPosts(postsData as BlogPost[])
    .sort((a, b) => getPostSortDate(b).getTime() - getPostSortDate(a).getTime())
    .slice(0, maxPosts);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Education': 'from-blue-500 to-cyan-500',
      'Anti-Gambling': 'from-red-500 to-orange-500',
      'Market Intelligence': 'from-green-500 to-emerald-500',
      'Lifestyle': 'from-purple-500 to-pink-500',
      'Market Psychology': 'from-amber-500 to-yellow-500'
    };
    return colors[category] || 'from-purple-500 to-blue-500';
  };

  if (posts.length === 0) return null;

  const [featuredPost, ...regularPosts] = posts;

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg">
                <Newspaper className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Latest Insights</h2>
            </div>
            <p className="text-gray-400 text-lg">
              Real talk about trading, building wealth, and avoiding the gambling trap
            </p>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-purple-500/25"
          >
            View All Posts <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Featured Post */}
        <Link
          to={`/blog/${featuredPost.slug}`}
          className="group block mb-8 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-video md:aspect-auto overflow-hidden">
              <img
                src={featuredPost.heroImage}
                alt={featuredPost.imageAlt || featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full">
                  <TrendingUp className="w-3 h-3" /> FEATURED
                </span>
                <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(featuredPost.category)} text-white text-xs font-medium rounded-full`}>
                  {featuredPost.category}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                {featuredPost.title}
              </h3>
              <p className="text-gray-300 text-lg mb-6 line-clamp-3">{featuredPost.excerpt || featuredPost.metaDescription}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">{formatDate(featuredPost.date)}</span>
                <span className="text-purple-400 flex items-center gap-2 font-medium group-hover:gap-3 transition-all">
                  Read article <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.heroImage}
                    alt={post.imageAlt || post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className={`inline-block px-2.5 py-1 text-xs font-medium bg-gradient-to-r ${getCategoryColor(post.category)} text-white rounded-full mb-3`}>
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4">{post.excerpt || post.metaDescription}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{formatDate(post.date)}</span>
                    <span className="text-purple-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestPosts;
