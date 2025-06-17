
import { Award, BookOpen, Heart } from 'lucide-react';

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Tashi Pedon",
      title: "Senior Physician",
      qualification: "Tibetan Medical College, Lhasa & Modern Medicine Training",
      experience: "20+ years",
      specialization: "Women's health, Pediatrics, Pulse diagnosis, Chronic conditions",
      image: "/lovable-uploads/doctor-1.jpg",
      description: "Dr. Tashi trained at the prestigious Lhasa Tibetan Medical Institute in Tibet and has been practicing traditional Tibetan medicine for over two decades."
    },
    {
      name: "Dr. Pema Dolma",
      title: "Senior Physician",
      qualification: "Tibetan Medical College, Lhasa & Modern Medicine Training",
      experience: "18+ years",
      specialization: "Women's health, Pediatrics, Herbal formulations",
      image: "/lovable-uploads/doctor-2.jpg",
      description: "Dr. Dolma combines traditional Tibetan medicine with modern medical knowledge, specializing in women's and children's health."
    },
    {
      name: "Dr. Lobsang Tashi",
      title: "Physician & Herbalist",
      qualification: "Tibetan Medical University & Ayurvedic Studies",
      experience: "15+ years",
      specialization: "Digestive disorders, Respiratory conditions, Meditation therapy",
      image: "/lovable-uploads/doctor-3.jpg",
      description: "Dr. Tashi is an expert in herbal medicine preparation and has extensive knowledge of meditation-based healing practices."
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
                <div className="w-32 h-32 bg-gradient-to-br from-burgundy-400 to-golden-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">
                    {doctor.name.split(' ')[1].charAt(0)}
                  </span>
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
