import React, { useEffect, useContext } from 'react'
import { LinearProgress } from '@material-ui/core';
import { LoadingScreenContext } from '../Contexts/LoadingScreenContext'
import { ScoresContext } from '../Contexts/ScoresContext'
import { GameSettingsContext } from '../Contexts/GameSettingsContext'

const LoadingScreen = (props) => {
    const [LoadingprogressValue, setLoadingProgressValue, Loadingcounter, setLoadingcounter] = useContext(LoadingScreenContext)
    const [score, setScore] = useContext(ScoresContext)
    const [noOfTeams, setNoOfTeams, noOfRounds, setNoOfRounds, noOfSecondsPerRound, setNoOfSecondsPerRound, count, setCount, progressValue, setProgressValue] = useContext(GameSettingsContext)

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingcounter(() => {
                if (Loadingcounter > 0) {
                    return Loadingcounter - 1;
                } else {
                    if (Loadingcounter === 0) {
                        setCount(noOfSecondsPerRound)
                        setScore(0)
                    }
                    return - 1
                }
            })
            setLoadingProgressValue(() => {
                if (Loadingcounter > 0) { return LoadingprogressValue + (100 / 5) }
                else { return 0 }
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [LoadingprogressValue])

    return (
        <div>
            <h2>Näst på tur: Lag {props.NextTeam}</h2>
            <h2>Nästa lag börjar om: {Loadingcounter}</h2>
            <LinearProgress variant="determinate" value={LoadingprogressValue}></LinearProgress>
        </div>
    )
}
export default LoadingScreen
