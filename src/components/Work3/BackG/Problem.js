import React from 'react'
import styled from 'styled-components'

const PicDiv = styled.div`
  position: relative;
  width: 80%;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
  overflow: hidden;
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
const Problems = props => (
  <PicDiv>
    <Pics src={props.pic1} />
  </PicDiv>
)
export default Problems
