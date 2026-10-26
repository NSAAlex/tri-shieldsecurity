import React from "react";
import {FiUsers, FiShield,FiGlobe,FiBarChart2} from "react-icons/fi";
import Hero from "../../componets/hero/Hero";
import InfoCard from "../../componets/cards/InfoCard";
import "./About.css";
import logo from "./images/about-hero.jpg";

const stats = [
  {
    icon: FiUsers,
    number: "500+",
    label: "Businesses Protected"
  },
  {
    icon: FiShield,
    number: "99%",
    label: "Threats Blocked"
  },
  {
    icon: FiGlobe,
    number: "24/7",
    label: "Monitoring"
  },
  {
    icon: FiBarChart2,
    number: "100%",
    label: "Client Focus"
  }
];

const values = [
  {
    icon: "shield",
    title: "Integrity",
    description: "We do what's right, always."
  },
  {
    icon: "light",
    title: "Innovation",
    description: "We stay ahead of what's next."
  },
  {
    icon: "people",
    title: "Collaboration",
    description: "We're stronger together."
  },
  {
    icon: "target",
    title: "Impact",
    description: "We create safer futures."
  }
];

function About() {
  return (
    <>
      <Hero
        label="About Us"
        title="PEOPLE. PURPOSE."
        highlight={<>A SAFER<br />TOMORROW.</>}
        description="At Tri-Shield Security we believe cybersecurity is more than just technology — it's about people, trust, and a safer future. Our mission is to help businesses stay ahead of evolving threats with innovative solutions, expert guidance, and a commitment to doing what's right."
        image={logo} alt="About Us Hero Image"
        primaryText="Our Story →"
        primaryLink="/about#mission"
        secondaryText="Meet Our Team"
        secondaryLink="/contact"
      />

      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <span className="stat-icon">
                <stat.icon />
              </span>

              <div>
                <strong>{stat.number}</strong>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section about-section" id="mission">
        <div className="container about-grid">
          <div className="mission-content">
            <p className="section-label">Our Mission</p>

            <h2>
              BUILDING A MORE
              <br />
              <span className="accent">
                SECURE TOMORROW.
              </span>
            </h2>

            <p>
              We're on a mission to empower organizations
              with the tools, knowledge, and support they
              need to prevent cyber threats, minimize risks,
              and confidently grow in a digital world.
            </p>
          </div>

          <div>
            <p className="section-label">Our Values</p>

            <div className="cards-grid two values-grid">
              {values.map((value) => (
                <InfoCard
                  key={value.title}
                  {...value}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;