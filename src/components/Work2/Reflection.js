import React from "react";
import styled from "styled-components";
import { Container, BigTitle, Ctext } from "../../layouts/Work-Styles";

const ReflectionDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1500px) {
    max-width: 1000px;
  }
  @media (max-width: 1300px) {
    max-width: 900px;
  }
`;
const BigsTitle = styled(BigTitle)`
  margin: 10rem auto 5rem auto;
`;
const Reflection = () => (
  <Container>
    <ReflectionDiv>
      <BigsTitle>Reflection</BigsTitle>
      <Ctext>
        <li>
          Organization and categorization are the key for users’ experience.
        </li>
        <br />
        <li>
          A high quality platform doesn’t necessarily make money but a
          profitable platform must have good user experience. Rela, our
          competitor, with loyal and high quality users, still couldn’t make
          money because it refused to use hosts live streaming to attract new
          users and make money. We had a platform with a large number of users
          who were willing to watch live videos and pay some money as rewards to
          hosts. With a much more friendly and cleaner user face with logic, our
          app made more than 1 million yuan and got a new round of investment.
        </li>
        <br />
        <li>
          If it were not for the freedom that my boss gave to me, I might not be
          able to tap into areas like setting rules and UX design.{" "}
        </li>
        <br />
        <li>
          In the process, I found what I really wanted to do in the future, UX
          Design.
        </li>
      </Ctext>
    </ReflectionDiv>
  </Container>
);
export default Reflection;
