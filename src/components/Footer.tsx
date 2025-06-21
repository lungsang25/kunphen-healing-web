
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-burgundy-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/46a8ddb4-a6bf-4d5d-88ed-1e0973cd28b6.png" 
                  alt="Kunphen Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Kunphen</h3>
                <p className="text-burgundy-200">Tibetan Medical Center</p>
              </div>
            </div>
            <p className="text-burgundy-200 leading-relaxed mb-6 max-w-md">
              Dedicated to preserving and practicing traditional Tibetan medicine, 
              providing holistic healthcare that treats the mind, body, and spirit.
            </p>
            <div className="flex items-center space-x-2 text-golden-300">
              <Heart size={20} />
              <span>Healing with compassion since 1998</span>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-burgundy-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-burgundy-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-burgundy-200 hover:text-white transition-colors">Services</a></li>
              <li><a href="#doctors" className="text-burgundy-200 hover:text-white transition-colors">Our Doctors</a></li>
              <li><a href="#contact" className="text-burgundy-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-golden-400 mt-1" />
                <div className="text-burgundy-200">
                  <p>Kunphen Marg, Chhetrapati</p>
                  <p>Kathmandu, Nepal</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-golden-400" />
                <span className="text-burgundy-200">+977-1-5351920</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-golden-400" />
                <span className="text-burgundy-200">info@kunphenmedical.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-burgundy-700 mt-12 pt-8 text-center">
          <p className="text-burgundy-200">
            © 2024 Kunphen Tibetan Medical Center. All rights reserved. | 
            <span className="text-golden-300"> Made with compassion in Nepal</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
