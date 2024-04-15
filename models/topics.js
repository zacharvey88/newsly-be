const db = require("../db/connection");

function findTopics(){
  return db.query(`SELECT * FROM topics`)
}

module.exports = {findTopics}