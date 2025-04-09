import React from "react";
import img from "../assets/ghibliimg.jpg";
import "./LandingPage.css";

function LandingPage() {

  return (
    <div className="landing-container">
      <div className="landing-left">
        <p className="custom-title text-reveal delay-1">Bashira Farhin</p>
        <p className="custom-title text-reveal delay-2">Full Stack Developer</p>
      </div>

      <div className="landing-right">
        <img
          src={img}
          alt="Developer"
          className="landing-image animated-scale"
        />
      </div>
    </div>
  );
}

export default LandingPage;
