const mongoose  = require('mongoose')
// Define mongoose Schema
const Detail = new mongoose.Schema({
    brandName:String,
    brandIconUrl:String,
    links:[
        {
            label:String,
            url:String
        }
    ]
  });

// Schema to model
// const contact = mongoose.model('detail',Detail);
module.exports = mongoose.model('detail',Detail);
