import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import ContentAnimator from "../components/ContentAnimator";
import meImg from "../data/images/me.jpg";
import axios from "axios";

const Image = styled.img`
  object-fit: contain;
  max-height: 40vh;
`;

const ContentStyled = styled(ContentAnimator.Content)`
  width: 35%;
`;

const PStyled = styled.p.attrs({ className: "mb-1" })``;

function CatPic() {}

export default function About() {
  // useTitleCustom("About");
  const [catSrc, setCatSrc] = useState("");

  useEffect(() => {
    (async () => {
      let { data } = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );

      setCatSrc(data[0].url);
    })();
  }, []);

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
            A skillful software engineer with knowledge in software development,
            computer science, machine learning and circuits.
          </p>
        </ContentAnimator.Content>
      </ContentAnimator.Item>
      <ContentAnimator.Item>
        <ContentAnimator.Content side="right" hasBackground isSingle>
          <p>
            Some things I like: CS, Software, Math, Physics, ML, Phylosophy,
            Robotics and Piano.
          </p>
        </ContentAnimator.Content>
      </ContentAnimator.Item>
      <ContentAnimator.Item>
        <ContentStyled side="left" hasBackground>
          <p>
            I also like cats. <br />
            Check out this random cat pic:
          </p>
        </ContentStyled>
        <ContentAnimator.Content side="right">
          <Image src={catSrc} alt="Cute cat" />
        </ContentAnimator.Content>
      </ContentAnimator.Item>
    </div>
  );
}
