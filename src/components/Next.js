import React from "react";
import styled, { keyframes } from "styled-components";

import Link from "gatsby-link";

const Background = keyframes`
 0%{background-position: 50%;}
  100%{background-position: -150%;}
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;
const Button = styled.button`
  margin: 3rem auto 2rem auto;
  padding: 0;
  border: none;
  background-color: white;
  @media (max-width: 800px) {
    margin: 2rem auto 1.5rem auto;
  }
  @media (max-width: 415px) {
    margin: 1rem auto 1em auto;
  }
`;
const Text = styled.h1`
  font-size: 2rem;
  margin: 0;
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

  animation: ${Background} 8s infinite ease-in-out;
  background-size: 200% 100%;
  -webkit-background-clip: text;

  -webkit-text-fill-color: transparent;
  &:hover {
    animation: ${Background} 1s infinite ease-in-out;
  }

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
  @media (max-width: 415px) {
    font-size: 1.3rem;
  }
`;
const Next = () => (
  <Wrap>
    <Button>
      <Link to="/home">
        <Text>Willing to know more about me? </Text>
      </Link>
    </Button>
  </Wrap>
);
export default Next;
