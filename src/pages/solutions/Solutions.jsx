import React from "react";
import Hero from "../../componets/hero/Hero";
import InfoCard from "../../componets/cards/InfoCard";
import "./Solutions.css";
import logo from "./images/solutions-hero.jpg";

const solutions = [
  {
    icon: "shield",
    title: "Risk Assessment",
    description: "Identify vulnerabilities and understand your risk landscape."
  },
  {
    icon: "light",
    title: "Security Implementation",
    description: "Deploy the right tools and technologies for your needs."
  },
  {
    icon: "chart",
    title: "Continuous Monitoring",
    description: "24/7 monitoring to detect and stop threats early."
  },
  {
    icon: "people",
    title: "Ongoing Support",
    description: "Expert guidance and support to keep your business secure."
  }
];

function Solutions() {
  return (
    <>
      <Hero
        label="Solutions"
        title="REAL SOLUTIONS"
        highlight={<>FOR A SAFER<br />TOMORROW.</>}
        description="Every organization is different. That's why we deliver customized cybersecurity solutions designed to fit your goals, reduce risk, and keep your business moving forward."
        image={logo} alt="Solutions Hero Image"
        primaryText="Get Started →"
        primaryLink="/contact"
        secondaryText="Talk to a Specialist"
        secondaryLink="/contact"
      />

      <section className="section solutions-section">
        <div className="container">
          <p className="section-label">Our Solutions</p>

          <h2>
            SECURITY SOLUTIONS
            <br />
            <span className="accent">
              BUILT FOR YOUR BUSINESS.
            </span>
          </h2>

          <p className="solutions-description">
            We're on a mission to empower organizations with
            the tools, knowledge, and support they need to
            stay secure.
          </p>

          <div className="cards-grid four">
            {solutions.map((solution) => (
              <InfoCard
                key={solution.title}
                {...solution}
                link="/contact"
                linkText="Learn more"
                variant="solution-card"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Solutions;