import React, { createContext, useState, useEffect } from 'react';

export const GameViewContext = createContext();


const GameViewContextProvider = (props) => {
    const [progressValue, setProgressValue] = useState(1);
    const [count, setcount] = useState();


  return (

    <GameViewContext.Provider value={[progressValue, setProgressValue,count, setcount]}>
      {props.children}
    </GameViewContext.Provider>
  )
}

export default GameViewContextProvider