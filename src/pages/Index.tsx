import Navigation from '@/components/Navigation';
import SocialSidebar from '@/components/SocialSidebar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Reviews from '@/components/Reviews';
import Packages from '@/components/Packages';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SocialSidebar />
      <main>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
