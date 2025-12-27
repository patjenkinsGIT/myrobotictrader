import React from 'react';
import { Navigate } from 'react-router-dom';
import BlogScheduleManager from '../components/BlogScheduleManager';

const BlogSchedulePage: React.FC = () => {
  // Only allow access in development mode
  if (import.meta.env.PROD) {
    return <Navigate to="/blog" replace />;
  }

  return <BlogScheduleManager />;
};

export default BlogSchedulePage;
