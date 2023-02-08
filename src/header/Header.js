import "./Header.css";
import logo from "../logoMobile.svg";
import logoDesktop from "../logoDesktop.svg";
import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      screen: "",
      headerLogo: logo,
      headerLogoTextClass: "header__logo-text header__logo-text_mobile",
    };
  }

  updateWidth = () => {
    if (window.innerWidth <= 768 && this.state.screen !== "mobile") {
      this.setState({
        screen: "mobile",
        headerLogo: logo,
        headerLogoTextClass: "header__logo-text header__logo-text_mobile",
      });
    } else if (window.innerWidth > 768 && this.state.screen !== "desktop") {
      this.setState({
        screen: "desktop",
        headerLogo: logoDesktop,
        headerLogoTextClass: "header__logo-text header__logo-text_desktop",
      });
    }
  };

  componentDidMount() {
    if (window.innerWidth <= 768) {
      this.setState({ screen: "mobile" });
    } else {
      this.setState({ screen: "desktop" });
    }
    window.addEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <header className="header">
        <div className="header__logo-container">
          <img src={this.state.headerLogo} alt="logo" />
          <div className={this.state.headerLogoTextClass}>
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
          <button className="header__contact-button">Contact Us</button>
        )}
      </header>
    );
  }
}

export default Header;
