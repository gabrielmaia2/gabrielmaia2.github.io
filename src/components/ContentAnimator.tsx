import React, { PropsWithChildren } from "react";
import styled, { css, keyframes } from "styled-components";
import { useMediaQuery } from "usehooks-ts";
import ViewTransition from "./ViewTransition";

type Side = "left" | "right";
const bgColor = `rgb(19, 22, 27)`;
const smallQuery = `(max-width: 1000px)`;

const fadeIn = keyframes`
  0% {
    opacity: 0%;
    left: -50vw;
  }
  40% {
    opacity: 100%;
    left: 0vw;
  }
`;

const fadeIn2 = keyframes`
  0% {
    opacity: 0%;
    left: -7vw;
  }
  40% {
    opacity: 100%;
    left: 0vw;
  }
`;

const popOut = keyframes`
  0% {
    box-shadow: 0 0 0 transparent;
  }
  40% {
    box-shadow: 0 0 0 transparent;
  }
  100% {
    box-shadow: 0.6rem 0.6rem 1em black;
  }
`;

const popOut2 = keyframes`
  0% {
    box-shadow: 0 0 0 transparent;
  }
  100% {
    box-shadow: 0.6rem 0.6rem 1em black;
  }
`;

const fadeInBackground = keyframes`
  0% {
    background-color: rgba(68, 114, 206, 0);
  }
  40% {
    background-color: rgba(68, 114, 206, 0);
  }
  100% {
    background-color: ${bgColor};
  }
`;

const fadeInBackground2 = keyframes`
  0% {
    background-color: rgba(68, 114, 206, 0);
  }
  100% {
    background-color: ${bgColor};
  }
`;

const itemPadding = `2rem`;

const ContentStyled = styled.div<{
  side: Side;
  hasBackground?: boolean;
  isSingle?: boolean;
}>`
  position: relative;
  max-width: 40%;
  margin: auto;

  @media not ${smallQuery} {
    font-size: 1.4em;
  }

  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  ${({ hasBackground }) =>
    hasBackground
      ? css`
          box-sizing: border-box;
          padding: ${itemPadding};
          background-color: ${bgColor};
        `
      : ``}

  ${({ side, hasBackground }) => css`
    animation-name: ${popOut},
      ${side === "left" ? fadeIn : fadeIn2}
        ${hasBackground ? css`, ${fadeInBackground}` : ``};
  `}
  
  ${({ isSingle, side }) =>
    isSingle
      ? css`
          width: 60%;
          max-width: 100%;
          padding: ${itemPadding};

          ${side === "left"
            ? css`
                margin-left: 5%;
                margin-right: 35%;
              `
            : css`
                margin-left: 35%;
                margin-right: 5%;
              `}
        `
      : ``}
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const ItemStyled = styled.div<{
  reverse?: boolean;
  visible?: boolean;
  isSmallScreen?: boolean;
}>`
  box-sizing: border-box;
  margin: 5vw;

  ${({ isSmallScreen, reverse }) =>
    isSmallScreen
      ? css`
          margin: 2rem;

          ${ContentWrapper} {
            flex-direction: column;
            align-items: stretch;
            padding: ${itemPadding};

            ${ContentStyled} {
              width: auto;
              height: auto;
              max-width: none;
              max-height: none;
              margin: 0;
              padding: 0;

              &:not(:last-child) {
                padding-bottom: ${itemPadding};
              }
            }
          }
        `
      : css`
          ${ContentWrapper} {
            justify-content: space-between;
            align-items: center;

            flex-direction: ${reverse ? `row-reverse` : `row`};
          }
        `}

  ${ContentWrapper} {
    ${({ visible, isSmallScreen }) =>
      visible && isSmallScreen
        ? css`
            animation-name: ${popOut2}, ${fadeInBackground2};
            animation-duration: 1.4s;
            animation-fill-mode: forwards;
          `
        : css`
            animation-name: none;
          `}
  }

  ${ContentStyled} {
    ${({ visible, isSmallScreen }) => css`
      ${(!visible || isSmallScreen) &&
      css`
        animation-name: none;
        background: transparent;
      `}
      ${visible
        ? isSmallScreen &&
          css`
            left: auto;
          `
        : css`
            left: -100vw;
          `}
    `}
  }
`;

const Item = ({
  reverse,
  children,
}: PropsWithChildren<{ reverse?: boolean }>) => {
  const isSmallScreen = useMediaQuery(smallQuery);

  return (
    <ViewTransition
      styledComponent={ItemStyled}
      reverse={reverse}
      isSmallScreen={isSmallScreen}
    >
      <ContentWrapper>{children}</ContentWrapper>
    </ViewTransition>
  );
};

const ContentAnimatorStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const ContentAnimator = Object.assign(ContentAnimatorStyled, {
  Item,
  Content: ContentStyled,
});

export default ContentAnimator;
