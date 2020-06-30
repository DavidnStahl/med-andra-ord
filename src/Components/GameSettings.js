import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, FormControl, MenuItem, InputLabel, Select, Typography, Slider, CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router";
import Axios from "axios";
import { WordsContext } from "../Contexts/WordsContext";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  slider: {
    height: theme.spacing(3),
    width: 600,
  },
  typo: {
    margin: theme.spacing(3),
    marginBottom: theme.spacing(6),
  },
}));

const timeMarks = [
  {
    value: 10,
    label: "10",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 30,
    label: "30",
  },
  {
    value: 40,
    label: "40",
  },
  {
    value: 50,
    label: "50",
  },
  {
    value: 60,
    label: "60",
  },
];

const GameSettings = (props) => {
  const history = useHistory();
  const [loadWords, setLoadWords] = useState(false);

  useEffect(() => {}, [props.words]);
  const classes = useStyles();

  const handleNoOfTeamsChange = (event) => {
    props.setNoOfTeams(event.target.value);

    let turnOrder = [];
    let scoreByTeamArray = [];

    for (let index = 1; index <= props.noOfTeams; index++) {
      turnOrder.push(index);

      scoreByTeamArray.push({
        team: index,
        score: 0,
      });
    }
    console.log("scoreByTeamArray: ", scoreByTeamArray);
    props.setScoreByTeam(scoreByTeamArray);
    console.log("nofOfTeams = ", props.noOfTeams);
    console.log("turnOrder = ", turnOrder);
  };

  const handleNoOfRoundsChange = (event) => {
    console.log(event.target.value);
    props.setNoOfRounds(event.target.value);
  };

  const handleNoOfSecondsPerRoundChange = (event, value) => {
    console.log(value);
    props.setNoOfSecondsPerTurn(value);
  };

  const getValueText = (value) => {
    return `${value} sekunder`;
  };

  function startGame() {
    setLoadWords(true);
    console.log("start game!");
    console.log("loadwords=", loadWords);
    fetchWords()
      .then((result) => {
        props.setWords(result);

        console.log("result=", result);
        console.log("words=", props.words);

        setLoadWords(false);
        history.push("/Game", { words: result });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function fetchWords() {
    const lsUsedWords = JSON.parse(localStorage.getItem("usedWords"));

    let usedWordsIds = [];

    if (lsUsedWords) {
      lsUsedWords.forEach((word) => {
        usedWordsIds.push(word);
      });
    }

    console.log("usedWordsIds=", usedWordsIds);
    return new Promise((resolve, reject) => {
      Axios.post("/words", usedWordsIds)
        .then((result) => {
          resolve(result.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  return (
    <React.Fragment>
      {loadWords ? (
        <div>
          <CircularProgress></CircularProgress>
          <br />
          <h2>Laddar ord..</h2>
        </div>
      ) : (
        <div>
          <h2>Välj spelformat</h2>
          <Button variant="contained" onClick={startGame}>
            Starta spel
          </Button>
          <br />
          <br />
          <Button
            variant="outlined"
            onClick={() => {
              history.push("/");
            }}
          >
            Gå tillbaka till start
          </Button>
          <br />

          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">Antal lag</InputLabel>
            <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled" value={props.noOfTeams} onChange={handleNoOfTeamsChange}>
              <MenuItem value={2}>
                <em>2</em>
              </MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">Antal omgångar</InputLabel>
            <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled" value={props.noOfRounds} onChange={handleNoOfRoundsChange}>
              <MenuItem value={10}>
                <em>10</em>
              </MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={40}>40</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={60}>60</MenuItem>
              <MenuItem value={70}>70</MenuItem>
            </Select>
          </FormControl>
          <Typography id="discrete-slider-custom" gutterBottom className={classes.typo}>
            Tid per omgång (sekunder)
          </Typography>
          <Slider className={classes.slider} defaultValue={20} step={null} valueLabelDisplay="on" marks={timeMarks} onChange={handleNoOfSecondsPerRoundChange} getAriaValueText={getValueText} aria-labelledby="discrete-slider-custom" />
        </div>
      )}
    </React.Fragment>
  );
};

export default GameSettings;
