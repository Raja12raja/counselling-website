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


const userdb = new mongoose.model("CounsellingWebsite",userSchema);

module.exports = userdb; 