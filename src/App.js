import React, { useEffect } from "react";
import About from "./Components/About";
import BG from "./Components/BG";
import NavBar from "./Components/NavBar";
import Navbar2 from "./Components/Navbar2";
import Projects from "./Components/Projects";
import "./App.css";
import Skills from "./Components/Skills";
import Works from "./Components/Works";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div>
        <div style={{ height: "100vh" }} data-aos="">
          <BG />
          <Navbar2 />
          {/* <NavBar/> */}
          <div className="container" id="about">
            <About />
          </div>
        </div>
        <div className="container" id="projects">
          <Projects />
        </div>
        <div className="container" id="skills">
          <Skills />
        </div>
        <div className="container" id="works">
          <Works />
        </div>
        <div id="footer" className="mt-5 mb-0">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
