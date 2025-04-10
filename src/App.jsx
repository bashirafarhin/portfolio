import React from "react";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div data-scroll-container>
      <Navbar />
      <LandingPage />
      <Skills />
      <About />
      <Eyes />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
