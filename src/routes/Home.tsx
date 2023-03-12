import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import useTitleCustom from "../hooks/useTitleCustom";
import About from "./About";

const ProjectsContainer = styled.div.attrs({
  className: "d-flex flex-column align-items-stretch",
})``;

const ProjectItem = styled.div`
  box-sizing: border-box;
  padding: 80px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  &:nth-child(2n + 1) {
    flex-direction: row-reverse;
  }
`;
const ProjectTitle = styled.h3``;
const ProjectPreview = styled.img`
  position: relative;
  width: 40%;
  display: flex;
  justify-content: center;
`;
const ProjectDescription = styled.div``;

export default function Home() {
  useTitleCustom("Home");

  return (
    <div className="">
      <Navbar />
      <h1 className="m-4 text-center">My portfolio</h1>
      <About />
    </div>
  );
}
