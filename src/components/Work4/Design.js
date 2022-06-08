import React from "react";
import styled from "styled-components";
import {
  Container,
  Dates,
  BigTitle,
  SmallTitle,
  SmallsTitle,
  Ctext,
  Caotu1Div
} from "../../layouts/Work-Styles";
import Sitemap from "./Design/Sitemap";
import Sketch from "./Design/Sketch";
import High1 from "./Design/High1";
import High2 from "./Design/High2";
import Designcode from "./Design/Designcode";

const DesignDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1500px) {
    max-width: 1000px;
  }
  @media (max-width: 1300px) {
    max-width: 900px;
  }
`;
const MiddleTitle = styled(SmallsTitle)`
  text-align: center;
`;

const Design = () => (
  <Container>
    <DesignDiv>
      <Dates>Part 2</Dates>
      <BigTitle>Interface Design</BigTitle>
      <SmallTitle>Site map</SmallTitle>
      <Sitemap pic1={require("../../images/sitemap4.png")} />
      <Ctext>
        After discussing with my coworkers, and according to my previous idea,
        this tool should be as simple as the flow shows above. Then I quickly
        finished drawing the Sketches and High-Fidelity Design. After all, the
        hardest and most important part is the algorithm.
      </Ctext>
      <SmallTitle>Sketches & High-Fidelity Design</SmallTitle>
      <Sketch pic1={require("../../images/sketch4.png")} />
    </DesignDiv>
    <Caotu1Div>
      <MiddleTitle>Scanning process</MiddleTitle>
      <High1 pic1={require("../../images/high1.png")} />
      <MiddleTitle>Checking and sending exported Excels</MiddleTitle>
      <High2 pic1={require("../../images/high2.png")} />
    </Caotu1Div>
    <DesignDiv>
      <Dates>Part 2</Dates>
      <BigTitle>Design Code</BigTitle>
      <Designcode pic1={require("../../images/designcode.png")} />
      <Ctext>
        At first, instead of adding a scanning function, I chose to use images
        to complete my algorithm. As for the OCR API, I chose Baidu, since it
        has the best proformance in identifying Chinese.
      </Ctext>
    </DesignDiv>
  </Container>
);
export default Design;
