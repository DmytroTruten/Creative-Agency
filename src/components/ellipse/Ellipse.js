import "./Ellipse.css";
import React, { Component } from "react";

export class Ellipse extends Component {

  render() {
    return (
      <div>
        {this.props.grid === "true" && (
          <div className={`ellipse-grid__ellipse_${this.props.color}`}></div>
        )}
        {this.props.grid === "false" && (
          <div className={`ellipse_${this.props.color}`}></div>
        )}
      </div>
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
