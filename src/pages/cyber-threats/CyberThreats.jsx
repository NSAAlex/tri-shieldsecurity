
import React from "react";
import Hero from "../../componets/hero/Hero";
import ThreatsSection from "../../componets/threats-section/ThreatsSection";
import "./CyberThreats.css";
import logo from "./images/cyber-threats-hero.jpg";

function CyberThreats() {
  return (
    <>
      <Hero
        label="Cyber Threats"
        title={
          <>
            KNOW THE
            <br />
            THREATS.
          </>
        }
        highlight="STAY AHEAD."
        description="Cyber threats are constantly evolving, but knowledge is your first line of defense. We help you understand the risks, stay informed, and put the right protections in place to keep your business secure."
        image={logo}
        alt="Cyber Threats Hero Image"
        primaryText="Learn more →"
        primaryLink="/services"
        secondaryText="Talk to an Expert"
        secondaryLink="/contact"
      />

      {/* PROJECT: Live cybersecurity data loaded from Render */}
      <ThreatsSection />
    </>
  );
}

export default CyberThreats;
