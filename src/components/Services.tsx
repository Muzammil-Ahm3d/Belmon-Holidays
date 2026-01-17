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
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
              className="card-luxury p-8 group"
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
              <ul className="space-y-2">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
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

