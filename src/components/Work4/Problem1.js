import React from "react";
import styled from "styled-components";
import {
  Container,
  Dates,
  BigTitle,
  SmallTitle,
  SmallsTitle,
  Ctext,
  Grey
} from "../../layouts/Work-Styles";
import Checksteps from "./Problem1/Checkstep";
import Caotu from "./Problem1/Caotu";
import Example4 from "./Problem1/Example4";
import Iframe from "react-iframe";

const ProblemDiv = styled.div`
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

const VideoWap = styled.div`
  position: relative;
  width: 100%;
  &:before {
    content: "";
    display: block;
    padding-top: 60%;
  }
  overflow: hidden;
  margin: 0 auto 3rem auto;
  @media (max-width: 800px) {
    margin: 0 auto 1rem auto;
  }
`;

const Problem1 = () => (
  <Container>
    <ProblemDiv>
      <Dates>Part 1</Dates>
      <BigTitle>Acknowledge the problem</BigTitle>
      <Ctext>
        Expanding the step 6 above, the checking process has three parts:
      </Ctext>
      <Checksteps pic1={require("../../images/checkstep.png")} />
      <SmallTitle>Problem</SmallTitle>
      <Ctext>
        At first, we had just a few sites to serve, manually checking and
        inputting all the data were relatively easy. But now, we have more than
        20 construction sites, 4 cooperating transport companies, which make the
        checking process a huge workload if we still did it manually.
      </Ctext>
      <Caotu pic1={require("../../images/lizi.png")} />
      <Ctext>
        Besides, <Grey>different sites have different standard,</Grey> which
        means the receipt tickets have various forms, thereby increasing the
        difficulty of checking.
      </Ctext>
      <Caotu pic1={require("../../images/jieshi.png")} />
      <Ctext>
        Previously I thought I could use some data methods I learned in college
        to deal with the numbers. Well now, things were totally different, and I
        needed to do more.{" "}
      </Ctext>
      <SmallTitle>Solution</SmallTitle>
      <Ctext>
        My father let me manage one project site. During the work, I planned to
        make an APP to increase efficiency,{" "}
        <Grey>
          by using Optical Character Recognition ( OCR ) and python to
          automatically export to Excels.
        </Grey>{" "}
      </Ctext>
      <MiddleTitle>Ideal product</MiddleTitle>
      <Example4 pic1={require("../../images/example4.gif")} />
      <Ctext>
        After I finished the algorithm on Python, I used it on computer and
        successfuly increased the efficiency of my part of work.{" "}
      </Ctext>
      <MiddleTitle>Demo</MiddleTitle>

      <VideoWap>
        <Iframe
          url="https://www.youtube.com/embed/5z78-wc8hiE"
          width="100%"
          position="absolute"
          id="videoRun"
          height="100%"
          className="any"
          styles={{ top: "0", right: "0" }}
          allowFullScreen
        />
      </VideoWap>
      <Ctext>
        Now, I am still trying to improve the performance of this function to
        scan all kinds of tickets and finally make it as an real mobile APP.{" "}
      </Ctext>
    </ProblemDiv>
  </Container>
);
export default Problem1;
