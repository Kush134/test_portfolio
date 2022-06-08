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
const Desc4 = () => (
  <Content>
    After graduation, I start to help my father’s business,{" "}
    <High>a cement distributor for highways</High>. Before, they did everything
    manually, such as checking orders, which took a lot of time. In order to
    improve the work efficiency, I designed a scanner. Although it is not 100%
    accurate, the accuracy can be greatly improved shortly. I am still working
    on this project.
  </Content>
);
export default Desc4;
