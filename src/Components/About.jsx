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
        <div className="w-1/2">
          <h1 className="text-[3.2vw] font-medium">My Approach</h1>
          <button className="group flex hover:bg-black gap-[2vw] items-center px-[2vw] py-[1.2vw] mt-[0.5vw] bg-zinc-900 rounded-full text-white transition-all duration-300">
            READ MORE
            <div className="group-hover:scale-150 transition-transform duration-300 rounded-full bg-white w-[0.8vw] h-[0.8vw]"></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh]">
          <img className="rounded-lg h-full object-cover" src={pic3} alt="Bashira Farhin" />
        </div>
      </div>
    </div>
  );
}

export default About;
