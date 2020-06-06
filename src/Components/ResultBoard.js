import React, { useContext, useEffect, useState } from "react";
import { Button } from "@material-ui/core";

const ResultBoard = (props) => {
  const getTeamStanding = () => {
    let newTeamStanding = props.scoreByTeam;

    const listItems = newTeamStanding.map((item) => (
      <li key={item.team}>
        Lag {item.team} - {item.score} poäng
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

  return (
    <React.Fragment>
      <h2>Resultat:</h2>
      {getTeamStanding()}
      <Button variant="contained" color="primary" onClick={handleOnClick}>
        Börja Nästa Omgång
      </Button>
    </React.Fragment>
  );
};

export default ResultBoard;
