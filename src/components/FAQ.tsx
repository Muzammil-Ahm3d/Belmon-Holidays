import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

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
    },
    {
        question: "How far in advance should I book?",
        answer: "For peak seasons and popular destinations, we recommend booking 3-6 months in advance. For last-minute trips, contact us and we'll do our best to accommodate your needs."
    },
    {
        question: "Do you offer group discounts?",
        answer: "Yes! We offer special rates for groups of 5 or more travelers. Corporate groups and recurring clients enjoy additional benefits and priority booking."
    }
];

const FAQ = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <section id="faq" className="section-padding bg-muted">
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
                        Got Questions?
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Find answers to common questions about our services, bookings, and travel experiences
                    </p>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
                </motion.div>

                {/* FAQ Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="grid gap-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.1 * index }}
                                className="border border-primary/20 rounded-2xl overflow-hidden bg-card shadow-elegant"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <HelpCircle size={20} className="text-primary" />
                                        </div>
                                        <span className="font-medium text-foreground text-lg">{faq.question}</span>
                                    </div>
                                    <motion.span
                                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0 ml-4"
                                    >
                                        <ChevronDown size={24} className="text-primary" />
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
                                    <p className="px-6 pb-5 text-muted-foreground leading-relaxed ml-14">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-center mt-12"
                    >
                        <p className="text-muted-foreground mb-4">
                            Still have questions? We're here to help!
                        </p>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="btn-gold inline-block"
                        >
                            Contact Our Team
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
