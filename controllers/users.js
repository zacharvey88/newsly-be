const {selectUsers, selectUser, updateUser, removeUser} = require("../models/users");

function getUsers(req,res,next) {
  selectUsers()
  .then((users)=>{
    res.status(200).send({users})
  })
  .catch((err)=>{
    next(err)
  })
}

function getUser(req,res,next) {
  const {username} = req.params
  selectUser(username)
  .then((user)=>{
    res.status(200).send({user})
  })
  .catch((err)=>{
    next(err)
  })
}

function patchUser(req,res,next) {
  const {username} = req.params
  const {name} = req.body
  updateUser(username, name)
    .then((user)=>{
      res.status(200).send({user})
    })
    .catch((err)=>{
      next(err)
    })
}

function deleteUser(req,res,next) {
  const {username} = req.params
  removeUser(username)
    .then(()=>{
      res.status(204).send()
    })
    .catch((err)=>{
      next(err)
    })
}

module.exports = {getUsers, getUser, patchUser, deleteUser}