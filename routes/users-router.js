const usersRouter = require('express').Router();
const {getUser, getUsers, patchUser, deleteUser} = require("../controllers/users")

usersRouter
  .route('/')
  .get(getUsers)

usersRouter
  .route('/:username')
  .get(getUser)
  .patch(patchUser)
  .delete(deleteUser)

module.exports = usersRouter;