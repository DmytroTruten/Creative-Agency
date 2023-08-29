import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
import "./styles/App/App.css";
import { ThemeArea } from "./context/ThemeContext";

const defaultState = {
  loading: true,
};

function App() {
  const [loading, setLoading] = useState(defaultState.loading);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <ThemeArea>
      <div
        className="app"
        style={{ visibility: loading ? "hidden" : "visible" }}
      >
        <Header />
        <Main />
        <About />
        <Services />
        <Portfolio />
        <Testimonial />
        <GetStarted />
        <Footer />
      </div>
    </ThemeArea>
  );
}

export default App;
