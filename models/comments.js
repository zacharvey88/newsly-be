const db = require('../db/connection')

function findCommentsByArticle(article_id) {
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

function createComment(article_id, newComment) {
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


module.exports = {findCommentsByArticle, createComment}