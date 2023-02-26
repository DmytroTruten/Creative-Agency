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
            onClick={() => {
              setSidenavState(!sidenavVisible);
            }}
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
          <Button className="header__contact-button" text="Contact Us" />
        </Fragment>
      )}
    </header>
  );
}

export default Header;
