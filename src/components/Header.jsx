import React, { Fragment, useState, useEffect, useRef } from "react";
import Button from "./Button";
import ToggleSwitch from "./ToggleSwitch";
import Navigation from "./Navigation";
import logo from "/logoMobile.svg";
import "../styles/Header/Header.css";

function Header() {
  const [screen, setScreenState] = useState("");
  const [sidenavVisible, setSidenavState] = useState(false);
  const backpanel = useRef(null);

  useEffect(() => {
    handleHeaderState();
    window.addEventListener("resize", handleHeaderState);

    return () => {
      window.removeEventListener("resize", handleHeaderState);
    };
  }, [sidenavVisible]);

  const handleHeaderState = () => {
    if (window.innerWidth <= 768) {
      setScreenState("mobile");
    } else if (window.innerWidth > 768) {
      setScreenState("desktop");
    }
  };

  const toggleSidenav = () => {
    setSidenavState((prevState) => !prevState);

    if (!sidenavVisible) {
      backpanel.current.style.display = "block";
      backpanel.current.style.animation = "backpanel-reveal .5s ease-in-out";
    } else {
      setTimeout(() => {
        backpanel.current.style.display = "none";
      }, 490);
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
            onClick={toggleSidenav}
            className={`header__hamburger-menu${
              sidenavVisible ? " active" : ""
            }`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`header__sidenav${sidenavVisible ? "_opened" : ""}`}>
            <ToggleSwitch/>
            <Navigation
              for="sidenav-mobile"
              screen={screen}
              toggleSidenav={toggleSidenav}
            />
            <Button className="header__contact-button" text="Contact Us" />
          </div>
          <div
            className={`sidenav__backpanel${sidenavVisible ? "_opened" : ""}`}
            ref={backpanel}
          ></div>
        </Fragment>
      )}
      {screen === "desktop" && (
        <Fragment>
          <Navigation for="navbar-desktop" screen={screen} />
          <div className="header__right-section">
            <ToggleSwitch/>
            <Button className="header__contact-button" text="Contact Us" />
          </div>
        </Fragment>
      )}
    </header>
  );
}

export default Header;
