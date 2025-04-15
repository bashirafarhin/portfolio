import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import "./Skills.css";

function Skills() {
  const skills = [
    { icon: <SiMongodb color="#47A248" />, label: "MongoDB" },
    { icon: <SiExpress color="#336791" />, label: "Express" },
    { icon: <FaReact color="#61DBFB" />, label: "React" },
    { icon: <FaNodeJs color="#339933" />, label: "Node.js" },
    { icon: <SiRedux color="#764ABC" />, label: "Redux Toolkit" },
    { icon: <SiSocketdotio color="#E34F26" />, label: "WebSocket" },
    { icon: <SiTailwindcss color="#06B6D4" />, label: "Tailwind CSS" },
    { icon: <FaHtml5 color="#E34F26" />, label: "HTML" },
    { icon: <FaCss3Alt color="#1572B6" />, label: "CSS" },
    { icon: <FaBootstrap color="#7952B3" />, label: "Bootstrap" },
    { icon: <SiNextdotjs color="#339933" />, label: "Next.js" },
    { icon: <SiPostgresql color="#336791" />, label: "PostgreSQL" },
  ];

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".2"
      className="skills-container"
    >
      <h2 className="skills-title">My Tech Stack</h2>
      <div className="skills">
        <div className="skills-content">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="skill-box">
              <div className="skill-icon">
                {React.cloneElement(skill.icon, { size: "80" })}
              </div>
              <span className="skill-label">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
