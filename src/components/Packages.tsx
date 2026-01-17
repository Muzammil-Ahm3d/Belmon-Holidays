import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    id: 1,
    name: "Maldives Paradise Escape",
    region: "Asia",
    experienceType: "Romance",
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1965&auto=format&fit=crop",
    highlights: [
      "5-star overwater bungalows",
      "Private island excursions",
      "Underwater dining experience",
      "Spa & wellness treatments",
      "Snorkeling & water sports"
    ],
    included: [
      "Flights (Premium Economy+)",
      "5-star accommodation",
      "Daily breakfast & select meals",
      "Island transfers",
      "Activities & experiences"
    ]
  },
  {
    id: 2,
    name: "Swiss Alps Luxury Retreat",
    region: "Europe",
    experienceType: "Adventure",
    duration: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2070&auto=format&fit=crop",
    highlights: [
      "Exclusive alpine chalet",
      "Private mountain guides",
      "Scenic train journeys",
      "Gourmet dining experiences",
      "Winter sports or hiking"
    ],
    included: [
      "Flights (Business Class)",
      "Luxury chalet stay",
      "Michelin-starred restaurants",
      "Private transportation",
      "Guided experiences"
    ]
  },
  {
    id: 3,
    name: "Dubai Luxury & Desert",
    region: "Middle East",
    experienceType: "Cultural",
    duration: "6 Days / 5 Nights",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    highlights: [
      "5-star beachfront resort",
      "Desert safari with camp",
      "Yacht cruise experience",
      "Shopping at luxury malls",
      "Cultural & modern attractions"
    ],
    included: [
      "Flights (First Class available)",
      "Luxury hotel accommodation",
      "Premium transportation",
      "Selected excursions",
      "Concierge services"
    ]
  },
  {
    id: 4,
    name: "Japan Cultural Luxury",
    region: "Asia",
    experienceType: "Cultural",
    duration: "8 Days / 7 Nights",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
    highlights: [
      "Authentic ryokan experiences",
      "Tea ceremony & traditional arts",
      "Michelin-starred dining",
      "Private temple visits",
      "Onsen spa treatments"
    ],
    included: [
      "Flights (Premium)",
      "Luxury accommodations",
      "Kaiseki meals included",
      "Private guides",
      "All experiences & activities"
    ]
  },
  {
    id: 5,
    name: "Paris Romance Sojourn",
    region: "Europe",
    experienceType: "Romance",
    duration: "4 Days / 3 Nights",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
    highlights: [
      "5-star palace hotel stay",
      "Private museum tours",
      "Michelin-starred restaurants",
      "Seine river private cruise",
      "Bespoke shopping experience"
    ],
    included: [
      "Flights (Business Class+)",
      "Iconic luxury hotel",
      "Premium dining experiences",
      "Private transportation",
      "Exclusive access activities"
    ]
  },
  {
    id: 6,
    name: "Bali Luxury Wellness",
    region: "Asia",
    experienceType: "Wellness",
    duration: "6 Days / 5 Nights",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop",
    highlights: [
      "Private villa with infinity pool",
      "Yoga & meditation retreats",
      "Traditional balinese spa",
      "Cultural ceremonies",
      "Temple & nature tours"
    ],
    included: [
      "Flights (Premium Economy+)",
      "Luxury villa accommodation",
      "Wellness programs",
      "Spa treatments",
      "Activities & excursions"
    ]
  }
];

interface PackagesProps {
  limit?: number;
}

const Packages = ({ limit }: PackagesProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const displayedPackages = limit ? packages.slice(0, limit) : packages;
  const hasMore = limit && limit < packages.length;

  const handleCustomize = (packageName: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Store selected package for form
      sessionStorage.setItem('selected-package', packageName);
    }
  };

  return (
    <section id="packages" className="section-padding bg-muted">
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
            Curated Experiences
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Luxury Holiday <span className="text-primary">Packages</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked experiences for the discerning traveler. Customize any package to match your preferences.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {displayedPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden border-2 border-primary/20 shadow-elegant hover:border-primary hover:shadow-gold transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {pkg.region}
                  </span>
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                    {pkg.experienceType}
                  </span>
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-card">
                  <Clock size={16} />
                  <span className="text-sm font-medium">{pkg.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  {pkg.name}
                </h3>

                {/* Highlights */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-primary mb-2">Highlights</p>
                  <ul className="space-y-2">
                    {pkg.highlights.slice(0, 4).map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What's Included */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-primary mb-2">What's Included</p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.included.slice(0, 3).map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-muted rounded-md text-xs text-foreground/80"
                      >
                        <Check size={12} className="text-primary" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing Note */}
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg mb-6">
                  <p className="text-sm text-muted-foreground">
                    For detailed pricing and personalized package customization, please contact our dedicated support team.
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleCustomize(pkg.name)}
                  className="w-full btn-gold-outline text-sm py-3"
                >
                  Customize This Package
                </button>
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
              to="/packages"
              className="btn-gold inline-flex items-center gap-2"
            >
              View All Packages
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Packages;
