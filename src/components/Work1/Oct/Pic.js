import React from 'react'
import styled from 'styled-components'
const Cao1div = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
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
const PicDiv = styled.div`
  position: relative;
  width: 90%;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
  overflow: hidden;
  margin: auto;
`
const Pic1 = props => (
  <Cao1div>
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
  </Cao1div>
)
export default Pic1
