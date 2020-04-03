import React, { useEffect, useContext } from 'react';
import { Button, LinearProgress } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import { GameViewContext } from '../Contexts/GameViewContext'
import { WordsContext } from '../Contexts/WordsContext'
import { ScoresContext } from '../Contexts/ScoresContext'
import { GameSettingsContext } from '../Contexts/GameSettingsContext'

const RightAnwserButton = styled(Button)({
    background: '  rgba(82,255,125,1)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
});

const NextButton = styled(Button)({
    background: 'rgba(255,157,82,1)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
});


const GameView = () => {

    const [word, setWord, getWords, wordProcessed] = useContext(WordsContext)
    const [score, setScore] = useContext(ScoresContext)
    const [noOfTeams, setNoOfTeams, noOfRounds, setNoOfRounds, noOfSecondsPerRound, setNoOfSecondsPerRound, count, setCount, progressValue, setProgressValue] = useContext(GameSettingsContext)



    useEffect(() => {
        const interval = setInterval(() => {
            setCount(() => {
                if (count > 0) {
                    return count - 1;
                } else {
                    return count + 1
                }
            })
            setProgressValue(() => {
                if (count > 0) { return progressValue + (100 / noOfSecondsPerRound) }
                else { return 0 }
            });
        }, 1000);
        return () => clearInterval(interval);

    }, [progressValue, word])

    const handleProcessedWord = () => {
        wordProcessed(word);
        getWords();
    }

    const history = useHistory();
    return (
        <React.Fragment>
            <br />
            <h1>Antal rätt: {score}</h1>
            <h1>Tid: {count}</h1>
            <LinearProgress variant="determinate" value={progressValue} /><br /><br /><br /><br /><br /><br /><br />
            <h1>{word.word}</h1><br />

            <RightAnwserButton onClick={() => {
                handleProcessedWord()
                setScore(() => {
                    return score + 1
                })
            }}>Rätt svar</RightAnwserButton><br /><br /><NextButton onClick={() => handleProcessedWord()}>Nästa ord</NextButton><br /><br /><br /><br /><br /><br /><br />
            <Button variant="contained" color="primary" onClick={() => { history.push('/GameSettings') }}>Gå tillbaka till konfiguering</Button><br /><br />
            <Button variant="contained" color="secondary" onClick={() => history.push('/')}>Gå tillbaka till start</Button>

        </React.Fragment>
    )
}

export default GameView