
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { getArticleBySlug, getRecentArticles } from '../data/articles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : null;
  const recentArticles = getRecentArticles(3);

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

  const renderContent = (content: string) => {
    // Simple markdown-like rendering for headings and paragraphs
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold text-burgundy-900 mb-6 mt-8">{line.slice(2)}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-semibold text-burgundy-800 mb-4 mt-6">{line.slice(3)}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold text-burgundy-700 mb-3 mt-4">{line.slice(4)}</h3>;
      } else if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={index} className="font-semibold text-gray-800 mb-2">{line.slice(2, -2)}</p>;
      } else if (line.startsWith('- ')) {
        return <li key={index} className="text-gray-700 mb-1 ml-4">{line.slice(2)}</li>;
      } else if (line.trim() === '') {
        return <div key={index} className="mb-2"></div>;
      } else {
        return <p key={index} className="text-gray-700 mb-4 leading-relaxed">{line}</p>;
      }
    });
  };

  return (
    <div className="min-h-screen bg-warm-50">
      <Header />
      
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/media-news" 
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
                <span>{formatDate(article.createdAt)}</span>
              </div>
              <div className="flex items-center gap-1">
                <User size={16} />
                <span>{article.author}</span>
              </div>
              <span className="bg-burgundy-100 text-burgundy-700 px-3 py-1 rounded-full">
                {article.category}
              </span>
            </div>

            {/* Article Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-burgundy-900 mb-6 leading-tight animate-fade-in">
              {article.title}
            </h1>

            {/* Featured Image */}
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-8 animate-fade-in animation-delay-200">
              <img
                src={article.featuredImage}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="prose prose-lg max-w-none">
                {renderContent(article.content)}
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
                  <Link to={`/media-news/${relatedArticle.slug}`}>
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
                      <img
                        src={relatedArticle.featuredImage}
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-burgundy-900 mb-2 group-hover:text-burgundy-700 transition-colors line-clamp-2">
                      {relatedArticle.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedArticle.excerpt}
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
