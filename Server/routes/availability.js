const express = require('express');
const calendarData = require('../Model/availabilitySchema');
const router = express.Router();

// Get all availability data
router.get('/', async (req, res) => {
  try {
    const availabilityData = await calendarData.find({});
    res.status(200).json(availabilityData);
  } catch (error) {
    res.status(500).json({ 
      error: error.message 
    });
  }
});

// Get availability by counselor name
router.get('/:counselorName', async (req, res) => {
  try {
    const { counselorName } = req.params;
    const availabilityData = await calendarData.find({ 
      counselorName 
    });
    res.status(200).json(availabilityData);
  } catch (error) {
    res.status(500).json({ 
      error: error.message 
    });
  }
});

// Create new availability
router.post('/', async (req, res) => {
  try {
    const { counselorName, date, status } = req.body;
    
    // Validate required fields
    if (!counselorName || !date || !status) {
      return res.status(400).json({ 
        error: "Missing required fields" 
      });
    }

    const availability = new calendarData({ 
      counselorName, 
      date, 
      status 
    });
    
    await availability.save();
    res.status(201).json({
      success: true, 
      message: "Availability created successfully", 
      data: availability
    });
  } catch (error) {
    res.status(500).json({ 
      error: error.message 
    });
  }
});

// Update availability
router.put('/', async (req, res) => {
  try {
    const { counselorName, date, status } = req.body;
    
    // Validate required fields
    if (!counselorName || !date || !status) {
      return res.status(400).json({ 
        error: "Missing required fields" 
      });
    }

    const existingAvailability = await calendarData.findOne({ 
      counselorName, 
      date 
    });
    
    if (!existingAvailability) {
      return res.status(404).json({ 
        message: "Availability not found for the specified counselor and date" 
      });
    }
    
    existingAvailability.status = status;
    await existingAvailability.save();
    
    res.status(200).json({ 
      success: true, 
      message: "Availability updated successfully", 
      data: existingAvailability 
    });
  } catch (error) {
    res.status(500).json({ 
      error: error.message 
    });
  }
});

module.exports = router;
