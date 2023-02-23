import "./Header.css";
import logo from "../../logoMobile.svg";
import Button from "../button/Button";
import Navigation from "../navigation/Navigation";
import React, { Component, Fragment } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      screen: "",
      sidenavVisible: false,
    };
  }

  toggleSidenav = () => {
    this.setState((previousState) => ({
      sidenavVisible: !previousState.sidenavVisible,
    }));
  };

  handleHeaderState = () => {
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
    this.handleHeaderState();
    window.addEventListener("resize", this.handleHeaderState);
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
        {this.state.screen === "mobile" && (
          <Fragment>
            <div
              onClick={this.toggleSidenav}
              className={`header__hamburger-menu${
                this.state.sidenavVisible ? " active" : ""
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              className={`header__sidenav${
                this.state.sidenavVisible ? "_opened" : ""
              }`}
            >
              <Fragment>
                <div className="header__navbar">
                  <p
                    onClick={() => {
                      this.scrollIntoSection(
                        document.querySelector(`.main_${this.state.screen}`)
                      );
                      this.toggleSidenav();
                    }}
                  >
                    Home
                  </p>
                  <p
                    onClick={() => {
                      this.scrollIntoSection(
                        document.querySelector(`.about_${this.state.screen}`)
                      );
                      this.toggleSidenav();
                    }}
                  >
                    About
                  </p>
                  <p
                    onClick={() => {
                      this.scrollIntoSection(
                        document.querySelector(`.services_${this.state.screen}`)
                      );
                      this.toggleSidenav();
                    }}
                  >
                    Services
                  </p>
                  <p
                    onClick={() => {
                      this.scrollIntoSection(
                        document.querySelector(
                          `.portfolio_${this.state.screen}`
                        )
                      );
                      this.toggleSidenav();
                    }}
                  >
                    Projects
                  </p>
                </div>
                <Button className="header__contact-button" text="Contact Us" />
              </Fragment>
            </div>
          </Fragment>
        )}
        {this.state.screen === "desktop" && (
          <Navigation screen={this.state.screen} />
        )}
      </header>
    );
  }
}

export default Header;
