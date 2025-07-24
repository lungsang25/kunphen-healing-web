

const BranchClinic = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Branch Clinic
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:order-last">
            <img 
              src="/lovable-uploads/166bf338-496b-42bc-af2f-9b50dbfd9517.png" 
              alt="Boudhanath Stupa - UNESCO World Heritage Site" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Nestled within the sacred circle of the UNESCO World Heritage Site at Boudhanath Stupa, 
              Kunphen Tibetan Medical Center offers authentic, time-tested Tibetan healing rooted in the 
              profound wisdom of Sowa Rigpa. Our Boudha branch was established in response to the heartfelt 
              requests of patients seeking holistic and compassionate care.
            </p>
            
            <p className="text-lg leading-relaxed">
              At Kunphen, we emphasize a personalized approach to healing—treating not just the symptoms 
              but addressing the root causes of illness. Our traditional herbal formulas, pulse diagnosis, 
              dietary guidance, and lifestyle recommendations are designed to restore balance and promote 
              long-term well-being.
            </p>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Patients benefit from:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Natural, side-effect-free herbal remedies
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Gentle and effective treatment for chronic and lifestyle-related diseases
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Mental and emotional health support through mind-body integration
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Preventive care and seasonal health guidance based on ancient Tibetan knowledge
                </li>
              </ul>
            </div>
            
            <p className="text-lg leading-relaxed">
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