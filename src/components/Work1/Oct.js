import React from "react";
import styled from "styled-components";
import {
  Container,
  BigTitle,
  Ctext,
  SmallTitle,
  High,
  Dates
} from "../../layouts/Work-Styles";

import Pic1 from "./Oct/Pic";
import JPic from "./Oct/JPic";
import Design from "./Oct/Design";
import Test from "./Oct/Test";
import Clickable from "./HideShow";

const OctDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1500px) {
    max-width: 1000px;
  }
  @media (max-width: 1300px) {
    max-width: 900px;
  }
`;
const Caotu1Div = styled.div`
  max-width: 1500px;
  margin: 0 auto 5rem auto;
  @media (max-width: 800px) {
    margin: 0 auto 3rem auto;
  }
  @media (max-width: 640px) {
    margin: 0 auto 2rem auto;
  }
`;
const Contain = styled.div`
  width: 100%;
  margin: 0 auto 5rem auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 800px) {
    margin: 0 auto 3rem auto;
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto 2rem auto;
  }
`;

const Oct = () => (
  <Container>
    <OctDiv>
      <Dates>October</Dates>
      <BigTitle>A little progress</BigTitle>
      <SmallTitle>Design work</SmallTitle>
      <Ctext>
        I drew the sketch pages of four main functions, and Guangxin made the
        high-fidelity pictures.
      </Ctext>
      <Contain>
        <Design
          image={require("../../images/browse.png")}
          title="Browse"
          text="Let users explore the content and find their interests"
        />
        <Design
          image={require("../../images/question.png")}
          title="Q"
          text="Users can post their questions to public and all their friends can notice"
        />
        <Design
          image={require("../../images/answer.png")}
          title="A"
          text="Users can answer any question by videoing"
        />
        <Design
          image={require("../../images/moment.png")}
          title="Moment"
          text="User can know their friends' recent moments, it might promote them to explore more"
        />
      </Contain>
    </OctDiv>
    <Caotu1Div>
      <Pic1
        pic1={require("../../images/ctu1.png")}
        pic2={require("../../images/ctu2.png")}
        pic3={require("../../images/ctu4.png")}
        pic4={require("../../images/ctu3.png")}
      />
    </Caotu1Div>
    <OctDiv>
      <Ctext>
        But during the design progress, we found it was{" "}
        <High>hard to create topics and subtopics easily</High>. Even though we
        could make several examples and user storyboards when we introduced our
        idea to others, still we can’t make an all-round topic tree. We found
        that we need a better way to help the future users understand how to use
        this platform.
      </Ctext>
      <Clickable lable="more details">
        <SmallTitle>Programing</SmallTitle>
        <JPic
          pic1={require("../../images/jishu2.png")}
          pic2={require("../../images/jishu1.png")}
        />
        <SmallTitle>Video test</SmallTitle>
        <Test pic1={require("../../images/videotest.png")} />
        <SmallTitle>Promotion plan</SmallTitle>
        <Ctext>
          In order to attract future users, we knew we should create a sense of
          cool and <High>high-quality content pool.</High> And considering there
          was no Instafamous in China, what we had in university is the group of
          people:<br />
          <High>The most popular professors and leaders of student clubs.</High>
          <br /> So, we decided to interview some of those teachers, preparing
          some related questions. In this way, future students would be
          attracted to our platform by watching these videos.{" "}
        </Ctext>
        <SmallTitle>Survey from Professors</SmallTitle>
        <Ctext>
          Among 15 professors from all kinds of fields, including psychology,
          finance, computer science, sociology, who we had face-to-face
          conversations, we got these:<br />
          <br />
          <li>12 of them liked our idea</li>
          <br />
          <li>5 of them cannot be interviewed because of time-conflict</li>
          <br />
          <li>
            2 of them didn't want to be interviewed because they thought it
            might be bad for their reputation
          </li>
          <br />
          <li>
            3 of them suggested that we'd better{" "}
            <High>start from some college students' related topics</High>
          </li>{" "}
        </Ctext>
      </Clickable>
    </OctDiv>
  </Container>
);

export default Oct;
