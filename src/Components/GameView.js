import React,{useContext,useEffect,useState} from 'react';
import { Button, LinearProgress } from '@material-ui/core';
import {useHistory} from 'react-router';


const GameView = () => {

    const [progressValue, setProgressValue] = useState(1);
    const [count, setcount] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            setcount(() =>{
                return count - 1;
            })
            setProgressValue(() => {
                return progressValue + 1.7
            });
          
          }, 1000);
          return () => clearInterval(interval);
        
    },[progressValue])
    

    

    const history = useHistory();
    return (
        <React.Fragment>
            <br/>
            <h1>Antal rätt: 4</h1>
            <h1>Tid: {count}</h1>
            <LinearProgress variant="determinate" value={progressValue} /><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <h1>Hockeyspelare</h1><br/>            
            <Button variant="contained" color="secondary">Nästa ord</Button><br/><br/><br/><br/><br/><br/><br/>                    
            <Button variant="contained" color="primary" onClick={() => {history.push('/GameSettings')}}>Gå tillbaka till konfiguering</Button><br/><br/>
            <Button variant="contained" color="secondary" onClick={() => history.push('/')}>Gå tillbaka till start</Button>
            
        </React.Fragment>
    )
}

export default GameView