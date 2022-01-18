import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import Proj1 from "../Assets/Proj-1.png";
import Proj2 from "../Assets/Proj-2.png";
import Proj3 from "../Assets/Proj-3.png";
import "./Projects.css";
import projData from "../Assets/ProjectsData";
import AOS from "aos";
// import "aos/dist/aos.css";

const Projects = () => {
  return (
    <>
      <div id="Projects" className="text-center mt-lg-4 mt-sm-1">
        <h1
          class="display-3  fw-normal mb-0"
          id="projectsHeading"
          data-aos="fade"
        >
          Projects
        </h1>
        <hr />
        {/* <p class="lead fw-normal fs-4 ">Here are some of my recent projects.</p> */}
        <div className="container row mx-auto mt-0 d-flex justify-content-center">
          <div className="col-lg-5 col-sm-9">
            <ProjectCard projData={projData[0]} />
          </div>
          <div className="col-lg-5 col-sm-9">
            <ProjectCard projData={projData[1]} />
          </div>
          <div className="col-lg-5 col-sm-9">
            <ProjectCard projData={projData[2]} />
          </div>
          <div className="col-lg-5 col-sm-9">
            <ProjectCard projData={projData[3]} />
          </div>
        </div>
      </div>
      <hr style={{ width: "100%", bottom: "0px", marginBottom: "2rem" }} />
    </>
  );
};

export default Projects;
