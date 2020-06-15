import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import GameSettings from "./GameSettings";
import GameView from "./GameView";
import ResultBoard from "./ResultBoard";
import Game from "./Game";

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
  const [noOfRounds, setNoOfRounds] = useState(10);
  const [noOfSecondsPerTurn, setNoOfSecondsPerTurn] = useState(5);
  const [scoreByTeam, setScoreByTeam] = useState(initialTeamScore);
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/GameSettings">
        <GameSettings
          setNoOfSecondsPerTurn={setNoOfSecondsPerTurn}
          setNoOfRounds={setNoOfRounds}
          noOfRounds={noOfRounds}
          noOfTeams={noOfTeams}
          setNoOfTeams={setNoOfTeams}
          setScoreByTeam={setScoreByTeam}
        />
      </Route>
      <Route path="/GameView">
        <Game
          noOfSecondsPerTurn={noOfSecondsPerTurn}
          scoreByTeam={scoreByTeam}
          setScoreByTeam={setScoreByTeam}
          noOfRounds={noOfRounds}
          noOfTeams={noOfTeams}
        />
      </Route>
    </Switch>
  );
};

export default Main;
