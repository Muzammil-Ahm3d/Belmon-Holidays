import Navigation from '@/components/Navigation';
import FloatingContact from '@/components/FloatingContact';
import Packages from '@/components/Packages';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const PackagesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <FloatingContact />
            <main className="pt-20">
                <Packages />
            </main>
            <Footer />
        </div>
    );
};

export default PackagesPage;
