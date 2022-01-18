import React from "react";
import "./About.css";
import { HiOutlineMail } from "react-icons/hi";

const About = () => {
  return (
    <>
      <div
        class="position-relative overflow-hidden p-3 p-sm-5 mt-2   text-center "
        id="About"
        data-aos="fade-up"
      >
        <h1 class="display-3  fw-normal mb-0" id="aboutMe">
          About Me
        </h1>
        <hr />
        <div
          class="col-md-8 p-lg-3 mx-auto mt-lg-4 mt-5 mb-sm-0 mb-lg-0 pb-0"
          id="intro"
        >
          <h1 class="display-4 fw-normal mb-0">
            Hi <span className="Blue">there !</span>
          </h1>
          <h2 class="display-4 fw-normal mt-0">
            I am{" "}
            <strong>
              <span className="name">Sachin</span>
            </strong>
          </h2>
          <p class="lead fw-normal fs-4 ">
            And I am a Full-Stack Web and App Developer, Video Editor,
            Programmer, Gamer and a third-year undergraduate at the Mechanical
            department of IIT Kanpur.
          </p>
        </div>
        {/* <div class="product-device shadow-sm d-none d-md-block"></div>
                <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div> */}
        <div
          className="container d-flex justify-content-center mb-sm-0 "
          id="emailButton"
        >
          <a
            class="btn btn-outline-warning"
            id="aboutBtn"
            type="button"
            href="mailto:sachindd@iitk.ac.in"
            target="_blank"
          >
            <HiOutlineMail size="2rem" /> Email
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
