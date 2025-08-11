const express = require('express');
const Counselor = require('../Model/counselorSchema');
const router = express.Router();

// Get all counselors
router.get('/', async (req, res) => {
  try {
    const counselors = await Counselor.find();
    res.json(counselors);
  } catch (err) {
    console.error('Error fetching counselors:', err);
    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
});

// Get counselor by ID
router.get('/:id', async (req, res) => {
  try {
    const counselor = await Counselor.findById(req.params.id);
    
    if (!counselor) {
      return res.status(404).json({ 
        error: 'Counselor not found' 
      });
    }
    
    res.json(counselor);
  } catch (err) {
    console.error('Error fetching counselor details:', err);
    res.status(500).json({ 
      error: 'Internal Server Error' 
    });
  }
});

module.exports = router;
