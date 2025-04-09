import React from "react";

const Navbar = () => {
  return (
    <div
      className="fixed z-[999] w-full px-[4.5vw] py-5 font-['Neue Montreal'] flex justify-between items-center backdrop-blur bg-transparent"
    >
      <div className="logo">
        {/* [SVG LOGO REMAINS THE SAME] */}
      </div>

      <div className="links flex gap-5">
        <a
          href="https://drive.google.com/file/d/1wQSFRC_rOeqd6mUDgOJQV0JCFokIxfhq/view?usp=sharing"
          download
          className="text-[1.2vw] capitalize cursor-pointer font-normal transition-transform duration-200 hover:scale-110"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
