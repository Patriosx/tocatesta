import { useContext, useEffect } from "react";
import DisplayKey from "./Components/DisplayKey";
import DisplayScale from "./Components/DisplayScale";
import Init from "./Components/Init";
import { Context } from "./Context/StateContext";
import PageWrapper from "./Pages/PageWrapper";

function App() {
  console.log("%c App rendered! ", "background: #222; color: yellow");
  return (
    <PageWrapper>
      <Init />
      <h1>Random Harmony </h1>
      <hr />
      <DisplayScale />
      <hr />
      <DisplayKey />
    </PageWrapper>
  );
}

export default App;
