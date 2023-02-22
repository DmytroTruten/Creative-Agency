import "./Services.css";
import socialMedia from "../../images/services/social-media.svg";
import searchEngine from "../../images/services/search-engine.svg";
import design from "../../images/services/design.svg";
import ads from "../../images/services/ads.svg";
import arrowRight from "../../images/services/arrow-right.svg";
import React, { Component } from "react";

class Services extends Component {
  constructor() {
    super();
    this.state = {
      screen: "",
    };
  }

  updateAboutState = () => {
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
    this.updateAboutState();
    window.addEventListener("resize", this.updateAboutState);
  }

  render() {
    return (
      <section className={`services_${this.state.screen}`}>
        <div className="services__text-container">
          <div className="services__header-container">
            <h4 className="services__header">Our Services</h4>
            <h2 className="services__subheader">Perfect and Fast Movement</h2>
          </div>
          <p className="services__text">
            We move with make a Creative Strategy for help your business goal,
            we help to improve your income by a services we have. make your
            content look interesting and make people look for your business
          </p>
          <div className="services__read-more-container">
            <h4 className="services__read-more">Read More</h4>
            <img className="services__arrow-right" src={arrowRight} alt="" />
          </div>
        </div>
        <div className="services__grid">
          <Service card="media" />
          <Service card="engine" />
          <Service card="design" />
          <Service card="ads" />
        </div>
      </section>
    );
  }
}

export default Services;

class Service extends Component {
  render() {
    return (
      <div className="services-grid__services-card">
        {this.props.card === "media" && (
          <div className="services-card__content">
            <img
              className="services-card__content-img"
              src={socialMedia}
              alt=""
            />
            <p className="services-card__content-text">
              Social Media Management
            </p>
          </div>
        )}
        {this.props.card === "engine" && (
          <div className="services-card__content">
            <img
              className="services-card__content-img"
              src={searchEngine}
              alt=""
            />
            <p className="services-card__content-text">
              Search Engine Optimization
            </p>
          </div>
        )}
        {this.props.card === "design" && (
          <div className="services-card__content">
            <img className="services-card__content-img" src={design} alt="" />
            <p className="services-card__content-text">Design</p>
          </div>
        )}
        {this.props.card === "ads" && (
          <div className="services-card__content">
            <img className="services-card__content-img" src={ads} alt="" />
            <p className="services-card__content-text">Ads</p>
          </div>
        )}
      </div>
    );
  }
}
