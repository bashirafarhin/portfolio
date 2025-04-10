import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-image">
          <div className="about-education">
            <div className="about-education">
              <p className="reveal-text">10th, Jamia Millia Islamia, 77.4 %</p>
              <p className="reveal-text">12th, Jamia Millia Islamia, 84.6 %</p>
              <p className="reveal-text">College, Netaji Subhas University Of Technology, 7.04 CGPA upto 7th sem</p>
            </div>
          </div>
        </div>
        <div className="about-text fade-in">
          <h2>About Me</h2>
          <p>
            I’m a Full Stack Developer currently pursuing Electrical Engineering
            from NSUT (2025), Delhi.
            <br /> Over the 4 years of my engineering journey, I’ve gathered
            strong core concepts of development.
            <br /> I love building dynamic, responsive, and scalable web
            applications.
            <br /> My strength lies in bridging design with backend logic to
            bring ideas to life.
            <br /> I enjoy solving problems and turning challenges into
            opportunities.
            <br /> Constantly learning, experimenting, and leveling up my
            development skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
