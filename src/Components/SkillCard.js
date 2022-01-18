import React from "react";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { GrReactjs } from "react-icons/gr";
import { FaBootstrap } from "react-icons/fa";
import { FaSass } from "react-icons/fa";

const SkillCard = (props) => {
  return (
    <>
      <div id="skillCard ">
      <Card style={{ width: '20', backgroundColor:'#222325', color: "white" }} className='my-4 mx-lg-3 ' id='projectCard' >
                
                <Card.Body className='cardBody' >
                    <div className="d-flex justify-content-evenly">
                    {/* <GrReactjs size="1.5rem"/>
                    <FaBootstrap size="1.5rem"/>
                    <FaSass size="1.5rem"/> */}
                    {props.icons[0]}
                    </div>
                    <Card.Title id="cardHeading">{props.skillData.title}</Card.Title>
                    <Card.Text>
                    {props.skillData.desc}
                    </Card.Text>
                    {/* <div className="cardButtons d-flex justify-content-around">
                    <Button variant="outline-warning" size='sm'>&nbsp;&nbsp;Page&nbsp;&nbsp;</Button>
                    <Button variant="outline-warning" size='sm'>&nbsp;&nbsp;Code&nbsp;&nbsp;</Button>
                    </div> */}
                </Card.Body>
            </Card>
      </div>
    </>
  );
};

export default SkillCard;
