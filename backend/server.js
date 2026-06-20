const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Middlewares
app.use(express.json()); // JSON data parse karne ke liye
app.use(express.urlencoded({ extended: true })); // Form data parse karne ke liye

// 2. Local MongoDB Connection URL
// 'mydatabase' ki jagah aap apne database ka naam rakh sakte hain
const mongoURI = 'mongodb://localhost:27017/mydatabase'; 

mongoose.connect(mongoURI)
  .then(() => console.log('✅ Local MongoDB se connection kamyab raha!'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// 3. Sample Route (Test karne ke liye)
app.get('/', (req, res) => {
  res.send('API running successfully with MongoDB!');
});

// 4. Server Start
app.listen(PORT, () => {
  console.log(`🚀 Server http://localhost:${PORT} par chal raha hai`);
});
