import React from "react";
import styled from "styled-components";
const Div = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const PicDiv = styled.div`
  position: relative;
  width: 94%;
  &:before {
    content: "";
    display: block;
    padding-top: 75%;
  }
  overflow: hidden;
  margin: 2rem 3% 5rem 3%;
  border-radius: 0.5rem;
  @media (max-width: 800px) {
    margin: 0rem 1% 1rem 1%;
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
const Taolun = props => (
  <Div>
    <PicDiv>
      <Pics src={props.pic1} />
    </PicDiv>
    <PicDiv>
      <Pics src={props.pic2} />
    </PicDiv>
  </Div>
);
export default Taolun;
