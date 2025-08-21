import React, { useState } from "react";
import RequestCallBackForm from "./RequestCallBackForm";

export default function Footer() {
  const [showForm, setShowForm] = useState(false);

  return (
    <footer
      id="contact"
      style={{
        background: "rgba(245,245,245,0.95)",
        padding: "3rem 0",
        textAlign: "center",
        marginTop: "4rem",
        color: "#222",
        borderTop: "1px solid #eee",
        position: "relative",
      }}
    >
      <h2 style={{ fontSize: "1.7rem", fontWeight: 600, marginBottom: "1rem" }}>
        Contact Us
      </h2>
      <p style={{ fontSize: "1.1rem", color: "#555" }}>info@sereneSpaces.com</p>
      <p style={{ fontSize: "1.1rem", color: "#555" }}>+91 8971368248</p>
      <p style={{ fontSize: "1.1rem", color: "#555" }}>
        123, Badli, Bhawanipatna, Odisha
      </p>
      <div style={{ marginTop: "2rem", fontSize: "1.1rem", color: "#333" }}>
        <strong>Owners:</strong> Bishwas Pattnaik &amp; Bibek Pattnaik
      </div>
      <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "1.5rem" }}>
        <button
          style={{
            background: "#222",
            color: "#fff",
            padding: "0.8rem 2rem",
            borderRadius: "24px",
            fontWeight: 600,
            fontSize: "1rem",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
          onClick={() => window.location.href = "mailto:info@sereneSpaces.com"}
        >
          Talk to Us
        </button>
        <button
          style={{
            background: "#fff",
            color: "#222",
            padding: "0.8rem 2rem",
            borderRadius: "24px",
            fontWeight: 600,
            fontSize: "1rem",
            border: "1px solid #222",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
          onClick={() => setShowForm(true)}
        >
          Request a Call Back
        </button>
      </div>
      {showForm && <RequestCallBackForm onClose={() => setShowForm(false)} />}
    </footer>
  );
}