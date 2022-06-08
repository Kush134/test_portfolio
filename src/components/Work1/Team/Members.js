import React from "react";
import styled from "styled-components";
const Title = styled.h3`
  font-size: 1.6rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  margin: 1rem auto;
  @media (max-width: 1300px) {
    font-size: 1.3rem;
  }
  @media (max-width: 800px) {
    font-size: 1.1rem;
  }
`;

const Name = styled.h4`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.9);
  margin: 0.5rem auto;
  font-weight: 300;
  text-align: center;
  @media (max-width: 1300px) {
    font-size: 0.9rem;
  }
`;

const Did = styled.p`
  font-size: 1.3rem;
  color: rgba(0, 0, 0, 0.6);
  margin: 0.5rem auto;
  text-align: center;
  @media (max-width: 1300px) {
    font-size: 1.1rem;
  }
  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;

const Member = props => (
  <div>
    <Title>{props.title}</Title>
    <Name>{props.name}</Name>
    <Did>{props.text}</Did>
  </div>
);
export default Member;
