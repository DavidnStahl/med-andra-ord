import React, {createContext,useState,useEffect} from 'react';

export const WordsContext = createContext();


const WordsContextProvider = (props) => {
    const [word, setWord] = useState();
    const [allword, setWordAll] = useState(["Ishockey","Banan","Äpple","Jordgubb","Öl","Semester","Fredagskväll","Programmering"]);

    useEffect(() => {
      getWords();
    },[])
    const getWords =  () =>{
      console.log(allword)
      setWord(() =>{
        return allword[getRandomInt(allword.length)]
      })
      
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
         
    }
     return (
          <WordsContext.Provider value={[word, setWord, getWords]}>
            {props.children}
          </WordsContext.Provider>
  )   
}

export default WordsContextProvider