import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero-container">
      <video
        className="hero-video"
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-overlay">
        <div className="hero-box">
          <p>Southern Methodist University</p>
          <h1>Cecilia Tipping</h1>
          <h3>Student</h3>
        </div>
      </div>
    </section>
  );
}