
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

  // PROJECT PART 13: Edit and delete state variables.
  const [editingThreat, setEditingThreat] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [actionError, setActionError] = useState("");
  const [deleting, setDeleting] = useState(false);

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

  // PROJECT PART 12: Add a new threat.
  function handleThreatAdded(newThreat) {
    setThreats((previousThreats) => [
      ...previousThreats,
      newThreat
    ]);

    setSuccessMessage(
      `${newThreat.name} was successfully added!`
    );
    setActionError("");
  }

  // PROJECT PART 13: Open the form in edit mode.
  function handleEdit(threat) {
    if (deleting) return;

    setEditingThreat(threat);
    setSelectedThreat(null);
    setSuccessMessage("");
    setActionError("");

    requestAnimationFrame(() => {
      document.getElementById("report-threat")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }

  // PROJECT PART 13: Update the list after a successful PUT.
  function handleThreatUpdated(updatedThreat) {
    setThreats((previousThreats) =>
      previousThreats.map((threat) =>
        threat._id === updatedThreat._id
          ? updatedThreat
          : threat
      )
    );

    setEditingThreat(null);
    setActionError("");

    setSuccessMessage(
      `${updatedThreat.name} was successfully updated!`
    );

    requestAnimationFrame(() => {
      document.getElementById("threat-list")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }

  // PROJECT PART 13: Cancel editing.
  function handleCancelEdit() {
    setEditingThreat(null);
    setSuccessMessage("");
    setActionError("");
  }

  // PROJECT PART 13: Send a DELETE request.
  async function handleDelete(threatId) {
    if (deleting) return;

    setDeleting(true);
    setSuccessMessage("");
    setActionError("");

    const deletedThreat = threats.find(
      (threat) => threat._id === threatId
    );

    try {
      const response = await fetch(
        `${API_URL}/${threatId}`,
        {
          method: "DELETE"
        }
      );

      const data = await response.json();

      if (
        !response.ok ||
        response.status !== 200 ||
        !data.success
      ) {
        throw new Error(
          data.message || "Unable to delete threat."
        );
      }

      // Remove the deleted threat without refreshing.
      setThreats((previousThreats) =>
        previousThreats.filter(
          (threat) => threat._id !== threatId
        )
      );

      if (editingThreat?._id === threatId) {
        setEditingThreat(null);
      }

      setSelectedThreat(null);

      setSuccessMessage(
        `${deletedThreat?.name || "Threat"} was successfully deleted!`
      );
    } catch (err) {
      console.error("DELETE request failed:", err);
      setActionError(err.message);
      setSelectedThreat(null);
    } finally {
      setDeleting(false);
    }
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

            <a
              href="#threat-list"
              className="threats-link"
              onClick={(event) => {
                event.preventDefault();

                document
                  .getElementById("threat-list")
                  ?.scrollIntoView({
                    behavior: "smooth"
                  });
              }}
            >
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

        {/* PROJECT PART 13: Success and error messages */}
        {successMessage && (
          <div className="threat-action-success" role="status">
            <span>{successMessage}</span>

            <button
              type="button"
              onClick={() => setSuccessMessage("")}
              aria-label="Dismiss success message"
            >
              ×
            </button>
          </div>
        )}

        {actionError && (
          <div className="threat-action-error" role="alert">
            <span>{actionError}</span>

            <button
              type="button"
              onClick={() => setActionError("")}
              aria-label="Dismiss error message"
            >
              ×
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="cards-grid four" id="threat-list">
              {threats.length === 0 && (
                <p className="threat-status">
                  No threats available. Report a new threat below.
                </p>
              )}

              {threats.map((threat) => (
                <div
                  key={threat._id}
                  className="clickable-threat"
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    if (!deleting) {
                      setSelectedThreat(threat);
                    }
                  }}
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" ||
                      event.key === " "
                    ) {
                      event.preventDefault();

                      if (!deleting) {
                        setSelectedThreat(threat);
                      }
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

        {/* PROJECT PART 13: Reusable add and edit form */}
        {!loading && !error && (
          <AddThreatForm
            apiUrl={API_URL}
            onThreatAdded={handleThreatAdded}
            onThreatUpdated={handleThreatUpdated}
            editingThreat={editingThreat}
            onCancelEdit={handleCancelEdit}
          />
        )}

        {/* PROJECT PART 13: Modal with edit and delete actions */}
        {selectedThreat && (
          <ThreatModal
            threat={selectedThreat}
            onClose={() => {
              if (!deleting) {
                setSelectedThreat(null);
              }
            }}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>
    </section>
  );
}

export default ThreatsSection;
