import React from 'react';

const SkeletonBlogCard: React.FC = () => {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-lg mb-4">
        <div className="w-full h-48 bg-gray-300 animate-pulse"></div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-4">
          <div className="h-4 bg-muted-foreground rounded w-1/4 animate-pulse"></div>
          <div className="h-4 bg-muted-foreground rounded w-1/4 animate-pulse"></div>
          <div className="h-4 bg-muted-foreground rounded w-1/4 animate-pulse"></div>
        </div>

        <div className="h-6 bg-muted-foreground rounded w-3/4 animate-pulse"></div>

        <div className="space-y-2">
          <div className="h-4 bg-muted-foreground rounded animate-pulse"></div>
          <div className="h-4 bg-muted-foreground rounded w-5/6 animate-pulse"></div>
        </div>

        <div className="h-4 bg-muted-foreground rounded w-1/3 animate-pulse"></div>
      </div>
    </div>
  );
};

export default SkeletonBlogCard;
