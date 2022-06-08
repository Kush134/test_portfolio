import React from "react";
import styled from "styled-components";
import {
  Container,
  BigTitle,
  Ctext,
  High2,
  SmallTitle,
  Review
} from "../../layouts/Work-Styles";
import Messy from "./Backg/Messy";
import Flow from "./Backg/Flow";

const BackgDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1500px) {
    max-width: 1000px;
  }
  @media (max-width: 1300px) {
    max-width: 900px;
  }
`;
const Role = styled.span`
  font-weight: 700;
`;

const Background = () => (
  <Container>
    <BackgDiv>
      <BigTitle>Background</BigTitle>
      <Ctext>
        In 2016, the live stream had gone viral in China. Basically, every
        social media company found its ability to make money quickly and started
        adding this function to their apps after some previous successful cases
        since the end of 2015. Two months before I entered my company,{" "}
        <High2>
          LesPark—a worldwide lesbian social App had made live stream as its
          core function
        </High2>.
      </Ctext>
      <Ctext>
        Because LesPark had a large number of users in mainland China and
        Taiwan, camgirls seemed to be suitable for this platform.{" "}
        <High2>The outdated interfaces and the disorganized details</High2>{" "}
        which were full of bugs, however, made the App hard to use as well as{" "}
        <High2>hard to attract new users and easy to lose current users</High2>.
      </Ctext>
      <Messy pic1={require("../../images/messy.png")} />
      <Ctext>
        After half a month I joined the company, my leader( the only one PM )
        and I led the whole team to design the brand new 6.0 version, aiming to{" "}
        <High2>
          make the style consistant and add the live function without
          compromising the original social attribute
        </High2>.
      </Ctext>
      <SmallTitle>My Role and Achievement</SmallTitle>
      <Ctext>
        <li>
          Since the only PM was focusing on improving the live function and
          company’s profits, I, as the <Role>product assistant</Role>, did a lot
          of work to <High2>spot errors and debug</High2> in the App.
        </li>
        <br />
        <li>
          It was not uncommon that Chinese small companies didn’t have UX
          designers, and all the design work was done by the UI designers, which
          brought them a lot of workloads. I volunteered myself to be the{" "}
          <Role>UX designer</Role> to help{" "}
          <High2>bridge the development and design team</High2> and I can still{" "}
          <High2>receive needs from the marketing team</High2>.
        </li>
        <br />
        <li>
          During the whole process of designing and developing the new version,
          I found the miscommunication between each team caused too much
          repetitive work. I told my boss and worked with him to{" "}
          <High2>
            make a design-process norm, including the main staff involved
          </High2>, which indeed improved our later efficiency.{" "}
        </li>
      </Ctext>
      <Flow pic1={require("../../images/flow1.png")} />
    </BackgDiv>
  </Container>
);
export default Background;
