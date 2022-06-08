import styled from "styled-components";

export const HeroBack = styled.div``;

export const IntroDiv = styled.div`
  margin: 0 2rem;
  @media (max-width: 640px) {
    margin: 0 1rem;
  }
`;
export const IntroGroup = styled.div`
  max-width: 1200px;
  padding: 400px 0 0 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  @media (max-width: 1600px) {
    padding: 260px 0 0 0;
  }
  @media (max-width: 1040px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, auto);
  }
  @media (max-width: 640px) {
    padding: 100px 0 0 0;
  }
`;

export const DrawContain = styled.div`
  margin: 2vw auto 0 auto;
  height: 144vw;
  max-width: 1400px;
  max-height: 2100px;
  overflow: hidden;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  justify-items: stretch;
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(125, 57, 159, 0.5) 17%,
    rgba(16, 103, 109, 0.5) 34%,
    rgba(233, 175, 74, 0.5) 51%,
    rgba(125, 57, 159, 0.5) 68%,
    rgba(16, 103, 109, 0.5) 85%
  );
  @media (max-width: 1600px) {
    max-width: 1300px;
    height: 1950px;
  }
  @media (max-width: 1200px) {
    border-radius: 0.2rem;
    height: 152vw;
    max-height: none;
  }
  @media (max-width: 1100px) {
    height: 159vw;
    max-height: none;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, auto);
    max-height: none;
    height: 610vw;
  }
  @media (max-width: 415px) {
    border-radius: 0rem;
  }
`;

export const BackImg = styled.div`
  height: 100%;
  display: flex;
  background-blend-mode: screen;
  background-size: cover;
`;
export const DrawBack = styled.img`
  z-index: -10;
  position: absolute;
  @media (max-width: 1600px) {
    max-height: 650px;
  }
  @media (max-width: 1200px) {
    width: 55%;
    max-height: none;
  }
  @media (max-width: 1100px) {
    width: 54%;
    max-height: none;
  }
  @media (max-width: 700px) {
    width: 102%;
    max-height: none;
  }
`;
export const DrawDes = styled.div`
  height: 20%;
  float: left;
  align-self: flex-end;
`;
export const Title = styled.h2`
  margin: 0;
  font-size: 2rem;
  color: white;

  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 700px) {
    font-size: 2rem;
  }
  @media (max-width: 415px) {
    font-size: 1.5rem;
  }
`;
export const Text = styled.h4`
  margin: 0;
  font-size: 1rem;
  color: white;

  @media (max-width: 415px) {
    font-size: 0.8rem;
  }
`;
export const DescDiv = styled.div`
  margin: 3rem 2rem 0 2rem;
  @media (max-width: 640px) {
    margin: 1rem 1rem 0 1rem;
  }
`;
export const Words = styled.div`
  max-width: 1200px;
  margin: auto;
  height: auto;
`;
export const Titles = styled.h2`
  margin: 0 auto 0 0;
  color: rgba(0, 0, 0, 0.7);
  font-size: 2.6rem;
  @media (max-width: 640px) {
    font-size: 2rem;
  }
  @media (max-width: 415px) {
    font-size: 1.8rem;
  }
`;

export const AboutContain = styled.div`
  margin: 3rem 2rem 0 2rem;
  height: auto;
  @media (max-width: 640px) {
    margin: 1rem 1rem 0 1rem;
  }
`;
export const IntroContain = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(3, auto);
  }
  @media (max-width: 415px) {
    grid-gap: 0.5rem;
  }
`;
export const PhotoContain = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0 auto;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
  }
  @media (max-width: 415px) {
    margin: 1rem auto 0 auto;
    grid-gap: 0.5rem;
  }
`;
