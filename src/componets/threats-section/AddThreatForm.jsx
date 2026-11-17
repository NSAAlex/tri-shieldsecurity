
import React, { useState, useEffect } from "react";
import "./AddThreatForm.css";

const initialForm = {
  name: "",
  severity: "",
  category: "",
  common_target: "",
  description: "",
  how_it_works: "",
  how_we_defend: ""
};

const limits = {
  name: [3, 60],
  category: [3, 60],
  common_target: [3, 100],
  description: [10, 300],
  how_it_works: [10, 1000],
  how_we_defend: [10, 1000]
};

const labels = {
  name: "Threat Name",
  severity: "Severity",
  category: "Category",
  common_target: "Common Target",
  description: "Description",
  how_it_works: "How It Works",
  how_we_defend: "How TRI-Shield Defends"
};

function validateForm(form) {
  const errors = {};

  Object.entries(limits).forEach(([field, [min, max]]) => {
    const value = form[field].trim();

    if (!value) {
      errors[field] = `${labels[field]} is required.`;
    } else if (value.length < min || value.length > max) {
      errors[field] =
        `${labels[field]} must contain ${min}-${max} characters.`;
    }
  });

  if (
    !["Low", "Medium", "High", "Critical"].includes(form.severity)
  ) {
    errors.severity = "Select a valid severity level.";
  }

  return errors;
}

function AddThreatForm({
  apiUrl,
  onThreatAdded,
  onThreatUpdated,
  editingThreat,
  onCancelEdit
}) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const isEditing = Boolean(editingThreat);

  // PROJECT PART 13: Populate the form when editing a threat.
  useEffect(() => {
    if (editingThreat) {
      setForm({
        name: editingThreat.name,
        severity: editingThreat.severity,
        category: editingThreat.category,
        common_target: editingThreat.common_target,
        description: editingThreat.description,
        how_it_works: editingThreat.how_it_works,
        how_we_defend: editingThreat.how_we_defend
      });
    } else {
      setForm({ ...initialForm });
    }

    setErrors({});
    setStatus("");
  }, [editingThreat]);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: ""
    }));

    setStatus("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("Please correct the highlighted fields.");
      return;
    }

    setSubmitting(true);
    setStatus("");

    try {
      // PROJECT PART 13: Use PUT when editing and POST when adding.
      const requestUrl = isEditing
        ? `${apiUrl}/${editingThreat._id}`
        : apiUrl;

      const response = await fetch(requestUrl, {
        method: isEditing ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          Object.fromEntries(
            Object.entries(form).map(([key, value]) => [
              key,
              value.trim()
            ])
          )
        )
      });

      const data = await response.json();

      if (
        !response.ok ||
        (isEditing && response.status !== 200) ||
        !data.success ||
        !data.threat
      ) {
        throw new Error(
          data.errors?.join(" ") ||
          data.message ||
          "Unable to save threat."
        );
      }

      if (isEditing) {
        onThreatUpdated(data.threat);
        setStatus("updated");
      } else {
        onThreatAdded(data.threat);
        setForm({ ...initialForm });
        setStatus("success");
      }

      setErrors({});
    } catch (error) {
      console.error("Threat request failed:", error);
      setStatus(error.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="add-threat-section" id="report-threat">
      <div className="add-threat-heading">
        <p className="section-label">
          {isEditing
            ? "UPDATE THREAT INTELLIGENCE"
            : "CONTRIBUTE TO CYBER DEFENSE"}
        </p>

        <h2>
          {isEditing ? "EDIT " : "REPORT A "}
          <span className="accent">
            {isEditing ? "CYBER THREAT." : "NEW THREAT."}
          </span>
        </h2>

        <p>
          {isEditing
            ? "Update the cybersecurity threat information using the form below."
            : "Help expand our cybersecurity threat intelligence. Submit a threat and watch it appear in the list above."}
        </p>
      </div>

      <form
        className="add-threat-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="add-threat-grid">
          <div className="threat-field">
            <label htmlFor="threat-name">Threat Name</label>
            <input
              id="threat-name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. QR Code Phishing"
              maxLength={60}
              disabled={submitting}
              required
            />
            {errors.name && (
              <small role="alert">{errors.name}</small>
            )}
          </div>

          <div className="threat-field">
            <label htmlFor="threat-severity">Severity</label>
            <select
              id="threat-severity"
              name="severity"
              value={form.severity}
              onChange={handleChange}
              disabled={submitting}
              required
            >
              <option value="">Select severity</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>

            {errors.severity && (
              <small role="alert">{errors.severity}</small>
            )}
          </div>

          <div className="threat-field">
            <label htmlFor="threat-category">Category</label>
            <input
              id="threat-category"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="e.g. Social engineering"
              maxLength={60}
              disabled={submitting}
              required
            />

            {errors.category && (
              <small role="alert">{errors.category}</small>
            )}
          </div>

          <div className="threat-field">
            <label htmlFor="threat-target">Common Target</label>
            <input
              id="threat-target"
              name="common_target"
              value={form.common_target}
              onChange={handleChange}
              placeholder="e.g. Mobile device users"
              maxLength={100}
              disabled={submitting}
              required
            />

            {errors.common_target && (
              <small role="alert">{errors.common_target}</small>
            )}
          </div>
        </div>

        {[
          ["description", "Description", 300],
          ["how_it_works", "How It Works", 1000],
          ["how_we_defend", "How TRI-Shield Defends", 1000]
        ].map(([name, label, maxLength]) => (
          <div className="threat-field" key={name}>
            <label htmlFor={`threat-${name}`}>
              {label}
            </label>

            <textarea
              id={`threat-${name}`}
              name={name}
              value={form[name]}
              onChange={handleChange}
              maxLength={maxLength}
              rows={4}
              placeholder={`Enter ${label.toLowerCase()}...`}
              disabled={submitting}
              required
            />

            {errors[name] && (
              <small role="alert">{errors[name]}</small>
            )}
          </div>
        ))}

        {status && (
          <p
            className={
              status === "success" || status === "updated"
                ? "threat-form-success"
                : "threat-form-error"
            }
            role="status"
          >
            {status === "success"
              ? "Threat successfully added! View it in the list above."
              : status === "updated"
              ? "Threat successfully updated!"
              : status}
          </p>
        )}

        <div className="threat-form-actions">
          <button
            className="threat-submit-button"
            type="submit"
            disabled={submitting}
          >
            {submitting
              ? "Saving..."
              : isEditing
              ? "Save Changes"
              : "Submit Cyber Threat"}
          </button>

          {isEditing && (
            <button
              className="threat-cancel-button"
              type="button"
              onClick={onCancelEdit}
              disabled={submitting}
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddThreatForm;
