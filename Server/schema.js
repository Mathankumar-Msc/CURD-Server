const mongoose = require('mongoose')

const dataschema = new mongoose.Schema({
  Name:String,
  Email:String,
  Password:String,
    
})
module.exports=mongoose.model('User',dataschema)