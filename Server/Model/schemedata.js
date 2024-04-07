const mongoose = require("mongoose");

const schemadata=mongoose.Schema({
    user:{
       type:String,
       required: true
    },
    counselor:{
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
const userModel=mongoose.model("Appointment Data",schemadata);

module.exports = userModel;