import { Leaf, Heart, Brain, Users, Stethoscope, Sun, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Pulse Diagnosis",
      description: "Traditional Tibetan pulse reading to assess your body's energy and identify imbalances.",
      color: "burgundy"
    },
    {
      icon: Leaf,
      title: "Herbal Medicine",
      description: "Customized herbal formulations using authentic Tibetan medicinal plants and minerals.",
      color: "sage"
    },
    {
      icon: Brain,
      title: "Mental Health",
      description: "Holistic approach to treating anxiety, depression, and stress through traditional methods.",
      color: "golden"
    },
    {
      icon: Stethoscope,
      title: "Chronic Conditions",
      description: "Treatment for arthritis, digestive disorders, respiratory issues, and other chronic ailments.",
      color: "burgundy"
    },
    {
      icon: Sun,
      title: "Detoxification",
      description: "Natural cleansing therapies to remove toxins and restore your body's natural balance.",
      color: "sage"
    },
    {
      icon: Users,
      title: "Lifestyle Counseling",
      description: "Guidance on diet, exercise, meditation, and daily routines for optimal health.",
      color: "golden"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      burgundy: {
        bg: "bg-burgundy-100",
        icon: "text-burgundy-700",
        border: "group-hover:border-burgundy-200"
      },
      sage: {
        bg: "bg-sage-100",
        icon: "text-sage-700",
        border: "group-hover:border-sage-200"
      },
      golden: {
        bg: "bg-golden-100",
        icon: "text-golden-700",
        border: "group-hover:border-golden-200"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-cream-50 to-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <span className="text-label uppercase text-burgundy-600 block mb-3">What We Offer</span>
          <h2 className="font-heading text-h2 text-burgundy-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive traditional Tibetan medical treatments designed to restore 
            balance and promote natural healing.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div 
                key={index}
                className={`group card-elevated p-6 md:p-8 hover-lift border-border/50 ${colors.border} transition-all duration-300`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`icon-circle ${colors.bg} mb-6`}>
                  <service.icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="font-heading text-h3 text-burgundy-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 md:mt-20 relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-burgundy-800 to-burgundy-900" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          </div>
          
          <div className="relative p-8 md:p-12 text-center">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-cream-50 mb-4">
              Ready to Begin Your Healing Journey?
            </h3>
            <p className="text-lg text-cream-200 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about our traditional Tibetan medicine treatments.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-cream-50 text-burgundy-900 px-8 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get in Touch
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
