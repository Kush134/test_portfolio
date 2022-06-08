import React from "react";
import styled from "styled-components";
import { Container, BigTitle, Grey, Ctext } from "../../layouts/Work-Styles";
import IntroP from "./Intro/IntroP";
import Dissteps from "./Intro/Dissteps";

const IntroDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1500px) {
    max-width: 1000px;
  }
  @media (max-width: 1300px) {
    max-width: 900px;
  }
`;

const Introduction = () => (
  <Container>
    <IntroDiv>
      <BigTitle>Introduction</BigTitle>
      <Ctext>
        As a cement distributor, we connect the cement factories and
        construction sites. Here are the projects we got from 2017 to 2018.
      </Ctext>
      <IntroP pic1={require("../../images/jieshao.png")} />
    </IntroDiv>
    <IntroDiv>
      <Ctext>
        Apart from the aspects of bidding and financial issues, the whole steps
        of our company are like this:
      </Ctext>
      <Dissteps pic1={require("../../images/dissteps.png")} />
      <Ctext>
        Since all the steps above are necessary for checking-accounts process, (
        in case of any one of transport companies and construction sites
        cheating, we might lose a lot ). During Oct.2017 to Mar.2018, I helped
        increase the efficiency in <Grey>step 6,</Grey> which was highly related
        to our profits.
      </Ctext>
    </IntroDiv>
  </Container>
);
export default Introduction;
