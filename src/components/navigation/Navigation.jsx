import React, { Component } from "react";

class Navigation extends Component {
  scrollIntoSection = (section) => {
    section.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  appendNavigationLinks = () => {
    let linksArray = [];
    const sectionsArray = ["main", "about", "services", "portfolio"];
    const linksNamesArray = ["Home", "About", "Services", "Projects"];
    const footerSectionsArray = ["main", "about", "get-started"];
    const footerLinksNamesArray = ["Home", "About Us", "Contact Us"];

    if (this.props.for === "navbar-desktop") {
      for (let i = 0; i < sectionsArray.length; i++) {
        linksArray.push(
          <p
            key={i}
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
    } else if (this.props.for === "sidenav-mobile") {
      for (let i = 0; i < sectionsArray.length; i++) {
        linksArray.push(
          <p
            key={i}
            onClick={() => {
              this.scrollIntoSection(
                document.querySelector(
                  `.${sectionsArray[i]}_${this.props.screen}`
                )
              );
              this.props.toggleSidenav();
            }}
          >
            {linksNamesArray[i]}
          </p>
        );
      }
    } else if (this.props.for === "footer") {
      for (let i = 0; i < footerSectionsArray.length; i++) {
        linksArray.push(
          <p
            key={i}
            onClick={() => {
              this.scrollIntoSection(
                document.querySelector(
                  `.${footerSectionsArray[i]}_${this.props.screen}`
                )
              );
            }}
          >
            {footerLinksNamesArray[i]}
          </p>
        );
      }
    }
    return linksArray;
  };

  render() {
    return <div className="header__navbar">{this.appendNavigationLinks()}</div>;
  }
}

export default Navigation;
