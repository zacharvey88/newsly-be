const usersRouter = require('express').Router();
const {getUser, getUsers, patchUser, deleteUser} = require("../controllers/users")
const {getCommentsByUsername} = require("../controllers/comments")

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
  .get(getCommentsByUsername)

module.exports = usersRouter;