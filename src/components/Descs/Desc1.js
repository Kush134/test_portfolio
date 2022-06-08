import React from "react";
import styled from "styled-components";
const Content = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.3;
  margin: 0.5rem 0 0 0;
  @media (max-width: 1040px) {
    margin: 0;
  }
  @media (max-width: 1000px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 1rem;
  }
  @media (max-width: 415px) {
    text-align: left;
  }
`;
const High = styled.span`
  font-weight: 700;
  color: rgba(0, 0, 0, 0.9);
  margin: 0;
`;

const Desc1 = () => (
  <Content>
    Hoping to have a more meaningful social media network, my friends and I took
    a one-year challenge to realize our goal—
    <High>a skill-sharing platform based on network</High>. I, a student in
    mathsmatics, took the role of the leader, brainstorming ideas, holding
    meetings to make plans and putting every effort to launch the product.
  </Content>
);
export default Desc1;
