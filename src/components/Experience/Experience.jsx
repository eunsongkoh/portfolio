import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap";
import classes from "../../styles/main.module.css";
import JobCard from "./JobCard";
import Skills from "./Skills";

function Experience() {
  return (
    <div className={classes.exp}>
      <JobCard />
      <Skills />
    </div>
  );
}

export default Experience;
