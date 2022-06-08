import React from "react";
import styled from "styled-components";
import {
  Container,
  BigTitle,
  Ctext,
  SmallTitle,
  High,
  Review,
  Names,
  Jieshis,
  Dates,
  SmallsTitle,
  AdDiv,
  Ad,
  Big
} from "../../layouts/Work-Styles";

import Pic1 from "./Nov/Pic";
import Tree from "./Nov/Tree";

import Bad from "./Nov/Bad";
import Conclusion from "./Conclusion";
import Clickable from "./HideShow";

const NovDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1500px) {
    max-width: 1000px;
  }
  @media (max-width: 1300px) {
    max-width: 900px;
  }
`;

const Small = styled.span`
  margin: 1rem 0 1rem 0;
  font-size: 1.3rem;
  color: rgba(0, 0, 0, 0.5);
  @media (max-width: 1300px) {
    font-size: 1.1rem;
  }
  @media (max-width: 800px) {
    font-size: 1rem;
    margin: 0.5rem 0 0.5rem 0;
  }
`;

const Qcard = styled.div`
  max-width: 1200px;
  padding: 5%;
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1), 0 -1rem 2rem rgba(0, 0, 0, 0.05);
  margin: 0 auto 5rem auto;
  @media (max-width: 1300px) {
    max-width: 900px;
  }
  @media (max-width: 800px) {
    margin: 0 auto 2rem auto;
  }
`;

const Question = styled.h3`
  margin: 0 3rem;
  text-align: center;
  font-size: 1.7rem;
  font-weight: 700;
  color: rgba(239, 128, 65, 1);
  @media (max-width: 1300px) {
    font-size: 1.5rem;
  }
  @media (max-width: 800px) {
    font-size: 1.2rem;
  }
`;
const Thought = styled.p`
  margin: 2rem auto;
  font-size: 1.3rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  @media (max-width: 1300px) {
    font-size: 1rem;
    margin: 1rem auto;
  }
`;
const Answer = styled.p`
  margin: 0 auto 3rem auto;
  font-size: 1.5rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  @media (max-width: 1300px) {
    font-size: 1.2rem;
  }
  @media (max-width: 800px) {
    font-size: 1rem;
    margin: 0 auto 1rem auto;
  }
