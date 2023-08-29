import React, { useState, useEffect } from "react";
import { EllipseGrid } from "./Ellipse";
import Button from "./Button";
import getStartedImage1 from "../images/get-started/get-started-image1.svg";
import getStartedImage2 from "../images/get-started/get-started-image2.svg";
import "../styles/GetStarted/GetStarted.css";

function GetStarted() {
  const [screen, setScreenState] = useState("");

  useEffect(() => {
    handleGetStartedState();
    window.addEventListener("resize", handleGetStartedState);

    return () => {
      window.removeEventListener("resize", handleGetStartedState);
    };
  }, []);

  const handleGetStartedState = () => {
    if (window.innerWidth <= 768) {
      setScreenState("mobile");
    } else if (window.innerWidth > 768) {
      setScreenState("desktop");
    }
  };

  return (
    <section className={`get-started_${screen}`}>
      <div className="get-started__image-container">
        <img className="get-started-img-1" src={getStartedImage1} alt="" />
        <img className="get-started-img-2" src={getStartedImage2} alt="" />
        <EllipseGrid color="blue" />
        <div className="ellipse-grid-red-container">
          <EllipseGrid color="red" />
          <EllipseGrid color="red" />
        </div>
      </div>
      <div className="get-started__text-container">
        <h2 className="get-started__header">
          Interesting Collaboration With Us?
        </h2>
        <p className="get-started__text">
          Help you to reach your business goal
        </p>
        <Button className="get-started__button" text="Get Started" />
      </div>
    </section>
  );
}

export default GetStarted;
