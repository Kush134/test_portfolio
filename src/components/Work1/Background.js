import React from "react";
import styled from "styled-components";
import Story from "./BackStory/Storys";
import {
  Container,
  BigTitle,
  Ctext,
  Dates,
  Big
} from "../../layouts/Work-Styles";
import StoryPic from "./BackStory/Storynew";

const BackgroundDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1500px) {
    max-width: 1000px;
  }
  @media (max-width: 1300px) {
    max-width: 900px;
  }
`;

const Name = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: rgba(0, 0, 0, 1);
  margin: 0;
  @media (max-width: 1300px) {
    font-size: 1.5rem;
  }
  @media (max-width: 800px) {
    font-size: 1.3rem;
  }
`;
const Desc = styled.p`
  font-size: 1.3rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
  @media (max-width: 1300px) {
    font-size: 1rem;
  }
  @media (max-width: 800px) {
    font-size: 0.9rem;
  }
`;
const Ctext1 = styled(Ctext)`
  margin: 3rem 0 3rem 0;
`;

const Background = () => (
  <Container>
    <BackgroundDiv>
      <BigTitle>Background</BigTitle>

      <Ctext>
        <Big>In 2015</Big>, WeChat, a messaging app as well as life moments
        sharing app, dominated and still is dominating the application market in
        China. Users share their breakfast, the vacation places they hit, their
        own selfie and stuff on it. I found it boring and yearning for something
        fun and educational. I asked myself, why couldn’t I create a platform
        sharing something meaningful, like skills? And more importantly, why not
        share them in the form of short videos? <Big>I got a crazy idea</Big>.
      </Ctext>
      <Dates>Chapter 0</Dates>
      <BigTitle>The Idea</BigTitle>
      <StoryPic pic1={require("../../images/story1.png")} />
      <Story
        back={require("../../images/QQQ.png")}
        question="Why did students lose the passion of posting something which could show their talents and skills?"
      />
      <StoryPic pic1={require("../../images/story2.png")} />
      <Story
        back={require("../../images/QQQ.png")}
        question="If we have a Q&A platform among college students, will it work?"
      />
      <StoryPic pic1={require("../../images/story3.png")} />
      <Story
        back={require("../../images/QQQ.png")}
        question="Why didn't Chinese young people make some cool and meaningful short videos?"
      />
      <Ctext1>
        With these three questions: people from our social network could promote
        sharing; Q&A could encourage someone with skills and knowledge to share
        the know-how; video function could benefit both learners and sharers.
        Well, I think we can make a :
      </Ctext1>

      <Name>A skill-sharing platform based on social network</Name>
      <Desc>
        we can simply regard it as a video version of zhihu specially for
        college students{" "}
      </Desc>
    </BackgroundDiv>
  </Container>
);
export default Background;
