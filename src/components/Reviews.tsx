import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Users, MapPin, Headphones, Calendar, Upload, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Review {
  id: number;
  customerName: string;
  destination: string;
  rating: number;
  reviewText: string;
  tripDate: string;
  customerImage?: string;
}

const initialReviews: Review[] = [
  {
    id: 1,
    customerName: "Sarah Mitchell",
    destination: "Maldives Paradise Escape",
    rating: 5,
    reviewText: "BELMON HOLIDAYS transformed our honeymoon into a fairy tale. Every detail was perfect, from the moment we landed to our final sunset. The team's attention to detail was extraordinary!",
    tripDate: "October 2024",
    customerImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
  },
  {
    id: 2,
    customerName: "James Patterson",
    destination: "Swiss Alps Luxury Retreat",
    rating: 5,
    reviewText: "Our family trip was seamless. The private guides, gourmet dinners, and personalized itinerary exceeded all expectations. BELMON HOLIDAYS is the gold standard in luxury travel.",
    tripDate: "September 2024",
    customerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
  },
  {
    id: 3,
    customerName: "Priya Sharma",
    destination: "Bali Luxury Wellness",
    rating: 5,
    reviewText: "The wellness retreat was rejuvenating. From yoga sessions to traditional spa treatments, everything was curated perfectly. I've already recommended BELMON to all my friends!",
    tripDate: "August 2024",
    customerImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
  },
  {
    id: 4,
    customerName: "Marco Rossi",
    destination: "Dubai Luxury & Desert",
    rating: 5,
    reviewText: "Corporate retreat coordinated flawlessly. The team handled logistics, accommodations, and entertainment without a hitch. Professional, responsive, and genuinely excellent.",
    tripDate: "July 2024",
    customerImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200"
  }
];

const stats = [
  { number: "1000+", label: "Happy Travelers", icon: Users },
  { number: "4.9/5", label: "Average Rating", icon: Star },
  { number: "50+", label: "Destinations", icon: MapPin },
  { number: "24/7", label: "Support Available", icon: Headphones },
];

