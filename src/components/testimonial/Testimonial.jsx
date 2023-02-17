import "./Testimonial.css";
import angelRose from "../../images/testimonial/angel-rose.svg";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
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
          interval={null}
        >
          <Carousel.Item>
            <Card>
              <Card.Body>
                <div className="card-header">
                  <img className="card-image" src={angelRose} alt="" />
                  <div className="card-info">
                    <p className="card-name">Angel Rose</p>
                    <p className="card-position">Creative Manager</p>
                  </div>
                </div>
                <p className="card-text">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit”
                </p>
              </Card.Body>
            </Card>
            {this.state.screen === "desktop" && (
              <Fragment>
                <Card>
                  <Card.Body>
                    <div className="card-header">
                      <img className="card-image" src={angelRose} alt="" />
                      <div className="card-info">
                        <p className="card-name">Angel Rose</p>
                        <p className="card-position">Creative Manager</p>
                      </div>
                    </div>
                    <p className="card-text">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit”
                    </p>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <div className="card-header">
                      <img className="card-image" src={angelRose} alt="" />
                      <div className="card-info">
                        <p className="card-name">Angel Rose</p>
                        <p className="card-position">Creative Manager</p>
                      </div>
                    </div>
                    <p className="card-text">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit”
                    </p>
                  </Card.Body>
                </Card>
              </Fragment>
            )}
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Body>
                <div className="card-header">
                  <img className="card-image" src={angelRose} alt="" />
                  <div className="card-info">
                    <p className="card-name">Angel Rose</p>
                    <p className="card-position">Creative Manager</p>
                  </div>
                </div>
                <p className="card-text">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit”
                </p>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Body>
                <div className="card-header">
                  <img className="card-image" src={angelRose} alt="" />
                  <div className="card-info">
                    <p className="card-name">Angel Rose</p>
                    <p className="card-position">Creative Manager</p>
                  </div>
                </div>
                <p className="card-text">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit”
                </p>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </section>
    );
  }
}

export default Testimonial;
