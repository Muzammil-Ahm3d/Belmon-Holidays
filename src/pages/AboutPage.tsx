import Navigation from '@/components/Navigation';
import FloatingContact from '@/components/FloatingContact';
import About from '@/components/About';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <FloatingContact />
            <main className="pt-20">
                <About />
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;
