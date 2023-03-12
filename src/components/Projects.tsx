import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styled, { css } from "styled-components";
import Project from "../components/Project";
import ProjectType from "../types/Project";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { Button } from "react-bootstrap";

const Wrapper = styled.div.attrs({
  className: "overflow-y-visible",
})`
  position: relative;
`;
const Carousel = styled.div.attrs({
  className: "embia embia__viewport overflow-x-hidden",
})`
  height: 100%;
`;
const CarouselContainer = styled.div.attrs({
  className: "embia__container d-flex flex-row",
})``;

const Slide = styled.div.attrs({
  className: "embla__slide container-fluid p-0",
})<{ slideSize: string }>`
  flex: 1 0 ${({ slideSize }) => slideSize};
  position: relative;
`;

const buttonStyles = css`
  position: absolute;
  font-size: 5em;
  color: #ffffff9b;
  z-index: 3;
  height: 100%;
  padding: 0;
  background-color: transparent !important;
  border: 0 !important;
`;

const PrevButton = styled(Button)`
  ${buttonStyles}
  left: 0;
`;
const NextButton = styled(Button)`
  ${buttonStyles}
  right: 0;
`;

export default function Projects({
  projects,
  numSlides,
  panelHeight,
}: {
  projects: Record<string, ProjectType>;
  numSlides: number;
  panelHeight: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    axis: "x",
    inViewThreshold: 0.1,
    align: numSlides % 2 === 0 ? "start" : "center",
  });

  // Recomputes carousel when size changes
  useEffect(() => {
    emblaApi?.reInit();
  }, [emblaApi, numSlides, panelHeight]);

  useEffect(() => {
    if (!emblaApi) return;
    const cb = () => {
      const nodes = emblaApi.slideNodes();

      emblaApi.slidesInView().forEach((i) => {
        nodes[i].style.visibility = "visible";
        console.log(`visible ${i}`);
      });
      emblaApi.slidesNotInView().forEach((i) => {
        nodes[i].style.visibility = "hidden";
        console.log(`hidden ${i}`);
      });
    };

    emblaApi.on("scroll", cb);
    emblaApi.on("init", cb);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const projectsJSX = Object.entries(projects).map(
    ([k, { name, tags, imgUrl, element }]) => {
      return (
        <Slide slideSize={`${100 / numSlides}%`}>
          <Project
            key={k}
            name={name}
            tags={tags}
            imgUrl={imgUrl}
            height={panelHeight}
          >
            {element}
          </Project>
        </Slide>
      );
    }
  );

  return (
    <Wrapper>
      <PrevButton onClick={scrollPrev}>
        <RxCaretLeft className="h-100" />
      </PrevButton>
      <NextButton onClick={scrollNext}>
        <RxCaretRight className="h-100" />
      </NextButton>
      <Carousel ref={emblaRef}>
        <CarouselContainer>{projectsJSX}</CarouselContainer>
      </Carousel>
    </Wrapper>
  );
}
