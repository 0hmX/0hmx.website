import React from 'react';
import BlogPost from '../types/blog';

const Post: React.FC = () => {
  return (
    // Use <article> for the main content block for better semantics.
    <article>
      <section>
        <h2>A Different Era of YouTube</h2>
        <p>
          I wish I could say I was an internet native, but I'm not. I joined the
          internet in 2017, a time when a YouTube channel with 30 million
          subscribers was considered insane. To be honest, I still can't believe
          that in 2025, we have channels like MrBeast with over 400 million
          subscribers. Can you even imagine how huge that number is?
        </p>
        <p>
          Back then, only a few artists like Ed Sheeran, Drake, and Selena Gomez
          were hitting numbers like that. Now, it feels like everyone has 30M+
          subs. Of course, we also had the legend himself, PewDiePie, and my
          country's rising star, T-Series. My motivation to become a tech
          YouTuber was the belief that it would guarantee me a job and that
          people would look up to me. Now that I'm older, I've realized some
          parts of that are truer than others.
        </p>
      </section>

      <section>
        <h3>A Quick Tangent</h3>
        <p>
          Okay, as I'm typing this, my hands are starting to hurt. It just goes
          to show what a toll relying on LLMs has taken on me—I can't even type
          anymore.
        </p>
      </section>

      <section>
        <h2>My Foray into Tech YouTube</h2>
        <p>
          I first discovered <strong>ThePrimeagen</strong> because of his Vim
          setups. I had started with the OG, Luke Smith, but then life happened,
          and I forgot about it. By the time I looked again, ThePrimeagen had
          completely taken over my feed. Then came <strong>Theo</strong>, who
          had something like 2k subscribers back then. I used to watch his
          "brainrot" daily tech news, which was surprisingly useful, especially
          since I was writing zero lines of code a day.
        </p>
      </section>

      <section>
        <h2>The College Hiatus and a Crowded Return</h2>
        <p>
          When I started my first year of college in 2022, I became detached
          from tech YouTube for almost a year. When I came back, my god, it felt
          like there were 100k+ new channels. Who were these people? Who was
          watching them?
        </p>
        <p>
          I also tried to make some YouTube videos around this time, but that
          all collapsed because I spent way too much time in the hostel just
          talking with my friends about everything—coding, jobs, sex, every
          fucking thing.
        </p>
      </section>

      <section>
        <h2>The "Prime/Theo Effect" is Real</h2>
        <p>
          Frankly, I don't want to expose my entire life here, so I'll end this
          post. But the <strong>"Prime/Theo effect"</strong> is unreal, and
          "Approved by Theo" is now a real phenomenon. You can literally go from
          a nobody account to getting 10k views on every tweet just because Theo
          shares your profile.
        </p>
      </section>
    </article>
  );
};

export default {
  id: '1',
  title: 'The Prime/Theo Effect',
  // A more descriptive excerpt that summarizes the post.
  excerpt:
    'A personal reflection on the changing landscape of YouTube, from the era of PewDiePie to the rise of tech influencers like ThePrimeagen and Theo, and their undeniable impact.',
  content: Post,
  date: 'Jul 13, 2025',
  readTime: '5 min read',
  category: 'youtube',
  author: '0hmx',
} as BlogPost;
