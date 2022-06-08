import React from "react";
import styled from "styled-components";
import {
  Container,
  BigTitle,
  Ctext,
  SmallTitle,
  Review,
  Dates,
  Ad,
  AdDiv
} from "../../layouts/Work-Styles";
import Gift from "./Apr/Gift";
import Road from "./Apr/road";
import Clickable from "./HideShow";

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
const Apr = () => (
  <Container>
    <DecDiv>
      <Clickable lable="check business trial">
        <Dates>April</Dates>
        <BigTitle>Business model</BigTitle>
        <Ctext>
          {" "}
          As for how to motivate users to answer others' questions, I came up
          with a function--Reward, which I thought could strengthen the
          relationship.<br />
          <Review>
            ( In the beginning of 2016, Chinese gradually developed a habit of
            paying for knowledge or resources on the Internet. So, I thought it
            was the right time to add the reward function in this one-on-one Q&A
            platform. )
          </Review>
        </Ctext>
        <Gift pic1={require("../../images/gift.png")} />
        <SmallTitle>Road Show 2016/27/4</SmallTitle>
        <Ctext>
          We got a chance to have a Road Show at InnoWay, Zhongguancun
        </Ctext>
        <Road pic1={require("../../images/luyan.png")} />
        <Ctext>
          Feedbacks from Investors: They want to see someone actually using our
          product. They needed to know how to monetize our product and
          especially how to monetize it in the shortest time.{" "}
        </Ctext>
        <AdDiv>
          <Ad>
            "In 2016，even a perfect idea cannot get investment. Investors were
            not crazy like before anymore, and they wanted products to have the
            ability to make money instantly"
          </Ad>
        </AdDiv>
      </Clickable>
    </DecDiv>
  </Container>
);
export default Apr;
