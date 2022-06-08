import React from "react";
import styled from "styled-components";

const PDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto 3rem auto;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-gap: 1rem;
    margin: 0 auto 1rem auto;
  }
`;
const Word = styled.div`
  width: 80%;
  padding: 10rem 0 0 0;
  margin: 0 auto;
  @media (max-width: 800px) {
    padding: 0;
    text-align: center;
  }
`;
const Title = styled.h2`
  margin: 0 auto 2rem auto;
  color: rgba(109, 122, 139, 1);
  font-size: 1.8rem;
  font-weight: 600;
  @media (max-width: 800px) {
    margin: 0 auto 1rem 0;
    font-size: 1.2rem;
  }
`;

const Wp = styled.p`
  margin: 0;
  font-size: 1.5rem;
  line-height: 1.5;
  @media (max-width: 800px) {
    margin: 0 auto;
    font-size: 0.9rem;
  }
`;

const PicDiv = styled.div`
  position: relative;
  width: 70%;
  &:before {
    content: "";
    display: block;
    padding-top: 178%;
  }
  overflow: hidden;
  margin: 3rem auto;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1), 0 -1rem 2rem rgba(0, 0, 0, 0.1);
  @media (max-width: 800px) {
    justify-self: center;
    width: 375px;
    margin: 0 auto;
  }
`;
const Pics = styled.img`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-self: center;
`;
const Example4 = props => (
  <PDiv>
    <PicDiv>
      <Pics src={props.pic1} />
    </PicDiv>
    <Word>
      <Title>Simple is better</Title>
      <Wp>
        There are only three functions, Scan in batches, Merge scanned files to
        a collection and Send files to computer.
      </Wp>
    </Word>
  </PDiv>
);
export default Example4;
