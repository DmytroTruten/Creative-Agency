import "./Main.css";
import React, { Component } from "react";
import Button from "../button/Button";

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
      <div className="main-container">
        <main className={`main_${this.state.screen}`}>
          <h1 className={`main__h1_${this.state.screen}`}>
            Make your dream business goal come true
          </h1>
          <h4 className={`main__h4_${this.state.screen}`}>
            when you need us for improve your business, then come with us to
            help your business have reach it, you just sit and feel that goal.
          </h4>
          <Button
            className={`main__start-project-button_${this.state.screen}`}
            text="Start Project"
          />
        </main>
      </div>
    );
  }
}

export default Main;
