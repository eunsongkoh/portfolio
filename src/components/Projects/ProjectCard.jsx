import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

function ProjectCard({ project }) {
  return (
    <Card className="backdrop-blur-sm rounded-xl bg-frosted flex flex-col">
      <CardHeader className="m-2 p-1">
        <b>
          <a
            className="underline decoration-2 decoration-pink-300"
            href={project.url}
          >
            {project.title}
          </a>
        </b>
      </CardHeader>
      <CardBody className="m-2 p-1 text-neutral-100">
        <p>{project.description}</p>
        <small className="pt-2">
          <p>{project.techstack}</p>
        </small>
        <div className="mt-5 flex justify-center">
          <Image
            src={project.photo}
            width={100}
            className="object-cover rounded-xl mb-2"
          />
        </div>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
