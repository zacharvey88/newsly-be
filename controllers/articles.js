const {
  selectArticle, 
  selectArticles, 
  updateArticle, 
  insertArticle, 
  removeArticle
} = require('../models/articles')


function getArticles(req,res,next) {
  const query = req.query
  return selectArticles(query)
  .then((articles)=>{
    const total_count = articles.length
    res.status(200).send({articles, total_count})
  })
  .catch((err)=>{
    next(err)
  })
}

function getArticle(req,res,next) {
  const {article_id} = req.params
  return selectArticle(article_id)
  .then((article)=>{
    res.status(200).send({article})
  })
  .catch((err)=>{
    next(err)
  })
}

function patchArticle(req,res,next) {
  const {article_id} = req.params
  const {inc_votes} = req.body
  updateArticle(article_id,inc_votes)
  .then((article)=>{
    res.status(200).send({article})
  })
  .catch((err)=>{
    next(err)
  })  
}

function postArticle(req,res,next) {
  const newArticle = req.body
  insertArticle(newArticle)
  .then((article)=>{
    res.status(201).send({article})
  })
  .catch((err)=>{
    next(err)
  })
}

function deleteArticle(req,res,next) {
  const {article_id} = req.params
  removeArticle(article_id)
  .then(()=>{
    res.status(204).send()
  })
  .catch((err)=>{
    next(err)
  })
}

module.exports = {getArticle, getArticles, patchArticle, postArticle, deleteArticle}