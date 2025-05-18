import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image-wrapper">
          <img
            src="/assets/cecilia.jpg"
            alt="Cecilia Tipping"
            className="about-image"
            onError={(e) => {
              e.target.style.display = "none"; // hides image if not found
            }}
          />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <hr className="about-divider"/>
          <p>
            Hi! I’m Cecilia Tipping, a student at Southern Methodist University passionate about computer science, physics, and creating tools that make complex ideas accessible. I enjoy building, writing, and sharing ideas through both research and design.
          </p>
        </div>
      </div>
    </section>
  );
}