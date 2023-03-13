import React from "react";
import styled from "styled-components";
import ContentAnimator from "../../components/ContentAnimator";
import projects from "../../data/Projects";
import {
  RandomBadge,
  RandomBadgeContainer,
} from "../../components/RandomBadge";

const Preview = styled.img`
  object-fit: contain;
  max-height: 50vh;
`;

export default function ProjectsList() {
  const projectsJSX = Object.entries(projects).map(
    ([k, { name, tags, imgUrl, element }], i) => {
      const isEven = i % 2 === 0;

      const tagsJSX = tags?.map((t) => <RandomBadge>{t.name}</RandomBadge>);

      return (
        <ContentAnimator.Item key={k} reverse={!isEven}>
          <ContentAnimator.Content side={isEven ? "left" : "right"}>
            <Preview src={imgUrl} alt={name} />
          </ContentAnimator.Content>
          <ContentAnimator.Content
            side={isEven ? "right" : "left"}
            hasBackground
          >
            <h3 className="mb-3">{name}</h3>
            <div className="my-2">
              <RandomBadgeContainer>{tagsJSX}</RandomBadgeContainer>
            </div>
            {element}
          </ContentAnimator.Content>
        </ContentAnimator.Item>
      );
    }
  );

  return <ContentAnimator>{projectsJSX}</ContentAnimator>;
}
