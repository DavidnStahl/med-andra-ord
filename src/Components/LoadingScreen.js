import React from 'react'
import { LinearProgress } from '@material-ui/core';

const LoadingScreen = (props) => {
    let counter = 0;

    return (
        <div>
            <h2>Näst på tur: Lag {props.NextTeam}</h2>
            <LinearProgress variant="determinate" value={counter}></LinearProgress>
        </div>
    )
}

export default LoadingScreen
