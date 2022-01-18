import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <>
      <div id="" data-aos="fade-up">
        <Card
          style={{ width: "20", backgroundColor: "#222325", color: "white" }}
          className="my-4 mx-lg-3 "
          id="projectCard"
        >
          <Card.Img variant="top" src={props.projData.img} />
          <Card.Body className="cardBody">
            <Card.Title id="cardHeading">{props.projData.name}</Card.Title>
            <Card.Text>{props.projData.description}</Card.Text>
            <div className="cardButtons d-flex justify-content-around">
              <Button
                variant="outline-warning"
                size="sm"
                href={props.projData.page}
                target="_blank"
              >
                &nbsp;&nbsp;Page&nbsp;&nbsp;
              </Button>
              <Button
                variant="outline-warning"
                size="sm"
                href={props.projData.code}
                target="_blank"
              >
                &nbsp;&nbsp;Code&nbsp;&nbsp;
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ProjectCard;
