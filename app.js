const express = require("express")
const app = express()
const endpoints = require("./endpoints.json")
const {getTopics} = require('./controllers/topics')


//ENDPOINTS

app.get("/api", (req,res,next)=>{
  res.status(200).send(endpoints)
})

app.get("/api/topics", getTopics)

//ERROR HANDLING

app.all("*", (req, res) => {
  res.status(400).send({ msg: "Invalid path" });
});

app.use((err, req, res, next) => {
  if (err.status && err.msg) {
    res.status(err.status).send({ msg: err.msg });
  } else next(err);
});

app.use((err, req, res, next) => {
  if (err.code === "22P02") {
    res.status(400).send({ msg: "Bad Request" });
  } else next(err);
});

app.use((err, req, res, next) => {
  res.status(500).send("Server Error!");
});

module.exports = app;