import React from "react";
import styled from "styled-components";
import {
  Container,
  BigTitle,
  SmallTitle,
  Ctext,
  Ad,
  AdDiv,
  High
} from "../../layouts/Work-Styles";
import Problems from "./BackG/Problem";
import Concept from "./BackG/Ways";
import App4 from "./BackG/App";

const BackDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1500px) {
    padding-top: 90px;
    max-width: 1000px;
  }
  @media (max-width: 1300px) {
    max-width: 900px;
  }
`;
const Caotu1Div = styled.div`
  max-width: 1500px;
  margin: 0 auto 10rem auto;
  @media (max-width: 800px) {
    margin: 0 auto 5rem auto;
  }
  @media (max-width: 415px) {
    margin: 0 auto 3rem auto;
  }
`;
const BackGround = () => (
  <Container>
    <BackDiv>
      <BigTitle>Background</BigTitle>
      <SmallTitle>Problems</SmallTitle>
      <Ctext>
        It is common to see that the price of hotels is usually high. The price
        of a single room in a motel near Renmin University (located in the
        center of Beijing ) was more than 300 yuan per night 2 years ago. If
        someone wanted to live for a month, it would be nearly ten thousand
        yuan. However, if someone wanted to rent an apartment in the same
        location, the price of a two-room office with full living equipments was
        only 6000 yuan per month. On the other hand, such long-term apartments
        couldn't be leased out for temporary use. And{" "}
        <High>
          more and more college students wanted to live off campus, especially
          for young couples
        </High>. <br />
        <br />
        <li>
          They hoped to have private space for special occasions such as their
          birthdays or anniversaries{" "}
          <High>but most of them couldn't afford the exorbitant price</High>.
        </li>
        <br />
        <li>
          Meanwhile, <High>living in hotels is boring</High>. It is hard for
          them to have fun together.
        </li>
      </Ctext>
      <SmallTitle>Storyboard</SmallTitle>
      <Problems pic1={require("../../images/story.png")} />
      <AdDiv>
        <Ad>
          As a result, young students living in cities like Beijing with his/her
          half feel depressed, and the living cost is too high.
        </Ad>
      </AdDiv>
      <SmallTitle>Solution</SmallTitle>
      <Ctext>
        I used an App named Ziroom to rent my one-room apartment. I found that
        Ziroom placed everything necessary in the room and users can just take
        their luggages in without any concerns. Also, the price covers all the
        furniture, which was only about 5000 yuan per month. It's reasonable.
        And every month, users can have 4 times cleaning services for free! At
        the same time, every user can have a certain steward, who can solve some
        issues in the house. It's very convenient.<br />{" "}
        <High>
          Therefore, why couldn't I imitate its model to make a short-term
          renting platform?
        </High>
        <br />
        Meanwhile, the price per day would be cheap enough, which was about 180
        yuan, even though I provided some services, like professional PC and
        household cleaning.
      </Ctext>
      <Concept pic1={require("../../images/concept.png")} />
      <Ctext>
        So, there were four part of this project:<br />
        <br />
        <li>
          Rules: I needed to verify my concept of low price, setting the price
          and the room rules.
        </li>
        <br />
        <li>
          Rooms: I needed to perpare several well decroated rooms with the
          aspects above.
        </li>{" "}
        <br />
        <li>Service: The next was to prepare the service above.</li> <br />
        <li>
          <High>Platform</High>: The last one was to design the App which was
          the tool to connect all the ideas.
        </li>
      </Ctext>
    </BackDiv>
    <Caotu1Div>
      <App4 pic1={require("../../images/App4.png")} />
    </Caotu1Div>
  </Container>
);
export default BackGround;
