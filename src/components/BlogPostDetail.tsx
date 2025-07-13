import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <div className="text-center py-16">Blog post not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <h1 className="text-5xl font-black text-gray-900 mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">{post.date} by {post.author || 'Unknown Author'}</p>
      {post.image && (
        <img src={post.image} alt={post.title} className="w-full rounded-lg mb-8" />
      )}
      <div className="prose prose-lg max-w-none">
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPostDetail;
