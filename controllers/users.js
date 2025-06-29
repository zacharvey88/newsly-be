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
  const {name, password, avatar_url} = req.body
  
  selectUser(username)
  .then((user)=>{
    const updatedName = name || user.name
    const updatedPassword = password || user.password
    const updatedAvatarUrl = avatar_url || user.avatar_url
    
    return updateUser(username, updatedName, updatedPassword, updatedAvatarUrl)
  })
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

function login(req,res,next) {
  const {username, password} = req.body
  
  // Check if username and password are provided
  if (!username || !password) {
    return res.status(400).send({msg: "Bad request"});
  }
  
  selectUser(username)
  .then((user)=>{
    if(user.password === password) {
      res.status(200).send({user})
    } else {
      res.status(400).send({msg: "Incorrect Password"});
    }
  })
  .catch((err)=>{
    next(err)
  })
}

module.exports = {getUsers, getUser, patchUser, deleteUser, login}