
import React, { useEffect, useState } from "react";
import InfoCard from "../cards/InfoCard";
import { Tooltip } from "react-tooltip";
import "./ThreatsSection.css";

// PROJECT: Data is loaded from our live Render backend.
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

  // Fetch the cybersecurity threats when the page loads.
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
        console.log("React successfully loaded threats:", data);
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
            {/* Cyber threats retrieved from Render */}
            <div className="cards-grid four" id="threat-list">
              {threats.map((threat) => (
                <div
                  key={threat._id}
                  data-tooltip-id="security-risk-tooltip"
                  data-tooltip-content={
                    threat.severity === "Critical"
                      ? "Critical risk: severe business disruption."
                      : threat.severity === "High"
                      ? "High risk: strong security controls needed."
                      : "Medium risk: preventive measures recommended."
                  }
                >
                  <InfoCard
                    icon={threatIcons[threat.name] || "shield"}
                    title={threat.name}
                    description={threat.description}
                    severity={threat.severity}
                    category={threat.category}
                    variant="threat-card"
                    link="/services"
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
      </div>
    </section>
  );
}

export default ThreatsSection;
