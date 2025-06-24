import { Leaf, Heart, Brain, Users, Stethoscope, Sun } from 'lucide-react';

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
      color: "golden"
    },
    {
      icon: Brain,
      title: "Mental Health",
      description: "Holistic approach to treating anxiety, depression, and stress through traditional methods.",
      color: "earth"
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
      color: "golden"
    },
    {
      icon: Users,
      title: "Lifestyle Counseling",
      description: "Guidance on diet, exercise, meditation, and daily routines for optimal health.",
      color: "earth"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      burgundy: "bg-burgundy-100 text-burgundy-700",
      golden: "bg-golden-100 text-golden-700",
      earth: "bg-earth-100 text-earth-700"
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="services" className="py-20 bg-warm-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-burgundy-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive traditional Tibetan medical treatments designed to restore 
            balance and promote natural healing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${getColorClasses(service.color)} rounded-full flex items-center justify-center mb-6`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-burgundy-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-burgundy-700 to-burgundy-900 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Begin Your Healing Journey?</h3>
          <p className="text-xl mb-8 opacity-90">
            Contact us to learn more about our traditional Tibetan medicine treatments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
