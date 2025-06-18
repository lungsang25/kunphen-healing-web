
import { Users, Award, Clock, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-burgundy-900 mb-4">
            About Kunphen Medical Center
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to preserving and practicing the ancient wisdom of Tibetan medicine
            while providing compassionate healthcare to our community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-burgundy-900">
              A Brief Introduction to Kunphen Tibetan Medicine Center
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Tibetan traditional medicine is an ancient synthesis of the art of healing, which is drawing on the knowledge of medical systems existing in the wide region of Southeast and Central Asia, with ramifications to Chinese, Greek and Egyptian ancient healing knowledge. Through the process of drawing such synthesis, Tibetan medicine was established officially during the 7th to the 12th centuries A.D. from fundamental theoretical concepts based primarily on the Indian Buddhist system of medicine. The Buddha himself developed this system of medicine 2500 years ago.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Kunphen Tibetan Medical Centers was established in Kathmandu - Nepal, by its reputed founder: late Dr. Kunsang Phenthok (KUN-PHEN), with the aims to develop and research of Tibetan Herbal Medicine Services, in both Kathmandu - Nepal.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The center continues to serve today under its original name: the Kunphen Tibetan Medical Center (KTMC). It is a primary health care charitable, cultural and educational institution that functions under the guidance and support of late Dr. Kunsang and its respected Tibetan medical team.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-burgundy-50 rounded-xl">
                <Users className="w-12 h-12 text-burgundy-700 mx-auto mb-3" />
                <h4 className="text-2xl font-bold text-burgundy-900">100,000+</h4>
                <p className="text-gray-600">Patients Treated</p>
              </div>
              <div className="text-center p-6 bg-golden-50 rounded-xl">
                <Award className="w-12 h-12 text-golden-700 mx-auto mb-3" />
                <h4 className="text-2xl font-bold text-burgundy-900">Since 1973</h4>
                <p className="text-gray-600">Registered Center</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-burgundy-50 to-golden-50 p-8 rounded-2xl">
              <h4 className="text-2xl font-bold text-burgundy-900 mb-4">Late Dr. Kunsang: A Short Biography</h4>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                Dr. Kunsang, born in 1924, became a disciple of Venerable Khyenrab Norbu Rinpoche (1883 - 1992), one of the most famous physicians of the time (Doctor of His Holiness 13th Dalai Lama) and Director of the Chagpori Medical College Men-Tsee-Khang in Lhasa - Tibet, at the early age of 12.
              </p>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                In the late 1950's, Dr. Kunsang was called to assist the Nepal Royal palace to cure late King Tribhuvan from his liver disorder. After treating him highly successfully, Dr. Kunsang became appointed Tibetan Doctor to the late Nepal King Tribhuvan and subsequent members of the Nepal Kingdom Royal Family.
              </p>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                In 1963, the Nepal government granted the Kunphen Tibetan Medical Center the status of Traditional Health Trainer. In 1973, it became recognized by the Nepal Health Department as the first duly registered Tibetan Medicine Factory and Clinic.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Dr. Kunsang passed away in Kathmandu on August 12, 2006, deeply mourned by all who knew him for his compassion, science and wisdom.
              </p>
            </div>

            <div className="bg-gradient-to-r from-golden-50 to-earth-50 p-8 rounded-2xl">
              <h4 className="text-2xl font-bold text-burgundy-900 mb-4">Kunphen Today</h4>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                Today, Kunphen TMC has evolved as a modern institution for the delivery, study and promotion of Tibetan Traditional Medicine, delivering daily health/social services in Kathmandu Valley, producing Medicinal Herbs, and promoting seminars and conferences.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-golden-600" />
                  <span>Herbal Medicine Product Research</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-burgundy-600" />
                  <span>Clinical Research and Mental Health</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-golden-600" />
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
