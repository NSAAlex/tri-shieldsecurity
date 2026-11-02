
import Hero from "../../componets/hero/Hero";
import CompanyStats from "../../componets/company-stats/CompanyStats";
import CompanyValues from "../../componets/company-values/CompanyValues";
import logo from "./images/about-hero.jpg";
import "./About.css";

function About() {
  return (
    <>
      <Hero
        label="About Us"
        title="PEOPLE. PURPOSE."
        highlight={<>A SAFER<br />TOMORROW.</>}
        description="At Tri-Shield Security we believe cybersecurity is more than just technology — it's about people, trust, and a safer future. Our mission is to help businesses stay ahead of evolving threats with innovative solutions, expert guidance, and a commitment to doing what's right."
        image={logo}
        imageAlt="About Us Hero Image"
        primaryText="Our Story →"
        primaryLink="/about#mission"
        secondaryText="Meet Our Team"
        secondaryLink="/contact"
      />

      <CompanyStats />
      <CompanyValues />
    </>
  );
}

export default About;
