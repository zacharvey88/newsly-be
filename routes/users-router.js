const usersRouter = require('express').Router();
const {getUser, getUsers, patchUser, deleteUser} = require("../controllers/users")
const {getComments} = require("../controllers/comments")

usersRouter
  .route('/')
  .get(getUsers)

usersRouter
  .route('/:username')
  .get(getUser)
  .patch(patchUser)
  .delete(deleteUser)

  usersRouter
  .route('/:username/comments')
  .get(getComments)

module.exports = usersRouter;