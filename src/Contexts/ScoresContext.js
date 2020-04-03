import React, {createContext,useState,useEffect} from 'react';

export const ScoresContext = createContext();


const ScoresContextProvider = (props) => {
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState({});


    
     return (
          <ScoresContext.Provider value={[score, setScore]}>
            {props.children}
          </ScoresContext.Provider>
  )   
}

export default ScoresContextProvider