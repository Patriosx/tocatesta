import React, { useState } from "react";
import Title from "../Components/Title";

const PageWrapper = (props) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = theme === "light" ? "dark" : "light";
  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <main data-theme={theme}>
      <article className="main-container">
        <div className="header">
          <Title title={"Random Harmony"} />
          <div className="theme-container">
            <span
              className="btn-theme"
              onClick={handleTheme}
              style={{
                backgroundColor: `${theme === "light" ? "black" : "white"}`,
              }}
            ></span>
            <p style={{ color: `${toggleTheme}` }}>{toggleTheme}</p>
          </div>
        </div>
        {props.children}
      </article>
    </main>
  );
};

export default PageWrapper;
