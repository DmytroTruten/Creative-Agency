import "./Main.css"
import React, { Component } from "react";
import Button from "../button/Button";

class Main extends Component {
  render() {
    return (
      <main className="main">
        <h1 className="main__h1">Make your dream business goal come true</h1>
        <h4 className="main__h4">
          when you need us for improve your business, then come with us to help
          your business have reach it, you just sit and feel that goal.
        </h4>
        <Button className="main__start-project-button_mobile" text="Start Project"/>
      </main>
    );
  }
}

export default Main;
