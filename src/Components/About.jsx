import React from "react";
import pic3 from "../assets/img.jpg";
import "./About.css"; // Import the CSS animation styles

function About() {
  return (
    <div className="w-full py-20 px-[4.5vw] bg-[#CDEA68] rounded-t-3xl">
      {/* Animated Personal Section */}
      <div className="fade-in mb-[4vw]">
        <h2 className="text-[3vw] font-semibold mb-4">About Me</h2>
        <p className="text-[1.3vw] leading-[2vw]">
          I’m a Full Stack Developer currently pursuing Electrical Engineering from NSUT, Delhi.
          <br /> I love building dynamic, responsive, and scalable web applications.
          <br /> My strength lies in bridging design and backend logic to bring ideas to life.
          <br /> I'm deeply passionate about solving real-world problems through code.
          <br /> Constantly learning, experimenting, and leveling up my development skills.
        </p>
      </div>

      <div className="w-full flex gap-10 pt-[2vw]">
        <div className="w-1/2 h-[60vh]">
          <img className="rounded-lg h-full object-cover" src={pic3} alt="Bashira Farhin" />
        </div>
      </div>
    </div>
  );
}

export default About;
