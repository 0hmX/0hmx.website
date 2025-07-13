import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { BlogPost } from '../types/blog';
import { Link } from 'react-router-dom';

interface BlogGridProps {
  posts: BlogPost[];
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Link to={`/blogs/${post.id}`} key={post.id} className="group cursor-pointer block">
          <article>
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={post.image || 'https://via.placeholder.com/400x250'} // Placeholder if no image
                alt={post.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium uppercase tracking-wide">
                  {post.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                {post.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>

              <span className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors duration-200 border-b border-gray-800 hover:border-gray-600 pb-1">
                READ MORE
              </span>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default BlogGrid;
