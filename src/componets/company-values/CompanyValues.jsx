
import InfoCard from "../cards/InfoCard";
import "./CompanyValues.css";

const values = [
  { icon: "shield", title: "Integrity", description: "We do what's right, always." },
  { icon: "light", title: "Innovation", description: "We stay ahead of what's next." },
  { icon: "people", title: "Collaboration", description: "We're stronger together." },
  { icon: "target", title: "Impact", description: "We create safer futures." }
];

function CompanyValues() {
  return (
    <section className="section about-section" id="mission">
      <div className="container about-grid">
        <div className="mission-content">
          <p className="section-label">Our Mission</p>
          <h2>
            BUILDING A MORE
            <br />
            <span className="accent">SECURE TOMORROW.</span>
          </h2>
          <p>
            We're on a mission to empower organizations with the
            tools, knowledge, and support they need to prevent cyber
            threats, minimize risks, and confidently grow in a digital world.
          </p>
        </div>

        <div>
          <p className="section-label">Our Values</p>
          <div className="cards-grid two values-grid">
            {values.map((value) => (
              <InfoCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyValues;
