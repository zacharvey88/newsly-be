const { checkExists } = require('../db/seeds/utils');
const {
  selectCommentsByArticle, 
  insertComment, 
  removeComment, 
  updateComment
} = require('../models/comments')

function getCommentsByArticle(req,res,next) {
  const {article_id} = req.params
  Promise.all([selectCommentsByArticle(article_id), checkExists("articles", "article_id",article_id)])
    .then(([comments])=>{
      res.status(200).send({comments})
    })
    .catch((err)=>{
      next(err)
    })
}

function postComment(req,res,next) {
  const {article_id} = req.params
  const newComment = req.body
  Promise.all([insertComment(article_id, newComment), checkExists("articles", "article_id", article_id)])
    .then(([comment])=>{
      res.status(201).send({comment})
    })
    .catch((err)=>{
      next(err)
    })
}

function deleteComment(req,res,next) {
  const {comment_id} = req.params
  removeComment(comment_id)
    .then(()=>{
      res.status(204).send()
    })
    .catch((err)=>{
      next(err)
    })
}

function patchComment(req,res,next) {
  const {comment_id} = req.params
  const {inc_votes} = req.body
  updateComment(comment_id, inc_votes)
    .then((comment)=>{
      res.status(200).send({comment})
    })
    .catch((err)=>{
      next(err)
    })
}


module.exports = {getCommentsByArticle, postComment, deleteComment, patchComment}


