import { useEffect, useState } from "react";
import Play from "../../Icon/Outline/play.svg";
import Pause from "../../Icon/Outline/pause.svg";
import Minus from "../../Icon/Outline/minus-circle.svg";
import Plus from "../../Icon/Outline/plus-circle.svg";

type MODE = "Timer" | "StopWatch";

const Timer = () => {
  const [seconds, setSeconds] = useState(50);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  const [mode, setMode] = useState<MODE>("Timer");

  function checkLimit() {
    console.log(seconds);
    if (seconds > 60) {
      console.log(seconds);
      setMinutes((min) => min + 1);
      setSeconds(0);
    }
    if (minutes > 60) {
      setHours((hr) => hr + 1);
      setMinutes(0);
    }
    if (seconds < 0) {
      setMinutes((min) => min - 1);
      setSeconds(60);
    }
    if (minutes < 0) {
      setHours((hr) => hr - 1);
      setMinutes(60);
    }
    if (hours < 0) {
      setTimerStarted(false);
    }
  }
  useEffect(() => {
    let interval: number;

    checkLimit();
    if (timerStarted) {
      interval = setInterval(() => {
        setSeconds((sec) => sec + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerStarted, seconds]);

  const [seconds1, seconds2] = seconds.toString().padStart(2, "0").split("");
  const [min1, min2] = minutes.toString().padStart(2, "0").split("");
  const [hr1, hr2] = hours.toString().padStart(2, "0").split("");
  return (
    <div id="timer-box">
      <div id="counter">
        <div className="container">
          <span>{hr1}</span>
          <span>{hr2}</span>
          <span className="colon">:</span>
          <span>{min1}</span>
          <span>{min2}</span>
          <span className="colon">:</span>
          <span>{seconds1}</span>
          <span>{seconds2}</span>
        </div>
      </div>
      <div className="buttons">
        <img src={Minus} className="minus" alt="" />
        <img
          src={!timerStarted ? Play : Pause}
          className="play-pause"
          alt=""
          onClick={() => setTimerStarted((prev) => !prev)}
        />
        <img src={Plus} className="plus" alt="" />
      </div>
    </div>
  );
};

export default Timer;
