import React from "react";
import { Link } from "react-router-dom";
import postsData from "../data/posts.json";
import { BlogPost, getPublishedPosts, getPostSortDate } from "../utils/blogUtils";

interface RecentPostsProps {
  currentSlug: string;
}

export const RecentPosts: React.FC<RecentPostsProps> = ({ currentSlug }) => {
  // Filter to only show published posts, exclude current post, get 5 most recent
  const recentPosts = getPublishedPosts(postsData as BlogPost[])
    .filter((post) => post.slug !== currentSlug)
    .sort((a, b) => getPostSortDate(b).getTime() - getPostSortDate(a).getTime())
    .slice(0, 5);

  return (
    <div>
      <div className="bg-slate-900/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-purple-400/30 shadow-lg shadow-purple-500/10">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white pb-3 border-b border-purple-400/30">
          Recent Posts
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex gap-4 transition-all duration-300 hover:translate-x-1"
            >
              <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                <img
                  src={post.heroImage}
                  alt={post.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  style={{ filter: 'brightness(0.85)' }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-semibold text-sm leading-tight mb-1 group-hover:text-purple-300 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <span className="text-xs text-purple-400">{post.category}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
