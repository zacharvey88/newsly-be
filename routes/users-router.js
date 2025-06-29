const usersRouter = require('express').Router();
const {getUser, getUsers, patchUser, deleteUser, login} = require("../controllers/users")
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

usersRouter
  .route('/login')
  .post(login)

module.exports = usersRouter;