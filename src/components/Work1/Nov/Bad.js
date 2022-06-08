import React from "react";
import styled from "styled-components";

const BadDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  width: 100%;
  margin: 2rem 0 3rem 0;
  @media (max-width: 800px) {
    margin: 0 auto 1rem auto;
  }
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;
const PDiv = styled.div`
  position: relative;
  width: 90%;
  &:before {
    content: "";
    display: block;
    padding-top: 160%;
  }
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.08);
  margin: 2rem auto 2rem 0;
  overflow: hidden;
  @media (max-width: 1300px) {
    margin: 1rem auto 1rem 0;
  }
  @media (max-width: 760px) {
    width: 60%;
    margin: 1rem auto;
  }
`;
const Pmask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  grid-template-rows: 2fr 3fr;
`;
const Back = styled.div`
  margin: 0;
  height: 100%;
  width: 100%;
  background: url(${props => props.image});
  background-size: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  display: float;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
`;
const Title = styled.h2`
  font-size: 1.6rem;
  margin: 2rem auto;
  text-align: center;
  @media (max-width: 1300px) {
    font-size: 1.3rem;
  }
  @media (max-width: 800px) {
    font-size: 1.1rem;
    margin: 1rem auto;
  }
`;
const Text1 = styled.p`
  font-size: 1.2rem;
  margin: 0 5% 2rem 5%;
  @media (max-width: 1300px) {
    font-size: 1rem;
  }
  @media (max-width: 800px) {
    font-size: 0.9rem;
    margin: 0 5% 1rem 5%;
  }
`;
const Text2 = styled(Text1)`
  color: rgba(239, 128, 65, 1);
  font-weight: 600;
`;

const OtherDiv = styled.div`
  position: relative;
  width: 100%;
  &:before {
    content: "";
    display: block;
    padding-top: 105%;
  }
  margin: 0;
`;
const Otherimg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
`;
const Bad = props => (
  <BadDiv>
    <PDiv>
      <Pmask>
        <Back image={props.image} />
        <Content>
          <Title>{props.title}</Title>
          <Text1>{props.text1}</Text1>
          <Text2>{props.text2}</Text2>
        </Content>
      </Pmask>
    </PDiv>
    <OtherDiv>
      <Otherimg src={props.photo} />
    </OtherDiv>
  </BadDiv>
);
export default Bad;
