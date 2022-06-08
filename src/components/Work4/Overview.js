import React from "react";
import styled from "styled-components";
import { Container, Title, SubTitle, Text } from "../../layouts/Work-Styles";
import BackLP from "./Over/Back";

const OverviewDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 150px;
  text-align: center;
  @media (max-width: 1500px) {
    padding-top: 90px;
    max-width: 1000px;
  }
  @media (max-width: 1300px) {
    max-width: 900px;
    padding-top: 50px;
  }
`;

const BckDiv = styled.div`
  max-width: 1500px;
  margin: 3rem auto 10rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 800px) {
    margin: 0 auto 5rem auto;
  }
  @media (max-width: 415px) {
    margin: 0 auto 3rem auto;
  }
`;
const OverView = () => (
  <Container>
    <OverviewDiv>
      <Title>Numbers</Title>

      <Text>
        There were two ways ahead of me after graduation: preparing English to
        study abroad or helping my father’s company. I didn’t care about his
        business because of heavy workload of study before. But now I had free
        time and decided to do something with my knowledge when I heard that he
        had some issues about checking accounts.
      </Text>
    </OverviewDiv>
    <BckDiv>
      <BackLP pic1={require("../../images/par1.png")} />
      <BackLP pic1={require("../../images/code.png")} />
    </BckDiv>
  </Container>
);
export default OverView;
