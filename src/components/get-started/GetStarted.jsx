import "./GetStarted.css";
import getStartedImage1 from "../../images/get-started/get-started-image1.svg";
import getStartedImage2 from "../../images/get-started/get-started-image2.svg";
import Button from "../button/Button";
import { EllipseGrid } from "../ellipse/Ellipse";
import React, { Component } from "react";

class GetStarted extends Component {
  constructor() {
    super();
    this.state = {
      screen: "",
    };
  }

  setHeaderState = () => {
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
    this.setHeaderState();
    window.addEventListener("resize", this.setHeaderState);
  }

  render() {
    return (
      <section className={`get-started_${this.state.screen}`}>
        <div className="get-started__image-container">
          <img className="get-started-img-1" src={getStartedImage1} alt="" />
          <img className="get-started-img-2" src={getStartedImage2} alt="" />
          <EllipseGrid color="blue" />
        </div>
        <div className="get-started__text-container">
          <h2 className="get-started__header">
            Interesting Collaboration With Us?
          </h2>
          <p className="get-started__text">
            Help you to reach your business goal
          </p>
          <Button className="get-started__button" text="Get Started" />
        </div>
      </section>
    );
  }
}

export default GetStarted;
