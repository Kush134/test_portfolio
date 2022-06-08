import React, { Component, PropTypes } from "react";
import AtvImg from "react-atv-img";
import {
  DrawDes,
  Title,
  Text,
  BackImg,
  DrawBack
} from "../../layouts/Page2-Styles";

class Pic extends React.Component {
  render() {
    const BackUrl = this.props.real;
    const props = this.props;
    return (
      <BackImg>
        <DrawBack src={BackUrl} />
        <AtvImg
          layers={[props.paint]}
          isStatic={false}
          className={"thisIsOptional"}
          style={{
            width: "50%",
            height: "80%",
            float: "left",
            padding: "10% 4% 0% 5%",
            zIndex: "2",
            position: "relative"
          }}
        />

        <DrawDes>
          <Title>{props.name}</Title>
          <Text>{props.date}</Text>
        </DrawDes>
      </BackImg>
    );
  }
}
export default Pic;
