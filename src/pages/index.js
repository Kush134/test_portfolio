import React from "react";
import Link from "gatsby-link";
import Cards from "../components/Cards";
import Descs from "../components/Descs";
import Desc1 from "../components/Descs/Desc1";
import Desc2 from "../components/Descs/Desc2";
import Desc3 from "../components/Descs/Desc3";
import Desc4 from "../components/Descs/Desc4";
import Intruduction from "../components/Intrud";
import MyWay from "../components/MyWay";
import MyWayEnd from "../components/MyWayEnd";
import Next from "../components/Next";
import Footer from "../components/Footer";
import Header from "../components/header";
import {
  HeroBack,
  Container,
  CardGroup,
  Banner,
  BannerBack,
  BannerBack2
} from "../layouts/Index-Styles";

import "aos/dist/aos.css";

class IndexPage extends React.Component {
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
      <div>
        <Header />
        <HeroBack>
          <Intruduction name="Jesse Gao" />
        </HeroBack>

        <Banner>
          <BannerBack src={require("../images/1165.jpg")} />

          <MyWay
            title="Journey to UX & Product Designer"
            text="When I was a sophomore, my friends and I were trying to put the programming knowledge learned in class into practice and started our business from scratch. The process was tough and we didn’t make it, but I've gradually found where my real passion lies."
          />
        </Banner>
        <div id="projects">
          <CardGroup>
            <Container
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-duration="150"
            >
              <Link className="Project1" to="/work1">
                <Cards
                  name="My First Attempt"
                  newDate="2015-2016"
                  image={require("../images/wallpaper.png")}
                />
              </Link>
              <Descs
                title="My First Attempt"
                role="Leader"
                kind="Startup"
                way="Business Modle"
              >
                <Desc1 />
              </Descs>
            </Container>

            <Container
              data-aos="fade-up"
              data-aos-offset="-100"
              data-aos-duration="150"
            >
              <Link className="Project2" to="/work2">
                <Cards
                  name="Internship"
                  newDate="Nov.2016-Jan.2017"
                  image={require("../images/cover2.png")}
                />
              </Link>
              <Descs
                title="Internship"
                role="Designer"
                kind="UI Design"
                way="Standard"
              >
                <Desc2 />
              </Descs>
            </Container>

            <Container
              data-aos="fade-up"
              data-aos-offset="-200"
              data-aos-duration="150"
            >
              <Link className="Project3" to="/work3">
                <Cards
                  name="Idea From Living"
                  newDate="Jul.2017"
                  image={require("../images/cover3.png")}
                />
              </Link>
              <Descs
                title="Idea From Living"
                role="Product"
                kind="UX Design"
                way="Case Study"
              >
                <Desc3 />
              </Descs>
            </Container>

            <Container
              data-aos="fade-up"
              data-aos-offset="-300"
              data-aos-duration="150"
            >
              <Link className="Project4" to="/work4">
                <Cards
                  name="Numbers"
                  newDate="Sep.2017-Mar.2018"
                  image={require("../images/wallpaper4.png")}
                />
              </Link>
              <Descs title="Numbers" role="Data" kind="Code" way="Python">
                <Desc4 />
              </Descs>
            </Container>
          </CardGroup>
        </div>
        <Banner
          data-aos="fade-up"
          data-aos-offset="-350"
          data-aos-duration="150"
        >
          <BannerBack2 src={require("../images/3499.jpg")} />
          <MyWayEnd
            title="... Time to Speed Up"
            text="I have put time and effort in what I am interested in, which is definitely interactive design and programming. In the past years of trial-and-error process, I gained valuable experiences but not enough skills. But studying at ID will provide me wings to start my new career."
          />
        </Banner>

        <Next />

        <Footer />
      </div>
    );
  }
}

export default IndexPage;
