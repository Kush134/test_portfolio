import React from "react";

import { DescGroup } from "../layouts/Index-Styles";
import styled from "styled-components";
import { Role, Kind, Way } from "./icons";

const Title = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  color: rgba(0, 0, 0, 0.7);
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Lables = styled.div`
  display: flex;
  margin: 0;
  align-items: flex-start;
  @media (max-width: 1000px) {
    justify-content: center;
  }
  @media (max-width: 415px) {
    justify-content: flex-start;
  }
`;
const LableGroupRole = styled.div`
  margin: 0 1rem 0 0;
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: end;
  @media (max-width: 415px) {
    margin: 0.5rem 0.5rem 0 0;
    padding: 0.05rem 0.6rem 0.1rem 0.3rem;
    border-radius: 40px;
    background: linear-gradient(
      104deg,
      rgba(125, 57, 158, 0.5) 0%,
      rgba(16, 103, 109, 0.5) 100%
    );
  }
`;
const LableGroupKind = styled.div`
  margin: 0 1rem 0 0;
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: end;
  @media (max-width: 415px) {
    margin: 0.5rem 0.5rem 0 0;
    padding: 0.05rem 0.6rem 0.1rem 0.3rem;
    border-radius: 40px;
    background: linear-gradient(
      104deg,
      rgba(16, 103, 109, 0.5) 0%,
      rgba(233, 175, 74, 0.5) 100%
    );
  }
`;
const LableGroupWay = styled.div`
  margin: 0 1rem 0 0;
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: end;
  @media (max-width: 415px) {
    margin: 0.5rem 0.5rem 0 0;
    padding: 0.05rem 0.6rem 0.1rem 0.3rem;
    border-radius: 40px;
    background: linear-gradient(
      104deg,
      rgba(233, 175, 74, 0.5) 0%,
      rgba(125, 57, 159, 0.5) 100%
    );
  }
`;
const Lable = styled.h4`
  margin: 1rem 0 0 0;
  font-size: 1.2rem;
  font-weight: 650;
  color: rgba(0, 0, 0, 0.5);
  @media (max-width: 640px) {
    font-size: 1rem;
    font-weight: 550;
  }
  @media (max-width: 415px) {
    color: white;
    font-weight: 600;
    font-size: 0.8rem;
    margin: 0;
  }
`;

const Desc = props => (
  <DescGroup>
    <Title>{props.title}</Title>
    {props.children}
    <Lables>
      <LableGroupRole>
        <Role />
        <Lable>{props.role}</Lable>
      </LableGroupRole>
      <LableGroupKind>
        <Kind />
        <Lable>{props.kind}</Lable>
      </LableGroupKind>
      <LableGroupWay>
        <Way />
        <Lable>{props.way}</Lable>
      </LableGroupWay>
    </Lables>
  </DescGroup>
);

export default Desc;
