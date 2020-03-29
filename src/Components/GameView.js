import React from 'react';
import { Button } from '@material-ui/core';
import {useHistory} from 'react-router';

const GameView = () => {
    const history = useHistory();
    return (
        <React.Fragment>
            <h2>Spelet har startat</h2>
            <Button variant="contained" color="primary" onClick={() => {history.push('/GameSettings')}}>Gå tillbaka till konfiguering</Button><br/><br/>
            <Button variant="contained" color="secondary" onClick={() => history.push('/')}>Gå tillbaka till start</Button>
        </React.Fragment>
    )
}

export default GameView