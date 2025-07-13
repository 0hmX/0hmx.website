import React from 'react';

const SkeletonFeaturedPost: React.FC = () => {
  return (
    <div className="mb-16">
      <div className="bg-gray-200 rounded-lg overflow-hidden animate-pulse">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="h-4 bg-gray-300 rounded w-1/3 mb-4"></div>
            <div className="h-8 bg-gray-300 rounded w-full mb-4"></div>
            <div className="h-8 bg-gray-300 rounded w-5/6 mb-6"></div>
            <div className="space-y-2 mb-6">
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
            <div className="h-6 bg-gray-300 rounded w-1/2"></div>
          </div>
          <div className="h-64 md:h-auto bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonFeaturedPost;