`;

const Nov = () => (
  <Container>
    <NovDiv>
      <Dates>November</Dates>
      <BigTitle>Stand at the Crossroads</BigTitle>
      <Ctext>
        Since we were very close to Zhongguancun, the Silicon valley of Beijing,
        Guangxin and I went there, feeling the atmosphere of startup, auditing
        roadshows, downloading and experiencing tens of newly released apps
        everyday. We found we needed to think more. First, we made a{" "}
        <High>Competitive Analysis</High> .{" "}
      </Ctext>
      <AdDiv>
        <Ad>
          "There's a concept in Zhongguancun: <br />If you have an idea, there
          would be a million yuan to invest in you."
        </Ad>
      </AdDiv>
      <SmallTitle>Competitive Analysis</SmallTitle>
      <Clickable lable="show more">
        <Pic1 pic1={require("../../images/jinpin.png")} />
        <SmallsTitle>In the skill-sharing field, we found that:</SmallsTitle>
        <Ctext>
          1. Most skills or views sharing platforms{" "}
          <High>focus on some certain fields</High>.<br />
          <Small>
            Zaihang: a one-on-one consulting platform specific in the Internet
            industry.<br />
            Xuejiebang: a platform which helps future college students
            acknowledge how to choose their dream school and what college-life
            is like.
          </Small>
          <br />
          2. Basically everyone has a method to <High>
            motivate users
          </High>.<br />
          <Small>
            Baidu Zhidao and Xuejiebang pay for those people who answer
            questions.<br />
            Skillbank encourages users to exchange their professional skills.
          </Small>
          <br />
          3. <High>None of those has the video function.</High>
          <br />
          <Small>
            Except Users in Zaihang will meet and talk in real life.
          </Small>
          <br />
          4. The target users of every platform are{" "}
          <High>
            highly related to the main topics they made at the beginning stage
          </High>.
        </Ctext>
        <Pic1 pic1={require("../../images/shipin.png")} />
        <SmallsTitle>
          In the short video field, we found that:{" "}
        </SmallsTitle>{" "}
        <Ctext>
          <High>None of them uses videos to spread knowledge.</High>
        </Ctext>
      </Clickable>
      <Ctext>
        At that time, we thought "video + knowledge" was a Blue Sea, which
        encouraged us to accelerate the speed of building our product. <br />
        Thus, combined with the suggestions from previous surveys of professors,
        we decided to focus on the "pain points" of students in our school,
        which were some difficult subjects, like Advanced Mathematics.
        Meanwhile, we knew that Economics and some relevant majors were hot in
        my university. We tried to talk to some top students in those schools,
        hoping they could make videos in acing those courses.{" "}
        <Big>Next, we made a Topic Tree.</Big>{" "}
      </Ctext>
      <Tree pic1={require("../../images/Tree.png")} />
      <SmallTitle>New plan</SmallTitle>
      <Ctext>
        Well, before our product released,how could we build our user base? We
        decided to create a <High>WeChat Official Account</High>, by posting the
        interviews of professors and some studying-tricks videos made by top
        students, and we thought we could attract students in my university to
        keep following us. We also changed our name: <br />
        <br />
        <Names>不惑(Bu Huo)</Names>
        <br />
        <Jieshis>means not confused anymore </Jieshis>
      </Ctext>
      <SmallTitle>Some issues in videoing progress</SmallTitle>
      <Bad
        image={require("../../images/shi.png")}
        title="From a professor"
        text1="A famous Chinese literature professor answered our 5 prepared questions, he couldn't make it clear in 5 min, since he sometimes went off the topic."
        text2="When we let other students watch this 30min-long video. At first they had interests, but they felt tired gradually."
        photo={require("../../images/fankui.png")}
      />
      <Conclusion
        back={require("../../images/gantan.png")}
        question="We underestimated the difficulty of making a knowledge-spread video in
        most cases!"
      />
      <Ctext>
        We never foresaw such situations before. And these difficulties calmed
        us down. After discussions with several professional product managers in
        Tencent, we reconsidered our program and thought about following
        questions.
      </Ctext>
      <Qcard>
        <Question>
          Why Q&A platforms like zhihu.com didn't have a video function?
        </Question>
        <Thought>
          Before: We had thought Zhihu was a place where people can share their
          views, and they can be logical if written down.
        </Thought>
        <Answer>
          Reality: Zhihu didn't expect users to be able to make a good video at
          all. If by videoing, it would lose many potential users.<br />
          <br />
          <Review>
            Actually, Zhihu started to hold video sharing activiting offically
            after one year, because they already had enough loyal users
          </Review>
        </Answer>
      </Qcard>
      <Qcard>
        <Question>Video or Meaningful social network?</Question>
        <Thought>
          Before: We had thought video+knowledge+existing social circle would be
          perfect, because video was the most effective spreading way.{" "}
        </Thought>
        <Answer>
          Reality: Chinese didn't have the habit of making videos at that time
          yet. Most companies were trying to develop it by using live stream.<br />
          <br />
          <Review>
            In fact, after more than one-year trial of live steam, all of those
            still existing products focus on short video, since many hosts have
            already had the ability to produce well-made videos, and useres are
            willing to watch them.
          </Review>
        </Answer>
      </Qcard>
      <Ctext>
        {" "}
        It seemed that we emphasized too much about the video function and
        forgot the original wish of creating a valuable social network.<br />
        <br />
        <Big>We had no choice but removed the video function.</Big>
      </Ctext>
    </NovDiv>
  </Container>
);
export default Nov;
