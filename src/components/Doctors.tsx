import { Award, BookOpen, Heart } from 'lucide-react';

const Doctors = () => {
  const doctors = [
    {
      name: "Late Dr. Kunsang Phenthok (Kun-Phen)",
      title: "Founder",
      qualification: "Physician & Herbalist",
      experience: "70+ years",
      specialization: "Digestive disorders, Chronic disorders",
      image: "/lovable-uploads/6b8dc07f-2898-43df-9594-0c086fb4fd8d.png",
      description: "Dr. Kunsang is an expert in herbal medicine preparation and has extensive knowledge of meditation-based healing practices."
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
      name: "Dr. Tashi Pedon",
      title: "Senior Physician",
      qualification: "Tibetan Medical College, Lhasa",
      experience: "20+ years",
      specialization: "Women's health, Pediatrics, Pulse diagnosis, Chronic conditions",
      image: "/lovable-uploads/44701db8-6d61-4096-9c03-9adf933e175d.png",
      description: "Dr. Tashi is a highly respected practitioner of Traditional Tibetan Medicine (Sowa Rigpa), with over two decades of clinical experience. She received her formal training at the prestigious Lhasa Tibetan Medical Institute, studying under renowned masters such as Truru Tsenam Rinpoche and Gen Gonju Wangdu, and later had the good fortune of further refining her clinical skills under esteemed physicians including Dr. Kunsang. Dr. Tashi is widely known among her patients for her compassionate, attentive, and deeply caring approach to healing. She possesses extensive knowledge in the treatment of chronic non-communicable diseases, particularly rheumatoid arthritis (RA factor), internal disorders, and psychological conditions—areas in which she has gained notable clinical success. With her strong grounding in classical Sowa Rigpa diagnostics and therapies, combined with a sincere dedication to patient well-being, Dr. Tashi continues to make a profound impact in the field of Tibetan medicine."
    },
    {
      name: "Dr. Nyima Tsering",
      title: "Managing Director/Senior Physician/Herbalist",
      qualification: "Men-Tsee-Khang, Tibetan Medical & Astro. Institute, India",
      experience: "15+ years",
      specialization: "Pulse diagnosis, Chronic conditions, Mental Health, Herbal formulations",
      image: "/lovable-uploads/d47670dc-9152-405f-9d95-a3cfb18b57f6.png",
      description: "Dr. Nyima is a leading authority in Sowa Rigpa (Traditional Tibetan Medicine), with formal training in India in both Sowa Rigpa Medicine and Buddhist Philosophy. He is a founding member and Principal of the Sowa Rigpa International College in Kathmandu—the first institution in Nepal to offer a Bachelor's degree in Sowa Rigpa, affiliated with Lumbini Buddhist University. He also serves as Chief Physician at the Kunphen Tibetan Medical Centre. Renowned for his expertise in traditional diagnostic methods—including pulse reading, urine analysis, and tongue observation—Dr. Nyima brings a holistic approach to healing rooted in ancient wisdom. He has been instrumental in the education, clinical training, and preservation of Sowa Rigpa in Nepal, and is actively involved in research and advocacy for traditional formulations such as Agar-35, used in addressing mental health concerns like anxiety and stress. Beyond Nepal, Dr. Nyima teaches and practices Sowa Rigpa internationally, including in the United States, Latvia, Russia, and across Europe, where he is recognized for his ability to bridge traditional Tibetan healing with modern healthcare contexts. With decades of experience as a physician and educator, Dr. Nyima continues to inspire a new generation of practitioners while expanding the global reach and relevance of Sowa Rigpa medicine."
    },
    {
      name: "Dr. Tenzin Lektsok",
      title: "Senior physician",
      qualification: "Central University of Tibetan Studies, Varanasi, India",
      experience: "15+ years",
      specialization: "Digestive disorders, Respiratory conditions, Chronic disorders",
      image: "/lovable-uploads/2a3ccb03-c8ca-4024-8bb9-f54283323dae.png",
      description: "Dr. Tenzin is an experienced specialist in internal chronic diseases, with particular expertise in managing complex conditions such as rheumatoid arthritis (RA factor) and psychological disorders. With a long-standing clinical background, Dr. Tenzin is known for providing effective, compassionate care for patients facing persistent and challenging health issues."
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
