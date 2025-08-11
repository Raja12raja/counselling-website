const express = require('express');
const userModel = require('../Model/schemedata');
const router = express.Router();

// Get all appointments
router.get('/', async (req, res) => {
  try {
    const appointmentData = await userModel.find({});
    res.status(200).json(appointmentData);
  } catch (error) {
    res.status(500).json({ 
      error: error.message 
    });
  }
});

// Get appointments by counselor name
router.get('/:counselorName', async (req, res) => {
  try {
    const { counselorName } = req.params;
    const appointmentData = await userModel.find({ 
      counselor: counselorName 
    });
    res.status(200).json(appointmentData);
  } catch (error) {
    res.status(500).json({ 
      error: error.message 
    });
  }
});

// Create new appointment
router.post('/', async (req, res) => {
  try {
    const { user, counselor, date, time, status, counselorEmail } = req.body;
    
    // Validate required fields
    if (!user || !counselor || !date || !time) {
      return res.status(400).json({ 
        error: "Missing required fields" 
      });
    }

    const appointmentData = new userModel({ 
      user, 
      counselor, 
      date, 
      time, 
      status, 
      counselorEmail 
    });
    
    await appointmentData.save();
    res.status(201).json({
      success: true, 
      message: "Appointment created successfully", 
      data: appointmentData
    });
  } catch (error) {
    res.status(500).json({ 
      error: error.message 
    });
  }
});

// Update appointment status
router.put('/', async (req, res) => {
  try {
    const { user, counselor, date, time, status } = req.body;
    
    // Validate required fields
    if (!user || !counselor || !date || !time || !status) {
      return res.status(400).json({ 
        error: "Missing required fields" 
      });
    }

    const existingData = await userModel.findOne({ 
      user, 
      counselor, 
      date, 
      time 
    });
    
    if (!existingData) {
      return res.status(404).json({ 
        message: "Appointment not found for the specified criteria" 
      });
    }
    
    existingData.status = status;
    await existingData.save();
    
    res.status(200).json({ 
      success: true, 
      message: "Appointment updated successfully", 
      data: existingData 
    });
  } catch (error) {
    res.status(500).json({ 
      error: error.message 
    });
  }
});

module.exports = router;
