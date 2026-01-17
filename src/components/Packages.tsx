import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Clock, Check, ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Extensive list of packages organized by region/category
const allPackages = [
  // --- ASIA ---
  {
    id: 'asia-1',
    name: "Dubai Luxury Experience",
    region: "Asia",
    experienceType: "Luxury",
    duration: "6 Days / 5 Nights",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    highlights: ["Burj Khalifa VIP", "Desert Safari", "Palm Jumeirah", "Luxury Shopping"],
    included: ["5-Star Stay", "Flights", "Private Transfers"]
  },
  {
    id: 'asia-2',
    name: "Malaysia Tropical Bliss",
    region: "Asia",
    experienceType: "Nature",
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2070&auto=format&fit=crop",
    highlights: ["Petronas Towers", "Langkawi Beaches", "Genting Highlands", "Cultural Tours"],
    included: ["Resort Stay", "City Tours", " Cable Car Ride"]
  },
  {
    id: 'asia-3',
    name: "Thailand Island Hopping",
    region: "Asia",
    experienceType: "Adventure",
    duration: "8 Days / 7 Nights",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop",
    highlights: ["Phuket Beaches", "Phi Phi Islands", "Bangkok Temples", "Thai Massage"],
    included: ["Island Hops", "Hotel & Villa", "Ferry Transfers"]
  },
  {
    id: 'asia-4',
    name: "Vietnam Cultural Journey",
    region: "Asia",
    experienceType: "Cultural",
    duration: "9 Days / 8 Nights",
    image: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?q=80&w=2000&auto=format&fit=crop",
    highlights: ["Ha Long Bay Cruise", "Hoi An Ancient Town", "Hanoi Food Tour", "Mekong Delta"],
    included: ["Cruise Stay", "Guided Tours", "Domestic Flights"]
  },
  {
    id: 'asia-5',
    name: "Indonesia & Bali Wellness",
    region: "Asia",
    experienceType: "Wellness",
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop",
    highlights: ["Ubud Rice Terraces", "Sacred Monkey Forest", "Nusa Penida", "Balinese Spa"],
    included: ["Private Villa", "Spa Sessions", "Private Driver"]
  },
  {
    id: 'asia-6',
    name: "Cambodia Temple Run",
    region: "Asia",
    experienceType: "History",
    duration: "5 Days / 4 Nights",
    image: "/packages/cambodia.png",
    highlights: ["Angkor Wat Sunrise", "Ta Prohm", "Phnom Penh", "Local Cuisine"],
    included: ["Boutique Hotel", "Temple Passes", "Expert Guide"]
  },
  {
    id: 'asia-7',
    name: "Maldives Paradise",
    region: "Asia",
    experienceType: "Honeymoon",
    duration: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1965&auto=format&fit=crop",
    highlights: ["Overwater Villa", "Snorkeling", "Candlelight Dinner", "Seaplane Ride"],
    included: ["All-Inclusive", "Water Sports", "Speedboat Transfer"]
  },
  {
    id: 'asia-8',
    name: "Hong Kong Skyline",
    region: "Asia",
    experienceType: "Urban",
    duration: "5 Days / 4 Nights",
    image: "/packages/hongkong.png",
    highlights: ["Victoria Peak", "Disneyland", "Night Markets", "Dim Sum Tasting"],
    included: ["City Hotel", "Park Tickets", "MTR Passes"]
  },
  {
    id: 'asia-9',
    name: "China Great Wall Tour",
    region: "Asia",
    experienceType: "History",
    duration: "10 Days / 9 Nights",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=2070&auto=format&fit=crop",
    highlights: ["Great Wall", "Forbidden City", "Terracotta Warriors", "Shanghai Bund"],
    included: ["Luxury Trains", "Guided Treks", "Visa Support"]
  },
  {
    id: 'asia-10',
    name: "Sri Lanka Nature Trail",
    region: "Asia",
    experienceType: "Nature",
    duration: "8 Days / 7 Nights",
    image: "/packages/srilanka.png",
    highlights: ["Ella Train Ride", "Sigiriya Rock", "Yala Safari", "Tea Plantations"],
    included: ["Scenic Train", "Safari Jeep", "Heritage Stays"]
  },
  {
    id: 'asia-11',
    name: "Singapore Urban Luxury",
    region: "Asia",
    experienceType: "Modern",
    duration: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=2071&auto=format&fit=crop",
    highlights: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island", "Universal Studios"],
    included: ["Luxury Hotel", "Attraction Pass", "Private Transfers"]
  },
  {
    id: 'asia-12',
    name: "Turkey Best of Both Worlds",
    region: "Asia",
    experienceType: "Cultural",
    duration: "9 Days / 8 Nights",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2008&auto=format&fit=crop",
    highlights: ["Cappadocia Balloons", "Hagia Sophia", "Pamukkale Thermal Pools", "Bosphorus Cruise"],
    included: ["Cave Hotel", "Balloon Flight", "Domestic Flights"]
  },

  // --- AFRICA ---
  {
    id: 'africa-1',
    name: "Seychelles Island Escape",
    region: "Africa",
    experienceType: "Luxury",
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2032&auto=format&fit=crop",
    highlights: ["Anse Source d'Argent", "Private Beaches", "Giant Tortoises", "Luxury Yacht"],
    included: ["Beachfront Villa", "Island Hopping", "Full Board"]
  },
  {
    id: 'africa-2',
    name: "South Africa Explorer",
    region: "Africa",
    experienceType: "Adventure",
    duration: "10 Days / 9 Nights",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop",
    highlights: ["Table Mountain", "Kruger Safari", "Cape Winelands", "Garden Route"],
    included: ["Game Lodges", "Wine Tasting", "Rental Car"]
  },
  {
    id: 'africa-3',
    name: "Tanzania Safari & Zanzibar",
    region: "Africa",
    experienceType: "Wildlife",
    duration: "10 Days / 9 Nights",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop",
    highlights: ["Serengeti Migration", "Ngorongoro Crater", "Zanzibar Beaches", "Stone Town"],
    included: ["Safari Jeep", "All Meals", "Bush Camps"]
  },
  {
    id: 'africa-4',
    name: "Morocco Imperial Cities",
    region: "Africa",
    experienceType: "Cultural",
    duration: "8 Days / 7 Nights",
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=2070&auto=format&fit=crop",
    highlights: ["Sahara Desert Camp", "Marrakech Souks", "Blue City Chefchaouen", "Atlas Mountains"],
    included: ["Riad Stay", "Camel Trek", "Private Guide"]
  },
  {
    id: 'africa-5',
    name: "Kenya Wildlife Safari",
    region: "Africa",
    experienceType: "Wildlife",
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071&auto=format&fit=crop",
    highlights: ["Masai Mara", "Lake Nakuru", "Big Five Spotting", "Masai Village Visit"],
    included: ["4x4 Safari", "Park Fees", "Luxury Tents"]
  },

  // --- EUROPE ---
  {
    id: 'europe-1',
    name: "Germany & History",
    region: "Europe",
    experienceType: "History",
    duration: "8 Days / 7 Nights",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop",
    highlights: ["Berlin Wall", "Neuschwanstein Castle", "Munich Beer Halls", "Rhine River"],
    included: ["Rail Pass", "Castle Entry", "City Tours"]
  },
  {
    id: 'europe-2',
    name: "Italy Dolce Vita",
    region: "Europe",
    experienceType: "Cultural",
    duration: "9 Days / 8 Nights",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1972&auto=format&fit=crop",
    highlights: ["Venice Canals", "Rome Colosseum", "Amalfi Coast", "Tuscan Wine"],
    included: ["High-speed Trains", "Winery Visits", "Museum Skip-line"]
  },
  {
    id: 'europe-3',
    name: "Swiss Alps Adventure",
    region: "Europe",
    experienceType: "Nature",
    duration: "6 Days / 5 Nights",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2070&auto=format&fit=crop",
    highlights: ["Matterhorn", "Lake Geneva", "Glacier Express", "Chocolate Tasting"],
    included: ["Swiss Travel Pass", "Mountain Excursions", "Scenic Hotels"]
  },
  {
    id: 'europe-4',
    name: "Paris & French Riviera",
    region: "Europe",
    experienceType: "Romance",
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2080&auto=format&fit=crop",
    highlights: ["Eiffel Tower Dinner", "Louvre Museum", "Nice Promenade", "Monaco Day Trip"],
    included: ["TGV Train", "River Cruise", "Luxury Hotels"]
  },
  {
    id: 'europe-5',
    name: "Austria Classical Tour",
    region: "Europe",
    experienceType: "Cultural",
    duration: "6 Days / 5 Nights",
    image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=2072&auto=format&fit=crop",
    highlights: ["Vienna Opera", "Salzburg Sound of Music", "Hallstatt Lake", "Imperial Palaces"],
    included: ["Concert Tickets", "Rail Pass", "Guided Walks"]
  },
  {
    id: 'europe-6',
    name: "Prague & Central Europe",
    region: "Europe",
    experienceType: "History",
    duration: "5 Days / 4 Nights",
    image: "/packages/prague.png",
    highlights: ["Charles Bridge", "Prague Castle", "Old Town Square", "Vltava River Cruise"],
    included: ["Centrally Located Hotel", "Castle Entry", "Dinner Cruise"]
  },
  {
    id: 'europe-7',
    name: "Brussels & Flavors",
    region: "Europe",
    experienceType: "Culinary",
    duration: "4 Days / 3 Nights",
    image: "/packages/brussels.png",
    highlights: ["Grand Place", "Chocolate Making", "Atomium", "Bruges Day Trip"],
    included: ["Chocolate Workshop", "Train Tickets", "City Card"]
  },

  // --- AUSTRALIA ---
  {
    id: 'aus-1',
    name: "Australia Highlights",
    region: "Australia",
    experienceType: "Adventure",
    duration: "10 Days / 9 Nights",
    image: "/packages/australia.png",
    highlights: ["Sydney Opera House", "Great Barrier Reef", "Uluru Sunset", "Melbourne Laneways"],
    included: ["Internal Flights", "Reef Cruise", "City Tours"]
  },
  {
    id: 'aus-2',
    name: "New Zealand Nature",
    region: "Australia", // Grouping with Australia region
    experienceType: "Nature",
    duration: "12 Days / 11 Nights",
    image: "/packages/newzealand.png",
    highlights: ["Milford Sound", "Hobbiton Movie Set", "Queenstown Adventure", "Rotorua Geothermal"],
    included: ["Car Rental", "Cruise Tickets", "Maori Experience"]
  },

  // --- INDIA ---
  {
    id: 'india-1',
    name: "Andaman Beach Bliss",
    region: "India",
    experienceType: "Beach",
    duration: "6 Days / 5 Nights",
    image: "/packages/andaman.png",
    highlights: ["Havelock Island", "Radhanagar Beach", "Scuba Diving", "Cellular Jail"],
    included: ["Ferry Tickets", "Resort Stay", "Water Sports"]
  },
  {
    id: 'india-2',
    name: "Goa Party & Chill",
    region: "India",
    experienceType: "Lifestyle",
    duration: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop",
    highlights: ["North Goa Beaches", "Old Goa Churches", "Dudhsagar Waterfalls", "Sunset Cruise"],
    included: ["Scooter Rental", "Cruise Ticket", "Beach Resort"]
  },
  {
    id: 'india-3',
    name: "Kerala Backwaters",
    region: "India",
    experienceType: "Nature",
    duration: "6 Days / 5 Nights",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop",
    highlights: ["Alleppey Houseboat", "Munnar Tea Gardens", "Thekkady Spice Tour", "Kochi Fort"],
    included: ["Houseboat Stay", "Private Car", "Ayurvedic Massage"]
  },

  // --- OTHERS CATEGORIES ---
  {
    id: 'cruise-1',
    name: "Royal Caribbean Cruise",
    region: "Cruises",
    experienceType: "Luxury",
    duration: "Variable",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2064&auto=format&fit=crop",
    highlights: ["Ocean View Balcony", "Onboard Entertainment", "Island Excursions", "Fine Dining"],
    included: ["Cabin Stay", "All Meals", "Port Taxes"]
  },
  {
    id: 'med-1',
    name: "Medical Wellness in Kerala",
    region: "Medical Tourism",
    experienceType: "Wellness",
    duration: "14 Days / 13 Nights",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",
    highlights: ["Ayurvedic Treatment", "Yoga Therapy", "Detox Diet", "Nature Healing"],
    included: ["Treatment Plan", "Stay & Meals", "Doctor Consult"]
  },
  {
    id: 'mice-1',
    name: "Global Business MICE",
    region: "MICE",
    experienceType: "Business",
    duration: "Custom",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
    highlights: ["Corporate Conferences", "Team Building", "Gala Dinners", "Award Ceremonies"],
    included: ["Venue Booking", "Logistics", "Event Management"]
  }
];

