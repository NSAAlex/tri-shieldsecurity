
import {
  FiUsers, FiShield, FiGlobe, FiBarChart2
} from "react-icons/fi";
import "./CompanyStats.css";

const stats = [
  { icon: FiUsers, number: "500+", label: "Businesses Protected" },
  { icon: FiShield, number: "99%", label: "Threats Blocked" },
  { icon: FiGlobe, number: "24/7", label: "Monitoring" },
  { icon: FiBarChart2, number: "100%", label: "Client Focus" }
];

function CompanyStats() {
  return (
    <section className="stats-section">
      <div className="container stats-grid">
        {stats.map(({ icon: Icon, number, label }) => (
          <div className="stat" key={label}>
            <span className="stat-icon"><Icon /></span>
            <div>
              <strong>{number}</strong>
              <p>{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CompanyStats;
