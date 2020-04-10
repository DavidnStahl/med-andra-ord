import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl, MenuItem, InputLabel, Select, Typography, Slider } from '@material-ui/core';
import { useHistory } from 'react-router';
import { GameSettingsContext } from '../Contexts/GameSettingsContext'
import { ScoresContext } from '../Contexts/ScoresContext';

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
        width: 600
    },
    typo: {
        margin: theme.spacing(3),
        marginBottom: theme.spacing(6)
    }
}));

const timeMarks = [
    {
        value: 10,
        label: "10"
    },
    {
        value: 20,
        label: "20"
    },
    {
        value: 30,
        label: "30"
    },
    {
        value: 40,
        label: "40"
    },
    {
        value: 50,
        label: "50"
    },
    {
        value: 60,
        label: "60"
    }
]

const GameSettings = () => {
    const history = useHistory();
    /*
     const [noOfTeams, setNoOfTeams] = useState('2');
     const [noOfRounds, setNoOfRounds] = useState('10');
     const [noOfSecondsPerRound, setNoOfSecondsPerRound] = useState(20);*/
    const [noOfTeams,
        setNoOfTeams,
        noOfRounds,
        setNoOfRounds,
        noOfSecondsPerRound,
        setNoOfSecondsPerRound,
        count,
        setcount,
        setCurrentTeam,
        setTurnOrder
    ] = useContext(GameSettingsContext)

    const [scoreByTeam, setScoreByTeam] = useContext(ScoresContext);

    useEffect(() => {


    }, [])
    const classes = useStyles();

    const handleNoOfTeamsChange = (event) => {
        let numberOfTeams = event.target.value;
        setNoOfTeams(numberOfTeams);

        let turnOrder = [];
        let scoreByTeamArray = [];

        for (let index = 1; index <= numberOfTeams; index++) {
            turnOrder.push(index);

            scoreByTeamArray.push({
                "team": index,
                "score": 0
            });

        }
        console.log("scoreByTeamArray: ", scoreByTeamArray);
        setTurnOrder(turnOrder);
        setScoreByTeam(scoreByTeamArray);
        console.log("nofOfTeams = ", numberOfTeams);
        console.log("turnOrder = ", turnOrder);

        
    }

    const handleNoOfRoundsChange = (event) => {
        console.log(event.target.value);
        setNoOfRounds(event.target.value);
    }

    const handleNoOfSecondsPerRoundChange = ((event, value) => {
        console.log(noOfSecondsPerRound)
        setNoOfSecondsPerRound(value);
        setcount(value)
    })

    const getValueText = (value) => {
        return `${value} sekunder`;
    }



    return (
        <React.Fragment>
            <h2>Välj spelformat</h2>
            <Button variant="contained" color="primary" onClick={() => { history.push('/GameView') }}>Starta spel</Button><br /><br />
            <Button variant="contained" color="secondary" onClick={() => { history.push('/') }}>Gå tillbaka till start</Button>
            <br />

            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">Antal lag</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={noOfTeams}
                    onChange={handleNoOfTeamsChange}
                >
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
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={noOfRounds}
                    onChange={handleNoOfRoundsChange}
                >
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
            <Slider className={classes.slider}
                defaultValue={20}
                step={null}
                valueLabelDisplay="on"
                marks={timeMarks}
                onChange={handleNoOfSecondsPerRoundChange}
                getAriaValueText={getValueText}
                aria-labelledby="discrete-slider-custom"
            />
        </React.Fragment>
    )
}

export default GameSettings