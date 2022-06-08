import React from "react";
import styled from "styled-components";

const PDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 11fr 13fr;
  margin: 0 auto 3rem auto;
  @media (max-width: 800px) {
    margin: 0 auto 1rem auto;
  }
`;

const PicDiv = styled.div`
  position: relative;
  width: 100%;
  &:before {
    content: "";
    display: block;
    padding-top: 45.45%;
  }
  overflow: hidden;
  margin: 0 auto;
`;
const PicDiv2 = styled.div`
  position: relative;
  width: 100%;
  &:before {
    content: "";
    display: block;
    padding-top: 38.46%;
  }
  overflow: hidden;
  margin: 0 auto;
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
const Competitive = props => (
  <PDiv>
    <PicDiv>
      <Pics src={props.pic1} />
    </PicDiv>
    <PicDiv2>
      <Pics src={props.pic2} />
    </PicDiv2>
  </PDiv>
);
export default Competitive;
