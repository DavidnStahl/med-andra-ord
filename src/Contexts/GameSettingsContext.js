import React, {createContext,useState,useEffect} from 'react';

export const GameSettingsContext = createContext();


const GameSettingsContextProvider = (props) => {
    
     return (
          <GameSettingsContext.Provider value={[]}>
            {props.children}
          </GameSettingsContext.Provider>
  )   
}

export default GameSettingsContextProvider