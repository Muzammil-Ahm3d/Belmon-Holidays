import Navigation from '@/components/Navigation';
import FloatingContact from '@/components/FloatingContact';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <FloatingContact />
            <main className="pt-20">
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;
