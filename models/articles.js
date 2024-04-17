const db = require('../db/connection')

function findArticles(query) {
  const greenlist = ["topic"]
  const queryParams = []

  for(const [key, value] of Object.entries(query)) {
    if(!greenlist.includes(key)){
      return Promise.reject({status: 400, msg: "Bad request"})
    }
    queryParams.push(value)
  }

  let sqlQuery = `
  SELECT 
    articles.article_id, 
    title,
    articles.author,
    topic,
    articles.votes,
    TO_CHAR(articles.created_at, 'YYYY-MM-DD HH:MM:SS') AS created_at, 
    CAST(COUNT(comment_id) AS INT) AS comment_count,
    article_img_url 
  FROM articles 
  LEFT JOIN comments ON comments.article_id = articles.article_id`

  if (query.topic) {
    if(!typeof query.topic === "string") {
      return Promise.reject({status: 400, msg: "Bad request"})
    }
    sqlQuery += ` WHERE topic=$1`
  }

  sqlQuery += `
    GROUP BY articles.article_id 
    ORDER BY TO_CHAR(articles.created_at, 'YYYY-MM-DD HH:MM:SS') DESC`

  return db.query(sqlQuery, queryParams)
  .then(({rows})=>{
    if(rows.length === 0) {
      return Promise.reject({status: 404, msg: "Not found"})
    }
    return rows
  })
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
      TO_CHAR(created_at, 'YYYY-MM-DD HH:MM:SS') AS created_at
    FROM articles
    WHERE article_id = $1
    `, [article_id])
  .then(({rows})=>{
    if(rows.length === 0) {
      return Promise.reject({status: 404, msg: "Not found"})
    }
    return rows[0]
  })
}

function updateArticle(article_id, inc_votes) {
  return db.query(`
    UPDATE articles
      SET votes = $2
    WHERE article_id=$1 
    RETURNING 
      article_id, 
      title, 
      topic, 
      author, 
      body, 
      votes, 
      article_img_url, 
      TO_CHAR(created_at, 'YYYY-MM-DD HH:MM:SS') AS created_at
  `, [article_id, inc_votes])
  .then(({rows})=>{
    return rows[0]
  })
}

module.exports = {findArticle, findArticles, updateArticle}