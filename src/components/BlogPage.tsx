import React from 'react';
import { Link } from 'react-router-dom';
import useBlogPosts from '../hooks/useBlogPosts';
import en from '../locales/en.json';

import SkeletonBlogCard from './SkeletonBlogCard';

const BlogPage = () => {
  const { posts, isLoading, error } = useBlogPosts();

  if (isLoading) {
    return (
      <section className="w-full px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-none tracking-tighter mb-6">
              {en.blog_page.header_title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {en.blog_page.header_description}
            </p>
          </div>
          <div className="space-y-8">
            {[...Array(3)].map((_, i) => (
              <SkeletonBlogCard key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full px-8 py-16 text-center text-red-600">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-none tracking-tighter mb-6">
            {en.blog_page.header_title}
          </h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed">Error: {error}</p>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return (
      <section className="w-full px-8 py-16 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-none tracking-tighter mb-6">
            {en.blog_page.header_title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            No blog posts found.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-none tracking-tighter mb-6">
            {en.blog_page.header_title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {en.blog_page.header_description}
          </p>
        </div>

        {/* Blog Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="space-y-8">
            {posts.map((post) => (
              <div key={post.id} className="border-l-4 border-gray-200 pl-4 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-900 rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  <Link to={`/blogs/${post.id}`} className="hover:text-gray-700 transition-colors duration-200">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-2">{post.date} • {post.readTime}</p>
                <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
