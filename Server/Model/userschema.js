const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    googleId:String,
    displayName:String,
    email:String,
    image:String,
    role:{
        type:String,
        default:"Cilent"
    }
},{timestamps:true});


const userdb = new mongoose.model("UserCredentials",userSchema);

module.exports = userdb; 