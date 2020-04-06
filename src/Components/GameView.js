import React, { useEffect, useContext, useState } from 'react';
import { LoadingScreenContext } from '../Contexts/LoadingScreenContext'
import { WordsContext } from '../Contexts/WordsContext'
import { ScoresContext } from '../Contexts/ScoresContext'
import { GameSettingsContext } from '../Contexts/GameSettingsContext'
import LoadingScreen from './LoadingScreen'
import WordPanel from './WordPanel'



const GameView = () => {

    const [word, setWord, getWords, wordProcessed] = useContext(WordsContext)
    const [score, setScore] = useContext(ScoresContext)
    const [noOfTeams, setNoOfTeams, noOfRounds, setNoOfRounds, noOfSecondsPerRound, setNoOfSecondsPerRound, count, setCount, progressValue, setProgressValue] = useContext(GameSettingsContext)
    const [LoadingprogressValue, setLoadingProgressValue, Loadingcounter, setLoadingcounter] = useContext(LoadingScreenContext)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(() => {
                if (count > 0) {
                    setLoadingcounter(5)
                    return count - 1;
                } else { return - 1 }
            })
            setProgressValue(() => {
                if (count > 0) { return progressValue + (100 / noOfSecondsPerRound) }
                else { return 0 }
            })
        }, 1000);
        return () => clearInterval(interval);
    }, [progressValue, word, count])

    return (
        <React.Fragment>{count < 0 ? <LoadingScreen NextTeam={3} /> : <WordPanel />}</React.Fragment>
    )
}

export default GameView