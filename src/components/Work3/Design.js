import React from "react";
import styled from "styled-components";
import {
  Container,
  BigTitle,
  SmallTitle,
  Ctext,
  High
} from "../../layouts/Work-Styles";
import Site from "./Deisgn/Site";
import Sketch from "./Deisgn/Sketch";
import Usertesting from "./Deisgn/Testing";
import Move from "./Deisgn/Move";
import Usertesting2 from "./Deisgn/Testing2";
import Usertesting3 from "./Deisgn/Testing3";
import Usertesting4 from "./Deisgn/Testing4";
import Usertesting5 from "./Deisgn/Testing5";

const DesignDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1500px) {
    max-width: 1000px;
  }
  @media (max-width: 1300px) {
    max-width: 900px;
  }
`;

const FunDiv = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  @media (max-width: 1500px) {
    max-width: 1200px;
  }
`;
const SmallTil = styled(SmallTitle)`
  margin: 0 0 8rem auto;
  @media (max-width: 1300px) {
    margin: 0 auto 5rem auto;
  }
  @media (max-width: 800px) {
    margin: 0 auto 3rem auto;
  }
  @media (max-width: 415px) {
    margin: 0 auto 1rem auto;
  }
`;

const Design = () => (
  <Container>
    <DesignDiv>
      <BigTitle>Design process</BigTitle>
      <Ctext>
        For now, the main function of the App appears. Users can search for
        apartments they like; they can use online store to buy something they
        need; a place users can check their journey, including the key and
        chatting with the steward.
      </Ctext>
      <SmallTitle>Site map</SmallTitle>
      <Site pic1={require("../../images/sitemap.png")} />
      <SmallTitle>Main function 1: Booking </SmallTitle>
      <Sketch pic1={require("../../images/booking.png")} />
      <SmallTitle>Main function 2: Shopping </SmallTitle>
      <Sketch pic1={require("../../images/shopping.png")} />
      <SmallTitle>Main function 3: Checking the journey </SmallTitle>
      <Sketch pic1={require("../../images/check the journey.png")} />
      <SmallTitle>Wireframes & User testing</SmallTitle>
      <Ctext>
        Instead of using Axure to make the wireframes, this time I chose to draw
        them by pencil and paper. And indeed it was so fast, only taking me 2
        days. After that, I asked some of my friends to imitate the process.
      </Ctext>
    </DesignDiv>
    <FunDiv>
      <Usertesting pic1={require("../../images/usertesting1.png")} />
      <Usertesting2 pic1={require("../../images/usertesting2.png")} />
      <Usertesting3 pic1={require("../../images/usertesting3.png")} />
      <Usertesting4 pic1={require("../../images/usertesting4.png")} />
      <Usertesting5 pic1={require("../../images/usertesting5.png")} />
    </FunDiv>
    <DesignDiv>
      <Ctext>
        During the testing, it seemed that my friends had no issues with the
        interface. <br />So... I made the final design.
      </Ctext>
      <SmallTil>Final prototype</SmallTil>
      <Move
        pic1={require("../../images/fliter.gif")}
        pic2={require("../../images/pay.gif")}
        pic3={require("../../images/journey.gif")}
        pic4={require("../../images/chat.gif")}
      />
    </DesignDiv>
  </Container>
);
export default Design;
