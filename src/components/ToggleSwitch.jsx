import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ToggleSwitch() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem("creative-agency-theme", JSON.stringify(theme));
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSwitchTheme = () => {
    const savedTheme = theme === "dark" ? "light" : "dark";
    setTheme(savedTheme);
  };

  return (
    <div className={`toggle-switch_${theme}`} onClick={handleSwitchTheme}>
      <div className="slider"></div>
    </div>
  );
}

export default ToggleSwitch;
