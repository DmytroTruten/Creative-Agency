import "./Ellipse.css";
import React, { Component } from "react";

export class Ellipse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "",
    };
  }

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
  constructor(props) {
    super(props);
    this.state = {
      screen: "",
    };
  }

  render() {
    return (
      <div className={`ellipse-grid_${this.props.color}`}>
        <Ellipse color={this.props.color} grid="true" />
        <Ellipse color={this.props.color} grid="true" />
        <Ellipse color={this.props.color} grid="true" />
        <Ellipse color={this.props.color} grid="true" />
        <Ellipse color={this.props.color} grid="true" />
        <Ellipse color={this.props.color} grid="true" />
        <Ellipse color={this.props.color} grid="true" />
        <Ellipse color={this.props.color} grid="true" />
        <Ellipse color={this.props.color} grid="true" />
        <Ellipse color={this.props.color} grid="true" />
        <Ellipse color={this.props.color} grid="true" />
        <Ellipse color={this.props.color} grid="true" />
      </div>
    );
  }
}
