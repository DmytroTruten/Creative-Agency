import "./InnerRoot.css";
import React, { useState } from "react";
import Header from "../header/Header";
import Main from "../main/Main";
import About from "../about/About";
import Services from "../services/Services";
import Portfolio from "../portfolio/Portfolio";
import Testimonial from "../testimonial/Testimonial";
import GetStarted from "../get-started/GetStarted";
import Footer from "../footer/Footer";

function InnerRoot() {
  const [toggleTheme, setToggleTheme] = useState("light");

  const handleToggleChange = (theme) => {
    setToggleTheme(theme);
  }

  return (
    <div className={`inner-root_${toggleTheme}`}>
      <Header onThemeChange={handleToggleChange} />
      <Main />
      <About />
      <Services />
      <Portfolio />
      <Testimonial />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default InnerRoot;
