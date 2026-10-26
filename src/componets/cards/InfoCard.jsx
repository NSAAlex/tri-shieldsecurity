import { Link } from "react-router-dom";

import {
  FiShield,
  FiEye,
  FiLock,
  FiUsers,
  FiSun,
  FiTarget,
  FiGlobe,
  FiBarChart2,
  FiMail,
  FiCloud,
  FiAlertTriangle,
  FiKey,
  FiCheckSquare,
  FiGitBranch,
  FiZap,
  FiCpu
} from "react-icons/fi";

import "./InfoCard.css";

const icons = {
  shield: FiShield,
  network: FiGitBranch,
  eye: FiEye,
  lock: FiLock,
  response: FiZap,
  assessment: FiCheckSquare,
  people: FiUsers,
  light: FiSun,
  target: FiTarget,
  globe: FiGlobe,
  chart: FiBarChart2,
  mail: FiMail,
  malware: FiCpu,
  cloud: FiCloud,
  warning: FiAlertTriangle,
  key: FiKey
};

function InfoCard({
  number,
  icon = "shield",
  title,
  description,
  severity,
  category,
  link,
  linkText = "Show more",
  variant = ""
}) {
  const Icon = icons[icon] || FiShield;

  return (
    <article className={`info-card ${variant}`}>
      {number && (
        <span className="card-number">{number}</span>
      )}

      <div className="card-icon">
        <Icon />
      </div>

      <h3>{title}</h3>

      {(severity || category) && (
        <div className="card-meta">
          {severity && (
            <span className={`severity ${severity.toLowerCase()}`}>
              {severity}
            </span>
          )}

          {category && <span>{category}</span>}
        </div>
      )}

      <p>{description}</p>

      {link && (
        <Link to={link} className="card-link">
          {linkText} →
        </Link>
      )}
    </article>
  );
}

export default InfoCard;