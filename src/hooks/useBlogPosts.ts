import { useState, useEffect } from 'react';
import blogPosts from '../data/blogPosts';
import type { BlogPost } from '../types/blog';
import { useDebug } from '../context/DebugContext';

interface UseBlogPostsResult {
  posts: BlogPost[];
  isLoading: boolean;
  error: string | null;
}

let cachedPosts: BlogPost[] | null = null;

const useBlogPosts = (): UseBlogPostsResult => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { isDebugMode } = useDebug();

  useEffect(() => {
    const fetchPosts = async () => {
      if (cachedPosts && !isDebugMode) {
        setPosts(cachedPosts);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);

      if (isDebugMode) {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay
      }

      try {
        const sortedPosts = [...blogPosts].sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB.getTime() - dateA.getTime();
        });
        if (!isDebugMode) {
          cachedPosts = sortedPosts;
        }
        setPosts(sortedPosts);
      } catch (err) {
        setError('Failed to load blog posts.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [isDebugMode]);

  return { posts, isLoading, error };
};

export default useBlogPosts;
