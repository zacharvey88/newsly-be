const { findUsers } = require("../models/users");

function getUsers(req,res,next) {
  findUsers()
  .then((users)=>{
    res.status(200).send({users})
  })
  .catch((err)=>{
    next(err)
  })
}

module.exports = {getUsers}