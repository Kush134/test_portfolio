import React from "react";
import styled from "styled-components";

const Mask = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  text-align: right;
  background: linear-gradient(
    135deg,
    rgba(125, 57, 159, 0.5) 0%,
    rgba(16, 103, 109, 0.5) 50%,
    rgba(233, 175, 74, 0.5) 100%
  );
  @media (max-width: 760px) {
    background: linear-gradient(
      135deg,
      rgba(125, 57, 159, 0.4) 0%,
      rgba(16, 103, 109, 0.5) 50%,
      rgba(233, 175, 74, 0.4) 100%
    );
  }
  @media (max-width: 415px) {
    background: linear-gradient(
      135deg,
      rgba(125, 57, 159, 0.5) 0%,
      rgba(16, 103, 109, 0.4) 50%,
      rgba(233, 175, 74, 0.3) 100%
    );
  }
`;

const Title = styled.h1`
  margin: 1rem 1rem 0 0;
  color: white;
  font-size: 3rem;
  line-height: 1.3;
  @media (max-width: 640px) {
    font-size: 2rem;
  }
  @media (max-width: 415px) {
    font-size: 1.5rem;
  }
`;
const Contain = styled.div`
  color: white;
  display: grid;
  grid-template-columns: 1fr 5fr;
  margin: 1rem 1rem 0 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;
  @media (max-width: 690px) {
    grid-template-columns: 1fr 9fr;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr 5fr;
    font-size: 1rem;
  }
  @media (max-width: 445px) {
    margin: 0.5rem 1rem 0 1rem;
  }
`;
const Ps = styled.p`
  margin: 0;
`;

const MyWayEnd = props => (
  <Mask>
    <Title>{props.title}</Title>
    <Contain>
      <div />
      <Ps>{props.text}</Ps>
    </Contain>
  </Mask>
);

export default MyWayEnd;
