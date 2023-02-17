import "./Testimonial.css";
import aboutImage from "../../images/about-image.svg";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import React, { Component } from "react";

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

  render() {
    return (
      <section className={`testimonial_${this.state.screen}`}>
        <div className="testimonial__header-container">
          <h4 className="testimonial__header">Testimonial</h4>
          <h2 className="testimonial__subheader">People Talk about us</h2>
        </div>

        <Carousel className="testimonial__carousel" controls={false}>
          <Carousel.Item>
            <Card>
              <Card.Body>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit”
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Body>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit”
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Body>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit”
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </section>
    );
  }
}

export default Testimonial;
