import React from "react";
import styled from "styled-components";
import { Container, Title, Text } from "../../layouts/Work-Styles";

import Back from "./BackStory/Backp";

const BackDiv = styled.div`
  max-width: 1800px;
  margin: 0 auto 3rem auto;
`;
const OverviewDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 120px;
  text-align: center;
  @media (max-width: 1600px) {
    padding-top: 60px;
  }
`;

const OverView = () => (
  <Container>
    <OverviewDiv>
      <Title>My First Attempt</Title>

      <Text>
        The first idea was born in the summer of 2015 and officially announced
        death in July, 2016. I tried my best to see it through although I might
        seem to be a newbie in this thriving industry. Nevertheless, it failed
        due to many reasons. This is my one-year-long story.
      </Text>
    </OverviewDiv>
    <BackDiv>
      <Back image={require("../../images/background0.png")} />
    </BackDiv>
  </Container>
);
export default OverView;
