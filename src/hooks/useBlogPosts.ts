import { useState, useEffect } from 'react';
import  blogPosts from '../data/blogPosts';
import type { BlogPost } from '../types/blog';

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
        const sortedPosts = [...blogPosts].sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB.getTime() - dateA.getTime(); // Sort descending (newest first)
        });
        cachedPosts = sortedPosts; // Cache the sorted data
        setPosts(sortedPosts);
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
