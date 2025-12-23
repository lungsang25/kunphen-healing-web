import { Heart, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Doctors', href: '#doctors' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-burgundy-900 text-cream-100 relative">
      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg hover:bg-golden-500 transition-colors hover:-translate-y-1"
        aria-label="Back to top"
      >
        <ArrowUp size={20} className="text-burgundy-900" />
      </button>

      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/46a8ddb4-a6bf-4d5d-88ed-1e0973cd28b6.png" 
                  alt="Kunphen Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-cream-50">Kunphen</h3>
                <p className="text-burgundy-200 text-body-sm">Tibetan Medical Center</p>
              </div>
            </div>
            <p className="text-burgundy-200 leading-relaxed mb-6 max-w-md">
              Dedicated to preserving and practicing traditional Tibetan medicine, 
              providing holistic healthcare that treats the mind, body, and spirit.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-burgundy-800/50 rounded-full text-golden-300">
              <Heart size={16} className="animate-pulse-soft" />
              <span className="text-body-sm">Healing with compassion since 1973</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-cream-50 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-burgundy-200 hover:text-cream-50 transition-colors text-body-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-cream-50 mb-6">Contact Info</h4>
            <div className="space-y-4">
              <a 
                href="https://maps.app.goo.gl/mZv4F14iCj9fzgnPA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-burgundy-200 hover:text-cream-50 transition-colors group"
              >
                <MapPin className="w-5 h-5 text-golden-400 mt-0.5 flex-shrink-0" />
                <div className="text-body-sm">
                  <p>Kunphen Marg, Chhetrapati</p>
                  <p>Kathmandu, Nepal</p>
                </div>
              </a>
              <a 
                href="tel:+97715351920"
                className="flex items-center gap-3 text-burgundy-200 hover:text-cream-50 transition-colors"
              >
                <Phone className="w-5 h-5 text-golden-400" />
                <span className="text-body-sm">+977-1-5351920</span>
              </a>
              <a 
                href="mailto:kunphentmc@gmail.com"
                className="flex items-center gap-3 text-burgundy-200 hover:text-cream-50 transition-colors"
              >
                <Mail className="w-5 h-5 text-golden-400" />
                <span className="text-body-sm">kunphentmc@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-burgundy-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-burgundy-300 text-body-sm">
              © {new Date().getFullYear()} Kunphen Tibetan Medical Center. All rights reserved.
            </p>
            <p className="text-golden-400 text-body-sm">
              Made with compassion in Nepal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
