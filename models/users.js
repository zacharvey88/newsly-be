const db = require('../db/connection')

function selectUsers() {
  return db.query(`
    SELECT username, name, avatar_url 
    FROM users`)
  .then(({rows})=>{
    return rows
  })
}

function selectUser(username) {
  return db.query(`
    SELECT username, name, avatar_url 
    FROM users 
    WHERE username = $1`, [username])
  .then(({rows})=>{
    if(rows.length === 0) {
      return Promise.reject({status: 404, msg: "Not found"})
    }
    return rows[0]
  })
}

function updateUser(username, name) {
  return db.query(`
    UPDATE users
    SET name=$2
    WHERE username=$1
    RETURNING *
  `, [username, name])
  .then(({rows})=>{
    if(rows.length === 0) {
      return Promise.reject({status: 404, msg: "Not found"})
    }
    return rows[0]
  })
}

function removeUser(username) {
  return db.query(`
    DELETE FROM users
    WHERE username=$1
    RETURNING *
  `, [username])
  .then(({rows})=>{
    if(rows.length === 0) {
      return Promise.reject({status: 404, msg: "Not found"})
    }
  })
}

module.exports = {selectUsers, selectUser, updateUser, removeUser}