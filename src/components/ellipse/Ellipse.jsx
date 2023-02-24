import "./Ellipse.css";
import React, { Fragment, useState, useEffect } from "react";

export function Ellipse(props) {
  const [screen, setScreenState] = useState("");

  useEffect(() => {
    handleEllipseState();
    window.addEventListener("resize", handleEllipseState);

    return () => {
      window.removeEventListener("resize", handleEllipseState);
    };
  }, []);

  const handleEllipseState = () => {
    if (window.innerWidth <= 768) {
      setScreenState("mobile");
    } else if (window.innerWidth > 768) {
      setScreenState("desktop");
    }
  };

  return (
    <Fragment>
      {props.grid === "true" && (
        <div className={`ellipse-grid__ellipse_${props.color}`}></div>
      )}
      {props.grid === "false" && (
        <div className={`ellipse_${props.color}_${screen}`}></div>
      )}
    </Fragment>
  );
}

export function EllipseGrid(props) {
  const appendEllipse = () => {
    let ellipseArray = [];
    for (let i = 0; i < 24; i++) {
      ellipseArray.push(<Ellipse key={i} color={props.color} grid="true" />);
    }
    return ellipseArray;
  };

  return (
    <div className={`ellipse-grid_${props.color}`}>
      {appendEllipse()}
    </div>
  );
}
