import React from "react";

export default function Hero() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: 800,
          margin: "2rem 0 1rem 0",
          letterSpacing: "2px",
          color: "#222",
        }}
      >
        Serene Spaces
      </h1>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 400,
          marginBottom: "2rem",
          color: "#555",
        }}
      >
        Interior Studio &amp; Creative Space
      </h2>
      <p
        style={{
          fontSize: "1.3rem",
          maxWidth: "650px",
          color: "#333",
          marginBottom: "2rem",
          fontStyle: "italic",
          fontWeight: 500,
        }}
      >
        A Dream Interior studio by Pattnaik brothers
      </p>
      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
          color: "#333",
          marginBottom: "3rem",
        }}
      >
        We design beautiful, functional interiors for homes and businesses.
        Discover your space’s true potential with our creative team.
      </p>
      <a
        href="#contact"
        style={{
          background: "#222",
          color: "#fff",
          padding: "1rem 2.5rem",
          borderRadius: "32px",
          fontWeight: 600,
          fontSize: "1.1rem",
          textDecoration: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        Get in Touch
      </a>
    </main>
  );
}