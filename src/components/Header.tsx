import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '#home') return location.pathname === '/';
    return false;
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', action: () => scrollToSection('home'), isSection: true },
    { label: 'About', action: () => scrollToSection('about'), isSection: true },
    { label: 'Services', action: () => scrollToSection('services'), isSection: true },
    { label: 'Doctors', action: () => scrollToSection('doctors'), isSection: true },
    { label: 'Articles', href: '/articles', isSection: false },
    { label: 'Contact', action: () => scrollToSection('contact'), isSection: true },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-elevated' : ''}`}>
      {/* Top contact bar */}
      <div className="bg-burgundy-900 text-cream-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-between items-center py-2.5 text-body-sm">
            <div className="hidden md:flex items-center gap-6">
              <a href="tel:+97715351920" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone size={14} className="text-accent" />
                <span>+977-1-5351920</span>
              </a>
              <a href="mailto:kunphentmc@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail size={14} className="text-accent" />
                <span>kunphentmc@gmail.com</span>
              </a>
            </div>
            <a 
              href="https://maps.app.goo.gl/mZv4F14iCj9fzgnPA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors mx-auto md:mx-0"
            >
              <MapPin size={14} className="text-accent" />
              <span>Chhetrapati, Kathmandu, Nepal</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={`bg-background/95 backdrop-blur-md border-b border-border/40 transition-all duration-300`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center transition-transform group-hover:scale-105">
                <img 
                  src="/lovable-uploads/46a8ddb4-a6bf-4d5d-88ed-1e0973cd28b6.png" 
                  alt="Kunphen Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-heading font-bold text-burgundy-900 leading-tight">
                  Kunphen
                </h1>
                <p className="text-xs md:text-sm text-muted-foreground font-body -mt-0.5">
                  Tibetan Medical Center
                </p>
              </div>
            </Link>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                item.isSection ? (
                  <button 
                    key={item.label}
                    onClick={item.action}
                    className="relative px-4 py-2 text-body-sm font-medium text-foreground/80 hover:text-burgundy-700 transition-colors group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-burgundy-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </button>
                ) : (
                  <Link 
                    key={item.label}
                    to={item.href!}
                    className={`relative px-4 py-2 text-body-sm font-medium transition-colors group ${
                      location.pathname.startsWith('/articles') 
                        ? 'text-burgundy-700' 
                        : 'text-foreground/80 hover:text-burgundy-700'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-burgundy-600 transition-transform origin-left ${
                      location.pathname.startsWith('/articles') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </Link>
                )
              ))}
            </div>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 text-foreground/80 hover:text-burgundy-700 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-smooth ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="container mx-auto px-4 pb-6">
            <div className="flex flex-col gap-1 pt-2 border-t border-border/40">
              {navItems.map((item) => (
                item.isSection ? (
                  <button 
                    key={item.label}
                    onClick={item.action}
                    className="text-left py-3 px-4 text-foreground/80 hover:text-burgundy-700 hover:bg-burgundy-50 rounded-lg transition-colors font-medium"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link 
                    key={item.label}
                    to={item.href!}
                    onClick={() => setIsMenuOpen(false)}
                    className="py-3 px-4 text-foreground/80 hover:text-burgundy-700 hover:bg-burgundy-50 rounded-lg transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
