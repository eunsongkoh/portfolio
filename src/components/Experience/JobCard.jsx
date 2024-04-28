import React from "react";
import { Card } from "react-bootstrap";
import { WorkExperience } from "../../models/workExperience";
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
                <Card.Body>
                  <Card.Title>
                    <h3>{workExperience.title}</h3>
                    <h4>{workExperience.company}</h4>
                  </Card.Title>
                  <h5>{workExperience.date}</h5>
                  <Card.Link>{workExperience.description}</Card.Link>
                  <br />
                  <br />
                  <Card.Link>{workExperience.techstack}</Card.Link>
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
