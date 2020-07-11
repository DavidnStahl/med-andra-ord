import React, { useContext, useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

const ResultBoard = (props) => {
  const history = useHistory();
  const getTeamStanding = () => {
    let newTeamStanding = props.scoreByTeam;

    const listItems = newTeamStanding.map((item) => (
      <li key={item.team}>
        {props.teamNames[item.team - 1]} - {item.score} poäng
      </li>
    ));

    return <ul>{listItems}</ul>;
  };

  const sortByHighestScore = (a, b) => {
    let comparison = 0;

    if (a.score > b.score) {
      comparison = 1;
    } else if (a.score < b.score) {
      comparison = -1;
    }
    return comparison;
  };

  function handleOnClick() {
    props.nextRound();
  }

  function handlePlayAgain() {
    history.push("/");
  }

  if (!props.endOfGame) {
    return (
      <React.Fragment>
        <h2>Resultat för runda {props.currentRound}</h2>
        {getTeamStanding()}
        <Button variant="contained" onClick={handleOnClick}>
          Nästa runda
        </Button>
      </React.Fragment>
    );
  } else {
    return (
      <div>
        <h2>Spelet är över! Resultat:</h2>
        {getTeamStanding()}
        <Button variant="contained" color="primary" onClick={handlePlayAgain}>
          Spela igen
        </Button>
      </div>
    );
  }
  /*
  return (
    <React.Fragment>
      {!props.endOfGame ? <h2>Resultat för runda {props.currentRound}:</h2> : <h2>Spelet är över! Resultat:</h2>}

      {getTeamStanding()}
      {!props.endOfGame ? (
        <Button variant="contained" color="primary" onClick={handleOnClick}>
          Börja Nästa Omgång
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={history.push("/")}>
          Spela igen
        </Button>
      )}
    </React.Fragment>
  );
  */
};
export default ResultBoard;
