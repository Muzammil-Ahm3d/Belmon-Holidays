import { Mail, Phone, MessageCircle, Instagram, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-card">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <a href="/" className="inline-block mb-4">
              <img
                src="/footer-logo.png"
                alt="Belmond Holidays"
                className="h-16 w-auto object-contain"
              />
            </a>
            <p className="text-card/70 mb-6 leading-relaxed">
              Your trusted partner in crafting unforgettable luxury travel experiences. Dream destinations, curated just for you.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:info@belmondholidays.com"
                className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://instagram.com/belmondholidays"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/917337025029"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary hover:text-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Packages', 'Reviews', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-card/70 hover:text-primary transition-colors underline-gold"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Airlines Tickets',
                'Visa Services',
                'Hotel Bookings',
                'Luxury Packages',
                'Custom Itineraries',
                'MICE & Events'
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-card/70 hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-card/70">+91 95157 97929</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-card/70">info@belmondholidays.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-card/90 font-medium text-xs uppercase tracking-wider mb-1">Head Office</span>
                  <span className="text-card/70 text-sm">
                    # 1-5-4/5/A, New Maruthi Nagar, Kothapet, Hyderabad. TS. India.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-card/90 font-medium text-xs uppercase tracking-wider mb-1">Branch Office</span>
                  <span className="text-card/70 text-sm">
                    Flat No: 211, Jubilee Hills, Near Road No 05 Metro station, Hyderabad, TS, India
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-card/60 text-sm">
            © {currentYear} BELMOND HOLIDAYS. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-card/60 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-card/60 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
