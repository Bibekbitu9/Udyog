import React from "react";

export default function Header() {
  return (
    <nav
      style={{
        background: "rgba(255,255,255,0.95)",
        padding: "2rem 3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <span style={{ fontWeight: 700, fontSize: "2rem", letterSpacing: "2px" }}>
        Pattnaik Udyog
      </span>
      <a
        href="#contact"
        style={{
          color: "#222",
          textDecoration: "none",
          fontSize: "1.1rem",
          padding: "0.5rem 1.5rem",
          borderRadius: "24px",
          background: "#f5f5f5",
          border: "1px solid #ccc",
        }}
      >
        Contact
      </a>
    </nav>
  );
}