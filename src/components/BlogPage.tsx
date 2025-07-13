import React from 'react';
import { Link } from 'react-router-dom';
import BlogGrid from './BlogGrid';
import useBlogPosts from '../hooks/useBlogPosts';
import en from '../locales/en.json';

import SkeletonBlogCard from './SkeletonBlogCard';

import SkeletonFeaturedPost from './SkeletonFeaturedPost';

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
          <SkeletonFeaturedPost />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => <SkeletonBlogCard key={i} />)}
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

  const featuredPost = posts[0]; // Assuming the first post is the featured one

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

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="bg-gray-900 text-white rounded-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-sm font-medium uppercase tracking-wide text-gray-300 mb-4">
                    {en.blog_page.featured_post_label}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link
                    to={`/blogs/${featuredPost.id}`}
                    className="self-start text-sm font-medium text-white hover:text-gray-300 transition-colors duration-200 border-b border-white hover:border-gray-300 pb-1"
                  >
                    {en.blog_page.read_full_article}
                  </Link>
                </div>
                <div className="h-64 md:h-auto">
                  <img
                    src={featuredPost.image || 'https://via.placeholder.com/400x250'}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{en.blog_page.latest_articles}</h2>
          <BlogGrid posts={posts.slice(featuredPost ? 1 : 0)} />
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{en.blog_page.newsletter_title}</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            {en.blog_page.newsletter_description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={en.blog_page.newsletter_placeholder}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
              {en.blog_page.newsletter_button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
