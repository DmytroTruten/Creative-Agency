import "./Main.css";
import mainImage from "../../images/main/main-image.svg";
import mainReview from "../../images/main/main-review.svg";
import mainRate from "../../images/main/main-rate.svg";
import React, { Component } from "react";
import Button from "../button/Button";
import { Ellipse, EllipseGrid } from "../ellipse/Ellipse";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      screen: "",
    };
  }

  updateMainState = () => {
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
    this.updateMainState();
    window.addEventListener("resize", this.updateMainState);
  }

  render() {
    return (
      <main className={`main_${this.state.screen}`}>
        <div className="main__text-container">
          <h1 className="main__h1">Make your dream business goal come true</h1>
          <p className="main__p">
            when you need us for improve your business, then come with us to
            help your business have reach it, you just sit and feel that goal.
          </p>
          <Button className="main__start-project-button" text="Start Project" />
          <Ellipse color="red" grid="false" />
          <Ellipse color="blue" grid="false" />
        </div>
        <div className="main__image-container">
          <div className="main__inner-image-container">
            <img className="main__image" src={mainImage} alt="" />
            <EllipseGrid color="red" grid="true" />
            <EllipseGrid color="blue" grid="true" />
          </div>
          <img className="main__review-image" src={mainReview} alt="" />
          <img className="main__rate-image" src={mainRate} alt="" />
          <Ellipse color="red" grid="false" />
          <Ellipse color="blue" grid="false" />
        </div>
      </main>
    );
  }
}

export default Main;
