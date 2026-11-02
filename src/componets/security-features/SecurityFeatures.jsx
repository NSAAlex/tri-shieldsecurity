
import { FiShield, FiEye, FiZap } from "react-icons/fi";
import FeatureCard from "./FeatureCard";
import "./SecurityFeatures.css";

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

function SecurityFeatures() {
  return (
    <section className="features-section">
      <div className="container features-grid">
        {features.map((feature) => (
          <FeatureCard key={feature.number} {...feature} />
        ))}
      </div>
    </section>
  );
}

export default SecurityFeatures;
