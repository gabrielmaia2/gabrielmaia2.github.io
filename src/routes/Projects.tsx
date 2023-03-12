import React, { useCallback, useState } from "react";
import Navbar from "../components/Navbar";
import ProjectsList from "./projects/ProjectsList";
import ProjectsCarousel from "./projects/ProjectsCarousel";
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import styled from "styled-components";

const DropdownStyled = styled.div.attrs({ className: "m-0 d-inline-block" })`
  position: relative;
  width: 0%;
  left: 3vw;
`;

const ProjectsCarouselStyled = styled.div.attrs({
  className: "d-flex flex-column justify-content-center",
})`
  margin-top: auto;
  margin-bottom: auto;
`;

export default function Projects() {
  const [view, setView] = useState("list");

  const onSelect = useCallback((k: string | null) => {
    if (k) setView(k);
  }, []);

  return (
    <div className="h-100 d-flex flex-column">
      <Navbar />
      <div className="mx-auto position-relative text-center">
        <h1 className="m-4 d-inline-block">
          My projects
          <DropdownStyled>
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
        </h1>
      </div>

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
