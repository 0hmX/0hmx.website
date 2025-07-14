import React from 'react';

// A type definition for the blog post object (assumed to exist)
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: React.FC;
  date: string;
  readTime: string;
  category: string;
  author: string;
}

const Post: React.FC = () => {
  return (
    // Use <article> for the main content block for better semantics.
    <article>
      <section>
        <h2>Discovering a New Resource</h2>
        <p>
          For the past week, I've been watching a YouTuber named 'Coding Jesus'.
          I discovered him after the 'Stop Killing Games' movement popped up on
          my feed, which led me to a video of his clash with someone called
          'PirateGaming' or something similar. The main point is, I'm currently
          job hunting, and he seems like someone who could provide valuable
          knowledge on what to grind to crack technical interviews.
        </p>
      </section>

      <section>
        <h2>Tackling GetCraked.io</h2>
        <p>
          He also runs a LeetCode-style website called{' '}
          <strong>GetCraked.io</strong>. From what I've seen, it's mostly
          filled with questions related to the inner workings and implementation
          details of <code>C</code>, <code>C++</code>, and <code>Python</code>.
          It's a great resource, I guess, if you enjoy solving those kinds of
          puzzles. I personally liked it; it gave my confidence a huge boost
          because I managed to solve many of the problems, especially the{' '}
          <code>Python</code> ones. My <code>C++</code> skills aren't as strong,
          as I don't have much experience writing it, so my struggles there were
          expected.
        </p>
      </section>

      <section>
        <h2>An Unexpected C++ Contribution</h2>
        <p>
          Funnily enough, while I say I don't write <code>C++</code>, I recently
          worked on a pull request for <code>Node.js</code>. It was for a
          feature I thought would be nice to have, and I wanted to see if I
          could make a complex contribution to a major project. The core of it
          was in <code>C++</code>, and as of writing this, the PR is about to be
          merged. I presume by the time you're reading this, it already has
          been!
        </p>
      </section>

      <section>
        <h2>A Few Interesting Concepts</h2>
        <p>
          Now, I'll share some of the interesting question <em>ideas</em> (not
          the exact questions) that I can recall from the site:
        </p>
        {/* Using a list is much better for listing items. */}
        <ul>
          <li>
            The use and purpose of <code>inline namespace</code> in{' '}
            <code>C++</code>.
          </li>
          <li>
            The lifetime of variables declared inside a <code>for</code> loop.
          </li>
          <li>
            Empty class memory optimization in <code>C++</code> and how it can
            be disabled.
          </li>
          <li>
            How <code>Python</code> stores object properties using a{' '}
            <code>dict</code> is so simple it shocked me.
          </li>
          <li>
            How <code>Python</code> can use a special property{' '}
            <code>__slots__</code> to create more memory-efficient objects.
          </li>
        </ul>
      </section>
    </article>
  );
};

export default {
  id: '2',
  // Corrected title and made it more descriptive.
  title: 'Procrastinating Productively While Job Hunting',
  // Wrote a new excerpt that matches the content.
  excerpt:
    "A dive into how watching a YouTuber led me down a rabbit hole of C++ and Python interview questions, and even an unexpected contribution to Node.js.",
  content: Post,
  date: 'Jul 14, 2025',
  readTime: '5 min read',
  category: 'youtube',
  author: '0hmx',
} as BlogPost;
