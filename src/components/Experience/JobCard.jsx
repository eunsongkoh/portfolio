import React from "react";
import { Card } from "react-bootstrap";
import { Positions } from "./work";
import classes from "../../styles/main.module.css";
import { Container, Row, Col } from "react-bootstrap";

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
                  <Card.Text>
                    {workExperience.description
                      .split("\n")
                      .map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                  </Card.Text>
                  <br />
                  <Card.Text>
                    <span className="text-sm underline decoration-3 decoration-sky-500">
                      {workExperience.techstack}
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default JobCard;
