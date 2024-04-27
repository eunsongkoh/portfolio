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
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <h4>
                      <i>{workExperience.company}</i>
                    </h4>
                  </Card.Subtitle>
                  <Card.Text>{workExperience.description}</Card.Text>
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
