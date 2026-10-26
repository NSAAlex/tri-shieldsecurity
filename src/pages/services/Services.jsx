import React from "react";
import Hero from "../../componets/hero/Hero";
import InfoCard from "../../componets/cards/InfoCard";
import "./Services.css";
import logo from "./images/services-hero.jpg";

const services = [
  {
    number: "01",
    icon: "network",
    title: "Network Security",
    description: "Protect your network infrastructure from unauthorized access and cyber threats."
  },
  {
    number: "02",
    icon: "eye",
    title: "Threat Monitoring",
    description: "Continuously identify and analyze suspicious activity and vulnerabilities across your systems."
  },
  {
    number: "03",
    icon: "lock",
    title: "Data Protection",
    description: "Keep sensitive company and customer information safe and compliant."
  },
  {
    number: "04",
    icon: "response",
    title: "Incident Response",
    description: "Quickly contain threats and restore affected systems with minimal downtime."
  },
  {
    number: "05",
    icon: "assessment",
    title: "Vulnerability Assessment",
    description: "Discover security weaknesses before attackers do and reduce potential risk."
  },
  {
    number: "06",
    icon: "people",
    title: "Security Counseling",
    description: "Develop and customize a security strategy designed around your organization's goals."
  }
];

function Services() {
  return (
    <>
      <Hero
        label="Our Services"
        title="SECURITY BUILT"
        highlight="AROUND YOU."
        description="From protection to recovery, Tri-Shield provides the tools and expertise needed to protect your business and keep you ahead of evolving threats."
        image={logo} alt="Services Hero Image"
        primaryText="Get Started →"
        primaryLink="/contact"
        secondaryText="Talk to an Expert"
        secondaryLink="/contact"
      />

      <section className="section services-section">
        <div className="container">
          <p className="section-label">What We Offer</p>
          <h2>OUR SERVICES</h2>

          <div className="cards-grid three">
            {services.map((service) => (
              <InfoCard
                key={service.number}
                {...service}
                link="/contact"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;