import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MessageCircle, MapPin, ChevronDown, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const destinations = [
  "Maldives Paradise Escape",
  "Swiss Alps Luxury Retreat",
  "Dubai Luxury & Desert",
  "Japan Cultural Luxury",
  "Paris Romance Sojourn",
  "Bali Luxury Wellness",
  "Custom Package",
  "Airlines Tickets",
  "Visa Services",
  "Hotel Bookings",
  "Car Rentals",
  "MICE & Conferences"
];

const services = [
  "Airline Tickets",
  "Visa Services",
  "Hotel Bookings",
  "Luxury Packages",
  "Custom Itineraries",
  "Car Rentals",
  "MICE & Conferences",
  "Worldwide Luxury Collections"
];

const groupSizes = [
  "Just Me",
  "Couple (2)",
  "Small Group (3-5)",
  "Family (5-8)",
  "Large Group (8+)"
];

const faqs = [
  {
    question: "How do I customize a package?",
    answer: "Contact our team with your preferences, travel dates, and budget. Our experts will create a bespoke itinerary matching your exact requirements. We offer unlimited customization options."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit cards (Visa, Mastercard, Amex), bank transfers, and offer flexible payment plans for larger bookings. Installment options available for packages over $5,000."
  },
  {
    question: "Do you offer travel insurance?",
    answer: "Yes, we partner with top travel insurance providers to offer comprehensive coverage including trip cancellation, medical, and emergency evacuation. Highly recommended for all bookings."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Policies vary by package and hotel. Generally, 30+ days = full refund, 15-29 days = 50% refund, <15 days = no refund. Some packages offer flexible cancellation for a small fee."
  },
  {
    question: "Do you provide 24/7 support during travel?",
    answer: "Absolutely! Our dedicated support team is available 24/7 across multiple time zones. You get a personal travel concierge contact for emergencies and assistance during your trip."
  },
  {
    question: "Can you arrange MICE events?",
    answer: "Yes, we specialize in corporate meetings, incentive trips, conferences, and events. From venue selection to ground logistics, we handle everything with precision."
  }
];

const contactInfo = [
  {
    type: "phone",
    label: "Call Us",
    value: "+1-XXX-XXX-XXXX",
    icon: Phone,
    action: "tel:+1234567890"
  },
  {
    type: "email",
    label: "Email",
    value: "contact@belmondholidays.com",
    icon: Mail,
    action: "mailto:contact@belmondholidays.com"
  },
  {
    type: "whatsapp",
    label: "WhatsApp",
    value: "+1-XXX-XXX-XXXX",
    icon: MessageCircle,
    action: "https://wa.me/+1234567890"
  },
  {
    type: "address",
    label: "Office Location",
    value: "123 Luxury Boulevard, Travel District, Global City 12345",
    icon: MapPin,
    action: "#"
  }
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: '',
    services: [] as string[],
    travelDate: '',
    groupSize: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Check for pre-selected package from Packages section
  useEffect(() => {
    const selectedPackage = sessionStorage.getItem('selected-package');
    if (selectedPackage) {
      setFormData(prev => ({ ...prev, destination: selectedPackage }));
      sessionStorage.removeItem('selected-package');
    }
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (formData.fullName.length < 2) {
      newErrors.fullName = 'Name is required';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (formData.phone.length < 5) {
      newErrors.phone = 'Phone number is required';
    }
    if (formData.message.length < 20) {
      newErrors.message = 'Please provide more details (at least 20 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      destination: '',
      services: [],
      travelDate: '',
      groupSize: '',
      message: ''
    });

    toast({
      title: "Inquiry Sent!",
      description: "Thank you! We'll respond within 24 hours.",
    });
  };

  return (
    <section id="contact" className="section-padding bg-background">
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
            Reach Out
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our travel experts are ready to craft your perfect journey
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Send Us an Inquiry
            </h3>

            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 border-2 border-primary/20 shadow-elegant"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all ${errors.fullName ? 'border-destructive' : 'border-border'
                      }`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <p className="text-destructive text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all ${errors.email ? 'border-destructive' : 'border-border'
                      }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all ${errors.phone ? 'border-destructive' : 'border-border'
                      }`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Interested Destination
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData(prev => ({ ...prev, destination: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  >
                    <option value="">Select or type...</option>
                    {destinations.map(dest => (
                      <option key={dest} value={dest}>{dest}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Services */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-foreground mb-3">
                  Services Interested In
                </label>
                <div className="flex flex-wrap gap-2">
                  {services.map(service => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceToggle(service)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${formData.services.includes(service)
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground hover:bg-primary/20'
                        }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                {/* Travel Date */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preferred Travel Date
                  </label>
                  <input
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, travelDate: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                {/* Group Size */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Group Size
                  </label>
                  <select
                    value={formData.groupSize}
                    onChange={(e) => setFormData(prev => ({ ...prev, groupSize: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  >
                    <option value="">Select group size</option>
                    {groupSizes.map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Message *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none ${errors.message ? 'border-destructive' : 'border-border'
                    }`}
                  placeholder="Tell us about your travel dreams, budget expectations, or specific requirements..."
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-8 btn-gold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Inquiry
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Other Ways to Reach Us
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    target={info.type === 'whatsapp' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="block p-5 bg-card rounded-xl border border-border hover:border-primary transition-colors group"
                  >
                    <info.icon size={28} className="text-primary mb-3" />
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-primary/20 rounded-xl overflow-hidden bg-card"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left"
                    >
                      <span className="font-medium text-foreground pr-4">{faq.question}</span>
                      <motion.span
                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={20} className="text-primary flex-shrink-0" />
                      </motion.span>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openFaq === index ? 'auto' : 0,
                        opacity: openFaq === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-muted-foreground">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
