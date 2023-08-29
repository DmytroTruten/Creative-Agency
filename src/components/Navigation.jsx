import React from "react";

function Navigation(props) {
  const scrollIntoSection = (section) => {
    section.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const appendNavigationLinks = () => {
    let linksArray = [];
    const sectionsArray = ["main", "about", "services", "portfolio"];
    const linksNamesArray = ["Home", "About", "Services", "Projects"];
    const footerSectionsArray = ["main", "about", "get-started"];
    const footerLinksNamesArray = ["Home", "About Us", "Contact Us"];

    if (props.for === "navbar-desktop") {
      for (let i = 0; i < sectionsArray.length; i++) {
        linksArray.push(
          <p
            key={i}
            onClick={() => {
              scrollIntoSection(
                document.querySelector(`.${sectionsArray[i]}_${props.screen}`)
              );
            }}
          >
            {linksNamesArray[i]}
          </p>
        );
      }
    } else if (props.for === "sidenav-mobile") {
      for (let i = 0; i < sectionsArray.length; i++) {
        linksArray.push(
          <p
            key={i}
            onClick={() => {
              scrollIntoSection(
                document.querySelector(`.${sectionsArray[i]}_${props.screen}`)
              );
              props.toggleSidenav();
            }}
          >
            {linksNamesArray[i]}
          </p>
        );
      }
    } else if (props.for === "footer") {
      for (let i = 0; i < footerSectionsArray.length; i++) {
        linksArray.push(
          <p
            key={i}
            onClick={() => {
              scrollIntoSection(
                document.querySelector(
                  `.${footerSectionsArray[i]}_${props.screen}`
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

  return <div className="header__navbar">{appendNavigationLinks()}</div>;
}

export default Navigation;
