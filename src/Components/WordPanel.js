import React, { useContext, useState, useEffect } from "react";
import { Button, LinearProgress } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import { WordsContext } from "../Contexts/WordsContext";
import { ScoresContext } from "../Contexts/ScoresContext";
import { GameSettingsContext } from "../Contexts/GameSettingsContext";
import Timer from "./Timer";

const RightAnwserButton = styled(Button)({
  background: "  rgba(82,255,125,1)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
});

const NextButton = styled(Button)({
  background: "rgba(255,157,82,1)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
});

const WordPanel = (props) => {
  const [score, setScore] = useState(0);
  const [currentWord, setCurrentWord] = useState({ word: "", _id: 0 });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [processedWordsCurrentRound, setProcessedWordsCurrentRound] = useState([]);

  function saveProcessedWordsToLs() {
    let lsUsedWords = localStorage.getItem("usedWords") ? JSON.parse(localStorage.getItem("usedWords")) : [];

    lsUsedWords = lsUsedWords.concat(processedWordsCurrentRound);
    localStorage.setItem("usedWords", JSON.stringify(lsUsedWords));
    setProcessedWordsCurrentRound([]);
  }

  function timeOut() {
    props.updateScore(props.currentTeam, score);
    props.nextTurn();
    props.setShowWords(false);
    wordProcessed(currentWord);
    saveProcessedWordsToLs();
  }

  useEffect(() => {
    console.log("WordPanel words on useEffect=", props.words);

    props.words.forEach((word) => {
      console.log("word: ", word.word);
    });

    getNextWordIndex();
  }, []);

  useEffect(() => {
    setCurrentWord(props.words[currentWordIndex]);
  }, [currentWordIndex]);

  const history = useHistory();

  const wordProcessed = (processedWord) => {
    let wordsArray = props.words;
    console.log("No of words left: ", props.words.length);

    console.log("processed word = ", processedWord);
    console.log("removing processed word from array: ", wordsArray[currentWordIndex]);

    wordsArray.splice(currentWordIndex, 1);
    console.log("removing word from array", processedWord);
    props.setWords(wordsArray);
    let processedWordsArray = [];
    processedWordsArray = processedWordsArray.concat(processedWordsCurrentRound);
    processedWordsArray.push(processedWord._id);
    setProcessedWordsCurrentRound(processedWordsArray);
    getNextWordIndex();
  };

  const getNextWordIndex = () => {
    setCurrentWordIndex(getRandomInt(props.words.length));
  };

  function getRandomInt(max) {
    console.log("max =", max);
    console.log(Math.floor(Math.random() * Math.floor(max)));

    return Math.floor(Math.random() * Math.floor(max));
  }

  const handleProcessedWord = () => {
    wordProcessed(currentWord);
  };
  return (
    <React.Fragment>
      <Timer timeOut={timeOut} time={props.noOfSecondsPerTurn} />
      <br />
      <h2>Lag {props.currentTeam}</h2>
      <h1>Antal rätt: {score}</h1>

      <h1>{currentWord.word}</h1>
      <br />
      <RightAnwserButton
        onClick={() => {
          handleProcessedWord();
          setScore(() => {
            return score + 1;
          });
        }}
      >
        Rätt svar
      </RightAnwserButton>
      <br />
      <br />
      <NextButton onClick={() => handleProcessedWord()}>Nästa ord</NextButton>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          history.push("/GameSettings");
        }}
      >
        Gå tillbaka till konfiguering
      </Button>
      <br />
      <br />
      <Button variant="contained" color="secondary" onClick={() => history.push("/")}>
        Gå tillbaka till start
      </Button>
    </React.Fragment>
  );
};

export default WordPanel;
