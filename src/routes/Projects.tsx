import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ProjectsComp from "../components/Projects";
import projects from "../data/Projects";
import useMediaQueries from "../hooks/useMediaQueries";

const ProjectsWrapper = styled.div`
  padding: 0 5vw;
`;

export default function Projects() {
  let numSlides =
    1 +
    useMediaQueries([
      "(max-width: 800px)",
      "(max-width: 1400px)",
      "(max-width: 2000px)",
    ]);

  if (numSlides === 0) numSlides = 4;

  return (
    <div>
      <Navbar />
      <h1 className="m-4 text-center">My projects</h1>
      <ProjectsWrapper>
        <ProjectsComp
          projects={projects}
          numSlides={numSlides}
          panelHeight="40vh"
        />
      </ProjectsWrapper>
    </div>
  );
}
