import React from 'react'
import styled from 'styled-components'

const Mask = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  text-align: left;
  background: linear-gradient(
    0deg,
    rgba(16, 103, 109, 0.8) 0%,
    rgba(233, 175, 74, 0.5) 60%,
    rgba(125, 57, 159, 0.4) 100%
  );

  @media (max-width: 780px) {
    background: linear-gradient(
      0deg,
      rgba(16, 103, 109, 0.8) 0%,
      rgba(233, 175, 74, 0.5) 70%,
      rgba(125, 57, 159, 0.4) 100%
    );
  }

  @media (max-width: 415px) {
    background: linear-gradient(
      0deg,
      rgba(16, 103, 109, 0.5) 0%,
      rgba(233, 175, 74, 0.3) 80%,
      rgba(125, 57, 159, 0.3) 100%
    );
  }
`

const Title = styled.h1`
  margin: 1rem 0 0 1rem;
  color: white;
  font-size: 3rem;
  line-height: 1.3;
  @media (max-width: 640px) {
    font-size: 2rem;
  }
  @media (max-width: 415px) {
    font-size: 1.5rem;
  }
`
const Sum = styled.p`
  color: white;
  display: grid;
  grid-template-columns: 5fr 1fr;
  margin: 1rem 1rem 0 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;
  @media (max-width: 640px) {
    font-size: 1rem;
  }
  @media (max-width: 445px) {
    margin: 0.5rem 1rem 0 1rem;
  }
`

const MyWay = props => (
  <Mask>
    <Title>{props.title}</Title>
    <Sum>{props.text}</Sum>
  </Mask>
)

export default MyWay
