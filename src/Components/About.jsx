import React from "react";
import img from "../assets/img.jpg";
import "./About.css";

function About() {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={img} alt="Bashira Farhin" />
        </div>
        <div className="about-text fade-in">
          <h2>About Me</h2>
          <p>
            I’m a Full Stack Developer currently pursuing Electrical Engineering from NSUT (2025), Delhi.
            <br /> Over the 4 years of my engineering journey, I’ve gathered strong core concepts of development.
            <br /> I love building dynamic, responsive, and scalable web applications.
            <br /> My strength lies in bridging design with backend logic to bring ideas to life.
            <br /> I enjoy solving problems and turning challenges into opportunities.
            <br /> Constantly learning, experimenting, and leveling up my development skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
