const express = require('express');
const connectToDatabase = require('./db'); // ہماری db.js
const giftRoutes = require('./giftRoutes'); // Q5 والی
const searchRoutes = require('./searchRoutes');//والی

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes connect کرنا
app.use('/', giftRoutes);    // /api/gifts اور /api/gifts/:id
app.use('/', searchRoutes);  // /api/search - یہ والی Q7 مانگ رہا ہے

// Server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
