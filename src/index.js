import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import StateContext from "./Context/StateContext";

ReactDOM.render(
  <StateContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateContext>,
  document.getElementById("root")
);
