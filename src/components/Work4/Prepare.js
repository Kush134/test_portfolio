import React from "react";
import styled from "styled-components";
import {
  Container,
  Dates,
  BigTitle,
  SmallTitle,
  Ctext,
  Grey,
  Big4
} from "../../layouts/Work-Styles";
import Persona from "./Prepare/Persona";
import Tickets from "./Prepare/Tickets";
import Competitive from "./Prepare/Competitive";
import Gongdi from "./Prepare/Gongdi";
const PrepareDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1500px) {
    max-width: 1000px;
  }
  @media (max-width: 1300px) {
    max-width: 900px;
  }
`;

const Prepare = () => (
  <Container>
    <PrepareDiv>
      <Dates>Part 1</Dates>
      <BigTitle>Preparation work</BigTitle>
      <SmallTitle>Research in construction sites</SmallTitle>
      <Ctext>
        At the very beginning, I was thinking that maybe I can redesign the
        receipt tickets, so that all the work could be done in the same
        standard.<br />
        I went to four construction sites, acknowledging how the workers made
        the tickets.
      </Ctext>
      <Gongdi pic1={require("../../images/gongdi.png")} />
      <Ctext>
        Well, I found that due to the different mother companies, the process of
        making tickets was totally different. Every site had its own standard,
        which led to the following factors:<br />
        <br />
        <li>
          Some sites used <Grey>professional machines to print</Grey> the
          tickets.
        </li>
        <br />
        <li>
          Some sites hired local farmers to{" "}
          <Grey>report the data by writing.</Grey>
        </li>
        <br />
        <li>
          Even in the same project,{" "}
          <Grey>two different sites used different forms of ticket.</Grey>
        </li>
        <br />
        I knew that even if I made a standardized form and an advanced way to
        make tickets, the giant knowledge gap between different operation
        workers would make it impossible. <br />Futhermore, considering we were
        only the service provider, we had no right to do so, changing the habits
        they had before. Therefore, I had no choice but to give up this idea and
        switch to focusing on how to solve this problem standing in our staff's
        way.{" "}
      </Ctext>
      <SmallTitle>Research in our company</SmallTitle>
      <Ctext>
        <Grey>
          What kind of method could help increase efficiency in checking
          process?
        </Grey>{" "}
        I investigated two staff who handled this work.{" "}
      </Ctext>
      <Persona pic1={require("../../images/persona4.png")} />
      <Ctext>
        According to them, I found that this tool should be{" "}
        <Grey>as simple as possible, without fancy decoration.</Grey> Meanwhile,
        it should be a mobile App, which <Grey>could be used at any time,</Grey>{" "}
        and the good performance of almost every smartphone made the scan
        function possible.<br />
        <br />
        Maybe in the future, I could create a system in photocopier, and
        automatically check accounts in computer, which save human labor. But
        now, because the OCR couldn't ensure 100% accuracy, before I could find
        a way to scan clearly, I cut this idea temporarily.
      </Ctext>
      <SmallTitle>Analyse Traget</SmallTitle>
      <Ctext>
        Take the construction sites I managed as an example. There were two
        different transport companies serving two sites, and each site needed
        two different kinds of cement. Every month I would receive two itemized
        accounts from these two companies, and then I needed to filter the data
        of these two sites. Since not all the information in the tickets is
        useful, and based on the examples of what we should export, I marked the
        most important data, which could help the program-design part.
      </Ctext>
      <Tickets pic1={require("../../images/ticket.png")} />
      <SmallTitle>Competitive Analysis</SmallTitle>
      <Ctext>
        I thought based on the developed trade market, whether existing products
        can do what we want.
      </Ctext>
      <Competitive
        pic1={require("../../images/competitive.png")}
        pic2={require("../../images/explain.png")}
      />
      <Ctext>
        <Big4>The simple OCR function couldn't satisfy our needs</Big4>, then I
        learned the algorithm behind these Apps, and create one for our use.
      </Ctext>
    </PrepareDiv>
  </Container>
);
export default Prepare;
