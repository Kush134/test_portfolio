import React from "react";
import styled from "styled-components";

const PicDiv = styled.div`
  position: relative;
  width: 70%;
  &:before {
    content: "";
    display: block;
    padding-top: 140%;
  }
  overflow: hidden;
  margin: 3rem auto 3rem auto;
  @media (max-width: 1300px) {
    width: 60%;
  }
  @media (max-width: 800px) {
    margin: 1rem auto 1rem auto;
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
const Site = props => (
  <PicDiv>
    <Pics src={props.pic1} />
  </PicDiv>
);
export default Site;
