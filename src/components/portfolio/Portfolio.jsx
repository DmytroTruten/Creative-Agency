import "./Portfolio.css";
import designFurniture from "../../images/portfolio/design-furniture.svg";
import cloud from "../../images/portfolio/cloud.svg";
import designByte from "../../images/portfolio/design-byte.svg";
import React, { Component } from "react";
import Button from "../button/Button";
import { EllipseGrid } from "../ellipse/Ellipse";

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      screen: "",
    };
  }

  updatePortfolioState = () => {
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
    this.updatePortfolioState();
    window.addEventListener("resize", this.updatePortfolioState);
  }

  render() {
    return (
      <section className={`portfolio_${this.state.screen}`}>
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
}

export default Portfolio;
