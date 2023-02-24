import "./Footer.css";
import logo from "../../logoMobile.svg";
import facebookIcon from "../../images/footer/facebook.svg";
import instagramIcon from "../../images/footer/instagram.svg";
import linkedinIcon from "../../images/footer/linkedin.svg";
import gmailIcon from "../../images/footer/gmail.svg";
import twitterIcon from "../../images/footer/twitter.svg";
import Navigation from "../navigation/Navigation";
import React, { useState, useEffect } from "react";

function Footer() {
  const [screen, setScreenState] = useState("");

  useEffect(() => {
    handleFooterState();
    window.addEventListener("resize", handleFooterState);

    return () => {
      window.removeEventListener("resize", handleFooterState);
    };
  }, []);

  const handleFooterState = () => {
    if (window.innerWidth <= 768) {
      setScreenState("mobile");
    } else if (window.innerWidth > 768) {
      setScreenState("desktop");
    }
  };

  return (
    <footer className={`footer_${screen}`}>
      <div className="footer__body">
        <div className="footer__header">
          <img className="footer__logo" src={logo} alt="" />
          <div className="footer__logo-text">
            <span>Agency</span> Creative
          </div>
        </div>
        <div className="footer__navigation">
          <div className="terms-and-policies">
            <span>Terms & Policies</span>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
          {screen === "mobile" && (
            <div className="navigation">
              <span>Company</span>
              <Navigation for="footer" screen={screen} />
            </div>
          )}
        </div>
        {screen === "desktop" && (
          <div className="navigation">
            <span>Company</span>
            <Navigation for="footer" screen={screen} />
          </div>
        )}
        <div className="footer__contacts">
          <span>Contact</span>
          <p>(+62) 893912392190</p>
          <p>agecnycr@gmail.com</p>
        </div>
        <div className="footer__location">
          <span>Location</span>
          <p>PT Osiris Real Estate International</p>
          <p>Jl. KH. Wahid Hasyim Kel No.10D</p>
          <p>Jakarta, Indonesia</p>
          <p>team@OsirisRealEstate.com</p>
        </div>
      </div>
      <div className="footer__social-links-container">
        <div className="footer__social-links">
          <img src={facebookIcon} alt="" />
          <img src={instagramIcon} alt="" />
          <img src={linkedinIcon} alt="" />
          <img src={gmailIcon} alt="" />
          <img src={twitterIcon} alt="" />
        </div>
        <span className="footer__splitting-line"></span>
        <p className="footer__license">
          Copyright @ 2023 Agency Creative. All Right Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
