import React from "react";
import "./Works.css";
import { Card } from "react-bootstrap";
import ShikshaSopan from "../Assets/Sopan.png";
import Antaragni from "../Assets/AntaragniLogo.png";
import FMC from "../Assets/FMC.jpg";
import WIP from "../Assets/WIPLogo.png";

const Works = () => {
  return (
    <>
      <div id="Works" className="text-center mt-lg-4 mt-sm-4 ">
        <h1
          class="display-3  fw-normal mb-0"
          id="projectsHeading"
          data-aos="fade"
        >
          Works
        </h1>
        <hr />
        <div className="container row mx-auto mt-0 d-flex justify-content-center">
          <div className="col-lg-5 col-sm-9" data-aos="fade-up">
            <div id="workCard1 ">
              <a
                href="https://bizup.co.in/"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <Card
                  style={{
                    width: "15",
                    backgroundColor: "#222325",
                    color: "white",
                  }}
                  className="my-4 mx-lg-3 p-2"
                  id="projectCard"
                >
                  <Card.Img
                    variant="top"
                    src={WIP}
                    className="mx-auto"
                    style={{ height: "12.5rem", width: "12.5rem" }}
                  />
                  <Card.Body className="cardBody">
                    <Card.Title className="cardHeading mt-2">
                      WIP Technology Solutions
                    </Card.Title>
                    <Card.Text>Project Intern</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-sm-9" data-aos="fade-up">
            <div id="workCard1 ">
              <a
                href="https://www.shiksha-sopan.org/"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <Card
                  style={{
                    width: "15",
                    backgroundColor: "#222325",
                    color: "white",
                  }}
                  className="my-4 mx-lg-3 p-2"
                  id="projectCard"
                >
                  <Card.Img
                    variant="top"
                    src={ShikshaSopan}
                    className="mx-auto"
                    style={{ height: "12.5rem", width: "12.5rem" }}
                  />
                  <Card.Body className="cardBody">
                    <Card.Title className="cardHeading mt-2">
                      Shiksha Sopan
                    </Card.Title>
                    <Card.Text>Intern, Web Division</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-sm-9" data-aos="fade-up">
            <div id="workCard1 ">
              <a
                href="https://antaragni.in/"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <Card
                  style={{
                    width: "16",
                    backgroundColor: "#222325",
                    color: "white",
                  }}
                  className="my-4 mx-lg-3 p-2"
                  id="projectCard"
                >
                  <Card.Img
                    variant="top"
                    src={Antaragni}
                    className="mx-auto"
                    // style={{ height: "14.9rem", width: "10rem" }}
                    style={{ height: "12.5rem", width: "8rem" }}
                  />
                  <Card.Body className="cardBody">
                    <Card.Title className="cardHeading mt-2">
                      Antaragni
                    </Card.Title>
                    <Card.Text>Organizer (Videography)</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-sm-9" data-aos="fade-up">
            <div id="workCard1 ">
              <a
                href="https://www.youtube.com/channel/UCLi1wN-vO5RedLRCuDKBB_g"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <Card
                  style={{
                    width: "16",
                    backgroundColor: "#222325",
                    color: "white",
                  }}
                  className="my-4 mx-lg-3 p-2 px-auto"
                  id="projectCard"
                >
                  <Card.Img
                    variant="top"
                    src={FMC}
                    className="mx-auto"
                    style={{
                      height: "12.5rem",
                      width: "12.5rem",
                      borderRadius: "6.25rem",
                    }}
                  />
                  <Card.Body className="cardBody">
                    <Card.Title className="cardHeading mt-2">
                      Films and Media Club
                    </Card.Title>
                    <Card.Text>Former Secretary</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
