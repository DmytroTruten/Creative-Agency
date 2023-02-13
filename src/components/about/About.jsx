import React, { Component } from "react";
import Button from "../button/Button"

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
            <h4>About Us</h4>
            <p>Our Teammates</p>
          </div>
          <div className="about__text">
            <p>
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta molestias temporibus dolor magni ut cum unde sunt provident assumenda doloribus, aspernatur sed eum reiciendis saepe pariatur illum iste. Culpa?
            </p>
          </div>
          <div className="about__buttons-container">
            <Button className="about__button" text="About Us"/>
            <Button className="about__play-button" text="About Us"/>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
