import React from "react";
import styled, { keyframes } from "styled-components";
import { Titles } from "../layouts/Page2-Styles";
const DescDiv = styled.div`
  margin: 3rem 2rem 0 2rem;
  @media (max-width: 640px) {
    margin: 1rem 1rem 0 1rem;
  }
`;
const Words = styled.div`
  max-width: 1200px;
  margin: auto;
  height: auto;
  display: grid;
  grid-template-rows: repeat(2, auto);
`;

const Text = styled.p`
  margin: 1rem auto 0 0;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.4rem;
  line-height: 1.5;
  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
  @media (max-width: 415px) {
    font-size: 0.9rem;
    line-height: 1.3;
  }
`;
const Background = keyframes`
 0%{background-position: 50%;}
  100%{background-position: -150%;}
`;
const Links = styled.a`
  margin: 0;
  color: rgba(0, 0, 0, 0.7);
  &:hover {
    background-image: -webkit-linear-gradient(
      150deg,
      rgba(125, 57, 159, 0.9) 0%,
      rgba(16, 103, 109, 0.9) 20%,
      rgba(233, 175, 74, 0.9) 40%,
      rgba(125, 57, 159, 0.9) 60%,
      rgba(16, 103, 109, 0.9) 80%,
      rgba(233, 175, 74, 0.9) 90%,
      rgba(125, 57, 159, 0.9) 100%
    );
    animation: ${Background} 1s ease-in-out;
    background-size: 200% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const AtLast = () => (
  <DescDiv>
    <Words>
      <Titles>One More Thing:</Titles>
      <Text>
        Without the support from my family and my girlfriend, I might not take
        the step to pursue HCI. I’m a lucky guy having them by my side.
        <br />
        <br />
        This is my first website. Internet is of the greatest help. I learned
        the ReactJS online, such as the videos of
        <Links
          href="https://www.youtube.com/channel/UCE7Y95L1btz6qQkfyFfYFQA"
          target="view_window"
        >
          {" "}
          FroDev's channel
        </Links>{" "}
        and courses from{" "}
        <Links href="https://codewithmosh.com/" target="view_window">
          codewithmosh.com
        </Links>
        , and I got the design inspiration from{" "}
        <Links href="https://kaiwei.design/#/work" target="view_window">
          kaiwei.design.
        </Links>{" "}
        Of course, as a newbie developer, I got help from my old partner Chen
        Dou. He gave me constructive advice about putting this site together.<br />
        <br />
        Thanks for stopping by. Feel free to connect me!{" "}
        <Links href="mailto:cfenggao@outlook.com">cfenggao@outlook.com</Links>
      </Text>
    </Words>
  </DescDiv>
);

export default AtLast;
