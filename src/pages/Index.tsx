import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PestControlSection from "@/components/PestControlSection";
import AdvancedPlanningSection from "@/components/AdvancedPlanningSection";
import LogoBanner from "@/components/LogoBanner";
import ImageShowcase from "@/components/ImageShowcase";
import MissionSection from "@/components/MissionSection";
import MosquitoPackage from "@/components/MosquitoPackage";
import InsectFacts from "@/components/InsectFacts";
import TurfPackage from "@/components/TurfPackage";
import LandscapingCTA from "@/components/LandscapingCTA";
import ClosingStatement from "@/components/ClosingStatement";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQSection from "@/components/FAQSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  const scrollRef = useScrollReveal();

  return (
    <div ref={scrollRef} className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <PestControlSection />
      <AdvancedPlanningSection />
      <LogoBanner />
      <ImageShowcase />
      <MissionSection />
      <MosquitoPackage />
      <InsectFacts />
      <TurfPackage />
      <LandscapingCTA />
      <ClosingStatement />
      <WhyChooseUs />
      <FAQSection />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
