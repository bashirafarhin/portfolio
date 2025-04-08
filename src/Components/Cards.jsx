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

function Cards() {
  const skills = [
    { icon: <SiMongodb size="3.5vw" />, label: "MongoDB" },
    { icon: <SiExpress size="3.5vw" />, label: "Express" },
    { icon: <FaReact size="3.5vw" />, label: "React" },
    { icon: <FaNodeJs size="3.5vw" />, label: "Node.js" },
    { icon: <SiRedux size="3.5vw" />, label: "Redux Toolkit" },
    { icon: <SiSocketdotio size="3.5vw" />, label: "WebSocket" },
    { icon: <SiTailwindcss size="3.5vw" />, label: "Tailwind CSS" },
    { icon: <FaHtml5 size="3.5vw" />, label: "HTML" },
    { icon: <FaCss3Alt size="3.5vw" />, label: "CSS" },
    { icon: <FaBootstrap size="3.5vw" />, label: "Bootstrap" },
    { icon: <SiNextdotjs size="3.5vw" />, label: "Next.js" },
    { icon: <SiPostgresql size="3.5vw" />, label: "PostgreSQL" },
  ];

  return (
    <div className="w-full min-h-screen px-[4.5vw] py-[5vw] bg-[#f1f1f1]">
      <h2 className="text-[3vw] font-bold mb-10 text-[#004d43] tracking-tight">My Tech Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[2vw]">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative h-[20vh] flex flex-col items-center justify-center rounded-xl bg-[#212121] text-white hover:bg-[#004d43] transition duration-300 ease-in-out"
          >
            <div className="mb-2 transition-transform group-hover:scale-110">
              {skill.icon}
            </div>
            <span className="text-[1.2vw] font-medium">{skill.label}</span>
            <div className="absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity text-[0.8vw] tracking-tight text-[#CDEA68]">
              Proficient
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
