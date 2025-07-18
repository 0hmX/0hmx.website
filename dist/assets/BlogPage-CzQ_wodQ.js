import { j as e, e as l, S as x, L as i } from './index-CmpTlbqC.js';
import { u as n } from './useBlogPosts-lacGZoTb.js';
const m = () => {
  const { posts: s, isLoading: r, error: t } = n();
  return r
    ? e.jsx('section', {
        className: 'w-full px-4 md:px-8 py-12 md:py-16',
        children: e.jsxs('div', {
          className: 'max-w-6xl mx-auto',
          children: [
            e.jsxs('div', {
              className: 'text-center mb-16',
              children: [
                e.jsx('h1', {
                  className:
                    'text-display-lg font-black text-gray-900 leading-none tracking-tighter mb-6',
                  children: l.blog_page.header_title,
                }),
                e.jsx('p', {
                  className: 'text-body-lg text-gray-600 max-w-2xl mx-auto leading-relaxed',
                  children: l.blog_page.header_description,
                }),
              ],
            }),
            e.jsx('div', {
              className: 'space-y-6 md:space-y-8',
              children: [...Array(3)].map((a, d) => e.jsx(x, {}, d)),
            }),
          ],
        }),
      })
    : t
      ? e.jsx('section', {
          className: 'w-full px-8 py-16 text-center text-red-600',
          children: e.jsxs('div', {
            className: 'max-w-6xl mx-auto',
            children: [
              e.jsx('h1', {
                className:
                  'text-display-lg font-black text-gray-900 leading-none tracking-tighter mb-6',
                children: l.blog_page.header_title,
              }),
              e.jsxs('p', {
                className: 'text-body-lg max-w-2xl mx-auto leading-relaxed',
                children: ['Error: ', t],
              }),
            ],
          }),
        })
      : s.length === 0
        ? e.jsx('section', {
            className: 'w-full px-8 py-16 text-center',
            children: e.jsxs('div', {
              className: 'max-w-6xl mx-auto',
              children: [
                e.jsx('h1', {
                  className:
                    'text-display-lg font-black text-gray-900 leading-none tracking-tighter mb-6',
                  children: l.blog_page.header_title,
                }),
                e.jsx('p', {
                  className: 'text-body-lg text-gray-600 max-w-2xl mx-auto leading-relaxed',
                  children: 'No blog posts found.',
                }),
              ],
            }),
          })
        : e.jsx('section', {
            className: 'w-full px-8 py-16',
            children: e.jsxs('div', {
              className: 'max-w-6xl mx-auto',
              children: [
                e.jsxs('div', {
                  className: 'text-center mb-16',
                  children: [
                    e.jsx('h1', {
                      className:
                        'text-display-lg font-black text-foreground leading-none tracking-tighter mb-6',
                      children: l.blog_page.header_title,
                    }),
                    e.jsx('p', {
                      className:
                        'text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed',
                      children: l.blog_page.header_description,
                    }),
                  ],
                }),
                e.jsxs('div', {
                  className: 'mb-16',
                  children: [
                    e.jsx('h2', {
                      className: 'text-heading-2 font-mono text-foreground mb-8',
                      children: 'Latest Articles',
                    }),
                    e.jsx('div', {
                      className: 'space-y-6 md:space-y-8',
                      children: s.map((a) =>
                        e.jsxs(
                          'div',
                          {
                            className: 'border-l-4 border-border pl-4 relative font-mono',
                            children: [
                              e.jsx('div', {
                                className: 'absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full',
                              }),
                              e.jsx('h3', {
                                className: 'text-body-lg text-foreground mb-2',
                                children: e.jsx(i, {
                                  to: `/blogs/${a.id}`,
                                  className: 'hover:text-primary transition-colors duration-200',
                                  children: a.title,
                                }),
                              }),
                              e.jsxs('p', {
                                className: 'text-muted-foreground text-body-sm mb-2',
                                children: [a.date, ' • ', a.readTime],
                              }),
                              e.jsx('p', {
                                className: 'text-foreground leading-relaxed',
                                children: a.excerpt,
                              }),
                            ],
                          },
                          a.id,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          });
};
export { m as default };
