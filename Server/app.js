require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
require("./db/connection");
const PORT = 6005;
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userdb = require("./Model/userschema");
const userModel = require("./Model/schemedata");
const calendarData = require("./Model/availabilitySchema");
const clientId = process.env.CLIENTID;
const clientSecret = process.env.CLIENTSECRET;


app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
methods: 'GET, POST, PUT, DELETE',
credentials:true
}));
app.use(express.json()); 
app.use(bodyParser.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave:false,
  saveUninitialized:true
}))

// setuppassport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new OAuth2Strategy({
      clientID: clientId,
      clientSecret:clientSecret,
      callbackURL:"/auth/google/callback",
      scope:["profile","email"] 
  },
  async(accessToken,refreshToken,profile,done)=>{
      try {
          let user = await userdb.findOne({googleId:profile.id});

          if(!user){
              user = new userdb({
                  googleId:profile.id,
                  displayName:profile.displayName,
                  email:profile.emails[0].value,
                  image:profile.photos[0].value,
              });

              await user.save();
          }

          return done(null,user)
      } catch (error) {
          return done(error,null)
      }
  }
  )
)

passport.serializeUser((user,done)=>{
  done(null,user);
})

passport.deserializeUser((user,done)=>{
  done(null,user);
});

// initial google ouath login
app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

app.get("/auth/google/callback",passport.authenticate("google",{
  successRedirect:"http://localhost:3000/dashboard", //TO DO : change the redirect url
  failureRedirect:"http://localhost:3000/login"
}))

app.get("/login/sucess",async(req,res)=>{

  if(req.user){
      res.status(200).json({message:"user Login",user:req.user})
  }else{
      res.status(400).json({message:"Not Authorized"})
  }
})

app.get("/logout",(req,res,next)=>{
  req.logout(function(err){
      if(err){return next(err)}
      res.redirect("http://localhost:3000");
  })
})

app.listen(PORT,()=>{
  console.log(`server start at port no ${PORT}`)
})

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
  const {_id,...rest}=req.body
  console.log(_id)
  
  const data=await userModel.updateOne({_id:_id},rest);
  res.send({success:true,msg:"data updated", data:data})
})

// app.get('/availability/:date', async (req, res) => {
//   try {
//     const date = req.params.date;
//     const availability = await calendarData.findOne({ date });
//     if (!availability) {
//       return res.status(404).json({ message: "Availability not found for the specified date" });
//     }
//     // Return availability status
//     res.status(200).json({ [date]: availability.status });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


// app.post('/availability', async (req, res) => {
//   try {
//     const { date, status } = req.body;
//     const availability = new calendarData({ date, status });
//     await availability.save();
//     res.status(201).json(availability);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.put('/availability/:date', async (req, res) => {
//   try {
//     const date = req.params.date;
//     const { status } = req.body;
//     await calendarData.findOneAndUpdate({ date }, { status });
//     res.sendStatus(204);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// Get all availability
app.get('/availability', async (req, res) => {
  const calendardata = await calendarData.find({});
  try {
    res.status(200).json(calendardata);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create or Update availability for a specific date
app.post('/availability', async (req, res) => {
  try {
    const { date, status } = req.body;
    const availability = new calendarData({ date, status });
    await availability.save();
    res.status(201).json({success: true, message: "Date saved", data: availability});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/availability', async (req, res) => {
  try {
    const { date, status } = req.body;
    const existingAvailability = await calendarData.findOne({ date });
    if (!existingAvailability) {
      return res.status(404).json({ message: "Availability not found for the specified date" });
    }
    existingAvailability.status = status;
    await existingAvailability.save();
    res.status(200).json({ success: true, msg: "Data updated", data: existingAvailability });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
