import React from "react";
import Link from "gatsby-link";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasScrolled: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  handleScroll = event => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderCont">
          <div className="HeaderGroup">
            <Link
              className={this.state.hasScrolled ? "logo LogoScrolled" : "logo"}
              to="/"
            >
              <img src={require("../images/LOGO.png")} />
            </Link>
            <Link className="work" to="/#projects">
              <button>Work</button>
            </Link>
            <Link className="home" to="/home">
              <button>Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
