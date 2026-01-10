import { Heart, Leaf, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import pulseReadingImg from '@/assets/pulse-reading-sm.jpg';

const heroImages = [
  { src: "/assets/pulse-reading-sm.jpg", alt: "Kunphen Medical Centre Building" },
  { src: "/assets/medicine_buddha.webp", alt: "Traditional Tibetan Medicine" },
  { src: "/assets/kunphen-medical-center.jpg", alt: "Healing Center" },
  { src: "/assets/Knowledge-of-Healing.webp", alt: "Medical Practice" },
  { src: "/assets/boudhanath-stupa.jpg", alt: "Tibetan Healing" },
  { src: "/assets/sowa-rigpa.png", alt: "Natural Remedies" },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeStatIndex, setActiveStatIndex] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Wind wave effect - cycles through stats
  useEffect(() => {
    const windCycle = () => {
      // Activate each stat in sequence with delays
      setTimeout(() => setActiveStatIndex(0), 0);
      setTimeout(() => setActiveStatIndex(1), 600);
      setTimeout(() => setActiveStatIndex(2), 1200);
      setTimeout(() => setActiveStatIndex(null), 1800);
    };

    // Initial delay before first wind
    const initialDelay = setTimeout(windCycle, 2000);
    // Repeat wind cycle every 4 seconds
    const interval = setInterval(windCycle, 4000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

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
      
      <div className="container mx-auto px-4 md:px-6 pt-5 md:pt-10 pb-16 md:pb-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Label - Tibetan Herbal Medicine Touch */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-sage-100 via-golden-50 to-sage-100 rounded-full opacity-0 animate-fade-in border border-sage-200/50 shadow-sm hover:shadow-md transition-all duration-500 group cursor-default">
              {/* Animated Tibetan-inspired icon */}
              <div className="relative">
                <span className="text-lg animate-pulse-soft">༄</span>
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-golden-400 rounded-full animate-ping opacity-75" />
              </div>
              
              {/* Decorative leaf */}
              <Leaf className="w-4 h-4 text-sage-600 animate-float" style={{ animationDuration: '3s' }} />
              
              <span className="text-label uppercase tracking-wider bg-gradient-to-r from-sage-700 via-burgundy-600 to-sage-700 bg-clip-text text-transparent font-medium">
                Ancient Wisdom • Modern Care
              </span>
              
              {/* Decorative leaf mirrored */}
              <Leaf className="w-4 h-4 text-sage-600 animate-float transform scale-x-[-1]" style={{ animationDuration: '3.5s' }} />
              
              {/* Animated Tibetan-inspired icon */}
              <div className="relative">
                <span className="text-lg animate-pulse-soft" style={{ animationDelay: '0.5s' }}>༈</span>
                <span className="absolute -top-0.5 -left-0.5 w-1.5 h-1.5 bg-burgundy-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '1s' }} />
              </div>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="font-heading text-display text-burgundy-900 opacity-0 animate-fade-in animation-delay-100">
                Traditional{' '}
                <span className="text-accent">Tibetan Medicine:</span>
                <br />
                <span className="italic">Sowa Rigpa</span> System
              </h1>
              <p className="text-lg md:text-lg text-foreground/70 leading-relaxed max-w-xl opacity-0 animate-fade-in animation-delay-200">
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
              {/* 25+ Years */}
              <div className="text-center md:text-left cursor-default">
                <div className={`icon-circle bg-burgundy-100 mx-auto md:mx-0 mb-3 transition-all duration-500 relative overflow-hidden ${
                  activeStatIndex === 0 ? 'scale-110 shadow-lg bg-burgundy-200' : ''
                }`}>
                  <Heart className={`w-5 h-5 md:w-6 md:h-6 text-burgundy-700 transition-transform duration-500 ${
                    activeStatIndex === 0 ? 'scale-110 animate-pulse' : ''
                  }`} />
                  <span className={`absolute inset-0 bg-burgundy-300/30 rounded-full transition-transform duration-500 ${
                    activeStatIndex === 0 ? 'scale-100' : 'scale-0'
                  }`} />
                </div>
                <h3 className={`font-heading font-semibold text-lg transition-colors duration-500 ${
                  activeStatIndex === 0 ? 'text-burgundy-700' : 'text-burgundy-900'
                }`}>25+ Years</h3>
                <p className={`text-body-sm transition-colors duration-500 ${
                  activeStatIndex === 0 ? 'text-burgundy-600/70' : 'text-muted-foreground'
                }`}>Experience</p>
              </div>
              
              {/* Natural Remedies */}
              <div className="text-center md:text-left cursor-default">
                <div className={`icon-circle bg-golden-100 mx-auto md:mx-0 mb-3 transition-all duration-500 relative overflow-hidden ${
                  activeStatIndex === 1 ? 'scale-110 shadow-lg bg-golden-200' : ''
                }`}>
                  <Leaf className={`w-5 h-5 md:w-6 md:h-6 text-golden-700 transition-transform duration-500 ${
                    activeStatIndex === 1 ? 'rotate-12 scale-110' : ''
                  }`} />
                  <span className={`absolute inset-0 bg-golden-300/30 rounded-full transition-transform duration-500 ${
                    activeStatIndex === 1 ? 'scale-100' : 'scale-0'
                  }`} />
                </div>
                <h3 className={`font-heading font-semibold text-lg transition-colors duration-500 ${
                  activeStatIndex === 1 ? 'text-golden-700' : 'text-burgundy-900'
                }`}>Natural</h3>
                <p className={`text-body-sm transition-colors duration-500 ${
                  activeStatIndex === 1 ? 'text-golden-600/70' : 'text-muted-foreground'
                }`}>Remedies</p>
              </div>
              
              {/* Authentic Tradition */}
              <div className="text-center md:text-left cursor-default">
                <div className={`icon-circle bg-sage-100 mx-auto md:mx-0 mb-3 transition-all duration-500 relative overflow-hidden flex items-center justify-center ${
                  activeStatIndex === 2 ? 'scale-110 shadow-lg bg-sage-200' : ''
                }`}>
                  <span className={`text-sage-800 font-bold text-3xl transition-transform duration-500 inline-block leading-none -mt-2.5 ${
                    activeStatIndex === 2 ? 'scale-125' : ''
                  }`}>ཨ</span>
                  <span className={`absolute inset-0 bg-sage-300/30 rounded-full transition-transform duration-500 ${
                    activeStatIndex === 2 ? 'scale-100' : 'scale-0'
                  }`} />
                </div>
                <h3 className={`font-heading font-semibold text-lg transition-colors duration-500 ${
                  activeStatIndex === 2 ? 'text-sage-700' : 'text-burgundy-900'
                }`}>Authentic</h3>
                <p className={`text-body-sm transition-colors duration-500 ${
                  activeStatIndex === 2 ? 'text-sage-600/70' : 'text-muted-foreground'
                }`}>Tradition</p>
              </div>
            </div>
          </div>

          {/* Image Slider */}
          <div className="relative opacity-0 animate-fade-in-scale animation-delay-200">
            <div className="relative z-10">
              {/* Slider Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-elevated h-[350px] md:h-[450px] lg:h-[450px]">
                {heroImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-background transition-colors z-20"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5 text-burgundy-700" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-background transition-colors z-20"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5 text-burgundy-700" />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-burgundy-600 w-6' 
                          : 'bg-background/60 hover:bg-background/80'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Overlay card */}
              <div className="absolute -bottom-6 -left-4 md:-left-6 bg-background/95 backdrop-blur-sm p-4 md:p-5 rounded-xl shadow-card border border-sage-200/50 z-30">
                <p className="text-label uppercase text-burgundy-600 mb-1">Est. 1973</p>
                <p className="font-heading font-semibold text-burgundy-900">Serving Nepal for 50+ years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
