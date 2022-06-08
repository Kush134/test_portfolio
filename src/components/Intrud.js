import React from "react";
import { IntroGroup1 } from "../layouts/Index-Styles";
import styled, { keyframes } from "styled-components";
import { Resume, Inst, Mail } from "./icons";

import Emoji from "./Emoji";
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

const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  height: auto;
  justify-items: center;
  position: relative;
`;
const Word = styled.div`
  text-align: center;
`;
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
    font-size: 1.5rem;
  }
`;
const Info = styled.p`
  max-width: 1000px;
  margin: 1.5rem auto 1.5rem auto;
  color: rgba(0, 0, 0, 0.6);
  font-size: 2rem;
  line-height: 1.7;
  font-weight: 500;
  animation: ${FirstShow} 3s 1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
  @media (max-width: 415px) {
    font-size: 1rem;
  }
`;

const Contacts = styled.div`
  align-self: center;
  height: 35px;
  display: flex;
  flex-direction: row-reverse;
  opacity: 0;
  animation: ${FirstShow} 3s 1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
`;

const Intruduction = props => {
  return (
    <IntroGroup1>
      <Content>
        <Word>
          <Name>
            I am <br />
            {props.name}
          </Name>
          <Info>
            {" "}
            A problem solver with a strong passion for satisfying daily needs in
            life by using technical ways <Emoji symbol="🔧" />
            <Emoji symbol="🖖" /> A rational thinker who focuses on putting the
            logical thinking into the process of product design.{" "}
          </Info>
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
        </Contacts>
      </Content>
    </IntroGroup1>
  );
};

export default Intruduction;
