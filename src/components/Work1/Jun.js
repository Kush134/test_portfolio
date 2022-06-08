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

import Team from "./June/Photo";
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
const Ads = styled.h2`
  margin: 0 0 10rem 0;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  @media (max-width: 800px) {
    font-size: 1.2rem;
    margin: 0 0 10rem 0;
  }
  @media (max-width: 415px) {
    margin: 0 auto 3rem auto;
  }
`;

const Jun = () => (
  <Container>
    <DecDiv>
      <Dates>June</Dates>
      <BigTitle>The End</BigTitle>
      <Ctext>
        The sharing activities couldn't last if we didn't have much time spent
        in coming up with topics, inviting hosts and organizing events. With the
        approach of the final exam, our team could no longer hang in there and I
        dissembled the team.{" "}
      </Ctext>
      <SmallTitle>Review</SmallTitle>

      <Ctext>
        Our idea has been proved right by the MVP, but we found some reasons why
        we failed to make such a platform we envisioned:<br />
        <li>
          {" "}
          We were not a professional team. As for leaders, we put too many
          functions in a new App in the beignning stage, and thus we changed the
          idea too many times which made the programmers feel exhausted. And
          till the end, our inexperienced programmer didn't make a good APP, but
          he tried. ( We were not in the beginning of Facebook time )
        </li>
        <li>
          {" "}
          We knew that it was hard for us to design and code an app, but before
          we verify our idea, we would not use money to buy an APP coded by
          professionals, since I saw too many heavily-invested APP died because
          of the lack of users.
        </li>
        <li>
          We underestimated the difficulty of copying the existing friends
          connection on a brand new platform, since WeChat (Tencent) would never
          let his social network chain go, and even till now, it control Chinese
          social net firmly.
        </li>
        <li>
          {" "}
          The delemma: the vertical fields made friends in real life lose its
          value; the all-round platform heavily relied on friends connection.
        </li>
        <li>
          {" "}
          We have not yet found a brilliant way as cold boot( like what SnapChat
          did at that time )to attract users.
        </li>
      </Ctext>
      <Ctext>
        As for my work, I don't think I was a qualified leader or product
        manager. I made too many mistakes in the whole process. For example,
        before I did a user research, I started to think about how to make a
        promotional film to spread my idea and attract users. Since I blindly
        believed in Agile Development, I didn't do well in the preparation (
        site map and all sketch pages ) for programmers. As a UI designer, I
        focused on too many details at the beginning. Meanwhile, I failed to
        manage our time. But, in this whole process, I've learned a lot, which
        helped me realize my weaknesses and pushed me to perfect myself both as
        a leader and a product designer.
      </Ctext>

      <Team pic1={require("../../images/team.png")} />
      <Ads>Thanks my team </Ads>
    </DecDiv>
  </Container>
);
export default Jun;
