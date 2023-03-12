import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import ProjectsComp from "../../components/Projects";
import projects from "../../data/Projects";
import useMediaQueries from "../../hooks/useMediaQueries";

const ProjectsWrapper = styled.div`
  padding: 0 5vw;
`;

export default function ProjectsCarousel() {
  let numSlides =
    1 +
    useMediaQueries([
      "(max-width: 800px)",
      "(max-width: 1400px)",
      "(max-width: 2000px)",
    ]);

  if (numSlides === 0) numSlides = 4;

  return (
    <ProjectsWrapper>
      <ProjectsComp
        projects={projects}
        numSlides={numSlides}
        panelHeight="40vh"
      />
    </ProjectsWrapper>
  );
}
