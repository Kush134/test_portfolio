import React from 'react'
import styled from 'styled-components'

const CardDiv = styled.div`
  position: relative;
  width: 100%;
  &:before {
    content: '';
    display: block;
    padding-top: 50%;
  }
  overflow: hidden;
  border-radius: 0.5rem;
  margin: 0;
`

const Card = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`
const BackImg = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
`
const Mask = styled.div`
  position: absolute;
  height: auto;
  right: 0;
  left: 0;
  bottom: 0;
  margin: 0;
  background: linear-gradient(
    0deg,
    rgba(16, 103, 109, 0.5) 0%,
    rgba(0, 0, 0, 0.01) 100%
  );
`

const Title = styled.h2`
  margin: 0 auto 1rem 1rem;
  color: white;
  font-size: 2.5rem;

  line-height: 1.3;
  @media (max-width: 900px) {
    font-size: 2rem;
    margin: 0.5rem 0 0 0.5rem;
  }
  @media (max-width: 700px) {
    font-size: 2.5rem;
    margin: 1rem 0 0 1rem;
  }
  @media (max-width: 640px) {
    font-size: 2rem;
  }
  @media (max-width: 415px) {
    font-size: 1.5rem;
  }
`
const ContentP = styled.h4`
  color: white;
  margin: auto auto 0.5rem 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;

  @media (max-width: 900px) {
    font-size: 1.5rem;
    margin: auto 0 0.5rem 0.5rem;
  }
  @media (max-width: 700px) {
    margin: auto 0 1rem 1rem;
    line-height: 1.5;
  }
  @media (max-width: 640px) {
    font-size: 1rem;
  }
  @media (max-width: 415px) {
    font-size: 0.9rem;
    margin: 1rem 0 0 1rem;
  }
`
const Intro = props => (
  <CardDiv>
    <Card>
      <BackImg src={props.img} />
      <Mask>
        <ContentP>
          {props.content1}
          <br />
          {props.content2}
        </ContentP>
        <Title>{props.title}</Title>
      </Mask>
    </Card>
  </CardDiv>
)
export default Intro
