import DisplayHarmony from "./Components/DisplayHarmony";
import DisplayKey from "./Components/DisplayKey";
import DisplayProgressions from "./Components/DisplayProgressions";
import DisplayScale from "./Components/DisplayScale";
import Init from "./Components/Init";
import WriteProgression from "./Components/WriteProgression";
import PageWrapper from "./Pages/PageWrapper";
import "../node_modules/@picocss/pico/css/pico.min.css";

function App() {
  console.log("%c App rendered! ", "background: #222; color: yellow");
  return (
    <PageWrapper>
      {/* <Init /> */}

      <DisplayScale />
      <DisplayKey />
      <DisplayProgressions />
      <DisplayHarmony />
      <WriteProgression />
    </PageWrapper>
  );
}

export default App;
