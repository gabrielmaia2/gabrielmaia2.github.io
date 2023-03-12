import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ContentAnimator from "../components/ContentAnimator";
import projects from "../data/Projects";

const Preview = styled.img`
  object-fit: contain;
  max-height: 50vh;
`;

export default function Projects() {
  const projectsJSX = Object.entries(projects).map(
    ([k, { name, imgUrl, element }], i) => {
      const isEven = i % 2 === 0;
      return (
        // <ProjectItem key={k}>
        //   <ProjectTitle>{name}</ProjectTitle>
        //   <ProjectPreview src={imgUrl} alt={name} />
        //   <ProjectDescription>{element}</ProjectDescription>
        // </ProjectItem>
        <ContentAnimator.Item key={k} reverse={!isEven}>
          <ContentAnimator.Content side={isEven ? "left" : "right"}>
            <Preview src={imgUrl} alt={name} />
          </ContentAnimator.Content>
          <ContentAnimator.Content
            side={isEven ? "right" : "left"}
            hasBackground
          >
            <h3 className="title">{name}</h3>
            {element}
          </ContentAnimator.Content>
        </ContentAnimator.Item>
      );
    }
  );

  return (
    <div>
      <Navbar />
      <h1 className="m-4 text-center">My projects</h1>
      <ContentAnimator>{projectsJSX}</ContentAnimator>
    </div>
  );
}
