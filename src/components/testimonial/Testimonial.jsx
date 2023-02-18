import "./Testimonial.css";
import angelRose from "../../images/testimonial/angel-rose.svg";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { EllipseGrid } from "../ellipse/Ellipse";
import React, { Component, Fragment } from "react";

class Testimonial extends Component {
  constructor() {
    super();
    this.state = {
      screen: "",
    };
  }

  updateTestimonialState = () => {
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
    this.updateTestimonialState();
    window.addEventListener("resize", this.updateTestimonialState);
  }

  appendCarouselItem = () => {
    let carouselItemArray = [];
    for (let i = 0; i < 3; i++) {
      carouselItemArray.push(
        <Carousel.Item key={i}>
          {this.state.screen === "mobile" && <TestimonialCard quantity="1" />}
          {this.state.screen === "desktop" && <TestimonialCard quantity="3" />}
        </Carousel.Item>
      );
    }
    return carouselItemArray;
  };

  render() {
    return (
      <section className={`testimonial_${this.state.screen}`}>
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
          {this.appendCarouselItem()}
        </Carousel>
        <EllipseGrid color="blue"/>
        <EllipseGrid color="blue"/>
      </section>
    );
  }
}

class TestimonialCard extends Component {
  appendCards = () => {
    let cardsArray = [];
    for (let i = 0; i < this.props.quantity; i++) {
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

  render() {
    return <Fragment>{this.appendCards()}</Fragment>;
  }
}

export default Testimonial;
