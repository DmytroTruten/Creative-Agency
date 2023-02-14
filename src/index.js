import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import About from "./components/about/About";
import { Services } from "./components/services/Services";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <About />
    <Services />
  </React.StrictMode>
);
