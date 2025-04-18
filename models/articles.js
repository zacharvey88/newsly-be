const db = require('../db/connection');
const {validateUrl} = require('../db/seeds/utils');

function getTotalArticles() {
  return db.query(`SELECT COUNT(article_id) AS total_count FROM articles`)
    .then(({ rows }) => {
      if (rows.length === 0) {
        return Promise.reject({ status: 404, msg: "Not found" });
      }
      return Number(rows[0].total_count);
    });
}


function selectArticles(query) {
  const greenlist = ["sort_by", "sort_dir", "topic", "author", "title", "votes", "comment_count", "asc", "desc", "created_at", "limit", "offset", "search"];
  const queryValues = [];

  for (const [key, value] of Object.entries(query)) {
    if (!greenlist.includes(key)) {
      return Promise.reject({ status: 400, msg: "Bad request" });
    }
    if (["topic", "author", "search"].includes(key) && typeof value !== "string") {
      return Promise.reject({ status: 400, msg: "Bad request" });
    }
    if (["limit", "offset"].includes(key) && (isNaN(value) || value < 0)) {
      return Promise.reject({ status: 400, msg: "Bad request" });
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
    LEFT JOIN comments ON comments.article_id = articles.article_id`;

  const conditions = [];
  
  if (query.topic) {
    conditions.push(`topic = $${queryValues.length + 1}`);
    queryValues.push(query.topic);
  }

  if (query.author) {
    conditions.push(`articles.author = $${queryValues.length + 1}`);
    queryValues.push(query.author);
  }

  if (query.search) {
    conditions.push(`(title ILIKE $${queryValues.length + 1} OR articles.body ILIKE $${queryValues.length + 1})`);
    queryValues.push(`%${query.search}%`);
  }

  if (conditions.length) {
    sqlQuery += ` WHERE ${conditions.join(" AND ")}`;
  }

  sqlQuery += ` GROUP BY articles.article_id`;

  if (query.sort_by) {
    if (!greenlist.includes(query.sort_by)) {
      return Promise.reject({ status: 400, msg: "Bad request" });
    }
    sqlQuery += ` ORDER BY ${query.sort_by}`;
    
    if (query.sort_dir) {
      if (!greenlist.includes(query.sort_dir)) {
        return Promise.reject({ status: 400, msg: "Bad request" });
      }
      sqlQuery += ` ${query.sort_dir}`;
    } else {
      sqlQuery += ` DESC`; 
    }
  } else {
    sqlQuery += ` ORDER BY TO_CHAR(articles.created_at, 'YYYY-MM-DD HH:MM:SS') DESC`; 
  }

  if (query.limit) sqlQuery += ` LIMIT ${query.limit}`;
  if (query.offset) sqlQuery += ` OFFSET ${query.offset}`;

  return db.query(sqlQuery, queryValues)
    .then(({ rows }) => rows.length ? rows : Promise.reject({ status: 404, msg: "Not found" }));
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

module.exports = {selectArticle, selectArticles, updateArticle, insertArticle, removeArticle, getTotalArticles}