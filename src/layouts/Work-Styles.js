import styled from "styled-components";

export const Container = styled.div`
  margin: 3rem 2rem;
  @media (max-width: 800px) {
    margin: 1rem 2rem;
  }
  @media (max-width: 640px) {
    margin: 1rem 1rem;
  }
`;
export const Caotu1Div = styled.div`
  max-width: 1500px;
  margin: 0 auto 3rem auto;
  @media (max-width: 1500px) {
    max-width: 1300px;
  }
  @media (max-width: 1300px) {
    max-width: 1100px;
  }
  @media (max-width: 800px) {
    margin: 0 auto 1rem auto;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 3.5rem;
  color: rgba(0, 0, 0, 0.7);
  @media (max-width: 1300px) {
    font-size: 3rem;
  }
  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;
export const SubTitle = styled.h4`
  margin: 1rem 0;
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 400;
  @media (max-width: 1300px) {
    font-size: 1.3rem;
  }
  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;

export const Text = styled.p`
  margin: 3rem 0 2rem 0;
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 400;
  padding: 0 5%;
  @media (max-width: 1300px) {
    font-size: 2rem;
  }
  @media (max-width: 800px) {
    font-size: 1.3rem;
  }
`;

export const Names = styled.span`
  text-align: center;
  font-size: 1.6rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.8);
  @media (max-width: 1300px) {
    font-size: 1.3rem;
  }
  @media (max-width: 800px) {
    font-size: 0.9rem;
  }
`;
export const Jieshis = styled.span`
  text-align: center;
  font-size: 1.3rem;
  color: rgba(0, 0, 0, 0.6);
  @media (max-width: 1300px) {
    font-size: 1.1rem;
  }
  @media (max-width: 800px) {
    font-size: 0.9rem;
  }
`;
export const Dates = styled.h4`
  margin: 10rem auto 0 auto;
  text-align: center;
  font-size: 1.8rem;
  color: rgba(0, 0, 0, 0.6);
  @media (max-width: 1300px) {
    font-size: 1.3rem;
  }
  @media (max-width: 800px) {
    font-size: 0.9rem;
    margin: 5rem auto 0 auto;
  }
  @media (max-width: 415px) {
    margin: 3rem auto 0 auto;
  }
`;
export const BigTitle = styled.h2`
  margin: 0 auto 10rem auto;
  text-align: center;
  font-size: 2.7rem;
  @media (max-width: 1300px) {
    font-size: 2.3rem;
    margin: 0 auto 5rem auto;
  }
  @media (max-width: 800px) {
    font-size: 1.9rem;
  }
  @media (max-width: 415px) {
    margin: 0 auto 3rem auto;
  }
`;
export const Ctext = styled.p`
  margin: 0 0 3rem 0;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 350;
  line-height: 1.5;
  @media (max-width: 1300px) {
    font-size: 1.2rem;
  }
  @media (max-width: 800px) {
    font-size: 1rem;
    margin: 0 0 1rem 0;
  }
  @media (max-width: 450px) {
    font-weight: 0;
    line-height: 1.3;
  }
`;
export const SmallsTitle = styled.h2`
  font-size: 2.1rem;
  font-weight: 600;
  margin: 0 0 2rem 0;
  @media (max-width: 1300px) {
    font-size: 1.7rem;
  }
  @media (max-width: 800px) {
    font-size: 1.4rem;
    margin: 0 auto 1rem 0;
  }
`;
export const SmallTitle = styled.h2`
  margin: 0 auto 2rem 0;
  font-size: 2.2rem;
  @media (max-width: 1300px) {
    font-size: 1.8rem;
  }
  @media (max-width: 800px) {
    font-size: 1.4rem;
    margin: 0 auto 1rem 0;
  }
`;
export const Big = styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: rgba(239, 128, 65, 1);
  font-style: italic;
  @media (max-width: 1300px) {
    font-size: 1.5rem;
  }
  @media (max-width: 800px) {
    font-size: 1.2rem;
  }
`;
export const High = styled.span`
  color: rgba(239, 128, 65, 1);
`;
export const Review = styled.span`
  color: rgba(62, 175, 235, 1);
`;
export const AdDiv = styled.div`
  width: 70%;
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.05), 0 -1rem 2rem rgba(0, 0, 0, 0.02);
  padding: 1% 5%;
  margin: 0 auto 3rem auto;
`;
export const Ad = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-style: italic;
  color: rgba(0, 0, 0, 0.4);
  font-weight: 350;
  @media (max-width: 1300px) {
    font-size: 1.5rem;
  }
  @media (max-width: 800px) {
    font-size: 1.1rem;
  }
`;
export const Concl = styled.p`
  margin: 0 0 3rem 0;
  text-align: center;
  font-size: 2rem;
  color: rgba(239, 128, 65, 1);
  font-weight: 500;
  padding: 0 10%;
  @media (max-width: 800px) {
    font-size: 1.3rem;
    margin: 0 0 1rem 0;
  }
`;

export const QDiv = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  @media (max-width: 1300px) {
    max-width: 800px;
  }
`;
export const QDivCon = styled.div`
  max-width: 1000px;
  margin: 0 auto 3rem auto;
  display: flex;
  @media (max-width: 1300px) {
    max-width: 800px;
  }
  @media (max-width: 800px) {
    margin: 0 auto 1rem auto;
  }
`;
export const QCard = styled.div`
  position: relative;
  width: 15%;
  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.05), 0 -1rem 2rem rgba(0, 0, 0, 0.02);
  margin: 0;
  overflow: hidden;
  @media (max-width: 800px) {
    width: 10%;
  }
`;
export const Qmask = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(${props => props.image});
  background-size: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  opacity: 0.8;
`;
export const QuesDiv = styled.div`
  width: 85%;
  padding: 0 2% 0 5%;
`;
export const Quest = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: rgba(239, 128, 65, 1);
  margin: 1%;
  @media (max-width: 1300px) {
    font-size: 1.5rem;
  }
  @media (max-width: 800px) {
    font-size: 1.2rem;
  }
`;

export const High2 = styled.span`
  color: rgba(255, 51, 102, 1);
`;

export const Grey = styled.span`
  background-color: #6d7a8b;
  color: white;
`;

export const Big4 = styled(Big)`
  color: rgba(117, 197, 244, 1);
`;
