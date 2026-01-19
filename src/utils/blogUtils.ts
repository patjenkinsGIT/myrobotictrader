/**
 * Blog Post Scheduling Utilities
 *
 * Allows posts to be scheduled using the `published` boolean and/or `publishDate` field.
 * - published: false = always hidden (can be toggled via schedule manager)
 * - published: true (or undefined) + no publishDate = immediately published
 * - published: true (or undefined) + publishDate in the past or today = published
 * - published: true (or undefined) + publishDate in the future = not yet published
 */

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  published?: boolean; // Optional: if false, post is hidden regardless of date. Default: true
  publishDate?: string; // Optional: if not set, post is immediately published
  content: string;
  category: string;
  metaDescription: string;
  heroImage: string;
  imageAlt: string;
  excerpt?: string;
  relatedPosts?: string[]; // Optional: array of slugs to prioritize in "Keep Reading" section
}

/**
 * Check if a post should be visible based on its published flag and publishDate
 * @param post - The blog post to check
 * @returns true if the post should be published (visible), false otherwise
 */
export function isPostPublished(post: BlogPost): boolean {
  // If published is explicitly set to false, post is hidden
  if (post.published === false) return false;

  // No publishDate = immediately published (if published is true or undefined)
  if (!post.publishDate) return true;

  // Compare publishDate to today (date-only comparison)
  const publishDate = new Date(post.publishDate);
  const today = new Date();

  // Reset time to midnight for date-only comparison
  today.setHours(0, 0, 0, 0);
  publishDate.setHours(0, 0, 0, 0);

  return publishDate <= today;
}

/**
 * Filter an array of posts to only include published posts
 * @param posts - Array of blog posts
 * @returns Array of posts that should be visible
 */
export function getPublishedPosts(posts: BlogPost[]): BlogPost[] {
  return posts.filter(isPostPublished);
}

/**
 * Get the effective sort date for a post
 * Uses publishDate if available, falls back to date
 * @param post - The blog post
 * @returns Date object for sorting
 */
export function getPostSortDate(post: BlogPost): Date {
  return new Date(post.publishDate || post.date);
}

/**
 * Sort posts by date (newest first)
 * Uses publishDate if available, falls back to date
 * @param posts - Array of blog posts
 * @returns Sorted array (newest first)
 */
export function sortPostsByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (a, b) => getPostSortDate(b).getTime() - getPostSortDate(a).getTime()
  );
}

/**
 * Check if preview mode is enabled via URL parameter
 * Allows viewing unpublished posts with ?preview=true
 * @returns true if preview mode is enabled
 */
export function isPreviewMode(): boolean {
  if (typeof window === 'undefined') return false;
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get('preview') === 'true';
}
