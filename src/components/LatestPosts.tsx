import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, BookOpen } from 'lucide-react';
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
      {/* Background Effects - matching other sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/30 to-slate-900 -z-10"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header - centered like other sections */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest Insights
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Real talk about trading, building wealth, and avoiding the gambling trap
          </p>
        </div>

        {/* Featured Post */}
        <Link
          to={`/blog/${featuredPost.slug}`}
          className="group block mb-8 bg-gray-900/50 rounded-2xl overflow-hidden border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20"
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
                className="group block bg-gray-900/50 rounded-xl overflow-hidden border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20"
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

        {/* View All Link - matching FAQ section style */}
        <div className="text-center mt-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors group"
          >
            <BookOpen className="w-5 h-5" />
            <span>View all articles</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
