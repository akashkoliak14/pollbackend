const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
   question:String,
   answers:String,
   selectedAnswerIndex:String,
   uniqueId:Number,
   name:String,
   email:String,
   password:Number,
    submitted:String,
    error:String,
})

module.exports = mongoose.model("user",userSchema)