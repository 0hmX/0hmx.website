import { j as s, u as l, r as d } from './index-CmpTlbqC.js';
import { u as i } from './useBlogPosts-lacGZoTb.js';
const x = () =>
    s.jsxs('div', {
      className: 'max-w-4xl mx-auto px-4 md:px-8 py-16 animate-pulse',
      children: [
        s.jsx('div', { className: 'h-12 bg-muted rounded w-3/4 mb-4' }),
        s.jsx('div', { className: 'h-6 bg-muted rounded w-1/2 mb-8' }),
        s.jsx('div', { className: 'h-96 bg-muted rounded-lg mb-8' }),
        s.jsxs('div', {
          className: 'space-y-4',
          children: [
            s.jsx('div', { className: 'h-4 bg-muted rounded' }),
            s.jsx('div', { className: 'h-4 bg-muted rounded' }),
            s.jsx('div', { className: 'h-4 bg-muted rounded w-5/6' }),
            s.jsx('div', { className: 'h-4 bg-muted rounded w-3/4' }),
          ],
        }),
      ],
    }),
  p = () => {
    const { id: a } = l(),
      { posts: o, isLoading: r, error: t } = i();
    if (r) return s.jsx(x, {});
    if (t)
      return s.jsxs('div', {
        className: 'text-center py-16 text-red-600',
        children: ['Error: ', t],
      });
    const e = o.find((m) => m.id === a);
    if (!e)
      return s.jsx('div', { className: 'text-center py-16', children: 'Blog post not found.' });
    const n = d.lazy(e.content);
    return s.jsxs('div', {
      className: 'max-w-4xl mx-auto px-4 md:px-8 py-16',
      children: [
        s.jsx('h1', {
          className: 'text-display-md font-black text-foreground mb-4',
          children: e.title,
        }),
        s.jsxs('p', {
          className: 'text-muted-foreground mb-8',
          children: [e.date, ' by ', e.author || 'Unknown Author'],
        }),
        s.jsx('div', {
          className: 'prose prose-lg max-w-none font-mono dark:prose-invert',
          children: s.jsx(d.Suspense, { children: s.jsx(n, {}) }),
        }),
      ],
    });
  };
export { p as default };
