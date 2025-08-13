require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cron = require('node-cron');
const bodyParser = require("body-parser");
const session = require("express-session");

require("./db/connection");
require("./config/passport");

const authRoutes = require('./routes/auth');
const appointmentRoutes = require('./routes/appointments');
const availabilityRoutes = require('./routes/availability');
const counselorRoutes = require('./routes/counselors');
const { removeOutdatedData, addCounselors } = require('./utils/cleanup');
const app = express();
const PORT = process.env.PORT || 6005;

// CORS configuration for production
const allowedOrigins = [
  'http://localhost:3000',
  'https://localhost:3000',
  process.env.FRONTEND_URL,
  process.env.BACKEND_URL
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.json());
app.use(bodyParser.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/counselor/appointments', appointmentRoutes);
app.use('/availability', availabilityRoutes);
app.use('/api/counselors', counselorRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Counselling Website API',
    version: '1.0.0',
    endpoints: {
      auth: '/auth',
      appointments: '/counselor/appointments',
      availability: '/availability',
      counselors: '/api/counselors',
      health: '/health'
    }
  });
});

cron.schedule('10 0 * * *', async () => {
  removeOutdatedData();
});

addCounselors();

app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: `The requested route ${req.originalUrl} does not exist`
  });
});

app.listen(PORT, () => {
  console.log(`Server started successfully at port ${PORT}`);
  console.log(`Frontend URL: http://localhost:3000`);
  console.log(`Backend URL: http://localhost:${PORT}`);
});

module.exports = app;