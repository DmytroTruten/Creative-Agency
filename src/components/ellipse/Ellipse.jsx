import "./Ellipse.css";
import React, { Component, Fragment } from "react";

export class Ellipse extends Component {
  constructor() {
    super();
    this.state = {
      screen: "",
    };
  }

  handleEllipseState = () => {
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
    this.handleEllipseState();
    window.addEventListener("resize", this.handleEllipseState);
  }

  render() {
    return (
      <Fragment>
        {this.props.grid === "true" && (
          <div className={`ellipse-grid__ellipse_${this.props.color}`}></div>
        )}
        {this.props.grid === "false" && (
          <div
            className={`ellipse_${this.props.color}_${this.state.screen}`}
          ></div>
        )}
      </Fragment>
    );
  }
}

export class EllipseGrid extends Component {
  appendEllipse = () => {
    let ellipseArray = [];
    for (let i = 0; i < 24; i++) {
      ellipseArray.push(
        <Ellipse key={i} color={this.props.color} grid="true" />
      );
    }
    return ellipseArray;
  };

  render() {
    return (
      <div className={`ellipse-grid_${this.props.color}`}>
        {this.appendEllipse()}
      </div>
    );
  }
}
