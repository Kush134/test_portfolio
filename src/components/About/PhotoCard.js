import React from 'react'
import styled from 'styled-components'

const PicDiv = styled.div`
  position: relative;
  width: 100%;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
  overflow: hidden;
  border-radius: 0.5rem;
  margin: 0;
`
const Mask = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`
const PicLife = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
`

const Photo = props => (
  <PicDiv>
    <Mask>
      <PicLife src={props.img} />
    </Mask>
  </PicDiv>
)
export default Photo
