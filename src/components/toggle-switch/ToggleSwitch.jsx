import React, { useState, useEffect } from "react";

function ToggleSwitch(props) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let savedThemeForResize = localStorage.getItem("theme");
    window.onload = () => {
      let savedThemeOnLoad = localStorage.getItem("theme");
      if (savedThemeOnLoad === null) {
        localStorage.setItem("theme", theme);
        savedThemeOnLoad = "light";
      }
    };
    if (savedThemeForResize !== null) {
      setTheme(savedThemeForResize);
      props.onThemeChange(savedThemeForResize);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme);
    props.onThemeChange(savedTheme);
  };

  return (
    <div className={`toggle-switch_${theme}`} onClick={toggleTheme}>
      <div className="slider"></div>
    </div>
  );
}

export default ToggleSwitch;
