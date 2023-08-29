import React, { useState, useEffect, Fragment } from "react";
import { EllipseGrid } from "./Ellipse";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import angelRose from "../images/testimonial/angel-rose.svg";
import "../styles/Testimonial/Testimonial.css";

function Testimonial() {
  const [screen, setScreenState] = useState("");

  useEffect(() => {
    handleTestimonialState();
    window.addEventListener("resize", handleTestimonialState);

    return () => {
      window.removeEventListener("resize", handleTestimonialState);
    };
  }, []);

  const handleTestimonialState = () => {
    if (window.innerWidth <= 768) {
      setScreenState("mobile");
    } else if (window.innerWidth > 768) {
      setScreenState("desktop");
    }
  };

  const appendCarouselItem = () => {
    let carouselItemArray = [];
    for (let i = 0; i < 3; i++) {
      carouselItemArray.push(
        <Carousel.Item key={i}>
          {screen === "mobile" && <TestimonialCard quantity="1" />}
          {screen === "desktop" && <TestimonialCard quantity="3" />}
        </Carousel.Item>
      );
    }
    return carouselItemArray;
  };

  return (
    <section className={`testimonial_${screen}`}>
      <div className="testimonial__header-container">
        <h4 className="testimonial__header">Testimonial</h4>
        <h2 className="testimonial__subheader">People Talk about us</h2>
      </div>
      <Carousel
        className="testimonial__carousel"
        controls={false}
        indicators={false}
        interval={8000}
      >
        {appendCarouselItem()}
      </Carousel>
      <EllipseGrid color="blue" />
      <EllipseGrid color="blue" />
    </section>
  );
}

function TestimonialCard(props) {
  const appendCards = () => {
    let cardsArray = [];
    for (let i = 0; i < props.quantity; i++) {
      cardsArray.push(
        <Card key={i}>
          <Card.Body>
            <div className="card-header">
              <img className="card-image" src={angelRose} alt="" />
              <div className="card-info">
                <p className="card-name">Angel Rose</p>
                <p className="card-position">Creative Manager</p>
              </div>
            </div>
            <p className="card-text">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit”
            </p>
          </Card.Body>
        </Card>
      );
    }
    return cardsArray;
  };

  return <Fragment>{appendCards()}</Fragment>;
}

export default Testimonial;
