import React, { useState, useEffect } from 'react';
import { BlogPost } from '../utils/blogUtils';

interface ExtendedBlogPost extends BlogPost {
  published?: boolean;
}

type ViewMode = 'list' | 'calendar';

const BlogScheduleManager: React.FC = () => {
  const [posts, setPosts] = useState<ExtendedBlogPost[]>([]);
  const [pushing, setPushing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [hasChanges, setHasChanges] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [editingDateSlug, setEditingDateSlug] = useState<string | null>(null);

  // Load posts from JSON
  useEffect(() => {
    import('../data/posts.json').then((module) => {
      setPosts(module.default as ExtendedBlogPost[]);
    });
  }, []);

  // Get unique categories
  const categories = [...new Set(posts.map((post) => post.category))].sort();

  // Filter posts by category
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    const dateA = new Date(a.publishDate || a.date).getTime();
    const dateB = new Date(b.publishDate || b.date).getTime();
    return dateB - dateA;
  });

  const togglePublished = async (slug: string) => {
    const updatedPosts = posts.map((post) =>
      post.slug === slug ? { ...post, published: !post.published } : post
    );
    setPosts(updatedPosts);
    setHasChanges(true);
    setMessage('');

    // Save to file via API
    setSaving(true);
    try {
      const response = await fetch('/api/save-posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPosts, null, 2),
      });
      const data = await response.json();
      if (data.success) {
        setMessage('Saved locally');
        setTimeout(() => setMessage(''), 2000);
      } else {
        setMessage(`Save failed: ${data.message}`);
      }
    } catch (error) {
      setMessage(`Save failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
    setSaving(false);
  };

  const updatePublishDate = async (slug: string, newDate: string) => {
    const updatedPosts = posts.map((post) =>
      post.slug === slug
        ? { ...post, publishDate: newDate, date: `${newDate}T12:00:00Z` }
        : post
    );
    setPosts(updatedPosts);
    setHasChanges(true);
    setEditingDateSlug(null);
    setMessage('');

    // Save to file via API
    setSaving(true);
    try {
      const response = await fetch('/api/save-posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPosts, null, 2),
      });
      const data = await response.json();
      if (data.success) {
        setMessage('Date updated');
        setTimeout(() => setMessage(''), 2000);
      } else {
        setMessage(`Save failed: ${data.message}`);
      }
    } catch (error) {
      setMessage(`Save failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
    setSaving(false);
  };

  const getDateInputValue = (post: ExtendedBlogPost) => {
    const dateStr = post.publishDate || post.date;
    const date = new Date(dateStr);
    return date.toISOString().split('T')[0];
  };

  const pushToProduction = async () => {
    setPushing(true);
    setMessage('');

    try {
      const response = await fetch('/api/publish', { method: 'POST' });
      const data = await response.json();

      if (data.success) {
        setMessage('Pushed to GitHub! Cloudflare will rebuild in ~1-2 min.');
        setHasChanges(false);
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setMessage(`Failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    setPushing(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const publishedCount = filteredPosts.filter((p) => p.published !== false).length;
  const scheduledCount = filteredPosts.filter((p) => p.published === false).length;

  // Calendar helpers
  const getCalendarDays = () => {
    const year = calendarDate.getFullYear();
    const month = calendarDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days: (number | null)[] = [];

    // Add empty slots for days before the first of the month
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const getPostsForDay = (day: number) => {
    const year = calendarDate.getFullYear();
    const month = calendarDate.getMonth();

    return filteredPosts.filter((post) => {
      const postDate = new Date(post.publishDate || post.date);
      return (
        postDate.getFullYear() === year &&
        postDate.getMonth() === month &&
        postDate.getDate() === day
      );
    });
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCalendarDate((prev) => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      return newDate;
    });
  };

  const monthYearLabel = calendarDate.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      calendarDate.getMonth() === today.getMonth() &&
      calendarDate.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-white">Blog Post Schedule</h1>
          <div className="flex items-center gap-4">
            {saving && <span className="text-yellow-400 text-sm">Saving...</span>}
            {hasChanges && !saving && (
              <span className="text-yellow-400 text-sm">Unsaved changes</span>
            )}
            <button
              onClick={pushToProduction}
              disabled={pushing || !hasChanges}
              className="bg-green-600 hover:bg-green-700 disabled:bg-green-800 disabled:opacity-50 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              {pushing ? 'Pushing...' : 'Push to Production'}
            </button>
          </div>
        </div>

        {/* View Toggle & Category Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          {/* View Toggle */}
          <div className="flex bg-slate-800 rounded-lg p-1 border border-slate-700">
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'list'
                  ? 'bg-purple-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              List
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'calendar'
                  ? 'bg-purple-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Calendar
            </button>
          </div>

          {/* Divider */}
          <div className="h-8 w-px bg-slate-700"></div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'
              }`}
            >
              All ({posts.length})
            </button>
            {categories.map((category) => {
              const count = posts.filter((p) => p.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Message */}
        {message && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              message.includes('Error') || message.includes('Failed') || message.includes('failed')
                ? 'bg-red-900/50 text-red-300 border border-red-500/50'
                : 'bg-green-900/50 text-green-300 border border-green-500/50'
            }`}
          >
            {message}
          </div>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <div className="space-y-4">
            {sortedPosts.map((post) => (
              <div
                key={post.slug}
                className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-slate-600 transition-colors"
              >
                <div className="flex gap-4 p-4">
                  {/* Thumbnail */}
                  <a
                    href={`/blog/${post.slug}?preview=true`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <img
                      src={post.heroImage}
                      alt={post.imageAlt}
                      className="w-32 h-24 object-cover rounded-lg hover:opacity-80 transition-opacity"
                    />
                  </a>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        {/* Title */}
                        <a
                          href={`/blog/${post.slug}?preview=true`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-semibold text-lg hover:text-purple-300 transition-colors line-clamp-1"
                        >
                          {post.title}
                        </a>

                        {/* Meta row: Status, Date, Category */}
                        <div className="flex items-center gap-3 mt-1 mb-2">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              post.published !== false
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                            }`}
                          >
                            {post.published !== false ? 'Live' : 'Scheduled'}
                          </span>
                          {editingDateSlug === post.slug ? (
                            <input
                              type="date"
                              defaultValue={getDateInputValue(post)}
                              onChange={(e) => updatePublishDate(post.slug, e.target.value)}
                              onBlur={() => setEditingDateSlug(null)}
                              autoFocus
                              className="bg-slate-700 text-white text-sm px-2 py-0.5 rounded border border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                            />
                          ) : (
                            <button
                              onClick={() => setEditingDateSlug(post.slug)}
                              className="text-slate-500 text-sm hover:text-purple-400 transition-colors flex items-center gap-1"
                              title="Click to change date"
                            >
                              {formatDate(post.publishDate || post.date)}
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </button>
                          )}
                          <span className="text-slate-600">•</span>
                          <span className="text-purple-400 text-sm">{post.category}</span>
                        </div>

                        {/* Excerpt */}
                        <p className="text-slate-400 text-sm line-clamp-2">
                          {post.excerpt || post.metaDescription}
                        </p>
                      </div>

                      {/* Action button */}
                      <button
                        onClick={() => togglePublished(post.slug)}
                        disabled={saving}
                        className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 ${
                          post.published !== false
                            ? 'bg-yellow-600 hover:bg-yellow-700 text-white'
                            : 'bg-green-600 hover:bg-green-700 text-white'
                        }`}
                      >
                        {post.published !== false ? 'Unpublish' : 'Publish'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Calendar View */}
        {viewMode === 'calendar' && (
          <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
            {/* Calendar Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
              <button
                onClick={() => navigateMonth('prev')}
                className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h2 className="text-xl font-semibold text-white">{monthYearLabel}</h2>
              <button
                onClick={() => navigateMonth('next')}
                className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Day Headers */}
            <div className="grid grid-cols-7 border-b border-slate-700">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="p-3 text-center text-slate-400 text-sm font-medium">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7">
              {getCalendarDays().map((day, index) => {
                const dayPosts = day ? getPostsForDay(day) : [];
                return (
                  <div
                    key={index}
                    className={`min-h-[120px] p-2 border-b border-r border-slate-700/50 ${
                      day === null ? 'bg-slate-850' : ''
                    } ${isToday(day!) ? 'bg-purple-900/20' : ''}`}
                  >
                    {day && (
                      <>
                        <div
                          className={`text-sm font-medium mb-2 ${
                            isToday(day) ? 'text-purple-400' : 'text-slate-400'
                          }`}
                        >
                          {day}
                        </div>
                        <div className="space-y-1">
                          {dayPosts.map((post) => (
                            <div
                              key={post.slug}
                              className={`group relative p-1.5 rounded text-xs cursor-pointer transition-colors ${
                                post.published !== false
                                  ? 'bg-green-500/20 hover:bg-green-500/30 border border-green-500/30'
                                  : 'bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-500/30'
                              }`}
                              onClick={() => togglePublished(post.slug)}
                              title={`Click to ${post.published !== false ? 'unpublish' : 'publish'}`}
                            >
                              <div
                                className={`font-medium truncate ${
                                  post.published !== false ? 'text-green-300' : 'text-yellow-300'
                                }`}
                              >
                                {post.title}
                              </div>
                              {/* Hover tooltip */}
                              <div className="absolute z-10 left-0 top-full mt-1 hidden group-hover:block w-64 p-3 bg-slate-900 border border-slate-600 rounded-lg shadow-xl">
                                <img
                                  src={post.heroImage}
                                  alt={post.imageAlt}
                                  className="w-full h-20 object-cover rounded mb-2"
                                />
                                <div className="text-white font-medium text-sm mb-1 line-clamp-2">
                                  {post.title}
                                </div>
                                <div className="flex items-center gap-2 mb-1">
                                  <span
                                    className={`text-xs px-1.5 py-0.5 rounded ${
                                      post.published !== false
                                        ? 'bg-green-500/20 text-green-400'
                                        : 'bg-yellow-500/20 text-yellow-400'
                                    }`}
                                  >
                                    {post.published !== false ? 'Live' : 'Scheduled'}
                                  </span>
                                  <span className="text-purple-400 text-xs">{post.category}</span>
                                </div>
                                <p className="text-slate-400 text-xs line-clamp-2">
                                  {post.excerpt || post.metaDescription}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="mt-8 flex gap-6 text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span>Live: {publishedCount} posts</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span>Scheduled: {scheduledCount} posts</span>
          </div>
        </div>

        {/* Help text */}
        <div className="mt-8 p-4 bg-slate-800/50 rounded-lg border border-slate-700 text-slate-400 text-sm">
          <p>
            <strong className="text-slate-300">How to use:</strong> Filter by category using the
            buttons above. Switch between List and Calendar views. Click the date to reschedule a
            post. Toggle between &quot;Live&quot; and &quot;Scheduled&quot;. Changes save
            automatically. Click &quot;Push to Production&quot; to deploy to Cloudflare.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogScheduleManager;
