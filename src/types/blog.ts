export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: React.FC;
  date: string;
  readTime: string;
  category: string;
  image: string;
}
