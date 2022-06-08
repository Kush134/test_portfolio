import React from "react";
import HeaderIn from "../components/HeaderIn";
import Overview from "../components/Work3/Overview";
import BackGround from "../components/Work3/Background";
import Research from "../components/Work3/Research";
import Design from "../components/Work3/Design";
import Reflection from "../components/Work3/Reflection";

import LoadingScreen from "react-loading-screen";
class Project3Page extends React.Component {
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
          spinnerColor="#FFA700"
          textColor="#343434"
          text="Fast experiment"
        />
        <HeaderIn Name="Cathome" />
        <Overview image={require("../images/background3.png")} />
        <BackGround />
        <Research />
        <Design />
        <Reflection />
        <div style={{ height: "100px" }} />
      </div>
    );
  }
}

export default Project3Page;
