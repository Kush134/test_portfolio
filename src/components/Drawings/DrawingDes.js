import React from "react";
import styled from "styled-components";
import { Titles } from "../../layouts/Page2-Styles";
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
  margin: 1rem auto 0 1rem 0;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.4rem;
  line-height: 1.7;
  @media (max-width: 640px) {
    font-size: 1.2rem;
    line-height: 1.6;
  }
  @media (max-width: 415px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const DrawingDesc = () => (
  <DescDiv>
    <Words>
      <Titles>My Gallery</Titles>
      <Text>
        Here are some actworks I drew 3 years ago. Although having always been
        passionate about painting, I stop drawing pictures in my high school.
        However, when I picked up the paintbrushes again, I was amazed to find
        that I could still draw pictures like I did when I was a kid.{" "}
      </Text>
    </Words>
  </DescDiv>
);

export default DrawingDesc;
