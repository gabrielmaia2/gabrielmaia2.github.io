import React from "react";
import styled, { css } from "styled-components";
import ContentAnimator from "../components/ContentAnimator";
import Navbar from "../components/Navbar";
import ViewTransition from "../components/ViewTransition";
import meImg from "../data/images/me.jpg";
import useTitleCustom from "../hooks/useTitleCustom";

const transitionTime = `2s`;

const ContentLeft = styled.div<{ visible: boolean }>`
  width: 600px;
  transition: all ${transitionTime};
  ${({ visible }) =>
    visible
      ? css`
          box-shadow: 0 0 0.3em #000000c3;
        `
      : css`
          box-shadow: 0 0 0.1em #000000c3;
        `}
`;

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
            I am looking for a position as a developer in the software industry.
            I don't have professional experience (yet), but I am highly
            flexible, I can learn pretty fast and also know how to develop a lot
            of things, be it in front-end, back-end, database or even games.
          </p>
        </ContentAnimator.Content>
      </ContentAnimator.Item>
      <ContentAnimator.Item>
        <ContentAnimator.Content side="right" hasBackground isSingle>
          <p>
            I love to learn and to create new things. I am the productive type
            (that can't stand much without doing something).
          </p>
          <p>
            I love studying many things, from software to math, physics or
            phylosophy.
          </p>
        </ContentAnimator.Content>
      </ContentAnimator.Item>
      <ContentAnimator.Item reverse>
        <ContentAnimator.Content side="left" hasBackground isSingle>
          <p>
            Look at my projects in the navigation bar, I put some cool projects
            there just for you &lt;3.
          </p>
        </ContentAnimator.Content>
      </ContentAnimator.Item>
    </div>
  );
}
