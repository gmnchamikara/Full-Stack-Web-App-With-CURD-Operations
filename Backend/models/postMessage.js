const mongoose = require('mongoose')

var PostMessage = mongoose.model('PostMessage',
{
    title : {type:String},
    Ingredients : {type:String},
    Description : {type:String},
},'postMessages')

module.exports = { PostMessage}