import "./ToggleSwitch.css"
import React, { useState } from "react";

function ToggleSwitch(props) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    props.onThemeChange(newTheme);
  }

  return(
    <div className={`toggle-switch_${theme}`} onClick={toggleTheme}>
      <div className="slider"></div>
    </div>
  )
}

export default ToggleSwitch;