import React from "react";
import { Card } from "react-bootstrap";
import { Positions } from "./work";
import classes from "../../styles/main.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

function JobCard() {
  return (
    <div className={classes.jobCard}>
      <Container>
        <Row>
          {Positions.map((workExperience) => (
            <Col xs={6} md={4} className={classes.card}>
              <Card>
                <Card.Body className="text-neutral-100">
                  <Card.Title>
                    <h3>
                      <span className="text-xl font-black underline decoration-2 decoration-lime-200">
                        <b>{workExperience.title}</b>
                      </span>
                    </h3>
                    <h4 className="font-medium">{workExperience.company}</h4>
                  </Card.Title>
                  <h5 className="text-sm">{workExperience.date}</h5>
                  <Accordian
                    desc={workExperience.description}
                    techstack={workExperience.techstack}
                  />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

function Accordian({ desc, techstack }) {
  const [isOpen, setIsOpen] = useState(false);

  const pressed = () => {
    setIsOpen(!isOpen);
    console.log("clicked", isOpen);
  };

  return (
    <>
      <button onClick={pressed}>
        {isOpen ? "> read less" : "> read more"}
      </button>
      {isOpen && (
        <div>
          <Card.Text>
            {desc.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Card.Text>
          <br />
          <Card.Text>
            <span className="text-sm underline decoration-3 decoration-sky-500">
              {techstack}
            </span>
          </Card.Text>
        </div>
      )}
    </>
  );
}
export default JobCard;
