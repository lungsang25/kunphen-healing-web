
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

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-burgundy-900">
              Ancient Wisdom, Modern Care
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Founded in 1973, Kunphen Medical Center has been a beacon of traditional Tibetan 
              medicine in Nepal as its first ever Tibetan Medical System (Sowa-Rigpa). Our center combines centuries-old healing practices with 
              contemporary healthcare approaches to provide holistic treatment for our patients.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe in treating the whole person - mind, body, and spirit - using natural 
              remedies, meditation practices, and lifestyle guidance rooted in Tibetan Buddhist 
              medical traditions.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-burgundy-50 rounded-xl">
                <Users className="w-12 h-12 text-burgundy-700 mx-auto mb-3" />
                <h4 className="text-2xl font-bold text-burgundy-900">5000+</h4>
                <p className="text-gray-600">Patients Treated</p>
              </div>
              <div className="text-center p-6 bg-golden-50 rounded-xl">
                <Award className="w-12 h-12 text-golden-700 mx-auto mb-3" />
                <h4 className="text-2xl font-bold text-burgundy-900">50+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-burgundy-50 to-golden-50 p-8 rounded-2xl">
              <h4 className="text-2xl font-bold text-burgundy-900 mb-4">Our Philosophy</h4>
              <p className="text-gray-700 mb-4">
                Tibetan medicine views health as a balance between the three humors: wind (rLung), 
                bile (mKhris-pa), and phlegm (Bad-kan). Our treatments aim to restore this balance 
                through natural means.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-golden-600" />
                  <span>Comprehensive diagnosis through pulse reading</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-burgundy-600" />
                  <span>Personalized herbal medicine prescriptions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-golden-600" />
                  <span>Lifestyle and dietary guidance</span>
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
