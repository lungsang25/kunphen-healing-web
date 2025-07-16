
import { useParams, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  description: string;
  image_url: string;
  created_at: string;
  author: string;
  tags: string[];
  read_time: number;
  is_published: boolean;
}

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [recentArticles, setRecentArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) return;
      
      try {
        const { data, error } = await supabase
          .from('articles')
          .select('*')
          .eq('slug', slug)
          .eq('is_published', true)
          .single();

        if (error) throw error;
        setArticle(data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    const fetchRecentArticles = async () => {
      try {
        const { data, error } = await supabase
          .from('articles')
          .select('*')
          .eq('is_published', true)
          .order('created_at', { ascending: false })
          .limit(4);

        if (error) throw error;
        setRecentArticles(data || []);
      } catch (error) {
        console.error('Error fetching recent articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
    fetchRecentArticles();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-burgundy-700"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };


  return (
    <div className="min-h-screen bg-warm-50">
      <Header />
      
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/articles" 
            className="inline-flex items-center gap-2 text-burgundy-700 hover:text-burgundy-900 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Articles</span>
          </Link>
        </div>
      </div>

      {/* Article Hero */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{formatDate(article.created_at)}</span>
              </div>
              <div className="flex items-center gap-1">
                <User size={16} />
                <span>{article.author}</span>
              </div>
              <span className="bg-burgundy-100 text-burgundy-700 px-3 py-1 rounded-full">
                {article.read_time} min read
              </span>
            </div>

            {/* Article Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-burgundy-900 mb-6 leading-tight animate-fade-in">
              {article.title}
            </h1>

            {/* Featured Image */}
            {article.image_url && (
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-8 animate-fade-in animation-delay-200">
                <img
                  src={article.image_url}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>

              {/* Tags */}
              <div className="border-t pt-6 mt-8">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag size={16} className="text-gray-400" />
                  <span className="text-sm font-medium text-gray-700">Tags:</span>
                  {article.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-burgundy-100 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-burgundy-900 mb-8">Recent Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {recentArticles.filter(a => a.id !== article.id).slice(0, 3).map((relatedArticle) => (
                <article key={relatedArticle.id} className="group">
                  <Link to={`/articles/${relatedArticle.slug}`}>
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
                      {relatedArticle.image_url ? (
                        <img
                          src={relatedArticle.image_url}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-burgundy-100 to-burgundy-200 flex items-center justify-center">
                          <span className="text-burgundy-500 text-sm">No Image</span>
                        </div>
                      )}
                    </div>
                    <h4 className="text-lg font-semibold text-burgundy-900 mb-2 group-hover:text-burgundy-700 transition-colors line-clamp-2">
                      {relatedArticle.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedArticle.description}
                    </p>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Article;
