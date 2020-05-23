import React, { createContext, useState, useEffect } from 'react';

export const GameSettingsContext = createContext();


const GameSettingsContextProvider = (props) => {
  const [noOfTeams, setNoOfTeams] = useState('2');
  const [noOfRounds, setNoOfRounds] = useState('10');
  const [noOfSecondsPerRound, setNoOfSecondsPerRound] = useState(20);
  const [progressValue, setProgressValue] = useState(0);
  const [count, setCount] = useState(noOfSecondsPerRound);
  const [currentTeam, setCurrentTeam] = useState(1);
  const [turnOrder, setTurnOrder] = useState([1, 2]);
  const [currentRound, setCurrentRound] = useState(1);



  return (

    <GameSettingsContext.Provider value={[noOfTeams, setNoOfTeams, noOfRounds, setNoOfRounds, noOfSecondsPerRound, setNoOfSecondsPerRound, count, setCount, progressValue, setProgressValue, currentTeam, setCurrentTeam, turnOrder, setTurnOrder, currentRound, setCurrentRound]}>
      {props.children}
    </GameSettingsContext.Provider>
  )
}

export default GameSettingsContextProvider