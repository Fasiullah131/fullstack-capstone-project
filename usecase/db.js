const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017"; 
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();  // یہ والی لائن Q4 کے لیے ضروری ہے
    console.log("Connected to MongoDB");
    const db = client.db("capstoneDB");
    return db;
  } catch (err) {
    console.error(err);
  }
}

module.exports = connectDB;
