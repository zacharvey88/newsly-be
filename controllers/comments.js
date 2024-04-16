const {findCommentsByArticle} = require('../models/comments')
const {checkArticleExists} = require('../models/articles')

function getCommentsByArticle(req,res,next) {
  const {article_id} = req.params
  Promise.all([findCommentsByArticle(article_id), checkArticleExists(article_id)])
    .then(([comments])=>{
      res.status(200).send({comments})
    })
    .catch((err)=>{
      next(err)
    })
}

module.exports = {getCommentsByArticle}