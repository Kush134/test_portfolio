import React from "react";
import styled from "styled-components";
import ParallaxImage from "react-image-parallax2";

const PicDiv = styled.div`
  position: relative;
  width: 75%;
  &:before {
    content: "";
    display: block;
    padding-top: 95%;
  }
  overflow: hidden;
  margin: auto;
`;
const Pics = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-self: center;
`;
const BackLP = props => (
  <PicDiv>
    <Pics>
      <ParallaxImage reduceHeight={1 / 2.1} src={props.pic1} />
    </Pics>
  </PicDiv>
);
export default BackLP;
