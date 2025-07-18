import { j as e, e as t } from './index-CmpTlbqC.js';
const r = () =>
  e.jsxs('div', {
    className:
      'flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-background p-8 font-mono',
    children: [
      e.jsx('h1', {
        className: 'text-heading-1 font-bold text-foreground mb-6',
        children: t.contact_page.get_in_touch,
      }),
      e.jsx('p', {
        className: 'text-body-base text-muted-foreground mb-4 text-center',
        children: t.contact_page.intro_text,
      }),
      e.jsx('p', {
        className: 'text-body-lg font-semibold text-foreground mb-6 font-sans',
        children: e.jsx('a', {
          href: `mailto:${t.contact_page.email_label.split(': ')[1]}`,
          className: 'underline',
          children: t.contact_page.email_label,
        }),
      }),
      e.jsx('p', {
        className: 'text-body-base text-muted-foreground mb-8 text-center',
        children: t.contact_page.resume_intro,
      }),
      e.jsx('a', {
        href: t.contact_page.resume_link,
        target: '_blank',
        rel: 'noopener noreferrer',
        className:
          'px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg shadow-md hover:bg-primary/90 transition duration-300',
        children: t.contact_page.view_resume,
      }),
    ],
  });
export { r as default };
