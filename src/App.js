import React from 'react';
import './App.css';
import Main from './Components/Main'
import GameSettingsContextProvider from './Contexts/GameSettingsContext';
import ScoresContextProvider from './Contexts/ScoresContext';
import WordsContextProvider from './Contexts/WordsContext';
import GameViewContextProvider from './Contexts/GameViewContext';
import LoadingScreenContextProvider from './Contexts/LoadingScreenContext';
import Timer from './Components/Timer';


function App() {
  return (
    <div className="App">

      <GameSettingsContextProvider>
        <ScoresContextProvider>
          <WordsContextProvider>
            <GameViewContextProvider>
              <LoadingScreenContextProvider>
                <Main />
              </LoadingScreenContextProvider>
            </GameViewContextProvider>
          </WordsContextProvider>
        </ScoresContextProvider>
      </GameSettingsContextProvider>

      {
        /*
        <ScoresContextProvider>
        <GameViewContextProvider>
          <Timer noOfSeconds={10} />
        </GameViewContextProvider>
      </ScoresContextProvider>
      */
      }


    </div>
  );
}

export default App;
