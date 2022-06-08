import React from "react";
import styled from "styled-components";
const Div = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const PicDiv = styled.div`
  position: relative;
  width: 100%;
  &:before {
    content: "";
    display: block;
    padding-top: 67.5%;
  }
  overflow: hidden;
  margin: 0;
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
const Fenxi = props => (
  <Div>
    <PicDiv>
      <Pics src={props.pic1} />
    </PicDiv>
    <PicDiv>
      <Pics src={props.pic2} />
    </PicDiv>
  </Div>
);
export default Fenxi;
