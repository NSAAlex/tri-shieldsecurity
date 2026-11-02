
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./SecuritySlideshow.css";

const slides = [
  {
    title: "PREVENT CYBER ATTACKS",
    description: "Protect your systems before threats become serious security incidents.",
    icon: "01",
    theme: "prevent"
  },
  {
    title: "DETECT SUSPICIOUS ACTIVITY",
    description: "Identify unusual activity and security vulnerabilities before attackers exploit them.",
    icon: "02",
    theme: "detect"
  },
  {
    title: "RESPOND WITH CONFIDENCE",
    description: "Contain incidents, minimize downtime, and restore your business operations.",
    icon: "03",
    theme: "respond"
  }
];

function SecuritySlideshow() {
  const [current, setCurrent] = useState(0);

  // PART 10: Slideshow coded from scratch with React state and useEffect.
  // No slideshow library is used.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((previous) => (previous + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCurrent((previous) => (previous + 1) % slides.length);
  };

  const previous = () => {
    setCurrent((previous) =>
      (previous - 1 + slides.length) % slides.length
    );
  };

  const slide = slides[current];

  return (
    <section className="security-slideshow section">
      <div className="container">
        <p className="section-label">Our Approach</p>
        <h2>
          THREE LAYERS. <span className="accent">ONE SHIELD.</span>
        </h2>

        <div className={`slide-panel ${slide.theme}`}>
          <button
            className="slide-arrow"
            onClick={previous}
            aria-label="Previous slide"
          >
            <FiChevronLeft />
          </button>

          <div className="slide-content" aria-live="polite">
            <span className="slide-number">{slide.icon}</span>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>

          <button
            className="slide-arrow"
            onClick={next}
            aria-label="Next slide"
          >
            <FiChevronRight />
          </button>
        </div>

        <div className="slide-dots">
          {slides.map((item, index) => (
            <button
              key={item.icon}
              className={index === current ? "slide-dot selected" : "slide-dot"}
              onClick={() => setCurrent(index)}
              aria-label={`Show slide ${index + 1}`}
              aria-current={index === current ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecuritySlideshow;
