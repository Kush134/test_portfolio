import React from "react";
import styled from "styled-components";

const PicDiv = styled.div`
  position: relative;
  width: 100%;
  &:before {
    content: "";
    display: block;
    padding-top: 177.9%;
  }
  overflow: hidden;
  margin: 0;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1), 0 -1rem 2rem rgba(0, 0, 0, 0.1);
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
const Gif = props => (
  <PicDiv>
    <Pics src={props.pic1} />
  </PicDiv>
);
export default Gif;
