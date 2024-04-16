const db = require('../db/connection')

// Unused function, but waiting for feedback as to whether this would be a better approach

function checkUserExists(username) {
  return db.query(`
    SELECT * 
    FROM users 
    WHERE username = $1`, [username])
  .then(({rows: articles})=>{
    if(articles.length === 0) {
      return Promise.reject({status: 404, msg: "username not found"})
    }
  })
}

module.exports = {checkUserExists}