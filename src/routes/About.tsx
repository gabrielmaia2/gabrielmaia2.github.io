import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import ContentAnimator from "../components/ContentAnimator";
import meImg from "../data/images/me.jpg";

const Image = styled.img`
  object-fit: contain;
  max-height: 40vh;
`;

const ContentStyled = styled(ContentAnimator.Content)`
  width: 35%;
`;

const PStyled = styled.p.attrs({ className: "mb-1" })``;

export default function About() {
  // useTitleCustom("About");

  return (
    <div className="">
      <Navbar />
      <h1 className="m-4 text-center">About me</h1>
      <ContentAnimator.Item>
        <ContentAnimator.Content side="left">
          <Image src={meImg} alt="Gabriel Maia" />
        </ContentAnimator.Content>
        <ContentStyled side="right" hasBackground>
          <h3 className="mb-3">I'm Gabriel Maia, currently 23.</h3>
          <PStyled>My personal accounts:</PStyled>
          <PStyled>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/gabriel-maia-gondim-0a7646169/">
              Gabriel Maia Gondim
            </a>
          </PStyled>
          <PStyled>
            Github: <a href="https://github.com/gabrielmaia2/">gabrielmaia2</a>
          </PStyled>
          <PStyled>
            Instagram:{" "}
            <a href="https://www.instagram.com/gabmaia07/">@gabmaia07</a>
          </PStyled>
          <p className="m-0">
            Telegram: <a href="https://telegram.me/gabmaia07/">@gabmaia07</a>
          </p>
        </ContentStyled>
      </ContentAnimator.Item>
      <ContentAnimator.Item reverse>
        <ContentAnimator.Content side="left" hasBackground isSingle>
          <p>
            I am looking for a position as a data scientist in the industry. I
            don't have professional experience (yet), but I am highly flexible
            and can learn pretty fast. I've worked on some projects, you can
            check them out in the "Projects" tab.
          </p>
        </ContentAnimator.Content>
      </ContentAnimator.Item>
      <ContentAnimator.Item>
        <ContentAnimator.Content side="right" hasBackground isSingle>
          <p>
            I love to learn and create new things, always loved since I was
            young. I am the productive type (that can't stand much without doing
            something).
          </p>
          <p>
            I love studying many things, from software to math, physics or
            phylosophy.
          </p>
        </ContentAnimator.Content>
      </ContentAnimator.Item>
    </div>
  );
}
