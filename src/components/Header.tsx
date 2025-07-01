
import { Phone, Mail, MapPin, Menu } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === '#home') return location.pathname === '/';
    return false;
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // Navigate to home page first, then scroll to section
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

  return (
    <header className="bg-white shadow-sm">
      {/* Top contact bar */}
      <div className="bg-burgundy-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+977-1-5351920</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>kunphentmc@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <a 
                href="https://maps.app.goo.gl/mZv4F14iCj9fzgnPA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-golden-300 transition-colors underline"
              >
                Chhetrapati, Kathmandu, Nepal
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="/lovable-uploads/46a8ddb4-a6bf-4d5d-88ed-1e0973cd28b6.png" 
                alt="Kunphen Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-burgundy-900">Kunphen</h1>
              <p className="text-sm text-gray-600">Tibetan Medical Center</p>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`transition-colors ${isActive('#home') ? 'text-burgundy-700 font-medium' : 'text-gray-700 hover:text-burgundy-700'}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-burgundy-700 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-700 hover:text-burgundy-700 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('doctors')} 
              className="text-gray-700 hover:text-burgundy-700 transition-colors"
            >
              Doctors
            </button>
            <Link 
              to="/media-news" 
              className={`transition-colors ${location.pathname.startsWith('/media-news') ? 'text-burgundy-700 font-medium' : 'text-gray-700 hover:text-burgundy-700'}`}
            >
              Article
            </Link>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 hover:text-burgundy-700 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-left text-gray-700 hover:text-burgundy-700 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left text-gray-700 hover:text-burgundy-700 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-left text-gray-700 hover:text-burgundy-700 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('doctors')} 
                className="text-left text-gray-700 hover:text-burgundy-700 transition-colors"
              >
                Doctors
              </button>
              <Link 
                to="/media-news" 
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-gray-700 hover:text-burgundy-700 transition-colors"
              >
                Article
              </Link>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left text-gray-700 hover:text-burgundy-700 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
