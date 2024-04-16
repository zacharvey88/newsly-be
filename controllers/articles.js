const {findArticle, findArticles} = require('../models/articles')

function getArticles(req,res,next) {
  return findArticles().then((articles)=>{
    res.status(200).send({articles})
  })
  .catch((err)=>{
    next(err)
  })
}

function getArticle(req,res,next) {
  const {article_id} = req.params
  return findArticle(article_id).then((result)=>{
    const article = result[0]
    res.status(200).send({article})
  })
  .catch((err)=>{
    next(err)
  })
}

module.exports = {getArticle, getArticles}