import React from "react";
import { Container } from "react-bootstrap";
import { projectList } from "../data.js";
import Project from "./Project";

const Projects = () => {
  return (
    <Container>
      <div id="projects" className="pt-5">
        <h2 className="align-items-center text-center p-5 ">Projects</h2>
        <div>
          {projectList.map((project) => (
            <Project
              key={project.id}
              image={project.image}
              text={project.text}
              button={project.button}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Projects;
