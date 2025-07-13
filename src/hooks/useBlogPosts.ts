import { useState, useEffect } from 'react';
import { blogPosts } from '../data/blogPosts';
import { BlogPost } from '../types/blog';

interface UseBlogPostsResult {
  posts: BlogPost[];
  isLoading: boolean;
  error: string | null;
}

let cachedPosts: BlogPost[] | null = null; // Module-level cache

const useBlogPosts = (): UseBlogPostsResult => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = () => {
      if (cachedPosts) {
        setPosts(cachedPosts);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);
      try {
        cachedPosts = blogPosts; // Cache the data
        setPosts(blogPosts);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load blog posts.');
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, isLoading, error };
};

export default useBlogPosts;
