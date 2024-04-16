const db = require("../db/connection");

function findTopics(){
  return db.query(`SELECT * FROM topics`)
  .then(({rows})=>{
    return rows
  })
}

module.exports = {findTopics}