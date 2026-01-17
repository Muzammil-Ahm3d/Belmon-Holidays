import Navigation from '@/components/Navigation';
import FloatingContact from '@/components/FloatingContact';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <FloatingContact />
            <main className="pt-20">
                <Services />
            </main>
            <Footer />
        </div>
    );
};

export default ServicesPage;
