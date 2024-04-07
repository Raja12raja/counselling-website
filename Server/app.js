require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cron = require('node-cron');
const bodyParser = require('body-parser');
require("./db/connection");
const PORT = 6005;
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userdb = require("./Model/userschema");
const userModel = require("./Model/schemedata");
const calendarData = require("./Model/availabilitySchema");
const Counselor = require("./Model/counselorSchema");
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
  successRedirect:"http://localhost:3000/appointment", //TO DO : change the redirect url
  failureRedirect:"http://localhost:3000/error"
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

// app.get('/',async(req,res)=>{
//   const data= await userModel.find({});
//   res.json({success:true,msg: "server is running",data:data});
// })

app.get('/counselor/appointments', async (req, res) => {
  const appointmentData = await userModel.find({});
  try {
    res.status(200).json(appointmentData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/counselor/appointments/:counselorName', async (req, res) => {
  const { counselorName } = req.params;
  const appointmentData = await userModel.find({counselor: counselorName });
  try {
    res.status(200).json(appointmentData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}); 

// app.post("/create",async(req,res)=>{
//   console.log(req.body);
//   const data=new userModel(req.body);
//   await data.save()
//   res.send({success:true,msg: "date saved"});
// })

// app.put("/update",async(req,res)=>{
//   console.log(req.body);
//   const {id,...rest}=req.body
//   console.log(rest)
  
//   const data=await userModel.updateOne({_id:id},rest);
//   res.send({success:true,msg:"data updated", data:data})
// })

app.post('/counselor/appointments', async (req, res) => {
  try {
    const { user, counselor, date, time, status } = req.body;
    const AppointmentData = new userModel({ user, counselor, date, time, status });
    await AppointmentData.save();
    res.status(201).json({success: true, message: "Date saved", data: AppointmentData});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/counselor/appointments', async (req, res) => {
  try {
    const { user, counselor, date, time, status } = req.body;
    const existingData = await userModel.findOne({ user, counselor, date, time });
    if (!existingData) {
      return res.status(404).json({ message: "Status not found for the specified user and counselor" });
    }
    existingData.status = status;
    await existingData.save();
    res.status(200).json({ success: true, msg: "Data updated", data: existingData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




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

app.get('/availability', async (req, res) => {
  const calendardata = await calendarData.find({});
  try {
    res.status(200).json(calendardata);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/availability/:counselorName', async (req, res) => {
  const { counselorName } = req.params;
  const calendardata = await calendarData.find({ counselorName });
  try {
    res.status(200).json(calendardata);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/availability', async (req, res) => {
  try {
    const { counselorName, date, status } = req.body;
    const availability = new calendarData({ counselorName, date, status });
    await availability.save();
    res.status(201).json({success: true, message: "Date saved", data: availability});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/availability', async (req, res) => {
  try {
    const { counselorName, date, status } = req.body;
    const existingAvailability = await calendarData.findOne({ counselorName, date });
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

const removeOutdatedData = async () => {
  try {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    
    // Check if the current time is after 12:10 AM
    if (currentHour > 0 || (currentHour === 0 && currentMinute >= 10)) {
      const currentDateStr = currentDate.toISOString().split('T')[0];
      
      await calendarData.deleteMany({ date: { $lt: currentDateStr } });
      console.log('Outdated data removed successfully.');
    } else {
      console.log('Cleanup skipped because it\'s before 12:10 AM.');
    }
  } catch (error) {
    console.error('Error removing outdated data:', error);
  }
};


cron.schedule('10 0 * * *', async () => {
  removeOutdatedData();
});

app.get('/api/counselors', async (req, res) => {
  try {
    const counselors = await Counselor.find();
    res.json(counselors);
  } catch (err) {
    console.error('Error fetching counselors:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/counselors/:id', async (req, res) => {
  try {
    const counselor = await Counselor.findById(req.params.id);
    res.json(counselor);
  } catch (err) {
    console.error('Error fetching counselor details:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// const marchDates = []; // Array to hold March dates

// Loop through each day of March
// async function processData() {
//   for (let day = 1; day <= 31; day=day+2) {
//     const date = `2024-03-${day < 10 ? '0' + day : day}`;
//     const status = "available";

//     try {
//       // Check if the record exists
//       const existingData = await calendarData.findOne({ date: date, counselorName: "Raja Thakur"});

//       if (existingData) {
//         // If the record exists, update its status
//         existingData.status = status;
//         await existingData.save();
//       } else {
//         // If the record doesn't exist, create a new one
//         const newData = new calendarData({
//             counselorName: "Raja Thakur",
//           date: date,
//           status: status,
//         });
//         await newData.save();
//       }
//     } catch (error) {
//       console.error("Error processing data:", error);
//     }
//   }

//   console.log("Data processed successfully!");
// }

// processData();

// async function addCounselors() {
//   try {
//     // Check if counselors already exist in the database
//     const existingCounselors = await Counselor.find();
//     if (existingCounselors.length === 0) {
//       // Insert counselor data into the database
//       await Counselor.insertMany([
//         {
//           img: "https://images.pexels.com/photos/4101144/pexels-photo-4101144.jpeg?auto=compress&cs=tinysrgb&w=600",
//           name: "Deepesh Bansal",
//           education: "professor",
//           address: "iit indore",
//           email: "me220003023@iiti.ac.in",
//           phone: "934244244",
//           counsellingType : "Community Counseling",
//           credentials : "Ph.D. in Community Counseling",
//           Description : "Dr. monika is a compassionate Community Counselor with extensive experience in supporting individuals and communities. They provide a safe and non-judgmental space for clients to address mental health concerns and work towards positive change. With expertise in various counseling approaches, Dr. monika empowers clients to gain insights, develop coping skills, and achieve emotional well-being."
//         },
//         {
//           img: "https://images.pexels.com/photos/4098150/pexels-photo-4098150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//           name: "Raja Thakur",
//           education: "professor",
//           address: "iit indore",
//           email: "mems220005041@iiti.ac.in",
//           phone: "934244244",
//           counsellingType : "Community Counseling",
//           credentials : "Ph.D. in Community Counseling",
//           Description : "Dr. monika is a compassionate Community Counselor with extensive experience in supporting individuals and communities. They provide a safe and non-judgmental space for clients to address mental health concerns and work towards positive change. With expertise in various counseling approaches, Dr. monika empowers clients to gain insights, develop coping skills, and achieve emotional well-being."
//         },
//         {
//           img: "https://images.pexels.com/photos/4098150/pexels-photo-4098150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//           name: "test3",
//           education: "professor",
//           address: "iit indore",
//           email: "test3@gmail.com",
//           phone: "934244244",
//           counsellingType : "Community Counseling",
//           credentials : "Ph.D. in Community Counseling",
//           Description : "Dr. monika is a compassionate Community Counselor with extensive experience in supporting individuals and communities. They provide a safe and non-judgmental space for clients to address mental health concerns and work towards positive change. With expertise in various counseling approaches, Dr. monika empowers clients to gain insights, develop coping skills, and achieve emotional well-being."
//         },
//         {
//           img: "https://images.pexels.com/photos/4098150/pexels-photo-4098150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//           name: "test4",
//           education: "professor",
//           address: "iit indore",
//           email: "test4@gmail.com",
//           phone: "934244244",
//           counsellingType : "Community Counseling",
//           credentials : "Ph.D. in Community Counseling",
//           Description : "Dr. monika is a compassionate Community Counselor with extensive experience in supporting individuals and communities. They provide a safe and non-judgmental space for clients to address mental health concerns and work towards positive change. With expertise in various counseling approaches, Dr. monika empowers clients to gain insights, develop coping skills, and achieve emotional well-being."

//         }
//       ]);
//       console.log('Counselors seeded successfully');
//     }
//   } catch (err) {
//     console.error('Error seeding counselors:', err);
//   }
// }

// addCounselors();