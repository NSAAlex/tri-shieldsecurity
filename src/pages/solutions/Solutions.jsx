
import Hero from "../../componets/hero/Hero";
import SolutionsSection from "../../componets/solutions-section/SolutionsSection";
import logo from "./images/solutions-hero.jpg";
import "./Solutions.css";

function Solutions() {
  return (
    <>
      <Hero
        label="Solutions"
        title="REAL SOLUTIONS"
        highlight={<>FOR A SAFER<br />TOMORROW.</>}
        description="Every organization is different. That's why we deliver customized cybersecurity solutions designed to fit your goals, reduce risk, and keep your business moving forward."
        image={logo}
        imageAlt="Solutions Hero Image"
        primaryText="Get Started →"
        primaryLink="/contact"
        secondaryText="Talk to a Specialist"
        secondaryLink="/contact"
      />

      <SolutionsSection />
    </>
  );
}

export default Solutions;
