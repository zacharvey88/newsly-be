const {findTopics} = require('../models/topics')

function getTopics (req,res,next) {
  return findTopics().then((topics)=>{
    res.status(200).send({topics})
  })
  .catch((err)=>{
    next(err)
  })
}


module.exports = {getTopics}