// Featured IDs for Home Page
const FEATURED_IDS = ['asia-1', 'asia-7', 'europe-3'];

const categories = [
  "World",
  "Asia",
  "Africa",
  "Europe",
  "Australia",
  "India",
  "Cruises",
  "Medical Tourism",
  "MICE"
];

interface PackagesProps {
  limit?: number;
  showFilter?: boolean;
}

const Packages = ({ limit, showFilter = false }: PackagesProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("World");

  // Filter logic
  let filteredPackages = allPackages;

  if (limit) {
    // If limit is active (Home page), show specific featured packages or first N
    filteredPackages = allPackages.filter(p => FEATURED_IDS.includes(p.id));
    if (filteredPackages.length === 0) filteredPackages = allPackages.slice(0, limit);
  } else if (showFilter && activeCategory !== "World") {
    // Basic filter by region
    filteredPackages = allPackages.filter(pkg => pkg.region === activeCategory);
  }

  const handleCustomize = (packageName: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = "/contact";
    }
    sessionStorage.setItem('selected-package', packageName);
  };

  return (
    <section id="packages" className="section-padding bg-muted min-h-[50vh]">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium uppercase tracking-[0.2em] text-sm mb-4">
            Curated Experiences
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Luxury Holiday <span className="text-primary">Packages</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover extraordinary destinations curated for the discerning traveler.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Category Filter - Only shown when showFilter is true */}
        {showFilter && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 border-b border-primary/20 pb-4"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-lg md:text-xl font-serif transition-colors duration-300 ${activeCategory === cat
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        )}

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-gold hover:border-primary transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 text-foreground text-xs font-bold uppercase tracking-wider rounded-sm backdrop-blur-sm">
                    {pkg.region}
                  </span>
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <Clock size={16} />
                  <span className="text-sm font-medium">{pkg.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                  {pkg.name}
                </h3>

                {/* Included */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.included.slice(0, 2).map((item, idx) => (
                    <span key={idx} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {item}
                    </span>
                  ))}
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                    + more
                  </span>
                </div>

                {/* Highlights */}
                <ul className="space-y-1 mb-6 flex-grow">
                  {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-1">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleCustomize(pkg.name)}
                  className="w-full btn-gold-outline text-sm py-2.5 mt-auto"
                >
                  Customize This Package
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPackages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No packages found for this category yet.</p>
            <button
              onClick={() => setActiveCategory("World")}
              className="mt-4 text-primary underline"
            >
              View all packages
            </button>
          </div>
        )}

        {/* View More Button (Homepage only) */}
        {limit && (
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
              Explore All Destinations
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Packages;
