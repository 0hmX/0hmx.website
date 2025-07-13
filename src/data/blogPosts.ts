import React from 'react';
import { BlogPost } from '../types/blog';
import BlogPost1Content from '../blog-posts/BlogPost1Content';
import BlogPost2Content from '../blog-posts/BlogPost2Content';
import BlogPost3Content from '../blog-posts/BlogPost3Content';
import BlogPost4Content from '../blog-posts/BlogPost4Content';
import BlogPost5Content from '../blog-posts/BlogPost5Content';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Power of Starting Small: My $199 Journey',
    excerpt:
      'How a simple screen printing kit from eBay became the foundation of my entrepreneurial journey.',
    content: BlogPost1Content,
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Entrepreneurship',
  },
  {
    id: '2',
    title: 'Design Thinking for Non-Designers',
    excerpt: 'Breaking down the design process into actionable steps that anyone can follow.',
    content: BlogPost2Content,
    date: 'March 8, 2024',
    readTime: '7 min read',
    category: 'Design',
  },
  {
    id: '3',
    title: 'Building a Personal Brand Without a Degree',
    excerpt: "Why authenticity and hard work matter more than credentials in today's economy.",
    content: BlogPost3Content,
    date: 'February 28, 2024',
    readTime: '6 min read',
    category: 'Personal Branding',
  },
  {
    id: '4',
    title: 'The Art of Bootstrapping: Growing Without Funding',
    excerpt: 'How to build a sustainable business using only your own resources and creativity.',
    content: BlogPost4Content,
    date: 'February 20, 2024',
    readTime: '8 min read',
    category: 'Business',
  },
  {
    id: '5',
    title: 'Lessons from Failure: What Dropping Out Taught Me',
    excerpt:
      'Sometimes the biggest risks lead to the most valuable lessons and unexpected opportunities.',
    content: BlogPost5Content,
    date: 'February 12, 2024',
    readTime: '9 min read',
    category: 'Personal Growth',
  },
];
