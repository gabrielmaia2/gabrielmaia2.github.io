import React, { PropsWithChildren, useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useElementSize } from "usehooks-ts";
import "../scss/styles.scss";

const transitionTime = `0.3s`;
const bgDefault = `rgba(0, 0, 0, 0.4)`;
const bgHover = `rgba(0, 0, 0, 0.8)`;

const Preview = styled.img.attrs({ className: "w-100 h-100" })`
  object-fit: contain;
`;

const NoPreview = styled.div.attrs({ className: "w-100 h-100" })``;

const Description = styled.div`
  position: absolute;
  width: 100%;
`;

const ProjectComp = styled.div.attrs({
  className: "fs-08em",
})<{ detailsHeight: number }>`
  height: 40vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  filter: drop-shadow(0 0 0.1em #000000c3);
  transition: filter ${transitionTime};

  ${Description} {
    bottom: ${({ detailsHeight: height }) => -height}px;
    background-color: ${bgDefault};
    transition: background-color ${transitionTime}, bottom ${transitionTime};
  }

  ${Preview}, ${NoPreview} {
    background-color: ${bgDefault};
    transition: background-color ${transitionTime};
  }

  &:hover {
    filter: drop-shadow(0 0 0.3em #000000c3);

    ${Description} {
      bottom: 0px;
      background-color: ${bgHover};
    }

    ${Preview}, ${NoPreview} {
      background-color: ${bgHover};
    }
  }
`;

const Title = styled.h3.attrs({ className: "p-2 m-0" })``;
const Details = styled.div.attrs({ className: "p-2 pt-0" })``;

export default function Project({
  name,
  imgUrl,
  children,
}: PropsWithChildren<{ name: string; imgUrl?: string }>) {
  const [detailsRef, { height }] = useElementSize();

  return (
    <ProjectComp detailsHeight={height}>
      {imgUrl ? <Preview src={imgUrl} alt={name} /> : <NoPreview />}
      <Description>
        <Title>{name}</Title>
        <Details ref={detailsRef}>{children}</Details>
      </Description>
    </ProjectComp>
  );
}
