const express = require("express")
const app = express()
const endpoints = require("./endpoints.json")
const {getTopics} = require('./controllers/topics')
const {getArticle, getArticles} = require('./controllers/articles')
const {getCommentsByArticle, postComment} = require("./controllers/comments")

app.use(express.json());

//ENDPOINTS

app.get("/api", (req,res,next)=>{
  res.status(200).send({endpoints})
})

app.get("/api/topics", getTopics)

app.get("/api/articles", getArticles)

app.get("/api/articles/:article_id", getArticle)

app.get("/api/articles/:article_id/comments", getCommentsByArticle)
app.post("/api/articles/:article_id/comments", postComment)

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
    res.status(400).send({ msg: "Bad request" });
  } else next(err);
});

app.use((err, req, res, next) => {
  if (err.code === "23503") {
    res.status(404).send({ msg: `Not found` });
  } else next(err);
});

app.use((err, req, res, next) => {
  res.status(500).send("Server Error!");
});

module.exports = app;