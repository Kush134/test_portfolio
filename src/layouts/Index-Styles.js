import styled from "styled-components";

export const HeroBack = styled.div``;

export const IntroGroup1 = styled.div`
  max-width: 1400px;
  padding: 400px 0 0 0;
  margin: 0 auto;

  @media (max-width: 1600px) {
    padding: 260px 0 0 0;
  }

  @media (max-width: 1040px) {
    margin: 0 5rem;
  }
  @media (max-width: 640px) {
    margin: 0 1rem;
    padding: 100px 0 0 0;
  }
`;

export const CardGroup = styled.div`
  margin: 2rem;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 2.3rem;
  @media (max-width: 640px) {
    grid-gap: 1.3rem;
    margin: 1rem 1rem;
  }
  @media (max-width: 415px) {
    grid-gap: 1rem;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 3rem;
  justify-items: stretch;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-gap: 2.5rem;
    justify-items: center;
  }
  @media (max-width: 640px) {
    grid-gap: 1.5rem;
  }
  @media (max-width: 415px) {
    grid-gap: 1rem;
    justify-items: stretch;
  }
`;

export const CardDiv = styled.div`
  width: 24rem;
  height: 15rem;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column-reverse;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  justify-items: stretch;
  &:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0 1.8rem 3.7rem rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 640px) {
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.25);
    &:hover {
      transform: scale(1.05, 1.05);
      box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.4);
    }
  }
  @media (max-width: 415px) {
    box-shadow: 0 0 0;
    border-radius: 0.5rem;
    width: 100%;
    height: 14rem;
    &:hover {
      transform: scale(1, 1);
      box-shadow: 0 0 0;
    }
  }
`;
export const DescGroup = styled.div`
  align-self: end;
  max-width: 800px;
  height: 15rem;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  justify-items: start;
  @media (max-width: 1000px) {
    height: auto;
    padding: 0 2rem;
    grid-template-rows: repeat(2, auto);
    justify-items: stretch;
  }
  @media (max-width: 500px) {
    padding: 0;
  }
`;

export const Banner = styled.div`
  max-width: 1200px;
  height: 16rem;
  margin: 5rem auto 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;

  @media (max-width: 1040px) {
    max-width: 1200px;
    border-radius: 0.2rem;
  }
  @media (max-width: 1000px) {
    margin: 2rem 0 0 0;
  }
  @media (max-width: 640px) {
    height: 14rem;
  }
  @media (max-width: 415px) {
    margin: 1rem auto 0 auto;
    border-radius: 0rem;
  }
`;
export const BannerBack = styled.img`
  position: absolute;
  top: -100%;
  right: 0;
  height: 360%;
  z-index: -1;
  @media (max-width: 780px) {
    height: 300%;
    top: -80%;
  }
  @media (max-width: 640px) {
    height: 250%;
    top: -50%;
  }
  @media (max-width: 415px) {
    height: 170%;
    top: -20%;
  }
`;
export const BannerBack2 = styled(BannerBack)`
  position: absolute;
  top: -80%;
  left: 0;
  height: 360%;
  z-index: -1;
  @media (max-width: 930px) {
    height: 320%;
    top: -80%;
  }
  @media (max-width: 640px) {
    height: 280%;
    top: -70%;
  }
  @media (max-width: 550px) {
    height: 200%;
    top: -60%;
  }
  @media (max-width: 460px) {
    height: 190%;
    top: -40%;
  }
  @media (max-width: 415px) {
    height: 175%;
    top: -33%;
  }
`;
export const WaveBotton = styled.div`
  position: absolute;
  width: 100%;
  bottom: -120px;
  left: -320px;
  transform: rotate(30deg);
  z-index: 100;
`;
export const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -120px;
  right: -320px;
  transform: rotate(210deg);
  z-index: 100;
`;
export const MoreAbout = styled.div`
  height: 500px;
`;
