import React, { useState, useEffect } from "react";
import { EllipseGrid } from "./Ellipse";
import Button from "./Button";
import designFurniture from "../images/portfolio/design-furniture.svg";
import cloud from "../images/portfolio/cloud.svg";
import designByte from "../images/portfolio/design-byte.svg";
import "../styles/Portfolio/Portfolio.css";

function Portfolio() {
  const [screen, setScreenState] = useState("");

  useEffect(() => {
    handlePortfolioState();
    window.addEventListener("resize", handlePortfolioState);

    return () => {
      window.removeEventListener("resize", handlePortfolioState);
    };
  }, []);

  const handlePortfolioState = () => {
    if (window.innerWidth <= 768) {
      setScreenState("mobile");
    } else if (window.innerWidth > 768) {
      setScreenState("desktop");
    }
  };

  return (
    <section className={`portfolio_${screen}`}>
      <div className="portfolio__text-container">
        <div className="portfolio__header-container">
          <h4 className="portfolio__header">Our Portfolio</h4>
          <h2 className="portfolio__subheader">What do we do</h2>
        </div>
        <p className="portfolio__text">
          all projects that we have already done, proven can help to use more
          comfortable, then can used by client from our business
        </p>
      </div>
      <div className="portfolio__grid">
        <img className="design-byte-img" src={designByte} alt="" />
        <img className="cloud-img" src={cloud} alt="" />
        <img className="design-furniture-img" src={designFurniture} alt="" />
        <EllipseGrid color="pink" />
      </div>
      <div className="portfolio__button-container">
        <Button className="portfolio__button" text="See All Portfolio" />
      </div>
      <EllipseGrid color="pink" />
    </section>
  );
}

export default Portfolio;
