import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link } from "gatsby-link";

const IconButton = styled.button`
  display: block;
  align-items: center;
  padding: auto;
  height: 50px;
  width: 50px;
  font-size: 0.9rem;
  background: rgba(255, 255, 255, 0);
  border: none;
  border-radius: 100%;
  outline: none;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);
  margin: 0 5px;
  jusitifu-items: center;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  @media (max-width: 1500px) {
    height: 40px;
    width: 40px;
    font-size: 0.8rem;
  }
  @media (max-width: 415px) {
    height: 40px;
    width: 40px;
    font-size: 0.6rem;
  }
  &:hover {
    background: rgba(125, 57, 180, 0.5);
    color: white;
    box-shadow: 2px 8px 15px rgba(0, 0, 0, 0.25);
  }
`;
const IconButton2 = styled(IconButton)`
  &:hover {
    background: rgba(16, 103, 125, 0.5);
  }
`;
const IconButton3 = styled(IconButton)`
  &:hover {
    background: rgba(233, 175, 100, 0.7);
  }
`;
export const Resume = () => (
  <IconButton>
    <FontAwesomeIcon icon={["far", "file-user"]} size="2x" />
  </IconButton>
);
export const Inst = () => (
  <IconButton2>
    <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
  </IconButton2>
);

export const Mail = () => (
  <IconButton3>
    <FontAwesomeIcon icon={["far", "envelope"]} size="2x" />
  </IconButton3>
);
const Warp1 = styled.div`
  display: block;
  align-items: center;
  margin: 0 0.5rem 0 0;
  font-size: 1.2rem;
  color: rgba(125, 57, 180, 0.65);
  @media (max-width: 415px) {
    font-size: 0.8rem;
    color: white;
  }
`;
const Warp2 = styled(Warp1)`
  color: rgba(16, 103, 125, 0.7);
  @media (max-width: 415px) {
    font-size: 0.8rem;
    color: white;
  }
`;
const Warp3 = styled(Warp1)`
  color: rgba(233, 175, 100, 0.7);
  @media (max-width: 415px) {
    font-size: 0.8rem;
    color: white;
  }
`;
const Back = styled.div`
  color: black;
  font-size: 1rem;
  width: 32px;
  height: 32px;
  @media (max-width: 1300px) {
    font-size: 0.9rem;
  }
  @media (max-width: 640px) {
    font-size: 0.8rem;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
export const Role = () => (
  <Warp1>
    <FontAwesomeIcon icon={["fas", "paw"]} size="1x" />
  </Warp1>
);
export const Kind = () => (
  <Warp2>
    <FontAwesomeIcon icon={["fas", "wrench"]} size="1x" />
  </Warp2>
);
export const Way = () => (
  <Warp3>
    <FontAwesomeIcon icon={["fas", "cog"]} size="1x" />
  </Warp3>
);

export const BackIcon = () => (
  <Back>
    <FontAwesomeIcon icon={["far", "chevron-left"]} size="2x" />
  </Back>
);

const Icon = styled.button`
  height: 30%;
  width: 20%;
  marigin: auto auto;
  font-size: 100%;
`;
export const Play = () => (
  <Icon>
    <FontAwesomeIcon icon={["far", "play-circle"]} />
  </Icon>
);
