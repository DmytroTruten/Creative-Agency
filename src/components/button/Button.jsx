import React, { Component } from "react";
import playIcon from "../../images/about/play-circle.svg"

class Button extends Component {
  render() {
    return (
      <button className={this.props.className}>
        {this.props.play === 'true' && (
          <img src={playIcon} alt="" />
        )}
        {this.props.text}
      </button>
    );
  }
}

export default Button;
