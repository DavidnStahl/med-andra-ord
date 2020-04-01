import React from 'react';
import { Button } from '@material-ui/core';
import {useHistory} from 'react-router'

const Home = () => {
   const history = useHistory(); 

    return (
        <React.Fragment>
        <br/><br/><br/><h2>Välkomna till Med Andra Ord</h2><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Button variant="contained" color="primary" onClick={() => {history.push('/GameSettings')}}>Börja spela</Button>
        </React.Fragment>
    )
}

export default Home