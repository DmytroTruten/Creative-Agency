import Button from "../button/Button";
import React, { Component, Fragment } from "react";

class Navigation extends Component {

  scrollIntoSection = (section) => {
    section.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  appendNavigationLinks() {
    let linksArray = [];
    const sectionsArray = ["main", "about", "services", "portfolio"];
    const linksNamesArray = ["Home", "About", "Services", "Projects"];
    for (let i = 0; i < 4; i++) {
      linksArray.push(
        <p key={i}
          onClick={() => {
            this.scrollIntoSection(
              document.querySelector(
                `.${sectionsArray[i]}_${this.props.screen}`
              )
            );
          }}
        >
          {linksNamesArray[i]}
        </p>
      );
    }
    return linksArray;
  };

  render() {
    return (
      <Fragment>
        <div className="header__navbar">
          {this.appendNavigationLinks()}
        </div>
        <Button className="header__contact-button" text="Contact Us" />
      </Fragment>
    );
  }
}

export default Navigation;
