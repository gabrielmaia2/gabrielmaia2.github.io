import React, { useCallback, useState } from "react";
import Navbar from "../components/Navbar";
import ProjectsList from "./projects/ProjectsList";
import ProjectsCarousel from "./projects/ProjectsCarousel";
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import styled, { css } from "styled-components";
import useTitleCustom from "../hooks/useTitleCustom";
import { useMediaQuery } from "usehooks-ts";

const DropdownStyled = styled.div<{
  isSmall: boolean;
}>`
  margin: 0;
  display: inline-block;

  ${({ isSmall }) =>
    isSmall
      ? css``
      : css`
          position: relative;
          width: 0%;
          left: 3vw;
        `}
`;

const Title = styled.h1<{
  isSmall: boolean;
}>`
  padding: 1.5rem;
  margin: 0;

  flex-wrap: wrap;
  gap: 1rem;

  ${({ isSmall }) =>
    isSmall
      ? css`
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          width: 100%;
        `
      : css`
          display: inline-block;
          position: relative;
          text-align: center;
        `}
`;

const ProjectsCarouselStyled = styled.div.attrs({
  className: "d-flex flex-column justify-content-center",
})`
  margin-top: auto;
  margin-bottom: auto;
`;

export default function Projects() {
  useTitleCustom("Projects");
  const isSmallScreen = useMediaQuery("(max-width: 500px)");

  const [view, setView] = useState("list");

  const onSelect = useCallback((k: string | null) => {
    if (k) setView(k);
  }, []);

  return (
    <div className="h-100 d-flex flex-column">
      <Navbar />
      <Title isSmall={isSmallScreen}>
        My projects
        <DropdownStyled isSmall={isSmallScreen}>
          <DropdownButton
            as={ButtonGroup}
            key="dark"
            id={`dropdown-variants-dark`}
            variant="dark"
            title="View as:"
            onSelect={onSelect}
          >
            <Dropdown.Item eventKey="list" active={view === "list"}>
              List
            </Dropdown.Item>
            <Dropdown.Item eventKey="carousel" active={view === "carousel"}>
              Carousel
            </Dropdown.Item>
          </DropdownButton>
        </DropdownStyled>
      </Title>

      {view === "list" ? (
        <ProjectsList />
      ) : (
        <ProjectsCarouselStyled>
          <ProjectsCarousel />
        </ProjectsCarouselStyled>
      )}
    </div>
  );
}
