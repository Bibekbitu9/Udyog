import React from "react";

export default function Header() {
  return (
    <nav
      style={{
        background: "rgba(255,255,255,0.95)",
        padding: "1rem 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        flexWrap: "wrap",
      }}
    >
      <span
        style={{
          fontWeight: 700,
          fontSize: "2rem",
          letterSpacing: "2px",
          minWidth: 0,
          whiteSpace: "nowrap",
        }}
      >
        Serene Spaces
      </span>
      <a
        href="#contact"
        style={{
          color: "#222",
          textDecoration: "none",
          fontSize: "1rem",
          padding: "0.5rem 1rem",
          borderRadius: "24px",
          background: "#f5f5f5",
          border: "1px solid #ccc",
          marginLeft: "1rem",
        }}
      >
        Contact
      </a>
      <style>{`
        @media (max-width: 600px) {
          nav {
            flex-direction: column;
            align-items: flex-start;
            padding: 0.7rem 0.7rem;
          }
          nav span {
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
          }
          nav a {
            font-size: 0.95rem;
            padding: 0.4rem 0.8rem;
          }
        }
      `}</style>
    </nav>
  );
}