const express = require('express');
const passport = require('passport');
const userdb = require('../Model/userschema');
const router = express.Router();

// Initial Google OAuth login
router.get("/google", passport.authenticate("google", { 
  scope: ["profile", "email"] 
}));

// Google OAuth callback
router.get("/google/callback", passport.authenticate("google", {
  successRedirect: "http://localhost:3000/appointment",
  failureRedirect: "http://localhost:3000/error"
}));


// Login success endpoint
router.get("/login/success", async (req, res) => {
  try {
    if (req.user) {
      res.status(200).json({ 
        message: "User Login", 
        user: req.user 
      });
    } else {
      res.status(400).json({ 
        message: "Not Authorized" 
      });
    }
  } catch (error) {
    res.status(500).json({ 
      error: "Internal server error" 
    });
  }
});

// Logout endpoint
router.get("/logout", (req, res, next) => {
  req.logout(function(err) {
    if (err) { 
      return next(err); 
    }
    res.redirect("http://localhost:3000");
  });
});

module.exports = router;
