const express = require('express');
const connectToDatabase = require('./db'); // ہماری db.js فائل

const router = express.Router();

// GET /api/search?category=Laptop - category کے حساب سے filter
router.get('/api/search', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const { category } = req.query; // URL سے category لیں گے

    let query = {};
    if (category) {
      query.name = { $regex: category, $options: 'i' }; // i = case insensitive
    }

    const results = await db.collection('inserted_items').find(query).toArray();
    
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
