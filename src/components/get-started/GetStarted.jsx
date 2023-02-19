import "./GetStarted.css"
import getStartedImage1 from "../../images/get-started/get-started-image1.svg";
import getStartedImage2 from "../../images/get-started/get-started-image2.svg";
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
        </div>
      </section>
    )
  }
}

export default GetStarted;
