import React from "react";

import "./button.css";

class Clickable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    const children = this.props.children;
    return (
      <div>
        <div className={this.state.show ? " HideButton" : "ShowButton"}>
          <div className="ButtonDis">
            <button onClick={() => this.handleClick()}>
              <p> {this.props.lable}</p>
            </button>
          </div>
        </div>
        <div
          className={
            this.state.show ? "HideContent ShowContent" : "HideContent"
          }
        >
          {children}
        </div>
      </div>
    );
  }
}
export default Clickable;
