import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CEOSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="section-padding bg-muted">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="text-primary font-medium uppercase tracking-[0.2em] text-sm mb-4">
                        Leadership
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Meet Our <span className="text-primary">CEO & Founder</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="order-2 lg:order-1"
                    >
                        <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                            MJNR - Visionary Leader in Luxury Travel
                        </h3>
                        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                With over <span className="text-primary font-semibold">20 years of distinguished experience</span> in the luxury travel industry, MJNR has held top leadership positions at esteemed organizations throughout Dubai and the Middle East. Our expertise lies in understanding the unique needs of each client and crafting bespoke holiday experiences that exceed expectations.
                            </p>
                            <p>
                                At BELMOND HOLIDAYS, we connect heart, soul, and mind to every journey we design. We believe that our clients' smiles are our greatest asset, and we strive relentlessly to create those unforgettable moments. <span className="text-primary font-semibold">Luxury and premium service</span> are not just our goals—they are our standards.
                            </p>
                            <p>
                                Through strategic partnerships with worldwide management companies, prestigious hotel chains, and specialist tour operators, we deliver unique itineraries and extraordinary experiences that transform travel dreams into reality.
                            </p>
                        </div>
                    </motion.div>

                    {/* Image - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                                <img
                                    src="/ceo-profile.jpg"
                                    alt="MJNR - CEO & Founder of Belmond Holidays"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                            </div>
                            {/* CEO Badge */}
                            <div className="absolute bottom-6 left-6 bg-primary/95 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg">
                                <p className="text-foreground font-serif font-bold text-xl">MJNR</p>
                                <p className="text-foreground/80 text-sm uppercase tracking-wider">CEO & Founder</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CEOSection;
