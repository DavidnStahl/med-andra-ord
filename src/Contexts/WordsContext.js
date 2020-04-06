import React, { createContext, useState, useEffect } from 'react';
//import axios from 'axios';
//import fs from 'fs';

export const WordsContext = createContext();
//const API = 'http://localhost:1337/words';

const data = [
  {
    "word": "corona"
  },
  {
    "word": "sally"
  },
  {
    "word": "coronafall"
  },
  {
    "word": "brother"
  },
  {
    "word": "ciara"
  },
  {
    "word": "världsrekord"
  },
  {
    "word": "nanne"
  },
  {
    "word": "sport-bloggen"
  },
  {
    "word": "deltagaren"
  },
  {
    "word": "världsrekordet"
  },
  {
    "word": "arbetskraftsinvandring"
  },
  {
    "word": "ferm"
  },
  {
    "word": "elma"
  },
  {
    "word": "skidskytte-vm"
  },
  {
    "word": "efterfesten"
  },
  {
    "word": "faith"
  },
  {
    "word": "äventyr"
  },
  {
    "word": "coronautbrottet"
  },
  {
    "word": "kryssningsfartyget"
  },
  {
    "word": "jämställda"
  },
  {
    "word": "norgren"
  },
  {
    "word": "t-centralen"
  },
  {
    "word": "öfk"
  }
];



const WordsContextProvider = (props) => {
  const [word, setWord] = useState({
    word: "",
    index: 0
  });
  const [wordList, setWordList] = useState(data);

  useEffect(() => {
    getWords();
  }, [])


  const wordProcessed = (processedWord) => {
    console.log(`processed word: ${JSON.stringify(processedWord)}`);
    let wordsArray = wordList;
    wordsArray.splice(processedWord.index, 1);
    setWordList(wordsArray);
    getWords();
  }

  const getWords = () => {
    setWord(() => {
      let wordIndex = getRandomInt(wordList.length);
      let wordObj = {
        word: wordList[wordIndex].word,
        index: wordIndex
      };
      return wordObj;
    })

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

  }
  return (
    <WordsContext.Provider value={[word, setWord, getWords, wordProcessed]}>
      {props.children}
    </WordsContext.Provider>
  )
}


export default WordsContextProvider