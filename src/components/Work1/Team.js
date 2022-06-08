import React from "react";
import styled from "styled-components";
import {
  Container,
  BigTitle,
  Ctext,
  SmallTitle,
  Names,
  Jieshis,
  Dates,
  Big
} from "../../layouts/Work-Styles";
import Member from "./Team/Members";

const TeamDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1500px) {
    max-width: 1000px;
  }
  @media (max-width: 1300px) {
    max-width: 900px;
  }
`;
const TeamContain = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 0 0 3rem 0;
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Team = () => (
  <Container>
    <TeamDiv>
      <Dates>September</Dates>
      <BigTitle>Get Started</BigTitle>
      <Ctext>
        After the summer break, I went back to school and talked this idea to a
        bunch of my friends. They thought this idea might have a future and we
        could give it a try. Thus, my first team built up.
      </Ctext>
      <TeamContain>
        <Member
          title="Design"
          name="Me + Guangxin Wang"
          text="to design product and UI, to publicize the idea, to find and talk to possible investors"
        />
        <Member
          title="Video"
          name="Bizheng Wu"
          text="To reduce the difficulty of making a video and to standardize the process of videoing"
        />
        <Member
          title="Programming"
          name="Xiaojue Tian+ Haodong Yu"
          text="To realize the video fuction both in Android and iOS"
        />
        <Member
          title="Promotion"
          name="Hao Dong+ Diya Li"
          text="to build connections with student organizations leaders and professors in school"
        />
      </TeamContain>
      <Ctext>
        We did a brief survey of "how would students think about this idea" by
        talking to about 30 students in my school. Basically all of them
        expressed the willingness that such a friend-based knowledge-sharing
        platform was needed, which gave us a lot of confidence.{" "}
      </Ctext>
      <SmallTitle>Plan α</SmallTitle>
      <Ctext>
        1. To build a social-network-based platform to share knowledge in the
        form of videos. <br />
        2. Add a Moment Page which could show what questions that users's
        friends asked or followed.<br />{" "}
      </Ctext>
      <Ctext>
        <Big>Yes, we directly started </Big>and named us product:<br />
        <br />
        <Names>懂浩(Dong Hao)</Names>
        <br />
        <Jieshis>means you are knowledgable</Jieshis>
      </Ctext>
    </TeamDiv>
  </Container>
);
export default Team;
