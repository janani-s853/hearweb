import React from "react";
import Timeline from "./timeline";
import TeamSection from "./teams";
import "./about.css";
import ceoImage from "./assets/ceo-image.jpg"; 
import Footer from "../components/footer";

const AboutUs = () => {
  return (
    <div className="about-us-page hero-page">
      <section className="about-hero-video-section">
        <div className="hero-video-content">
          <img
            src={ceoImage}
            alt="CEO Vision"
            className="hero-background-image"
          />

          <div className="hero-overlay" />
          <div className="hero-left-gradient">
            <h1  style={{
    fontFamily: '"Georgia", "Times New Roman", serif',
    fontWeight: "bold",
    fontSize: "2.5rem",
    color: "#fff",
  }}>About Us</h1>
            <pre>
  <bold>O</bold>ur mission is to bring accessible and affordable hearing care to every individual.
</pre>

          </div>
          <div className="hero-right"></div>
        </div>
      </section>
      <Timeline />
      <TeamSection />
      <Footer />

    </div>
  );
};

export default AboutUs;
