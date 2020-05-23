import React, { createContext, useState, useEffect } from 'react';

export const ScoresContext = createContext();


const ScoresContextProvider = (props) => {
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState({});
  const [scoreByTeam, setScoreByTeam] = useState([
    {
      "team": 1,
      "score": 0
    },
    {
      "team": 2,
      "score": 0
    }
  ]);



  return (
    <ScoresContext.Provider value={[score, setScore, scoreByTeam, setScoreByTeam]}>
      {props.children}
    </ScoresContext.Provider>
  )
}

export default ScoresContextProvider