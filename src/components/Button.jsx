import React from "react";
import playIcon from "../images/about/play-circle.svg";

function Button(props) {
  return (
    <button className={props.className}>
      {props.play === "true" && <img className="about__play-circle" src={playIcon} alt="" />}
      {props.text}
    </button>
  );
}

export default Button;
