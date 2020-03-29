import React from 'react';
import { Button } from '@material-ui/core';
import {useHistory} from 'react-router'

const Home = () => {
   const history = useHistory(); 

    return (
        <React.Fragment>
        <h1>Välkommna till Med Andra Ord</h1>
            <Button variant="contained" color="primary" onClick={() => {history.push('/GameSettings')}}>Börja spela</Button>
        </React.Fragment>
    )
}

export default Home