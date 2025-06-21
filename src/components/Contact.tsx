
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-burgundy-50 to-golden-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-burgundy-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to schedule your consultation or learn more about 
            traditional Tibetan medicine.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-burgundy-900 mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-burgundy-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-burgundy-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-burgundy-900">Address</h4>
                    <p className="text-gray-600">
                      Kunphen Marg, Chhetrapati<br />
                      Kathmandu, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-golden-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-golden-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-burgundy-900">Phone</h4>
                    <p className="text-gray-600">
                      +977-1-5351920<br />
                      +977-98-08614142
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-earth-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-burgundy-900">Email</h4>
                    <p className="text-gray-600">
                      info@kunphenmedical.com<br />
                      appointments@kunphenmedical.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-burgundy-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-burgundy-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-burgundy-900">Hours</h4>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 4:00 PM</p>
                      <p>Sunday: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-burgundy-900 mb-6">
              Send Us a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                  placeholder="+977-98-08614142"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                  placeholder="Tell us about your health concerns or questions..."
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-burgundy-700 text-white py-4 rounded-lg hover:bg-burgundy-800 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
