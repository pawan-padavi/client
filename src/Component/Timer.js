import React, { Fragment, useEffect, useRef } from "react";
import { useState } from "react";

const Timer = () => {
  const [MinuteSecond, setMinuteSecond] = useState("00:00");
  const [Counter, setCouter] = useState(false);
  const interval = useRef(0);
  const [formValues, SetFormValues] = useState({
    Minute: 0,
    Second: 0,
  });

  const date = new Date();
  const MinutesFn1 = ("0" + date.getMinutes()).slice(-2);
  const SecondsFn1 = ("0" + date.getSeconds()).slice(-2);
  // const Check =
  const showTime = MinutesFn1 + ":" + SecondsFn1;
  const newMintes = parseInt(MinutesFn1) + parseInt(formValues.Minute);
  const newSecond = parseInt(SecondsFn1) + parseInt(formValues.Second);

  // console.log(newMintes + ":" +newSecond)

  const TimeInterval = () => {
    if (!Counter) {
      interval.current = setInterval(() => {
        const date = new Date();
        const MinutesFn = ("0" + date.getMinutes()).slice(-2);
        const SecondsFn = ("0" + date.getSeconds()).slice(-2);
        // const Check =

        const xMinete = parseInt(newMintes) - parseInt(MinutesFn);
        const xSecond = parseInt(newSecond) - parseInt(SecondsFn);

        const showTime =
          ("0" + xMinete).slice(-2) + ":" + ("0" + xSecond).slice(-2);

        if (xMinete == 0 && xSecond == 0) {
          console.log("inside into 0");
          setCouter(false);
          clearInterval(interval.current);
        } else {
          console.log(
            ("0" + xMinete).slice(-2) + ":" + ("0" + xSecond).slice(-2)
          );
        }

        setMinuteSecond(showTime);
      }, 1000);
    } else {
      clearInterval(interval.current);
    }

    return () => clearInterval(interval.current);
  };

  const SetTimeOut = (e) => {
    const Name = e.target.name;
    const Value = ("0" + e.target.value).slice(-2);
    SetFormValues((prevvalue) => ({
      ...prevvalue,
      [Name]: Value,
    }));
  };

  const fnStart = () => {
    setCouter(!Counter);
    TimeInterval();
  };
  const fnPause = () => {
    clearInterval(interval.current);
  };
  return (
    <Fragment>
      <div className="container p-4">
        <label>
          <input
            min="0"
            max="59"
            className="form-control"
            value={formValues.Minute}
            onChange={(e) => SetTimeOut(e)}
            name="Minute"
            type="number"
          />
          Minutes
        </label>
        <label>
          <input
            min="0"
            max="59"
            className="form-control"
            value={formValues.Second}
            onChange={(e) => SetTimeOut(e)}
            name="Second"
            type="number"
          />
          Seconds
        </label>

        <button className="btn btn-outline-info" onClick={fnStart}>
          {!Counter ? "START" : "PAUSE / RESUME"}
        </button>
        <button className="btn btn-outline-info">RESET</button>

        <h1 data-testid="running-clock"></h1>
        <div
          className="p-4 text-center"
          style={{ borderRadius: "50px", border: "2px solid red" }}
        >
          <h2 style={{ color: "red" }}>{MinuteSecond}</h2>
        </div>
      </div>
    </Fragment>
  );
};

export default Timer;
