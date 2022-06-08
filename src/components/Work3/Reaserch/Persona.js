import React from 'react'
import styled from 'styled-components'

const Person = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const PicDiv = styled.div`
  position: relative;
  width: 93%;
  &:before {
    content: '';
    display: block;
    padding-top: 160%;
  }
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1), 0 -1rem 2rem rgba(0, 0, 0, 0.05);
  margin: 0 auto 3rem auto;
`
const Pics = styled.img`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-self: center;
`
const Persona = props => (
  <Person>
    <PicDiv>
      <Pics src={props.pic1} />
    </PicDiv>
    <PicDiv>
      <Pics src={props.pic2} />
    </PicDiv>
    <PicDiv>
      <Pics src={props.pic3} />
    </PicDiv>
    <PicDiv>
      <Pics src={props.pic4} />
    </PicDiv>
  </Person>
)
export default Persona
