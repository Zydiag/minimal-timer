import "./Switcher.css";

interface SwitchBarProps {
  mode: "StopWatch" | "Timer";
  setMode: (mode: "StopWatch" | "Timer") => void;
}

const SwitchBar = ({ mode, setMode }: SwitchBarProps) => {
  return (
    <div className="container">
      <div className="tabs">
        <input
          type="radio"
          id="radio-1"
          name="tabs"
          checked={mode === "StopWatch"}
          onChange={() => setMode("StopWatch")}
        />
        <label className="tab" htmlFor="radio-1">
          StopWatch
        </label>
        <input
          type="radio"
          id="radio-2"
          name="tabs"
          checked={mode === "Timer"}
          onChange={() => setMode("Timer")}
        />
        <label className="tab" htmlFor="radio-2">
          Timer
        </label>
        <span className="glider"></span>
      </div>
    </div>
  );
};

export default SwitchBar;
