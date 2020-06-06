import React, { useEffect, useContext } from "react";
import { LinearProgress } from "@material-ui/core";
import { LoadingScreenContext } from "../Contexts/LoadingScreenContext";
import { ScoresContext } from "../Contexts/ScoresContext";
import { GameSettingsContext } from "../Contexts/GameSettingsContext";
import Timer from "./Timer";

const LoadingScreen = (props) => {
  function timeOut() {
    console.log("nextteamout");
    props.setShowNextTeam(false);
    props.setShowWords(true);
  }

  return (
    <div>
      <h2>Näst på tur: Lag {props.nextTeam}</h2>
      <h2>Nästa lag börjar om..</h2>
      <Timer timeOut={timeOut} time={props.time} />
    </div>
  );
};
export default LoadingScreen;
