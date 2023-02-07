import "./Header.css";
import logo from "../logo.svg";
import React from "react";

class Header extends React.Component {
  constructor() {
    super();
    this.state = { width: 0 };
  }

  render() {
    return (
      <header className="header">
        <div className="header__logo-container">
          <img src={logo} alt="logo" />
          <div className="header__logo-text">
            <span>Agency</span> Creative
          </div>
        </div>
        <div className="header__hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    );
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
    if (this.state.width <= 576) {
      console.log(this.state.width, "mobile");
    } else {
      console.log(this.state.width, "smth else");
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
}

export default Header;
