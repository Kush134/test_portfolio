import React from "react";
import styled from "styled-components";
import {
  Container,
  BigTitle,
  Ctext,
  SmallTitle,
  High,
  Dates,
  Concl,
  Big
} from "../../layouts/Work-Styles";
import Shuju from "./Jan/shuju";
import Wenzhang from "./Jan/Wenzhang";
import Conclusion from "./Conclusion";

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

const Jan = () => (
  <Container>
    <DecDiv>
      <Dates>January</Dates>
      <BigTitle>Bad News</BigTitle>

      <SmallTitle>User research about sharing</SmallTitle>
      <Ctext>
        Since all the feedbacks we got before of our idea were from the
        conversations with our friends, and the results were good, because we
        described a well-made product, with many high-quality contents and sound
        friends-connection.<br /> This time, we only wanted to figure out{" "}
        <High>
          How the views of sharing and recording in a brand new platform
        </High>. We thought winter break was the perfect time for us to do a
        large scale of user research; however, we only received no more than 40
        questionnaires with useful information, and the results were terrible.
      </Ctext>
      <Shuju pic1={require("../../images/yanjiu.png")} />
      <SmallTitle>Example of the sharing content we proposed</SmallTitle>
      <Ctext>
        Being good at painting, I liked posting my drawings in social networks,
        and I thought I would be a target user who liked sharing. Therefore, I
        wrote down the process of how I drew as an example in our WeChat
        Official account--空知社(kong zhi she), and got some results.
      </Ctext>
      <Wenzhang
        pic1={require("../../images/wenzhang.gif")}
        pic2={require("../../images/chengguo.png")}
      />
      <Ctext>
        However, the whole process of creating this article was time consuming.
        Even for me, a man who likes sharing my experience, I wanted to quit.
      </Ctext>
      <Conclusion
        back={require("../../images/gantan.png")}
        question=" We overestimated students' ability of sharing high-quality stuff！"
      />
      <Ctext>
        Since we were senior students who also needed to think for their future,
        some of my teammates quit for seeking jobs or preparing for futher
        study. There was only one developer left in our team.<br /> What's
        worse, those students who we connected before failed to keep their
        promise. Thus, our preparation work 1 became impossible.<br />
        <br /> <Big>What if we delete the contents pool?</Big>
      </Ctext>
    </DecDiv>
  </Container>
);
export default Jan;
