import React, { useState } from "react";
import { Pagination, Virtual, Keyboard, A11y } from "swiper";
import { Swiper, SwiperSlide as SwiperSlideComp } from "swiper/react";
import styled from "styled-components";
import Project from "../components/Project";
import "swiper/css/bundle";
import ProjectType from "../types/Project";

const SwiperWrapper = styled.div`
  mask-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 255, 255, 1) 10%,
    rgba(255, 255, 255, 1) 90%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const SwiperSlide = styled(SwiperSlideComp).attrs({
  className: "container-fluid h-auto",
})``;

const PaginationStyled = styled.div.attrs({
  className: "w-100 d-flex flex-column align-items-center m-3",
})``;

const PaginationChild = styled.div`
  transform: translateX(0%) !important;
`;

export default function Projects({
  projects,
}: {
  projects: Record<string, ProjectType>;
}) {
  const projectsJSX = Object.entries(projects).map(
    ([k, { name, imgUrl, element }]) => (
      <SwiperSlide key={k}>
        <Project name={name} imgUrl={imgUrl}>
          {element}
        </Project>
      </SwiperSlide>
    )
  );

  return (
    <SwiperWrapper>
      <Swiper
        // install Swiper modules
        modules={[Pagination, Virtual, Keyboard, A11y]}
        spaceBetween={0}
        slidesPerView={3}
        centeredSlides
        grabCursor
        loop
        freeMode
        keyboard={{ enabled: true, onlyInViewport: false }}
        pagination={{
          el: `${PaginationChild}`,
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {projectsJSX}
        <PaginationStyled>
          <PaginationChild />
        </PaginationStyled>
      </Swiper>
    </SwiperWrapper>
  );
}
