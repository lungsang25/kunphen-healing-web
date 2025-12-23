import { MapPin, CheckCircle } from 'lucide-react';

const BranchClinic = () => {
  const benefits = [
    "Natural, side-effect-free herbal remedies",
    "Gentle and effective treatment for chronic and lifestyle-related diseases",
    "Mental and emotional health support through mind-body integration",
    "Preventive care and seasonal health guidance based on ancient Tibetan knowledge"
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-cream-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <span className="text-label uppercase text-burgundy-600 block mb-3">Expanding Our Reach</span>
          <h2 className="font-heading text-h2 text-burgundy-900 mb-4">
            Branch Clinic
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin size={18} className="text-burgundy-600" />
            <span>Boudhanath, Kathmandu</span>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="lg:order-last">
            <div className="relative">
              <img 
                src="/lovable-uploads/6ea67a64-d8f4-4797-b9bb-4d9511c57532.png" 
                alt="Boudhanath Stupa - UNESCO World Heritage Site" 
                className="w-full h-auto rounded-2xl shadow-elevated"
              />
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full bg-gradient-to-br from-sage-200/40 to-burgundy-100/40 rounded-2xl -z-10" />
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Nestled within the sacred circle of the UNESCO World Heritage Site at Boudhanath Stupa, 
              Kunphen Tibetan Medical Center offers authentic, time-tested Tibetan healing rooted in the 
              profound wisdom of Sowa Rigpa. Our Boudha branch was established in response to the heartfelt 
              requests of patients seeking holistic and compassionate care.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              At Kunphen, we emphasize a personalized approach to healing—treating not just the symptoms 
              but addressing the root causes of illness. Our traditional herbal formulas, pulse diagnosis, 
              dietary guidance, and lifestyle recommendations are designed to restore balance and promote 
              long-term well-being.
            </p>
            
            {/* Benefits card */}
            <div className="card-elevated p-6 md:p-8 border-sage-200/50">
              <h3 className="font-heading text-h3 text-burgundy-900 mb-5">
                Patients benefit from:
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/75">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <p className="text-foreground/70 leading-relaxed">
              With growing demand from places like Pokhara, Nepalgunj, and other cities, we are preparing 
              to open new branches in the near future—ensuring that more communities across Nepal have 
              access to trusted Tibetan medical care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchClinic;
