
import { Phone, Mail, MapPin, Menu } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      {/* Top contact bar */}
      <div className="bg-burgundy-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+977-1-4440123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>info@kunphenmedical.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>Boudha, Kathmandu, Nepal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
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
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-burgundy-700 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-burgundy-700 transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-burgundy-700 transition-colors">Services</a>
            <a href="#doctors" className="text-gray-700 hover:text-burgundy-700 transition-colors">Doctors</a>
            <a href="#contact" className="text-gray-700 hover:text-burgundy-700 transition-colors">Contact</a>
            <button className="bg-burgundy-700 text-white px-6 py-2 rounded-full hover:bg-burgundy-800 transition-colors">
              Book Appointment
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
              <a href="#home" className="text-gray-700 hover:text-burgundy-700 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-burgundy-700 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-burgundy-700 transition-colors">Services</a>
              <a href="#doctors" className="text-gray-700 hover:text-burgundy-700 transition-colors">Doctors</a>
              <a href="#contact" className="text-gray-700 hover:text-burgundy-700 transition-colors">Contact</a>
              <button className="bg-burgundy-700 text-white px-6 py-2 rounded-full hover:bg-burgundy-800 transition-colors w-fit">
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
