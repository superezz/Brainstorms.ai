import express from 'express';
import dotenv from 'dotenv';
import connectDb from './utils/connectDb.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Intelligent Notes' });
});

app.listen(PORT,()=>{
  console.log(`✅ Server running on port ${PORT}`)
  connectDb() // ✅ important
});