import Navigation from '@/components/Navigation';
import FloatingContact from '@/components/FloatingContact';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CEOSection from '@/components/CEOSection';
import Services from '@/components/Services';
import Packages from '@/components/Packages';
import Contact from '@/components/Contact';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingContact />
      <main>
        <Hero />
        <About />
        <CEOSection />
        <Services limit={3} />
        <Packages limit={3} />
        <Contact />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

