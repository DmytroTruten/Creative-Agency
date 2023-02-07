import "./Header.css";
import logo from "../logo.svg";
import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = { screen: window.innerWidth };
  }

  updateWidth = () => {
    this.setState({ screen: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
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
        {this.state.screen >= 768 && (
          <div className="header__navbar">
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Projects</p>
          </div>
        )}
        {this.state.screen >= 768 && (
          <button className="header__contact-button">Contact Us</button>
        )}
        {this.state.screen < 768 && (
          <div className="header__hamburger-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </header>
    );
  }
}

export default Header;
