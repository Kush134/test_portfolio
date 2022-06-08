import React from "react";
import styled from "styled-components";
import { Titles } from "../layouts/Page2-Styles";

const Words = styled.div`
  max-width: 1200px;
  margin: auto;
  height: auto;
  display: grid;
  grid-template-rows: repeat(2, auto);
`;

const Text = styled.p`
  margin: 1rem auto 0 1rem 0;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.4rem;
  line-height: 1.7;
  @media (max-width: 640px) {
    font-size: 1.2rem;
    line-height: 1.6;
  }
  @media (max-width: 415px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;
export const High = styled.span`
  color: rgba(239, 128, 65, 1);
`;
const Explains = () => (
  <div>
    <Words>
      <Titles>New Challenges keep me busy:</Titles>
      <Text>
        For the second semester of ID, I will go through 5 big projects which
        will be very fun and valuable. And finally I can apply what I've learned
        in the foundation year (the previous semester) into practice, combing
        various technology will be taught to me this year.
        <br />
        <li>
          A personal project about <High>digital media</High>. I will create a
          whole digital system by coding, researching and testing. The topic
          would be about <High>automatic drive</High>.{" "}
        </li>
        <li>
          A personal project about <High>generative design</High>. By using
          grasshopper and Rhinoceros, I'm going to build customized{" "}
          <High>auto parts</High> with the help of data collected by python and{" "}
          <High>visualize the data</High>.
        </li>
        <li>
          Designing and making a <High>book</High> of a medium company, I will
          do some graphic design and <High>brand research</High> during the 4
          months, which is also a personal project.
        </li>
        <li>
          A system method to{" "}
          <High>
            encourage students in medical school champions in translational
            research
          </High>{" "}
          is group project which will going to collaborate with Rush medical
          center.
        </li>
        <li>
          The last one will be redesign and <High>rebuild my wedsite</High>.
          I've prepared for a long time to improve the speed and readability of
          this site, as well as rewrite my stories of each project by using the
          method of <High>storytelling</High> from ID.
        </li>
      </Text>
    </Words>
  </div>
);

export default Explains;
