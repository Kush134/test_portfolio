import React from "react";
import styled from "styled-components";
import { Container, Title, Text } from "../../layouts/Work-Styles";

const OverviewDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 1300px) {
    max-width: 900px;
  }
`;
const PicDiv = styled.div`
  position: relative;
  width: 100%;
  &:before {
    content: "";
    display: block;
    padding-top: 50%;
  }
  overflow: hidden;
  background: url(${props => props.image});
  background-size: cover;
  overflow: hidden;
  margin: 0 0 10rem 0;
`;
const Text3 = styled(Text)`
  margin: 2rem auto 10rem auto;
  @media (max-width: 800px) {
    margin: 0 auto 5rem auto;
  }
  @media (max-width: 415px) {
    margin: 0 auto 3rem auto;
  }
`;

const Overview = props => (
  <div>
    <PicDiv image={props.image} />
    <Container>
      <OverviewDiv>
        <Title>An idea from living</Title>
        <Text3>
          During the last two years of my college time, I rented a small
          furnished apartment near my university to do my work more
          conveniently. Later my girlfriend moved in, cooking and living
          together. Since then, I was thinking neither the hotels nor long-term
          leasing apartment can satisfy young college students' needs — they
          were too expensive. This is the story of a living project for young
          couples in big cities, like Beijing, Shanghai, Guangzhou.
        </Text3>
      </OverviewDiv>
    </Container>
  </div>
);
export default Overview;
