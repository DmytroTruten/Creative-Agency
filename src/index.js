import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
import GetStarted from "./components/get-started/GetStarted";
import Footer from "./components/footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <About />
    <Services />
    <Portfolio />
    <Testimonial />
    <GetStarted />
    <Footer />
  </React.StrictMode>
);
