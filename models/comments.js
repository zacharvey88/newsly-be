const db = require('../db/connection')

function selectCommentsByArticle(article_id) {
  return db.query(`
    SELECT
      comment_id,
      author,
      votes,
      article_id,
      TO_CHAR(comments.created_at, 'YYYY-MM-DD HH:MM:SS') AS created_at,
      body
    FROM comments
    WHERE article_id = $1
    ORDER BY TO_CHAR(comments.created_at, 'YYYY-MM-DD HH:MM:SS') DESC
  `, [article_id])
  .then(({rows})=>{
    return rows
  })
}

function insertComment(article_id, newComment) {
  return db.query(`
    INSERT INTO comments (author, body, article_id)
    VALUES ($1, $2, $3)
    RETURNING 
      comment_id,
      article_id,
      author,
      body,
      TO_CHAR(comments.created_at, 'YYYY-MM-DD HH:MM:SS') AS created_at,
      votes
  `, [newComment.username, newComment.body, article_id])
  .then(({rows})=>{
    return rows[0]
  })
}

function removeComment(comment_id) {
  return db.query(`
    DELETE FROM comments
    WHERE comment_id=$1
    RETURNING *
  `, [comment_id])
  .then(({rows})=>{
    if(rows.length === 0) {
      return Promise.reject({status: 404, msg: "Not found"})
    }
  })
}

function updateComment(comment_id, inc_votes) {
  if(!inc_votes) {
    return Promise.reject({status: 400, msg: "Bad request"})
  }
  return db.query(`
    UPDATE comments
    SET votes=$2
    WHERE comment_id=$1
    RETURNING 
      comment_id,
      body,
      votes,
      author,
      article_id,
      TO_CHAR(created_at, 'YYYY-MM-DD HH:MM:SS') AS created_at
  `, [comment_id, inc_votes])
  .then(({rows})=>{
    if(rows.length === 0) {
      return Promise.reject({status: 404, msg: "Not found"})
    }
    return rows[0]
  })
}


module.exports = {selectCommentsByArticle, insertComment, removeComment, updateComment}