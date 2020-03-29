import React, {createContext,useState,useEffect} from 'react';

export const WordsContext = createContext();


const WordsContextProvider = (props) => {
    
     return (
          <WordsContext.Provider value={[]}>
            {props.children}
          </WordsContext.Provider>
  )   
}

export default WordsContextProvider