const db = require('../db/connection')

function findArticle(article_id) {
  return db.query(`
    SELECT article_id, title, topic, author, body, votes, article_img_url, TO_CHAR(created_at, 'YYYY-MM-DD HH:MM') AS created_at
    FROM articles
    WHERE article_id = $1
    `,[article_id])
}

module.exports = {findArticle}