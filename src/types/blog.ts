export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: () => Promise<{ default: React.FC }>;
  date: string;
  readTime: string;
  category: string;
}
