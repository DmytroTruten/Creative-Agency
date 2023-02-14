import "./Services.css";
import socialMedia from "../../images/social-media.svg";
import searchEngine from "../../images/search-engine.svg";
import design from "../../images/design.svg";
import ads from "../../images/ads.svg";
import arrowRight from "../../images/arrow-right.svg";
import React, { Component } from "react";

export class Services extends Component {
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
        <div className="services__header-container">
          <h4 className="services__header">Our Services</h4>
          <h2 className="services__subheader">Perfect and Fast Movement</h2>
        </div>
        <div className="services__text-container">
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
        <div className="services-grid">
          <Service card="media" />
          <Service card="engine" />
          <Service card="design" />
          <Service card="ads" />
        </div>
      </section>
    );
  }
}

class Service extends Component {
  render() {
    return (
      <div className="services-grid__services-card">
        <div className="services-card__content">
          {this.props.card === "media" && (
            <div>
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
            <div>
              <img
                className="services-card__content-img"
                src={searchEngine}
                alt=""
              />
              <p className="services-card__content-text">
                Social Media Management
              </p>
            </div>
          )}
          {this.props.card === "design" && (
            <div>
              <img className="services-card__content-img" src={design} alt="" />
              <p className="services-card__content-text">
                Social Media Management
              </p>
            </div>
          )}
          {this.props.card === "ads" && (
            <div>
              <img className="services-card__content-img" src={ads} alt="" />
              <p className="services-card__content-text">
                Social Media Management
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
