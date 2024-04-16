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

module.exports = {findCommentsByArticle}