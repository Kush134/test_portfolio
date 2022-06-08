import React from "react";
import styled from "styled-components";
import { Container, Ctext, BigTitle, High2 } from "../../layouts/Work-Styles";
import Rela from "./Before/Rela";
import Home1 from "./Before/Home1";

const BeforeDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1500px) {
    max-width: 1000px;
  }
  @media (max-width: 1300px) {
    max-width: 900px;
  }
`;
const Relas = styled.span`
  color: rgba(75, 186, 188, 1);
`;
const Before = () => (
  <Container>
    <BeforeDiv>
      <BigTitle>Before new version</BigTitle>
      <Ctext>
        As a newcomer, our PM asked me to understand this App as well as this
        market by doing an experience report. Since I am not the target user(
        I’m neither a gay or a girl ), I only marked some obvious issues:<br />
        <br />
        <li>
          Some of the feedback hints were different between iOS and Android, and
          they were inflexible.<br />Users might feel uncomfortable.
        </li>
        <br />
        <li>
          No default pages, just white pages when there's no contents.<br />Users
          might be confused.
        </li>
        <br />
        <li>Search tag existed everywhere, but whithout any logic.</li>
        <br />
        <li>
          Too many useless tags in the feed page (For some reasons, they opened
          some kinds of tags to attract users long before but stopped running
          them.)<br />They were unfriendly to new users.
        </li>
        <br />
        <li>The style of whole app was inconsistent.</li>
      </Ctext>
      <Ctext>
        In order to address those mentioned issues as well as to understand this
        market better, I experienced our competitive product ——{" "}
        <Relas>
          Rela, a lesbian social App made by a professional design group
        </Relas>.
      </Ctext>
      <Rela pic1={require("../../images/Rela.png")} />
      <Ctext>
        So, I changed all the toasts and hints on our App and marked default
        pages we actually needed by referring to Rela.<br /> Among all those
        issues, <High2>the strangest one</High2> was the{" "}
        <High2>style and logic of Me page</High2>. It can't be changed
        successfully only by designers or marketing people.
      </Ctext>
      <Home1 pic1={require("../../images/home1.png")} />
    </BeforeDiv>
  </Container>
);
export default Before;
