import React from "react";
import HeaderIn from "../components/HeaderIn";
import OverView from "../components/Work2/Overview";
import Background from "../components/Work2/Background";
import Before from "../components/Work2/Before";
import Design from "../components/Work2/Design";
import Process from "../components/Work2/Process";
import Reflection from "../components/Work2/Reflection";

import LoadingScreen from "react-loading-screen";
class Project2Page extends React.Component {
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
          spinnerColor="#FF3366"
          textColor="#343434"
          text="Fun internship"
        />
        <HeaderIn Name="LesPark" />
        <OverView />
        <Background />
        <Before />
        <Design />
        <Process />
        <Reflection />
        <div style={{ height: "100px" }} />
      </div>
    );
  }
}

export default Project2Page;
