import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import KitchenCarousel from "../components/KitchenCarousel";
import BedroomGrid from "../components/BedroomGrid";
import Footer from "../components/Footer";

export default function Home() {
  // Remove custom scroll event logic
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div
      style={{
        fontFamily: "Montserrat, sans-serif",
        minHeight: "100vh",
        color: "#222",
        background: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat fixed`,
        position: "relative",
        overflow: "auto",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.85)",
          minHeight: "100vh",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
      <div style={{ position: "relative", zIndex: 2 }}>
        <Header />
        <Hero />
        <KitchenCarousel />
        <BedroomGrid />
        <Footer />
      </div>
    </div>
  );
}