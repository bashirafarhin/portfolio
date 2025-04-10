import React, { lazy, Suspense } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Cursor from "./Components/Cursor";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
    <Cursor/>
    <div data-scroll-container>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <LandingPage />
        <Skills />
        <About />
        <Eyes />
        <Projects />
        <Footer />
      </Suspense>
    </div>
    </>
  );
};

export default App;
