// src/components/HeroSection.jsx
import React from "react";
import video from "../assets/vid.mp4";

function HeroSection() {
  // Function to handle smooth scrolling to the articles section
  const scrollToArticles = () => {
    // Looks for the ID set in App.jsx
    const targetElement = document.getElementById("recent-articles-anchor");

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="hero-section container">
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
      />

      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">
            Breaking: Major Political Event Unfolds
          </h1>
          <p className="hero-description">
            A significant political event has just occurred, impacting global
            relations and sparking widespread discussion. Our team provides
            in-depth analysis and live updates as the situation develops.
          </p>

          {/* Button calls the scroll function on click */}
          <button onClick={scrollToArticles} className="read-more-btn">
            Read More
          </button>
        </div>

        {/* Removed the hero-watermark div */}
      </div>
    </div>
  );
}

export default HeroSection;
