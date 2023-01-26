import DisplayHarmony from "./Components/DisplayHarmony";
import DisplayKey from "./Components/DisplayKey";
import DisplayProgressions from "./Components/DisplayProgressions";
import DisplayScale from "./Components/DisplayScale";
import Init from "./Components/Init";
import WriteProgression from "./Components/WriteProgression";
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
      <hr />
      <DisplayHarmony />
      <hr />
      <WriteProgression />
    </PageWrapper>
  );
}

export default App;
