import React from "react";
import styled from "styled-components";

const MoveDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(4, auto);
  margin: 0 auto 10rem auto;
  grid-gap: 5rem;
  @media (max-width: 800px) {
    grid-gap: 3rem;
    margin: 0 auto 5rem auto;
  }
  @media (max-width: 415px) {
    grid-gap: 1rem;
    margin: 0 auto 1rem auto;
  }
`;
const Section = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-gap: 1rem;
  }
`;
const PicDiv1 = styled.div`
  position: relative;
  width: 80%;
  &:before {
    content: "";
    display: block;
    padding-top: 178%;
  }
  overflow: hidden;
  margin: 0;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1), 0 -1rem 2rem rgba(0, 0, 0, 0.1);
  justify-self: start;
  @media (max-width: 800px) {
    justify-self: center;
    width: 375px;
  }
`;
const PicDiv2 = styled(PicDiv1)`
  justify-self: end;
  @media (max-width: 800px) {
    justify-self: center;
    width: 375px;
  }
`;
const Pics = styled.img`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-self: center;
`;
const Words = styled.div`
  padding-top: 10rem;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 800px) {
    padding-top: 0;
    text-align: center;
  }
`;
const Words2 = styled(Words)`
  @media (max-width: 800px) {
    padding-left: 0;
    text-align: center;
    margin: 0 auto;
  }
`;
const Title = styled.h3`
  margin: 0 auto 3rem 0;
  font-size: 1.8rem;
  @media (max-width: 1300px) {
    margin: 0 auto 2rem 0;
    font-size: 1.5rem;
  }
  @media (max-width: 800px) {
    margin: 0 auto 1rem 0;
    font-size: 1.2rem;
  }
`;
const Content = styled.p`
  font-size: 1.3rem;
  margin: 0 auto 3rem 0;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
  line-height: 1.5;
  @media (max-width: 1300px) {
    margin: 0 auto 2rem 0;
    font-size: 1.2rem;
  }
  @media (max-width: 800px) {
    margin: 0 auto 1rem 0;
    font-size: 0.9rem;
  }
`;
const Move = props => (
  <MoveDiv>
    <Section>
      <PicDiv1>
        <Pics src={props.pic1} />
      </PicDiv1>
      <Words2>
        <Title>Using filter to choose the room</Title>
        <Content>
          Most young Chinese like bathtub, so I set this option first. Also more
          and more college students like play vedio games and computer games,
          thus I think young couples can have more fun their room.{" "}
        </Content>
      </Words2>
    </Section>
    <Section>
      <Words>
        <Title>Check the order and book the room</Title>
        <Content>
          When a user wants to place an order, he/she can check the previous
          reviews and some basic info of this place. Also he/she can check the
          details in paybill, then just editting the personal infomation ( In
          China, it is very convenient to ask the Alipay to help verify ID ),
          the payment is finished.
        </Content>
      </Words>
      <PicDiv2>
        <Pics src={props.pic2} />
      </PicDiv2>
    </Section>
    <Section>
      <PicDiv1>
        <Pics src={props.pic3} />
      </PicDiv1>
      <Words2>
        <Title>Check the amenity in the room</Title>
        <Content>
          In Airbnb we can't check the whole stuff in the room from the pictures
          before we arrive. And especially for something we've never used
          before, we don't know how to use it, being afraid of breaking it down.
          Therefore, I'd like to put all the photos and instructions of amenity
          in the room in the App, and thus, users can check them, helping them
          have a day.
        </Content>
      </Words2>
    </Section>
    <Section>
      <Words>
        <Title>Buy something and ask the steward to make a surprise!</Title>
        <Content>
          As the research I did before says, many young couples like a place
          which has a sense of home. They can buy something, like their own
          bathrobe and towel, from the online store, and the delivery address is
          right the room the booked. Meanwhile, they can learn how to bake cakes
          and their favorite dish from it! The most important thing is that if
          the boy wants to give his girl a surprise, he can make it with the
          help of our certain steward.{" "}
        </Content>
      </Words>
      <PicDiv2>
        <Pics src={props.pic4} />
      </PicDiv2>
    </Section>
  </MoveDiv>
);
export default Move;
