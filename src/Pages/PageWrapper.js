import React, { useState } from "react";
import Title from "../Components/Title";

const PageWrapper = (props) => {
  const [theme, setTheme] = useState("light");
  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <main data-theme={theme}>
      {/* <div>
        <a href="#" role="button" className="outline" onClick={handleTheme}>
          Light
        </a>
        <a href="#" role="button" className="contrast" onClick={handleTheme}>
          Dark
        </a>
      </div> */}

      <article className="main-container">
        <Title title={"Random Harmony"} />
        {props.children}
      </article>
    </main>
  );
};

export default PageWrapper;
