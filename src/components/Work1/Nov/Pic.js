import React from 'react'
import styled from 'styled-components'

const PicDiv = styled.div`
  position: relative;
  width: 90%;
  &:before {
    content: '';
    display: block;
    padding-top: 33.3%;
  }
  overflow: hidden;
  margin: 0 5%;
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
const Pic1 = props => (
  <PicDiv>
    <Pics src={props.pic1} />
  </PicDiv>
)
export default Pic1
