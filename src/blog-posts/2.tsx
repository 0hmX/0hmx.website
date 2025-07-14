import React from 'react';

const Post: React.FC = () => {
  return (
    <>
      <p>
        I wanted to write something
      </p>
      <p>
        I wanted to write something
      </p>
    </>
  );
};

export default {
  id: '2',
  title: 'Procrastining over not getting job',
  excerpt:
    "I wish I could say I was an internet native, but I'm not. I joined the internet in 2017, a time when a...",
  content: Post,
  date: 'Jul 14, 2025',
  readTime: '5 min read',
  category: 'youtube',
  author: '0hmx',
} as BlogPost
