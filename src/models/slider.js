const mongoose = require('mongoose')


// Define mongoose Schema
const Slider = new mongoose.Schema({
    title:String,
    subtitle:String,
    imgUrl:String,
    class:String
});

module.exports = mongoose.model('slider',Slider)

