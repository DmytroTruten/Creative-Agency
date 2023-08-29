import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeArea({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("creative-agency-theme");
    return savedTheme ? JSON.parse(savedTheme) : "light";
  });
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}