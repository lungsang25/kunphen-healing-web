
import { ArrowRight, Heart, Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-warm-50 to-golden-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-burgundy-900 leading-tight">
                <span className="inline-block animate-fade-in">Traditional</span>
                <span className="text-golden-600 inline-block animate-fade-in animation-delay-200"> Tibetan Medicine: </span>
                <span className="inline-block animate-fade-in animation-delay-400">Sowa Rigpa System</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Experience authentic Tibetan medicine at Kunphen Medical Center. 
                Our ancient healing traditions meet modern healthcare in the heart of Kathmandu.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="border-2 border-burgundy-700 text-burgundy-700 px-8 py-4 rounded-full hover:bg-burgundy-700 hover:text-white transition-all">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-burgundy-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="text-burgundy-700" size={24} />
                </div>
                <h3 className="font-semibold text-burgundy-900">25+ Years</h3>
                <p className="text-sm text-gray-600">Experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-golden-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="text-golden-700" size={24} />
                </div>
                <h3 className="font-semibold text-burgundy-900">Natural</h3>
                <p className="text-sm text-gray-600">Remedies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-earth-700 font-bold text-lg">ཨ</span>
                </div>
                <h3 className="font-semibold text-burgundy-900">Authentic</h3>
                <p className="text-sm text-gray-600">Tradition</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/520539a7-4a69-4987-a2ac-6cf6ad761847.png" 
                alt="Kunphen Medical Centre Building"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-golden-400 to-burgundy-600 rounded-2xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
