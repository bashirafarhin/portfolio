import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div
      data-scroll
      // data-scroll-section
      // data-scroll-speed="-.2"
      data-scroll-speed="0.5"
      // data-scroll-position="-3"
      className="landing-container"
    >
      <div className="landing-left">
        <p className="custom-title text-reveal delay-1">Bashira Farhin</p>
        <p className="custom-title text-reveal delay-2">Full Stack Developer</p>
      </div>

      <div className="landing-right">
        <img
          src="./ghibliimg.jpg"
          alt="Developer"
          className="landing-image animated-scale"
        />
      </div>
    </div>
  );
}

export default LandingPage;
