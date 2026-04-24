import { AboutSection, ContactSection, HomeHero, IntroSection, PortfolioSection, ProductSection, ServicesSection } from "@/components/sections";

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <HomeHero />
      <IntroSection />
      <ProductSection id="collection" />
      <ServicesSection id="services" />
      <PortfolioSection id="portfolio" />
      <AboutSection id="about" />
      <ContactSection id="contact" />
    </main>
  );
}
