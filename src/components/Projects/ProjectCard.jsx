import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

function ProjectCard({ project }) {
  return (
    <Card className="backdrop-blur-sm rounded-xl bg-white/30 flex flex-col">
      <CardHeader className="m-2">
        <b>
          <a href={project.url}>{project.title}</a>
        </b>
      </CardHeader>
      <CardBody className="m-2">
        <Image
          src={project.photo}
          width={400}
          className="self-center object-cover rounded-xl mb-2"
        />
        <p>{project.description}</p>
        <small className="pt-2">
          <p>{project.techstack}</p>
        </small>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
