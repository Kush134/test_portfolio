import React from "react";
import HeaderIn from "../components/HeaderIn";
import OverView from "../components/Work1/Overview";
import Background from "../components/Work1/Background";
import Team from "../components/Work1/Team";
import Oct from "../components/Work1/Oct";
import Nov from "../components/Work1/Nov";
import Dec from "../components/Work1/Des";
import Jan from "../components/Work1/Jan";
import Mar from "../components/Work1/Mar";
import Apr from "../components/Work1/Apr";
import May from "../components/Work1/May";
import Jun from "../components/Work1/Jun";

import LoadingScreen from "react-loading-screen";

class Project1Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  cantMove = e => {
    e.preventDefault();
  };
  componentDidMount() {
    setTimeout(() => {
      window.addEventListener("wheel", this.cantMove);
    }, 0);
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500);
    setTimeout(() => {
      window.removeEventListener("wheel", this.cantMove);
    }, 1500);
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        <LoadingScreen
          loading={loading}
          bgColor="white"
          spinnerColor="#01B4FF"
          textColor="#343434"
          text="Failed experience, at least I tried"
        />
        <HeaderIn Name="Differ" />
        <OverView />
        <Background />
        <Team />
        <Oct />
        <Nov />
        <Dec />
        <Jan />
        <Mar />
        <Apr />
        <May />
        <Jun />

        <div style={{ height: "100px" }} />
      </div>
    );
  }
}

export default Project1Page;
