import React from "react";
import { FiShield, FiEye, FiZap } from "react-icons/fi";
import { Link } from "react-router-dom";
import Hero from "../../componets/hero/Hero";
import "./Home.css";
import logo from "./images/logo-hero.png";

const features = [
  {
    number: "01",
    icon: FiShield,
    title: "Prevent",
    description: "Stop threats before they cause damage."
  },
  {
    number: "02",
    icon: FiEye,
    title: "Detect",
    description: "Identify and analyze suspicious activity."
  },
  {
    number: "03",
    icon: FiZap,
    title: "Respond",
    description: "Take action and restore security quickly."
  }
];

function Home() {
  return (
    <>
      <Hero
        label="Cybersecurity solutions for a safer tomorrow."
        title="YOUR SECURITY."
        highlight="OUR SHIELD."
        description="Tri-Shield Security provides advanced cybersecurity solutions that protect your business from evolving digital threats. We prevent, detect, and respond — so you can focus on what matters most."
        image={logo} alt="Tri-Shield Security Logo"
        primaryText="Get Protected"
        primaryLink="/contact"
        secondaryText="Learn more"
        secondaryLink="/services"
      />

      <section className="features-section">
        <div className="container features-grid">
          {features.map((feature) => (
            <div className="feature" key={feature.title}>
              <span className="feature-icon">
                <feature.icon />
              </span>

              <div>
                <span className="feature-number">
                  {feature.number}
                </span>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;