import "../pages/css/local-styles.css";
import Header from "./Header";
import { useState } from "react";
import Speakers from "./Speakers";
import { data } from "../SpeakerData";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div
      className={
        theme === "light" ? "container-fluid light" : "container-fluid dark"
      }
    >
      <Header theme={theme} />
      <Speakers data={data} theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
