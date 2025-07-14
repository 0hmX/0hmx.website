import React from 'react';

const SkeletonBlogPostDetail: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-8 py-16 animate-pulse">
      <div className="h-12 bg-muted rounded w-3/4 mb-4"></div>
      <div className="h-6 bg-muted rounded w-1/2 mb-8"></div>
      <div className="h-96 bg-muted rounded-lg mb-8"></div>
      <div className="space-y-4">
        <div className="h-4 bg-muted rounded"></div>
        <div className="h-4 bg-muted rounded"></div>
        <div className="h-4 bg-muted rounded w-5/6"></div>
        <div className="h-4 bg-muted rounded w-3/4"></div>
      </div>
    </div>
  );
};

export default SkeletonBlogPostDetail;
