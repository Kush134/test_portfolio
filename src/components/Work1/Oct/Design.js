import React from "react";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  width: 90%;
  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.05), 0 -1rem 2rem rgba(0, 0, 0, 0.02);
  margin: 0 auto;
  overflow: hidden;
`;
const Mask = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 5%;
  background: url(${props => props.image});
  background-size: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
`;
const Title = styled.h1`
  font-size: 1.6rem;
  margin: 1rem 0 2rem 0;
  color: rgba(239, 128, 65, 1);
  text-align: center;
  @media (max-width: 1300px) {
    font-size: 1.3rem;
    margin: 1rem 0 1rem 0;
  }
  @media (max-width: 800px) {
    font-size: 1rem;
  }
  @media (max-width: 7000px) {
    margin: 1rem 0 0.5rem 0;
  }
`;
const Content = styled.p`
  font-size: 100%;
  margin: 0;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.5;
  text-align: center;
  @media (max-width: 1300px) {
    font-size: 1rem;
  }
  @media (max-width: 800px) {
    font-size: 0.9rem;
  }
`;

const Design = props => (
  <Card>
    <Mask image={props.image}>
      <Title>{props.title}</Title>
      <Content>{props.text}</Content>
    </Mask>
  </Card>
);
export default Design;
