const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  date: { type: String, required: true },
  airline: { type: String, required: true },
  price: { type: Number, required: true },
  logo: { type: String, required: true }
}, {
  timestamps: true,
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
