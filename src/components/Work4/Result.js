import React from "react";
import styled from "styled-components";
import {
  Container,
  BigTitle,
  Grey,
  Dates,
  Ctext,
  Big4,
  SmallTitle
} from "../../layouts/Work-Styles";

const ResultDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1500px) {
    max-width: 1000px;
  }
  @media (max-width: 1300px) {
    max-width: 900px;
  }
`;

const Result = () => (
  <Container>
    <ResultDiv>
      <Dates>Part 3</Dates>
      <BigTitle>Real Results</BigTitle>
      <Ctext>
        After I completed the python algorithm, I used the tickets in February
        as examples to verify it. The accuracy was only about 70%, which was
        useless for our business. <Big4>We urgently need 100% accuracy!</Big4>{" "}
        Wait...what's wrong with my code?
      </Ctext>
      <SmallTitle>Challange</SmallTitle>
      <Ctext>
        <li>
          I found Baidu API shouldn't be to blame. The real problem was that the
          tickets were unclear, and the printers in construction sites were not
          good enough, which increased the difficulty of this task...
        </li>
        <br />
        Since the troditional way was manunally checking, the workers in sites
        barely cared about the quality of the tickets they printed. Actually,
        they had the ability to make them clear--we discussed with 3 sites, they
        agreed to gave the high quality ones in the future later. And indeed, in
        March, my experiment worked out. All of the data from these 3 sties can
        be used by this method to get a good result. I only need to check
        whether the numbers of pictures were right. <br />
        <br />
        <li>
          After being successful in some sites, I need to make it adapt to more
          sites, and in this way, I can increase the effciency to the greatest
          extent. After all, there are at least 5 different forms of those
          tickets. Expanding my algorithm would be the first thing to do in the
          future.
        </li>
        <br />
        <li>
          Considering taking pictures of tickets we received every month was
          time-consuming and laborious, I was thinking one day if all the sites
          could give us high resolution tickets, we could use scanner to do the
          boring task faster. However, I'v never done a project like developing
          a program on a scanner, it might be challenging.{" "}
        </li>
        <br />
        Now, I am still working on this project in my spare time.
      </Ctext>
    </ResultDiv>
  </Container>
);
export default Result;
