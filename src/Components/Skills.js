import React from "react";
import { Card } from "react-bootstrap";
import { GrReactjs } from "react-icons/gr";
import { FaBootstrap, FaSass, FaNodeJs, FaPhp, FaPython } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAutodesk,
  SiMaterialui,
} from "react-icons/si";
import { DiAndroid } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div id="Skills" className="text-center mt-lg-4">
        <h1
          class="display-3  fw-normal mb-0"
          id="projectsHeading"
          data-aos="fade"
        >
          Skills
        </h1>
        <hr />
        <div className="container row mx-auto mt-0 d-flex justify-content-center">
          <div className="col-lg-3 col-sm-9" data-aos="fade-up">
            <div id="skillCard1 ">
              <Card
                style={{
                  width: "20",
                  backgroundColor: "#222325",
                  color: "white",
                }}
                className="my-4 mx-lg-3 "
                id="projectCard"
              >
                <Card.Body className="cardBody">
                  <div className="d-flex justify-content-evenly mb-2">
                    <GrReactjs color="#00D8FF" size="1.5rem" />
                    <FaBootstrap color="#7952B3" size="1.5rem" />
                    <FaSass color="#C36291" size="1.5rem" />
                    <SiMaterialui color="#0080FF" size="1.5rem" />
                  </div>
                  <Card.Title className="cardHeading mt-2">
                    Front-End
                  </Card.Title>
                  <Card.Text>
                    Experienced with ReactJS, BootStrap, Sass and Material UI.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-lg-3 col-sm-9" data-aos="fade-up">
            <div id="skillCard2 ">
              <Card
                style={{
                  width: "20",
                  backgroundColor: "#222325",
                  color: "white",
                }}
                className="my-4 mx-lg-3 "
                id="projectCard"
              >
                <Card.Body className="cardBody">
                  <div className="d-flex justify-content-evenly mb-2">
                    <FaNodeJs color="#4F9640" size="1.5rem" />
                    <SiMongodb color="#4BA13E" size="1.5rem" />
                    <SiExpress color="#7B7B7B" size="1.5rem" />
                  </div>
                  <Card.Title className="cardHeading mt-2">Back-End</Card.Title>
                  <Card.Text>
                    Experienced with NodeJS, MongoDB and Express.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-lg-3 col-sm-9" data-aos="fade-up">
            <div id="skillCard3 ">
              <Card
                style={{
                  width: "20",
                  backgroundColor: "#222325",
                  color: "white",
                }}
                className="my-4 mx-lg-3 "
                id="projectCard"
              >
                <Card.Body className="cardBody">
                  <div className="d-flex justify-content-evenly mb-2">
                    <DiAndroid color="#7BB201" size="1.5rem" />
                    <GrReactjs color="#00D8FF" size="1.5rem" />
                  </div>
                  <Card.Title className="cardHeading mt-2">
                    App Development
                  </Card.Title>
                  <Card.Text>
                    Learning App Development using React Native.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-lg-3 col-sm-9" data-aos="fade-up">
            <div id="skillCard4 ">
              <Card
                style={{
                  width: "20",
                  backgroundColor: "#222325",
                  color: "white",
                }}
                className="my-4 mx-lg-3 "
                id="projectCard"
              >
                <Card.Body className="cardBody">
                  <div className="d-flex justify-content-evenly mb-2">
                    <FaPhp color="#828BB4" size="1.5rem" />
                    <FaPython color="#FFC107" size="1.5rem" />
                    <AiFillGithub color="#ffffff" size="1.5rem" />
                    <SiAdobepremierepro color="#DE71F2" size="1.5rem" />
                    <SiAdobeaftereffects color="#C78AF2" size="1.5rem" />
                    <SiAutodesk color="#2B89BF" size="1.5rem" />
                  </div>
                  <Card.Title className="cardHeading mt-2">
                    Other Skills
                  </Card.Title>
                  <Card.Text>
                    C, C++, Python, PHP, Git, PremierPro, After Effects, Fusion
                    360
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ width: "100%", bottom: "0px", marginBottom: "2rem" }} />
    </>
  );
};

export default Skills;
