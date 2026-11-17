
import React, { useEffect } from "react";
import "./ThreatModal.css";

function ThreatModal({ threat, onClose, onEdit, onDelete }) {
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // PROJECT PART 13: Confirm before deleting a threat.
  function handleDelete() {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${threat.name}"?`
    );

    if (confirmed) {
      onDelete(threat._id);
    }
  }

  return (
    <div
      className="threat-modal-overlay"
      onClick={onClose}
    >
      <div
        className="threat-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="threat-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="threat-modal-close"
          onClick={onClose}
          aria-label="Close threat details"
        >
          ×
        </button>

        <p className="section-label">
          TRI-SHIELD THREAT INTELLIGENCE
        </p>

        <h2 id="threat-modal-title">
          {threat.name}
        </h2>

        <div className="threat-modal-tags">
          <span>{threat.severity} Severity</span>
          <span>{threat.category}</span>
        </div>

        <p className="threat-modal-description">
          {threat.description}
        </p>

        <div className="threat-modal-details">
          <div>
            <h3>COMMON TARGET</h3>
            <p>{threat.common_target}</p>
          </div>

          <div>
            <h3>HOW IT WORKS</h3>
            <p>{threat.how_it_works}</p>
          </div>

          <div>
            <h3>HOW TRI-SHIELD DEFENDS</h3>
            <p>{threat.how_we_defend}</p>
          </div>
        </div>

        {/* PROJECT PART 13: Edit and Delete buttons */}
        <div className="threat-modal-actions">
          <button
            type="button"
            className="threat-edit-button"
            onClick={() => onEdit(threat)}
          >
            Edit Threat
          </button>

          <button
            type="button"
            className="threat-delete-button"
            onClick={handleDelete}
          >
            Delete Threat
          </button>

          <button
            type="button"
            className="threat-modal-action"
            onClick={onClose}
          >
            Back to Threats
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThreatModal;
