import React from 'react'
import styled from 'styled-components'

const PicDiv = styled.div`
  position: relative;
  width: 100%;
  &:before {
    content: '';
    display: block;
    padding-top: 30%;
  }
  overflow: hidden;
  margin: 0;
`
const Pics = styled.div`
  position: absolute;
  height: 70%;
  background: url(${props => props.image});
  background-size: cover;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
const Back = props => (
  <PicDiv>
    <Pics image={props.image} />
  </PicDiv>
)
export default Back
