import Navigation from '@/components/Navigation';
import FloatingContact from '@/components/FloatingContact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const FAQPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <FloatingContact />
            <main className="pt-20">
                <FAQ />
            </main>
            <Footer />
        </div>
    );
};

export default FAQPage;
