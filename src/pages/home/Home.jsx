
import Hero from "../../componets/hero/Hero";
import SecurityFeatures from "../../componets/security-features/SecurityFeatures";
import SecuritySlideshow from "../../componets/slideshow/SecuritySlideshow";
import SecurityVideo from "../../componets/video-embed/SecurityVideo";
import logo from "./images/logo-hero.png";
import "./Home.css";

function Home() {
  return (
    <>
      <Hero
        label="Cybersecurity solutions for a safer tomorrow."
        title="YOUR SECURITY."
        highlight="OUR SHIELD."
        description="Tri-Shield Security provides advanced cybersecurity solutions that protect your business from evolving digital threats. We prevent, detect, and respond — so you can focus on what matters most."
        image={logo}
        imageAlt="Tri-Shield Security Logo"
        primaryText="Get Protected"
        primaryLink="/contact"
        secondaryText="Learn more"
        secondaryLink="/services"
      />

      {/* PART 10: Middle section refactored into components */}
      <SecurityFeatures />

      {/* PART 10: Custom JavaScript slideshow */}
      <SecuritySlideshow />

      {/* PART 10: Embedded iframe */}
      <SecurityVideo />
    </>
  );
}

export default Home;
