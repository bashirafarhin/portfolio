import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <a
          href="https://drive.google.com/file/d/1wQSFRC_rOeqd6mUDgOJQV0JCFokIxfhq/view?usp=sharing"
          download
          className="resume-link"
        >
          <h1 className="tilt-animation">Resume</h1>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
