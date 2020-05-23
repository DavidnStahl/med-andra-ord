import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import GameSettings from './GameSettings'
import GameView from './GameView'
import ResultBoard from './ResultBoard'


const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/GameSettings' component={GameSettings}></Route>
            <Route path='/GameView' component={GameView}></Route>
            <Route path='/ResultBoard' component={ResultBoard}></Route>
        </Switch>
    )
}

export default Main