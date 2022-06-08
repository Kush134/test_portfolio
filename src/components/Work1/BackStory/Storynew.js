import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  max-width: 1000px;
  margin: 3rem auto;
  @media (max-width: 1300px) {
    max-width: 800px;
  }
  @media (max-width: 640px) {
    margin: 1rem auto;
  }
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  &:before {
    content: "";
    display: block;
    padding-top: 50%;
  }
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.05), 0 -1rem 2rem rgba(0, 0, 0, 0.02);
  margin: 0 auto;
  overflow: hidden;
`;
const Pics = styled.img`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const StoryPic = props => (
  <div>
    <CardDiv>
      <Card>
        <Pics src={props.pic1} />
      </Card>
    </CardDiv>
  </div>
);
export default StoryPic;
