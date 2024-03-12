import { useEffect, useState } from "react";
import Play from "../../Icon/Outline/play.svg";
import Pause from "../../Icon/Outline/pause.svg";
import Minus from "../../Icon/Outline/minus-circle.svg";
import Plus from "../../Icon/Outline/plus-circle.svg";

const Timer = ({ mode }: { mode: any }) => {
  const [seconds, setSeconds] = useState(5);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);

  const handleMinusClick = () => {
    if (mode === "Timer") {
      setMinutes((min) => Math.max(0, min - 5));
    }
  };

  const handlePlusClick = () => {
    if (mode === "Timer") {
      setMinutes((min) => min + 5);
    }
  };
  const resetTimer = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

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
      setSeconds(59);
    }
    if (minutes < 0) {
      setHours((hr) => hr - 1);
      setMinutes(59);
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
        if (mode === "Timer") {
          if (seconds === 0 && minutes === 0 && hours === 0) {
            setTimerStarted(false);
            clearInterval(interval);
            return;
          }
          setSeconds((sec) => sec - 1);
        } else {
          setSeconds((sec) => sec + 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerStarted, seconds, mode]);

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
        <img src={Minus} className="minus" alt="" onClick={handleMinusClick} />
        <img
          src={!timerStarted ? Play : Pause}
          className="play-pause"
          alt=""
          onClick={() => {
            if (timerStarted) {
              setTimerStarted(false);
            } else {
              setTimerStarted(true);
              if (mode === "StopWatch") {
                resetTimer();
              }
            }
          }}
        />
        <img src={Plus} className="plus" alt="" onClick={handlePlusClick} />
      </div>
    </div>
  );
};

export default Timer;
