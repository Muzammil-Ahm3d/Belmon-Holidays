import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';

const whyChooseUs = [
  "24/7 dedicated support team available in multiple time zones",
  "Access to exclusive 5-star properties and experiences worldwide",
  "Custom itinerary planning with detailed day-by-day coordination",
  "Competitive pricing with unmatched luxury experiences",
  "Expert visa assistance & documentation support",
  "Hassle-free airline & hotel bookings with guaranteed best rates",
  "Personalized travel consultants assigned to each customer",
  "Crisis management and 24/7 on-the-ground support"
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background">
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
            Our Story
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About <span className="text-primary">BELMOND HOLIDAYS</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/about-intro.png"
                alt="Belmond Holidays Luxury Collection"
                className="w-full h-auto object-contain rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 bg-card p-4 md:p-6 rounded-xl shadow-elegant border-2 border-primary/20 z-10 max-w-[150px] md:max-w-none">
              <p className="text-2xl md:text-4xl font-serif font-bold text-primary">20+</p>
              <p className="text-muted-foreground text-xs md:text-sm">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Your Trusted Partner in Luxury Travel
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              BELMOND HOLIDAYS is your trusted partner in crafting unforgettable luxury travel experiences. With expertise in global travel services, we specialize in personalized itineraries, seamless bookings, and world-class customer service that exceeds expectations.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our team of dedicated travel experts brings over 20 years of combined experience in the luxury travel industry. Every journey is unique. We listen, plan, and execute with precision to ensure your travel dreams become reality.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-muted rounded-3xl p-8 md:p-12"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
            Why Choose <span className="text-primary">Us</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {whyChooseUs.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <Check size={14} className="text-primary" />
                </div>
                <p className="text-foreground">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
