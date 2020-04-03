import React from 'react';
import { Button } from '@material-ui/core';
import {useHistory} from 'react-router'

const ResultBoard = () => {
   const history = useHistory(); 

    return (
        <React.Fragment>
        <br/><br/><br/><h2>Välkomna till Med Andra Ord</h2><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Button variant="contained" color="primary" onClick={() => {history.push('/GameView')}}>Börja Nästa Omgång</Button>
        </React.Fragment>
    )
}

export default ResultBoard