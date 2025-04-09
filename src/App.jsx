import React, { useEffect, lazy, Suspense } from "react";
const Navbar = lazy(() => import("./Components/Navbar"));
const LandingPage = lazy(() => import("./Components/LandingPage"));
const About = lazy(() => import("./Components/About"));
const Eyes = lazy(() => import("./Components/Eyes"));
const Projects = lazy(() => import("./Components/Projects"));
const Skills = lazy(() => import("./Components/Skills"));
const Footer = lazy(() => import("./Components/Footer"));
import LocomotiveScroll from "locomotive-scroll";

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
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
  );
};

export default App;
