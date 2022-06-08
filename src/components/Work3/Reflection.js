import React from "react";
import styled from "styled-components";
import {
  Container,
  BigTitle,
  SmallTitle,
  Ctext
} from "../../layouts/Work-Styles";

const ReflDiv = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1500px) {
    max-width: 1000px;
  }
  @media (max-width: 1300px) {
    max-width: 900px;
  }
`;
const Ctext1 = styled(Ctext)`
  margin: 0 auto 10rem auto;

  @media (max-width: 800px) {
    margin: 0 auto 5rem auto;
  }
  @media (max-width: 415px) {
    margin: 0 auto 3rem auto;
  }
`;
const Reflection = () => (
  <Container>
    <ReflDiv>
      <BigTitle>Experiment</BigTitle>
      <Ctext1>
        In September 2017, I did a little experiment to verify this idea in
        Beijing and Lanzhou (an underdeveloped city located in the northwest of
        China), specifically for students in Renmin University and Lanzhou
        University.<br />
        <br />
        <li>
          In Beijing, I directly used the two-room apartment I rented as the
          room I designed in this project, and meanwhile I purchased all the
          kitchen utensils. As for the services, I bought several snacks,
          flowers and living stuff, then I could ride my friend's scooter to be
          the delivery man. The total cost (per day) was 185 yuan (5525 was the
          rent, 2547 was for all the other thing I bought. Here I set the
          recover time was 12 months, so the average price per month was 5737
          yuan. For every day was about 185 yuan.) And then I made a poster to
          promote this project in my school. I received at least 20 inquiries,
          who were really interested in this. In the end I didn't let them live
          in my room because it's illegal. In a word, this idea is practical!
        </li>
        <br />
        <li>
          On the other hand, the thing was different in Lanzhou. My home is near
          Lanzhou University, which is about 160 square metre, a big apartment.
          In Lanzhou, the rent of such a room was about 2700 yuan per month,
          including the decration cost and all the furniture my mom bought
          before. Ignoring the cost of service, I set the price 95 yuan per day.
          It seemed too cheap! When I asked some friends in Lanzhou University,
          they told me they'd rather rent it for a long term, and they didn't
          care about the THREE DAYS rule...
        </li>
        <br />
        Thus, I briefly concluded that due to the differnet level of consumption
        and the diversity of the entertainment, this idea only fit for students
        in developed arears, because couples might value the time more they
        spend together in their busy lifestyle.
      </Ctext1>
      <BigTitle>Reflection</BigTitle>
      <Ctext>
        As for this project, the hardest part was to set the price, rather than
        design the App. Since the reasonable price and advanced decoraction were
        two biggest selling points for college students, I needed to figure out
        and eventually calculate the number, in order to ensure certain amount
        of profit. Due to the limited time and resources, I didn't make it at
        that time, but I still want to have a try in the near future.<br />
        Also, before putting this project into practice, I need to perpare at
        least 10 apartments in different communities. That will be a big deal.
      </Ctext>

      <SmallTitle>Takeaways</SmallTitle>
      <Ctext>
        <li>
          After my last internship, I've gained some basic design skills.
          Actually, this is my first time to use Sketch to draw so many pages.
          Therefore, designing this project is relatively easy.
        </li>
        <br />
        <li>
          In the beginning of 2018, I suddenly found several Ads about the
          similar idea in Guangzhou and Shenzhen. They cared about the
          decoration most, and the price was reasonable. It told me that more
          and more young Chinese prefer such living style. What's more, I found
          myself to be passionate about novel ideas and eager to see them
          through, which was the reason for me to pursue a career in this
          industry.
        </li>
        <br />
        <li>
          During this project, I suddenly noticed that User research was not
          only just for how to improve the interaction between human and
          computer/phone. Everything is based on how to provide a better service
          not only online service but also service in real life. For now, App
          has already returned to its main role: tool. If one day, I stil want
          to start my own business, I need to focus on the pre-product,
          including services and something in the real life.
        </li>
      </Ctext>
    </ReflDiv>
  </Container>
);
export default Reflection;
