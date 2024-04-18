const usersRouter = require('express').Router();
const {getUser, getUsers} = require("../controllers/users")

usersRouter
  .route('/')
  .get(getUsers)

usersRouter
  .route('/:username')
  .get(getUser)

module.exports = usersRouter;