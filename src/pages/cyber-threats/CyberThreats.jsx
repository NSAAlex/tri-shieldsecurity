import Hero from "../../componets/hero/Hero";
import InfoCard from "../../componets/cards/InfoCard";
import "./CyberThreats.css";
import logo from "./images/cyber-threats-hero.jpg";

const threats = [
  {
    icon: "mail",
    title: "Phishing",
    severity: "High",
    category: "Social engineering",
    description: "Deceptive emails and messages designed to steal sensitive information."
  },
  {
    icon: "malware",
    title: "Malware",
    severity: "High",
    category: "Malicious software",
    description: "Malicious software that can damage systems, steal data, or gain unauthorized access."
  },
  {
    icon: "lock",
    title: "Ransomware",
    severity: "Critical",
    category: "Extortion malware",
    description: "Attacks that lock your data or system until ransom is paid."
  },
  {
    icon: "people",
    title: "Insider Threats",
    severity: "Medium",
    category: "Internal risk",
    description: "Risks that come from within an organization, whether intentional or accidental."
  },
  {
    icon: "cloud",
    title: "Cloud Threats",
    severity: "High",
    category: "Cloud security",
    description: "Vulnerabilities that target cloud environments and stored data."
  },
  {
    icon: "warning",
    title: "DDoS Attacks",
    severity: "High",
    category: "Network attack",
    description: "Overwhelming traffic designed to disrupt operations and take systems offline."
  },
  {
    icon: "people",
    title: "Social Engineering",
    severity: "Medium",
    category: "Human manipulation",
    description: "Tricks that manipulate people into giving up access or information."
  },
  {
    icon: "key",
    title: "Password Attacks",
    severity: "Medium",
    category: "Credential attack",
    description: "Attempts to guess or steal passwords to break into accounts."
  }
];

function CyberThreats() {
  return (
    <>
      <Hero
        label="Cyber Threats"
        title={<>KNOW THE<br />THREATS.</>}
        highlight="STAY AHEAD."
        description="Cyber threats are constantly evolving, but knowledge is your first line of defense. We help you understand the risks, stay informed, and put the right protections in place to keep your business secure."
        image={logo} alt="Cyber Threats Hero Image"
        primaryText="Learn more →"
        primaryLink="/services"
        secondaryText="Talk to an Expert"
        secondaryLink="/contact"
      />

      <section className="section threats-section">
        <div className="container">
          <div className="threats-intro">
            <div>
              <p className="section-label">
                Common Cyber Threats
              </p>

              <h2>
                UNDERSTAND TODAY.
                <br />
                <span className="accent">
                  SECURE TOMORROW.
                </span>
              </h2>
            </div>

            <div>
              <p>
                From ransomware to phishing, cyber threats
                come in many different forms. Explore some
                of the most common threats that businesses
                face and learn how we help defend against them.
              </p>

              <a href="#threat-list" className="threats-link">
                View All Threats →
              </a>
            </div>
          </div>

          <div className="cards-grid four" id="threat-list">
            {threats.map((threat) => (
              <InfoCard
                key={threat.title}
                {...threat}
                variant="threat-card"
                link="/services"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CyberThreats;