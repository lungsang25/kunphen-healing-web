import { Users, Award, Clock, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <span className="text-label uppercase text-burgundy-600 block mb-3">Our Story</span>
          <h2 className="font-heading text-h2 text-burgundy-900 mb-4">
            About Kunphen Medical Center
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dedicated to preserving and practicing the ancient wisdom of Tibetan medicine
            while providing compassionate healthcare to our community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column - Main content */}
          <div className="space-y-6">
            <h3 className="font-heading text-h3 text-burgundy-900">
              A Brief Introduction to Kunphen Tibetan Medicine Center
            </h3>
            
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Tibetan traditional medicine is an ancient synthesis of the art of healing, which is drawing on the knowledge of medical systems existing in the wide region of Southeast and Central Asia, with ramifications to Chinese, Greek and Egyptian ancient healing knowledge. Through the process of drawing such synthesis, Tibetan medicine was established officially during the 7th to the 12th centuries A.D. from fundamental theoretical concepts based primarily on the Indian Buddhist system of medicine. The Buddha himself developed this system of medicine 2500 years ago.
              </p>
              <p>
                The Kunphen Tibetan Medical Centers was established in Kathmandu - Nepal, by its reputed founder: late Dr. Kunsang Phenthok (KUN-PHEN), with the aims to develop and research of Tibetan Herbal Medicine Services, in both Kathmandu - Nepal.
              </p>
              <p>
                The center continues to serve today under its original name: the Kunphen Tibetan Medical Center (KTMC). It is a primary health care charitable, cultural and educational institution that functions under the guidance and support of late Dr. Kunsang and its respected Tibetan medical team.
              </p>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="card-elevated p-6 text-center hover-lift">
                <div className="icon-circle bg-burgundy-100 mx-auto mb-4">
                  <Users className="w-6 h-6 text-burgundy-700" />
                </div>
                <h4 className="font-heading text-2xl font-bold text-burgundy-900">100,000+</h4>
                <p className="text-body-sm text-muted-foreground">Patients Treated</p>
              </div>
              <div className="card-elevated p-6 text-center hover-lift">
                <div className="icon-circle bg-golden-100 mx-auto mb-4">
                  <Award className="w-6 h-6 text-golden-700" />
                </div>
                <h4 className="font-heading text-2xl font-bold text-burgundy-900">Since 1973</h4>
                <p className="text-body-sm text-muted-foreground">Registered Center</p>
              </div>
            </div>
          </div>

          {/* Right column - Biography cards */}
          <div className="space-y-6">
            {/* Biography card */}
            <div className="card-elevated p-6 md:p-8 bg-gradient-to-br from-burgundy-50 to-cream-50 border-sage-200/50">
              <h4 className="font-heading text-h3 text-burgundy-900 mb-4">
                Late Dr. Kunsang: A Short Biography
              </h4>
              <div className="space-y-4 text-body-sm text-foreground/75 leading-relaxed">
                <p>
                  Dr. Kunsang, born in 1924, became a disciple of Venerable Khyenrab Norbu Rinpoche (1883 - 1992), one of the most famous physicians of the time (Doctor of His Holiness 13th Dalai Lama) and Director of the Chagpori Medical College Men-Tsee-Khang in Lhasa - Tibet, at the early age of 12.
                </p>
                <p>
                  In the late 1950's, Dr. Kunsang was called to assist the Nepal Royal palace to cure late King Tribhuvan from his liver disorder. After treating him highly successfully, Dr. Kunsang became appointed Tibetan Doctor to the late Nepal King Tribhuvan and subsequent members of the Nepal Kingdom Royal Family.
                </p>
                <p>
                  In 1963, the Nepal government granted the Kunphen Tibetan Medical Center the status of Traditional Health Trainer. In 1973, it became recognized by the Nepal Health Department as the first duly registered Tibetan Medicine Factory and Clinic.
                </p>
                <p>
                  Dr. Kunsang passed away in Kathmandu on August 12, 2006, deeply mourned by all who knew him for his compassion, science and wisdom.
                </p>
              </div>
            </div>

            {/* Kunphen Today card */}
            <div className="card-elevated p-6 md:p-8 bg-gradient-to-br from-sage-50 to-cream-50 border-sage-200/50">
              <h4 className="font-heading text-h3 text-burgundy-900 mb-4">
                Kunphen Today
              </h4>
              <p className="text-body-sm text-foreground/75 leading-relaxed mb-4">
                Today, Kunphen TMC has evolved as a modern institution for the delivery, study and promotion of Tibetan Traditional Medicine, delivering daily health/social services in Kathmandu Valley, producing Medicinal Herbs, and promoting seminars and conferences.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-body-sm text-foreground/75">
                  <div className="w-8 h-8 rounded-full bg-golden-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-golden-700" />
                  </div>
                  <span>Herbal Medicine Product Research</span>
                </li>
                <li className="flex items-center gap-3 text-body-sm text-foreground/75">
                  <div className="w-8 h-8 rounded-full bg-burgundy-100 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 text-burgundy-700" />
                  </div>
                  <span>Clinical Research and Mental Health</span>
                </li>
                <li className="flex items-center gap-3 text-body-sm text-foreground/75">
                  <div className="w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-sage-700" />
                  </div>
                  <span>Materia Medica Training</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
