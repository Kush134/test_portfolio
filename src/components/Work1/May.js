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

import App from "./May/App";
import Before from "./May/Xuanchuan";
import Test from "./May/Test";
import Mvp from "./May/Final";

const DecDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1500px) {
    max-width: 1000px;
  }
  @media (max-width: 1300px) {
    max-width: 900px;
  }
`;

const May = () => (
  <Container>
    <DecDiv>
      <Dates>May-July</Dates>
      <BigTitle>Last attempt</BigTitle>
      <Ctext>
        In May, almost all the junior students in China are busy preparing for
        job interviews or exams to further their study. Seeing our product
        failed to get the approval from the market, Wang Guangxin, my partner
        also left the team. Our team only had three people: Dou Chen, Jia Bowen,
        and I.{" "}
      </Ctext>
      <SmallTitle> H5 APP </SmallTitle>
      <Ctext>Sound function but bad interface just for user testing.</Ctext>
      <App pic1={require("../../images/jishu.png")} />
      <SmallTitle>The first sharing activity</SmallTitle>
      <Ctext>
        We chose the most common topic among college students--<High>
          How to make a good PPT
        </High>{" "}
        as the first topic of our WeChat online sharing activity. We used{" "}
        <High>WeChat official account</High> for publicity based on its
        all-round <High>friends circle</High>, and finally attracted 123
        students. After that, we publicized our APP and invited those students
        who had interests as the seed users to test the App.<br />
      </Ctext>{" "}
      <Before pic1={require("../../images/xuanchuan.png")} />
      <Ctext>
        <li>
          First, we introduced today's host, in order to attract someone who
          knew him.
        </li>
        <br />
        <li>
          Second, we also put some examples to illustrate his ppt-design
          ability. It might attract more potential users.<High>
            ( It was a way to imitate those students who had questions only when
            they saw something and then got inspired. )
          </High>{" "}
        </li>
      </Ctext>
      <Ctext>
        The whole activity lasted for 1.5h. During that, only not more than 10
        people asked related questions after the host finished his
        skill-sharing, which was far from our expectation.
      </Ctext>
      <SmallTitle>Results of the activity and user test</SmallTitle>
      <Test pic1={require("../../images/test2.png")} />
      <Ctext>
        Reflections:
        <br />1. It was an H5 App, and the interface was not appealing;
        <br />2. People don’t have that many questions in their mind;
        <br />3. If there are not enough friends or acquaintances using this
        platform, it doesn’t have any value.
        <br />4. We need to discover the real seed users of our platform.
      </Ctext>
      <SmallTitle>Minimum Viable Product (MVP)</SmallTitle>
      <Ctext>
        Putting aside the form of application, we decided to experiment on our
        idea. We held a sharing activity among our WeChat friends and followers
        and made an observation.{" "}
      </Ctext>
      <Mvp pic1={require("../../images/fenxiang.png")} />
      <Ctext>
        In the following weeks, we held 5 WeChat sharing activities online. The
        results of these experiments were perfect, as well as the feedbacks from
        students who took part in -- 4 students we were not familiar with wanted
        to be a host to share their skills if possible. The average number of
        audience was 10, the average lasting time was 1 hour.{" "}
      </Ctext>
      <Mvp pic1={require("../../images/jieguo.png")} />
      <Ctext>
        That proved our original idea was right and needed--<High>
          "Spread knowledge by videoing","Ask friends or friends' friends for
          ideas and suggestions of how to get started a new interest", "A place
          where we could share our skills without any sharing stress"
        </High>
      </Ctext>
    </DecDiv>
  </Container>
);
export default May;
