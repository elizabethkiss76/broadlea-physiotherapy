/**
 * Broadlea Physiotherapy — Home Page
 * Design: Modern Healthcare Organic — Biophilic Warmth
 * Composes all sections: Hero, Services, About, WhyChoose, Team, Testimonials, Contact
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TeamSection from "@/components/TeamSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseSection />
      <TeamSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
