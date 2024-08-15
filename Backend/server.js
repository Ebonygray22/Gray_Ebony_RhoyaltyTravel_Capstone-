const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(express.json());
app.use(cors());

// Set the strictQuery option for Mongoose
mongoose.set('strictQuery', true); // or false, based on your preference

// MongoDB connection
mongoose.connect('mongodb+srv://ebonygray1922:<SgRHO1922>@cluster0.atfixfe.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import routes
const flightRoutes = require('./routes/flightRoutes');
app.use('/api/flights', flightRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
