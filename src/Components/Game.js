import React, { useEffect, useState } from "react";
import Timer from "./Timer";
import WordPanel from "./WordPanel";
import LoadingScreen from "./LoadingScreen";
import ResultBoard from "./ResultBoard";

function Game(props) {
  const [showWords, setShowWords] = useState(true);
  const [showNextTeam, setShowNextTeam] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);
  const [currentTeam, setCurrentTeam] = useState(1);

  function nextTurn() {
    if (currentTeam < props.noOfTeams) {
      setCurrentTeam(currentTeam + 1);
      setShowNextTeam(true);
    } else {
      if (currentRound < props.noOfRounds) {
        endOfRound();
      } else {
        console.log("end of game");
      }
    }
  }

  function endOfRound() {
    console.log("end of round" + currentRound);
    setShowResult(true);
  }

  function nextRound() {
    console.log("next round clicked");
    setCurrentRound(currentRound + 1);
    setCurrentTeam(1);
    setShowResult(false);
    setShowWords(true);
  }

  function updateScore(team, currentScore) {
    const newScoreByTeam = props.scoreByTeam;
    const oldScore = newScoreByTeam[team - 1].score;
    const newScore = oldScore + currentScore;
    newScoreByTeam[team - 1].score = newScore;

    props.setScoreByTeam(newScoreByTeam);
    console.log("new score by team = ", props.scoreByTeam);
  }

  function renderGame() {
    if (showWords) {
      return (
        <div>
          <WordPanel
            noOfSecondsPerTurn={props.noOfSecondsPerTurn}
            setShowWords={setShowWords}
            nextTurn={nextTurn}
            setScoreByTeam={props.setScoreByTeam}
            currentTeam={currentTeam}
            updateScore={updateScore}
          />
        </div>
      );
    } else if (showNextTeam) {
      return (
        <div>
          <LoadingScreen
            nextTeam={currentTeam}
            time={5}
            setShowWords={setShowWords}
            setShowNextTeam={setShowNextTeam}
          />
        </div>
      );
    } else if (showResult) {
      return (
        <div>
          Hello
          <ResultBoard nextRound={nextRound} scoreByTeam={props.scoreByTeam} />
        </div>
      );
    }
  }

  return <div>{renderGame()}</div>;
}

export default Game;
