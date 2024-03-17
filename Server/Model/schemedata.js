const mongoose = require("mongoose");

const schemadata=mongoose.Schema({
    name:{
       type:String,
       required: true
    },
    date:{
       type:String,
       required: true
    },
    time:{
       type:String,
       required: true
    },
    status:{
       type:String,
       required: true
    },
},{ timestamps:true});
const userModel=mongoose.model("users",schemadata);

module.exports = userModel;