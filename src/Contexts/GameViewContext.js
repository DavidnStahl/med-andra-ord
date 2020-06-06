import React, { createContext, useState } from 'react';

export const GameViewContext = createContext();


const GameViewContextProvider = (props) => {
  const [progressValue, setProgressValue] = useState(1);
  const [count, setcount] = useState();
  const [showTimer, setShowTimer] = useState(false);


  return (

    <GameViewContext.Provider value={[showTimer, setShowTimer]}>
      {props.children}
    </GameViewContext.Provider>
  )
}

export default GameViewContextProvider