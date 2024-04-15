const {findArticle, findArticles} = require('../models/articles')

function getArticles(req,res,next) {
  return findArticles().then(({rows})=>{
    const articles = rows
    res.status(200).send({articles})
  })
  .catch((err)=>{
    next(err)
  })
}

function getArticle(req,res,next) {
  const {article_id} = req.params
  return findArticle(article_id).then(({rows})=>{
    if(!rows[0]){
      res.status(404).send({msg: "Not found"})
    }
    const article = rows[0]
    res.status(200).send({article})
  })
  .catch((err)=>{
    next(err)
  })
}

module.exports = {getArticle, getArticles}