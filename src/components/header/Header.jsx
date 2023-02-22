import "./Header.css";
import logo from "../../logoMobile.svg";
import Button from "../button/Button";
import React, { Component, Fragment } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      screen: "",
    };
  }

  scrollIntoSection = (section) => {
    section.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  appendNavigationLinks = () => {
    return (
      <Fragment>
        <p
          onClick={() => {
            this.scrollIntoSection(
              document.querySelector(`.main_${this.state.screen}`)
            );
          }}
        >
          Home
        </p>
        <p
          onClick={() => {
            this.scrollIntoSection(
              document.querySelector(`.about_${this.state.screen}`)
            );
          }}
        >
          About
        </p>
        <p
          onClick={() => {
            this.scrollIntoSection(
              document.querySelector(`.services_${this.state.screen}`)
            );
          }}
        >
          Services
        </p>
        <p
          onClick={() => {
            this.scrollIntoSection(
              document.querySelector(`.portfolio_${this.state.screen}`)
            );
          }}
        >
          Projects
        </p>
      </Fragment>
    );
  };

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
  };

  componentDidMount() {
    this.setHeaderState();
    window.addEventListener("resize", this.setHeaderState);
  }

  render() {
    return (
      <header className={`header_${this.state.screen}`}>
        <div className="header__logo-container">
          <img className="header__logo" src={logo} alt="" />
          <div className="header__logo-text">
            <span>Agency</span> Creative
          </div>
        </div>
        {this.state.screen === "desktop" && (
          <div className="header__navbar">{this.appendNavigationLinks()}</div>
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
