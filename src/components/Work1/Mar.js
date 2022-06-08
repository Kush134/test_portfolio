import React from "react";
import styled from "styled-components";
import {
  Container,
  BigTitle,
  Ctext,
  SmallTitle,
  Dates,
  Big
} from "../../layouts/Work-Styles";

import Comp from "./Mar/Comp";
import Luoji from "./Mar/Luoji";
import Fenxi from "./Mar/Fenxi";
import Sketch from "./Mar/Sketch";
import Differ from "./Mar/Differ";
import Clickable from "./HideShow";

const MarDiv = styled.div`
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
  max-width: 2000px;
  margin: 0 auto 3rem auto;
  @media (max-width: 800px) {
    margin: 0 auto 1rem auto;
  }
`;

const Mar = () => (
  <Container>
    <MarDiv>
      <Dates>March</Dates>
      <BigTitle>Minus again</BigTitle>
      <Ctext>
        After the Chinese New Year, we had a new thought. We might not want to
        build a vertical website because of the limited time and resources.
        Since it was difficult to get users to share information voluntarily,
        why don’t we create questions and ask users for answers. In this way, we
        only focused on those who already had questions in mind. Then we started
        to focus our platform on Q&A format.
      </Ctext>
      <Luoji pic1={require("../../images/luoji.png")} />
      <SmallTitle>User Scenario</SmallTitle>
      <Comp pic1={require("../../images/10.png")} />
      <SmallTitle>Questionnaire</SmallTitle>
      <Ctext>
        This time we made a questionnaire in time, which aimed to verify our
        idea: a Q&A platform based on connection. And the result was perfect,
        which gave us hope to continue with our project.{" "}
      </Ctext>
    </MarDiv>
    <Clickable lable="details">
      <Caotu1Div>
        <Fenxi
          pic1={require("../../images/fenxi1.png")}
          pic2={require("../../images/fenxi2.png")}
        />
      </Caotu1Div>
    </Clickable>
    <MarDiv>
      <SmallTitle>Solutions about the concerns from users.</SmallTitle>
      <Ctext>
        1. Embarrassed: The App would show the relationship graph to each user.
        Thus they can get in touch without bothering their mutual friends.<br />
        <br />
        2. Reliability: We encourage users to tag and grade each other's talents
        or skills.<br />
        <br />
        3. Labeled: It seems Chinese do not like to "Label" themselves. So, we
        changes our name:
      </Ctext>
      <Differ pic1={require("../../images/Differ.png")} />

      <Ctext>
        {" "}
        In order to help users find the one they wanted to make friends with
        more easily and accurately, we changed our front page to be the
        recommendation of users’ potential friends by cards. I draw the
        prototype and the only developer in our team started to learn H5 App.
        (since we could use it test users rapidly). <br />
        <br />
        <Big>
          Meanwhile, we were preparing the first sharing activiety officially
        </Big>.
      </Ctext>
      <SmallTitle>Sketching Interfaces</SmallTitle>
      <Sketch pic1={require("../../images/shouhui.png")} />
    </MarDiv>
  </Container>
);
export default Mar;
