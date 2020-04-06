const express = require('express');
const fs = require('fs');

const app = express();

const port = process.env.PORT || 1337;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.listen(port, () => {
  console.log('listening at', port);
});

function getWordsFromWordsFile() {
  return new Promise((resolve, reject) => {
    fs.readFile('../data.json', (err, data) => {
      if (err) {
        //console.log(err);
      } else {
        console.log(JSON.parse(data));
        resolve(JSON.parse(data));
      }
    });
  });
}

function getRandomWord() {
  return new Promise((resolve, reject) => {
    getWordsFromWordsFile().then(data => {
      let randomWord = data[getRandomInt(data.length)].word;
      resolve(randomWord);
    });
  });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

app.get('/words', (req, res) => {
  getWordsFromWordsFile().then(data => {

    res.json(data);
  });
});
app.get('/word/random', (req, res) => {
  console.log("GET /word/random, req = ", req);
  getRandomWord().then(word => {

    res.json(word);
  }).catch(err => {
    res.json(err);
  })
});
