import React from 'react';
import './App.css';
import Main from './Components/Main'
import GameSettingsContextProvider from './Contexts/GameSettingsContext';
import ScoresContextProvider from './Contexts/ScoresContext';
import WordsContextProvider from './Contexts/WordsContext';


function App() {
  return (
    <div className="App">
    <GameSettingsContextProvider>
    <ScoresContextProvider>
    <WordsContextProvider>
      <Main/>
    </WordsContextProvider>
    </ScoresContextProvider>
    </GameSettingsContextProvider>
    </div>
  );
}

export default App;
