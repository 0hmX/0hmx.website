const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/1-CtVcQwPF.js',
      'assets/index-CmpTlbqC.js',
      'assets/index-Drk8qzWl.css',
      'assets/2-BFahZPnc.js',
    ]),
) => i.map((i) => d[i]);
import { _ as u, r as s, a as f } from './index-CmpTlbqC.js';
const g = [
  {
    id: '1',
    title: 'The Prime/Theo Effect',
    excerpt: `I wish I could say I was an internet native, but I'm not. I joined the internet in 2017, a
        time when a YouTube channel with 30 million subscri...`,
    content: () =>
      u(() => import('./1-CtVcQwPF.js'), __vite__mapDeps([0, 1, 2])).then((t) => ({
        default: t.default.content,
      })),
    date: 'Jul 13, 2025',
    readTime: '5 min read',
    category: 'youtube',
    author: '0hmx',
  },
  {
    id: '2',
    title: 'Procrastining over not getting job',
    excerpt: 'I wanted to write something I wanted to write something',
    content: () =>
      u(() => import('./2-BFahZPnc.js'), __vite__mapDeps([3, 1, 2])).then((t) => ({
        default: t.default.content,
      })),
    date: 'Jul 14, 2025',
    readTime: '5 min read',
    category: 'youtube',
    author: '0hmx',
  },
];
let a = null;
const b = () => {
  const [t, r] = s.useState([]),
    [c, n] = s.useState(!0),
    [d, i] = s.useState(null),
    { isDebugMode: o } = f();
  return (
    s.useEffect(() => {
      (async () => {
        if (a && !o) {
          (r(a), n(!1));
          return;
        }
        (n(!0), i(null), o && (await new Promise((e) => setTimeout(e, 2e3))));
        try {
          const e = [...g].sort((l, m) => {
            const h = new Date(l.date);
            return new Date(m.date).getTime() - h.getTime();
          });
          (o || (a = e), r(e));
        } catch {
          i('Failed to load blog posts.');
        } finally {
          n(!1);
        }
      })();
    }, [o]),
    { posts: t, isLoading: c, error: d }
  );
};
export { b as u };
