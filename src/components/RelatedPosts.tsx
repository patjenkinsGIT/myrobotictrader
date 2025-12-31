import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import postsData from '../data/posts.json';
import { BlogPost, getPublishedPosts } from '../utils/blogUtils';

interface RelatedPostsProps {
  currentSlug: string;
  currentCategory: string;
  maxPosts?: number;
}

export const RelatedPosts: React.FC<RelatedPostsProps> = ({
  currentSlug,
  currentCategory,
  maxPosts = 3
}) => {
  // Filter to only show published posts
  const posts = getPublishedPosts(postsData as BlogPost[]);

  const getRelatedPosts = (): BlogPost[] => {
    const sameCategory = posts.filter(
      post => post.slug !== currentSlug && post.category === currentCategory
    );

    if (sameCategory.length >= maxPosts) {
      return sameCategory.slice(0, maxPosts);
    }

    const otherPosts = posts.filter(
      post => post.slug !== currentSlug && post.category !== currentCategory
    );

    return [...sameCategory, ...otherPosts].slice(0, maxPosts);
  };

  const relatedPosts = getRelatedPosts();

  if (relatedPosts.length === 0) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric'
    });
  };

  return (
    <section className="mt-16 pt-12 border-t border-white/10">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg">
          <BookOpen className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white">Keep Reading</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
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
            <div className="p-4">
              <span className="inline-block px-2 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full mb-3">
                {post.category}
              </span>
              <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-2 mb-3">{post.excerpt || post.metaDescription}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{formatDate(post.date)}</span>
                <span className="text-purple-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium"
        >
          View all posts <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default RelatedPosts;
