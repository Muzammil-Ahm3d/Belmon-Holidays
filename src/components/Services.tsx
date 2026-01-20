import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Plane,
  FileText,
  Building2,
  Gift,
  Calendar,
  Car,
  Crown,
  Ship,
  ArrowRight,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Contact constants
const WHATSAPP_NUMBER = '+917337025029';
const PHONE_NUMBER = '+919515797929';

const services = [
  {
    id: 1,
    name: "Airlines Tickets",
    icon: Plane,
    description: "Book flights across all major and boutique airlines. International & domestic coverage with exclusive deals on premium cabins.",
    features: [
      "Global airline network access",
      "Business & First Class specialists",
      "Multi-city routing expertise",
      "Real-time seat selection",
      "Flexible rebooking options"
    ]
  },
  {
    id: 2,
    name: "Visa Services",
    icon: FileText,
    description: "Simplified visa processing for worldwide destinations. Expert guidance through documentation, applications, and approvals.",
    features: [
      "Expert visa consultants",
      "Document verification services",
      "Fast-track processing options",
      "Multi-country visa planning",
      "Emergency visa assistance"
    ]
  },
  {
    id: 3,
    name: "Worldwide Hotel Bookings",
    icon: Building2,
    description: "Access to luxury properties across the globe. From intimate boutique hotels to iconic 5-star resorts.",
    features: [
      "5-star property exclusive access",
      "Best rate guarantees",
      "Room upgrades & perks",
      "Personalized property selection",
      "Special occasion setups"
    ]
  },
  {
    id: 4,
    name: "Luxury Holiday Packages",
    icon: Gift,
    description: "Curated all-inclusive luxury holiday packages. Pre-designed experiences or fully customized itineraries.",
    features: [
      "Curated destination packages",
      "Full customization available",
      "VIP experiences & excursions",
      "Concierge services included",
      "Budget-flexible options"
    ]
  },
  {
    id: 5,
    name: "Custom Itineraries & MICE",
    icon: Calendar,
    description: "Day-by-day personalized itineraries. Specialized MICE coordination for corporate events.",
    features: [
      "Custom day-by-day planning",
      "Corporate event coordination",
      "Venue selection & management",
      "Logistics & ground operations",
      "Post-event support"
    ]
  },
  {
    id: 6,
    name: "Luxury Car Rentals",
    icon: Car,
    description: "Premium vehicle rentals for seamless vacation mobility. Chauffeur services available worldwide.",
    features: [
      "Premium vehicle fleet",
      "Professional chauffeur service",
      "Airport transfers",
      "Multi-destination routing",
      "GPS & concierge support"
    ]
  },
  {
    id: 7,
    name: "Worldwide Luxury Collections",
    icon: Crown,
    description: "Exclusive access to curated luxury experiences. Members-only resorts, private islands, and VIP experiences.",
    features: [
      "Exclusive property access",
      "Private island retreats",
      "VIP experience packages",
      "Concierge lifestyle services",
      "Membership benefits"
    ]
  },
  {
    id: 8,
    name: "Luxury Cruise Services",
    icon: Ship,
    description: "Embark on breathtaking voyages to the world's most captivating destinations. Enjoy unparalleled luxury, entertainment, and adventure at sea.",
    features: [
      "World-class cruise lines",
      "Curated shore excursions",
      "Premium suite accommodations",
      "All-inclusive dining & beverages",
      "Family & couples packages"
    ]
  }
];

interface ServicesProps {
  limit?: number;
}

const Services = ({ limit }: ServicesProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const displayedServices = limit ? services.slice(0, limit) : services;
  const hasMore = limit && limit < services.length;

  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium uppercase tracking-[0.2em] text-sm mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Premium <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive travel solutions designed for the discerning traveler
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-luxury p-8 group flex flex-col"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon size={28} className="text-primary" />
                </motion.div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Contact Buttons */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=Hi, I'm interested in your ${service.name} service`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  <Phone size={16} />
                  Call
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="btn-gold inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;

