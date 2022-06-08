import React from "react";
import { IntroGroup } from "../layouts/Page2-Styles";
import styled, { keyframes } from "styled-components";
import { Resume, Inst, Mail } from "./icons";

const FirstShow = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;
const FirstShowoff = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;
const Background = keyframes`
 0%{background-position: 50%;}
  100%{background-position: -150%;}
`;

const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  height: auto;
  justify-content: stretch;
  position: relative;
`;
const Word = styled.div``;

const Name = styled.h1`
  margin: 0;
  color: rgba(0, 0, 0, 0.7);
  font-size: 3rem;

  line-height: 1.2;
  animation: ${FirstShow} 3s 0.5s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  @media (max-width: 640px) {
    font-size: 2rem;
  }
  @media (max-width: 415px) {
    font-size: 1.8rem;
  }
`;
const Info = styled.p`
  margin: 1rem 0 0.5rem 0;
  color: rgba(0, 0, 0, 0.7);
  font-size: 1.3rem;
  line-height: 1.8;

  animation: ${FirstShow} 3s 1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  @media (max-width: 640px) {
    font-size: 1.4rem;
  }
  @media (max-width: 415px) {
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;
const Photo1 = styled.div`
  max-width: 450px;
  background: url(${props => props.image});
  background-size: cover;
  overflow: hidden;
  opacity: 0;
  animation: ${FirstShow} 3s 0.5s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  @media (max-width: 1040px) {
    display: none;
  }
`;
const Photo2 = styled.img`
  display: none;
  @media (max-width: 1040px) {
    display: block;
    margin: 2rem auto 0 auto;
    height: 15rem;
  }
  animation: ${FirstShowoff} 3s 0.5s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  @media (max-width: 640px) {
    height: 12rem;
  }
  @media (max-width: 415px) {
    margin: 1rem auto 0 auto;
    height: 9rem;
  }
`;
const Contacts = styled.div`
  height: 35px;
  display: flex;
  flex-direction: row-reverse;
  opacity: 0;
  align-items: center;
  animation: ${FirstShow} 3s 1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
`;
const Me = styled.h4`
  font-size: 1.5rem;
  margin: 0 1rem 0 0;
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
`;

const Intruduction = props => {
  return (
    <IntroGroup>
      <Content>
        <Word>
          <Name>
            Hi there! <br />
            {props.name}
          </Name>
          <Info> {props.text}</Info>
        </Word>
        <Contacts>
          <a className="Mail" href="mailto:cgao21@id.iit.edu">
            <Mail />
          </a>
          <a
            className="Instram"
            href="https://www.instagram.com/tiny_pinkpink/"
            target="_blank"
          >
            <Inst />
          </a>
          <a
            className="resume"
            href="https://drive.google.com/file/d/1ZyMtSKW5-GKqAH04n5K0YP0ft2W019mG/view?usp=sharing"
            target="_blank"
          >
            <Resume />
          </a>

          <Me>Let's Connect!</Me>
        </Contacts>
      </Content>
      <Photo1 image={props.image} />
      <Photo2 src={props.head} />
    </IntroGroup>
  );
};

export default Intruduction;
