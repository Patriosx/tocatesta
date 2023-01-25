import DisplayKey from "./Components/DisplayKey";
import DisplayProgressions from "./Components/DisplayProgressions";
import DisplayScale from "./Components/DisplayScale";
import Init from "./Components/Init";
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
      <hr />
      <DisplayProgressions />
    </PageWrapper>
  );
}

export default App;
