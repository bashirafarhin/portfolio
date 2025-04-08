import React from "react";
import "./Featured.css"; // make sure to create and import this CSS file

function Featured() {
  const projects = [
    {
      name: "FYDE",
      image: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
    },
    {
      name: "VISE",
      image: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
    },
    {
      name: "TRAWA",
      image: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg",
    },
    {
      name: "PREMIUM BLEND",
      image: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png",
    },
  ];

  return (
    <div className="w-full py-20">
      <div className="w-full px-[4.5vw] border-b border-zinc-700 pb-10">
        <h1 className="text-[4vw] tracking-tighter">Featured Projects</h1>
      </div>

      <div className="flex flex-col gap-[6vw] px-[4.5vw] pt-[6vw]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-8 w-full items-center"
          >
            {/* Left - Project Image */}
            <div className="w-full md:w-1/2 h-[50vh]">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Right - Project Name and Description */}
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-[2vw] font-bold text-[#CDEA68]">
                {project.name}
              </h2>
              <p className="text-zinc-400 text-[1vw] mt-4">
                {/* Add your project description here */}
                Description for {project.name} will go here.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
