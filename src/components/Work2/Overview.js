import React from "react";
import styled from "styled-components";
import { Container } from "../../layouts/Work-Styles";
import BackLP from "./OverV/Back";
import Show from "./OverV/Show";

const OverviewDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 100px;
  text-align: center;
  @media (max-width: 1500px) {
    padding-top: 70px;
  }
  @media (max-width: 1300px) {
    padding-top: 50px;
  }
`;

const OverView = () => (
  <Container>
    <OverviewDiv>
      <BackLP pic1={require("../../images/LPlogo.png")} />
      <Show />
    </OverviewDiv>
  </Container>
);
export default OverView;
