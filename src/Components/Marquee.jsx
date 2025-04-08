import React from "react";
import "./Marquee.css"; // Make sure to import or include these styles

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speeed=".2"
      className="w-full pt-20 py-15 rounded-t-3xl bg-[#004d43] text-white"
    >
      <div className="movingText border-t-2 border-b-2 border-zinc-300 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          <h1 className="text-[10.5vw] leading-none font-[fantasy] pr-20 pt-10 -mb-[7vw] inline-block">
            FULL STACK DEVELOPER FULL STACK DEVELOPER FULL STACK DEVELOPER
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
