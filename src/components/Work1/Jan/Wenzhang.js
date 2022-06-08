import React from "react";
import styled from "styled-components";
const Div = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 70%;
  margin: 0 0 3rem 0;
  @media (max-width: 800px) {
    margin: 0 0 1rem 0;
  }
`;
const PicDiv = styled.div`
  position: relative;
  width: 100%;
  &:before {
    content: "";
    display: block;
    padding-top: 178%;
  }
  overflow: hidden;
  margin: 0;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
`;
const CgDiv = styled.div`
  position: relative;
  width: 100%;
  &:before {
    content: "";
    display: block;
    padding-top: 77%;
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
const Pic = styled.img`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-self: center;
`;
const Wenzhang = props => (
  <Div>
    <PicDiv>
      <Pics src={props.pic1} />
    </PicDiv>
    <CgDiv>
      <Pic src={props.pic2} />
    </CgDiv>
  </Div>
);
export default Wenzhang;
