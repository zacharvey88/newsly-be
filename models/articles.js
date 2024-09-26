const db = require('../db/connection');
const {validateUrl} = require('../db/seeds/utils');

function selectArticles(query) {
  const greenlist = ["sort_by", "sort_dir", "topic", "author", "title", "votes", "comment_count", "asc", "desc", "created_at"]
  const queryValues = []

  for(const [key, value] of Object.entries(query)) {
    if(!greenlist.includes(key)) {
      return Promise.reject({status: 400, msg: "Bad request"})
    }
    if(key !== "sort_by" && key !== "sort_dir") {
      queryValues.push(value)
    }
  }

  let sqlQuery = `
  SELECT 
    articles.article_id, 
    title,
    articles.author,
    topic,
    articles.body,
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

  if (query.author) {
    if(!typeof query.author === "string") {
      return Promise.reject({status: 400, msg: "Bad request"})
    }
    sqlQuery += ` WHERE author=$1`
  }

  sqlQuery += ` GROUP BY articles.article_id`
    
  if (query.sort_by) {
    if (!greenlist.includes(query.sort_by)) {
      return Promise.reject({status: 400, msg: "Bad request"})
    }
    if(query.sort_dir) {
      if (!greenlist.includes(query.sort_dir)) {
        return Promise.reject({status: 400, msg: "Bad request"})
      }
    sqlQuery += ` ORDER BY ${query.sort_by} ${query.sort_dir}`
    } 
    else {
      sqlQuery += ` ORDER BY ${query.sort_by} DESC`
    }
  }
  else {
    sqlQuery += ` ORDER BY TO_CHAR(articles.created_at, 'YYYY-MM-DD HH:MM:SS') DESC`
  }


  return db.query(sqlQuery, queryValues)
  .then(({rows})=>{
    if(rows.length === 0) {
      return Promise.reject({status: 404, msg: "Not found"})
    }
    return rows
  })
}


function selectArticle(article_id) {
  return db.query(`
    SELECT 
      articles.article_id, 
      title, 
      topic, 
      articles.author, 
      articles.body, 
      articles.votes, 
      article_img_url, 
      TO_CHAR(articles.created_at, 'YYYY-MM-DD HH:MM:SS') AS created_at,
      CAST(COUNT(comment_id) AS INT) AS comment_count
    FROM articles
    LEFT JOIN comments ON comments.article_id = articles.article_id
    WHERE articles.article_id = $1
    GROUP BY articles.article_id
    `, [article_id])
  .then(({rows})=>{
    if(rows.length === 0) {
      return Promise.reject({status: 404, msg: "Not found"})
    }
    return rows[0]
  })
}

function updateArticle(article_id, inc_votes) {
  if(!inc_votes) {
    return Promise.reject({status: 400, msg: "Bad request"})
  }
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
    if(rows.length === 0) {
      return Promise.reject({status: 404, msg: "Not found"})
    }
    return rows[0]
  })
}

function insertArticle(newArticle) {
  let sqlQuery = ""
  let queryValues = []

  if (!newArticle.article_img_url) {
    sqlQuery += "INSERT INTO articles (title, author, body, topic) VALUES ($1, $2, $3, $4) RETURNING article_id"
    queryValues.push(newArticle.title, newArticle.author, newArticle.body, newArticle.topic)
  }
  else {
    const article_img_url = validateUrl(newArticle.article_img_url)
    sqlQuery += "INSERT INTO articles (title, author, body, topic, article_img_url) VALUES ($1, $2, $3, $4, $5) RETURNING article_id"
    queryValues.push(newArticle.title, newArticle.author, newArticle.body, newArticle.topic, article_img_url)
  }

  return db.query(sqlQuery, queryValues)
  .then(({rows})=>{
    const {article_id} = rows[0]
    return db.query(`
    SELECT 
      articles.article_id, 
      title, 
      topic, 
      articles.author, 
      articles.body, 
      articles.votes, 
      article_img_url, 
      TO_CHAR(articles.created_at, 'YYYY-MM-DD HH:MM:SS') AS created_at,
      CAST(COUNT(comment_id) AS INT) AS comment_count
    FROM articles
    LEFT JOIN comments ON comments.article_id = articles.article_id
    WHERE articles.article_id = $1
    GROUP BY articles.article_id`, [article_id])
  })
  .then(({rows})=>{
    return rows[0]
  })
}

function removeArticle(article_id) {
  return db.query(`
    DELETE FROM articles
    WHERE article_id=$1
      returning *`, [article_id])
  .then(({rows})=>{
    if(rows.length === 0) {
      return Promise.reject({status: 404, msg: "Not found"})
    }
  })
}

module.exports = {selectArticle, selectArticles, updateArticle, insertArticle, removeArticle}