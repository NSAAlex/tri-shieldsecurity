
import InfoCard from "../cards/InfoCard";
import "./ServicesSection.css";

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

function ServicesSection() {
  return (
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
  );
}

export default ServicesSection;
