import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      content: (
        <a 
          href="https://maps.app.goo.gl/mZv4F14iCj9fzgnPA"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-burgundy-700 transition-colors"
        >
          Kunphen Marg, Chhetrapati<br />
          Kathmandu, Nepal
        </a>
      ),
      color: "burgundy"
    },
    {
      icon: Phone,
      label: "Phone",
      content: (
        <div className="space-y-1">
          <a href="tel:+97715351920" className="block hover:text-burgundy-700 transition-colors">
            +977-1-5351920
          </a>
          <a href="tel:+9779808614142" className="block hover:text-burgundy-700 transition-colors">
            +977-98-08614142
          </a>
        </div>
      ),
      color: "golden"
    },
    {
      icon: Mail,
      label: "Email",
      content: (
        <div className="space-y-1">
          <a href="mailto:kunphentmc@gmail.com" className="block hover:text-burgundy-700 transition-colors">
            kunphentmc@gmail.com
          </a>
          <a href="mailto:appointments@kunphenmedical.com" className="block hover:text-burgundy-700 transition-colors">
            appointments@kunphenmedical.com
          </a>
        </div>
      ),
      color: "sage"
    },
    {
      icon: Clock,
      label: "Hours",
      content: (
        <div className="space-y-1">
          <p>Monday - Saturday: 9:00 AM - 5:00 PM</p>
          <p>Sunday: Closed</p>
          <p className="text-muted-foreground">Lunch break: 12:30 PM - 2:00 PM</p>
        </div>
      ),
      color: "burgundy"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      burgundy: "bg-burgundy-100 text-burgundy-700",
      golden: "bg-golden-100 text-golden-700",
      sage: "bg-sage-100 text-sage-700"
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-cream-50 via-background to-sage-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <span className="text-label uppercase text-burgundy-600 block mb-3">Get in Touch</span>
          <h2 className="font-heading text-h2 text-burgundy-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Get in touch with us to schedule your consultation or learn more about 
            traditional Tibetan medicine.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact info */}
          <div>
            <div className="card-elevated p-6 md:p-8">
              <h3 className="font-heading text-h3 text-burgundy-900 mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`icon-circle ${getColorClasses(item.color)} flex-shrink-0`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-burgundy-900 mb-1">{item.label}</h4>
                      <div className="text-foreground/75">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="card-elevated p-6 md:p-8">
            <h3 className="font-heading text-h3 text-burgundy-900 mb-6">
              Send Us a Message
            </h3>
            
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-body-sm font-medium text-foreground/80 mb-2">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-cream-50 border border-sage-200 rounded-lg focus:ring-2 focus:ring-burgundy-500/20 focus:border-burgundy-500 transition-all outline-none"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-body-sm font-medium text-foreground/80 mb-2">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-cream-50 border border-sage-200 rounded-lg focus:ring-2 focus:ring-burgundy-500/20 focus:border-burgundy-500 transition-all outline-none"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-body-sm font-medium text-foreground/80 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-cream-50 border border-sage-200 rounded-lg focus:ring-2 focus:ring-burgundy-500/20 focus:border-burgundy-500 transition-all outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-body-sm font-medium text-foreground/80 mb-2">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 bg-cream-50 border border-sage-200 rounded-lg focus:ring-2 focus:ring-burgundy-500/20 focus:border-burgundy-500 transition-all outline-none"
                  placeholder="+977-98-08614142"
                />
              </div>

              <div>
                <label className="block text-body-sm font-medium text-foreground/80 mb-2">
                  Message
                </label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 bg-cream-50 border border-sage-200 rounded-lg focus:ring-2 focus:ring-burgundy-500/20 focus:border-burgundy-500 transition-all outline-none resize-none"
                  placeholder="Tell us about your health concerns or questions..."
                />
              </div>

              <button 
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send size={18} />
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
