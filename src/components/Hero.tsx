import { Heart, Leaf, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-cream-100 via-cream-50 to-sage-50 overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-burgundy-100/30 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100 rounded-full opacity-0 animate-fade-in">
              <span className="w-2 h-2 bg-sage-500 rounded-full animate-pulse-soft" />
              <span className="text-label uppercase text-sage-700">Ancient Wisdom • Modern Care</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="font-heading text-display text-burgundy-900 opacity-0 animate-fade-in animation-delay-100">
                Traditional{' '}
                <span className="text-accent">Tibetan Medicine:</span>
                <br />
                <span className="italic">Sowa Rigpa</span> System
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-xl opacity-0 animate-fade-in animation-delay-200">
                Experience authentic Tibetan medicine at Kunphen Medical Center. 
                Our ancient healing traditions meet modern healthcare in the heart of Kathmandu.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in animation-delay-300">
              <button 
                onClick={scrollToAbout}
                className="btn-outline"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-sage-200 opacity-0 animate-fade-in animation-delay-400">
              <div className="text-center md:text-left">
                <div className="icon-circle bg-burgundy-100 mx-auto md:mx-0 mb-3">
                  <Heart className="w-5 h-5 md:w-6 md:h-6 text-burgundy-700" />
                </div>
                <h3 className="font-heading font-semibold text-burgundy-900 text-lg">25+ Years</h3>
                <p className="text-body-sm text-muted-foreground">Experience</p>
              </div>
              <div className="text-center md:text-left">
                <div className="icon-circle bg-golden-100 mx-auto md:mx-0 mb-3">
                  <Leaf className="w-5 h-5 md:w-6 md:h-6 text-golden-700" />
                </div>
                <h3 className="font-heading font-semibold text-burgundy-900 text-lg">Natural</h3>
                <p className="text-body-sm text-muted-foreground">Remedies</p>
              </div>
              <div className="text-center md:text-left">
                <div className="icon-circle bg-sage-100 mx-auto md:mx-0 mb-3">
                  <span className="text-sage-700 font-bold text-lg">ཨ</span>
                </div>
                <h3 className="font-heading font-semibold text-burgundy-900 text-lg">Authentic</h3>
                <p className="text-body-sm text-muted-foreground">Tradition</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative opacity-0 animate-fade-in-scale animation-delay-200">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/520539a7-4a69-4987-a2ac-6cf6ad761847.png" 
                alt="Kunphen Medical Centre Building"
                className="rounded-2xl shadow-elevated w-full object-cover"
              />
              {/* Overlay card */}
              <div className="absolute -bottom-6 -left-4 md:-left-6 bg-background/95 backdrop-blur-sm p-4 md:p-5 rounded-xl shadow-card border border-sage-200/50">
                <p className="text-label uppercase text-burgundy-600 mb-1">Est. 1973</p>
                <p className="font-heading font-semibold text-burgundy-900">Serving Nepal for 50+ years</p>
              </div>
            </div>
            {/* Decorative background */}
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-full h-full bg-gradient-to-br from-accent/20 to-burgundy-200/30 rounded-2xl -z-10" />
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToAbout}
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground hover:text-burgundy-700 transition-colors animate-float"
        >
          <span className="text-body-sm">Scroll to explore</span>
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
