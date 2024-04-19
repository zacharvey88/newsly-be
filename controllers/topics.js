const {selectTopics, insertTopic} = require('../models/topics')

function getTopics (req,res,next) {
  return selectTopics().then((topics)=>{
    res.status(200).send({topics})
  })
  .catch((err)=>{
    next(err)
  })
}

function postTopic(req,res,next) {
  const newTopic = req.body
  insertTopic(newTopic)
  .then((topic)=>{
    res.status(201).send({topic})
  })
  .catch((err)=>{
    next(err)
  })
}

module.exports = {getTopics, postTopic}