import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesAccordion from "@/components/ServicesAccordion";
import RoofingTypes from "@/components/RoofingTypes";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowWeWork from "@/components/HowWeWork";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinancingCTA from "@/components/FinancingCTA";
import PortfolioCarousel from "@/components/PortfolioCarousel";

import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesAccordion />
      <RoofingTypes />
      <WhyChooseUs />
      <HowWeWork />
      <StatsSection />
      <TestimonialsSection />
      <FinancingCTA />
      <PortfolioCarousel />
      <ContactSection />
    </>
  );
}
