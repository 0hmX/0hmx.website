import React from 'react';

const SkeletonFeaturedPost: React.FC = () => {
  return (
    <div className="mb-16">
      <div className="bg-muted rounded-lg overflow-hidden animate-pulse">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="h-4 bg-muted-foreground rounded w-1/3 mb-4"></div>
            <div className="h-8 bg-muted-foreground rounded w-full mb-4"></div>
            <div className="h-8 bg-muted-foreground rounded w-5/6 mb-6"></div>
            <div className="space-y-2 mb-6">
              <div className="h-4 bg-muted-foreground rounded w-full"></div>
              <div className="h-4 bg-muted-foreground rounded w-full"></div>
              <div className="h-4 bg-muted-foreground rounded w-3/4"></div>
            </div>
            <div className="h-6 bg-muted-foreground rounded w-1/2"></div>
          </div>
          <div className="h-64 md:h-auto bg-muted-foreground"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonFeaturedPost;
