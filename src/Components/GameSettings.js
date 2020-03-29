import React from 'react';
import { Button } from '@material-ui/core';
import {useHistory} from 'react-router';

const GameSettings = () => {
    const history = useHistory();
    return (
        <React.Fragment>
            <h2>Välj spelformat</h2>
            <Button variant="contained" color="primary" onClick={() => {history.push('/GameView')}}>Starta spel</Button><br/><br/>
            <Button variant="contained" color="secondary" onClick={() => {history.push('/')}}>Gå tillbaka till start</Button>
        </React.Fragment>
    )
}

export default GameSettings