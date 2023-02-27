import React, { useState, useEffect } from "react";

function ToggleSwitch(props) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    window.onload = () => {
      localStorage.setItem("theme", theme);
    };
    const savedTheme = localStorage.getItem("theme");
    if (theme !== savedTheme) {
      setTheme(savedTheme);
      props.onThemeChange(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    props.onThemeChange(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className={`toggle-switch_${theme}`} onClick={toggleTheme}>
      <div className="slider"></div>
    </div>
  );
}

export default ToggleSwitch;
