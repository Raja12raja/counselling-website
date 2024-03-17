const express = require("express");
const cors=require('cors');
const mongoose=require('mongoose');

const app=express();
app.use(express.json());
app.use(cors());
const PORT=process.env.PORT || 8080;

mongoose.connect("mongodb://127.0.0.1:27017/counsellers")
.then(()=>console.log("connect to db"))
.catch((err)=>console.log(err));

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

app.get('/',async(req,res)=>{
    const data= await userModel.find({});
    res.json({success:true,msg: "server is running",data:data});
})

app.post("/create",async(req,res)=>{
   console.log(req.body);
   const data=new userModel(req.body);
   await data.save()
   res.send({success:true,msg: "date saved"});
})

app.put("/update",async(req,res)=>{
    console.log(req.body);
    const {id,...rest}=req.body
    console.log(rest)
    
    const data=await userModel.updateOne({_id:id},rest);
    res.send({success:true,msg:"data updated", data:data})
})
app.listen(PORT,()=>{
    console.log("ok");
}) 