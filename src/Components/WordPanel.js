import React, { useContext } from 'react'
import { Button, LinearProgress } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
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

const WordPanel = () => {
    const [word, setWord, getWords, wordProcessed] = useContext(WordsContext)
    const [score, setScore, scoreByTeam, setScoreByTeam] = useContext(ScoresContext)
    const [noOfTeams, setNoOfTeams, noOfRounds, setNoOfRounds, noOfSecondsPerRound, setNoOfSecondsPerRound, count, setCount, progressValue, setProgressValue] = useContext(GameSettingsContext)
    const history = useHistory();

    const handleProcessedWord = () => {
        wordProcessed(word);
        getWords();
    }
    console.log(score);
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
            }}>Rätt svar</RightAnwserButton><br /><br />
            <NextButton onClick={() => handleProcessedWord()}>Nästa ord</NextButton><br /><br /><br /><br /><br /><br /><br />
            <Button variant="contained" color="primary" onClick={() => { history.push('/GameSettings') }}>Gå tillbaka till konfiguering</Button><br /><br />
            <Button variant="contained" color="secondary" onClick={() => history.push('/')}>Gå tillbaka till start</Button>
        </React.Fragment>
    )
}

export default WordPanel
