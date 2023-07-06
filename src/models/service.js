const mongoose = require('mongoose')


// Define mongoose Schema
const Services = new mongoose.Schema({
    title:String,
    icon:String,
    description:String,
    linkText:String,
    link:String
});

module.exports = mongoose.model('services',Services)

