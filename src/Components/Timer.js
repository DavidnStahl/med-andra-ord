import React, { Component, useState, useEffect, useContext } from "react";
import { Button, LinearProgress } from "@material-ui/core";
import GameViewContext from "../Contexts/GameViewContext";

const Timer = (props) => {
  const [count, setCount] = useState(0);
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    setCount(props.time);
    setProgressValue(50 / props.time);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(() => {
        if (count > 0) {
          return count - 1;
        } else {
          //TODO: Update state to hide component
          clearInterval(interval);
          props.timeOut();
        }
      });
      setProgressValue(getNewProgressValue(count));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count, progressValue]);

  const getNewProgressValue = (count) => {
    if (count !== 0) {
      return progressValue + 100 / props.time;
    } else {
      return 100;
    }
  };

  return (
    <div>
      <h1>Tid: {count}</h1>
      <LinearProgress variant="determinate" value={progressValue} />
    </div>
  );
};

export default Timer;
