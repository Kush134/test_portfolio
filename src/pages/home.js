import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import {
  HeroBack,
  IntroDiv,
  DrawContain,
  DescDiv,
  Words,
  Titles
} from "../layouts/Page2-Styles";

import Intruduction from "../components/Intrud2";
import DrawingDesc from "../components/Drawings/DrawingDes";
import Pic from "../components/Drawings/Draw";
import Abouts from "../components/Abouts";
import styled from "styled-components";
import Explains from "../components/Explain";
import "aos/dist/aos.css";

const DescDivExplain = styled.div`
  margin: 3rem 2rem 2rem 2rem;
  @media (max-width: 640px) {
    margin: 1rem 1rem 1rem 1rem;
  }
`;

class SecondPage extends React.Component {
  componentDidMount() {
    const isBrowser = typeof window !== "imdefined";
    const AOS = isBrowser ? require("aos") : undefined;

    this.aos = AOS;
    this.aos.init();
  }

  componentDidUpdate() {
    this.aos.refresh();
  }
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Header />
        <HeroBack>
          <IntroDiv>
            <Intruduction
              name="This is Jesse Gao"
              text="I have always been aspiring to be both a visionary artist and a risk-taking entrepreneur. Majoring in mathematics in my undergraduate study laid a solid foundation for me to think logistically. The process of brainstorming ideas and visualizing them pushes me to learn and practice coding languages. The first semester in ID is meaningful, even there is little beautiful and convincing products or projects could be presentable. I've learned the basic of comunication, product and interaction design, which would be the key to my dreaming career along with the knowledge and principles I will learn in the following 2 years in ID."
              image={require("../images/123.png")}
              head={require("../images/head.jpg")}
            />
          </IntroDiv>
        </HeroBack>
        <DescDivExplain
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-duration="900"
        >
          <Explains />
        </DescDivExplain>
        <div id="2">
          {" "}
          <DescDiv>
            <Words>
              <Titles> My Funfacts </Titles>
            </Words>
          </DescDiv>
        </div>
        <Abouts />

        <DrawingDesc />
        <DrawContain>
          <Pic
            real={require("../images/aisah.png")}
            paint={require("../images/Elsa.png")}
            name="Elsa"
            date="Dec 2015"
          />
          <Pic
            real={require("../images/xialuokebackground.png")}
            paint={require("../images/Sherlock.png")}
            name="Sherlock"
            date="Feb 2016"
          />
          <Pic
            real={require("../images/mygril.png")}
            paint={require("../images/Zhangyu.png")}
            name="My Girl"
            date="Jun 2017"
          />
          <Pic
            real={require("../images/testbackground.png")}
            paint={require("../images/test.png")}
            name="Jack"
            date="Feb 2016"
          />
          <Pic
            real={require("../images/malef.png")}
            paint={require("../images/Malefecent.png")}
            name="Maleficent"
            date="Jun 2016"
          />
          <Pic
            real={require("../images/green.png")}
            paint={require("../images/Eva.png")}
            name="Eva Green"
            date="Dec 2016"
          />
        </DrawContain>

        <Footer />
      </div>
    );
  }
}

export default SecondPage;
