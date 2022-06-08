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
const Desc3 = () => (
  <Content>
    During the internship, my girlfriend and I moved off campus and lived in a
    small but cozy apartment. My girl and I also kept two cats. Occasionally we
    threw parties in our apartment, watching movies, playing board games and
    cooking together. We were very happy. Suddenly I thought why didn’t we start{" "}
    <High>a house leasing project just for young couples</High>?
  </Content>
);
export default Desc3;
