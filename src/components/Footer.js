import React from "react";
import styled from "styled-components";

const FootDiv = styled.div`
  height: 6rem;
  margin: 5rem 2rem 3rem 2rem;
  @media (max-width: 640px) {
    margin: 1rem 1rem 0 1rem;
  }
`;
const FootContain = styled.div`
  max-width: 1400px;
  margin: 2rem auto;
  position: relative;
  height: 60px;
`;
const Text = styled.h4`
  position: absolute;
  border-top-style: dotted;
  border-top-color: rgba(0, 0, 0, 0.7);
  border-top-width: 2px;
  padding: 1rem 0 0 0;
  left: 0;
  margin: auto;
  font-size: 0.6rem;
  font-weight: 300;
`;

const Footer = () => (
  <FootDiv>
    <FootContain>
      <Text>
        Design&Code by me! <br />
        This is my first site built by ReactJs, a brand new version will be
        released SOON <br />
        Jesse Gao © 2018 All Rights Reserved
      </Text>
    </FootContain>
  </FootDiv>
);

export default Footer;
