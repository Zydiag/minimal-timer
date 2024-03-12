import "./App.css";
import SwitchBar from "./components/SwitchBar";
import Timer from "./components/Timer";
import Footer from "./components/Footer";
import { useState } from "react";

type MODE = "Timer" | "StopWatch";

function App() {
  const [mode, setMode] = useState<MODE>("Timer");

  return (
    <>
      <SwitchBar mode={mode} setMode={setMode} />
      <Timer mode={mode} />
      <Footer />
    </>
  );
}

export default App;
