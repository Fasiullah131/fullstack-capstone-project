const express = require('express');
const connectToDatabase = require('./db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

// POST /api/login
router.post('/api/login', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const { email, password } = req.body;

    // یہ والی لائن Q11 مانگ رہا ہے - findOne سے user ڈھونڈنا
    const user = await db.collection('users').findOne({ email: email }); 

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, "secretkey");
    res.json({ token });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
