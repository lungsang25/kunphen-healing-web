import { Award, BookOpen, Heart } from 'lucide-react';

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Kunsang Dorjee",
      title: "Senior Physician",
      qualification: "Tibetan Medical College, Lhasa & Modern Medicine Training",
      experience: "20+ years",
      specialization: "Women's health, Pediatrics, Pulse diagnosis, Chronic conditions",
      image: "/lovable-uploads/2a3ccb03-c8ca-4024-8bb9-f54283323dae.png",
      description: "Dr. Kunsang trained at the prestigious Lhasa Tibetan Medical Institute in Tibet and has been practicing traditional Tibetan medicine for over two decades."
    },
    {
      name: "Dr. Nyima Tsering",
      title: "Senior Physician",
      qualification: "Men-Tsee-Khang, Tibetan Medical & Astro. Institute, India",
      experience: "15+ years",
      specialization: "Pulse diagnosis, Chronic conditions, Mental Health, Herbal formulations",
      image: "/lovable-uploads/d47670dc-9152-405f-9d95-a3cfb18b57f6.png",
      description: "Dr. Nyima trained at the prestigious Men-Tsee-Khang, Tibetan Medical & Astro. Institute and has been practicing traditional Tibetan medicine for over 15+ years."
    },
    {
      name: "Dr. Tenzin Lektsok",
      title: "Physician & Herbalist",
      qualification: "Central University of Tibetan Studies, Varanasi, India",
      experience: "15+ years",
      specialization: "Digestive disorders, Respiratory conditions, Chronic disorders",
      image: "/lovable-uploads/44701db8-6d61-4096-9c03-9adf933e175d.png",
      description: "Dr. Tenzin is an expert in herbal medicine preparation and has extensive knowledge of meditation-based healing practices."
    },
    {
      name: "Dr. Kusang Dorjee",
      title: "Chairman",
      qualification: "Physician & Herbalist",
      experience: "40+ years",
      specialization: "Digestive disorders, Respiratory conditions, Meditation therapy",
      image: "/lovable-uploads/65f91f89-eaac-411e-8fb1-544ba173bc33.png",
      description: "Dr. Kunsang is an expert in herbal medicine preparation and has extensive knowledge of meditation-based healing practices."
    },
    {
      name: "Dr. Kusang Phenthok (Kun-Phen)",
      title: "Founder",
      qualification: "Physician & Herbalist",
      experience: "70+ years",
      specialization: "Digestive disorders, Chronic disorders",
      image: "/lovable-uploads/6b8dc07f-2898-43df-9594-0c086fb4fd8d.png",
      description: "Dr. Kunsang is an expert in herbal medicine preparation and has extensive knowledge of meditation-based healing practices."
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-burgundy-900 mb-4">
            Our Expert Physicians
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our team of qualified Tibetan medicine practitioners, each bringing 
            years of experience and deep knowledge of traditional healing arts.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-warm-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="w-32 h-32 bg-gradient-to-br from-burgundy-400 to-golden-600 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                  {doctor.image.includes('lovable-uploads') ? (
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-white text-4xl font-bold">
                      {doctor.name.split(' ')[1].charAt(0)}
                    </span>
                  )}
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-burgundy-900 mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-golden-700 font-semibold mb-2">
                    {doctor.title}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    {doctor.qualification}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-burgundy-600" />
                    <span className="text-sm text-gray-700">{doctor.experience}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-golden-600 mt-0.5" />
                    <span className="text-sm text-gray-700">{doctor.specialization}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BookOpen className="w-5 h-5 text-earth-600 mt-0.5" />
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {doctor.description}
                    </p>
                  </div>
                </div>

                <button className="w-full mt-6 bg-burgundy-700 text-white py-3 rounded-full hover:bg-burgundy-800 transition-colors">
                  Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
