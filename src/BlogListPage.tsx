import React from "react";
import { Link } from "react-router-dom";
import postsData from "./data/posts.json";
import { FullNav } from "./components/FullNav";

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  content: string;
  category: string;
  metaDescription: string;
}

export const BlogListPage: React.FC = () => {
  const posts: BlogPost[] = postsData;
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  // Group posts by category
  const categories = [...new Set(posts.map((post) => post.category))];

  // Filter posts by selected category
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  // Sort posts by date (newest first)
  const sortedPosts = [...filteredPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getExcerpt = (content: string, maxLength: number = 200) => {
    // Remove markdown headers and formatting
    const plainText = content
      .replace(/^#+\s/gm, "")
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
      .replace(/\n/g, " ");

    if (plainText.length <= maxLength) return plainText;
    return plainText.substring(0, maxLength).trim() + "...";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <FullNav />
      {/* Hero Section */}
      <section className="py-12 px-4 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto text-center mt-8">
          <div className="mb-8">
            {/* Badge matching Hero style */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/40 mb-6 shadow-lg shadow-purple-500/20">
              <span className="text-purple-200 font-medium">
                Trading Education
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Blog & </span>
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
                Insights
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Real insights from building transparent, systematic crypto trading
              systems. No hype, just facts and lessons learned.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter - Enhanced sizing and styling */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm shadow-lg font-semibold text-sm ${
              selectedCategory === null
                ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-400/60 text-white shadow-purple-500/20"
                : "bg-white/8 hover:bg-white/12 border border-white/20 hover:border-purple-400/30 text-gray-300 hover:text-white"
            }`}
          >
            All Posts
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm shadow-lg font-semibold text-sm ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-400/60 text-white shadow-purple-500/20"
                  : "bg-white/8 hover:bg-white/12 border border-white/20 hover:border-purple-400/30 text-gray-300 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid - Enhanced with Features-style cards */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group"
            >
              <article className="h-full rounded-2xl p-6 border border-white/10 hover:border-purple-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg shadow-purple-500/10 cursor-pointer relative bg-gray-900/50">
                {/* Category Badge - enhanced */}
                <div className="relative mb-4">
                  <span className="inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full bg-purple-500 text-white shadow-md">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="relative">
                  <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-200 transition-colors duration-300">
                    {post.title}
                  </h2>

                  <p className="text-gray-400 text-sm mb-4">
                    {formatDate(post.date)}
                  </p>

                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {getExcerpt(post.content, 150)}
                  </p>

                  <div className="flex items-center text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                    Read Full Article
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA Section - Simplified background like Privacy */}
        <div className="relative mt-8 text-center bg-gray-900/50 rounded-2xl px-8 py-16 md:px-16 md:py-24 border border-white/10 shadow-2xl shadow-purple-500/10">
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 leading-tight">
              <span className="text-white">Want to See These </span>
              <span className="text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">
                Strategies in Action?
              </span>
            </h2>
            <p className="text-gray-200 text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
              Check out our live trading dashboard with complete transparency -
              every trade, every profit, updated automatically.
            </p>
            <Link
              to="/"
              className="group inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full font-semibold text-white text-base transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30 hover:shadow-2xl whitespace-nowrap"
            >
              <span>View Live Results</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
