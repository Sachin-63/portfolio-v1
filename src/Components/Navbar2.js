import React from "react";
import "./Navbar2.css";

import { VscCode } from "react-icons/vsc";
import { CgBoy } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Navbar2 = () => {
  //

  return (
    <>
      <div id="navbar" className="top-0 d-flex justify-content-center">
        <nav
          class="navbar navbar-expand-sm navbar-dark  "
          aria-label="Third navbar example"
          id="navbar1"
        >
          <div class="container-fluid " id="navbarContent">
            {/* <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
            <a
              class="navbar-brand  "
              href="#"
              id="navbarTitle"
              data-aos="fade-right"
            >
              <span className="" id="boy">
                <VscCode size="2.2rem" color="#ffc107" />
              </span>
              <strong> Sachin-IITK</strong>
            </a>
            <div className="navbar-icons" data-aos="fade-left">
              <a
                className="navbarIcon ms-2 d-inline nav-item"
                href="http://github.com/Sachin-63"
                target="_blank"
              >
                <AiFillGithub size="2rem" color="#dadada" />
              </a>
              <a
                className="navbarIcon ms-2 d-inline nav-item"
                href="http://www.linkedin.com/in/sachin63"
                target="_blank"
              >
                <AiFillLinkedin size="2rem" color="#dadada" />
              </a>
              <a
                className="navbarIcon ms-2 d-inline nav-item"
                href="http://www.instagram.com/s_a.ch.i_n/"
                target="_blank"
                type="button"
              >
                <AiOutlineInstagram size="2rem" color="#dadada" />
              </a>
            </div>
          </div>
        </nav>
        <nav
          class="navbar navbar-expand navbar-dark "
          aria-label="Tenth navbar example"
          id="navbar2"
        >
          <div class="container-fluid">
            <button
              class="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample08"
              aria-controls="navbarsExample08"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="navbar-collapse justify-content-md-center collapse d-flex justify-content-center"
              id="navbarsExample08"
              data-aos="fade"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" href="#About">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#Projects">
                    Projects
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#Skills">
                    Skills
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#Works">
                    Works
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar2;
