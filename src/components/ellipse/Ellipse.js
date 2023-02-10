import "./Ellipse.css";
import React, { Component } from "react";

class Ellipse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "",
    };
  }
  render() {
    return <div className={`ellipse_${this.props.color}`}></div>;
  }
}

export default Ellipse;
