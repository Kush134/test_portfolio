import React from "react";
import styled from "styled-components";
import {
  Container,
  BigTitle,
  SmallTitle,
  Ctext
} from "../../layouts/Work-Styles";
import Axture from "./Process/Axture";
import Choose from "./Process/Choose";
import Step1 from "./Process/Step1";
import Others from "./Process/Others";
import Final from "./Process/Final";

const ProcessDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1500px) {
    max-width: 1000px;
  }
  @media (max-width: 1300px) {
    max-width: 900px;
  }
`;
const FunDiv = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  @media (max-width: 1500px) {
    max-width: 1200px;
  }
  @media (max-width: 1300px) {
    max-width: 1100px;
  }
`;

const Process = () => (
  <Container>
    <ProcessDiv>
      <BigTitle>Design Process</BigTitle>
      <Axture pic1={require("../../images/Axtrue.png")} />
      <Ctext>
        {" "}
        When I was trying to use Axure to draw all the pages, I found in the
        setting part, some logic only needed to be told to the developers, then
        they could fix the issues. And our design team could only have one
        person to be the UI. He said due to the limited time, we'd better
        directly use Sketch to make high-fidelity pictures. We need to be hurry.<br />
        Because the designer and PM had finished some other pages before I came,
        they knew the style. I just watched his drawing process and then
        practiced to use sketch after work. Then we worked with sketch together.
      </Ctext>
      <SmallTitle>Me Page</SmallTitle>
    </ProcessDiv>
    <FunDiv>
      <Choose pic1={require("../../images/choose.png")} />
    </FunDiv>
    <ProcessDiv>
      <Step1 pic1={require("../../images/step1.png")} />
      <SmallTitle>Home Page(other's)</SmallTitle>
      <Others pic1={require("../../images/others.png")} />
      <SmallTitle>Home Page(me) and Edit </SmallTitle>
    </ProcessDiv>
    <FunDiv>
      <Final pic1={require("../../images/final.png")} />
    </FunDiv>
    <ProcessDiv>
      <SmallTitle>Some issues during the process</SmallTitle>
      <Ctext>
        <li>
          Since it was a small start-up company, staff came and went. There were
          not any documentation left when designers quit their jobs. When we
          were doing the design job, without knowing the original information
          about the webpage, we had to code and redesign every detail, which was
          time consuming.
        </li>
        <br />
        <li>
          Some changes made by the UI and the PM didn’t go through the boss.
          Some changes made the website confusing and complicated. Then the
          whole staff had to redo it again.
        </li>
        <br />
        I talked to the boss about the issues and we all thought our company
        should have a set of rules and standard process. I learnt about the
        rules and process of Tencent and based on our company’s situation,
        integrating the rules and came up with a new one. Now discussions held
        before every new design and testing always came before launching new
        versions. The company is much more efficient. <br />
      </Ctext>
    </ProcessDiv>
  </Container>
);
export default Process;
