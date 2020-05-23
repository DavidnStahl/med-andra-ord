import React, { useContext, useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router'
import { ScoresContext } from '../Contexts/ScoresContext'

const ResultBoard = () => {
    const history = useHistory();
    const [scoreByTeam, setScoreByTeam] = useContext(ScoresContext);
    let teamStanding;

    const getTeamStanding = () => {
        let standing = scoreByTeam;
        console.log('getTeamStanding: standing =', scoreByTeam);

        //standing.sort(sortByHighestScore);

        const listItems = standing.map((item) =>
            <li>{item.team} - {item.score}</li>
        );

        return <ul>{listItems}</ul>;
    }

    const sortByHighestScore = (a, b) => {
        let comparison = 0;

        if (a.score > b.score) {
            comparison = 1;
        } else if (a.score < b.score) {
            comparison = -1;
        }
        return comparison;
    }

    teamStanding = getTeamStanding();

    return (
        <React.Fragment>

            <br /><br /><br /><h2>Resultat:</h2><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            {teamStanding}
            <Button variant="contained" color="primary" onClick={() => { history.push('/GameView') }}>Börja Nästa Omgång</Button>
        </React.Fragment>
    )
}

export default ResultBoard