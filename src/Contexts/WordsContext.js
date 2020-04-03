import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const WordsContext = createContext();
const API = 'http://localhost:1337/words';



const WordsContextProvider = (props) => {
  const [word, setWord] = useState({ "word": "testword", "index": 0 });
  const [wordList, setWordList] = useState([]);

  useEffect(() => {
    fetchWords().then(() => {
      getWords();
    })
  }, [])

  const fetchWords = () => {
    return new Promise((resolve, reject) => {
      axios.get(API)
        .then((response) => {
          console.log(response.data);
          console.log(wordList);

          setWordList(() => {
            console.log("setting setWordAll");
            let wordArray = [];
            response.data.map(row => {
              wordArray.push(row.word);
            })
            return wordArray;
          })
        }).then(() => {
          console.log("resolving");
          resolve();
        })
        .catch((err) => {
          reject(err);
        })
    })

  }

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
        "word": wordList[wordIndex],
        "index": wordIndex
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