const destinations = [
  "Maldives Paradise Escape",
  "Swiss Alps Luxury Retreat",
  "Dubai Luxury & Desert",
  "Japan Cultural Luxury",
  "Paris Romance Sojourn",
  "Bali Luxury Wellness",
  "Other"
];

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem('belmon-reviews');
    return saved ? JSON.parse(saved) : initialReviews;
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    destination: '',
    tripDate: '',
    rating: 0,
    reviewText: '',
    consent: false
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Save reviews to localStorage
  useEffect(() => {
    localStorage.setItem('belmon-reviews', JSON.stringify(reviews));
  }, [reviews]);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused || reviews.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, reviews.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, profileImage: 'Image must be less than 5MB' }));
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (formData.customerName.length < 2) {
      newErrors.customerName = 'Name must be at least 2 characters';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.destination) {
      newErrors.destination = 'Please select a destination';
    }
    if (!formData.tripDate) {
      newErrors.tripDate = 'Please select your trip date';
    }
    if (formData.rating === 0) {
      newErrors.rating = 'Please rate your experience';
    }
    if (formData.reviewText.length < 50) {
      newErrors.reviewText = `Review must be at least 50 characters (${formData.reviewText.length}/50)`;
    }
    if (formData.reviewText.length > 300) {
      newErrors.reviewText = 'Review must be 300 characters or less';
    }
    if (!formData.consent) {
      newErrors.consent = 'Please accept the consent';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    const newReview: Review = {
      id: Date.now(),
      customerName: formData.customerName,
      destination: formData.destination,
      rating: formData.rating,
      reviewText: formData.reviewText,
      tripDate: new Date(formData.tripDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      customerImage: imagePreview || undefined
    };

    setReviews(prev => [newReview, ...prev]);
    setCurrentIndex(0);

    // Reset form
    setFormData({
      customerName: '',
      email: '',
      destination: '',
      tripDate: '',
      rating: 0,
      reviewText: '',
      consent: false
    });
    setImagePreview(null);
    setIsSubmitting(false);

    toast({
      title: "Thank you!",
      description: "Your review has been submitted and is now visible in the carousel.",
    });
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <section id="reviews" className="section-padding bg-background">
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
            Testimonials
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Customer <span className="text-primary">Experiences</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real stories from real customers. Your journey, your voice.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center border border-primary/20 hover:border-primary transition-colors"
            >
              <stat.icon size={32} className="text-primary mx-auto mb-3" />
              <p className="font-serif text-3xl font-bold text-foreground">{stat.number}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Review Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative max-w-3xl mx-auto mb-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl p-8 md:p-12 border-2 border-primary/20 shadow-elegant"
              >
                {/* Customer Image */}
                <div className="flex justify-center mb-6">
                  {reviews[currentIndex]?.customerImage ? (
                    <img
                      src={reviews[currentIndex].customerImage}
                      alt={reviews[currentIndex].customerName}
                      className="w-24 h-24 rounded-full object-cover border-4 border-primary"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center border-4 border-primary">
                      <span className="text-2xl font-bold text-card">
                        {getInitials(reviews[currentIndex]?.customerName || '')}
                      </span>
                    </div>
                  )}
                </div>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < (reviews[currentIndex]?.rating || 0) ? 'fill-primary text-primary' : 'text-muted'}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground text-lg text-center leading-relaxed mb-6 italic">
                  "{reviews[currentIndex]?.reviewText}"
                </p>

                {/* Customer Info */}
                <div className="text-center">
                  <p className="font-serif text-xl font-semibold text-foreground">
                    {reviews[currentIndex]?.customerName}
                  </p>
                  <p className="text-primary text-sm font-medium">
                    {reviews[currentIndex]?.destination}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    {reviews[currentIndex]?.tripDate}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-card border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-card transition-colors shadow-md"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-card border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-card transition-colors shadow-md"
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-muted hover:bg-primary/50'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Review Submission Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
              Share Your Experience
            </h3>
            <p className="text-muted-foreground">
              Let us know about your BELMON HOLIDAYS journey
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 border-2 border-primary/20 shadow-elegant"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  value={formData.customerName}
                  onChange={(e) => setFormData(prev => ({ ...prev, customerName: e.target.value }))}
                  className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                    errors.customerName ? 'border-destructive' : 'border-border'
                  }`}
                  placeholder="John Doe"
                />
                {errors.customerName && (
                  <p className="text-destructive text-sm mt-1">{errors.customerName}</p>
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
                  className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                    errors.email ? 'border-destructive' : 'border-border'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {/* Destination */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Destination *
                </label>
                <select
                  value={formData.destination}
                  onChange={(e) => setFormData(prev => ({ ...prev, destination: e.target.value }))}
                  className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                    errors.destination ? 'border-destructive' : 'border-border'
                  }`}
                >
                  <option value="">Select a destination</option>
                  {destinations.map(dest => (
                    <option key={dest} value={dest}>{dest}</option>
                  ))}
                </select>
                {errors.destination && (
                  <p className="text-destructive text-sm mt-1">{errors.destination}</p>
                )}
              </div>

              {/* Trip Date */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  When Did You Travel? *
                </label>
                <div className="relative">
                  <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="date"
                    value={formData.tripDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, tripDate: e.target.value }))}
                    className={`w-full pl-12 pr-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                      errors.tripDate ? 'border-destructive' : 'border-border'
                    }`}
                  />
                </div>
                {errors.tripDate && (
                  <p className="text-destructive text-sm mt-1">{errors.tripDate}</p>
                )}
              </div>
            </div>

            {/* Rating */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-foreground mb-2">
                Rate Your Experience *
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      size={32}
                      className={star <= formData.rating ? 'fill-primary text-primary' : 'text-muted'}
                    />
                  </button>
                ))}
              </div>
              {errors.rating && (
                <p className="text-destructive text-sm mt-1">{errors.rating}</p>
              )}
            </div>

            {/* Review Text */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-foreground mb-2">
                Your Review *
              </label>
              <textarea
                value={formData.reviewText}
                onChange={(e) => setFormData(prev => ({ ...prev, reviewText: e.target.value }))}
                rows={4}
                maxLength={300}
                className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none ${
                  errors.reviewText ? 'border-destructive' : 'border-border'
                }`}
                placeholder="Share your experience in 50-300 characters..."
              />
              <div className="flex justify-between items-center mt-1">
                {errors.reviewText ? (
                  <p className="text-destructive text-sm">{errors.reviewText}</p>
                ) : (
                  <span />
                )}
                <span className="text-muted-foreground text-sm">
                  {formData.reviewText.length}/300
                </span>
              </div>
            </div>

            {/* Image Upload */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-foreground mb-2">
                Upload Your Photo (Optional)
              </label>
              <div className="flex items-center gap-4">
                {imagePreview ? (
                  <div className="relative">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-20 h-20 rounded-full object-cover border-2 border-primary"
                    />
                    <button
                      type="button"
                      onClick={() => setImagePreview(null)}
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-destructive text-card flex items-center justify-center"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ) : (
                  <label className="w-20 h-20 rounded-full border-2 border-dashed border-border flex items-center justify-center cursor-pointer hover:border-primary transition-colors">
                    <Upload size={24} className="text-muted-foreground" />
                    <input
                      type="file"
                      accept="image/jpeg, image/png"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
                <p className="text-muted-foreground text-sm">
                  JPEG or PNG, max 5MB
                </p>
              </div>
            </div>

            {/* Consent */}
            <div className="mt-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData(prev => ({ ...prev, consent: e.target.checked }))}
                  className="mt-1 w-5 h-5 rounded border-border accent-primary"
                />
                <span className="text-sm text-muted-foreground">
                  I consent to display my review and name on BELMON HOLIDAYS website *
                </span>
              </label>
              {errors.consent && (
                <p className="text-destructive text-sm mt-1">{errors.consent}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-8 btn-gold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full"
                  />
                  Submitting...
                </span>
              ) : (
                'Submit Your Review'
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
