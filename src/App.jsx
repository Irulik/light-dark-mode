import React, {useState} from "react";
import "./App.css";

export default function App() {
  const [theme, setTheme] = useState(() => {
    const mode = JSON.parse(localStorage.getItem("mode"));
    return mode || "light";
  });
  const switchTheme = () => {
    setTheme((cur) => {
      const newTheme = cur === "light" ? "dark" : "light";
      localStorage.setItem("mode", JSON.stringify(newTheme));
      return newTheme;
    });
  };
  console.log(theme, "theme");
  return (
    <div className="wrapper" id={theme}>
      <div className="toggle-container">
        <p style={{color: theme === "light" ? "black" : "#ee3b3b" }}
          className="change-text">{theme} mode</p>
        <input onChange={switchTheme} type="checkbox" id="toggle-btn" />
        <label htmlFor="toggle-btn" className="toggle-label"></label>
      </div>

      <div className="container">
        <div id="sun" className="shape"></div>
        <div id="moon" className="shape"></div>
      </div>
    </div>
  );
}