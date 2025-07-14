import React, { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import useBlogPosts from '../hooks/useBlogPosts';

import SkeletonBlogPostDetail from './SkeletonBlogPostDetail';

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { posts, isLoading, error } = useBlogPosts();

  if (isLoading) {
    return <SkeletonBlogPostDetail />;
  }

  if (error) {
    return <div className="text-center py-16 text-red-600">Error: {error}</div>;
  }

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <div className="text-center py-16">Blog post not found.</div>;
  }

  const LazyLoadedContent = lazy(post.content);

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <h1 className="text-display-md font-black text-gray-900 mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">
        {post.date} by {post.author || 'Unknown Author'}
      </p>
      <div className="prose prose-lg max-w-none font-mono">
        <Suspense fallback={<div>Loading content...</div>}>
          <LazyLoadedContent />
        </Suspense>
      </div>
    </div>
  );
};

export default BlogPostDetail;
