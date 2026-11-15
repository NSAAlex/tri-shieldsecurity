
import React, { useEffect, useState } from "react";
import InfoCard from "../cards/InfoCard";
import ThreatModal from "./ThreatModal";
import AddThreatForm from "./AddThreatForm";
import { Tooltip } from "react-tooltip";
import "./ThreatsSection.css";

const API_URL =
  "https://hello-world-n9kj.onrender.com/api/threats";

const threatIcons = {
  Phishing: "mail",
  Malware: "malware",
  Ransomware: "lock",
  "Insider Threats": "people",
  "Cloud Threats": "cloud",
  "DDoS Attacks": "warning",
  "Social Engineering": "people",
  "Password Attacks": "key"
};

function ThreatsSection() {
  const [threats, setThreats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedThreat, setSelectedThreat] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadThreats() {
      try {
        const response = await fetch(API_URL, {
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error("Unable to load threats.");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid server response.");
        }

        setThreats(data);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("API error:", err);
          setError("Unable to load cyber threats. Please try again.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadThreats();

    return () => controller.abort();
  }, []);

  function handleThreatAdded(newThreat) {
    setThreats((previousThreats) => [
      ...previousThreats,
      newThreat
    ]);
  }

  return (
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
              of the most common threats businesses face
              and learn how we defend against them.
            </p>

            <a href="#threat-list" className="threats-link">
              View All Threats →
            </a>
          </div>
        </div>

        {loading && (
          <p className="threat-status" role="status">
            Loading cybersecurity threats from our server...
          </p>
        )}

        {error && (
          <p className="threat-status threat-error" role="alert">
            {error}
          </p>
        )}

        {!loading && !error && (
          <>
            <div className="cards-grid four" id="threat-list">
              {threats.map((threat) => (
                <div
                  key={threat._id}
                  className="clickable-threat"
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedThreat(threat)}
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" ||
                      event.key === " "
                    ) {
                      event.preventDefault();
                      setSelectedThreat(threat);
                    }
                  }}
                  data-tooltip-id="security-risk-tooltip"
                  data-tooltip-content={
                    threat.severity === "Critical"
                      ? "Critical risk: severe business disruption."
                      : threat.severity === "High"
                      ? "High risk: strong security controls needed."
                      : threat.severity === "Medium"
                      ? "Medium risk: preventive measures recommended."
                      : "Low risk: monitor and maintain protections."
                  }
                >
                  <InfoCard
                    icon={threatIcons[threat.name] || "shield"}
                    title={threat.name}
                    description={threat.description}
                    severity={threat.severity}
                    category={threat.category}
                    variant="threat-card"
                  />
                </div>
              ))}
            </div>

            <Tooltip
              id="security-risk-tooltip"
              place="top"
              style={{
                backgroundColor: "#173453",
                color: "#ffffff",
                maxWidth: "240px",
                zIndex: 100
              }}
            />
          </>
        )}

        <AddThreatForm
          apiUrl={API_URL}
          onThreatAdded={handleThreatAdded}
        />

        {selectedThreat && (
          <ThreatModal
            threat={selectedThreat}
            onClose={() => setSelectedThreat(null)}
          />
        )}
      </div>
    </section>
  );
}

export default ThreatsSection;

