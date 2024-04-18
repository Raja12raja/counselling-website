const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    googleId:String,
    displayName:String,
    email:String,
    image:String,
    role:{
        type:String,
        default:"Client"
    }
},{timestamps:true});


const userdb = new mongoose.model("UserCredentials",userSchema);

module.exports = userdb; 