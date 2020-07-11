import React, { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import GameSettings from "./GameSettings";
import GameView from "./GameView";
import ResultBoard from "./ResultBoard";
import Game from "./Game";
import Axios from "axios";

Axios.defaults.baseURL = "https://medandraord.herokuapp.com";

const initialTeamScore = [
  {
    team: 1,
    score: 0,
  },
  {
    team: 2,
    score: 0,
  },
];

const Main = () => {
  const [noOfTeams, setNoOfTeams] = useState(2);
  const [noOfRounds, setNoOfRounds] = useState(1);
  const [noOfSecondsPerTurn, setNoOfSecondsPerTurn] = useState(20);
  const [scoreByTeam, setScoreByTeam] = useState(initialTeamScore);
  const [words, setWords] = useState([{ word: "kalle" }]);
  const [teamNames, setTeamNames] = useState([]);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#3a4254",
        light: "#656d80",
        dark: "#131b2b",
      },
      secondary: {
        main: "#06dad8",
        light: "#68ffff",
        dark: "#00a8a7",
      },
      contrastThreshold: 3,
      text: {
        primary: "#ffffff",
        secondary: "#00000",
      },
    },
  });

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/GameSettings">
        <GameSettings teamNames={teamNames} setTeamNames={setTeamNames} setWords={setWords} words={words} setNoOfSecondsPerTurn={setNoOfSecondsPerTurn} setNoOfRounds={setNoOfRounds} noOfRounds={noOfRounds} noOfTeams={noOfTeams} setNoOfTeams={setNoOfTeams} setScoreByTeam={setScoreByTeam} />
      </Route>
      <Route path="/Game">
        <Game teamNames={teamNames} setWords={setWords} words={words} noOfSecondsPerTurn={noOfSecondsPerTurn} scoreByTeam={scoreByTeam} setScoreByTeam={setScoreByTeam} noOfRounds={noOfRounds} noOfTeams={noOfTeams} />
      </Route>
    </Switch>
  );
};

export default Main;
