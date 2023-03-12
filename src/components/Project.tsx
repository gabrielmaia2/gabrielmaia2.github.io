import React, { PropsWithChildren, useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useElementSize } from "usehooks-ts";
import "../scss/styles.scss";
import { RandomBadge, RandomBadgeContainer } from "./RandomBadge";

const transitionTime = `0.3s`;
const bgDefault = `rgba(0, 0, 0, 0.4)`;
const bgHover = `rgba(0, 0, 0, 0.8)`;

const Preview = styled.img.attrs({ className: "w-100 h-100" })`
  object-fit: contain;
`;

const NoPreview = styled.div.attrs({ className: "w-100 h-100" })``;

const Description = styled.div.attrs({ className: "w-100" })`
  position: absolute;
`;

const Title = styled.h3.attrs({ className: "p-2 m-0" })``;
const Details = styled.div.attrs({ className: "p-2 pt-0" })``;

const ProjectComp = styled.div.attrs({
  className: "fs-08em w-100",
})<{ height: string; detailsHeight: number }>`
  height: ${({ height }) => height};
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 0.1em #000000c3;
  transition: filter ${transitionTime}, transform ${transitionTime};
  transform: scale(1);
  z-index: 1;

  ${Description} {
    bottom: ${({ detailsHeight }) => -detailsHeight}px;
    background-color: ${bgHover};
    transition: all ${transitionTime};
  }

  ${Preview}, ${NoPreview} {
    background-color: ${bgDefault};
    transition: all ${transitionTime};
  }

  &:hover {
    box-shadow: 0 0 0.3em #000000c3;
    transform: scale(1.03);
    z-index: 2;

    ${Description} {
      bottom: 0px;
      background-color: ${bgHover};
    }

    ${Preview}, ${NoPreview} {
      background-color: ${bgHover};
    }
  }
`;

const Wrapper = styled.div`
  padding: 1.5%;
`;

export default function Project({
  name,
  tags,
  imgUrl,
  height,
  children,
}: PropsWithChildren<{
  name: string;
  tags?: { name: string; category: string }[];
  imgUrl?: string;
  height: string;
}>) {
  const [detailsRef, { height: detailsHeight }] = useElementSize();

  const tagsJSX = tags?.map((t) => <RandomBadge>{t.name}</RandomBadge>);

  return (
    <Wrapper>
      <ProjectComp height={height} detailsHeight={detailsHeight}>
        {imgUrl ? <Preview src={imgUrl} alt={name} /> : <NoPreview />}
        <Description>
          <Title>{name}</Title>
          <Details ref={detailsRef}>
            <div className="mb-2">
              <RandomBadgeContainer>{tagsJSX}</RandomBadgeContainer>
            </div>
            {children}
          </Details>
        </Description>
      </ProjectComp>
    </Wrapper>
  );
}
