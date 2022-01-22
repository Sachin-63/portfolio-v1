import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <span class="text-muted">
              Created By &nbsp;
              <a className="navbar-brand " style={{ color: "#ffffff" }} href="https://sachin-63.github.io/portfolio-v1/">
                Sachin
              </a>
              | © All rights reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
