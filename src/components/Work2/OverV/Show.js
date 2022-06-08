import React from "react";
import styled from "styled-components";
import Gif from "./Gif";
import { Ctext, High2 } from "../../../layouts/Work-Styles";

const ShowDiv = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 5rem;
  margin: 0 auto 10rem auto;
  @media (max-width: 1500px) {
    max-width: 1000px;
  }
  @media (max-width: 1300px) {
    max-width: 900px;
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
  @media (max-width: 800px) {
    margin: 0 auto 5rem auto;
  }
  @media (max-width: 415px) {
    margin: 0 auto 3rem auto;
  }
`;
const GifDiv = styled.div`
  @media (max-width: 1100px) {
    width: 375px;
    justify-self: center;
  }
`;
const Overview = styled.div`
  align-self: center;
`;
const Title = styled.h2`
  font-size: 3rem;
  color: rgba(0, 0, 0, 0.8);
  margin: 0 auto 3rem 0;
  text-align: left;
  @media (max-width: 1300px) {
    font-size: 2.5rem;
  }
  @media (max-width: 800px) {
    font-size: 2rem;
    margin: 0 auto 1rem 0;
  }
`;
const Subtitle = styled.h2`
  font-size: 2.2rem;
  color: rgba(0, 0, 0, 0.8);
  margin: 0;
  text-align: center;
  @media (max-width: 1300px) {
    font-size: 1.8rem;
  }
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

const Show = () => (
  <ShowDiv>
    <Overview>
      <Title>
        This is the story of my internship — design the <High2>Me Page</High2>{" "}
        of 6.0 version.
      </Title>
      <Ctext>
        After my unsuccessful startup experience, I decided to take some
        internships in a tech company to develop my all-around skills, since the
        main reason for my failure was unprofessional. Luckily, I found one of
        my alumni’s company was hiring, and their App was right in the social
        network field. During the internship, I was almost involved in every
        part of the company, the design process and using data spider…{" "}
      </Ctext>
      <Subtitle>
        Me Page - <High2>LesPark</High2>
      </Subtitle>
    </Overview>
    <GifDiv>
      <Gif pic1={require("../../../images/move.gif")} />
    </GifDiv>
  </ShowDiv>
);
export default Show;
