import React from "react";

import {
  AboutContain,
  IntroContain,
  PhotoContain
} from "../layouts/Page2-Styles";
import Intro from "../components/About/IntroCard";
import Photo from "../components/About/PhotoCard";
const Abouts = () => (
  <AboutContain>
    <IntroContain>
      <Intro
        img={require("../images/moxing.png")}
        title="Hobbies"
        content1="·Modeling"
        content2="·Football"
      />
      <Intro
        img={require("../images/ziyou.png")}
        title="Lifestyle"
        content1="·Freedom"
        content2="·Cats"
      />
      <Intro
        img={require("../images/xigua.png")}
        title="Necessities"
        content1="·Watermelon"
        content2="·Cold Brew"
      />
    </IntroContain>

    <PhotoContain>
      <Photo img={require("../images/zuqiu.png")} />
      <Photo img={require("../images/mao.png")} />
      <Photo img={require("../images/moto.png")} />
      <Photo img={require("../images/love.png")} />
    </PhotoContain>
  </AboutContain>
);

export default Abouts;
