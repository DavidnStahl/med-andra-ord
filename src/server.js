const express = require("express");
const fs = require("fs");
const { resolveSoa } = require("dns");

var cors = require("cors");
const app = express();

app.use(cors());
app.options("*", cors());

const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectID;

const port = 2000;

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.listen(port, () => {
  console.log("listening at", port);
});

function getWordsFromWordsFile() {
  console.log("getwordsfromfile");
  return new Promise((resolve, reject) => {
    fs.readFile("../words.json", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(JSON.parse(data));
        resolve(JSON.parse(data));
      }
    });
  });
}

function getWordsFromDb(query) {
  return new Promise((resolve, reject) => {
    const uri = "mongodb+srv://fredrikadmin:Krak7899!@cluster0-zg07u.mongodb.net/<dbname>?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect((err) => {
      const collection = client.db("medandraord_words").collection("word");

      collection.find(query).toArray((err, result) => {
        if (err) {
          console.log("Error! ", err);
          reject(err);
        } else {
          console.log("result= ", result);
          resolve(result);
        }
      });
      // perform actions on the collection object
      client.close();
    });
  });
}

function getRandomWord() {
  return new Promise((resolve, reject) => {
    getWordsFromWordsFile().then((data) => {
      let randomWord = data[getRandomInt(data.length)].word;
      resolve(randomWord);
    });
  });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

app.post("/words", (req, res) => {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
  console.log(req.body);

  let wordids = req.body;
  let wordObjectIds = [];

  wordids.forEach((id) => {
    wordObjectIds.push(objectId(id));
  });

  let query = { _id: { $nin: wordObjectIds } };

  getWordsFromDb(query)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get("/", (req, res) => {
  console.log("Oh Hello there!");
  getWordsFromDb({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});
app.get("/word/random", (req, res) => {
  getRandomWord()
    .then((word) => {
      res.json(word);
    })
    .catch((err) => {
      res.json(err);
    });
});
