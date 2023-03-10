import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ProjectsComp from "../components/Projects";
import projects from "../data/Projects";

const ProjectsWrapper = styled.div.attrs({ className: "mx-auto" })`
  width: 80%;
`;

export default function Projects() {
  return (
    <div>
      <Navbar />
      <h1 className="m-4 text-center">My projects</h1>
      <br />
      <ProjectsWrapper>
        <ProjectsComp projects={projects} />
      </ProjectsWrapper>
    </div>
  );
}
