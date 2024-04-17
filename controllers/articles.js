const { checkExists } = require('../db/seeds/utils');
const {findArticle, findArticles, updateArticle} = require('../models/articles')


function getArticles(req,res,next) {
  const query = req.query
  return findArticles(query).then((articles)=>{
    res.status(200).send({articles})
  })
  .catch((err)=>{
    next(err)
  })
}

function getArticle(req,res,next) {
  const {article_id} = req.params
  return findArticle(article_id).then((article)=>{
    res.status(200).send({article})
  })
  .catch((err)=>{
    next(err)
  })
}

function patchArticle(req,res,next) {
  const {article_id} = req.params
  const {inc_votes} = req.body
  Promise.all([updateArticle(article_id, inc_votes), checkExists("articles", "article_id", article_id)])
  .then(([article])=>{
    res.status(200).send({article})
  })
  .catch((err)=>{
    next(err)
  })
}

module.exports = {getArticle, getArticles, patchArticle}