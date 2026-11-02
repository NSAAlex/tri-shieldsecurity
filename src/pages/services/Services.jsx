
import Hero from "../../componets/hero/Hero";
import ServicesSection from "../../componets/services-section/ServicesSection";
import logo from "./images/services-hero.jpg";
import "./Services.css";

function Services() {
  return (
    <>
      <Hero
        label="Our Services"
        title="SECURITY BUILT"
        highlight="AROUND YOU."
        description="From protection to recovery, Tri-Shield provides the tools and expertise needed to protect your business and keep you ahead of evolving threats."
        image={logo}
        imageAlt="Services Hero Image"
        primaryText="Get Started →"
        primaryLink="/contact"
        secondaryText="Talk to an Expert"
        secondaryLink="/contact"
      />

      <ServicesSection />
    </>
  );
}

export default Services;
