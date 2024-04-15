const {findTopics} = require('../models/topics')

function getTopics (req,res,next) {
  return findTopics().then(({rows})=>{
    const topics = rows
    res.status(200).send(topics)
  })
  .catch((err)=>{
    next(err)
  })
}


module.exports = {getTopics}