const db = require('../db/connection')

function findArticles() {
  return db.query(`
  SELECT 
    articles.article_id, 
    title,
    articles.author,
    topic,
    articles.votes,
    TO_CHAR(articles.created_at, 'YYYY-MM-DD HH:MM') AS created_at, 
    CAST(COUNT(comment_id) AS INT) AS comment_count,
    article_img_url 
  FROM articles 
  LEFT JOIN comments ON comments.article_id = articles.article_id 
  GROUP BY articles.article_id 
  ORDER BY TO_CHAR(articles.created_at, 'YYYY-MM-DD HH:MM') DESC 
  `)
}


function findArticle(article_id) {
  return db.query(`
    SELECT 
      article_id, 
      title, 
      topic, 
      author, 
      body, 
      votes, 
      article_img_url, 
      TO_CHAR(created_at, 'YYYY-MM-DD HH:MM') AS created_at
    FROM articles
    WHERE article_id = $1
    `, [article_id])
  .then(({rows: article})=>{
    if(article.length === 0) {
      return Promise.reject({status: 404, msg: "article_id not found"})
    }
    return article
  })
}


function checkArticleExists(article_id) {
  return db.query(`
    SELECT * 
    FROM articles 
    WHERE article_id = $1`, [article_id])
  .then(({rows: articles})=>{
    if(articles.length === 0) {
      return Promise.reject({status: 404, msg: "article_id not found"})
    }
  })
}

module.exports = {findArticle, findArticles, checkArticleExists}