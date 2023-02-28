import "./Header.css";
import logo from "../../logoMobile.svg";
import Navigation from "../navigation/Navigation";
import Button from "../button/Button";
import ToggleSwitch from "../toggle-switch/ToggleSwitch";
import React, { Fragment, useState, useEffect } from "react";

function Header(props) {
  const [screen, setScreenState] = useState("");
  const [sidenavVisible, setSidenavState] = useState(false);

  useEffect(() => {
    handleHeaderState();
    window.addEventListener("resize", handleHeaderState);

    return () => {
      window.removeEventListener("resize", handleHeaderState);
    };
  }, []);

  const handleHeaderState = () => {
    if (window.innerWidth <= 768) {
      setScreenState("mobile");
    } else if (window.innerWidth > 768) {
      setScreenState("desktop");
    }
  };

  const toggleHamburgerMenu = () => {
    setSidenavState(!sidenavVisible);
    if (sidenavVisible) {
      setTimeout(() => {
        document.querySelector(".sidenav__backpanel").style.display = "none";
        document.querySelector(".sidenav__backpanel").style.animation =
          "backpanel-hide .5s ease-in-out";
      }, 490);
    } else {
      setTimeout(() => {
        document.querySelector(".sidenav__backpanel_opened").style.display =
          "block";
        document.querySelector(".sidenav__backpanel_opened").style.animation =
          "backpanel-reveal .5s ease-in-out";
      });
    }
  };

  return (
    <header className={`header_${screen}`}>
      <div className="header__logo-container">
        <img className="header__logo" src={logo} alt="" />
        <div className="header__logo-text">
          <span>Agency</span>
          <p>Creative</p>
        </div>
      </div>
      {screen === "mobile" && (
        <Fragment>
          <div
            onClick={toggleHamburgerMenu}
            className={`header__hamburger-menu${
              sidenavVisible ? " active" : ""
            }`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`header__sidenav${sidenavVisible ? "_opened" : ""}`}>
            <ToggleSwitch onThemeChange={props.onThemeChange} />
            <Navigation
              for="sidenav-mobile"
              screen={screen}
              toggleSidenav={() => {
                setSidenavState(!sidenavVisible);
              }}
            />
            <Button className="header__contact-button" text="Contact Us" />
          </div>
          <div
            className={`sidenav__backpanel${sidenavVisible ? "_opened" : ""}`}
          ></div>
        </Fragment>
      )}
      {screen === "desktop" && (
        <Fragment>
          <Navigation for="navbar-desktop" screen={screen} />
          <div className="header__right-section">
            <ToggleSwitch onThemeChange={props.onThemeChange} />
            <Button className="header__contact-button" text="Contact Us" />
          </div>
        </Fragment>
      )}
    </header>
  );
}

export default Header;
