import React, { useEffect, useContext, useState } from "react";
import { LoadingScreenContext } from "../Contexts/LoadingScreenContext";
import { WordsContext } from "../Contexts/WordsContext";
import { ScoresContext } from "../Contexts/ScoresContext";
import { GameSettingsContext } from "../Contexts/GameSettingsContext";
import { GameViewContext } from "../Contexts/GameViewContext";
import LoadingScreen from "./LoadingScreen";
import ResultBoard from "./ResultBoard";
import WordPanel from "./WordPanel";
import Timer from "./Timer";

const GameView = (props) => {
  const [showWordPanel, setShowWordPanel] = useState(true);
  const [showNextTeam, setShowNextTeam] = useState(false);
  const [word, setWord, getWords, wordProcessed] = useContext(WordsContext);
  const [score, setScore, scoreByTeam, setScoreByTeam] = useContext(ScoresContext);
  const [noOfTeams, setNoOfTeams, noOfRounds, setNoOfRounds, noOfSecondsPerRound, setNoOfSecondsPerRound, count, setCount, progressValue, setProgressValue, currentTeam, setCurrentTeam, turnOrder, setTurnOrder, currentRound, setCurrentRound] = useContext(GameSettingsContext);
  const [LoadingprogressValue, setLoadingProgressValue, Loadingcounter, setLoadingcounter] = useContext(LoadingScreenContext);
  const [newRound, setNewRound] = useState(false);
  let game;

  const endTurn = () => {
    console.log("team: " + currentTeam + " ended with " + score + " correct answers");
    let newScoreByTeam = scoreByTeam;
    console.log("newscoreByTeam=", newScoreByTeam);
    newScoreByTeam[currentTeam - 1].score = score;
    console.log("newscore = " + newScoreByTeam);
    setScoreByTeam(newScoreByTeam);

    if (noOfTeams > currentTeam) {
      setCurrentTeam(currentTeam + 1);
    } else {
      //new round
      setCurrentRound(currentRound + 1);
      setNewRound(true);
    }
  };

  useEffect(() => {
    console.log("useEffect: ");
    if (!newRound) {
      const interval = setInterval(() => {
        setCount(() => {
          if (count > 0) {
            setLoadingcounter(5);
            return count - 1;
          } else {
            if (count === 0) {
              endTurn();
            }
            return -1;
          }
        });
        setProgressValue(() => {
          if (count > 0) {
            return progressValue + 100 / noOfSecondsPerRound;
          } else {
            return 0;
          }
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [progressValue, word, count]);

  const renderGame = () => {
    if (count > 0) {
      if (!newRound && showWordPanel) {
        return (
          <div>
            <Timer noOfSeconds={noOfSecondsPerRound} setShowTimer={setShowWordPanel} />
            <WordPanel words={props.location.state.words} setWords={props.setWords} />
          </div>
        );
      } else {
        return <ResultBoard />;
      }
    } else if (showNextTeam) {
      return (
        <div>
          <Timer noOfSeconds={noOfSecondsPerRound} setShowTimer={setShowNextTeam} />
          <LoadingScreen NextTeam={currentTeam} />
        </div>
      );
    }
  };
  game = renderGame();

  return <React.Fragment>{game}</React.Fragment>;
};

export default GameView;
