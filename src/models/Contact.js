const mongoose = require('mongoose')

const Contact = new mongoose.Schema({
    email:String,
    phone:String,
    query:String
})

module.exports= mongoose.model('queries',Contact)  // First Argument model name and second argument Schema name
