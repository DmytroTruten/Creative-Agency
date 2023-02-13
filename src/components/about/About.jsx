import "./About.css";
import aboutImage from "../../images/about-image.svg";
import React, { Component } from "react";
import Button from "../button/Button";
import { EllipseGrid } from "../ellipse/Ellipse";

class About extends Component {
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
      <section className={`about_${this.state.screen}`}>
        <div className="about__text-container">
          <div className="about__header-container">
            <h4 className="about__header">About Us</h4>
            <h2 className="about__subheader">Our Teammate</h2>
          </div>
          <div className="about__text">
            <p>
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have, make your
              content look interesting and make people look for your business.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta
              dolor magni ut cum unde sunt provident.
            </p>
          </div>
          <div className="about__buttons-container">
            <Button className="about__button" text="About Us" />
            <Button
              className="about__play-button"
              text="About Us"
              play="true"
            />
          </div>
        </div>
        <div className="about__image-container">
          <img className="about__image" src={aboutImage} alt="" />
          <EllipseGrid color="pink"/>
        </div>
      </section>
    );
  }
}

export default About;
