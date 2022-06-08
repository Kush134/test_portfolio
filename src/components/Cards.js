import React from "react";
import { CardDiv } from "../layouts/Index-Styles";
import styled from "styled-components";

const CardContain = styled.div`
  height: 18.6rem;
  display: grid;
  grid-template-rows: repeat(2, auto);
  justify-items: stretch;
  @media (max-width: 415px) {
    height: 16rem;
  }
`;
const Title = styled.div`
  display: flex;
  padding: 0 0 1.2rem 0;
  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: end;
  }
  @media (max-width: 640px) {
    padding: 0 0 0.5rem 0;
  }
`;
const Dates = styled.h3`
  font-style: italic;
  font-size: 1.8rem;
  margin: 0;
  background: linear-gradient(
    104deg,
    rgba(125, 57, 159, 0.8) 0%,
    rgba(16, 103, 109, 0.8) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 1000px) {
    justify-self: end;
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(
      104deg,
      rgba(16, 103, 109, 0.8) 0%,
      rgba(233, 175, 74, 0.8) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
  @media (max-width: 415px) {
    font-size: 1rem;
  }
`;
const Name = styled.h3`
  display: none;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;

  @media (max-width: 1000px) {
    display: block;
    align-self: end;
    background: linear-gradient(
      104deg,
      rgba(125, 57, 159, 0.8) 0%,
      rgba(16, 103, 109, 0.8) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (max-width: 640px) {
    font-size: 1.7rem;
  }
  @media (max-width: 415px) {
    font-size: 1.3rem;
    font-weight: 650;
  }
`;
const CardImg = styled.img`
  position: absolute;
  top: 0;
  align-self: center;
  height: 110%;
  z-index: -1;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
    transform: translateY(-20px);
  }
`;

const Cardp = styled.p`
  color: rgba(225, 225, 225, 0.8);
  font-weight: 600;
  font-size: 1.5rem;
  align-self: end;
  margin: 0 0 1rem 1rem;
  @media (max-width: 415px) {
    font-size: 1rem;
    margin: 0 0 0.5rem 0.5rem;
  }
`;

const Cards = props => (
  <CardContain>
    <Title>
      <Name>{props.name}</Name>
      <Dates>{props.newDate}</Dates>
    </Title>
    <CardDiv>
      <CardImg src={props.image} />
      <Cardp>{props.text}</Cardp>
    </CardDiv>
  </CardContain>
);

export default Cards;
