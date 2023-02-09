import "./Header.css";
import logo from "../../logoMobile.svg";
import React, { Component } from "react";
import Button from "../button/Button";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      screen: "",
    };
  }

  setHeaderState = () => {
    if (window.innerWidth <= 768 && this.state.screen !== "mobile") {
      this.setState({
        screen: "mobile",
      });
    } else if (window.innerWidth > 768 && this.state.screen !== "desktop") {
      this.setState({
        screen: "desktop",
      });
    }
  }

  componentDidMount() {
    this.setHeaderState()
    window.addEventListener("resize", this.setHeaderState);
  }

  render() {
    return (
      <header className="header">
        <div className="header__logo-container">
          <img className={`header__logo_${this.state.screen}`} src={logo} alt="" />
          <div className={`header__logo-text_${this.state.screen}`}>
            <span>Agency</span> Creative
          </div>
        </div>
        {this.state.screen === "desktop" && (
          <div className="header__navbar">
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Projects</p>
          </div>
        )}

        {this.state.screen === "mobile" && (
          <div className="header__hamburger-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        {this.state.screen === "desktop" && (
          <Button className="header__contact-button" text="Contact Us" />
        )}
      </header>
    );
  }
}

export default Header;
