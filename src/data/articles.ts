
export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  createdAt: string;
  author: string;
  category: string;
  tags: string[];
}

export const articles: Article[] = [];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (category: string): Article[] => {
  return articles.filter(article => article.category === category);
};

export const getRecentArticles = (limit: number = 3): Article[] => {
  return articles
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
};
