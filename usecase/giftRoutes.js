const express = require('express');
const { ObjectId } = require('mongodb');
const connectToDatabase = require('./db'); // ہماری db.js فائل

const router = express.Router();

// GET /api/gifts - سارے gifts لانا
router.get('/api/gifts', async (req, res) => {
  try {
    const db = await connectToDatabase(); // connectToDatabase() method use ہوا
    const gifts = await db.collection('inserted_items').find().toArray();
    res.json(gifts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/gifts/:id - ایک gift ID سے لانا  
router.get('/api/gifts/:id', async (req, res) => {
  try {
    const db = await connectToDatabase(); // connectToDatabase() method use ہوا
    const gift = await db.collection('inserted_items').findOne({ 
      _id: new ObjectId(req.params.id) 
    });
    
    if (!gift) {
      return res.status(404).json({ message: "Gift not found" });
    }
    res.json(gift);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
